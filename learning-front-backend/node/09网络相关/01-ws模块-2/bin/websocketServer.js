
// 启动服务
const WebSocket = require("ws");
const JWT = require("../util/JWT");
const WebSocketServer = WebSocket.WebSocketServer;
const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", function connection(ws,req) {
    console.log(req.url);
    const myURL = new URL(req.url,"http://127.0.0.1:3000")
    let token = myURL.searchParams.get("token");
    // 校验token
    const payload = JWT.verify(token);
    if(payload){
       ws.send(createMessage(WebSocketType.GroupChat,null,"欢迎来到聊天室"))
    }else{
       ws.send(createMessage(WebSocketType.Error,null,"token过期"))
    }
    
    ws.on("message", function message(data) {
        console.log("received: %s", data);
        // 转发给其他人
        wss.clients.forEach(function each(client) {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(data, { binary: false });
            }
        });
    });

   
});

const WebSocketType = {
    Error:0, // 错误
    GroupList:1,    // 获取用户列表
    GroupChat:2,    // 群聊
    SingleChat:3    // 单聊
}


function createMessage(type,user,data){
    return JSON.stringify({
        type,
        user,
        data
    })
}
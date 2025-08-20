
// websocket响应

// 启动服务
const WebSocket = require("ws");
const JWT = require("../util/JWT");
const WebSocketServer = WebSocket.WebSocketServer;
const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", function connection(ws,req) {

    // 获取token
    const myURL = new URL(req.url,"http://127.0.0.1:3000")
    let token = myURL.searchParams.get("token");
    // 校验token
    const payload = JWT.verify(token);
    if(payload){
       ws.send(createMessage(WebSocketType.GroupChat,null,"欢迎来到聊天室"))

       ws.user = payload;
    }else{
       ws.send(createMessage(WebSocketType.Error,null,"token过期"))
    }
    
    ws.on("message", function message(data) {
        console.log("received: %s", data);
        // 转发给其他人

        const msgObj = JSON.parse(data)

        switch(msgObj.type){
            case WebSocketType.GroupList:        
                // 用户群发给所有人
                sendAll()

                break;
            case WebSocketType.GroupChat:
                 wss.clients.forEach(function each(client) {
                    if (client.readyState === WebSocket.OPEN) {
                        client.send(createMessage(WebSocketType.GroupChat,ws.user,msgObj.data))
                    }
                });
                break;
            case WebSocketType.SingleChat:
                wss.clients.forEach(function each(client) {
                    if (client.user.username === msgObj.to && client.readyState === WebSocket.OPEN) {
                        
                        console.log("发送给："+ client.user.username);
                        
                        client.send(createMessage(WebSocketType.SingleChat,ws.user,msgObj.data))
                    }
                });
                break;
        }
    });

    ws.on("close",()=>{
        // 删除用户
        wss.clients.delete(ws.user)
        // 群发给所有人
        sendAll()
    })
   

   
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

function sendAll(){
    let users = Array.from(wss.clients).map(item=>item.user) 
    wss.clients.forEach(function each(client) {
        if (client.readyState === WebSocket.OPEN) {
           client.send(createMessage(WebSocketType.GroupList,null,JSON.stringify(users)))
        }
    });
}
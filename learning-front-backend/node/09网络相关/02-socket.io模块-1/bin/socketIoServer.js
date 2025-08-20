const JWT = require('../util/JWT');

function start(server){
   
    const io = require('socket.io')(server);
    io.on('connection', (socket) => {

        const payload = JWT.verify(socket.handshake.query.token)
        if(payload){
            socket.user = payload
            // 发送 
            socket.emit(WebSocketType.GroupChat,createMessage(null,"欢迎来到聊天室"))
        }else{
            socket.emit(WebSocketType.Error,createMessage( socket.user,"连接错误"))
        }
    });
}


const WebSocketType = {
    Error:0, // 错误
    GroupList:1,    // 获取用户列表
    GroupChat:2,    // 群聊
    SingleChat:3    // 单聊
}


function createMessage(user,data){
    return {
        user,
        data
    }
}

function sendAll(){
  
}

module.exports = start
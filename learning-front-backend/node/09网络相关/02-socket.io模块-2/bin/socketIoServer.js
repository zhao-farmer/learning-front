const JWT = require('../util/JWT');

function start(server){
   
    const io = require('socket.io')(server);
    io.on('connection', (socket) => {
        const payload = JWT.verify(socket.handshake.query.token)
        if(payload){
            socket.user = payload
            // 发送 
            socket.emit(WebSocketType.GroupChat,createMessage(null,"欢迎来到聊天室"))
            sendAll(io)
        }else{
            socket.emit(WebSocketType.Error,createMessage( socket.user,"token过期"))
        }

        // 发送列表
        socket.on(WebSocketType.GroupList, ()=>{
            sendAll(io)
        })

        socket.on(WebSocketType.GroupChat,(msg)=>{
            // socket.emit()
            console.log(msg);
            // 给所有人发
            // io.sockets.emit(WebSocketType.GroupChat,createMessage(socket.user,msg.data))
            // 出来自己发给其他人
            socket.broadcast.emit(WebSocketType.GroupChat,createMessage(socket.user,msg.data))
        })

        socket.on(WebSocketType.SingleChat,(msgObj)=>{
            Array.from(io.sockets.sockets).forEach(item=>{
                if(item[1].user.username === msgObj.to){
                    item[1].emit(WebSocketType.SingleChat,createMessage(socket.user,msgObj.data))
                }
            })
        })

        socket.on("disconnect",()=>{
            sendAll(io)
        })
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

function sendAll(io){
    // filter(item=>item) 过滤没有刷新还是空的数据
    let userlist =  Array.from(io.sockets.sockets).map(item=>item[1].user).filter(item=>item)
    
    io.sockets.emit(WebSocketType.GroupList,createMessage(null,userlist))
}

module.exports = start
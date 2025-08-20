let express = require('express')
let server = express()

server.get('/server',(req,resp)=>{
    console.log(req.query);
    resp.send('')
})
server.listen(5050,()=>{
    console.log('服务器已就绪')
})
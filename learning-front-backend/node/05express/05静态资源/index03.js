
/* ========= 路由级别路由中间件 ========= */
const express = require('express');
const app = express();

const HomeRouter = require('./route/HomeRouter')
const LoginRouter = require('./route/LoginRouter')

// 应用级别
app.use(function(req,res,next){
    console.log('验证token');
    next()
})

// 直接写上对应的路由类型
app.use("/home",HomeRouter)
app.use("/login",LoginRouter)

// 启动服务器
app.listen(3000, () => {
    console.log(`Server start`);
});
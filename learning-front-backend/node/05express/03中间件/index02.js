
/* ========= 路由级别路由中间件 ========= */
const express = require('express');
const app = express();

const IndexRouter = require('./router/IndexRouter')

// 应用级别
app.use(function(req,res,next){
    console.log('验证token');
    next()
})

// 应用级别 -- 里面含有路由级别的中间件
// 默认放的路径下
// app.use("/",IndexRouter)
// 也可以加路径参数
app.use("/api",IndexRouter)

// 启动服务器
app.listen(3000, () => {
    console.log(`Server start`);
});
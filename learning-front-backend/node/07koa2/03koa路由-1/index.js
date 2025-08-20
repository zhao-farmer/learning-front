const koa = require("koa")
const Router = require("koa-router")
const app = new koa()
const router = new Router()


// 路由可以链式使用
router.post("/list",(ctx,next)=>{
    ctx.body={
        ok:1,
        info:"add list success"
    }
})
.get("/list",(ctx,next)=>{
    ctx.body=["1111","2222","33333"]
})
.put("/list/:id",(ctx,next)=>{
    ctx.body={
        ok:1,
        info:"put list success"
    }
})
.del("/list/:id",(ctx,next)=>{
      ctx.body={
        ok:1,
        info:"delete list success"
    }
})

router.post("/list2",(ctx,next)=>{
    ctx.body=["1111","2222","33333"]
})

// 挂载所有路由
// router.allowedMethods() 错误类型调用会返回405 如: list2按照get调用
app.use(router.routes()).use(router.allowedMethods())

app.listen(3000)
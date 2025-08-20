const Router = require("koa-router")
const router = new Router()


// 路由可以链式使用
router.post("/",(ctx,next)=>{
    ctx.body={
        ok:1,
        info:"add list success"
    }
})
.get("/",(ctx,next)=>{
    ctx.body=["1111","2222","33333"]
})
.put("/:id",(ctx,next)=>{
    ctx.body={
        ok:1,
        info:"put list success"
    }
})
.del("/:id",(ctx,next)=>{
      ctx.body={
        ok:1,
        info:"delete list success"
    }
})

module.exports = router
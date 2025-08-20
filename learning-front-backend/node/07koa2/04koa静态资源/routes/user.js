const Router = require("koa-router")
const router = new Router()


// 路由可以链式使用
router.post("/",(ctx,next)=>{
    ctx.body={
        ok:1,
        info:"add user success"
    }
})
.get("/",(ctx,next)=>{
    ctx.body=["1111","2222","33333"]
})
.put("/:id",(ctx,next)=>{
    ctx.body={
        ok:1,
        info:"put user success"
    }
})
.del("/:id",(ctx,next)=>{
      ctx.body={
        ok:1,
        info:"delete user success"
    }
})

module.exports = router
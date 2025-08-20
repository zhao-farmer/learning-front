const Router = require("koa-router")
const router = new Router()


// 路由可以链式使用
router.post("/",(ctx,next)=>{

    console.log(ctx.request.body);
    
    ctx.body={
        ok:1,
        info:"add user success"
    }
})
.get("/",(ctx,next)=>{
    // 获取前端传来的参数
    console.log(ctx.query,ctx.querystring);
    

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
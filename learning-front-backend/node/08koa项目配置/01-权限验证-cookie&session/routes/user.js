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

router.post("/login",(ctx,next)=>{
    console.log(ctx.request.body);

    const {username,password} = JSON.parse(ctx.request.body)
    console.log(username,password);
    if(username === "admin" && password === "123"){

        ctx.session.user = {
            username : "kerwin"
        }
        
        //   let n = ctx.session.views || 0;
        //   ctx.session.views = ++n;
        //   ctx.body = n + ' views';
        ctx.body = {
            ok:1
        }
    }else{
        ctx.body = {
            ok:0
        }
    }
  
})

module.exports = router
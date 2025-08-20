const Router = require("koa-router")
const router = new Router()
const JWT = require("../util/JWT")

// 刷新薄板文件
router.get("/",async (ctx,next)=>{
   await ctx.render("login") // 自动找views/home.ejs
})

// 验证用户名密码
router.post("/verify",(ctx,next)=>{
    console.log(ctx.request.body);

    const {username,password} = ctx.request.body
    if(username === "admin" && password === "123"){

        // 设置header
        const token = JWT.generate({
            _id:1111,
            username:"kerwin"
        },"600s")
        // token返回在header中
        ctx.set("Authorization",token)
 
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
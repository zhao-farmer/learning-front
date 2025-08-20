const Router = require("koa-router")
const router = new Router()


// 路由可以链式使用
router.get("/",async (ctx,next)=>{
   await ctx.render("home",{username:"kerwin"}) // 自动找views/home.ejs
})


module.exports = router
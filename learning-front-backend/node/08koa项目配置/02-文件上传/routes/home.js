const Router = require("koa-router")
const router = new Router()


// 路由可以链式使用
router.get("/",async (ctx,next)=>{
   await ctx.render("home") 
})

router.get("/list",async(ctx)=>{
   ctx.body = [
      {
         _id:1,
         username:"kerwin",
         age:10
      },
      {
         _id:2,
         username:"tiechui",
         age:20
      },
      {
         _id:3,
         username:"wanger",
         age:101
      }
   ]
})

module.exports = router
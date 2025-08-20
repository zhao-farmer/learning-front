const Router = require("koa-router")
const userRouter = require("./user.js")
const listRouter = require("./list.js")
const homeRouter = require("./home.js")
const loginRouter = require("./login.js")
const router = new Router()

// 统一加前缀
// router.prefix("/api")

// 先注册路由级 组件
// 第一个参数是一级路由 下面是二级路由
router.use("/user",userRouter.routes(),userRouter.allowedMethods())
router.use("/list",listRouter.routes(),listRouter.allowedMethods())


router.use("/login",loginRouter.routes(),loginRouter.allowedMethods())
router.use("/home",homeRouter.routes(),homeRouter.allowedMethods())
router.redirect("/","/home")//重定向 

module.exports = router

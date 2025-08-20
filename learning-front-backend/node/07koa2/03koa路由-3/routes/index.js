const Router = require("koa-router")
const userRouter = require("./user.js")
const listRouter = require("./list.js")
const router = new Router()

// 统一加前缀
router.prefix("/api")


// 先注册路由级 组件
// 第一个参数是一级路由 下面是二级路由
router.use("/user",userRouter.routes(),userRouter.allowedMethods())
router.use("/list",listRouter.routes(),listRouter.allowedMethods())


module.exports = router

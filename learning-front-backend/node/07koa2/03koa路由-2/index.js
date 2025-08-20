const koa = require("koa")
const Router = require("koa-router")
const userRouter = require("./routes/user.js")
const listRouter = require("./routes/list.js")

const app = new koa()
const router = new Router()
// ctx === context 上下文


// 先注册路由级 组件
// 第一个参数是一级路由 下面是二级路由
router.use("/user",userRouter.routes(),userRouter.allowedMethods())
router.use("/list",listRouter.routes(),listRouter.allowedMethods())

// 应用级
app.use(router.routes()).use(router.allowedMethods())

app.listen(3000)
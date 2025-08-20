const Router = require("koa-router")

const homeRouter = require("./home.js")
const loginRouter = require("./login.js")
const router = new Router()


router.use("/login",loginRouter.routes(),loginRouter.allowedMethods())
router.use("/home",homeRouter.routes(),homeRouter.allowedMethods())
router.redirect("/","/home")//重定向 

module.exports = router

const Router = require("koa-router")

const homeRouter = require("./home.js")
const loginRouter = require("./login.js")
const uploadRouter = require("./upload.js")
const router = new Router()


router.use("/upload",uploadRouter.routes(),uploadRouter.allowedMethods())
router.use("/login",loginRouter.routes(),loginRouter.allowedMethods())
router.use("/home",homeRouter.routes(),homeRouter.allowedMethods())
router.redirect("/","/home")//重定向 

module.exports = router

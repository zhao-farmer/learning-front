const koa = require("koa")
const app = new koa()
const static = require("koa-static")
const path = require("path")
const router = require("./routes")

const { koaBody } = require('koa-body');

// 用于获取post参数
app.use(koaBody())



// 设置静态资源目录
app.use(static(path.join(__dirname,"public")))
app.use(router.routes()).use(router.allowedMethods())

app.listen(3000)
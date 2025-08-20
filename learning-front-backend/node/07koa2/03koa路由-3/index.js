const koa = require("koa")
const app = new koa()

const router = require("./routes")
// ctx === context 上下文

// 应用级
app.use(router.routes()).use(router.allowedMethods())

app.listen(3000)
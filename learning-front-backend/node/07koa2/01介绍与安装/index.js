const koa = require("koa")

const app = new koa()
// ctx === context 上下文
app.use((ctx,next)=>{
    // ctx.response
    console.log(ctx.request.path);
    
    // ctx.response.body="<b>hello world</b>"

    // 可省略
    ctx.body = "hello world"
})

app.listen(3000)
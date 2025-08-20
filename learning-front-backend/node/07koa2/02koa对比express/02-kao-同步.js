const koa = require("koa")

const app = new koa()

app.use((ctx,next)=>{
    if(ctx.url === "favicon.ico") return
    console.log("11111");
    next()
    console.log("3333");
    ctx.body = "hello word"

})

app.use((ctx,next)=>{
    console.log("22222");
})

app.listen(3000)
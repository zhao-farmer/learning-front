const koa = require("koa")

const app = new koa()


app.use(async (ctx,next)=>{
    if(ctx.url === "favicon.ico") return
    console.log("11111");
    // 不过必须要有 await等待机制
    await next()
    console.log("4444444",ctx.token);
    ctx.body = "hello word"

})

app.use(async (ctx,next)=>{
    console.log("22222");

    // 异步
    await delay(1000)
    ctx.token = "1d1a51fa56d15asd1f"
    console.log("333333");
    
})

function delay(time){
    
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,time)
    })
}

app.listen(3000)
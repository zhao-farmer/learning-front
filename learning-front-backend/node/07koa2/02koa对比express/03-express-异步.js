const express = require("express")

const app = express()

app.use(async (req,res,next)=>{
    if(req.url === "favicon.ico") return
    console.log("11111");
    await next()
    console.log("4444444");
    res.send("hello word")

})

app.use(async (req,res,next)=>{
    console.log("22222");

    // 异步
    await delay(1000)
    console.log("333333");
    
})

function delay(time){
    
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,time)
    })
}

app.listen(3000)
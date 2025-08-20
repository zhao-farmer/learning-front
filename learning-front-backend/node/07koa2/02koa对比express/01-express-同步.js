const express = require("express")

const app = express()

app.use((req,res,next)=>{
    if(req.url === "favicon.ico") return
    console.log("11111");
    next()
    console.log("3333");
    res.send("hello word")

})

app.use((req,res,next)=>{
    console.log("22222");
})

app.listen(3000)
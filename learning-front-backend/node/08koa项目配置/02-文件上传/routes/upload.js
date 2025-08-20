const Router = require("koa-router")
const router = new Router()
const JWT = require("../util/JWT")

const multer = require("@koa/multer")
// 图片存放的目录
const upload = multer({dest:"public/upload"})

// 刷新模板文件
router.get("/",async (ctx,next)=>{
   await ctx.render("upload") // 自动找views/home.ejs
})

// 上传接口
router.post("/user",upload.single("avatar"),(ctx)=>{
    console.log(ctx.request.body,ctx.file);
    
    ctx.body = {
        ok:1
    }
})

module.exports = router
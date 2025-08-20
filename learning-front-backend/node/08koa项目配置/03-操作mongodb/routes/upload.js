const Router = require("koa-router")
const router = new Router()
const JWT = require("../util/JWT")

const multer = require("@koa/multer")
const UserModel = require("../model/UserModel")
// 图片存放的目录
const upload = multer({dest:"public/upload"})

// 刷新模板文件
router.get("/",async (ctx,next)=>{
   await ctx.render("upload") // 自动找views/home.ejs
})

// 上传接口
router.post("/user",upload.single("avatar"),async (ctx)=>{
    console.log(ctx.request.body,ctx.file);

    const {username,password,age} = ctx.request.body
    const avatar = ctx.file?`/upload/${ctx.file.filename}`:``
    
    // 利用User模型进程存储操作 UserModel.create
    await UserModel.create({
        username,
        age,
        password,
        avatar
    })

    ctx.body = {
        ok:1
    }
})

module.exports = router
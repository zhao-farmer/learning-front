const koa = require("koa")
const app = new koa()
const static = require("koa-static")
const path = require("path")
const router = require("./routes")

const { koaBody } = require('koa-body');
const views = require('koa-views')
const JWT = require("./util/JWT")

// token判断拦截
app.use(async (ctx,next)=>{
    if(ctx.url.includes("login")){
        await next()
        return
    }

    const token = ctx.headers["authorization"]?.split(" ")[1]

    if(token){
        const payload = JWT.verify(token)
        if(payload){
            // 重新经计算过期时间
            const newToken = JWT.generate({
                _id:payload._id,
                username:payload.username
            },"10s")

            ctx.set("Authorization",newToken)

            // 验证通过放行
            await next()
        }else{
            // 返回401
            ctx.status = 401
            ctx.body = {errCode:-1,errInfo:"token过期"}
        }
    }else{
        // 用于页面路由
        await next()
    }
})


// 加载模板引擎
app.use(views(path.join(__dirname, './view'), {
  extension: 'ejs'
}))

// 用于获取post参数
app.use(koaBody())


// 设置静态资源目录
app.use(static(path.join(__dirname,"public")))
app.use(router.routes()).use(router.allowedMethods())

app.listen(3000)
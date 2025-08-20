const koa = require("koa")
const app = new koa()
const static = require("koa-static")
const path = require("path")
const router = require("./routes")

const { koaBody } = require('koa-body');
const views = require('koa-views')

const session = require('koa-session');

app.keys = ['kerwin'];
const CONFIG = {
    key: 'koa.sess', // cookie 键名
    maxAge: 86400000, // 有效期 (24小时)
    autoCommit: true, // 自动提交 headers
    overwrite: true, // 允许覆盖
    httpOnly: true, // 仅服务器可访问
    signed: true, // 签名(需要设置keys,且cookie会多存一份 koa.sess.sig)
    rolling: false, // 不强制每次响应设置 cookie
    renew: false, // 不自动续期
    secure: false, // 非 HTTPS 环境下设为 false
    // sameSite: null, // 不限制 sameSite
};

// 配置session
app.use(session.createSession(CONFIG,app));


// session 拦截
app.use(async (ctx, next) => {
    //排除login相关的路由和接口
    if (ctx.url.includes("login")) {
        await next()
        return
    }

    if (ctx.session.user) {
        // console.log(ctx.session);
        //重新设置以下sesssion
        ctx.session.mydate = Date.now()
        await next()
    } else {
        // 重定向
        ctx.redirect("/login")
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
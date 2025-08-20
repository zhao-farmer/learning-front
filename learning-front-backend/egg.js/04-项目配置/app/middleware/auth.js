// app/middleware/auth.js
module.exports = () => {
    return async (ctx, next) => {
        // 检查 session
        if (!ctx.session.user) {
            ctx.throw(401, "请先登录");
        }

        // 检查 cookie
        const authCookie = ctx.cookies.get("user_auth", { encrypt: true });
        if (!authCookie) {
            ctx.session = null;
            ctx.throw(401, "请重新登录");
        }

        await next();
    };
};

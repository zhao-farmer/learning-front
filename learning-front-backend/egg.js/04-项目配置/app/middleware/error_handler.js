// app/middleware/error_handler.js
module.exports = () => {
    return async (ctx, next) => {
        try {
            await next();
        } catch (err) {
            // 记录错误日志
            ctx.app.emit("error", err, ctx);

            // 返回错误响应
            ctx.status = err.status || 500;
            ctx.body = {
                success: false,
                message: err.message,
                stack: ctx.app.config.env === "prod" ? undefined : err.stack,
            };
        }
    };
};

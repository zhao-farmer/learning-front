// app/router.js
module.exports = app => {
    
    const { router, controller, middleware } = app;

    // auth 中间件 过滤其中的请求
    const auth = middleware.auth({
        ignore: ["/api/user/register", "/api/user/login", "/public"],
    });

    // 用户路由
    router.post("/api/user/register",  controller.user.register);
    router.post("/api/user/login",  controller.user.login);
    router.get("/api/user/list", auth, controller.user.list);

};

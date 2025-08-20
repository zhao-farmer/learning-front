module.exports = appInfo => {
    const config = (exports = {
        orm: {
            client: "mysql",
            database: "egg-mysql",
            host: "127.0.0.1",
            port: 3306,
            username: "root",
            password: "123456",
            // 用于提供内置对象 可以 `app.model` and `ctx.model`
            delegate: "model",
            // 文件位置 `app/model/*.js`
            baseDir: "model",
            // 迁移路径
            migrations: "database/migrations",
            // 东八区
            timezone: "+08:00",
            // 支持 bigint
            dialectOptions: {
                supportBigNumbers: true,
                bigNumberStrings: true,
            },
        },
 
        multipart: {
            mode: "file",
            fileSize: "50mb",
        },
        
        // cookie
        cookies: {
            httpOnly: true,
            sameSite: 'lax',
            encrypt: true,
        },
        // session
        session: {
            key: 'EGG_SESS',
            maxAge: 24 * 60 * 60 * 1000,
            httpOnly: true,
            encrypt: true,
            renew: true,
        },
        // 安装验证
        security: {
            csrf: {
                enable: false,
                // ignoreJSON: true,
                // cookieName: 'csrfToken',
            },
        },
    });

    // 设置cookie 的key
    config.keys = appInfo.name + "_1754187155918_3232";

    // 中间件 
    config.middleware = ["errorHandler"];

    // 用户配置
    const userConfig = {
        // myAppName: 'egg',
        uploadPrefix:"uploads/"
    };

    return {
        ...config,
        ...userConfig,
    };
};

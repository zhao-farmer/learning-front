var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var loginRouter = require("./routes/login");
// 引入session
var session = require("express-session");
const MongoStore = require("connect-mongo");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// 注册session中间件 必须再路由前
app.use(
    session({
        name: "kerwinsystem", // 名称
        secret: "dwad444444dadwa", // 密钥
        cookie: {
            maxAge: 1000 * 60 * 60, // cookie 过期时间
            secure: false,
        },
        resave: true, // 重新设置过期事件
        saveUninitialized: true, // 一开始是否给cookie
        store: MongoStore.create({
            mongoUrl: 'mongodb://127.0.0.1:27017/kerwin_session', // 新创建一个数据库
            ttl: 1000 * 60 * 60 // 过期时间
        }),
    })
);

// 设置中间件，sesssion过期校验
app.use((req, res, next) => {
    // 排除login相关的路由和接口
    if (req.url.includes("login")) {
        next();
        return;
    }

    // 判断session 是否存在用户
    if (req.session.user) {
        // 重新设置session
        req.session.mydate = Date.now()

        next();
    } else {
        // 是接口，返回 错误码
        // 不是接口，就重定向

        req.url.includes("api")?
          res.status(401).send({ok:0}):
          res.redirect("/login");
    }
});

// 路由网页加载
app.use("/", indexRouter);
app.use("/api", usersRouter);
app.use("/login", loginRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error");
});

module.exports = app;

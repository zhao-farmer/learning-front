const express=require("express");
const ejs=require("ejs");
var app=express();

const loginRoute = require('./router/loginRoute')

//引用ejs
app.set('views',"./views");  //设置视图的对应目录
app.set("view engine","ejs");       //设置默认的模板引擎

// 测试默认
app.get("/",function(req,res){
    res.render("index",{title: "<h4>express</h4>"});
    //会去找views目录下的index.ejs文件
});

// 测试回调
app.get("/user",function(req,res){
    res.render('user', { name: 'Tobi' }, function(err, html) {
        console.log(html);
    });
});

// 解读json类型参数
app.use(express.json());
app.use("/login",loginRoute)

app.listen(8080);
// 链接数据库

const mongoose = require("mongoose")

// 开始连接 
mongoose.connect("mongodb://127.0.0.1:27017/kerwin_koa")
// 插入集合和数据，数据库kerwin_koa会自动创建


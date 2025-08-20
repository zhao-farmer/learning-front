// app/controller/news.js
const Controller = require('egg').Controller;

class NewsController extends Controller {
    async list() {
        // 获取ctx对象 类似koa的ctx
        const ctx = this.ctx;
        // 页数
        const page = ctx.query.page || 1;
        
        // 通过service 获取列表数据 
        // ctx.service 指向目录
        // news 指向文件
        // list 指向函数
        const newsList = await ctx.service.news.list(page);
        // 刷新到模板文件中
        await ctx.render('news/list.njk', { list: newsList });
    }
}

module.exports = NewsController;
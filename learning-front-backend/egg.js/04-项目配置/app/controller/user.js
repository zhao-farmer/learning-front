// app/controller/user.js
const Controller = require("egg").Controller;

class UserController extends Controller {
    // 用户注册
    async register() {
        const { ctx } = this;

        // 参数
        ctx.request.body.age = Number(ctx.request.body.age)

        // 获取上传的文件
        const files = ctx.request.files; 
        // 调用 service 层的 saveImages 方法
        const result = await ctx.service.uploadFileService.saveImages(files);
        // 设置头像
        ctx.request.body.avatar = result

        // 参数校验
        ctx.validate({
            username: { type: 'string', required: true },
            password: { type: 'string', required: true, min: 2 },
            age: { type: 'number', required: false, max: 120 },
        });
 
        // 创建用户
        const user = await ctx.service.user.register(ctx.request.body);

        ctx.body = {
            success: true,
            data: {
                ok:1,
            },
        };
    }

    // 用户登录
    async login() {
        const { ctx } = this;

        // 参数校验
        ctx.validate({
            username: "string",
            password: "string",
        });

        // 验证用户
        const user = await ctx.service.user.login(ctx.request.body.username, ctx.request.body.password);

       // 设置 Session
        ctx.session.user = {
            id: user.id,
            username: user.username,
            role: user.role,
            loginTime: Date.now(),
        };
        
        // 设置 Cookie
        ctx.cookies.set('user_auth', '1', {
            maxAge: 24 * 60 * 60 * 1000,
            encrypt: true,
        });
        ctx.body = {
            success: true,
            data: {
                ok:1
            },
        };
    }


    // 获取用户列表
    async list() {
        const { ctx } = this;
        console.log(ctx.query);
        
        // 参数校验
        ctx.validate({
            page: { type: 'string', required: false },
            size: { type: 'string', required: false, max: 100 },
        });

        let params = {pageSize:ctx.query.size,page:ctx.query.page}
        const users = await ctx.service.user.list(params);
        ctx.body = {
            success: true,
            data: users,
        };
    }
}

module.exports = UserController;

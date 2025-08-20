// app/service/user.js
const Service = require("egg").Service;
const bcrypt = require("bcryptjs");

class UserService extends Service {
    // 用户注册
    async register(userData) {
        const { ctx } = this;

        // 检查用户名是否已存在
        if (await this.findByUsername(userData.username)) {
            ctx.throw(400, "用户名已存在");
        }

        // 生成盐
        const salt = bcrypt.genSaltSync(10);
        // 哈希密码
        userData.password = bcrypt.hashSync(userData.password, salt);

        // 创建用户
        return await ctx.model.user.create(userData);
    }

    // 用户登录
    async login(username, password) {
        const { ctx } = this;
        const user = await this.findByUsername(username);

        console.log(password, user.password);

        console.log(bcrypt.compareSync(password, user.password));

        if (!user || !bcrypt.compareSync(password, user.password)) {
            ctx.throw(400, "用户名或密码错误");
        }

        return user;
    }

    // 根据用户名查找用户
    async findByUsername(username) {
        return await this.ctx.model.user.findOne({
            username: username,
        });
    }

    // 获取用户列表
    async list(params = {}) {

        const { page = 1, pageSize = 10 } = params;

         // 计算偏移量
        const offset = (page - 1) * pageSize;

        // 一定要使用 await
        const list  = await this.ctx.model.user
            .order("created_at", "desc")
            .limit(pageSize)
            .offset(offset);

        // 查询总数
        const total = await this.ctx.model.user.count();

        console.log(total);
        
            
        return {
            list,
            pagination: {
                page: parseInt(page),
                pageSize: parseInt(pageSize),
                total,
                totalPages: Math.ceil(total / pageSize),
            },
        };

       
    }
}

module.exports = UserService;

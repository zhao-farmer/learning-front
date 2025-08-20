const UserService = require("../services/UserService");

const UserController = {
    addUser: async (req, res) => {
        // 获取参数
        const { username, password, age } = req.body;
        // 调用service
        await UserService.addUser(username, password, age);
        // 返回信息
        res.send({
            ok: 1,
        });
    },

    updateUser: async (req, res) => {
         // 获取参数
        const { username, age, password } = req.body;
        const id = req.params.id;
        // 调用service
        await UserService.updateUser(id, username,password,age);
        // 返回信息
        res.send({
            ok: 1,
        });
    },
    deleteUser: async (req,res)=>{
        // 获取参数
        const id = req.params.id;
        // 调用service
        await UserService.deleteUser(id);
        // 返回信息
        res.send({
            ok:1
        })
    },
    getUser: async (req,res)=>{
        // 获取参数
        const {page,limit} = req.query
        // 调用service
        let data = await UserService.getUser(page,limit);
        // 返回信息
        res.send(data)
    }
};

module.exports = UserController;

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
    },
    login:async(req,res)=>{
        const {username,password} = req.body
        const data =  await UserService.login(username,password)
        if(data.length === 0){
            res.send({
                ok:0,
            })
        }else{
            // 设置session
            req.session.user = data[0] // 设置session 对象
            // 默认存在内存中，重启就会丢掉

            res.send({
                ok:1,
            })
        }
    },
    logout: async (req,res)=>{
        req.session.destroy(()=>{
            res.send({ok:1})
        })
    }
};

module.exports = UserController;

var express = require("express");
const UserModel = require("../model/UserModel");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
    res.send("respond with a resource");
});

// 用户添加
router.post("/user/add", (req, res) => {
    console.log(req.body);
    // 插入数据库
    // 1.创建一个模型(users,限制filed类型), --对应数据库的集合(users)
    // user.create user.find user.delete user.update

    const { username, password, age } = req.body;
    UserModel.create({
        username,
        password,
        age,
    }).then(data => {
        console.log(data);
        res.send({
            ok: 1,
        });
    });

 
});

// 动态路由，获取id
router.post("/user/update/:id",(req,res)=>{
    console.log(req.body,req.params.id);
    const {username,age,password} = req.body

    UserModel.updateOne({
      _id:req.params.id,
    },{
      username:username,
      password,
      age
    }).then(data=>{
        res.send({
          ok:1
        })
    })
})

// 删除
router.get("/user/delete/:id",(req,res)=>{
    UserModel.deleteOne({
        _id:req.params.id
    }).then(data=>{
        res.send({
          ok:1
        })
    })
})

router.get("/user/list",(req,res)=>{
  console.log(req.query);
  const {page,limit} = req.query

  // 1. 查询特定的字段
  // 2. 进行排序 age = 1 正序 age = -1 倒序
  // 3. 获取第几行 第几页
  UserModel.find({},["username","age"])
    .sort({age:1})
    .skip((page-1) * limit).limit(limit)
    .then(data=>{
    res.send(data)
  })
})


module.exports = router;

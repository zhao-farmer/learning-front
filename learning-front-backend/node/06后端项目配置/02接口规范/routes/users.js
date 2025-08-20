var express = require("express");
const UserModel = require("../model/UserModel");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
    res.send("respond with a resource");
});

// restful 风格  新增
router.post("/user", (req, res) => {

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

// restful 风格  修改
router.put("/user/:id",(req,res)=>{
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

// restful 风格  删除
router.delete("/user/:id",(req,res)=>{
    UserModel.deleteOne({
        _id:req.params.id
    }).then(data=>{
        res.send({
          ok:1
        })
    })
})

// restful 风格 获取
router.get("/user",(req,res)=>{
  console.log(req.query);
  const {page,limit} = req.query
  UserModel.find({},["username","age"])
    .sort({age:1})
    .skip((page-1) * limit).limit(limit)
    .then(data=>{
    res.send(data)
  })
})


module.exports = router;

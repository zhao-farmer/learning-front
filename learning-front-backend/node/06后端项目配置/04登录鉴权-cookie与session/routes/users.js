var express = require("express");
const UserController = require("../controllers/UserController");
var router = express.Router();


// restful 风格  新增
router.post("/user", UserController.addUser);

// restful 风格  修改
router.put("/user/:id",UserController.updateUser)

// restful 风格  删除
router.delete("/user/:id",UserController.deleteUser)

// restful 风格 获取
router.get("/user",UserController.getUser)


// 登录校验
router.post("/login",UserController.login)

router.get("/logout",UserController.logout) 

module.exports = router;

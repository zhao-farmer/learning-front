var express = require("express");
const UserController = require("../controllers/UserController");
var router = express.Router();

// 引入multer
const multer = require("multer")
const upload = multer({dest:"public/uploads/"})


/**
 * @api {post} /api/user/ 获取用户信息
 * @apiName 添加用户
 * @apiGroup usergroup
 * @apiVersion  1.0.0
 * @apiDescription 新增用户接口，支持文件上传。
 *
 * @apiParam {String} username 用户名
 * @apiParam {String} password 密码
 * @apiParam {Number} age 年龄
 * @apiParam {File} avatar 头像
 *
 * @apiSuccess (200) {Number} ok 标识成功字段
 * @apiSuccessExample {type} 成功响应示例:
 * {
 *    ok:1
 * }
 */


// restful 风格 新增
router.post("/user", upload.single("avatar"),UserController.addUser);

// restful 风格  修改
router.put("/user/:id",UserController.updateUser)

// restful 风格  删除
router.delete("/user/:id",UserController.deleteUser)

// restful 风格 获取
router.get("/user",UserController.getUser)

// 登录校验
router.post("/login",UserController.login)


module.exports = router;


const mongoose = require("mongoose")

// 轮廓 用于限制类型
const Schema = mongoose.Schema

//限制模型
const UserType = {
    username:String,
    password:String,
    age:Number
}


const UserModel = mongoose.model("user",new Schema(UserType))

// 模式user 将会对应users集合
module.exports = UserModel


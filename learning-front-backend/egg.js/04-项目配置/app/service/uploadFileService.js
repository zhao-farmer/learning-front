const Service = require("egg").Service;
const fs = require("fs");
const path = require("path");
const crypto = require("crypto"); // 引入 crypto 模块

class uploadFileService extends Service {

    async saveImages(files) {
        const uploadLoad = this.ctx.app.config.uploadPrefix

        const uploadDir = "app/public/" + uploadLoad; // 上传目录

        try {
            // 检查文件数量是否为1
            if (files.length !== 1) {
                return { success: false, message: "目前只支持上传一个文件" };
            }
            const file = files[0]; // 只处理第一个文件
            const fileName = file.filename;
            // 使用 MD5 对文件名进行加密
            const hash = crypto.createHash("md5").update(fileName).digest("hex");
            const timestamp = Date.now(); // 获取当前时间戳

            // 新文件名
            const newFileName = `${hash}_${timestamp}${path.extname(fileName)}`; 
            // 真实路径
            const filePath = path.join(uploadDir, newFileName);

            // 将文件保存到指定目录
            const writeStream = fs.createWriteStream(filePath);
            const readStream = fs.createReadStream(file.filepath);
            readStream.pipe(writeStream);

            // 可以在这里添加其他逻辑，如数据库记录保存等
            return uploadLoad + newFileName;
        } catch (err) {
            return { success: false, message: "上传图片失败" };
        }
    }
}

module.exports = uploadFileService;

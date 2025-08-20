module.exports = {

    // 是否开启静态
    static: {
        enable: true,
    },
    //  ORM 框架
    sequelize: {
        package: "egg-orm",
        enable: true,
    },
    // 表单上传
    multipart: {
        package: "egg-multipart",
        enable: true,
    },
    // 验证参数
    validate: {
        enable: true,
        package: 'egg-validate',
    }
};

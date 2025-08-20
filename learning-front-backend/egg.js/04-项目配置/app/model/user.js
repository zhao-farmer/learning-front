// app/model/user.js

module.exports = app => {

    const { DataTypes:{STRING, INTEGER, DATE }} = app.model;

    const User = app.model.define(
        "user",
        {
            id: { type: INTEGER, primaryKey: true, autoIncrement: true },
            username: STRING(50),
            password: STRING(100),
            age:INTEGER,
            avatar: STRING(100),
            created_at: DATE,
            updated_at: DATE,
        },
        {
            timestamps: true, // 自动维护 createdAt 和 updatedAt 字段
            tableName: "users", // 自定义表名
        }
    );

    return User;
};

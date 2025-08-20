const redis = require("./redisClient");

async function main() {
    try {
        // 字符串操作示例
        await redis.set("username1", "zhangsan");
        await redis.set("username2", "lisi");

        const name = await redis.get("username1");
        console.log("Get value:", name);

        // 哈希操作示例
        await redis.hSet("user-1001", "name", "lisi");
        await redis.hSet("user-1001", "age", "30");
        const user = await redis.hGetAll("user-1001");
        console.log("Get hash:", user);

        // 删除操作
        await redis.del("username1");
    } catch (err) {
        console.error("Operation failed:", err);
    }finally {
        await redis.close();
    }
}

main();

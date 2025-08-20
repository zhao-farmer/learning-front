const redis = require("redis");

class RedisClient {
    constructor() {

        // 创建客户端
        const clinet = redis.createClient();

        // 连接
        clinet.connect(6379, "127.0.0.1");

        console.log(clinet.del);
        

        // 监控村务
        clinet.on("error", err => {
            console.error("Redis error:", err);
        });

        return clinet;
    }
}

module.exports = new RedisClient();

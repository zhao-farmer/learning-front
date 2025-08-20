const express = require("express");
const app = express();

// 设置静态文件夹
app.use(express.static("./public"));

// http响应
app.get("/", (req, res) => {
    res.send({ ok: 1 });
});

// websocket响应

// 启动服务
const WebSocket = require("ws");
const WebSocketServer = WebSocket.WebSocketServer;
const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", function connection(ws) {
    ws.on("message", function message(data) {
        console.log("received: %s", data);
        // 转发给其他人
        wss.clients.forEach(function each(client) {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(data, { binary: false });
            }
        });
    });

    ws.send("欢迎来到聊天室");
});

app.listen(3000);

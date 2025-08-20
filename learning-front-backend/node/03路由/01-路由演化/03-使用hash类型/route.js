const fs = require("fs")

const route = {
    "/login": (res) => {
        res.writeHead(200, { "Content-Type": "text/html;charset=utf8" })
        res.write(fs.readFileSync("./static/login.html"), "utf-8")
    },
    "/home": (res) => {
        res.writeHead(200, { "Content_Type": "text/html;chatset=utf8" })
        res.write(fs.readFileSync("./static/home.html"), "utf-8")
    },
    "/404": (res) => {
        res.writeHead(404, { "Content_Type": "text/html;chatset=utf8" })
        res.write(fs.readFileSync("./static/404.html"), "utf-8")
    },
    "/favicon.ico": (res) => {
        //请求头要是icon类型的
        res.writeHead(200, { "Content_Type": "image/x-icon;chatset=utf8" })
        res.write(fs.readFileSync("./static/favicon.ico"), "utf-8")
    }
}
module.exports = route

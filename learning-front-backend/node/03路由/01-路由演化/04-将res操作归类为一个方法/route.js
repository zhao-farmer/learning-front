const fs = require("fs")
function reader(res, path, type = "") {
    res.writeHead(200, { "Content-Type": `${type ? type : "text/html"};charset=utf8` })
    res.write(fs.readFileSync(path), "utf-8")
    res.end()
}
const route = {
    "/login": (res) => {
        reader(res, "./static/login.html")
    },
    "/home": (res) => {
        reader(res, "./static/home.html")
    },
    "/404": (res) => {
        res.writeHead(404, { "Content_Type": "text/html;chatset=utf8" })
        res.write(fs.readFileSync("./static/404.html"), "utf-8")
        res.end()
    },
    "/favicon.ico": (res) => {
        reader(res, "./static/login.html", "image/x-icon")
    }
}
module.exports = route

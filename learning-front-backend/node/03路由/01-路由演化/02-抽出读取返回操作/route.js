const fs = require("fs")
function route(res, pathname) {
    switch (pathname) {
        case "/login":
            res.writeHead(200, { "Content_Type": "text/html;chatset=utf8" })
            res.write(fs.readFileSync("./static/login.html"), "utf-8")
            break;
        case "/home":
            res.writeHead(200, { "Content_Type": "text/html;chatset=utf8" })
            res.write(fs.readFileSync("./static/home.html"), "utf-8")
            break;
        default:
            res.writeHead(404, { "Content_Type": "text/html;chatset=utf8" })
            res.write(fs.readFileSync("./static/404.html"), "utf-8")
    }
}
module.exports = route

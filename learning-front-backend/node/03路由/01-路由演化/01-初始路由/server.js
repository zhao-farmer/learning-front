const http = require("http")
const fs = require("fs")
http.createServer((req, res) => {
    const myURL = new URL(req.url, "http://127.0.0.1")
    // console.log(myURL.pathname);
    switch (myURL.pathname) {
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
    res.end();
}).listen(3000, () => {
    console.log("server start");
})
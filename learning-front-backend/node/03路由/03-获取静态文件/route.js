const fs = require("fs");
const path = require("path");
function reader(res, path, type = "") {
    res.writeHead(200, { "Content-Type": `${type ? type : "text/html"};charset=utf8` })
    res.write(fs.readFileSync(path), "utf-8")
    res.end()
}
const route = {
    "/login": (req, res) => {
        reader(res, "./static/login.html")
    },
    "/": (req, res) => {
        reader(res, "./static/home.html")
    },
    "/home": (req, res) => {
        reader(res, "./static/home.html")
    },
    "/404": (req, res) => {
        // 寻找金泰文件
        if (readStaticFile(req, res)) {
            return
        }
        res.writeHead(404, { "Content_Type": "text/html;chatset=utf8" })
        res.write(fs.readFileSync("./static/404.html"), "utf-8")
        res.end()
    },
}

function readStaticFile(req, res) {
    const myURL = new URL(req.url, "http://127.0.0.1:3000");
    //__dirname 执行目录的命令
    //path 处理windows与linux与url的/\
    const pathname = path.join(__dirname, "static", myURL.pathname);
    if (myURL.pathname === "/") {
        return false;
    }
    // 查询名称是否匹配 如果匹配reader返回对应数据
    if (fs.existsSync(pathname)) {
        // 文件类型
        let suffix = getFileType(pathname)
        
        reader(res, pathname, suffix)
        return true;
    } else {
        return false;
    }
}

function getFileType(filePath) {
    const ext = path.extname(filePath);
    switch (ext) {
        case '.html':
            return 'text/html';
        case '.css':
            return 'text/css';
        case '.js':
            return 'text/javascript';
        case '.json':
            return 'application/json';
        case '.png':
            return 'image/png';
        case '.jpg':
            return 'image/jpeg';
        // 可以根据需要添加更多类型
        default:
            return 'application/octet-stream'; 
            // 默认返回八位字节流，通常用于二进制文件
    }
}


module.exports = route

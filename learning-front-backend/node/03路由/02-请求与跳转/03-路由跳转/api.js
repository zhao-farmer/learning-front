function reader(res, data, type = "") {
    res.writeHead(200, { "Content-Type": `${type ? type : "text/html"};charset=utf8` })
    console.log(data);
    res.write(data)
    res.end()
}
const apiRouter = {
    "/api/login": (req, res) => {
        const myURL = new URL(req.url, "http://127.0.0.1")
        let object = myURL.searchParams;
        console.log(object);
        if (object.get("username") === "zhao" && object.get("password") === "123456") {
            reader(res, `{"ok":1}`)
        } else {
            reader(res, `{"ok":0}`)
        }
    },
    "/api/loginpost": (req, res) => {
        //获取参数
        let object = "";
        req.on("data", chunk => {
            object += chunk;
        })
        req.on("end", () => {
            object = JSON.parse(object)
            if (object.username === "zhao" && object.password === "123456") {
                reader(res, `{"ok":1}`)
            } else {
                reader(res, `{"ok":0}`)
            }
        })
    }
}
module.exports = apiRouter

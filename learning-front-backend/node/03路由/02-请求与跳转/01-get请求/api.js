function reader(res, data, type = "") {
    res.writeHead(200, { "Content-Type": `${type ? type : "text/html"};charset=utf8` })
    res.write(data)
    res.end()
}
const apiRouter = {
    "/api/login": (req, res) => {
        console.log(req.url);
        console.log(req.method);
        
        const myURL = new URL(req.url, "http://127.0.0.1")
        // url
       
        console.log(myURL);
        
        let object = myURL.searchParams;
        console.log(333);
        console.log(object);
        if (object.get("username") === "zhao" && object.get("password") === "123456") {
            reader(res, `{"ok":1}`)
        } else {
            reader(res, `{"ok":0}`)
        }
    }
}
module.exports = apiRouter
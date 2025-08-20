function reader(res, data, type = "") {
    res.writeHead(200, { "Content-Type": `${type ? type : "text/html"};charset=utf8` })
    res.write(data)
    res.end()
}
const apiRouter = {
    "/api/login": (res) => {
        reader(res, `{ok:1}`)
    }
}
module.exports = apiRouter

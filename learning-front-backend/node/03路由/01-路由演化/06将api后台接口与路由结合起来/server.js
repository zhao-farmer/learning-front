const http = require("http")
const route = require("./route")
const api = require("./api")
const Router = {}
Object.assign(Router, route)
Object.assign(Router, api)

function start() {
    http.createServer((req, res) => {
        const myURL = new URL(req.url, "http://127.0.0.1")
        try {
            Router[myURL.pathname](res);
        } catch (error) {
            Router["/404"](res);
        }
    }).listen(3000, () => {
        console.log("server start");
    })
}
exports.start = start

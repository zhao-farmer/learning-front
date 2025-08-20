const  axios  = require("axios")
const assert = require("assert")

var supertest = require("supertest")

var app = require("../app2")

describe("测试接口",()=>{
    it("返回html代码片段测试", async ()=>{
        // axios axios.get

        var res = await axios.get("http://localhost:3000/")
        assert.strictEqual(res.data,"<h1>hello</h1>")
    })
})


describe("测试接口2",()=>{
    let server =  app.listen(3000)

    it("返回html代码片段测试", async ()=>{
        await supertest(server).get("/")
        .expect("Content-Type",/text\/html/)
        .expect(200,"<h1>hello</h1>")
    })

    // 所有执行完毕 自动调用
    after(()=>{
        server.close()
    })
})
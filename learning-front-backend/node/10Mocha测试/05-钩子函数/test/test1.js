var supertest = require("supertest")
var assert = require("assert")
var app = require("../app")


describe("测试接口2",()=>{
    let server 

    it("返回html代码片段测试", async ()=>{
        await supertest(server).get("/")
        .expect("Content-Type",/text\/html/)
        .expect(200,"<h1>hello</h1>")
    })

    // 所有it执行前 调用
    before(()=>{
        server =  app.listen(3000)
    })

    // 所有it执行完毕 调用
    after(()=>{
        server.close()
    })
})


function sum(...rest){
    var sum = 0;
    for (let i of rest) {
        sum+=i
    }
    return sum;
}

describe("大的组1的测试",()=>{

     // 所有it执行前 调用
    before(function () {
        console.log('before:');
    });
    // 所有it执行后 调用
    after(function () {
        console.log('after.');
    });
    // 每个it执行后 调用
    beforeEach(function () {
        console.log('  beforeEach:');
    });
     // 每个it执行前 调用
    afterEach(function () {
        console.log('  afterEach.');
    });

    describe("小的组1测试",()=>{
        it("sum() 结果应该返回0",()=>{
            assert.strictEqual(sum(),0)
        })
        it("sum(1) 结果应该返回1",()=>{
            assert.strictEqual(sum(1),1)
        })
    })
    describe("小的组2测试",()=>{
        it("sum(1,2) 结果应该返回3",()=>{
            assert.strictEqual(sum(1,2),3)
        })
           it("sum(1,2,3)) 结果应该返回6",()=>{
            assert.strictEqual(sum(1,2,3),6)
        })
    })
})

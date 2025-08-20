var assert = require("assert")
const fs = require("fs")
const fsp = fs.promises

describe("异步测试1",()=>{
    it("异步1-读取文件",(done)=>{
        fs.readFile("./1.txt","utf8",(err,data)=>{
            if(err){
                // 等待，调用完才是结束
                done(err)
            }else{
                assert.strictEqual(data,"hello")
                done()
            }
        })
    })
})

describe("异步测试2",()=>{
    it("异步2-读取文件", async ()=>{
        var data = await fsp.readFile("./1.txt","utf8")
        assert.strictEqual(data,"hello")
    })
})
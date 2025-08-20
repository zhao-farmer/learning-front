
var sum = require("../sum")
// 引入断言
var assert = require("assert")

// 内置的断言如果不相同 不会报错
// assert.strictEqual(sum(),0)
// assert.strictEqual(sum(1),1)
// assert.strictEqual(sum(1,2),3)
// assert.strictEqual(sum(1,2,3),6)
// console.log(sum(1,2,3));

// describe 一组测试，嵌套
// it 一个测试

describe("大的组1的测试",()=>{
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

describe("大的组1的测试",()=>{

})
// 使用装饰器重写toString方法 + 封闭其原型对象
function CustomString(target: Function) {
    // 向被装饰类的原型上添加自定义的 toString 方法
    target.prototype.toString = function () {
        return JSON.stringify(this);
    };
    // 封闭其原型对象，禁止随意操作其原型对象
    Object.seal(target.prototype);
}

// 使用 CustomString 装饰器
@CustomString
class Person {
    constructor(public name: string, public age: number) {}
    speak() {
        console.log("你好呀！");
    }
}

/* 测试代码如下 */
let p1 = new Person("张三", 18);
// 输出：{"name":"张三","age":18}
console.log(p1.toString());
// 禁止随意操作其原型对象
interface Person {
    a: any;
}
// Person.prototype.a = 100 // 此行会报错：Cannot add property a, object is not extensible
// console.log(p1.a)

export {}
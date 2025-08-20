function Logger(target: object, propertyKey: string, descriptor: PropertyDescriptor) {
    // 保存原始方法
    const original = descriptor.value;
    // 替换原始方法
    descriptor.value = function (...args: any[]) {
        console.log(`${propertyKey}开始执行......`);
        const result = original.call(this, ...args);
        console.log(`${propertyKey}执行完毕......`);
        return result;
    };
}

function Validate(maxValue: number) {
    return function (target: object, propertyKey: string, descriptor: PropertyDescriptor) {
        // 保存原始方法
        const original = descriptor.value;
        // 替换原始方法
        descriptor.value = function (...args: any[]) {
            // 自定义的验证逻辑
            if (args[0] > maxValue) {
                throw new Error("年龄非法！");
            }
            // 如果所有参数都符合要求，则调用原始方法
            return original.apply(this, args);
        };
    };
}

class Person {
    constructor(public name: string, public age: number) {}
    @Logger speak() {
        console.log(`你好，我的名字：${this.name}，我的年龄：${this.age}`);
    }
    @Validate(120)
    static isAdult(age: number) {
        return age >= 18;
    }
}
const p1 = new Person("张三", 18);
p1.speak();
console.log(Person.isAdult(100));


export {}
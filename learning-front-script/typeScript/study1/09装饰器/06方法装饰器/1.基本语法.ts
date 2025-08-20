/* 
  参数说明：
    ○ target: 对于静态方法来说值是类，对于实例方法来说值是原型对象。
    ○ propertyKey:方法的名称。
    ○ descriptor: 方法的描述对象，其中value属性是被装饰的方法。
*/

function Demo(target: object, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log(target);
    console.log(propertyKey);
    console.log(descriptor);
}

class Person {
    constructor(public name: string, public age: number) {}
    // Demo装饰实例方法
    @Demo speak() {
        console.log(`你好，我的名字：${this.name}，我的年龄：${this.age}`);
    }
    // Demo装饰静态方法
    @Demo static isAdult(age: number) {
        return age >= 18;
    }
}

const p1 = new Person("张三", 18);
p1.speak();


export {}
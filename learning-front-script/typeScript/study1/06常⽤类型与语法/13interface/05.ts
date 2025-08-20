// PersonInterface接⼝
interface PersonInterface {
    // 属性声明
    name: string;
    age: number;
}
// 给PersonInterface接⼝添加新属性
interface PersonInterface {
    // ⽅法声明
    speak(): void;
}
// Person类实现PersonInterface
class Person implements PersonInterface {
    name: string;
    age: number;
    // 构造器
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    // ⽅法
    speak() {
        console.log("你好！我是⽼师:", this.name);
    }
}

export {}
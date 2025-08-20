class Person {
    // name写了public修饰符，age没写修饰符，最终都是public修饰符
    public name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    speak() {
        // 类的【内部】可以访问public修饰的name和age
        console.log(`我叫：${this.name}，今年${this.age}岁`);
    }
}
const p1 = new Person("张三", 18);
// 类的【外部】可以访问public修饰的属性
console.log(p1.name);


class Student extends Person {
    constructor(name: string, age: number) {
        super(name, age);
    }
    study() {
        // 【⼦类中】可以访问⽗类中public修饰的： name属性、 age 属性
        console.log(`${this.age} 岁的${this.name}正在努⼒学习`);
    }
}


export {}
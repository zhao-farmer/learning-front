class Person {
    // name和age是受保护属性，不能在类外部访问，但可以在【类】与【⼦类】中访问
    constructor(protected name: string, protected age: number) {}
    // getDetails是受保护⽅法，不能在类外部访问，但可以在【类】与【⼦类】中访问
    protected getDetails(): string {
        // 类中能访问受保护的name和age属性
        return `我叫：${this.name}，年龄是：${this.age}`;
    }
    // introduce是公开⽅法，类、⼦类、类外部都能使⽤
    introduce() {
        // 类中能访问受保护的getDetails⽅法
        console.log(this.getDetails());
    }
}

const p1 = new Person("杨超越", 18);
p1.introduce();
// 可以在类外部访问introduce
// 以下代码均报错
// p1.getDetails()
// p1.name
// p1.age


class Student extends Person {
    constructor(name: string, age: number) {
        super(name, age);
    }
    study() {
        // ⼦类中可以访问 introduce
        this.introduce();
        //  ⼦类中可以访问 name
        console.log(`${this.name}正在努⼒学习`);
    }
}
const s1 = new Student("tom", 17);
s1.introduce();


export {}
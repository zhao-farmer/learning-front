class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

let value = 99;
// 使用defineProperty给Person原型添加age属性，并配置对应的get与set
Object.defineProperty(Person.prototype, "age", {
    get() {
        return value;
    },
    set(val) {
        value = val;
    },
});

const p1 = new Person("张三", 18);
console.log(p1.age); //18
console.log(Person.prototype.age); //18


export {}
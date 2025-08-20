// 使⽤interface 定义Person 对象
interface PersonInterface {
    name: string;
    age: number;
    speak(): void;
}

// 使⽤type 定义Person 对象
type PersonType = {
    name: string;
    age: number;
    speak(): void;
};

// 使⽤PersonInterface
/* let person: PersonInterface = {
  name:'张三',
  age:18,
  speak(){
    console.log(`我叫：${this.name}，年龄：${this.age}`)
  }
 } */

// 使⽤PersonType
let person: PersonType = {
    name: "张三",
    age: 18,
    speak() {
        console.log(`我叫：${this.name}，年龄：${this.age}`);
    },
};

export {}
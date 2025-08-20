interface PersonInterface<T> {
    name: string;
    age: number;
    extraInfo: T;
}
let p1: PersonInterface<string>;
let p2: PersonInterface<number>;
p1 = { name: "张三", age: 18, extraInfo: "⼀个好⼈" };
p2 = { name: "李四", age: 18, extraInfo: 250 };


export {}
class Person<T> {
    constructor(public name: string, public age: number, public extraInfo: T) {}
    speak() {
        console.log(` 我叫${this.name}今年 ${this.age} 岁了 `);
        console.log(this.extraInfo);
    }
}

// 测试代码 1
const p1 = new Person<number>("tom", 30, 250);

//  测试代码2
type JobInfo = {
    title: string;
    company: string;
};
const p2 = new Person<JobInfo>("tom", 30, { title: " 研发总监", company: "发发发科技公司" });


export {}
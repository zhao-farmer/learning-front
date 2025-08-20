// User接口
interface User {
    getTime(): Date;
    log(): void;
}

// 自定义类型Class
type Constructor = new (...args: any[]) => {};

// 创建一个装饰器，为类添加日志功能和创建时间
function LogTime<T extends Constructor>(target: T) {
    return class extends target {
        createdTime: Date;
        constructor(...args: any[]) {
            super(...args);
            this.createdTime = new Date(); // 记录对象创建时间
        }
        getTime() {
            return `该对象创建时间为：${this.createdTime}`;
        }
    };
}

@LogTime
class User {
    constructor(public name: string, public age: number) {}
    speak() {
        console.log(`${this.name}说：你好啊！`);
    }
}

const user1 = new User("张三", 13);
user1.speak();
console.log(user1.getTime());


export {}
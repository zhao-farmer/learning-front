// 声明一个装饰器函数 State，用于捕获数据的修改
function State(target: object, propertyKey: string) {
    // 存储属性的内部值
    let key = `__${propertyKey}`;
    // 使用 Object.defineProperty 替换类的原始属性
    // 重新定义属性，使其使用自定义的 getter 和 setter
    Object.defineProperty(target, propertyKey, {
        get() {
            return this[key];
        },
        set(newVal: string) {
            console.log(`${propertyKey}的最新值为：${newVal}`);
            this[key] = newVal;
        },
        enumerable: true,
        configurable: true,
    });
}

class Person {
    name: string;
    //使用State装饰器
    @State age: number;
    school = "atguigu";
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

const p1 = new Person("张三", 18);
const p2 = new Person("李四", 30);
p1.age = 80;
p2.age = 90;
console.log("------------------");
console.log(p1.age); //80
console.log(p2.age); //90

export {}
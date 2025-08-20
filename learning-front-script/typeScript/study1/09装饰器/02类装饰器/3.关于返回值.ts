function demo(target: Function) {
    // 装饰器有返回值时，该返回值会替换掉被装饰的类
    return class {
        test() {
            console.log(200);
            console.log(300);
            console.log(400);
        }
    };
}

@demo
class Person {
    test() {
        console.log(100);
    }
}
console.log(Person);


export {}
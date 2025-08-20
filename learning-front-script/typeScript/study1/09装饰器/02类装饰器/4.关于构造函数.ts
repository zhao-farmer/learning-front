// 定义一个构造类型，且包含一个静态属性 wife
type Constructor = {
    new (...args: any[]): {}; // 构造签名
    wife: string; // wife属性
};

function test(fn: Constructor) {}

class Person {
    static wife = "asd";
}
test(Person);

export {}
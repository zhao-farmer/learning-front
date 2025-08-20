//装饰器
function test1(target: Function) {
    console.log("test1");
}
//装饰器工厂
function test2() {
    console.log("test2工厂");
    return function (target: Function) {
        console.log("test2");
    };
}
//装饰器工厂
function test3() {
    console.log("test3工厂");
    return function (target: Function) {
        console.log("test3");
    };
}
//装饰器
function test4(target: Function) {
    console.log("test4");
}
@test1
@test2()
@test3()
@test4
class Person {}
/*
    控制台打印：
        test2工厂
        test3工厂
        test4
        test3
        test2
        test1
*/

export {}
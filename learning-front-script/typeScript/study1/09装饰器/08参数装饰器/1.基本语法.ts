/* 
  参数说明：
    ○ target:
      1.如果修饰的是【实例方法】的参数，target 是类的【原型对象】。
      2.如果修饰的是【静态方法】的参数，target 是【类】。
    ○ propertyKey：参数所在的方法的名称。
    ○ parameterIndex: 参数在函数参数列表中的索引，从 0 开始。
*/

function Demo(target: object, propertyKey: string, parameterIndex: number) {
    console.log(target);
    console.log(propertyKey);
    console.log(parameterIndex);
}

// 类定义
class Person {
    constructor(public name: string) {}
    speak(@Demo message1: any, mesage2: any) {
        console.log(`${this.name}想对说：${message1}，${mesage2}`);
    }
}


/* ========= 类装饰器 =========== */
// target 目标类
function decotators1 (target:any) {
    target.prototype.name = 'zhangsan'
}
 
@decotators1
class Test1 {

    constructor () {
 
    }
}
 
const test1:any = new Test1()
console.log(test1.name) // zhangsan




/* ========= 属性装饰器 =========== */
const decotators2: PropertyDecorator = (target: any, key: string | symbol) => {
    console.log(target, key)
}
 
 
class Test2 {
    @decotators2
    public name: string 
    constructor() {
        this.name = ''
    }
    getName() {
        return this.name
    }
}

new Test2() //{} name



/* ========= 方法装饰器 =========== */
const decotators3: MethodDecorator = (target: any, key: string | symbol,descriptor:any) => {
    console.log(target, key,descriptor)
}
 
 
class Test3 {
    public name: string
    constructor() {
        this.name = ''
    }
    @decotators3
    getName(name:string,age:number) {
        return this.name
    }
}
new Test3() // {} getName { value: [Function: getName],...}


/* ========= 参数装饰器 =========== */

const currency4: ParameterDecorator = (target: Object, key: string | symbol | undefined, index: number) => {
    console.log(target, key,index)
}
 
 
class Test4 {
    public name: string
    constructor() {
        this.name = ''
    }
    getName(name:string,@currency4 age:number) {
        return this.name
    }
}
 
new Test4() // {} getName 1

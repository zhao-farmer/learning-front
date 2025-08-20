class A{
    name: string
    constructor(name:string){
        this.name = name
    }
}

class C{
    name:string
    constructor(name:string){
        this.name = name
    }
}

// 中间件用于解耦
class Container{
    modeuls:any
    constructor(){
        this.modeuls = {}
    }

    provide(key:string,modeul:any){
        this.modeuls[key] = modeul
    }

    get(key:string){
        return this.modeuls[key]
    }
}



const mo = new Container()
mo.provide("a",new A("zhangsan"))
mo.provide("a",new C("lisi"))
// 在引入ioc容器 container之后，B和A的代码逻辑已经解耦，
// 可以单独扩展其他功能，也可以方便的加入其他模块C
// 所以在面对复杂的后端业务逻辑中，引入ioc可以降低组件之间的耦合度
// 实现系统各层之间的解耦

class B{
    a:any
    c:any
    constructor(container:Container){
        this.a = container.get("a")
        this.c = container.get("c")
    }
}

new B(mo)
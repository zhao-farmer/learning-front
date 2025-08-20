// 设置a的类型为unknown
let a: unknown
a = 'hello'

// 设置x的数据类型为string
let x: string

// 第一种方式：加类型判断
if (typeof a === 'string') {
    x = a
    console.log(x)
}

// 第二种方式：加断言
x = a as string

//第三种方式：加断言
x = <string>a

export {}
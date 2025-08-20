//设置a的类型为unknown
let a: unknown

//以下对a的赋值，均正常
a = 100
a = false
a = '你好'

// 设置x的数据类型为string
let x: string
x = a //警告：不能将类型“unknown'”分配给类型“string”

export {}
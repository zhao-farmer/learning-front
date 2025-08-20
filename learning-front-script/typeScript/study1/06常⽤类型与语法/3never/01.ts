/*指定a的类型为never,那就意味着a以后不能存任何的数据了*/

let a: never
//以下对a的所有赋值都会有警告
a = 1
a = true
a = undefined
a = null


export {}
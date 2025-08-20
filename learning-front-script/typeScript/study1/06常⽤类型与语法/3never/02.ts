//指定a的类型为string
let a:string

//给a设置一个值
a = 'hello'
if (typeof a ==='string') {
    console.log(a.toUpperCase())
}else{
    console.log(a) //Typescript会推断出此处的a是never,因为没有任何一个值符合此处的逻辑
}


export {}
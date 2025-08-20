// 第⼀个元素必须是string 类型，第⼆个元素必须是number 类型。
let arr1: [string,number]
// 第⼀个元素必须是number 类型，第⼆个元素是可选的，如果存在，必须是boolean 类型。
let arr2: [number,boolean?]
// 第⼀个元素必须是number 类型，后⾯的元素可以是任意数量的string 类型
let arr3: [number,...string[]]

// 可以赋值
arr1 = ['hello',123]
arr2 = [100,false]
arr2 = [200]
arr3 = [100,'hello','world']
arr3 = [100]
// 不可以赋值，arr1声明时是两个元素，赋值的是三个
arr1 = ['hello',123,false]

export {}
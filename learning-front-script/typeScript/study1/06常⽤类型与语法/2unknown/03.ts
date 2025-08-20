let str1: string
str1 = 'hello'
str1.toUpperCase()  //无警告

let str2: any
str2 = 'hello'
str2.toUpperCase()  //无警告

let str3: unknown
str3 = 'hello';
str3.toUpperCase();  //警告：“str3”的类型为“未知”
    
// 使用断言强制指定str3的类型为string
(str3 as string).toUpperCase()//无警告

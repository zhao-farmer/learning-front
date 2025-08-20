// 限制person对象必须有name属性，可选age属性但值必须是数字，同时可以有任意数量、任意类型的其他属性
let person: {
    name: string
    age?: number
    [key: string]: any // 索引签名，完全可以不⽤key这个单词，换成其他的也可以
   }
   
   // 赋值合法
   person = {
    name:'张三',
    age:18,
    gender:'男'
   }


   export {}
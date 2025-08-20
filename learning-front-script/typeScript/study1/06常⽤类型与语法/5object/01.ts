let a:object  //a的值可以是任何【非原始类型】，包括：对象、函数、数组等
//以下代码，是将【非原始类型】赋给a,所以均符合要求

a = {}
a = {name: '张三'}
a = [1, 3, 5, 7, 9]
a = function () {}
a = new String('123')

class Person {}
a = new Person() 
//以下代码，是将【原始类型】赋给a,有警告
a = 1           //警告：不能将类型“number”分配给类型“object”
a = true        //警告：不能将类型boolean'”分配给类型“object'
a = '你好'       //警告：不能将类型“string”分配给类型“object'”
a = null        //警告：不能将类型“nul1”分配给类型“object”
a = undefined   //警告：不能将类型“undefined”分配给类型“object”


export {}
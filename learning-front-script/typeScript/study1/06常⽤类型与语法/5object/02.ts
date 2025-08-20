let b: Object //b的值必须是Object的实例象（像法undefined和nul1的任何值）

//以下代同，均关警否，因为格就的值，都是0bCct的实例对参
b = {}
b = {name: '张三'}
b = [1, 3, 5, 7, 9]
b = function () {}
b = new String('123')
class Person {}
b = new Person()

b = 1            //1不是陆0t的实刷对象，，但其包装对象是Object的实例
b = true         //true不是Object的实例对象，但其包装对象是Object的实例
b = '你好'        //“你好”不是Object的实例对象，但其包装对象是Object的实例

//以下代码均有警告
b = null     //警告：不能将类型“nu11”分配给类型“object”
b=undefined  //警告：不能将类型“undefined”分配给类型“object”


export {}
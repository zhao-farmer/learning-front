// 块级作用域内部的函数声明语句，建议不要使用
{
    let a = 'secret';
    function f() {
      return a;
    }
}

// 块级作用域内部，优先使用函数表达式
{
    let a = 'secret';
    let f = function () {
        return a;
    };
}
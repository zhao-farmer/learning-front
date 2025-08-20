var target = { name: "张三", age: 18 };
var source = { money: "10000" };
var result = Object.assign({}, target, source);
console.log(result);

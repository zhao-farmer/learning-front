var target = { name: "张三", age: 18 };
var source1 = { money: "10000", age: 28 };
var source2 = { mood: "happy", age: 25 };
var result = Object.assign(target, source1, source2);
console.log(target);
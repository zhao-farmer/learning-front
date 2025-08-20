var target = { name: '张三', age: 18 }
var source1 = { state: 'single', age: 22 }
var source2 = { mood: 'happy', age: 25 }
var result = Object.assign(target, source1, source2)

console.log(target, 'assign')

var targetObj = { name: '张三', age: 18 }
var sourceObj1 = { state: 'single', age: 22 }
var sourceObj2 = { mood: 'happy', age: 25 }
var result = $.extend(targetObj, sourceObj1, sourceObj2)

console.log(targetObj, 'extend')
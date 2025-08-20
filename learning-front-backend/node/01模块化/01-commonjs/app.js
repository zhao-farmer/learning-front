// app.js - 使用 math 模块 (CommonJS)

// 1. 使用 require 导入 math.js 模块
//    Node.js 会找到 math.js，执行它，并将其 module.exports 赋值给 mathConstants 变量
const mathUtils = require('./math.js'); // 使用相对路径

// 2. 使用导入的模块
const sum = mathUtils.add(5, 3);
const circumference = 2 * mathUtils.PI * 10;

console.log(`5 + 3 = ${sum}`); // 输出: 5 + 3 = 8
console.log(`半径为 10 的圆周长大约是: ${circumference}`); // 输出: 半径为 10 的圆周长大约是: 62.8318

// 如果 math.js 使用 module.exports = add; 导出单个函数
// const addFunction = require('./math.js');
// const sum = addFunction(5, 3);
// console.log(sum); // 输出: 8

// math.js - 定义一个数学模块 (CommonJS)

function add(a, b) {
    return a + b;
}

const PI = 3.14159;

// 方式一：通过 exports 添加属性 (推荐)
exports.add = add;
exports.PI = PI;

// 方式二：直接修改 module.exports 对象 (可以导出任何类型)
// module.exports = {
//   add: add,
//   PI: PI
// };

// 方式三：导出单个函数 (如果模块只提供一个功能)
// module.exports = add;

// 错误的方式：这不会导出任何东西！
// exports = {
//   add: add,
//   PI: PI
// };
// 因为这改变了 exports 的指向，module.exports 仍然是 {}

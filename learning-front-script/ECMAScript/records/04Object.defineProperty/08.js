const o = {}; // 创建一个新对象

// 通过 defineProperty 使用数据描述符添加对象属性的示例
Object.defineProperty(o, "a", {
  value: 37,
  writable: true,
  enumerable: true,
  configurable: true,
});
// 'a' 属性存在于对象 o 中，其值为 37
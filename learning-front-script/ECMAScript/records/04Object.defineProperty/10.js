const o = {}; // 创建一个新对象
// 通过 defineProperty 使用访问器属性描述符添加对象属性的示例
let bValue = 38;
Object.defineProperty(o, "b", {
  get() {
    return bValue;
  },
  set(newValue) {
    bValue = newValue;
  },
  enumerable: true,
  configurable: true,
});
o.b; // 38
// 'b' 属性存在于对象 o 中，其值为 38。
// o.b 的值现在始终与 bValue 相同，除非重新定义了 o.b。
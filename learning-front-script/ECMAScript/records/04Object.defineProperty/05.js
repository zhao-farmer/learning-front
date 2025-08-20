const o = {};
Object.defineProperty(o, "b", {
  writable: false,
  configurable: true,
});
Object.defineProperty(o, "b", {
  value: 1,
}); // 我们可以使用 defineProperty 方法替换属性的值
console.log(o.b); // 1
o.b = 2; // 在严格模式下抛出 TypeError: Cannot assign to read only property 'b' of object '#<Object>'
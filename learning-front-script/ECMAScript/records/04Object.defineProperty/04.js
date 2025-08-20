const o = {};
Object.defineProperty(o, "b", {
  writable: true,
  configurable: false,
});
console.log(o.b); // undefined
Object.defineProperty(o, "b", {
  value: 1,
}); // 即使 configurable 为 false，因为对象是可写的，我们仍然可以替换属性的值。
console.log(o.b); // 1
o.b = 2; // 我们也可以使用赋值运算符来更改属性的值
console.log(o.b); // 2
// 切换属性的可写性
Object.defineProperty(o, "b", {
  writable: false,
});
Object.defineProperty(o, "b", {
  value: 1,
}); // TypeError: because the property is neither writable nor configurable, it cannot be modified
// 此时，无法再次修改属性 'b' 或者恢复它的可写性。
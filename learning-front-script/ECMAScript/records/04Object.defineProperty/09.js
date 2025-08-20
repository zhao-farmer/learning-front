const o = {}; // 创建一个新对象

Object.defineProperty(o, "a", {
  value: 37,
  writable: false,
});
console.log(o.a); // 37
o.a = 25; // 不会抛出错误
// （在严格模式下，即使值相同，它也会抛出异常）
console.log(o.a); // 37；赋值不会成功
// 严格模式
(() => {
  "use strict";
  const o = {};
  Object.defineProperty(o, "b", {
    value: 2,
    writable: false,
  });
  o.b = 3; // 抛出 TypeError: "b" is read-only
  return o.b; // 如果没有上一行的话，会返回 2
})();
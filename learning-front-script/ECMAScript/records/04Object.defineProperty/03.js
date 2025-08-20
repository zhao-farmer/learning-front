const o = {};
Object.defineProperty(o, "a", {
  get() {
    return 1;
  },
  configurable: false,
});
Object.defineProperty(o, "a", {
  configurable: true,
}); // 抛出 TypeError 
Object.defineProperty(o, "a", {
  enumerable: true,
}); // 抛出 TypeError
Object.defineProperty(o, "a", {
  set() {},
}); // 抛出 TypeError（set 在之前未定义）
Object.defineProperty(o, "a", {
  get() {
    return 1;
  },
}); // 抛出 TypeError
// （即使新的 get 做的事情完全相同）
Object.defineProperty(o, "a", {
  value: 12,
}); // 抛出 TypeError
// ‘value’只有在 writable 为 true 时才可以被修改
console.log(o.a); // 1
delete o.a; // 无法删除；严格模式下会抛出错误
console.log(o.a); // 1
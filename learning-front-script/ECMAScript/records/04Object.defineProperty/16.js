const o = {}; // 创建一个新对象
// 数据描述符和访问器描述符不能混合使用
Object.defineProperty(o, "conflict", {
  value: 0x9f91102,
  get() {
    return 0xdeadbeef;
  },
});
// 抛出错误 TypeError: value appears only in data descriptors, get appears only in accessor descriptors
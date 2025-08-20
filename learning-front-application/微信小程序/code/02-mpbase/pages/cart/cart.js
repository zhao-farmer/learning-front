// pages/cart/cart.js
Page({
  // 这是按钮绑定事件处理函数
  btnHandler1(event){
    console.log(event);
    console.log(event.mark);
  },
  // 这是 view 绑定的事件处理函数
  btnHandler2(event){
    // 点击橘色区域（不惦记按钮）
    // 通过书记兼对象获取的是 view 身上绑定的数据

    // 点击按钮 （不点击橘色区域）
    // 通过事件对象获取到的是 触发事件的节点 以及 父节点身上所有的 mark 数据

    console.log(event);
    console.log(event.mark);
  },
})
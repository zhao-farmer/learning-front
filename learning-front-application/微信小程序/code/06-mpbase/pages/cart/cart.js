// pages/cart/cart.js
Page({
  data:{
    num:3,
  },
  getData(event){
    // 可以通过 事件对象.detail 获取子组件传递父组件的数据
    // console.log(event);
    this.setData({
      num:event.detail
    })
  }
})
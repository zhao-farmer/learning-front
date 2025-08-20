// pages/market/market.js
Page({
  data:{
    num:1,
    isFlag:false
  },

  // 更新 num
  updateNum(){
    this.setData({
      num:this.data.num + 1
    })
  },
  handler(){
    this.setData({
      isFlag:!this.data.isFlag
    })
  }
})
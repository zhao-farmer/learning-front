// pages/cart/cart.js
Page({
  navigateTo(){
    // 保留当前页面，跳转到应用中其他页面，不能跳转到TabBar页面
    wx.navigateTo({
      url: '/pages/list/list?id=1&name=tom'
      // url: '/pages/cate/cate'
    })
  },
  redirectTo(){
    // 关闭当前页面，跳转到应用中其他页面，不能跳转到TabBar页面
    wx.redirectTo({
      url: '/pages/list/list?id=1&name=tom'
      // url: '/pages/cate/cate'
    })
  },

  switchTab(){
    // 跳转到TabBar页面，不能跳转非TabBar页面，后面不能传递参数
    wx.switchTab({
      // url: '/pages/list/list'
      url: '/pages/cate/cate'
    })
  },
  reLaunch(){
    // 关闭所有页面，然后跳转到应用中某一个页面
    wx.reLaunch({
       url: '/pages/list/list?id=1&name=tom'
      //  url: '/pages/cate/cate'
    })
  },
  
})
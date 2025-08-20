// pages/index/index.js
Page({

  /**
   * 生命周期函数--监听页面加载--一个页面只会调用一次
   */
  onLoad(options) {
    console.log("onLoad 页面创建的时候执行");
  },

  /**
   * 生命周期函数--监听页面初次渲染完成--一个页面只会调用一次
   */
  onReady() {
    console.log("onReady 页面初次渲染完成，代表页面已经准备妥当，可以和视图层进行交互");
  },

  /**
   * 生命周期函数--监听页面显示--如果从后台进入前台时
   */
  onShow() {
    console.log("onShow 页面在前台展示的时候");
  },

  /**
   * 生命周期函数--监听页面隐藏--在当前小程序进入后台时也会触发
   */
  onHide() {
    console.log("onHide 当前页面被隐藏时");
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    console.log("onHide 当前页面被销毁时");
  },

})
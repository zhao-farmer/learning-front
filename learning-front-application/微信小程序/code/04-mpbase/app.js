App({
  onLaunch: function () {
    // 当进行冷启动时，才会触发 onLanch 钩子函数
    // 如果热启动，不会触发onLanch 钩子函数，会触发 onShow 钩子函数
    // 因此 onLanch (全局只触发一次)
    console.log("onLanch 小程序初始化完成");
  },
  onShow: function (options) {
    console.log("onShow 小程序启动，或从后台进入前台提示");
  },
  onHide: function () {
    console.log("onHide 前台进入后台");
  },

})

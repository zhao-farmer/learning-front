// app.js
App({
  // 当小程序初始化完成，会触发 onLanch (全局只触发一次)
  onLaunch:function(){
    console.log("🥇小程序应用 - onLaunch");
  },

  // 当小程序启动，或从后台进入前台显示，会触发onShow
  onShow:function(){
    console.log("🥇小程序应用 - onShow");
  },

  // 当小程序从前台进入后台，会触发 onHide
  onHide:function(){
    console.log("🥇小程序应用 - onHide");
  },

})

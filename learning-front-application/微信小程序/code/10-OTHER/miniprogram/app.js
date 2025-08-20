// app.js
App({
  // 全局共享的数据
  globalData:{
    token:''
  },

  // 全局共享的方法
  setToken(token){
    // 如果想要获取 token，可以使用 this 的方式进行获取
    this.globalData.token = token
  }

})

// getApp() 方法用来获取全局唯一的 APP() 示例
const appInstance = getApp()
Page({
  login(){
    // console.log(appInstance);

    appInstance.setToken("115151ad5ad1f1a")
  }
})
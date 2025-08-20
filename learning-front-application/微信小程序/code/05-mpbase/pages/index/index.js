// index.js
Page({
  data:{
    list:[]
  },

  // 获取数据
  getData(){

    wx.showLoading({
      // 用来显示提示的内容
      // 提示的内容不会自动换行，如果提示的内容比较多，因为在同一行展示
      // 多出来的内容就会被覆盖
      title: '数据加载中...',
      // 是否显示透明蒙层，防止触摸穿透
      mask:true
    })


    // 如果需要发起网络请求，需要使用wx.request API
    wx.request({
      // 接口地址
      url: 'https://gmall-prod.atguigu.cn/mall-api/index/findBanner',
      // 请求方式
      method: 'GET',
      // 请求参数
      data:{},
      // 请求头
      header:{},
      // API 调用成功以后，执行的回调
      success: (res)=>{
        if(res.data.code === 200){
          this.setData({
            list: res.data.dta
          })
        }
      },
      // API 调用失败以后，执行的回调
      success: (res)=>{
        console.log(res);
      },
      // API 不管调用成功还是失败以后，都会调用
      complete:()=>{
        // 关闭loading提示框
        // hideLoading与showLoading必须结合使用
        wx.hideLoading()
      }
    })
  },

  // 删除商品
  async delHandler(){
    const {confirm} = await wx.showModal({
        title: '提示',
        content: '是否删除该商品？',
    })
    
    if(confirm){
      // showToast: 消息提示框
      wx.showToast({
        title: '删除成功',
        icon: "none",
        duration: 2000
      })
    }else{
      wx.showToast({
        title: '取消删除',
        icon: "error",
        duration: 2000
      })
    }
  
  }
})

// pages/index/index.js
Page({
  data:{
    avatarUrl:"../../assets/Jerry.png"
  },
  // 用来获取微信头像
  chooseAvatar(event){
    // console.log(event);

    // 目前获取的微信头像是临时路径
    // 临时路径是有失效时间的，在实际开发中需要将临时路径上传到公司的服务器
    const { avatarUrl } = event.detail

    this.setData({
      avatarUrl
    })
  },

  // 获取微信头像
  onSubmit(event){
    // console.log(event);
    const {nickname} = event.detail.value
    console.log(nickname);
  }
})
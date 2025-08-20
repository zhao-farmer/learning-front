// components/custom05/custom05.js
Component({
  data: {
    num:100
  },

  methods: {
    // 将数据传递给父组件
    sendData(){
      // 如果需要将数据传递给父组件
      // 需要使用triggerEvent 发射自定义事件
      // 第二个参数，是携带的参数
      this.triggerEvent("myEvent",this.data.num)
    }
  }
})
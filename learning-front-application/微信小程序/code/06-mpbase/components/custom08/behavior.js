const behavior = Behavior({
  properties: {
    label: {
      type: String,
      value: "我已同意该协议"
    }
  },
  data: {
    name: "tom",
    obj: {
      name: "Tyke"
    }
  },
  methods: {
    updateName() {
      console.log("behavior 方法");
      this.setData({
        name: "jerry"
      })
    }
  },
  lifetimes: {
    attached() {
      console.log("我是 behavior 的生命周期函数");
    }
  }
})

export default behavior
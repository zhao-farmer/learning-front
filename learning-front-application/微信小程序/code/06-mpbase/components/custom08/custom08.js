import behavior from "./behavior"

Component({
  behaviors:[behavior],

  // 在以后开发中，使用benaviors 进行代码复用时
  // 组件 和 behaviors 可能会存在相同的字段

  // 如果存在相同的 properties, 就近原则，使用组件内部的数据
  properties:{
    label:{
      type:String,
      value:"匿名提交"
    }
  },
  // 如果存在相同的data
  // 如果时对象类型,属性会合并
  // 如果不是对象类型的数据，就近原则，展示组件内部数据
  data:{
    name:"组件中的name",
    obj:{
      // name:"组件中的 obj name",
      age:100
    }
  },
  // 如果存在相同的方法，就近原则，调用组件内部方法
  methods:{
    updateName(){
      console.log("我是组件内部的方法");
    }
  },

  // 如果存在相同的生命周期函数，生命周期函数都会触发
  lifetimes: {
    attached() {
      console.log("我是组件内部调用的生命周期函数");
    }
  }
})
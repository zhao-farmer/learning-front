// components/custom06/custom06.js
Component({
  data:{
    name:"tom"
  },
  // 组件生命周期生命对象
  lifetimes:{
    // created：组件实例被创建好以后执行
    created(){
      console.log("created");
      // 在created 钩子函数中不能调用setData
      // 可以给组件添加一些自定义的属性，可以通过this的方式进行添加
      this.test = '测试'
      
      // this.setData({
      //   name:"jerry"
      // })
    },
    // 组件被初始化完毕，模板解析完成，已经把组件挂载到页面上
    attached(){
      // 一般页面中交互在 attached 钩子函数中进行执行
      console.log("attached");

      this.setData({
        name:"jerry"
      })

      console.log(this.test);
    },
    // 组件被销毁时
    detached(){
      console.log("detached");
    }
  },

  // 组件所在页面的生命周期
  pageLifetimes:{
    // 监听组件所在页面展示（后台切前台）状态
    show(){
      console.log("组件所在的页面被展示");
    },

    // 组件所在页面隐藏（前台切后台、点击talbar）状态
    hide(){
      console.log("组件所在的页面被隐藏");
    }
  }
})
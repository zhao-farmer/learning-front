// components/custom07/custom07.js
Component({
  lifetimes:{
    created(){
      console.log("🥉小程序组件 - created");
    },
    attached(){
      console.log("🥉小程序组件 - attached");
    },
    detached(){
      console.log("🥉小程序组件 - detached");
    }
  },
  pageLifetimes:{
    show(){
      console.log("🥉小程序组件 - show");
    },
    hide(){
      console.log("🥉小程序组件 - hide");
    }
  }
})
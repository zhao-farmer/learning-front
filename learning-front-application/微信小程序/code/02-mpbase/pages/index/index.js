// index.js
Page({
  // 事件处理函数需要写到Page中才生效
  handler(event){
    console.log("事件触发了");
    console.log(event);
  },
  getInputVal(event){
    console.log(event.detail.value);
  },
  parentHanldler(event){
    console.log("父组件");
  },
  btnHandler(event){
    console.log("子组件");
  }

})

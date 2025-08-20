// pages/cate/cate.js
Page({
  // 按钮触发的事件处理函数
  btnHandle1(event){
    // curentTarget 事件绑定者，也就是指：哪个组件绑定了当前事件处理函数
    // target 事件触发者，也就是指：哪个组件触发了当前事件处理函数
    // currentTarget 和 target 都是指按钮，因为是绑定的事件处理函数，同时点击按钮触发事件函数

    // 这时候通过谁来获取数据都可以
    console.log(event.currentTarget.dataset.id);
    console.log(event.target.dataset.name);
  },
  btnHandler2(event){
    // 点击橘色区域（不点击按钮）
    // currentTarget 事件绑定者: view
    // target 事件触发者：view
    // currentTarget 和 target都是指view

    // 点击按钮
    // currentTarget 事件绑定者: view
    // target 事件触发者：按钮
    // 如果想获取 view 身上的数据，就必须使用currentTarget 才可以
    // 如果想获取的事件触发者本身的数据，就需要使用target

    console.log(event.currentTarget.dataset.id);
    console.log(event.target.dataset.name);
  },
  btnHandler2(event){
    // 在传递参数的时候，如果自定义属性是多个单词，单词与单词直接使用 - 进行连接
    // 在事件中会被转换为小驼峰写法
    console.log(event.currentTarget.dataset.parentId);

    // 在传递参数的时候，如果自定义属性是多个单词，单词与单词如果使用小驼峰写法
    // 在事件中会被转换为全部小写的
    console.log(event.currentTarget.dataset.parentname);
  }

})
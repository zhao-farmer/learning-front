/* 
  该文件是整个项目的入口文件
*/
//引入vue
import Vue from 'vue'
//引入App组件，他是所有组件的父组件
import App from './App.vue'
//关闭vue的生产提示
Vue.config.productionTip = false

//创建Vue实例对象 --vm
new Vue({
  el:'#app',
  render: h => h(App),

  /* 验证 */
  // render(createElement){
  //   return createElement("h1","你好啊！")
  // }
})

// 使用el配置等于$mount挂载
// new Vue({
//   render: h => h(App),
// }).$mount('#app')

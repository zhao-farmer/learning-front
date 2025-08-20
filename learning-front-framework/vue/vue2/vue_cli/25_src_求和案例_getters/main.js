//引入vue
import Vue from 'vue'
//引入App
import App from './App.vue'

//引入store
import store from './store'

// 关闭vue的生产提示
Vue.config.productionTip = false


//创建Vue实例对象 
new Vue({
    el:'#app',
    render: h => h(App),
    store,
})
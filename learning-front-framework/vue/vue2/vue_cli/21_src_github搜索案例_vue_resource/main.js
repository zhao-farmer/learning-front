//引入vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//引入插件
import vueResource  from 'vue-resource'

// 关闭vue的生产提示
Vue.config.productionTip = false

//使用插件
Vue.use(vueResource)

//创建Vue实例对象 
new Vue({
    el:'#app',
    render: h => h(App),
    beforeCreate(){
        Vue.prototype.$bus = this;  //安装全局事件总线
    }
})
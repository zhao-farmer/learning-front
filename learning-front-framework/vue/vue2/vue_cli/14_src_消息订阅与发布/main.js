import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false
// 创建一个vc实例模板  组件实例对象 全局进行应用
// const demo = Vue.extend({})
// const d = new demo();
// Vue.prototype.x = d

//创建Vue实例对象 --vm
new Vue({
    el:'#app',
    render: h => h(App),
    beforeCreate(){
        Vue.prototype.$bus = this;  //安装全局事件总线
    }
})
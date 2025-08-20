// 该文件用于创建Vuex中最为核心的store

//引入vue核心库
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex' 
//使用vuex插件 
Vue.use(Vuex)


import countOptions from './count.js'
import personOptions from './person.js'


// 创建store
export default new Vuex.Store({
    modules:{
        countAbout:countOptions,
        personAbout:personOptions,
    }
})


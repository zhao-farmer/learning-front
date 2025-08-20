// 创建一个路由器，并暴漏出去

// 第一步：引入createRouter
import { createRouter,createWebHistory,createWebHashHistory } from "vue-router";
// 引入一个一个可能要呈现的组件
import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import News from "@/pages/News.vue"; 
import Detail from "@/pages/Detail.vue"; 

// 第二步：创建路由器
const router = createRouter({
    history:createWebHistory(), // 路由器的工作模式
    routes:[
        {
            name:'zhuye',
            path:'/home',
            component:Home
        },
        {
            name:'xinwen',
            path:'/news',
            component:News,
            children:[
                {
                    name:'xiangqing',
                    path:'detail/:id/:title/:content?',
                    component:Detail,
                }
            ]
        },
        {
            name:'guanyu',
            path:'/about',
            component:About
        },
    ]
})

// 暴漏出去router
export default router
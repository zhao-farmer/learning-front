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
                    // path:'detail/:id/:title/:content?', //params写法
                    path:'detail', // query写法
                    component:Detail,
                    // 第一种写法：将路由收到的所有params参数作为props传给路由组件
                    // props:true
                    
                    // 第二种写法：可以自己决定将什么作为props给路由组件
                    props(route){
                        return route.query
                    }

                    //第三种写法：对象写法，自己决定写什么
                    // props:{
                    //     a:100,
                    //     b:200,
                    //     c:300
                    // }
                }
            ]
        },
        {
            name:'guanyu',
            path:'/about',
            component:About
        },
        {
            path:'/',
            redirect:'/home'
        }
    ]
})

// 暴漏出去router
export default router
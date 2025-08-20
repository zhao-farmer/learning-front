// 改文件专门用于创建整个应用的路由器
//引入VueRouter
import VueRouter from "vue-router";
//引入路由组件
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'

//创建router实例对象，去管理一组一组的路由规则
const router = new VueRouter({
    routes:[
        {
            name:'guanyu',
            path:'/about',
            component:About
        },
        {
            path:'/home',
            component:Home,
            children:[      //通过children配置子级路由
                {
                    path:'news',    //此处一定不要写 /news
                    component:News,
                },
                {
                    path:'message', //此处一定不要写 /message
                    component:Message,
                    children:[
                        {
                            name:'xiangqing',       //给路由加上名称
                            path:'detail/:id/:title',   //使用占位符声明接受params参数
                            component:Detail,
                        }
                    ]
                },
            ]
        },
    ]
})

//暴露路由器
export default router
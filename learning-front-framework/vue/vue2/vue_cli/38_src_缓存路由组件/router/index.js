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
                            path:'detail',   //使用占位符声明接受params参数
                            component:Detail,
                            // props的第一种写法，值是对象,该对象中所有key-value都会以props的形式传给Detail组件。
                            // props:{id:1,title:'hello'},

                            // props的第二种写法，值为布尔值，若布尔值为真，就会把该路由组件收到的所有params参数，以props的形式传给Detail组件。
                            // props:true,

                            // props的第三种写法，值为函数返回的对象中所有key-value都会以props的形式传给Detail组件。
                            props($route){
                                return {id:$route.query.id,title:$route.query.title}
                            }


                        }
                    ]
                },
            ]
        },
    ]
})

//暴露路由器
export default router
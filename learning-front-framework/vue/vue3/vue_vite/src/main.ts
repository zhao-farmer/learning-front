import {createApp} from 'vue'
import App from './App.vue'
import Hello from './Hello.vue'

// 创建应用
const app = createApp(App)
// 全局组件注册
app.component("Hello",Hello)
// app.config.globalProperties  全局属性配置 
// 与vue2中原型链类似 但是不建议使用了
app.config.globalProperties.x = 99

declare module 'vue'{
    interface ComponentCustomProperties{
        x:number
    }
}


// 注册全局指令
app.directive('beauty',(element,{value})=>{
    element.innerText += value
    element.style.color = 'green'
    element.style.backgroundColor = 'yellow'
})

// 挂载应用
app.mount('#app')

setTimeout(() => {
    // 卸载应用
    app.unmount()
}, 2000);
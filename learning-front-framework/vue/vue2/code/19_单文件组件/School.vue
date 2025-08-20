<template>
    <!-- template 代表组件的结构 -->
    <div>
        <div class="demo">
            <h2>学校名称：{{name}}</h2>
            <h2>学校地址：{{address}}</h2>
            <button @click="showName">点我提示学校名</button>
        </div>
    </div>
</template>


<script>
    // script中 组件交互相关的代码（数据、方法等等）

    /* 知识点一 暴漏方式 */
    // 分别暴漏
    //  const school = {}
    // 统一暴漏
    // export {school}
    // 默认暴漏
    // export default school


    // 01最原始的方式
    // const school =  Vue.extend({
    //     name:'school',
    //     data(){
    //         return {
    //             name:'尚硅谷',
    //             address:'北京昌平',
    //         }
    //     },
    //     methods: {
    //         showName(){
    //             alert(this.name)
    //         }
    //     }
    // });
    // export default school;

    // 02 默认暴漏写在上方
    // export default Vue.extend({
    //     name:'school',
    //     data(){
    //         return {
    //             name:'尚硅谷',
    //             address:'北京昌平',
    //         }
    //     },
    //     methods: {
    //          showName(){
    //             alert(this.name)
    //          }   
    //     }
    // });


    // 03 使用Vue的特性 可以将Vue.extend省略
    export default {
        name:'School', //最好与外部的文件名保持一致 开发者工具好调试
        data(){
            return {
                name:'尚硅谷',
                address:'北京昌平',
            }
        },
        methods: {
             showName(){
                alert(this.name)
             }   
        }
    }

   
</script>

<style>
    /* 组件的样式 */
    .demo{
        background-color: orange;
    }
</style>
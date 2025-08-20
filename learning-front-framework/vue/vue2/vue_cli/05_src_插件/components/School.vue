<template>
    <div>
        <!-- 进行过滤 只包含前四位 -->
        <h2 >学校名称：{{name | mySlice}}</h2>
        <h2>学校地址：{{address}}</h2>
        <!-- 条用了vm与vc上的一个方法 -->
        <button @click="test">点我测试一个hello方法</button>
    </div>
</template>


<script>
    export default {
        name: 'School', 
        data(){
            return {
                name:'尚硅谷atguigu',
                address:'北京昌平',
            }
        },
        methods:{
            test(){
                this.hello();
            }
        }
    }
</script>

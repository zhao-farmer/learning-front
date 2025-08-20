<template>
    <div class="person">
        <h2>当前的求和为：{{ sum }}</h2>
        <button @click="add">点我sum+1</button>
    </div>
</template>

<script>
    export default{
         name:'Person',
         data(){
            return{
                sum:1
            }
         },
         methods:{
            add(){
                this.sum += 1;
            }
         },
         // 创建前的钩子
         beforeCreate(){
            console.log('创建前');
         },
         // 创建完毕的钩子
         created(){
            console.log('创建完毕');
         },
         // 挂载 就是将当前的vue文件塞入浏览器中
         beforeMount(){
            console.log('挂载前');
         },
         mounted(){
            console.log('挂载完毕');
         },
         beforeUpdate(){
            console.log('更新前');
         },
         updated(){
            console.log('更新完毕');
         },
         beforeDestroy(){
            console.log('销毁前');
         },
         destroyed(){
            console.log('销毁了');
         },
    }
</script >

<style scoped>
.person{
    background-color: skyblue;
    padding: 20px;
    font-size: 15px;
}
</style>
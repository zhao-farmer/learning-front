<template>
    <div class="school">
        <h2  class="title">学校名称：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
    </div>
</template>

<script>
    import pubsub from 'pubsub-js'
    export default {
        name: 'School', 
        data(){
            return {
                name:'尚硅谷',
                address:'北京昌平',
            }
        },
        mounted(){
            // 开始绑定hello事件
            // this.$bus.$on('hello',(data)=>{
            //     console.log("我是School组件，收到了数据",data);
            // })
            // 第一个参数 消息名  第二个参数 数据
            // 非箭头函数收不到this 因为引用的第三方库
            this.pubId = pubsub.subscribe('hello',(msgName,data) =>{
                console.log(this);
                
                console.log('有人发布了hello消息，hello消息的问题执行了',msgName,data);
            })
        },
        beforeDestroy(){
            this.$bus.$on('hello');
            //取消订阅
            pubsub.unsubscribe(this.pubId);
        }
      
    }
</script>
<style scoped>
    .school{
        background-color: skyblue;
        padding: 5px;
    }
</style>

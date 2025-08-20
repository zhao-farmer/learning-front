<template>
    <div>
        <ul>
            <li v-for="message in messageList" :key="message.id">
                <!-- 跳转路由并携带params参数，to的字符串写法 -->
                <!-- <router-link :to="`/home/message/detail/${message.id}/${message.title}`">{{message.title}}</router-link > -->
    
                <!-- 跳转路由并携带query参数，to的对象写法 -->
                <router-link :to="{
                    // path:'/home/message/detail',
                    name:'xiangqing',
                    query:{
                        id:message.id,
                        title:message.title
                    }
                }">{{message.title}}
                </router-link >
                <button @click="pushShow(message)">push查看</button>
                <button @click="replaceShow(message)">replace查看</button>
            </li>
        </ul>
        <hr>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name:'Messaage',
        data(){
            return{
                messageList:[
                    {id:'001',title:'消息001'},
                    {id:'002',title:'消息002'},
                    {id:'003',title:'消息003'},
                ]
            }
        },
        methods:{

            // this.$route 路由 （当前路由信息 用于去值与判断路径）
            // this.$router 路由器 （有多个函数，用于跳转回退）

            pushShow(message){
                this.$router.push({
                    name:'xiangqing',
                    query:{
                        id:message.id,
                        title:message.title
                    }
                })  
            },
            replaceShow(message){
                this.$router.replace({
                    name:'xiangqing',
                    query:{
                        id:message.id,
                        title:message.title
                    }
                })  
            },

            
        }
    };
</script>



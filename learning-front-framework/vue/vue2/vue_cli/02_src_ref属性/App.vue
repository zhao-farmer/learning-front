<template>
    <div>
        <h1 v-text="msg" id="title1"  ref="title2"></h1>
        <button @click="showDOM">点我输出上方的DOM元素</button>
        <School id="title3"  ref="title4"></School>
    </div>
</template>

<script>
import School from './components/School.vue'

export default {
    name:'App',
    components:{School},
    data(){
        return{
            msg:'欢迎学习vue'
        }
    },
    methods:{
        showDOM(){
            console.log(document.getElementById('title1')); //真实dom元素
            console.log(this.$refs.title2);                 //真实dom元素
            console.log(document.getElementById('title3')); //真实dom元素
            console.log(this.$refs.title4);                 //VueComponent 对象
            
        }
    }
   
}
</script>

<template>
    <div class="app">
        <h1>{{msg}},学生姓名是：{{studentName}}</h1>
        <!-- 通过父组件给子组件传递函数类型的props实现，子给父传递数据 -->
        <School :getSchoolName="getSchoolName"></School>
        <!-- 由于v-on在student这个组件标签上，
            所以说给student这个组件的实例对象vc身上绑定了一个事件，
            事件名叫atguigu，如果以后有人触发的这个事件，
            那么demo函数就会被调用 -->

        <!-- 通过父组件给子组件绑定一个自定义事件实现，子给父传递数据
            （第一种写法,使用@或v-on） -->
        <!-- <Student v-on:atguigu="getStudentName"/> -->
        <!-- 简写方式 -->
        <!-- <Student @atguigu="getStudentName"/> -->
         <!-- 触发一次 -->
         <!-- <Student @atguigu.once="getStudentName"/> -->

        <!-- 通过父组件给子组件绑定一个自定义事件实现，子给父传递数据 
            （第二种写法,使用ref）-->
        <Student ref="student" @click.native="show"/>
    </div>
</template>

<script>
import School from './components/School.vue'
import Student from './components/Student.vue'
export default {
    name:'App',
    components:{School,Student},
    data(){
        return {
            msg:'你好啊！',
            studentName:'',
        }
    },
    methods:{
        getSchoolName(name){
            console.log("App收到了学校名",name);
            
        },
        getStudentName(name,...args){
            console.log("App收到了学生名",name,args);  
            this.studentName = name;
        },
        show(){
            console.log('123');
        },
    },
    mounted(){
        // 绑定自定义事件
        //this.$refs.student.$on("atguigu",this.getStudentName)

        // 可以更灵活的触发 等待数据加载完成
        // setTimeout(() => {
        //       this.$refs.student.$on("atguigu",this.getStudentName)
        // }, 3000);

        // 只触发一次
        //this.$refs.student.$once("atguigu",this.getStudentName)

        // 其中this是student组件实例
        // this.$refs.student.$on("atguigu",function(name,...args){
        //     console.log("App收到了学生名",name,args);  
        //     this.studentName = name;  
        // })

        // 箭头函数向外部寻找
         this.$refs.student.$on("atguigu",(name,...args)=>{
            console.log("App收到了学生名",name,args);  
            this.studentName = name;  
        })
    }
}
</script>

<style>
    .app{
        background-color: gray;
        padding: 5px;
    }
</style>

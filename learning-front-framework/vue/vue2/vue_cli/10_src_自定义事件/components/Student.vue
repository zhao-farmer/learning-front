<template>
    <div class="student">
        <h2>学生姓名：{{name}}</h2>
        <h2>学生性别：{{sex}}</h2>
        <h2>当前求和为：{{number}}</h2>
        <button @click="add">点我number++</button>
        <button @click="sendStudentName" @demo="m1">把学生名给App</button>
        <button @click="unbind">解绑atguigu事件</button>
        <button @click="death">销毁当前Student组件的实例</button>
    </div>
</template>


<script>
    export default {
        name: 'Student', 
        data(){
            return {
                name:'张三',
                sex: '男',
                number:0,
            }
        },
        methods:{
            add(){
                console.log("add回调被调用了");
                
                this.number++;
            },
            sendStudentName(){
                this.$emit('atguigu',this.name)
                // 触发Student组件实例身上的atguigu
                // this.$emit('atguigu',this.name,666,888,900)
                // this.$emit('demo')
            },
            unbind(){
                // 解绑一个自定义事件
                this.$off("atguigu");
                // 解绑多个自定义事件
                // this.$off("atguigu","demo");
                // 解绑所有的自定义事件
                // this.$off() ;
            },
            m1(){
                console.log("demo触发了");
                
            },
            death(){
                // 销毁了当前Student组件的实例，销毁后所有Student实例的自定义事件全部不奏效。
                // console.log(this);
                
                this.$destroy()
            }
        }
    }
</script>

<style scoped lang="less">
    .student{
        background-color: pink;
        padding: 5px;
        margin-top: 30px;
    }
</style>
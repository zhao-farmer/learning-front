<template>
    <div>
        <div class="demo">
            <h2>学生名称：{{name}}</h2>
            <h2>学生年龄：{{age}}</h2>
        </div>
    </div>
</template>

<script>
    export default {
        name:'Student', 
        data(){
            return {
                name:'张三',
                age:18,
            }
        },
        methods: {
             
        }
    } 
</script>

<style>
    .demo{
        background-color: orange;
    }
</style>
<template>
  <div>
    <!-- 03组件使用 -->
    <School></School>
    <Student/>
  </div>
</template>

<script>
    // 01引入组件
    import School from './School.vue'
    import Student from './Student.vue'

    export default {
        name:'App',
        /* 使用模板后 不必在html中继续写 */
        template:'<App></App>',
        /* 02注册组件 */
        components:{
            School,
            Student
        },
    }
</script>


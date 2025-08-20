<template>
  <div>
    <!-- 03组件使用 -->
    <School></School>
    <Student/>
    <span>111</span>
  </div>
</template>

<script>
    // 01引入组件
    import School from './components/School.vue'
    import Student from './components/Student.vue'

    export default {
        name:'App',
        /* 02注册组件 */
        components:{
            School,
            Student,
        },
    }
</script>


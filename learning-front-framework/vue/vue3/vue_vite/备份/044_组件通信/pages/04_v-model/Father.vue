<template>
  <div class="father">
    <h3>父组件</h3>
    <h4>{{ username }}</h4>
    <!-- v-model 用在html标签上 -->
    <!-- <input type="text" v-model="username"> -->
     <!-- 双向绑定真正的实现 -->
    <!-- <input type="text" :value="username" @input="username = (<HTMLInputElement>$event.target).value"> -->

    <!-- v-model用在组件标签上 -->
    <!-- <AtguiguInput v-model="username"/> -->
    <!-- 可以转换成下面这种形式 -->
    <!-- <AtguiguInput :modelValue="username" @update:modelValue="username = $event"/> -->

    <!-- 修改modelValue -->
    <AtguiguInput v-model:ming="username" />
  </div>
</template>

<script setup lang="ts" name="Father">
    import { ref } from 'vue';
    import AtguiguInput from './AtguiguInput.vue';
    // 数据
    let username = ref('zhangsan')
</script>

<style scoped>
.father {
  padding: 20px;
  background-color: rgb(165, 164, 164);
  border-radius: 10px;
}
</style>

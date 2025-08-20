<script setup>
  // console.log("window.jinlin",window.jinlin.pika);
  const pika = window.jinlin.pika
  
</script>

<template>
  <div>
    App2
    <div>我的精灵是：{{ pika }}</div>
    <!-- 错误写法 -->
    <!-- <div>我的精灵是：{{ window.jinlin.pika }}</div> -->
  </div>
</template>

<style scoped>

</style>

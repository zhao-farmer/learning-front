<template>
   <div class="person">
      <h1>中国</h1>
      <h2 ref="title2">北京</h2>
      <h3>尚硅谷</h3>
      <button @click="showLog">点我输出</button>
   </div>
</template>

<script setup lang="ts">
    import { ref ,defineExpose} from 'vue';

    // 创建一个title2，用于存储ref标记的内容
    let title2 = ref()
    function showLog(){
      console.log(title2.value);
    }

    let a = ref(0)
    let b = ref(1)
    let c = ref(2)

    // 给父组件查看的内容
    defineExpose({a,b,c})
</script>
  
<style scoped>
    .person {
      background-color: skyblue;
      box-shadow: 0 0 10px;
      border-radius: 10px;
      padding: 20px;
    }
    button{
        margin: 0 15px;
    }
    li{
      font-size: 20px;
    }
  </style>
<template>
  <h2 ref="title2">你好</h2>
  <button @click="showLog">点我输出h2</button>
  <Person ref="ren"></Person>
</template>
  
  <script lang="ts" setup>
    import { ref } from 'vue';
    import Person from './components/Person.vue';
   
    let title2 = ref()
    let ren = ref()

    function showLog(){
      console.log(title2.value);
      console.log(ren.value);
      
    }
  </script>
  

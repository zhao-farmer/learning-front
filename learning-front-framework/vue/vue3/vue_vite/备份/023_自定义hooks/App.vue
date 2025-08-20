<template>
  <Person v-if="isShow" />
</template>
  
<script lang="ts" setup>
  import { ref,onMounted } from 'vue';
  import Person from './components/Person.vue';
  let isShow = ref(true)
  
  //挂载完毕
  onMounted(()=>{
    console.log('父 ====> 挂载完毕');
  })
</script>
  

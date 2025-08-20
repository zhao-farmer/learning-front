<template>
  <Person :list="personList" />
</template>
  
<script lang="ts" setup>
  import Person from './components/Person.vue';
  import { reactive } from 'vue';
  import { type Persons } from './types';

  let personList = reactive<Persons>([
    {id:'001',name:'张三',age:60},
    {id:'002',name:'李四',age:70},
    {id:'003',name:'王五',age:80},
  ])

  console.log(personList);
  
</script>
  

<template>
   <div class="person">
     <ul>
      <li v-for="item in list" :key="item.id">
        {{ item.name }} -- {{ item.age }}
      </li>

     </ul>
   </div>
</template>

<script setup lang="ts">
  import { defineProps } from 'vue';
  import { type Persons } from '@/types';

  // 接受list
  // defineProps(['list'])

  // 接受list + 限制类型
  // defineProps<{list:Persons}>();

  // 接受list + 限制类型 + 限制必要性 + 指定默认值
  withDefaults(defineProps<{list?:Persons}>(),{
    list:()=> [
      {id:'004',name:'康师傅',age:19},
    ]
  });


  // 可以直接接受数据
  // let list =  defineProps(['list'])
  
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
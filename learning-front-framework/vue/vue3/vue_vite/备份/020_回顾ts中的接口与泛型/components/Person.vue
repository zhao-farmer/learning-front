<template>
   <div class="person">
     
   </div>
</template>

<script setup lang="ts">
  import {type PersonInter,type Persons} from '@/types'
  
  //  let person:PersonInter = {id:'001',name:'张三',age:60}

  // let personList:Array<PersonInter> = [
  //   {id:'001',name:'张三',age:60},
  //   {id:'002',name:'李四',age:70},
  //   {id:'003',name:'王五',age:80},
  // ]


  let personList:Persons = [
    {id:'001',name:'张三',age:60},
    {id:'002',name:'李四',age:70},
    {id:'003',name:'王五',age:80},
  ]
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
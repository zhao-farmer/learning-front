<template>
    <div class="person">
      <h1>情况五：监视响应式对象中的某个属性</h1>
      <h2>{{ person.name }}</h2>
      <h2>{{ person.age }}</h2>
      <h2>{{ person.car.c1 }}、{{ person.car.c2 }}</h2>
      <button @click="changeName">修改名字</button>
      <button @click="changeAge">修改年龄</button>
      <button @click="changeC1">修改第一台车</button>
      <button @click="changeC2">修改第二台车</button>
      <button @click="changeCar">修改整个车</button>
    </div>
  </template>
  




<script setup lang="ts"> 
  import { reactive , watch} from 'vue';
  let person = reactive({
    name:'张三',
    age:18,
    car:{
      c1:'奔驰',
      c2:'宝马'
    }
  })

  //方法
  function changeName(){
    person.name  += '~'
  }
  function changeAge(){
    person.age  += 1
  }
  function changeC1(){
    person.car.c1 = '奥迪'
  }
  function changeC2(){
    person.car.c2 = '大众'
  }
  function changeCar(){
    person.car = {c1:'雅迪',c2:'艾玛'}
  }
  // 监视， 情况五：监视上述的多个数据
  watch([()=>person.name,()=>person.car],(newValue,oldValue)=>{
    console.log('person花生变化了',newValue,oldValue);
    
  },{deep:true})

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
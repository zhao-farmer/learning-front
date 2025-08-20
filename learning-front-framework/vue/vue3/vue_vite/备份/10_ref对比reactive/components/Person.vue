<template>
    <div class="person">
      <h2>一辆{{ car.brand }}车，价值{{ car.price }}万</h2>
      <button @click="changePrice">修改汽车的价格</button>
      <button @click="changeBrand">修改汽车的名称</button>
      <button @click="changeCar">修改汽车</button>
      <hr>
      <h2>当前求和为：{{ sum }}</h2>
      <button @click="changeSum">点我sum+1</button>
    </div>
  </template>
  

<script setup lang="ts"> 
  import { reactive, ref } from 'vue';
   // 数据
   let car = reactive({brand:'奔驰',price:100});
    // 求和
    let sum = ref(0);

   
   // 方法
   function changePrice(){
      car.price +=10;
   }

   function changeBrand(){
      car.brand +=10;
   }

   function changeCar(){
      // 这样写是错误的  与原来的响应式数据会断掉
      // car = {brand:'奥拓',price:1};
      // car = reactive({brand:'奥拓',price:1});

      //正确的写法
      Object.assign(car,{brand:'奥拓',price:1})
   }
   function changeSum(){
      sum.value +=1;

      // ref也不能直接赋值
      // sum = ref(9)
   }


  
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
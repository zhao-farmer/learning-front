<template>
    <div class="person">
      <h2>一辆{{ car.brand }}车，价值{{ car.price }}万</h2>
      <button @click="changePrice">修改汽车的价格</button>
      <br>
      <h2>游戏列表</h2>
      <ul>
        <li v-for="g in games" :key="g.id">{{ g.name }}</li>
      </ul>
      <button @click="changeFirstGame">修改第一个游戏的数据</button>
      <hr>
      <h2>测试：{{ obj.a.b.c }}</h2>
      <button @click="changeObj">测试</button>
    </div>
  </template>
  

<script setup lang="ts"> 
  import { reactive } from 'vue';
   // 数据
   let car = reactive({brand:'奔驰',price:100});

   let games = reactive([
      {id:'001',name:'王者荣耀'},
      {id:'001',name:'原审'},
      {id:'001',name:'三国志'}
   ])

   let obj = reactive({
    a:{
      b:{
        c:666
      }
    }
   })
   
   // 方法
   function changePrice(){
      car.price +=10;
      console.log( car.price);
      
   }

   function changeFirstGame(){
      games[0].name = '流行蝴蝶剑';
   }
   function changeObj(){
      obj.a.b.c = 888
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
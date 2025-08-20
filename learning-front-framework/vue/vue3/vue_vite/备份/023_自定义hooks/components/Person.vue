<template>
   <div class="person">
     <h2>当前求和为：{{ sum }}</h2>
     <h2>放大十倍后：{{ bigSum }}</h2>
     <button @click="add">点我sum+1</button>
     <hr>
     <img v-for="(dog,index) in dogList" :src="dog" :key="index">
     <br>
     <button @click="getDog()">再来一只小狗</button>
   </div>
</template>

<script setup lang="ts">
  import useDog from '@/hooks/useDog';
  import useSum from '@/hooks/useSum';

  const {sum,bigSum,add} = useSum();
  const {dogList,getDog} = useDog()
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
    img{
      height: 100px;
      margin-right: 10px;
    }
  </style>
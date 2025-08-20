<template>
    <div class="person">
        <h2>姓名：{{ name }}</h2>
        <h2>年龄：{{ age }}</h2>
        <button @click="changgeName">修改名字</button>
        <button @click="changgeAge">修改年龄</button>
        <button @click="showTel">查看练习方式</button>
    </div>
  </template>
  
  <script lang="ts">
    export default {
      name:'Person', 
      data(){
        return{
            name:'张三',
            age:18,
            tel:'1388888888'
        }
      },
      methods:{
        showTel(){
            alert('用户的电话是：'+this.tel)
        },
        changgeName(){
            this.name = 'zhang-san'
        },
        changgeAge(){
            this.age+=1;
        },
      }
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
  </style>
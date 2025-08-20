<template>
  <div class="grand-child">
    <h3>我是孙组件</h3>
    <h4>银子：{{ money }}</h4>
    <h4>车子：一辆{{ che.brand }} 车，价值{{ che.price }}万元</h4>
    <button @click="updateMoney(6)">花爷爷的钱</button>
    </div>
</template>

<script setup lang="ts" name="GrandChild">
  import { inject } from "vue";

  // let qian = inject('qian')
  let che = inject('che',{brand:'未知',price:0})

  let {money,updateMoney} = inject('moneyContext',{money:0,updateMoney:(x:number)=>{}})
</script>

<style scoped>
  .grand-child{
    background-color: orange;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px black;
  }
</style>
<template>
    <div class="count">
        <h2>当前求和为：{{ countStore.sum }}</h2>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="add">加</button>
        <button @click="minus">减</button>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import { useCountStore } from '@/store/count'

    const countStore = useCountStore();
    // 一下两种方式都可以拿到state中的数据
    // console.log('@@@',countStore.sum);
    // console.log('@@@',countStore.$state.sum);
    

    let n = ref(1)      //用户选择的数字

    //方法
    function add(){
      
    }
    function minus(){
       
    }
</script>

<style scoped>
.count{
    background-color: skyblue;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
    margin-bottom: 10px;
}

select,button{
    margin: 0 5px;
    height: 25px;
}
</style>

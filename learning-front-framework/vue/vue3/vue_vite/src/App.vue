<template >
    <div class="app">
        <Hello/>
        <h2>全局属性 {{ x }}</h2>
        <h4 v-beauty="666">自定义命令</h4>

        <h2>我是App组件</h2>
        <Suspense>
            <template v-slot:default>
                <Child/>
            </template>
            <template v-slot:fallback>
                <h2>加载中...</h2>
            </template>
        </Suspense>
    </div>
   
</template>

<script setup lang="ts">
    import { Suspense } from 'vue';
    import Child from './Child.vue';
</script>

<style>
  .app {
    background-color: #ddd;
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0 0 10px;
  }
</style>
<template>
    <div class="outer">
        <h2>我是App组件</h2>
        <img src="http://www.atguigu.com/images/index_new/logo.png" alt="">
        <br>
        <Modal/>
    </div>
</template>

<script setup lang="ts">
    import Modal  from './Modal.vue';
</script>

<style>
    .outer{
        background-color: #ddd;
        border-radius: 10px;
        padding: 5px;
        box-shadow: 0 0 10px;
        height: 400px;
        width: 400px;
        /* 加了 filter 子组件的position: fixed 出现问题*/
        filter: saturate(0%);
    }
    img{
        width: 270px;
    }
</style>
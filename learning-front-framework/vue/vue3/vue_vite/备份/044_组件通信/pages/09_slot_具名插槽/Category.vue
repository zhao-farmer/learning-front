<template>
    <div class="category">
        <!-- 默认的具名插槽 -->
        <!-- <slot name="default"></slot> -->
        <slot name="s1">默认内容1</slot>
        <slot name="s2">默认内容2</slot>
    </div>
</template>

<script setup lang="ts" name="Category">

    defineProps(['title'])
</script>

<style>
    .category{
        width: 200px;
        height: 300px;
        background-color: skyblue;
        border-radius: 10px;
        box-shadow: 0 0 10px;
    }
</style>
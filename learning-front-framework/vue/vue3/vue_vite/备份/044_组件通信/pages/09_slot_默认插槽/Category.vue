<template>
    <div class="category">
        <h2>{{ title }}</h2>
        <slot>默认内容</slot>
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
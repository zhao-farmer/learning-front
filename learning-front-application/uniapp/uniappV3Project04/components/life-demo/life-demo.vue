<template>
	<view>
		子组件
	</view>
</template>

<script setup>
import { onUnmounted } from 'vue';
// 卸载组件
onUnmounted(()=>{
	console.log("子组件被卸载了");
})
</script>

<style>

</style>
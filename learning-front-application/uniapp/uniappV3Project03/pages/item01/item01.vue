<template>
	<view>
		姓名：张三
	</view>
	<view>{{ 2+3 }}</view>
	<view>{{ a+3 }}</view>
	<view>{{ Date.now() }}</view>
	<view>{{ Math.random() }}</view>
	<view>{{ 1<2 ? "张三":"李四" }}</view>
	<view>{{ fn() }}</view>
</template>

<script setup>
const a = 6;

function fn(){
	return "vue3学习"
}
</script>


<template>
	<view class="content">
		<UserInfo04 v-for="(item,index) in userInfo" :key="index"
			:obj="item"></UserInfo04>
	</view>
</template>

<script setup>
import {ref} from "vue"
const userInfo = ref([
	{name:"张三",avatar:"../../static/pic1.jpg"},
	{name:"李四",avatar:"../../static/pic2.jpg"},
	{name:"王五",avatar:"../../static/pic3.jpg"}
])
</script>

<style>
	
</style>

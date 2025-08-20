<template>
	<view class="content">
		<UserInfo04 :obj="userInfo"></UserInfo04>
		<UserInfo04></UserInfo04>
	</view>
</template>

<script setup>
import {ref} from "vue"
const userInfo = ref({name:"张三",avatar:"../../static/pic1.jpg"})
</script>

<style>
	
</style>

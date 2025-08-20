<template>
	<view class="content">
		<UserInfo02 username="咸虾米" avatar="../../static/pic1.jpg"></UserInfo02>
		<UserInfo02 username="咸虾米" avatar="../../static/pic2.jpg"></UserInfo02>
		<UserInfo02 :username="name" avatar="../../static/pic3.jpg"></UserInfo02>
	</view>
</template>

<script setup>
import {ref} from "vue"
const name = ref("王五")
</script>

<style>
	
</style>
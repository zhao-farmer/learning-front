<template>
	<view class="content">
		<UserInfo03 username="咸虾米" avatar="../../static/pic1.jpg"></UserInfo03>
		<UserInfo03 avatar="../../static/pic2.jpg"></UserInfo03>
		<UserInfo03 :username="name" avatar="../../static/pic3.jpg"></UserInfo03>
	</view>
</template>

<script setup>
import {ref} from "vue"
const name = ref("王五")
</script>

<style>
	
</style>
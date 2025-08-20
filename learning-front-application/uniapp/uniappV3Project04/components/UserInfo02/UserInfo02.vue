<template>
	<view class="userInfo">
		<image :src="avatar" mode=""></image>
		<view class="username">{{myname}}</view>
	</view>
</template>

<script setup>
import { computed } from 'vue';
// 传入的数据是只读的
const props =  defineProps(["username","avatar"])
// 使用计算属性进行监控
const myname = computed(()=>props.username + "@")


console.log(props.username);
</script>

<style lang="scss" scoped>
.userInfo{
	width: 100%;
	height: 200px;
	background-color: #ccc;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	image{
		width: 100px;
		height: 100px;
		border-radius: 50%;
	}
	.username{
		padding: 10px 0;
		font-size: 20px;
	}
}

</style>
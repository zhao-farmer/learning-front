<template>
	<view class="userInfo">
		<image :src="obj.avatar" mode="" class="avatar"></image>
		<view class="username">{{obj.name}}</view>
	</view>
</template>

<script setup>
import { computed } from 'vue';
// const props =  defineProps(["username","avatar"])

defineProps({
	obj:{
		type:Object,
		// 对象的模式写法
		default(){
			return {name:"匿名",avatar:"../../static/logo.png"}
		}
	}
})

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
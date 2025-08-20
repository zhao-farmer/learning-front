<template>
	<view class="layout">
		<view class="row" v-for="item in arrs" :key="item.id">
			<view class="title">{{item.title}}</view>
			<view class="content">{{item.body}}</view>
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue';
	
let arrs = ref([])

// 第一种方式
function request1(){
	uni.request({
		url:"https://jsonplaceholder.typicode.com/posts",
		success:res=>{
			console.log(res);
			arrs.value = res.data
		}
	})
}

// 第二种方式
function request2(){
	uni.request({
		url:"https://jsonplaceholder.typicode.com/posts",
	}).then(res=>{
		console.log(res);
		arrs.value = res.data
	})
}

// 第三种方式
async function request3(){
	let res = await uni.request({
		url:"https://jsonplaceholder.typicode.com/posts",
	})
	arrs.value = res.data
}

request3()
</script>

<style lang="scss" scoped>
.layout{
	padding: 30rpx;
	.row{
		border: 1px solid #cfcfcf;
		padding: 20rpx 0;
		.title{
			font-size: 36rpx;
			margin-bottom: 10rpx;
		}
		.content{
			font-size: 28rpx;
			color: #666;
		}
	}
}
</style>

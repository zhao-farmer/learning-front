<template>
	<view class="layout">

	</view>
</template>

<script setup>
import { ref } from 'vue';
	
function request(){
	// loading加载
	uni.showLoading()
	// 参数直接写在data中
	uni.request({
		// 写在url
		// url:"https://jsonplaceholder.typicode.com/posts?id=5",
		
		// 参数直接使用data
		url:"https://jsonplaceholder.typicode.com/posts",
		data:{
			id:5
		},
		// 访问方式
		method:'GET',
		// 头部信息
		header:{
			token:"112551dad2fd",
			'content-type':"application/json"
		},
		// 超时时间
		timeout:20000,
		// 成功
		success:res=>{
			console.log(res);
		},
		// 失败
		fail:err=>{
			console.log(res);
		},
		// 成功失败都会执行
		complete() {
			uni.hideLoading()
		}
	})
}

request()
</script>

<style lang="scss" scoped>

</style>

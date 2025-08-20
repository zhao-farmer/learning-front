<template>
	<view class="content">
		demo1页面
		<!-- <navigator url="/page/item08/item02">跳转到demo2</navigator> -->
		<view @click="goDemo02">跳转到demo2</view>
		
		<view>-------</view>
		<view @click="goIndex">跳转到首页</view>
	</view>
</template>

<script setup>
function goDemo02(){
	uni.navigateTo({
		url:"/pages/item08/item02?name=张三&age=18&like=足球"
	})
}

function goIndex(){
	// 跳转tabbar页面，需使用reLaunch
	uni.reLaunch({
		url:"/pages/item01/item01"
	})
}

</script>

<style lang="scss" scoped>

</style>

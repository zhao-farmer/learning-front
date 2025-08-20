<template>
	<view class="content">
		demo2页面
		<button @click="goBack">返回demo1</button>
	</view>
</template>

<script setup>
// 获取传入的参数
onLoad((e)=>{
	console.log(e);
})
// 返回上一个路由
function goBack(){
	uni.navigateBack()
}

// 当前页面的信息
console.log(getCurrentPages());
</script>

<style lang="scss" scoped>
.content{
	padding: 10px;
}
</style>

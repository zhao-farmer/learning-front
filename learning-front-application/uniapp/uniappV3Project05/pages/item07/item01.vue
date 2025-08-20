<template>
	<view class="content">
		<button @click="stop">停止</button>
	</view>
</template>

<script setup>
	
// 开始执行下拉刷新
setTimeout(()=>{
	uni.startPullDownRefresh()
},1000)

// 停止下拉刷新
function stop(){
	uni.stopPullDownRefresh()
}

</script>

<style lang="scss" scoped>
.content{
	padding: 10rpx;
	button{
		margin-top: 200rpx;
	}
}
</style>

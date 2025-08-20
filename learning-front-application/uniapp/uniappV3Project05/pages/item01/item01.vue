<template>
	<view class="layout">
		<view class="box"></view>
		<text class="text">欢迎使用</text>
	</view>
</template>

<script setup>

</script>


<style lang="scss" scoped>
.box{
	// width: 20%;
	// width: 20vw;
	// rpx是响应式单位，宽度为750px，任何组件的px单位都可以改为rpx
	width: 130rpx;
	height: 130rpx;
	background-color: orange;
}
.text{
	font-size: 52rpx;
}
</style>

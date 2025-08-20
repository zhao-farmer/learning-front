<template>
	<view class="layout">
		<view class="box">这是box</view>
		<text class="text1">欢迎使用</text>
		<view>--------</view>
		<text class="text2">欢迎使用</text>
		<view>--------</view>
		<text class="text3">欢迎使用</text>
	</view>
</template>

<script setup>

</script>


<style lang="scss" scoped>
// 引入css
@import "@/common/css/style.css";

.box{
	width: 130rpx;
	height: 130rpx;
	background-color: orange;
}
.text1{
	font-size: 52rpx;
	// 调用uni.scss中的css默认属性
	color: $uni-color-primary;
}
// 调用uni.scss中的css自定义属性 
// 如果在uni.scss新定义的属性，应用时需要重新启动
.text2{
	font-size: $self-size-1;
	color: $self-color-1;
}

// 使用自定义的scss
// uni.scss 调用了自定义的scss
.text3{
	font-size: $self-size-2;
	color: $self-color-2;
}
</style>

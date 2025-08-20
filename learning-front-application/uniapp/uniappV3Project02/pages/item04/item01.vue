<template>
	<view class="">
		<image src="../../static/logo.png" mode="" class="pic1"></image>
		<!-- 原图填充，多余裁剪掉 -->
		<image src="../../static/pic3.webp" mode="aspectFill" class="pic2"></image>
		<!-- 高度不变，宽度自动变化 -->
		<image src="../../static/pic4.jpg" mode="heightFix" class="pic3"></image>
		<!-- 网络图像 -->
		<image src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/logo.png" mode="heightFix" ></image>
	</view>
</template>

<script setup>

</script>

<style lang="scss">
	
.pic1{
	width: 150px;
	height: 150px;
}
.pic2{
	width: 200px;
	height: 200px;
}
.pic3{
	height: 300px;
}
</style>

<template>
	<view>
		<!-- 
			indicator-dots 控制点
			indicator-color 控制点颜色
			indicator-active-color 控制点选中后的颜色
			circular 从新开始
			autoplay 自动播放
			interval 自动播放间隔
			vertical 纵向滑动
		 -->
		<swiper 
			indicator-dots	 
			indicator-color="rgba(255,255,255,0.3)" 
			indicator-active-color="#ffffff"
			circular
			autoplay
			interval="2000"
		>
			<!-- 轮播图内容  -->
			<swiper-item>1111</swiper-item>
			<swiper-item>2222</swiper-item>
			<swiper-item>3333</swiper-item>
			<swiper-item>4444</swiper-item>
		</swiper>
	</view>
</template>

<script setup>

</script>

<style lang="scss">
swiper{
	width: 100vw;
	height: 200px;
	border: 1px solid green;
	swiper-item{
		width: 100%;
		height: 100%;
		background-color: pink;
	}
	swiper-item:nth-child(2n){
		background-color: orange;
	}
}
</style>

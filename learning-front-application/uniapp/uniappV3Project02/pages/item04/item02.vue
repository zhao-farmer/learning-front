<template>
	<view>
		<swiper 
			indicator-dots	 
			indicator-color="rgba(255,255,255,0.3)" 
			indicator-active-color="#ffffff"
			circular
			autoplay
			interval="2000"
		>
			<!-- 轮播图内容  -->
			<swiper-item>
				<image src="../../static/pic1.png" mode="aspectFill"></image>
			</swiper-item>
			<swiper-item>
				<image src="../../static/pic2.png" mode="aspectFill"></image>
			</swiper-item>
			<swiper-item>
				<image src="../../static/pic3.webp" mode="aspectFill"></image>
			</swiper-item>
			<swiper-item>
				<image src="../../static/pic4.jpg" mode="aspectFill"></image>
			</swiper-item>
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
		image{
			height: 100%;
			width: 100%;
		}
	}
	
	swiper-item:nth-child(2n){
		background-color: orange;
	}
}
</style>

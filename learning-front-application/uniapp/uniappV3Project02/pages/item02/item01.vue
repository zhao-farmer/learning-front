<template>
	<view>-------纵向滚动-------</view>
	<scroll-view scroll-y class="scrollView1">
		<view class="box">sroll子元素</view>
		<view class="box">sroll子元素</view>
		<view class="box">sroll子元素</view>
		<view class="box">sroll子元素</view>
		<view class="box">sroll子元素</view>
		<view class="box">sroll子元素</view>
		<view class="box">sroll子元素</view>
		<view class="box">sroll子元素</view>
		<view class="box">sroll子元素</view>
		<view class="box">sroll子元素</view>
		<view class="box">sroll子元素</view>
		<view class="box">sroll子元素</view>
		<view class="box">sroll子元素</view>
		<view class="box">sroll子元素</view>
	</scroll-view>
	<view>-----横向滚动-------</view>
	<scroll-view scroll-x class="scrollView2">
		<view class="box">sroll子元素</view>
		<view class="box">sroll子元素</view>
		<view class="box">sroll子元素</view>
		<view class="box">sroll子元素</view>
		<view class="box">sroll子元素</view>
		<view class="box">sroll子元素</view>
		<view class="box">sroll子元素</view>
		<view class="box">sroll子元素</view>
		<view class="box">sroll子元素</view>
		<view class="box">sroll子元素</view>
		<view class="box">sroll子元素</view>
		<view class="box">sroll子元素</view>
		<view class="box">sroll子元素</view>
		<view class="box">sroll子元素</view>
	</scroll-view>
</template>

<script setup>

</script>

<style lang="scss">
.scrollView1{
	height: 220px;
	width: 80%;
	border: 1px solid red;
}
.scrollView2{
	height: 220px;
	width: 80%;
	border: 1px solid red;
	white-space: nowrap;
	.box{
		width: 100px;
		height: 100px;
		background-color: green;
		display: inline-block;
		margin: 5px;
	}
}
</style>

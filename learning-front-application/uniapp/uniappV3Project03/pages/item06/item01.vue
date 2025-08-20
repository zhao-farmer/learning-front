<template>
	<view class="">
		<view v-if="shop">京东</view>
		<view v-else="shop">淘宝</view>
		
		<view v-if="day===1">星期1</view>
		<view v-else-if="day===2">星期2</view>
		<view v-else-if="day===3">星期3</view>
		<view v-else-if="day===4">星期4</view>
		<view v-else-if="day===5">星期5</view>
		<view v-else-if="day===6">星期6</view>
		<view v-else-if="day===7">周末</view>
		<view v-else>格式错误</view>
		
		<!-- 不获取资源 -->
		<view class="box1" v-if="false">
			<image src="../../static/pic1.png"></image>
		</view>
		<!-- 获取资源 -->
		<view class="box2" v-show="false">
			<image src="../../static/pic2.png"></image>
		</view>
		
		<!-- 一个盒子包含多个不通元素 使用v-if建议使用template -->
		<template v-if="true">
			<image src="../../static/logo.png"></image>
			<view>logo</view>
		</template>
		<template v-else>
			<image src="../../static/pic4.jpg"></image>
			<view>pic4</view>
		</template>
	
	
		<!-- 注意 v-if与v-else 中间不能有其他元素 -->
	</view>
</template>

<script setup>
import { ref } from 'vue';

const shop = ref(true)

const day = ref(30)
</script>


<style lang="scss" scoped>

</style>

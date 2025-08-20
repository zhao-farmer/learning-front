<template>
	<view class="content">
		<view class="box" v-for="item in 100">
			{{item}}
		</view>
	</view>
</template>

<script setup>
import {onReachBottom} from '@dcloudio/uni-app'

onReachBottom(()=>{
	console.log("到底了");
})
</script>


<style lang="scss" scoped>
.box{
	display: flex;
	align-items: center;
	justify-content: center;
}
</style>

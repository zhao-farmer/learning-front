<template>
	<view class="">
		<scroll-view scroll-y="true" ref="scroll">
			<view></view>
		</scroll-view>
	</view>
</template>

<script setup>
import {onLoad,onReady} from "@dcloudio/uni-app"

onLoad(()=>{
	console.log("onload函数");
})

// DOM节点加载完成时使用onReady
onReady((e)=>{
	console.log("onReady函数");
	// 没有回调结果
	console.log(e);
	console.log(scroll.value);
})

</script>


<style lang="scss" scoped>

</style>

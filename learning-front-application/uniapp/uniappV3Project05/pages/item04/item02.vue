<template>
	<view class="content">
	
	</view>
</template>

<script setup>
uni.showLoading({
	title:"加载中...",
	mask:true,
	// 如果失败
	fail:err => {
		// 结束加载
		uni.hideLoading()
	}
})
</script>


<style lang="scss" scoped>

</style>

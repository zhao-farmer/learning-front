<template>
	<view class="content">
		<button @click="select">学历</button>
	</view>
</template>

<script setup>
let arrs = ["高中","大专","本科","研究生"]
	
function select(){
	// 底部弹出信息
	uni.showActionSheet({
		// 标签
		title:"请选择",
		// 列表信息
		itemList:arrs,
		// 每一项的颜色
		itemColor:"#007aff",
		success: (res) => {
			console.log(arrs[res.tapIndex]); 
		}
	})
}
</script>


<style lang="scss" scoped>
.content{
	padding: 10rpx;
}
</style>

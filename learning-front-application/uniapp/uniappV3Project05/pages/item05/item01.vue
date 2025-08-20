<template>

</template>

<script setup>
// 修改标题
setTimeout(()=>{
	// 设置动态标题
	uni.setNavigationBarTitle({
		title:"动态标题"
	})
	// 设置导航颜色样式
	uni.setNavigationBarColor({
		// 前景色 仅支持 #ffffff 和 #000000
		frontColor:"#ffffff",
		// 背景颜色
		backgroundColor:"#2C405A"
	
	})
},1500)

setTimeout(()=>{
	// 导航栏loading加载
	uni.showNavigationBarLoading()
	
	setTimeout(()=>{
		// 进行隐藏
		uni.hideNavigationBarLoading()
	},1000)
},2500)

// 隐藏home 适用于微信小程序与京东小程序
uni.hideHomeButton()

</script>

<style lang="scss" scoped>
.content{
	padding: 10rpx;
}
</style>

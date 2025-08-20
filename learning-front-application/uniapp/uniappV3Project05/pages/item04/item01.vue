<template>
	<view class="content">
		<button @click="show">显示</button>
		<button @click="hide">隐藏</button>
	</view>
</template>

<script setup>

// 提示信息类似弹出框
uni.showToast({
	// 最多显示7个字符
	title:"成功失败加载进行",
	// 提示的图标
	icon:"success",
	// 自定义图标
	// icon:"../static/logo.png"
	// 是否存在遮罩，如果存在遮罩，无法进行其他操作
	mask:true,
	// 信息存在时间
	duration:1000,
	// 成功时的提示信息
	success:res=>{
		console.log(res)
	}
	
})

// 显示
function show(){
	uni.showToast({
		title:"显示",
		duration:3000
	})
}

// 隐藏
function hide(){
	uni.hideToast()
}
</script>


<style lang="scss" scoped>
.content{
	padding: 10px;
	button{
		margin-top: 10px;
	}
}
</style>

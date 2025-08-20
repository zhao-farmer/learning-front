<template>
	<view class="content">
		<button @click="onClick1">删除</button>
		<button @click="onClick2">输入验证码</button>
		<button @click="onClick3">提示选择</button>
	</view>
</template>

<script setup>
function onClick1(){
	uni.showModal({
		// 标题
		title:"是否删除",
		// 内容
		content:"删除后不会恢复！",
		// 是否显示取消按钮
		showCancel:true,
		// 取消按钮文字
		cancelText:"No",
		// 取消按钮文字颜色
		cancelColor:"#dd524d",
		// 确认按钮
		confirmText:"Yes",
		// 确认按钮文字颜色
		confirmColor:"#4cd964"
	})
}
function onClick2(){
	uni.showModal({
		// 标题
		title:"验证码",
		// 显示输入框
		editable:true,
		// 输入框提示
		placeholderText:"请输入验证码!",
	})
}
function onClick3(){
	uni.showModal({
		// 标题
		title:"提示选择",
		success:res=>{
			// console.log(res);
			if(res.confirm){
				uni.showToast({
					title:"删除成功"
				})
			}
		},
		fail: res => {
			// console.log(res);
			if(res.confirm){
				uni.showToast({
					title:"取消此操作"
				})
			}
		}
	})
}
</script>


<style lang="scss" scoped>
.content{
	padding: 10rpx;
}
</style>

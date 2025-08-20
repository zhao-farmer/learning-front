<template>
	<view class="out">
		<!-- @focus 获取焦点 @blur 失去焦点 @confirm 确定按钮 -->
		<input type="text" 
			:value="iptValue" 
			@focus="isActive=true" 
			@blur="isActive=false"
			@confirm="onConfirm"/>
		<image src="../../static/chicken.gif" mode="" 
			class="pic" :class="isActive?'active':''"></image>
	</view>
</template>

<script setup>
import { ref } from 'vue';
const iptValue = ref("")
const isActive = ref(false)

// function onfocus(){
// 	isActive.value = true;
// }

// function onBlur(e){
// 	isActive.value = false;
// }
function onConfirm(){
	
}

</script>


<style lang="scss" scoped>
.out{
	padding: 0 20px;
	margin-top: 40px;
	position: relative;

	input{
		border:1px solid #ccc;
		height: 40px;
		position: relative;
		z-index: 2;
		background-color: #fff;
	}
	.pic{
		width: 24px;
		height: 24px;
		z-index: 1;
		position: absolute;
		top: 0px;
		left: calc(50% - 12px);
		transition: top 0.3s;
	}
	.pic.active{
		top: -24px;
	}
}
</style>

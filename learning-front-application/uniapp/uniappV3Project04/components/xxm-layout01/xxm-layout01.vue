<template>
	<view class="layout">
		<view class="header">header区域</view>
		<view class="main">
			<slot></slot>
		</view>
		<view class="footer">底部区域</view>
	</view>
</template>

<script setup>
	
</script>

<style lang="scss" scoped>
.layout{
	.header{
		height: 100px;
		background-color: #cfcfcf;
	}
	.main{
		min-height: 200px;
	}
	.footer{
		height: 120px;
		background-color: orange;
	}
}
</style>
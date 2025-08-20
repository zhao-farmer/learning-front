<template>
	<!-- placeholder 控制提示 -->
	<input 
		type="text" 
		placeholder="请输入内容!"
		placeholder-style="color:orange"
	/>
	<!-- 数字类型可以输入 -->
	<input type="number" value="123"/>
	<!-- 电话号码  -->
	<input type="tel"/>
	<!-- 输入显示为星号 -->
	<input type="text" value="123" password/>
	<!-- 禁用 -->
	<input type="text" value="123" disabled/>
	<!-- 控制最大字符 -->
	<input type="text" maxlength="10"/>
	<!-- 手机键盘右下角由开始改成搜索 -->
	<input type="text" confirm-type="search"/>
</template>

<script setup>

</script>

<style lang="scss">
input{
	border: 1px solid skyblue;
}
</style>

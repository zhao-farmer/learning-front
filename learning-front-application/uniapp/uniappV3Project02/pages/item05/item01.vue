<template>
	<view>demo1</view>
	<!--  open-type="reLaunch" 不会有返回，主要用于下方主题-->
	<navigator url="/pages/item05/item02" open-type="reLaunch">
		点击跳转到demo2
	</navigator>
	<!-- image进行跳转 -->
	<navigator url="/pages/item05/item03">
		<image src="../../static/pic4.jpg" mode="heightFix" class="pic3"></image>
	</navigator>
</template>

<script setup>

</script>

<style lang="scss">

</style>

<template>
	<view class="box" hover-class="boxHover">
		<view class="inner" hover-class="innerHover" hover-stop-propagation>
			内部元素
		</view>
	</view>
</template>

<script setup>

</script>

<style lang="scss">
.box{
	width: 200px;
	height: 200px;
	background-color: gray;
}
.boxHover{
	background-color: orange;
	width: 300px;
}
.inner{
	width: 150px;
	height: 150px;
	background-color: green;
}
.innerHover{
	background-color: blue;
}
</style>

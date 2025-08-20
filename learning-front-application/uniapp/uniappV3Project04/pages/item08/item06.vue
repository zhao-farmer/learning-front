<template>
	<view class="">
		<navigator open-type="reLaunch" url="/pages/item08/item01">
			跳转到item01
		</navigator>
	</view>
</template>

<script setup>
import {onUnload} from "@dcloudio/uni-app"

// 销毁页面时加载
onUnload(()=>{
	console.log("onUnload函数");
})

</script>


<style lang="scss" scoped>

</style>

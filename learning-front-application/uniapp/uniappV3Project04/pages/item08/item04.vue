<template>
	<view class="">
		<navigator url="/pages/item08/item01">
			跳转到item01
		</navigator>
	</view>
</template>

<script setup>
import {onLoad,onReady,onShow} from "@dcloudio/uni-app"
const count = ref(0)

let time = setInterval(()=>{
	count.value++
},50)

onLoad(()=>{
	console.log("onload函数");
})

// 在onLoad之后执行，在onReady之前执行，触发方式
// 1.其他页面跳转到此页面
// 2.离开此页面再次进入
onShow(()=>{
	console.log("onShow函数");
})

onReady(()=>{
	console.log("onReady函数");
})

</script>


<style lang="scss" scoped>

</style>

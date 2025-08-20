<template>
	<view class="">
		游戏运行时间：{{count}}
	</view>
</template>

<script setup>
import {ref} from "vue"
import {onHide,onShow} from "@dcloudio/uni-app"
const count = ref(0)

let time = setInterval(()=>{
	count.value++
},50)

// 在onLoad之后执行，在onReady之前执行，触发方式
// 1.其他页面跳转到此页面
// 2.离开此页面再次进入
onShow(()=>{
	console.log("onShow函数");
	time = setInterval(()=>{
		count.value++
	},50)
})
// 离开此页面，会执行此函数
// 应用场景：如离开此页面游戏暂停，再次进入游戏开始
onHide(()=>{
	console.log("onHide函数");
	clearInterval(time)
})

</script>


<style lang="scss" scoped>

</style>

<template>
	<view class="">
		<view v-for="item in 50">{{item}}</view>
		
		<view class="fixed" v-show="fixed">↑</view>
	</view>
</template>

<script setup>
import { ref } from "vue";
import {onPageScroll} from "@dcloudio/uni-app"
const fixed = ref(false)


onPageScroll((e)=>{
	// console.log("onPageScroll函数");
	console.log(e.scrollTop);
	
	fixed.value = e.scrollTop>200
})

</script>


<style lang="scss" scoped>
.fixed{
	width: 100px;
	height: 100px;
	background-color: orange;
	position: fixed;
	bottom: 30px;
	right: 30px;
}
</style>

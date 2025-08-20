<template>
	<view class="">
		<image v-bind:src="picUrl" mode=""></image>
		<!-- 布尔类型设置true与false -->
		<button type="primary" :loading="false" :disabled="false">按钮</button>
	</view>
</template>

<script setup>
import { ref } from 'vue';

const arrs = ref([
	"../../static/pic1.png",
	"../../static/pic2.png",
	"../../static/pic3.webp",
	"../../static/pic4.jpg"
])

const picUrl =  ref("../../static/pic1.png")

let index = 0;
setInterval(()=>{
	index++;
	picUrl.value = arrs.value[index%4]
},1000)

</script>


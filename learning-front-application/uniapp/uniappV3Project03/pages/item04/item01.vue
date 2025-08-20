<template>
	<!-- 第一种：对象计算 -->
	<view class="box" :class="{active:isActive}">
		v-bind绑定class类1
	</view>
	<!-- 第二种：使用三元表达式 -->
	<view class="box" :class="isActive?'active':''">
		v-bind绑定class类1
	</view>
	
	<view class="box" :style="{width:'300px',height:260+'px',fontSize:size+'px'}">
		内联样式
	</view>
	
	
</template>

<script setup>
import { ref } from 'vue';

const isActive = ref(true)

const size = ref(30);

let index = 0
setInterval(()=>{
	index++;
	size.value = index%20+8;
	isActive.value = !isActive.value
},1000)


</script>


<style lang="scss">
.box{
	width: 200px;
	height: 100px;
	background-color: orange;
	font-size: 20px;
	border: 1px dashed red;
}
.active{
	background-color: green;
	color: white;
}

</style>

<template>
	<div class="app">
		<h2>当前sum1为：{{ sum1 }}</h2>
		<h2>当前sum2为：{{ sum2 }}</h2>
		<h2>当前car1为：{{ car1 }}</h2>
		<h2>当前car2为：{{ car2 }}</h2>
		<button @click="changeSum1">点我sum1+1</button>
		<button @click="changeSum2">点我sum2+1</button>

		<button @click="changeBrand">修改品牌car1</button>
		<button @click="changeColor">修改颜色car1</button>
		<button @click="changePrice">修改价格car1</button>
		<button @click="changeBrand2">修改品牌car2</button>
		<button @click="changeColor2">修改颜色car2</button>
		<button @click="changePrice2">修改价格car2</button>
	</div>
</template>

<script setup lang="ts">
	import {reactive, readonly, ref, shallowReadonly} from 'vue'

	//shallowRef 浅层次的ref
	let sum1 = ref(0)
	let sum2 = readonly(sum1)
	
	let car1 = reactive({
		brand:'奔驰',
		option:{
			color:'红色',
			price:100
		}
	})
	let car2 = shallowReadonly(car1)

	function changeSum1(){
		sum1.value +=1
	}
	function changeSum2(){
		// readonly 所有都不可修改
		// sum2.value +=1
	}
	

	function changeBrand(){
		car1.brand = '宝马'
	}
	function changeColor(){
		car1.option.color = '白色'
	}
	function changePrice(){
		car1.option.price += 10
	}

	function changeBrand2(){
		// shallowReadonly 不允许修改浅层次
		// car2.brand = '大众'
	}
	function changeColor2(){
		car2.option.color = '绿色'
	}
	function changePrice2(){
		car2.option.price += 10
	}
</script>

<style>
	.app {
		background-color: #ddd;
		border-radius: 10px;
		box-shadow: 0 0 10px;
		padding: 10px;
	}
	button {
		margin:0 5px;
	}
</style>
<template>
	<div class="app">
		<h2>姓名：{{ person.name }}</h2>
		<h2>年龄：{{ person.age }}</h2>

		<button @click="person.age += 1">修改年龄</button>

		<hr>
		<h2>{{ car }}</h2>
		<button @click="changePrice">点我价格+10</button>
	</div>
</template>

<script setup lang="ts">
	import { markRaw, reactive, toRaw } from 'vue';
	// import mockjs from 'mockjs'

	// let mockJs = markRaw(mockjs)

	/* =========  toRow ========== */
	let person= reactive({
		name:'tony',
		age:18
	})

	let person2 = toRaw(person)

	console.log('响应式数据',person);
	console.log('原始数据',person2);

	/* =========  markRow ========== */
	let car = markRaw({brand:'奔驰',price:100})
	let car2 = reactive(car)

	console.log('原始数据',car);
	console.log('响应式数据',car2);
	

	function changePrice(){
		car.price += 10;
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
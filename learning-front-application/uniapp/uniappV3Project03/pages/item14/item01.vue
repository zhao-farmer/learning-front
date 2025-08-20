<template>
	<view class="out">
		<input type="text" v-model="name" />
		<input type="text" v-model="person.name" />
	</view>
</template>

<script setup>
import { computed, ref, watch } from 'vue';
const name = ref('')
const person = ref({
	name:"张三",
	age:23
})

// 监听简单数据
watch(name,(newValue,oldValue)=>{
	// 新值
	console.log(newValue);
	// 老值
	console.log(oldValue);
})

// 监听复杂数据
watch(()=>person.value.name,(newValue)=>{
	console.log(newValue);
})

// deep:true 深度监听 会有性能消耗
// immediate:true 立即执行，拿到默认数据
watch(person,(newValue)=>{
	console.log(newValue);
},{deep:true,immediate:true})


</script>


<style lang="scss" scoped>
.out{
	padding: 10px;
	input{
		border: 1px solid black;
		margin-top: 10px;
	}
}
</style>


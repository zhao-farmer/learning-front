<template>
	<view class="out">
		<input type="text" v-model="firstName" placeholder="请输入名"/>
		<input type="text" v-model="lastName" placeholder="请输入姓"/>
		
		<view>全称 {{fullName}}</view>
	
	</view>
</template>

<script setup>
import { ref,watch, watchEffect} from 'vue';

const firstName = ref("")
const lastName = ref("")

const fullName = ref("")

// 监听多个数据
/*
watch([firstName,lastName],([NfirstName,NlastName],[OfirstName,OlastName])=>{
	console.log(NfirstName,NlastName);
	console.log(OfirstName,OlastName);
})
*/

// 分开监听
/*
watch(firstName,(nv,ol)=>{
	
})
watch(lastName,(nv,ol)=>{
	
})
*/

// 任何数据发生改变都会监听
watchEffect(()=>{
	console.log(firstName.value,lastName.value);
})

</script>


<style lang="scss" scoped>
.out{
	padding: 20px;
	input{
		border:1px solid #ccc;
		height: 40px;
		padding: 5px;
		margin-top: 10px;
	}
}
</style>

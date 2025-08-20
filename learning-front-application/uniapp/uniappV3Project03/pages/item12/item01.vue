<template>
	<view class="out">
		<input type="text" v-model="firstName" placeholder="请输入名"/>
		<input type="text" v-model="lastName" placeholder="请输入姓"/>
		<view>全称 {{firstName + "-" + lastName}}</view>
		<!-- 计算属性只会调用一次 -->
		<view>全称 {{fullName}}</view>
		<view>全称 {{fullName}}</view>
		<!-- 方法调用多次 -->
		<view>全称 {{fullName2()}}</view>
		<view>全称 {{fullName2()}}</view>
	</view>
</template>

<script setup>
import { ref,computed } from 'vue';

const firstName = ref("迈克尔")
const lastName = ref("乔丹")

// 计算属性是具有缓存性质的
const fullName = computed(()=> firstName.value + "-" + lastName.value)

// 使用方法调用
const fullName2 = () => firstName.value + "-" + lastName.value;


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

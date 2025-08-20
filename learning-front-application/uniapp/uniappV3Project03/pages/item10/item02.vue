<template>
	<view class="out">
		<!-- 使用v-model双向绑定 -->
		<input type="text" v-model="iptValue"/>
		<view>预览：{{iptValue}}</view>
	</view>
	

</template>

<script setup>
import { ref } from 'vue';
const iptValue = ref("")
const isActive = ref(false)
</script>

<style lang="scss" scoped>
.out{
	padding: 0 20px;
	margin-top: 40px;
	input{
		border: 1px solid black;
		height: 40px;
	}
}
</style>

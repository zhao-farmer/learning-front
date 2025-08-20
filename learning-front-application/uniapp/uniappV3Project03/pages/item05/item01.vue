<template>
	<!-- v-on可以用@代替  v-on:click 等于 @click -->
	<view class="box" v-on:click="onClick" :style="{backgroundColor:color}">
		{{num}}
	</view>

	<switch  @change="onChange"/>
	
	<button type="primary" :loading="isLoading">普通按钮</button>
</template>

<script setup>
import {ref} from 'vue'
	
const num = ref(1);
const color = ref("#fc359a");
const isLoading = ref(false)

function onClick(){
	num.value++;
	color.value = "#" + String(Math.random()).substring(3,9);
}

function onChange(e){
	isLoading.value = e.detail.value;
	console.log(e.detail.value);
}

</script>


<style lang="scss">
.box{
	width: 200px;
	height: 200px;
	background-color: orange;

}

</style>

<template>
	<view class="out">
		<input type="text" :value="iptValue" 
			@input="event => iptValue = event.detail.value"/>
			
		<view>预览：{{iptValue}}</view>
	</view>
	

</template>

<script setup>
import { ref } from 'vue';
const iptValue = ref("")
const isActive = ref(false)

// function onInput(e){
// 	iptValue.value = e.detail.value
// }
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

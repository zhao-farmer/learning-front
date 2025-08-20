<template>
	<view class="layout">
		<scroll-view scroll-y="true" class="scroll" ref="scroll">
			<view></view>
		</scroll-view>
		
		<life-demo v-if="show"></life-demo>
	</view>
</template>

<script setup>
import {onMounted, ref} from "vue"
const scroll = ref(null);
const show = ref(true)

setTimeout(()=>{
	show.value = false
},2000)



// 挂载结束
onMounted(()=>{
	console.log(scroll.value);
})

</script>


<style lang="scss" scoped>
.box{
	width: 200px;
	height: 200px;
}
input{
	border: 1px solid #cfcfcf;
	height: 40px;
}
</style>

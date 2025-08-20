<template>
	<view class="layout">
		<demo-child ref="child"></demo-child>
		<view>-----</view>
		<button @click="update">点击修改子值</button>
	</view>
</template>

<script setup>
import {onMounted, ref} from "vue"

const child = ref(null)

// 挂载完毕
onMounted(()=>{
	console.log(child.value);
})

const update = function(){
	// 调用子组件的方法
	child.value.updateCount()
}

</script>


<style lang="scss" scoped>

</style>

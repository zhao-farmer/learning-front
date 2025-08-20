<template>
  <div class="child2">
    <h3>子组件2</h3>
	<h4>电脑：{{ computed }}</h4>
  </div>
</template>

<script setup lang="ts" name="Child2">
	import { onUnmounted, ref } from 'vue';
	import emitter from '@/utils/emitter';
	let computed = ref('联想')

	emitter.on('send-toy',(value)=>{
		console.log('send-toy',value);
	})
	// 在组件卸载时解绑send-toy事件
	onUnmounted(()=>{
		emitter.off('send-toy')
	})
</script>

<style scoped>
	.child2{
		margin-top: 50px;
		background-color: orange;
		padding: 10px;
		box-shadow: 0 0 10px black;
		border-radius: 10px;
	}
</style>
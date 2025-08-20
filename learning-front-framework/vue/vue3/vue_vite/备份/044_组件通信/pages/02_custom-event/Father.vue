<template>
    <div class="father">
        <h3>父组件</h3>
		<h4 v-if="toy">子给的玩具：{{ toy }}</h4>
		<!-- 给子组件child绑定事件 -->
		<Child @send-toy="saveToy"/>
    </div>
</template>

<script setup lang="ts" name="Father">
	import { ref } from "vue";
	import Child from "./Child.vue";
	let toy = ref('')
	// 用于保存子传父的函数
	function saveToy(value:string){
		console.log('saveToy',value);	
		toy.value = value
	}
</script>

<style scoped>
.father {
    background-color: rgb(165, 164, 164);
    padding: 20px;
    border-radius: 10px;
}
.father button {
    margin-right: 5px;
}
</style>

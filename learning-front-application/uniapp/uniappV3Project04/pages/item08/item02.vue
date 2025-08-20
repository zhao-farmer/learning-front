<template>
	<view class="">
		姓名: {{name}}
		年龄: {{age}}
	</view>
</template>

<script setup>
import {ref} from "vue"
import {onLoad} from "@dcloudio/uni-app"

const name = ref("张三")
const age = ref(18)
const scroll = ref(null)

onLoad((e)=>{
	// name.value = "李四"
	console.log("onload函数");
	console.log(e);
	name.value = e.name;
	age.value = e.age;
})

</script>


<style lang="scss" scoped>

</style>

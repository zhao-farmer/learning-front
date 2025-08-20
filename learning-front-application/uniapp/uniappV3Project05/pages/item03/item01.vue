<template>

</template>
<script setup>
const count = ref(0);
const state = ref(true)
onLoad(()=>{
	console.log("onLoad,页面生命周期钩子");
})
onMounted(()=>{
	console.log("onMounted,组件生命周期函数");
})
</script>

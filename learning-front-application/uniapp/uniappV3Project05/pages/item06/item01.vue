<template>
	<view></view>
</template>

<script setup>
// 新版本规定只能在tabbar中使用，不能在App.vue和其他页面中使用
	
// 修改对应编号的名称
uni.setTabBarItem({
	index:0,
	text:"自定义"
})

// 设置右上角提示
uni.setTabBarBadge({
  index: 1,
  text: '99+'
})

// 设置提示红点
uni.showTabBarRedDot({
  index: 2,
  text: '99+'
})

// 两秒后移除，最好点击对应页面后，在其页面移除对应提示
setTimeout(()=>{
	// 移除提示信息
	uni.removeTabBarBadge({
		index:1
	})
	// 隐藏红点信息
	uni.hideTabBarRedDot({
		index:2
	})
},2000)

</script>

<style lang="scss" scoped>

</style>

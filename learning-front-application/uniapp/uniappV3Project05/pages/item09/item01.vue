<template>
	<view class="content">
		<button @click="onRemove">删除存储Name</button>
		<button @click="onClear" type="warn">删除所有缓存</button>
	</view>
</template>

<script setup>
/*============同步缓存=============*/
// 会有多次回调不建议使用


/*============异步缓存=============*/
// 存入缓存数据
uni.setStorageSync("storage_key","hello")
// 相同的key第二次覆盖掉
uni.setStorageSync("storage_key","张三")
// 存入复杂数据 
// web中localStorage存的数据只能是字符类型的，这里自动转化了
uni.setStorageSync("arrs",[1,2,3])

// 获取数据
uni.setStorageSync("name","李四")

let myName = uni.getStorageSync("name")
console.log(myName);


// 获取全部数据
let all = uni.getStorageInfoSync();
console.log(all);

function onRemove(){
	uni.removeStorageSync("name")
}

// 清除全部数据
function onClear(){
	uni.clearStorageSync()
}
</script>

<style lang="scss" scoped>
.content{
	padding: 10px;
	button{
		margin-top: 10px;
	}
}
</style>

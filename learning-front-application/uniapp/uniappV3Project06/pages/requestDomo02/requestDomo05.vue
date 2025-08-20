<template>
	<view class="content">
		<view class="layout">
			<view class="box" v-for="(item,index) in pets" :key="item.id">
				<view class="pic" @click="onPreview(index)">
					<image lazy-load :src="item.url" mode="widthFix"></image>
				</view>
				<view class="text">{{item.width}}x{{item.height}}</view>
			</view>
		</view>
		
		<view class="float">
			<view class="item" @click="onRefresh">刷新</view>
			<view class="item" @click="onTop">顶部</view>
	
		</view>
	</view>
</template>

<script setup>
import {ref} from "vue"
import {onReachBottom,onPullDownRefresh} from "@dcloudio/uni-app"

const pets = ref([])

// 点击预览
const onPreview = function (index){
	let urls = pets.value.map(item=>item.url)
	uni.previewImage({
		current:index,
		urls
	})
}
// 点击刷新
const onRefresh = function(){
	uni.startPullDownRefresh()
	restart()
}

// 点击返回顶部
const onTop = function(){
	uni.pageScrollTo({
		scrollTop:0,
		duration:100
	})
}


// 网络请求获取图片
function newwork(){
	uni.showNavigationBarLoading()
	uni.request({
		url:"https://api.thecatapi.com/v1/images/search",
		data:{
			limit:10
		}
	}).then(res=>{
		console.log(res.data);
		pets.value = [...pets.value,...res.data]
	}).catch(err=>{
		uni.showToast({
			title:"请求有误，请从新刷新",
			icon:"none"
		})
	}).finally(()=>{
		uni.hideNavigationBarLoading()
		uni.stopPullDownRefresh()
	})
}
// 触底加载
onReachBottom(()=>{
	newwork()
})
// 下拉刷新
// pages.json中 style中必须设置 "enablePullDownRefresh": true
onPullDownRefresh(()=>{
	restart()
})

function restart(){
	pets.value=[]
	newwork()
}

newwork()
</script>


<style lang="scss" scoped>
.content{
	.layout{
		padding: 50rpx;
		.box{
			margin-bottom: 50rpx;
			box-shadow: 0 10rpx 40rpx rgba(0, 0, 0, 0.08);
			border-radius: 15rpx;
			overflow: hidden;
			.pic{
				image{
					width: 100%;
				}
			}
			.text{
				padding: 30rpx;
			}
		}
	}
	.float{
		position: fixed;
		right: 30rpx;
		bottom: 80rpx;
		// 增加安全区域
		padding-bottom: env(safe-area-inset-bottom);
		.item{
			width: 90rpx;
			height: 90rpx;
			background-color: rgba(255, 255, 255, 0.9);
			border-radius: 50%;
			margin-bottom: 15rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			border: 1px solid #ccc;
		}
	}
}
</style>

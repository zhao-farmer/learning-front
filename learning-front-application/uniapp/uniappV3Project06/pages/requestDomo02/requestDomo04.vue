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
	</view>
</template>

<script setup>
import {ref} from "vue"
import {onReachBottom,onPullDownRefresh} from "@dcloudio/uni-app"

const pets = ref([])

// 预览
const onPreview = function (index){
	let urls = pets.value.map(item=>item.url)
	uni.previewImage({
		current:index,
		urls
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
	pets.value = []
	newwork()
})

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
}
</style>

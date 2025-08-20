<template>
	<view class="content">
		<view class="layout">
			<view class="box" v-for="item in pets" :key="item.id">
				<view class="pic">
					<image :src="item.url" mode="widthFix"></image>
				</view>
				<view class="text">{{item.width}}*{{item.height}}</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import {ref} from "vue"
const pets = ref([])

function newwork(){	
	uni.request({
		url:"https://api.thecatapi.com/v1/images/search",
		data:{
			limit:10
		}
	}).then(res=>{
		console.log(res.data);
		pets.value = res.data
	})
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
}
</style>

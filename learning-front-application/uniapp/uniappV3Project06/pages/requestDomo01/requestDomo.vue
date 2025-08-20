<template>
	<view class="content">
		<view class="layout">
			<view class="box" v-for="item in 5">
				<view class="pic">
					<image src="/static/images/pic-2.jpg" mode="widthFix"></image>
				</view>
				<view class="text">@@@</view>
			</view>
		</view>
	</view>
</template>

<script setup>

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

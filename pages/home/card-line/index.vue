<template>
	<view class="flex justify-between w-full ">
		<view class="card flex flex-col items-center">
			<image src="/static/img/record/diet.png" style="width: 50rpx;height: 50rpx;"></image>
			<view> 今日饮食 </view>
			<view @click="goRecord('diet')" class="lif-a link"> 记录饮食情况 </view>
		</view>
		<view class="card flex flex-col items-center">
			<image src="/static/img/record/water.png" style="width: 50rpx;height: 50rpx;"></image>
			<view> 今日饮水 </view>
			<view @click="goRecord('water')" class="lif-a link"> 记录饮水情况 </view>
		</view>
		<view class="card flex flex-col items-center">
			<image src="/static/img/record/sport.png" style="width: 50rpx;height: 50rpx;"></image>
			<view> 今日运动 </view>
			<view @click="goRecord('sport')" class="lif-a link"> 记录你的运动 </view>
		</view>
	</view>
</template>

<script setup>
	import {
		today,
		lunarToday
	} from '@/common/lunar'

	// 快速记录 心情、感觉和运气
	window.today = today

	function goRecord(type) {
		uni.navigateTo({
			url: `/pages/record/${type}/record`
		})
	}
</script>

<style scoped>
	.card {
		width: 32%;
		position: relative;
		border-radius: 16px;
		box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
		padding: 20rpx 30rpx;
		box-sizing: border-box;
		display: flex;
		position: relative;
		column-gap: 24rpx;
		row-gap: 20rpx;
	}

	.link {
		font-size: .7em;
	}
</style>
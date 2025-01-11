<template>
	<view class="calendar-card">
		<image src="/static/img/page/home-calendar.png" style="width: 80rpx;height: 80rpx;flex-shrink: 0;" mode="aspectFit"></image>
		<view class="flex flex-col w-full ">
			<view style="font-size: 16px;font-weight: bold;color: #555;">{{today.toString()}}
				星期{{today.getWeekInChinese()}} </view>
			<view style="font-size: 12px;font-weight: bold;color: #999;">{{lunarToday.toString()}}</view>

			<view style="margin-top: 20rpx;">
				<view></view>
				<button
					style="font-weight: bold; float: right;background-color: #ea4c89;color:#fff;border-radius: 999px;font-size: 13px;">
					查看今日详情 </button>
			</view>
		</view>

		

	</view>
</template>

<script setup>
	import {
		today,
		lunarToday
	} from '@/common/lunar'

	window.today = today
</script>

<style scoped>
	.calendar-card {
		width: 100%;
		position: relative;
		border-radius: 16px;
		box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
		padding: 20rpx 30rpx;
		box-sizing: border-box;
		display: flex;
		position: relative;
		column-gap: 24rpx;
	}
</style>
<template>
	<view class="sleep-card">
		<!-- Header -->
		<view class="flex justify-between items-center">
			<view class="flex items-center">
				<image src="/static/img/record/luck.png" style="width: 30rpx;height: 30rpx;flex-shrink: 0;"
					mode="aspectFit" />
				<view class="font-bold" style="margin-left: .3em;color:#F4EA29;font-size: 26rpx;">运气</view>
			</view>
			<view style="font-size: 20rpx;color:#ccc;font-weight: bold;">了解更多</view>
		</view>

		<!-- Content -->
		<view class="flex justify-between w-full" style="padding:24rpx 12rpx;">

		</view>

	<view @click="goRecord" class="norecord lif-a">
		记录当前运气
	</view>
	</view>
</template>
<script setup>
	import {
		ref,
		computed,
		watch
	} from 'vue';
	import {
		useAnalyzeStore
	} from '@/store/analyze';


	function goRecord() {
		uni.navigateTo({
			url: '/pages/record/luck/record'
		})
	}
</script>


<style scoped lang="less">
	.sleep-card {
		width: 100%;
		position: relative;
		border-radius: 16px;
		box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
		padding: 30rpx 30rpx;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		position: relative;
		column-gap: 24rpx;
	}


	.time-text {
		font-size: 20rpx;
		font-weight: bold;
		color: #aaa;
	}

	.dynamic-tip {
		padding-top: 20rpx;
		font-size: 18rpx;
		font-weight: bold;
		color: #FF5722;
	}

	.norecord {
		margin-top: 30rpx;
		text-align: center;
	}
</style>
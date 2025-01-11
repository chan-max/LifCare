<template>
	<view class="container">
		<view class="card">
			<view style="display:flex;column-gap: 12px;">
				<view class="card-top-item">
					<view class="t number-1"> {{store.totalSleepDays}} <small>天</small></view>
					<view class="p"> 总记录天数 </view>
				</view>
				<view class="card-top-item">
					<view class="t number-1"> {{store.totalSleepHours}} <small>小时</small> </view>
					<view class="p"> 总睡眠时长 </view>
				</view>

				<view class="card-top-item">
					<view class="t number-1"> {{store.totalSleepSegments}} <small>次</small></view>
					<view class="p"> 总睡眠次数 </view>
				</view>
				<view class="card-top-item">
					<view class="t number-1"> {{store.averageSleepSegments}} <small>次/天</small> </view>
					<view class="p"> 平均睡眠次数 </view>
				</view>
			</view>

			<view style="display:flex;column-gap: 12px;">
				<view class="card-top-item">
					<view class="t number-1"> {{store.averageSleepHours}} <small> 小时</small> </view>
					<view class="p"> 平均睡眠时长 </view>
				</view>
			</view>

			<view style="display:flex;column-gap: 12px;">
				<view class="card-top-item">
					<view class="t number-1"> {{store.sleepQualityScore}} <small> 分</small> </view>
					<view class="p"> 综合睡眠评分 </view>
				</view>
				<view class="card-top-item">
					<view class="t number-1"> {{store.recommendedSleepHours}} <small>小时</small> </view>
					<view class="p"> 推荐睡眠时长 </view>
				</view>
			</view>
		</view>

	</view>
</template>

<script setup>
	import {
		onBeforeMount,
		ref
	} from 'vue';
	import Api from '@/common/api/api'
	import AnalyzeSleepScore from './analyze-sleep-score.vue'

	const store = ref({})

	onBeforeMount(() => {
		Api.getSleepCustomInfo().then((res) => {
			store.value = res
		})
	})
</script>

<style scoped lang="less">
	.container {
		padding: 16px;
		background-color: #F7F8FA;
	}

	.card {
		width: 100%;
		padding: 16px;
		border-radius: 12px;
		box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
		box-sizing: border-box;
		border: 1px solid #eee;
		display: flex;
		flex-direction: column;
		row-gap: 12px;
	}

	.card-top-item {
		height: 64px;
		flex: 1;
		border-radius: 12px;
		background-color: #f3f3f3;
		box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		.t {
			color: #555;
			line-height: 30px;
			font-size: 18px;
		}

		.p {
			font-size: 9px;
			font-weight: bold;
			color: #999;
		}

		small {
			font-size: .5em;
			font-weight: bold;
		}
	}
</style>
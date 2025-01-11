<template>
	<view class="container">
		<view class="title">记录类型</view>

		<view class="list">
			<view v-for="(item, index) in RecordTypeOptions" :key="index" class="list-item" @click="goToPage(item.type)"
				:class="{ 'active': activeIndex === index }" @touchstart="onTouchStart(index)" @touchend="onTouchEnd">
				<image class="thumbnail" :src="item.logo"></image>
				<view class="item-content">
					<text class="text">{{ item.label }}</text>

					<view style="flex:0;"></view>

					<template v-if="item.type == 'sleep'">
						<view v-if="store.dayrecordSleepCount" style="font-size: 12px;color:#999;">
							今日已记录 <span class="number-1"
								style="font-size: 1.8em;color:#ea4c89">{{store.dayrecordSleepCount}}</span> 段睡眠
						</view>
						<view v-else style="font-size: 12px;color:#999;">
							今日未记录
						</view>
					</template>

					<template v-if="item.type == 'height'">
						<view class="number-1" style="font-weight: 500;color:#aaa;font-size: 14px;">
							{{ store.height ? `${store.height} cm` : '未记录'}}
						</view>
					</template>

					<template v-if="item.type == 'weight'">
						<view class="number-1" style="font-weight: 500;color:#aaa;font-size: 14px;">
							{{ store.weight ? `${store.weight} kg` : '未记录'}}
						</view>
					</template>

					<template v-if="item.type == 'period'">
						<view class="number-1" style="font-weight: 900;color:deeppink;font-size: 12px;">
							可能进入生理期，请留心哦
						</view>
					</template>


					<template v-if="item.type == 'smoke'">
						<view style="font-size: 12px;color:#999;">
							今日已吸烟 <span class="number-1"
								style="font-size: 1.8em;color:saddlebrown">{{store.totalSmokeCount}}</span> 支
						</view>
					</template>



					<uni-icons type="right" size="16" color="#ccc" />
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import ChartMiniSleepLine from '@/components/chart/mini-sleep-line.vue'
	import {
		ref,
		onBeforeMount,
		onDeactivated
	} from 'vue';
	import {
		RecordTypeOptions
	} from '@/common/enum/record.ts';

	import Api from '@/common/api/api'



	import {
		onLoad,
		onShow
	} from "@dcloudio/uni-app";

	const store = ref({
		height: '',
		weight: '',
		dayrecord: {},
		dayrecordSleepCount: 0,
		totalSmokeCount: 0,
	})

	const dayrecord = ref({})

	async function init() {
		Api.getMyLatestHeightRecords().then((res) => {
			store.value.height = res?.height
		})

		Api.getMyLatestWeightRecords().then((res) => {
			store.value.weight = res?.weight
		})

		Api.getDayrecord().then((res) => {
			// 今天记录了几段睡眠
			store.value.dayrecordSleepCount = res.record.filter((item) => item.type == 'sleep').length


			store.value.totalSmokeCount = res.record.reduce((res, item) => {
				if (item.type == 'smoke') {
					res += item.smokeCount
				}

				return res
			}, 0)
		})

	}

	onShow(() => {
		init()
	})

	const activeIndex = ref(-1);

	function onTouchStart(index) {
		activeIndex.value = index;
	}

	function onTouchEnd() {
		activeIndex.value = -1;
	}

	function goToPage(type) {
		uni.navigateTo({
			url: `/pages/record/${type}/record`,
		});
	}
</script>

<style scoped>
	.container {
		padding: 16px;
		min-height: 100vh;
		background-color: #f3f2f9;
	}

	.title {
		font-weight: bold;
		color: #000;
		font-size: 20px;
		padding-bottom: 6px;
		padding-left: 6px;
	}

	.list {
		padding: 12px 0;
		background-color: #fff;
		border-radius: 12px;
		overflow: hidden;
	}

	.list-item {
		display: flex;
		align-items: center;
		padding: 0 20px;
		transition: background-color 0.2s ease;
	}

	.list-item:last-child .item-content {
		border-bottom: none;
	}

	.item-content {
		flex: 1;
		width: 100%;
		display: flex;
		column-gap: 16px;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1px solid #eaeaea;
	}

	.thumbnail {
		width: 20px;
		height: 20px;
		margin-right: 0px;
		border-radius: 4px;
		object-fit: cover;
	}

	.text {
		flex: 1;
		font-size: 14px;
		color: #333;
		font-weight: 900;
		padding: 12px 12px;
		height: 36px;
		line-height: 36px;
	}

	.list-item.active {
		background-color: #f0f0f0;
		/* 手指按下时的背景高亮 */
	}

	.list-item:active {
		background-color: #e6e6e6;
		/* PC 端点击的视觉反馈 */
	}
</style>
<template>
	<view class="sleep-card">
		<!-- Header -->
		<view class="flex justify-between items-center">
			<view class="flex items-center">
				<image src="/static/img/record/sleep.png" style="width: 30rpx;height: 30rpx;flex-shrink: 0;"
					mode="aspectFit" />
				<view class="font-bold" style="margin-left: .3em;color:#63E2D6;font-size: 26rpx;">睡眠</view>
			</view>
			<view style="font-size: 20rpx;color:#ccc;font-weight: bold;">了解更多</view>
		</view>

		<!-- Content -->
		<view class="flex justify-between w-full" style="padding:24rpx 12rpx;">
			<view>
				<!-- Time Tips -->
				<view v-if="suggestedSleepTime && suggestedSleepDuration">
					<view class="time-text">最佳睡眠时间 今晚 <span style="font-size: 2em;color:#333;">
							{{ suggestedSleepTime }}</span>
						- 明早
						<span style="font-size: 2em;color:#333;"> {{ wakeUpTime }}</span>
					</view>
					<view class="time-text">
						建议睡眠时长 <span style="font-size: 2em;color:#333;">{{ sleepDurationHours }}</span> 小时
						<span style="font-size: 2em;color:#333;">{{ sleepDurationMinutes }}</span> 分钟
					</view>
					<view class="dynamic-tip">{{ dynamicTip }}</view>
				</view>
				<view v-else>
					<text>加载中...</text>
				</view>
			</view>
			<!-- Sleep Chart -->
			<view style="width: 180rpx;height:180rpx;flex-shrink: 0;">
				<sleepCircle :startTime="startTime" :endTime="endTime" />
			</view>
		</view>

		<button @click="goSleepRecord" v-if="!analyzeStore?.dayrecord?.record?.length" class="norecord lif-button">
			未记录昨晚的睡眠
			，快来记录一下吧</button>
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
	import sleepCircle from './sleep-circle.vue';

	const analyzeStore = useAnalyzeStore();

	// 定义 ref 存储建议的睡眠数据
	const suggestedSleepTimeHour = ref(null);
	const suggestedSleepTimeMinute = ref(null);
	const suggestedSleepDuration = ref(null);

	// 动态提示内容
	const dynamicTip = ref("");

	// 定义 startTime 和 endTime，用于图表组件
	const startTime = ref(null);
	const endTime = ref(null);

	// 监听数据变化并初始化
	watch(
		() => analyzeStore.analyze,
		() => {

			if (!analyzeStore.analyze) {
				return
			}

			suggestedSleepTimeHour.value = analyzeStore.analyze.suggestedSleepTimeHour;
			suggestedSleepTimeMinute.value = analyzeStore.analyze.suggestedSleepTimeMinute;
			suggestedSleepDuration.value = analyzeStore.analyze.suggestedSleepDuration;

			// 初始化图表时间
			updateChartTimes();

			// 定时器：每分钟更新提示信息
			setInterval(updateDynamicTip, 60000);
			updateDynamicTip(); // 立即执行一次
		}, {
			immediate: true
		}
	);

	// 计算建议睡觉时间字符串
	const suggestedSleepTime = computed(() => {
		if (suggestedSleepTimeHour.value !== null && suggestedSleepTimeMinute.value !== null) {
			return `${suggestedSleepTimeHour.value}:${suggestedSleepTimeMinute.value < 10 ? '0' + suggestedSleepTimeMinute.value : suggestedSleepTimeMinute.value}`;
		}
		return null;
	});

	// 计算睡眠时长的小时和分钟部分
	const sleepDurationHours = computed(() => Math.floor(suggestedSleepDuration.value || 0));
	const sleepDurationMinutes = computed(() => {
		const decimalPart = suggestedSleepDuration.value - Math.floor(suggestedSleepDuration.value || 0);
		return Math.round(decimalPart * 60); // 将小数部分转化为分钟
	});

	// 计算醒来时间
	const wakeUpTime = computed(() => {
		if (suggestedSleepTimeHour.value !== null && suggestedSleepTimeMinute.value !== null &&
			suggestedSleepDuration.value !== null) {
			const wakeUpDate = new Date();
			wakeUpDate.setHours(suggestedSleepTimeHour.value);
			wakeUpDate.setMinutes(suggestedSleepTimeMinute.value);

			wakeUpDate.setHours(wakeUpDate.getHours() + Math.floor(suggestedSleepDuration.value));
			wakeUpDate.setMinutes(wakeUpDate.getMinutes() + Math.round((suggestedSleepDuration.value - Math.floor(
				suggestedSleepDuration.value)) * 60));

			const wakeUpHour = wakeUpDate.getHours();
			const wakeUpMinute = wakeUpDate.getMinutes();

			return `${wakeUpHour}:${wakeUpMinute < 10 ? '0' + wakeUpMinute : wakeUpMinute}`;
		}
		return null;
	});

	// 更新动态提示
	function updateDynamicTip() {
		if (suggestedSleepTimeHour.value !== null && suggestedSleepTimeMinute.value !== null) {
			const now = new Date();
			const targetTime = new Date();
			targetTime.setHours(suggestedSleepTimeHour.value);
			targetTime.setMinutes(suggestedSleepTimeMinute.value);
			targetTime.setSeconds(0);

			const diff = targetTime - now; // 时间差（毫秒）

			if (diff > 0 && diff <= 30 * 60 * 1000) {
				dynamicTip.value = "即将进入最佳睡眠时间，请准备睡觉。";
			} else if (diff <= 0 && Math.abs(diff) <= 60 * 60 * 1000) {
				dynamicTip.value = "您已错过最佳睡眠时间，请尽快入睡，保证睡眠质量！";
			} else if (diff > 30 * 60 * 1000) {
				dynamicTip.value = "距离最佳睡眠时间还有一段时间，请放松心情。";
			} else {
				dynamicTip.value = "请注意休息，避免熬夜对身体造成影响。";
			}
		}
	}

	// 更新图表的 startTime 和 endTime
	function updateChartTimes() {
		if (suggestedSleepTimeHour.value !== null && suggestedSleepTimeMinute.value !== null && suggestedSleepDuration
			.value !== null) {
			const start = new Date();
			start.setHours(suggestedSleepTimeHour.value);
			start.setMinutes(suggestedSleepTimeMinute.value);

			const end = new Date(start);
			end.setHours(end.getHours() + Math.floor(suggestedSleepDuration.value));
			end.setMinutes(end.getMinutes() + Math.round((suggestedSleepDuration.value - Math.floor(suggestedSleepDuration
				.value)) * 60));

			startTime.value = start.toISOString();
			endTime.value = end.toISOString();
		}
	}


	function goSleepRecord() {
		uni.navigateTo({
			url: '/pages/record/sleep/record'
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
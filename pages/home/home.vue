<template>
	<view class="container">
		<topplaceholder></topplaceholder>

		<view style="width: 100%;height: 200rpx;padding: 24px;box-sizing: border-box;">
			<image @click="showUserPopup" :src="loginStore?.userInfo?.avatar || '/static/img/default-avatar.png'"
				class="avatar"></image>
		</view>

		<view class="inner">
			<HealthScoreChart></HealthScoreChart>

			<calendarCard></calendarCard>

			<moodCard></moodCard>
			<luckCard></luckCard>
			<feelingCard></feelingCard>

			<cardLine></cardLine>

			<sleepCard></sleepCard>

			<recordGenerator></recordGenerator>

			<recordCard :dayrecord="dayrecord"></recordCard>


		</view>

		<uni-popup ref="userPopupRef">
			<userPopup></userPopup>
		</uni-popup>
	</view>
</template>

<script setup>
	import {
		useLoginStatusStore
	} from "@/store/login";
	import {
		getGreeting
	} from "@/common/welcome";
	import Api from '@/common/api/api'
	import {
		computed,
		onBeforeMount,
		ref
	} from "vue";
	import ChartLifePercent from '@/components/chart/life-percent.vue'
	import userPopup from './user-popup.vue'
	import HealthScoreChart from './health-score.vue'
	import HealthWaveChart from './health-wave.vue'
	import topplaceholder from '@/components/topplaceholder/index.vue'
	import cardLine from './card-line/index.vue'
	import {
		RecordTypeOptions
	} from "@/common/enum/record";

	import recordCard from './record-card.vue'
	import calendarCard from './calendar-card.vue'
	import sleepCard from './sleep-card/index.vue'
	import recordGenerator from './record-generator/index.vue'
	import {
		onShow
	} from '@dcloudio/uni-app'
	import moodCard from './mood-card/index.vue'
	import feelingCard from './feeling-card/index.vue'
	import luckCard from './luck-card/index.vue'

	/**
	 * 首页负责
	 */

	let loginStore = useLoginStatusStore()

	let dayrecord = ref({})

	async function init() {
		Api.getDayrecord().then((res) => {
			dayrecord.value = res
		})
	}


	onShow(async () => {
		// uni.showLoading({
		// 	mask: true,
		// 	title: '正在获取数据'
		// })
		await init()

		// uni.hideLoading({

		// })
	})


	const userPopupRef = ref()

	function showUserPopup() {
		userPopupRef.value.open('bottom')
	}
</script>

<style lang="less" scoped>
	.container {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		background-color: #FF6392;
	}

	.inner {
		width: 100%;
		background-color: #fff;
		min-height: 100vh;
		border-top-right-radius: 32px;
		border-top-left-radius: 32px;
		padding: 16px;
		box-sizing: border-box;
		box-shadow: rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px;
		display: flex;
		flex-direction: column;
		align-items: center;
		row-gap: 24rpx;
	}


	.avatar {
		width: 36px;
		height: 36px;
		border-radius: 999px;
		border: 2px solid #ea4c89;
	}
</style>
<template>
	<view class="container">
		<view class="period-calendar">
			<uni-calendar :selected="selected" :showMonth="false" @change="change" @monthSwitch="initCalendar">
			</uni-calendar>
		</view>

		<button @click="addRecord(dayrecord.date)"
			style="width:100%;background: #ea4c89;color:#fff;font-weight: bold;border-radius: 16px;">
			记录今天 </button>

		<view style="width:90%;">
			<view style="font-weight: bold;color:#555;padding-bottom: 12px;"> {{dayrecord.date}} </view>
			<view style="color:#777;padding-bottom: 36px;font-size:12px;">
				这里统计了今日你的生理期身体状态记录</view>
			<ua-timeline>
				<template v-for="(record, index) in dayrecord?.record" :key="record?.id">
					<ua-timeline-item :timestamp="'记录时间: ' +  formatDate(record?.createTime)" lineType="dotted">
						<view style="display: flex;justify-content: space-between;">
							<view style="font-size: 16px;font-weight: bold;color: #555;">
							</view>
							<uni-icons @click="deleteRecord(record)" style="margin-left: 12px;" type="closeempty"
								size="16" color="#ccc"></uni-icons>
						</view>
					</ua-timeline-item>
				</template>
			</ua-timeline>
		</view>

	</view>
</template>

<script setup>
	import {
		onBeforeMount,
		ref
	} from 'vue';

	import {
		formatDate,
		getDayRecordDateKey
	} from '@/common/date'

	import Api from '@/common/api/api'

	function change(e) {
		initDayrecord(e.fulldate)
	}


	const startDate = ref('2025-1-1')
	const endDate = ref('2025-1-7')
	const dayrecord = ref({})

	const selected = ref([])

	async function initCalendar(e) {
		let {
			year,
			month
		} = e

		// let monthRecord = await Api.getPeriodMonthly(year, month)
		// let res = monthRecord.filter((item) => {
		// 	return item.record.some((i) => i.type == 'period')
		// })



		let predict = await Api.getPredictPeriodMonthly(year, month)

		let res = predict.map((item) => {
			return {
				date: item.date,
				info: '预测',
				class: 'period-predict-highlight'
			}
		})


		// res = res.map((item) => {
		// 	return {
		// 		date: item.date,
		// 		info: '已记录',
		// 		class: 'period-predict-highlight'
		// 	}
		// })

		selected.value = res
	}


	async function addRecord(datekey = getDayRecordDateKey()) {
		const record = {
			type: 'period',
		};
		await Api.addDayrecordDetail(datekey, {
			...record,
		});

		uni.showToast({
			title: '生理期记录成功',
			icon: 'success',
		});

		initCurrentMonth()
		initDayrecord(datekey)
	}

	function initCurrentMonth() {
		let [year, month] = getDayRecordDateKey().split('-')
		initCalendar({
			year,
			month
		})
	}

	async function initDayrecord(datekey = getDayRecordDateKey()) {
		let res = await Api.getDayrecord(datekey)
		res.record = res.record.slice().reverse().filter((item) => item.type == 'period')
		dayrecord.value = res
	}

	async function deleteRecord(item) {
		await Api.deleteDayrecordDetail({
			id: item.id,
			pid: dayrecord.value.id,
		});
		uni.showToast({
			title: '删除成功',
			icon: 'success',
		});
		initCurrentMonth()
		initDayrecord(dayrecord.value.date)
	}

	onBeforeMount(() => {
		initCurrentMonth()
		initDayrecord()
	})
</script>

<style scoped>
	.container {
		padding: 16px;
		display: flex;
		flex-direction: column;
		row-gap: 16px;
		align-items: center;
	}

	.period-calendar {
		font-weight: bold;
		border-radius: 16px;
		width: 100%;
		overflow: hidden;
		box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
	}
</style>

<style>
	.period-predict-highlight {
		background-color: rgba(234, 76, 137, .3) !important;
	}
</style>
<template>

	<view style="display: flex; align-items: center;justify-content: space-between;">
		<view> {{dayrecord?.date}}</view>
	</view>

	<view class="home-calendar">
		<uni-calendar :selected="selected" :showMonth="false" @change="change" @monthSwitch="initCalendar">
		</uni-calendar>
	</view>

	<button class="button-1" @click="showAddRecordPopup"> 添加记录 </button>

	<view class="title"> 共 {{dayrecord?.record?.length}} 条记录 </view>

	<view class="list">
		<view class="list-item" v-for="item in recordDetailList">
			<view>
				<image style="width:24px;height: 24px;" :src="item.typeOption.logo"></image>
			</view>
			<view>
				<view style="font-weight: bold;font-size: 14px;color:#333;">记录类型：
					{{item.typeOption.label}}
				</view>
				<view style="font-weight: bold;font-size: 12px;color:#ccc;margin-top: 8px;">记录时间：
					{{formatDate(item.createTime)}}
				</view>
			</view>

			<view style="flex:1;"></view>

			<view @click="showDetailPopup(item)"><uni-icons color="#ccc" type="more-filled" size="24"></uni-icons>
			</view>
		</view>
	</view>


	<uni-popup ref="addRecordPopupRef">
		<view
			style="width: 100%;background: #fff;display: flex;flex-wrap: wrap;padding: 24px;box-sizing: border-box;padding-bottom: 100px;">
			<view v-for="item in RecordTypeOptions"
				style="display: flex;flex-direction: column; align-items: center;width:20%;padding: 12px;box-sizing: border-box;">
				<image style="width: 48rpx;height: 48rpx;" :src="item.logo"></image>
				<view style="font-weight: bold;font-size: 10px;color: #888;"> {{item.label}} </view>
			</view>
		</view>
	</uni-popup>

	<uni-popup ref="detailPopupRef">
		<view style="padding: 16px 16px 64px 16px;background-color: #fff;">
			<view @click="deleteRecord(currentDetail)"
				style="width:100%;color:#f00;font-weight: bold; font-size: 16px;padding: 12px;text-align: center;">
				删除该记录
			</view>
		</view>
	</uni-popup>

	<uni-popup ref="deleteDialogRef" type="dialog">
		<uni-popup-dialog type="error" cancelText="取消" confirmText="确定" title="记录删除" content="记录删除后不可恢复,确定删除吗"
			@confirm="ensureDelete" @close="dialogClose"></uni-popup-dialog>
	</uni-popup>
</template>

<script setup>
	import {
		computed,
		onBeforeMount,
		ref
	} from 'vue';

	import {
		formatDate,
		getDayRecordDateKey
	} from '@/common/date'

	import Api from '@/common/api/api'
	import {
		onLoad,
		onShow
	} from "@dcloudio/uni-app";

	import {
		getRecordTypeOptionByType,
		RecordTypeOptions
	} from '@/common/enum/record'

	import './index.css'
	import {
		useAnalyzeStore
	} from '@/store/analyze';

	function change(e) {
		initDayrecord(e.fulldate)
	}


	const analyzeStore = useAnalyzeStore()

	const dayrecord = ref({})

	const selected = ref([])

	const recordDetailList = computed(() => {
		if (!dayrecord.value?.record?.length) {
			return []
		}

		dayrecord.value.record.forEach((item) => {
			item.typeOption = getRecordTypeOptionByType(item.type)
		})

		return dayrecord.value.record
	})

	async function initCalendar(e) {
		let {
			year,
			month
		} = e

		let record = await Api.getMonthly(year, month)

		let res = record.map((item) => {

			let recordCount = item.record.length

			let className = ''

			if (recordCount == 0) {
				let className = ''
			} else if (recordCount > 0 && recordCount <= 3) {
				className = 'record-low'
			} else if (recordCount > 3 && recordCount <= 10) {
				className = 'record-middle'
			} else if (recordCount > 10) {
				className = 'record-high'
			}

			return {
				date: item.date,
				info: recordCount ? `${recordCount}` : '',
				class: className,
			}
		})


		selected.value = res

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
		dayrecord.value = res
	}


	const addRecordPopupRef = ref()

	function showAddRecordPopup(item) {
		addRecordPopupRef.value.open('bottom')
	}

	const detailPopupRef = ref()

	const currentDetail = ref()


	function showDetailPopup(item) {
		currentDetail.value = item
		detailPopupRef.value.open('bottom')
	}


	const deleteDialogRef = ref()


	function deleteRecord(record) {
		deleteDialogRef.value.open()
	}


	async function ensureDelete() {
		await Api.deleteDayrecordDetail({
			id: currentDetail.value.id,
			pid: dayrecord.value.id,
		});
		uni.showToast({
			title: '删除成功',
			icon: 'success',
		});

		analyzeStore.initDayrecord()
		initCurrentMonth()
		initDayrecord()
	}

	onShow(() => {
		initCurrentMonth()
		initDayrecord()
	})
</script>

<style lang="scss">
	.home-calendar {
		font-weight: bold;
		border-radius: 16px;
		width: 100%;
		overflow: hidden;
		box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
	}
</style>

<style scoped>
	.title {
		font-size: 14px;
		font-weight: bold;
		color: #333;
		padding: 6px;
	}

	.list {
		display: flex;
		flex-direction: column;
		align-items: center;
		row-gap: 8px;
	}

	.list-item {
		width: 100%;
		background-color: #fff;
		border-radius: 12px;
		display: flex;
		column-gap: 12px;
		padding: 16px;
		box-sizing: border-box;
		box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
	}
</style>
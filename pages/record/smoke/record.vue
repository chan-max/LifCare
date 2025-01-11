<template>
	<view class="container">
		<view class="uni-padding-wrap">
			<view class="uni-title">记录吸烟情况</view>
		</view>

		<!-- Picker View -->
		<picker-view :value="pickerValue" @change="onPickerChange" class="picker-view">
			<!-- 吸烟支数选项 -->
			<picker-view-column>
				<view class="item" v-for="(option, index) in smokeCountOptions" :key="index">{{ option.label }}</view>
			</picker-view-column>
			<!-- 吸烟时间选项 -->
			<picker-view-column>
				<view class="item" v-for="(option, index) in smokeTimeOptions" :key="index">{{ option.label }}</view>
			</picker-view-column>
		</picker-view>

		<!-- 确认按钮 -->
		<button class="confirm-button" type="primary" @click="addRecord">确认记录</button>

		<view style="width:90%;">
			<view style="font-weight: bold;color:#555;padding-bottom: 12px;"> 今日睡眠记录 </view>
			<view style="color:#777;padding-bottom: 36px;font-size:12px;">
				注：今日睡眠记录一般代表的是昨晚的睡眠情况和今天白天的睡眠，我们分析时也会作为前一天的数据进行处理 </view>
			<ua-timeline>
				<template v-for="(record, index) in smokeRecords" :key="record.id">
					<ua-timeline-item :timestamp="'记录时间: ' +  formatDate(record.createTime)" lineType="dotted">
						<view style="display: flex;justify-content: space-between;">
							<view style="font-size: 16px;font-weight: bold;color: #555;">
								在 {{formatDate(record.smokeTime)}} 吸烟 {{record.smokeCount}} 支
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

<script>
	import {
		getDayRecordDateKey,
		formatDate
	} from '@/common/date';
	import Api from '@/common/api/api'

	export default {
		data() {

			const now = new Date(); // 当前时间

			// 计算时间选项
			const smokeTimeOptions = [{
					label: '刚刚',
					value: now.toISOString()
				},
				{
					label: '五分钟前',
					value: new Date(now.getTime() - 5 * 60 * 1000).toISOString()
				},
				{
					label: '十分钟前',
					value: new Date(now.getTime() - 10 * 60 * 1000).toISOString()
				},
				{
					label: '十五分钟前',
					value: new Date(now.getTime() - 15 * 60 * 1000).toISOString()
				},
				{
					label: '半小时前',
					value: new Date(now.getTime() - 30 * 60 * 1000).toISOString()
				},
				{
					label: '一小时前',
					value: new Date(now.getTime() - 60 * 60 * 1000).toISOString()
				},
			];

			return {
				datekey: getDayRecordDateKey(),
				// 吸烟支数选项
				smokeCountOptions: [{
						label: '1 支',
						value: 1
					},
					{
						label: '2 支',
						value: 2
					},
					{
						label: '半支',
						value: 0.5
					},
					{
						label: '1/4 支',
						value: 0.25
					},
				],
				// 吸烟时间选项
				smokeTimeOptions,
				// 选择器的当前值
				pickerValue: [0, 0], // [支数索引, 时间索引]
				// 保存的记录
				savedRecord: null,
				dayrecord: {},
				smokeRecords: []
			};
		},
		beforeMount() {
			this.init()
		},
		methods: {
			formatDate: formatDate,
			// 处理 Picker 的值变化
			onPickerChange(e) {
				this.pickerValue = e.detail.value;
			},

			async init() {
				// 今日记录
				let dayrecord = await Api.getDayrecord()
				let smokeRecords = dayrecord.record.filter((item) => item.type == 'smoke')

				smokeRecords = smokeRecords.sort((a, b) => new Date(b.createTime).getTime() - new Date(a
					.createTime).getTime())

				smokeRecords.forEach((item) => item.pid = dayrecord.id)

				this.smokeRecords = smokeRecords
				this.dayrecord = dayrecord

			},


			async addRecord() {

				const [countIndex, timeIndex] = this.pickerValue;
				const smokeCount = this.smokeCountOptions[countIndex];
				const smokeTime = this.smokeTimeOptions[timeIndex];

				this.savedRecord = {
					smokeCountLabel: smokeCount.label,
					smokeCountValue: smokeCount.value,
					smokeTimeLabel: smokeTime.label,
					smokeTimeValue: smokeTime.value,
				};


				const record = {
					type: 'smoke',
					smokeCount: smokeCount.value,
					smokeTime: smokeTime.value,
				};

				await Api.addDayrecordDetail(this.datekey, {
					...record,
				});

				uni.showToast({
					title: '记录成功',
					icon: 'success',
				});

				this.init(); // 提交后重新加载记录
			},
			// 删除记录
			async deleteRecord(item) {
				await Api.deleteDayrecordDetail({
					id: item.id,
					pid: item.pid,
				});
				uni.showToast({
					title: '删除成功',
					icon: 'success',
				});

				this.init(); // 更新记录
			},
		},
	};
</script>

<style scoped>
	.container {
		padding: 16px;
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: #f8f8f8;
		row-gap: 16px;
	}


	.picker-view {
		width: 100%;
		height: 200px;
		background-color: #fff;
		border-radius: 10px;
		margin-top: 20px;
	}
</style>
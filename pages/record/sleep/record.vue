<template>
	<view class="container">

		<timeCircle :startTime="dateRange[0]" :endTime="dateRange[1]"></timeCircle>

		<view style="font-weight: bold;color: #aaa;border-bottom: 2px solid #00fa00;"> 今日：{{datekey}}</view>

		<uni-datetime-picker type="datetimerange" v-model="dateRange" @change="onDateRangeConfirm" label="睡眠时间范围">
			<view class="number-1 time-range">
				{{ removeYear(dateRange[0]) }} <span style="font-size: 1em;">~</span> {{ removeYear(dateRange[1]) }}
			</view>
			<view style="text-align: center;font-weight: bold;color: #555;font-size: 12px;margin-top: 12px;color:#aaa;">
				点击调整时间 </view>
		</uni-datetime-picker>

		<button class="button-1" style="width: 80%;" @click="addRecord"> {{ sleepDurationText }} , 记录这次睡眠</button>

		<!-- Preset Buttons Section -->
		<view class="preset-buttons">
			<a v-for="(preset, index) in timePresets" :key="index" @click="applyPreset(preset)" class="preset-btn">
				{{ preset.label }}
			</a>
		</view>

		<view style="margin: 24px;width:80%;">
			<view style="font-weight: bold;color:#555;padding-bottom: 12px;"> 今日睡眠记录 </view>
			<view style="color:#777;padding-bottom: 36px;font-size:12px;">
				注：今日睡眠记录一般代表的是昨晚的睡眠情况和今天白天的睡眠，我们分析时也会作为前一天的数据进行处理 </view>
			<ua-timeline>
				<template v-for="(record, index) in todaySleepRecords" :key="record.id">
					<ua-timeline-item :timestamp="'记录时间: ' +  formatDate(record.createTime)" lineType="dotted">
						<view style="display: flex;justify-content: space-between;">
							<view style="font-size: 16px;font-weight: bold;color: #555;">
								<view> 开始时间： {{record.startTime}}</view>
								<view>结束时间：{{record.endTime}}</view>
								<view>共 ：{{getTimeRangeLabel(record.startTime,record.endTime)}} </view>
							</view>
							<uni-icons @click="deleteRecord(record)" style="margin-left: 12px;" type="closeempty"
								size="16" color="#ccc"></uni-icons>
						</view>
					</ua-timeline-item>
				</template>
			</ua-timeline>
		</view>

		<button class="button-1 analyze-btn" style="width: 80%;" @click="goSleepAnalyze"> 查看我的睡眠分析 </button>

		<uni-popup ref="deleteDialogRef" type="dialog">
			<uni-popup-dialog type="error" cancelText="取消" confirmText="确定" title="记录删除" content="记录删除后不可恢复,确定删除吗"
				@confirm="ensureDelete"></uni-popup-dialog>
		</uni-popup>
	</view>
</template>

<script>
	import Api from '@/common/api/api';
	import {
		getDayRecordDateKey,
		formatDate
	} from '@/common/date';
	import timeCircle from './time-circle.vue'
	import {
		useAnalyzeStore
	} from '@/store/analyze';

	let analyzeStore = useAnalyzeStore()


	export default {
		components: {
			timeCircle
		},
		data() {
			return {
				datekey: getDayRecordDateKey(),
				dateRange: [],
				sleepDurationText: '共8小时',
				sleepRecords: [],
				dayrecord: {},
				currentRecordDetail: {},

				// 今天记录的睡眠记录
				todaySleepRecords: [],
				timePresets: [
					// Existing presets
					{
						label: '昨晚23:00-今早7:00',
						start: this.getYesterdayAt(23, 0),
						end: this.getTodayAt(7, 0)
					},
					{
						label: '昨晚00:00-今早8:00',
						start: this.getYesterdayAt(24, 0),
						end: this.getTodayAt(8, 0)
					},
					{
						label: '今天1:00到今天9:00',
						start: this.getTodayAt(1, 0),
						end: this.getTodayAt(9, 0)
					},
					{
						label: '近半小时',
						start: this.getRelativeTime(-30),
						end: new Date()
					},
					{
						label: '近十分钟',
						start: this.getRelativeTime(-10),
						end: new Date()
					},
					{
						label: '近一小时',
						start: this.getRelativeTime(-60),
						end: new Date()
					},
					{
						label: '最近两小时',
						start: this.getRelativeTime(-120),
						end: new Date()
					},
					{
						label: '近五分钟',
						start: this.getRelativeTime(-5),
						end: new Date()
					},
					// Added more presets
					{
						label: '昨晚10:00-早上6:00',
						start: this.getYesterdayAt(22, 0),
						end: this.getTodayAt(6, 0)
					},
					{
						label: '昨晚21:00-今早5:00',
						start: this.getYesterdayAt(21, 0),
						end: this.getTodayAt(5, 0)
					},
					{
						label: '中午12:00-下午14:00',
						start: this.getTodayAt(12, 0),
						end: this.getTodayAt(14, 0)
					},
					{
						label: '今晚20:00-今早4:00',
						start: this.getYesterdayAt(20, 0),
						end: this.getTodayAt(4, 0)
					},
					{
						label: '早上5:00-中午11:00',
						start: this.getTodayAt(5, 0),
						end: this.getTodayAt(11, 0)
					}
				]
			};
		},
		beforeMount() {
			this.init()
		},
		mounted() {
			setTimeout(() => {
				const yesterday = this.getYesterdayAt(23, 0);
				const todayMorning = this.getTodayAt(7, 0);
				this.dateRange = [formatDate(yesterday), formatDate(todayMorning)];
				this.updateSleepDuration();
			});
		},
		methods: {
			formatDate: formatDate,

			async init() {
				// 今日记录
				let dayrecord = await Api.getDayrecord()
				let todaySleepRecords = dayrecord.record.filter((item) => item.type == 'sleep')

				todaySleepRecords = todaySleepRecords.sort((a, b) => new Date(b.createTime).getTime() - new Date(a
					.createTime).getTime())

				todaySleepRecords.forEach((item) => item.pid = dayrecord.id)



				this.todaySleepRecords = todaySleepRecords

				this.dayrecord = dayrecord
				
				analyzeStore.initDayrecord()

			},

			getYesterdayAt(hour, minute) {
				const date = new Date();
				date.setDate(date.getDate() - 1);
				date.setHours(hour, minute, 0, 0);
				return date;
			},

			getTodayAt(hour, minute) {
				const date = new Date();
				date.setHours(hour, minute, 0, 0);
				return date;
			},

			getRelativeTime(minutes) {
				const date = new Date();
				date.setMinutes(date.getMinutes() + minutes);
				return date;
			},

			applyPreset(preset) {
				this.dateRange = [formatDate(preset.start), formatDate(preset.end)];
				this.updateSleepDuration();
			},

			getTimeRangeLabel(startTime, endTime) {
				startTime = new Date(startTime)
				endTime = new Date(endTime)
				const durationMs = endTime - startTime;
				const durationHours = Math.floor(durationMs / 1000 / 60 / 60);
				const durationMinutes = Math.floor((durationMs / 1000 / 60) % 60);
				return `${durationHours}小时${durationMinutes}分钟`;
			},

			updateSleepDuration() {
				const startTime = new Date(this.dateRange[0]);
				const endTime = new Date(this.dateRange[1]);

				if (endTime > startTime) {
					const durationMs = endTime - startTime;
					const durationHours = Math.floor(durationMs / 1000 / 60 / 60);
					const durationMinutes = Math.floor((durationMs / 1000 / 60) % 60);
					this.sleepDurationText = `共${durationHours}小时${durationMinutes}分钟`;
				} else {
					this.sleepDurationText = '结束时间需要晚于起始时间';
				}
			},
			onDateRangeConfirm() {
				setTimeout(() => {
					this.updateSleepDuration();
				}, 33);
			},

			removeYear(datetime) {
				const result = datetime?.replace(/^\d{4}-/, '');
				return result;
			},
			async addRecord() {
				const record = {
					type: 'sleep',
					startTime: this.dateRange[0],
					endTime: this.dateRange[1],
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
			deleteRecord(item) {
				this.currentRecordDetail = item
				this.$refs.deleteDialogRef.open()
			},
			async ensureDelete() {
				let item = this.currentRecordDetail

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

			goSleepAnalyze() {
				uni.navigateTo({
					url: '/pages/record/sleep/analyze'
				})
			}
		}
	};
</script>

<style scoped>
	.container {
		padding: 24px 0;
		display: flex;
		align-items: center;
		flex-direction: column;
		row-gap: 24px;
	}

	.time-range {
		text-align: center;
		font-weight: 900;
		font-size: 20px;
		color: #333;

	}

	.record-item {
		margin-bottom: 15px;
		padding: 15px;
		background-color: #f9f9f9;
		border-radius: 8px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.preset-buttons {
		width: 90%;
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
		justify-content: center;
	}

	.preset-btn {
		background-color: #bbb;
		color: #fff;
		padding: 4px 12px;
		font-weight: bold;
		font-size: 10px;
		border-radius: 999px;
		cursor: pointer;
	}

	.preset-btn:hover {
		background-color: #ea4c89;
	}

	.analyze-btn {
		font-size: 14px;
	}
</style>
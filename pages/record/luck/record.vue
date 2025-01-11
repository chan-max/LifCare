// uniapp Luck Tracker Page
<template>
	<view class="container">

		<view class="intro-card">
			<view
				style="font-size:12px;display:flex;align-items: center; justify-content: space-between; border-bottom: 1px solid #ddd;padding:12px 12px 6px 12px;">


				<view style="color:#999;font-weight: bold;">关于运气</view>

				<view style="color:#007aff;font-weight: 500;"> 了解更多 </view>
			</view>


			<view style="padding:12px;font-size: 12px;color: rgba(0, 0, 0, .6);">
				运气是生命运动气化规律的简称 ，我们绝大多数人以为运气是一种完全不可预测甚至是不可控的信息，但是随着医学进步，似乎逐渐发现了运气的某些规律，而我们试图通过您的记录来推测您的日常生活行为对运气的影响
			</view>
		</view>

		<textarea class="textarea" v-model="value" placeholder="记录一些内容"></textarea>
		<view style="color:#aaa;font-weight: bold;"> 滑动选择 </view>
		<uni-rate :value="luckRecordScore" max="9" @change="onRateChange" :size="36" />
		<view style="font-weight: bold;color:#aaa;">

			<view style="text-align:center;font-size: 16px;">
				{{ currentLuck.title }}
			</view>
			<view style="text-align:center;font-size: 10px;margin-top: 12px;">
				{{ currentLuck.description }}
			</view>
		</view>
		<button class="button-1" style="width: 80%;" @click="addRecord">记录当前运气</button>

		<view class="chart-container">
			<l-echart ref="chartRef" class="chart"></l-echart>
		</view>

		<view style="margin: 24px;width:80%;">
			<view style="font-weight: bold;color:#777;padding-bottom: 36px;"> 近一个月运气记录 </view>
			<ua-timeline>
				<template v-for="(record, index) in luckRecords" :key="record.id">
					<ua-timeline-item :timestamp="formatDate(record.createTime)" lineType="dotted">
						<view style="display: flex;justify-content: space-between;">
							<view style="font-size: 16px;font-weight: bold;color: #555;">
								运气值： {{ record.score }}
							</view>
							<uni-icons @click="deleteRecord(record)" type="closeempty" size="12"
								color="#ddd"></uni-icons>
						</view>
					</ua-timeline-item>
				</template>
			</ua-timeline>
		</view>

		<view>
			<view> 如何提升自己的运气 </view>
		</view>
	</view>
</template>

<script>
	import {
		getDayRecordDateKey,
		formatDate
	} from '@/common/date';
	import LEchart from '@/uni_modules/lime-echart/components/l-echart/l-echart.vue'
	import * as echarts from 'echarts'
	import Api from '@/common/api/api'
	export default {
		computed: {
			currentLuck() {
				return this.luckOptions.find(option => option.level == this.luckRecordScore)
			}
		},
		data() {
			return {
				luckRecords: [],
				luckRecordScore: 5,
				luckOptions: [{
						level: 1,
						title: '非常差',
						description: '您最近的运气似乎非常差，或许尝试换换生活方式'
					},
					{
						level: 2,
						title: '较差',
						description: '近期有些不顺，但不要灰心，多注意细节'
					},
					{
						level: 3,
						title: '稍差',
						description: '虽然有些问题，但通过努力可以改善'
					},
					{
						level: 4,
						title: '一般',
						description: '运气平平，无需担忧，专注于当前目标'
					},
					{
						level: 5,
						title: '尚可',
						description: '运气还不错，抓住机会提升自己'
					},
					{
						level: 6,
						title: '较好',
						description: '事情正在变好，保持积极心态'
					},
					{
						level: 7,
						title: '很好',
						description: '运气颇佳，多尝试新事物'
					},
					{
						level: 8,
						title: '极好',
						description: '几乎事事顺利，继续保持努力'
					},
					{
						level: 9,
						title: '非常好',
						description: '极为幸运，尝试挑战更大的目标'
					}
				]
			};
		},
		beforeMount() {
			this.init()
		},
		methods: {
			formatDate: formatDate,
			async init() {

				uni.showLoading({
					title: 'Loading...',
					mask: true
				})

				let res = await Api.getMyMonthlyRecordDetail('luck');

				this.luckRecords = res.slice().reverse()
				setTimeout(() => {
					this.loadChart(); // 加载图表
					uni.hideLoading()
				}, 33)
			},
			onRateChange(value) {
				this.luckRecordScore = Number(value.value);
			},
			async addRecord() {
				const record = {
					type: 'luck',
					score: this.luckRecordScore,
				};

				let datekey = getDayRecordDateKey();
				await Api.addDayrecordDetail(datekey, {
					...record,
				});

				uni.showToast({
					title: '记录成功',
					icon: 'success',
				});

				this.init(); // 提交后重新加载记录
			},
			async loadChart() {
				if (!this.$refs.chartRef) return;

				const myChart = await this.$refs.chartRef.init(echarts);

				// 格式化日期和身高数据


				const chartData = this.luckRecords.slice().reverse().map((record) => ({
					timestamp: record.createTime,
					score: record.score,
				}));

				// 配置图表选项
				const option = {
					tooltip: {
						trigger: 'axis', // 鼠标悬停显示数据
						axisPointer: {
							type: 'cross',
							label: {
								backgroundColor: '#6a7985',
							},
						},
					},
					xAxis: {
						type: 'category',
						data: chartData.map((data) => formatDate(data.timestamp)), // 使用格式化的日期数据
						axisLine: {
							show: false, // 显示 x 轴
							lineStyle: {
								color: '#ccc',
							},
						},
						axisLabel: {
							show: true, // 显示 x 轴标签
							color: '#666', // 标签颜色
							formatter: (val) => {

								return val.split(' ')[0]

							}, // 设置单位
						},
						axisTick: {
							show: true, // 显示 x 轴刻度
						},
						// name: '日期', // x 轴标题
						nameTextStyle: {
							color: '#666',
							fontSize: 14,
						},
					},
					yAxis: {
						type: 'value',
						axisLine: {
							show: false, // 显示 y 轴
							lineStyle: {
								color: '#ccc',
							},
						},
						axisLabel: {
							show: true, // 显示 y 轴标签
							color: '#666', // 标签颜色
							formatter: '{value}', // 设置单位
						},
						axisTick: {
							show: true, // 显示 y 轴刻度
						},
						// name: '', // y 轴标题
						nameTextStyle: {
							color: '#666',
							fontSize: 14,
						},
					},
					series: [{
						data: chartData.map((data) => data.score),
						type: 'line',
						smooth: true, // 平滑曲线
						itemStyle: {
							color: '#ea4c89', // 曲线颜色
						},
						lineStyle: {
							width: 2, // 线条宽度
							color: '#ea4c89', // 曲线颜色
						},
						symbolSize: 0, // 隐藏数据点
					}, ],
					grid: {
						top: '60', // 上边距，增加空间让标题显示完整
						right: '60', // 右边距
						bottom: '60', // 下边距
						left: '60', // 左边距，增加空间显示坐标轴标题
					},
				};

				myChart.setOption(option);
			},
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
		}
	};
</script>

<style scoped>
	.container {
		padding: 24px 0;
		overflow-x: hidden;
		display: flex;
		flex-direction: column;
		align-items: center;
		row-gap: 24px;
		background: linear-gradient(180deg, rgba(255, 200, 224, .7) 0%, rgba(255, 255, 255, 1) 18%);
	}

	.title {
		font-size: 24px;
		font-weight: bold;
	}

	.record-form {
		margin-bottom: 30px;
	}

	.input {
		width: 100%;
		border: 1px solid #ccc;
		padding: 10px;
		margin-bottom: 10px;
		border-radius: 5px;
	}



	.score-description {
		margin-top: 5px;
		font-size: 14px;
		color: #666;
	}

	.button {
		margin-top: 20px;
	}

	.chart-container {
		width: 100%;
		height: 300px;
	}

	.textarea {
		border: 2px solid var(--theme-color);
		padding: 16px;
		border-radius: 16px;
		font-size: 12px;
		height: 120px;
	}

	.intro-card {
		width: 90%;
		background: #fff;
		border-radius: 8px;
		box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
	}
</style>
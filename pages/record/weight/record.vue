<template>
	<view class="container">
		<!-- 显示当前体重 -->
		<view style='height: 64px;width:100%'></view>
		<view class="weight-display">
			<text class="weight-number">{{ inputWeight }}</text>
			<text class="weight-unit">kg</text>
		</view>

		<!-- 体重选择器 -->
		<view v-if="inputWeight">
			<dlm-slide-choose :width="100" :bigItemWidth="5" :littleItemWidth="5" :defaultValue="defaultValue"
				@input="change" height="300rpx" :cellWidth="10" :cells="10" :cellNum=".1" :startNum="30" :endNum="200"
				bgColor="linear-gradient(to right, #ea4c89, #ea4c89)" color="#fff" :bigItemweight="40"
				:littleItemweight="20" selColor="#0ff" align="center" numPos="top" ref="slide"></dlm-slide-choose>
		</view>

		<!-- 提交按钮 -->
		<button class="button-1" style="width:80%" @click="submitRecord">记录该体重</button>


		<view class="chart-container" v-if="weightRecords.length">
			<l-echart ref="chartRef" class="chart"></l-echart>
		</view>

		<!-- 体重记录时间轴 -->
		<view v-if="weightRecords.length" style="margin: 24px;width:80%;">
			<view style="font-weight: bold;color:#777;padding-bottom: 36px;"> 历史记录 </view>
			<ua-timeline>
				<template v-for="(record, index) in weightRecords" :key="record.id">
					<ua-timeline-item :timestamp="formatDate(record.createTime)" lineType="dotted">
						<view style="display: flex;justify-content: space-between;">
							<view style="font-size: 16px;font-weight: bold;color: #555;">
								{{ record.weight }} kg
							</view>
							<uni-icons @click="deleteRecord(record)" type="closeempty" size="12"
								color="#ddd"></uni-icons>
						</view>
					</ua-timeline-item>
				</template>
			</ua-timeline>
		</view>



		<view> 所有人平均体重 </view>
		<view> 体重预测 </view>
		<view> 所有同性别平均体重 </view>
		<view> 所有同性别同年龄平均体重 </view>
		<view> 我们推荐您的健康体重 </view>
		<view> 长升高指南 </view>
	</view>
</template>

<script>
	import Api from '@/common/api/api';
	import {
		getDayRecordDateKey,
		formatDate
	} from '@/common/date';
	import LEchart from '@/uni_modules/lime-echart/components/l-echart/l-echart.vue'
	import * as echarts from 'echarts'

	export default {
		components: {
			lEchart: LEchart
		},
		data() {
			return {
				defaultValue: 150,
				inputWeight: 0,
				weightRecords: [],
				showDeletePopup: false, // 控制删除确认弹窗
				recordToDelete: null, // 当前待删除的记录id
				chartRef: null, // ECharts 实例
			};
		},

		onLoad() {
			this.init();
		},

		methods: {
			formatDate: formatDate,
			// 初始化加载体重记录
			async init() {
				uni.showLoading({
					title: 'Loading...',
					mask: true
				})
				
				let res = await Api.getMyWeightRecords();
				res = res.sort((a, b) => new Date(b.createTime) - new Date(a.createTime));
				this.weightRecords = res;

				this.defaultValue = this.inputWeight = Number(res[0]?.weight || 70); // 取最新的体重

				setTimeout(() => {
					this.loadChart(); // 加载图表
					uni.hideLoading()
				}, 33)
			},

			// 更新输入的体重
			change(val) {
				if (!val) {
					return;
				}

				this.inputWeight = val;
			},

			// 提交体重记录
			async submitRecord() {
				const record = {
					type: 'weight',
					weight: this.inputWeight,
				};

				let datekey = getDayRecordDateKey();
				await Api.addDayrecordDetail(datekey, {
					...record,
				});

				uni.showToast({
					title: '体重记录成功',
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

			// 加载 ECharts 图表
			// 加载 ECharts 图表
			// 加载 ECharts 图表
			async loadChart() {
				if (!this.$refs.chartRef) return;

				const myChart = await this.$refs.chartRef.init(echarts);

				// 格式化日期和体重数据


				const chartData = this.weightRecords.slice().reverse().map((record) => ({
					timestamp: record.createTime,
					weight: record.weight,
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
						// name: '体重', // y 轴标题
						nameTextStyle: {
							color: '#666',
							fontSize: 14,
						},
					},
					series: [{
						data: chartData.map((data) => data.weight),
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

		},

		beforeDestroy() {
			// 销毁图表实例
			if (this.chartInstance) {
				this.chartInstance.dispose();
			}
		},
	};
</script>

<style scoped>
	.container {
		padding: 24px 0px;
		display: flex;
		flex-direction: column;
		row-gap: 24px;
		align-items: center;
	}

	.weight-display {
		display: flex;
		align-items: baseline;
	}

	.weight-number {
		font-size: 64px;
		font-weight: bold;
		color: #555;
	}

	.weight-unit {
		font-size: 24px;
		color: #777;
		font-weight: bold;
		margin-left: 5px;
	}

	.record-weight {
		font-size: 18px;
		color: #333;
	}

	.delete-button {
		background-color: #ff3b30;
		color: white;
		border: none;
		padding: 6px 12px;
		border-radius: 4px;
		cursor: pointer;
	}

	.delete-button:hover {
		background-color: #e60000;
	}

	.chart-container {
		width: 100%;
		height: 300px;
	}
</style>
<template>
	<view class="chart-container">
		<l-echart ref="chartRef" class="chart"></l-echart>
	</view>
</template>

<script lang="ts" setup>
	import { ref, watch, onMounted, defineProps } from 'vue'
	import LEchart from '@/uni_modules/lime-echart/components/l-echart/l-echart.vue'
	import * as echarts from 'echarts'

	// 通过 props 传入时间范围，设置默认值
	const props = defineProps({
		startTime: {
			type: String,
			default: "2024-01-01 12:00:00", // 默认时间值
		},
		endTime: {
			type: String,
			default: "2024-01-01 18:00:00", // 默认时间值
		},
	})

	const chartRef = ref(null)

	// 计算时间范围的小时差
	function calculateTimeRange(start : string, end : string) {
		const startDate = new Date(start)
		const endDate = new Date(end)
		const timeDiff = endDate.getTime() - startDate.getTime()
		return timeDiff / (1000 * 3600) // 转换为小时
	}

	// 根据时间范围计算起始角度
	function calculateStartAngle(start : string) {
		const startDate = new Date(start);
		const hours = startDate.getHours();
		const minutes = startDate.getMinutes();

		// 计算总角度：小时角度 + 分钟角度
		const hourAngle = (hours % 12) * 30; // 每小时30度
		const minuteAngle = (minutes / 60) * 30; // 每分钟0.5度

		return -(hourAngle + minuteAngle) + 90; // 从12点开始
	}

	// 根据时间范围计算百分比
	function calculatePercentage(start : string, end : string) {
		const totalHoursIn12Hours = 12 // 一圈代表12小时
		const hoursDiff = calculateTimeRange(start, end)
		return (hoursDiff / totalHoursIn12Hours) * 100// 转换为百分比
	}

	// Reactive option configuration for the chart


	const getOptions = () => {
		return {
			title: [
				{
					// text: `最佳睡眠区间${(calculatePercentage(props.startTime, props.endTime) / 1).toFixed(1)}%`, 
					text: `最佳睡眠区间`,
					x: 'center',
					top: '40%',
					textStyle: {
						fontSize: 10, // 调整标题字体大小
						color: '#555', // 更接近黑色
						fontFamily: 'DINAlternate-Bold, DINAlternate',
						fontWeight: '900',
					},
				}
			],
			backgroundColor: 'transparent',
			polar: {
				radius: ['70%', '100%'],
				center: ['50%', '50%'],
			},
			angleAxis: {
				max: 360,
				show: false,
				startAngle: calculateStartAngle(props.startTime), // 设置起始角度
			},
			radiusAxis: {
				type: 'category',
				show: true,
				axisLabel: {
					show: false,
				},
				axisLine: {
					show: false,
				},
				axisTick: {
					show: false,
				},
			},
			series: [
				{
					name: '',
					type: 'bar',
					roundCap: true,
					barWidth: 100, // 调整条形图宽度
					showBackground: true,
					backgroundStyle: {
						color: 'rgba(66, 66, 66, .3)',
					},
					data: [calculatePercentage(props.startTime, props.endTime) * 3.6], // 使用百分比数据
					coordinateSystem: 'polar',
					itemStyle: {
						color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
							{ offset: 0, color: '#59DCD0' },
							{ offset: 1, color: '#83f2e8' },
						]),
					},
				},
			],
		}
	}

	// 重新绘制图表
	const updateChart = async () => {
		if (!chartRef.value) return
		const myChart = await chartRef.value.init(echarts)

		// 设置初始图表选项
		myChart.setOption(getOptions())
	}

	// 初始化图表
	onMounted(() => {
		setTimeout(async () => {
			if (!chartRef.value) return
			const myChart = await chartRef.value.init(echarts)

			// 设置初始图表选项
			myChart.setOption(getOptions())
		}, 33)
	})

	// 监听时间范围变化，重新绘制图表
	watch([() => props.startTime, () => props.endTime], updateChart, { immediate: true })
</script>

<style lang="scss" scoped>
	.chart-container {
		width: 100%;
		height: 100%;
		margin: 0;
		/* 去除多余的边距 */
	}

	.chart {
		width: 100%;
		height: 100%;
	}
</style>
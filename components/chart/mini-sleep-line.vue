<template>
	<view class="chart-container">
		<l-echart ref="chartRef" class="chart"></l-echart>
	</view>
</template>

<script lang="ts" setup>
	import { ref, onMounted } from 'vue'
	import LEchart from '@/uni_modules/lime-echart/components/l-echart/l-echart.vue'
	import * as echarts from 'echarts'

	const chartRef = ref(null)

	// 默认的趋势图数据配置
	const option = {
		xAxis: {
			type: 'category',
			data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月'],
			axisLine: {
				show: false,  // 隐藏 x 轴
			},
			axisLabel: {
				show: false,  // 隐藏 x 轴的标签
			},
			axisTick: {
				show: false,  // 隐藏 x 轴的刻度
			},
		},
		yAxis: {
			type: 'value',
			axisLine: {
				show: false,  // 隐藏 y 轴
			},
			axisLabel: {
				show: false,  // 隐藏 y 轴的标签
			},
			axisTick: {
				show: false,  // 隐藏 y 轴的刻度
			},
			splitLine: {
				show: false,  // 隐藏网格线
			},
		},
		series: [
			{
				data: [150, 2300, 22400, 218000, 1350000, 1470, 2600000],
				type: 'line',
				smooth: true,  // 平滑曲线
				itemStyle: {
					color: '#3398DB',  // 曲线颜色
				},
				lineStyle: {
					width: 2,  // 线条宽度
					color: '#3398DB',  // 曲线颜色
				},
				symbolSize: 0,  // 隐藏数据点
			},
		],
		grid: {
			top: 0,  // 无顶部边距
			right: 0,  // 无右侧边距
			bottom: 0,  // 无底部边距
			left: 0,  // 无左侧边距
		},
	}

	// 在组件挂载后初始化图表
	onMounted(() => {
		setTimeout(async () => {
			if (!chartRef.value) return
			const myChart = await chartRef.value.init(echarts)
			myChart.setOption(option)
		}, 300)
	})
</script>

<style lang="scss" scoped>
	.chart-container {
		width: 100%;
		height: 100%;
	}

	.chart {
		width: 100%;
		height: 100%;
	}
</style>
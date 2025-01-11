<template>
	<view class="chart-container">
		<l-echart ref="chartRef" class="chart"></l-echart>
	</view>
</template>

<script lang="ts" setup>
	import { ref, watch, onMounted, defineProps } from 'vue'
	import LEchart from '@/uni_modules/lime-echart/components/l-echart/l-echart.vue'
	import * as echarts from 'echarts'
	import 'echarts-liquidfill'
	// 定义 props
	const props = defineProps({
		percentage: {
			type: Number,
			default: 50, // 默认值为 50%
		},
	})

	const chartRef = ref(null)

	// 获取图表选项
	const getOptions = () => {
		const sanitizedPercentage = Math.min(100, Math.max(0, props.percentage))
		return {
			backgroundColor: 'transparent',
			title: {
				text: `${sanitizedPercentage.toFixed(1)}`, // 动态显示百分比
				textStyle: {
					fontWeight: 'bold',
					fontSize: 48, // 字体稍微小一些
					color: '#fff',
					fontFamily: 'Arial', // 改为其他字体
				},
				left: 'center',
				top: 'center', // 调整位置
			},
			series: [
				{
					type: 'liquidFill',
					radius: '64%',
					center: ['50%', '50%'],
					color: ['#00fa00'],
					data: [
						sanitizedPercentage / 100,
						(sanitizedPercentage / 100) * 0.9,
						(sanitizedPercentage / 100) * 0.8,
					], // 动态设置波浪高度
					backgroundStyle: {
						borderWidth: 1,
						color: 'rgba(255, 0, 255, 0.1)',
					},
					label: {
						normal: {
							show: false,
							formatter: `${sanitizedPercentage.toFixed(1)}`, // 显示百分比
							textStyle: {
								fontSize: 40, // 字体调整为稍微小一些
								fontWeight: 'bold',
								color: '#fff',
							},
						},
					},
					outline: {
						show: false,
					},
				},
				{
					type: 'pie',
					center: ['50%', '50%'],
					radius: ['72%', '80%'],
					hoverAnimation: false,
					data: [
						{
							name: '',
							value: sanitizedPercentage,
							labelLine: { show: false },
							itemStyle: { color: '#00fa00' },
						},
						{
							name: '',
							value: 100 - sanitizedPercentage, // 剩余部分
							itemStyle: { color: '#ddd' },
							labelLine: { show: false },
						},
					],
				},
			],
		}
	}

	// 图表更新方法
	const updateChart = async () => {
		if (!chartRef.value) return
		const myChart = await chartRef.value.init(echarts)
		myChart.setOption(getOptions())
	}

	// 初始化和监听更新
	onMounted(() => updateChart())
	watch(() => props.percentage, updateChart, { immediate: true })
</script>

<style lang="scss" scoped>
	.chart-container {
		width: 100%;
		height: 100%;
		margin: 0;
	}

	.chart {
		width: 100%;
		height: 100%;
	}
</style>
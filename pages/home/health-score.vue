<template>
	<view class="chart-container">
		<l-echart ref="chartRef" class="chart"></l-echart>
	</view>
</template>

<script lang="ts" setup>
	import { ref, watch, onMounted, defineProps } from 'vue'
	import LEchart from '@/uni_modules/lime-echart/components/l-echart/l-echart.vue'
	import * as echarts from 'echarts'

	// 定义 props，增加默认值
	const props = defineProps({
		percentage: {
			type: Number,
			default: 50, // 默认值为 50%
		},
	})

	const chartRef = ref(null)

	// 获取图表选项
	const getOptions = () => {
		return {
			title: [
				{
					text: `${props.percentage.toFixed(0)}`, // 显示百分比
					x: 'center',
					top: '40%',
					textStyle: {
						fontSize: 24, // 调整标题字体大小
						color: '#333333', // 更接近黑色
						fontWeight: 'bolder', // 更粗的字体

					},
				},
				{
					text: '健康值',
					x: 'center',
					top: '55%',
					textStyle: {
						color: '#333333', // 更接近黑色
						fontSize: 14, // 调整文字大小
						fontWeight: 'bolder', // 设置为最粗字体

					},
				},
				// {
				// 	text: '你当前的健康值值较高',
				// 	x: 'center',
				// 	top: '60%',
				// 	textStyle: {
				// 		color: '#666666', // 更接近黑色
				// 		fontSize: 10, // 调整文字大小
				// 		fontWeight: 'bolder', // 设置为最粗字体
				// 	},
				// },

			],
			backgroundColor: 'transparent',
			polar: {
				radius: ['60%', '80%'],
				center: ['50%', '50%'],
			},
			angleAxis: {
				max: 360,
				show: false,
				startAngle: 90, // 从顶部开始
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
						color: '#ddd',
					},
					data: [props.percentage * 3.6], // 使用百分比数据
					coordinateSystem: 'polar',
					itemStyle: {
						color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
							{ offset: 0, color: '#77EDAE' },
							{ offset: 1, color: '#00fa00' },
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

	// 监听百分比变化，重新绘制图表
	watch(() => props.percentage, updateChart, { immediate: true })
</script>

<style lang="scss" scoped>
	.chart-container {
		width: 100%;
		height: 400rpx;
		margin: 0;
		/* 去除多余的边距 */
	}

	.chart {
		width: 100%;
		height: 100%;
	}
</style>
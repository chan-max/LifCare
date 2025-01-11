<template>
	<view class="chart-container">
		<l-echart ref="chartRef" class="chart"></l-echart>
	</view>
</template>

<script lang="ts" setup>
	import { ref, onMounted, watch, defineProps } from 'vue'
	import LEchart from '@/uni_modules/lime-echart/components/l-echart/l-echart.vue'
	import * as echarts from 'echarts'

	// 接收父组件传入的 value 属性
	const props = defineProps({
		value: {
			type: Number,
			required: true,
			default: 75, // 默认值为 75
		},
	})

	// 生命力 是我们提出来的一个概念，在本应用中代表的是一个人的身体和精神综合状态下的评分，越高代表你的身体和精神越健康

	const chartRef = ref(null)

	// 健康值区间配置，包含起始颜色和结束颜色
	const healthConfig = {
		low: {
			range: [0, 30],
			colors: ['#ff4d4d', '#ff9999'], // 红色渐变
			description: '低健康值，建议休息并关注健康',
		},
		mid: {
			range: [30, 60],
			colors: ['#ffcc00', '#ffff66'], // 黄色渐变
			description: '中等健康值，可以适当改善饮食与运动',
		},
		high: {
			range: [60, 100],
			colors: ['#00fa00', '#66ff66'], // 绿色渐变
			description: '高健康值，保持良好的生活方式',
		},
	}

	// 根据生命力值获取健康状态描述、颜色（渐变色）
	const getHealthStatus = (value : number) => {
		let healthStatus = healthConfig.low
		if (value >= healthConfig.mid.range[0] && value < healthConfig.mid.range[1]) {
			healthStatus = healthConfig.mid
		} else if (value >= healthConfig.high.range[0] && value <= healthConfig.high.range[1]) {
			healthStatus = healthConfig.high
		}
		return healthStatus
	}

	// 图表的配置项
	const getChartOption = (value : number) => {
		const healthStatus = getHealthStatus(value) // 获取健康状态
		return {
			backgroundColor: 'transparent', // 背景透明
			title: [
				{
					// 文字部分
					text: `生命力${value}%`, // 文字显示百分比
					subtext: healthStatus.description, // 显示健康描述
					subtextStyle: {
						fontSize: 12,
						color: '#aaa',
						fontWeight: '900',
					},
					x: 'center',
					y: 'center',
					textStyle: {
						fontSize: 24,
						fontWeight: 'bold',
						color: '#777',
					}
				}
			],
			series: [
				// 背景圆环
				{
					name: '背景圆环',
					type: 'pie',
					radius: ['75%', '85%'], // 增大背景圆环
					startAngle: 90,
					color: ['#f0f0f0'],
					label: {
						show: false
					},
					data: [
						{
							value: 100,
							name: '背景',
							itemStyle: {
								color: '#dcdcdc'
							}
						}
					]
				},
				// 进度圆环
				{
					name: '进度圆环',
					type: 'pie',
					radius: ['55%', '75%'], // 增大进度圆环
					startAngle: 90,
	
					label: {
						show: false
					},
					data: [
						{
							value: value,
							name: '进度',
							itemStyle: {
								color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
									{ offset: 0, color: healthStatus.colors[0] }, // 渐变色起始
									{ offset: 1, color: healthStatus.colors[1] }  // 渐变色结束
								])
							}
						},
						{
							value: 100 - value,
							name: '未完成',
							itemStyle: {
								color: 'transparent'
							}
						}
					]
				},
				// 进度条外环装饰
				{
					name: '外环装饰',
					type: 'pie',
					radius: ['85%', '100%'], // 增大外环装饰
					startAngle: 90,
			
					label: {
						show: false
					},
					data: [
						{
							value: 100,
							name: '装饰',
							itemStyle: {
								color: 'rgba(255, 255, 255, 0.2)', // 外环装饰的颜色
								opacity: 0.2
							}
						}
					]
				},
				// 高光装饰环
				{
					name: '高光装饰',
					type: 'pie',
					radius: ['80%', '90%'], // 增大高光装饰
					startAngle: 90,
				
					label: {
						show: false
					},
					data: [
						{
							value: 100,
							name: '高光',
							itemStyle: {
								color: 'rgba(255, 255, 255, 0.3)', // 微弱的高光效果
								opacity: 0.3
							}
						}
					]
				},
				// 内部装饰环
				{
					name: '内部装饰环',
					type: 'pie',
					radius: ['90%', '95%'], // 增大内部装饰环
					startAngle: 90,

					label: {
						show: false
					},
					data: [
						{
							value: 100,
							name: '装饰',
							itemStyle: {
								color: 'rgba(255, 255, 255, 0.1)',
								opacity: 0.1
							}
						}
					]
				}
			]
		}
	}

	// 初始化图表
	const initChart = async () => {
		if (chartRef.value) {
			const myChart = await chartRef.value.init(echarts)
			myChart.setOption(getChartOption(props.value), true)
		}
	}

	// 在组件挂载后初始化图表
	onMounted(() => {
		initChart()
	})

	// 监听 value 变化并更新图表
	watch(() => props.value, (newValue) => {
		initChart() // 每次 value 更新时重新渲染图表
	})
</script>

<style lang="scss" scoped>
	.chart-container {
		width: 100%;
		position: relative;
		background-color: transparent;
		height: 180px;
	}

	.chart {
		width: 100%;
		height: 100%;
	}
</style>
<template>
	<view class="container">
		<text class="header">身体感觉选择</text>
		<view v-for="(option, index) in feelingOptions" :key="index" class="feeling-item"
			:style="{ background: option.color }">
			<checkbox-group>
				<label>
					<checkbox :value="option.type" @click="updateUsageFrequency(option)">
					</checkbox>
					<text class="feeling-label">{{ option.label }}</text>
				</label>
			</checkbox-group>
			<text class="feeling-description">{{ option.description }}</text>
			<text class="usage-frequency">常用度: {{ option.usageFrequency }}</text>
		</view>
	</view>
</template>

<script>
	import {
		feelingOptions
	} from '@/common/enum/record.ts'; // 导入感觉数据

	export default {
		data() {
			return {
				selectedFeelings: [], // 用于存储用户选择的感觉
				feelingOptions: feelingOptions
			};
		},
		methods: {
			updateUsageFrequency(option) {
				option.usageFrequency += 1; // 增加常用度
			}
		},
	};
</script>

<style scoped>
	.container {
		padding: 20px;
	}

	.header {
		font-size: 24px;
		font-weight: bold;
		margin-bottom: 15px;
	}

	.feeling-item {
		padding: 10px;
		border-radius: 5px;
		margin-bottom: 10px;
	}

	.feeling-label {
		font-size: 18px;
		font-weight: bold;
	}

	.feeling-description {
		font-size: 14px;
		color: #666;
		/* 描述文字颜色 */
	}

	.usage-frequency {
		font-size: 14px;
		color: #333;
		/* 常用度文字颜色 */
	}
</style>
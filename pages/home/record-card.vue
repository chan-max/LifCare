<template>
	<view class="basic-card basic-card-light">
		<view class="absolute" style="top: 24rpx;left: 36rpx;">
			<uni-icons @click="infoClick" type="info-filled" size="24" color="#ddd"></uni-icons>
		</view>

		<view class="absolute" style="top: 24rpx;right: 36rpx;">
			<uni-icons @click="settingClick" type="gear-filled" size="24" color="#ddd"></uni-icons>
		</view>

		<image style="width: 100rpx;height: 200rpx;" src="/static/img/page/home-record.png"></image>

		<span class="card-title"> 今日共添加了 <span class="font-bold"
				style="font-size: 2em;color:#000;">{{dayrecord?.record?.length}}</span>
			条记录 </span>

		<view style="font-size: 10px;color:#aaa;margin: 36rpx;text-align: center;">

			<p>您的所有记录会用于日常数据分析，以便给您提供最真实的反馈和生活建议，并且会提供一定程度的运气预测
			</p>

			<p style="margin-top: 20rpx;" :style="{color:getRecordCountLabelTip(dayrecord?.record?.length).color}">
				{{getRecordCountLabelTip(dayrecord?.record?.length).text}}
			</p>
		</view>

		<view class="flex-wrap" style="display: flex; align-items: center;justify-content: center;gap:12px 36rpx">
			<view v-for="item,index in RecordTypeOptions" class="card-item flex flex-col items-center">
				<view style="font-size: 18px;font-weight: bold;"> {{getRecordCount(item.type)}} </view>
				<view class="font-bold" style="font-size: 10px;color:#aaa;"> {{item.label}} </view>
			</view>
		</view>

		<view class="flex justify-around w-full" style="margin-top: 36rpx;">
			<button class="btn"> <uni-icons type="tune" color="#fff" size="12"></uni-icons> 历史记录 </button>
			<button class="btn"> <uni-icons type="heart" color="#fff" size="12"></uni-icons> 今日分析 </button>
			<button class="btn"> <uni-icons type="plusempty" color="#fff" size="12"></uni-icons> 添加记录 </button>
		</view>
	</view>

	<uni-popup ref="infoRef" backgroundColor="#fff" borderRadius="10px 10px 10px 10px">
		<view style="width: 600rpx;height: 480rpx;padding: 36rpx;color:#777;">
			四叶草将您的所有日常行为定义为一种记录，你可以在任意时间添加我们所支持的各项记录，这些记录包括一些您的身体数据，您的身体状态，感觉，心情，甚至运气等，我们会将这些记录进行分析，来为您制定专属的生活计划
		</view>
	</uni-popup>
</template>

<script setup>
	import {
		RecordTypeOptions
	} from '@/common/enum/record';
	const props = defineProps(['dayrecord'])
	import {
		ref
	} from 'vue'

	import {
		getRecordCountLabelTip
	} from '@/common/store';
	const infoRef = ref()

	function infoClick() {
		infoRef.value.open()
	}

	function getRecordCount(type) {

		if (!props?.dayrecord?.record) {
			return 0
		}

		let items = props.dayrecord.record.filter((item) => {
			return item.type == type
		})

		return items.length
	}

	function settingClick() {
		uni.navigateTo({
			url: '/pages/home/record-setting'
		})
	}
</script>

<style scoped>
	.basic-card {
		width: 100%;
		position: relative;
		border-radius: 16px;
		box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
		padding: 24px;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;
	}

	.card-title {
		margin: 24rpx;
		color: #777;
		font-weight: bold;
		border-bottom: 4px solid #ea4c89;
	}

	.card-item:active {
		transform: scale(1.2);
		transition: .2s;
	}

	.btn {
		background-color: #ea4c89;
		color: #fff;
		border-radius: 999px;
		width: 30%;
		font-size: 11px;
		font-weight: bold;
		line-height: 3em;
		text-wrap: nowrap;
	}
</style>
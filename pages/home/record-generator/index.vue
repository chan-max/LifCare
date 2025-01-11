<template>
	<view class="calendar-card">
		
	</view>
</template>

<script setup>
	import {
		today,
		lunarToday
	} from '@/common/lunar'

	window.today = today
</script>

<style scoped>
	.calendar-card {
		width: 100%;
		position: relative;
		border-radius: 16px;
		box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
		padding: 24px;
		box-sizing: border-box;
		display: flex;
		position: relative;
		column-gap: 24rpx;
	}
</style>
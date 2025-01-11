<template>
	<view class="container">

		<calendar></calendar>
	</view>
</template>

<script setup>
	import calendar from './calendar.vue'
</script>

<style scoped>
	.container {
		background: #FFF3F6;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		row-gap: 12px;
		padding: 16px;
	}
</style>
<template>
	<view class="container">
		<button class="btn-add" type="primary" @click="goRecord">记录睡眠</button>

		<view>
			<h3 style="margin-top: 24px;"> 关于睡眠 </h3>
			<view class="card" v-for="(card, index) in cards" :key="index">
				<image class="card-image" :src="card.image" mode="aspectFill"></image>
				<view class="card-content">
					<view class="card-title">{{ card.title }}</view>
					<view class="card-description">{{ card.description }}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		methods: {
			goRecord() {
				uni.navigateTo({
					url: '/pages/record/sleep/record',
				});
			}
		},
		data() {
			return {
				cards: [{
						image: '/static/img/draw/sleep1.jpeg',
						title: '我们为什么要睡觉',
						description: '记录你的睡眠模式并提供科学的分析建议。',
					},
					{
						image: '/static/img/draw/sleep2.jpeg',
						title: '睡眠时间规划',
						description: '帮助你设定最佳的入睡和醒来时间。',
					},
					{
						image: '/static/img/draw/sleep3.jpeg',
						title: '健康报告',
						description: '通过长期记录生成全面的睡眠健康报告。',
					},
					{
						image: '/static/img/draw/sleep4.jpg',
						title: '健康报告',
						description: '通过长期记录生成全面的睡眠健康报告。',
					},
					{
						image: '/static/img/draw/sleep5.jpeg',
						title: '健康报告',
						description: '通过长期记录生成全面的睡眠健康报告。',
					},
				],
			};
		},
		onLoad() {
			uni.showTabBar();
		},
	};
</script>

<style scoped>
	.container {
		display: flex;
		flex-direction: column;
		padding: 16px;
		background: #f7f7f7;
		padding-bottom: 36px;
	}

	.btn-add {
		background: linear-gradient(to right, #ea4c98, #ea4c98);
		width: 100%;
		border-radius: 999px;
		font-weight: bold;
		color: #ffffff;
		font-size: 16px;
		text-align: center;
	}

	.card {
		display: flex;
		flex-direction: column;
		background-color: #ffffff;
		border-radius: 8px;
		box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
		overflow: hidden;
		margin: 8px 0;
	}

	.card-image {
		width: 100%;
		height: 200px;
		object-fit: cover;
	}

	.card-content {
		padding: 16px;
	}

	.card-title {
		font-size: 18px;
		font-weight: bold;
		color: #333333;
		margin-bottom: 4px;
	}


	.card-description {
		font-size: 14px;
		color: #999;
		line-height: 1.5;
	}
</style>
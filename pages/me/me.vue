<template>
	<view class="banner">

	</view>
	<view class="container">
		<image :src="loginStore?.userInfo?.avatar || '/static/img/default-avatar.png'"
			class="avatar"></image>

		<view class="placeholder"></view>

		<view @click="goUpdate" class="edit">
			编辑信息
		</view>

		<view class="logout">

		</view>

		<view>
			<view class="name"> {{loginStore?.userInfo?.name}}
			</view>

			<view class="username"> @{{ loginStore?.userInfo?.username}}</view>
		</view>

		<view class="card">
			<view class="card-item">

				<image style="width: 16px;height: 16px;"
					:src="loginStore?.userInfo?.gender == '1' ? '/static/img/male.png':'/static/img/female.png'">
				</image>

			</view>
			<view class="card-item">
			</view>
			<view class="card-item">
			</view>
			<view class="card-item">
			</view>
		</view>

	</view>
</template>

<script setup>
	import {
		useLoginStatusStore,
		doLogout
	} from '../../store/login';


	const loginStore = useLoginStatusStore()

	function logout() {
		doLogout()
	}

	function goUpdate() {
		uni.navigateTo({
			url: '/pages/me/update'
		})
	}
</script>

<style scoped>
	.banner {
		background: #F9A2AB;
		background: linear-gradient(135deg, #F9A2AB, #F73471);
		width: 100%;
		height: 120px;
	}

	.container {
		margin: 16px;
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;
		row-gap: 12px;
		border-radius: 12px;
		padding: 12px;
		background-color: #fff;
	}

	.avatar {
		width: 120px;
		height: 120px;
		position: absolute;
		top: -66px;
		background-color: #fff;
		border: 4px solid #fff;
		border-radius: 50%;
		box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;
	}

	.placeholder {
		width: 100%;
		height: 60px;
	}

	.name {
		font-size: 32px;
		font-weight: bold;
		color: #555;
		text-align: center;
	}

	.username {
		font-size: 14px;
		font-weight: bold;
		color: #aaa;
		text-align: center;
	}

	.card {
		width: 100%;
		display: flex;
		justify-content: space-around;
	}

	.card-item {
		width: 22%;
		height: 60px;
		border-radius: 12px;
		background-color: #f3f3f3;
		box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
	}

	.edit {
		top: 16px;
		position: absolute;
		right: 16px;
		box-sizing: border-box;
		font-weight: bold;
		font-size: 14px;
		color: #aaa;
	}

	.logout {
		top: 16px;
		position: absolute;
		right: 16px;
		box-sizing: border-box;
	}
</style>
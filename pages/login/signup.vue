<template>
	<view class="signup-page">
		<!-- 注册表单 -->
		<view class="signup-form">
			<image src="/static/img/logo.png" style="width:40px;height:40px;"></image>
			<view style="font-weight: bold;color: #888;"> 欢迎注册四叶草 </view>
			<view style="width: 100%;">
				<input v-model="username" placeholder="请输入用户名" maxlength="20" class="input-field" type="text" />
				<view style="height: 12px;"></view>
				<input v-model="password" placeholder="请输入密码" maxlength="20" class="input-field" type="password" />
				<view style="height: 12px;"></view>
				<input v-model="confirmPassword" placeholder="请确认密码" maxlength="20" class="input-field"
					type="password" />
			</view>

			<!-- 注册按钮 -->
			<button class="signup-button" :disabled="signupLoading" @click="handleSignup">
				{{ signupLoading ? "注册中..." : "注册" }}
			</button>

			<view style="width: 90%; display: flex;font-weight: bold;font-size: 12px;color:#aaa;">
				<view @click="goLogin">已有账号? 去登录</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		ref
	} from "vue";
	import Api from "@/common/api/api"; // 替换为实际 API 引入路径
	export default {
		setup() {
			const username = ref(""); // 用户名
			const password = ref(""); // 密码
			const confirmPassword = ref(""); // 确认密码
			const signupLoading = ref(false); // 注册加载状态

			// 注册处理方法
			const handleSignup = async () => {
				if (password.value !== confirmPassword.value) {
					uni.showToast({
						title: "两次输入的密码不一致",
						icon: "none",
					});
					return;
				}

				try {
					signupLoading.value = true;

					// 调用注册接口
					const res = await Api.signup({
						username: username.value,
						password: password.value,
					});

					if (res && res.data) {
						// 注册成功提示
						uni.showToast({
							title: "注册成功",
							icon: "success",
						});

						// 跳转到登录页面
						uni.redirectTo({
							url: "/pages/login/login",
						});
					} else {
						throw new Error("注册失败");
					}
				} catch (error) {
					console.log(error);

					// 显示错误提示
					uni.showToast({
						title: "注册失败，请重试",
						icon: "none",
					});
				} finally {
					signupLoading.value = false; // 重置加载状态
				}
			};

			function goLogin() {
				uni.redirectTo({
					url: "/pages/login/login",
				});
			}

			return {
				username,
				password,
				confirmPassword,
				signupLoading,
				handleSignup,
				goLogin,
			};
		},
	};
</script>

<style scoped>
	/* 页面整体样式 */
	.signup-page {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100vh;
		background: linear-gradient(-45deg, #ffb8c3d3, #ffafc1, #fcd6dc, #ffb8c3);
	}

	/* 注册表单样式 */
	.signup-form {
		width: 80%;
		box-shadow: 0 5px 20px rgba(255, 105, 180, 0.2);
		background-color: #fff;
		padding: 36px;
		border-radius: 24px;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		align-items: center;
		row-gap: 16px;
	}

	.input-field {
		width: 100%;
		height: 52px;
		padding: 4px 24px;
		box-sizing: border-box;
		font-size: 14px;
		font-weight: bold;
		border-radius: 999px;
		background-color: #f7eef0;
		color: #777;
	}

	.input-placeholder {
		color: #bbb;
	}




	.signup-button {
		width: 100%;
		height: 52px;
		font-size: 14px;
		font-weight: bold;
		color: #fff;
		text-align: center;
		background-color: #ea4c98;
		border-radius: 999px;
		border: none;
		line-height: 52px;
	}

	.signup-button:disabled {
		background-color: #bbb;
	}
</style>
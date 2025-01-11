<template>
	<view class="login-page">

		<!-- 登录表单 -->
		<view class="login-form">
			<!-- 			<view style="display: flex;align-items: center;gap: 6px;font-weight:bold;color:#888;">
			</view> -->
			<image src="/static/img/logo.png" style="width:40px;height:40px;"></image>
			<view style="font-weight: bold;color: #888;"> 欢迎登录四叶草 </view>
			<view style="width: 100%;">
				<input v-model="username" placeholder="请输入用户名" maxlength="20" class="input-field" type="text" />
				<view style="height: 12px;"></view>
				<input v-model="password" placeholder="请输入密码" maxlength="20" class="input-field" type="password" />
			</view>
			<!-- 登录按钮 -->

			<button class="login-button" :disabled="loginLoading" @click="handleLogin">
				{{ loginLoading ? "登录中..." : "登录" }}
			</button>

			<view style="width: 90%; display: flex;font-weight: bold;font-size: 12px;color:#aaa;">
				<view>忘记密码?</view>
				<view style="flex:1;"></view>
				<view @click="goSignup">去注册</view>
			</view>
		</view>

	</view>
</template>

<script>
	import {
		ref
	} from "vue";
	import Api from "@/common/api/api"; // 替换为实际 API 引入路径
	import {
		doLoginAction
	} from "@/store/login";
import { useAnalyzeStore } from "@/store/analyze";
	
	const analyzeStore = useAnalyzeStore()
	
	export default {
		setup() {
			const username = ref(""); // 用户名
			const password = ref(""); // 密码
			const loginLoading = ref(false); // 登录加载状态
			const showLoginModal = ref(false); // 控制登录弹窗（如果需要）

			// 登录处理方法
			const handleLogin = async () => {
				try {
					loginLoading.value = true;

					// 调用登录接口
					const res = await Api.login({
						username: username.value,
						password: password.value,
					});

					// 模拟登录成功的操作（例如保存 token）
					if (res && res.data) {

						doLoginAction(res.data)
						// 成功提示
						uni.showToast({
							title: "登录成功",
							icon: "success",
						});

						// 可选：关闭登录弹窗（如果有）
						showLoginModal.value = false;

						// 跳转到首页或其他页面

						
						uni.switchTab({
							url: "/pages/home/home",
						});
					} else {
						throw new Error("登录失败");
					}
				} catch (error) {
					console.log(error);

					uni.showToast({
						title: "登录失败，请检查账号或密码",
						icon: "none",
					});
				} finally {
					loginLoading.value = false; // 重置加载状态
				}
			};

			

			function goSignup() {
				uni.redirectTo({
					url: '/pages/login/signup'
				})
			}

			return {
				username,
				password,
				loginLoading,
				handleLogin,
				showLoginModal,
				goSignup
			};
		},
	};
</script>

<style scoped>
	/* 页面整体样式 */
	.login-page {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100vh;
		background: linear-gradient(-45deg, #ffb8c3d3, #ffafc1, #fcd6dc, #ffb8c3);
	}

	/* 标题样式 */
	.login-header {
		margin-bottom: 20px;
	}

	.login-title {
		font-size: 24px;
		font-weight: bold;
		color: #333;
	}

	/* 输入框样式 */
	.login-form {
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
		border-radius: 5px;
		background-color: #f7eef0;
		color: #777;
		border-radius: 999px;
	}

	.input-placeholder {
		color: #bbb;
	}




	.login-button {
		width: 100%;
		height: 52px;
		font-size: 14px;
		font-weight: bold;
		color: #fff;
		text-align: center;
		background-color: #ea4c98;
		border-radius: 5px;
		border: none;
		line-height: 52px;
		border-radius: 999px;
	}

	.login-button:disabled {
		background-color: #bbb;
	}
</style>
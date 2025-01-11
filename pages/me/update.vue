<template>
	<view class="user-info-container">
		<form>
			<!-- 头像上传 -->
			<view class="form-item">
				<text class="label">头像</text>
				<view class="avatar-upload">
					<image :src="avatarPreview || form.avatar || defaultAvatar" class="avatar" mode="aspectFill" ></image>
					<button class="upload-btn" type="default" @tap="chooseAvatar">上传头像</button>
				</view>
			</view>

			<!-- 用户名 (只读) -->
			<view class="form-item">
				<text class="label">用户名</text>
				<input type="text" class="input" v-model="form.username" disabled />
			</view>

			<view class="form-item">
				<text class="label">真实姓名</text>
				<input type="text" class="input" v-model="form.name" />
			</view>

			<!-- 性别选择 -->
			<view class="form-item">
				<text class="label">性别</text>
				<picker mode="selector" :range="genderLabels" @change="onGenderChange">
					<view class="picker">
						{{ genderLabels[form.gender] || "请选择性别" }}
					</view>
				</picker>
			</view>

			<!-- 生日选择 -->
			<view class="form-item">
				<text class="label">生日</text>
				<uni-datetime-picker type="datetime" v-model="form.birthday" />
			</view>

			<!-- 邮箱 -->
			<view class="form-item">
				<text class="label">邮箱</text>
				<input type="text" class="input" placeholder="请输入邮箱地址" v-model="form.email" />
			</view>

			<!-- 提交按钮 -->
			<view class="button-group">
				<button class="submit-btn" type="primary" formType="submit" @click="submitForm">保存</button>
			</view>
		</form>
	</view>
</template>

<script lang="ts" setup>
	import { reactive, ref, onMounted } from "vue";
	import Api from "@/common/api/api"; // 替换为你的实际 API 路径
	import { uploadToCOS, deleteCOSFile } from "@/common/api/cos";
	import { useLoginStatusStore } from "../../store/login";
	import { formatDate } from "@/common/date";

	let loginStore = useLoginStatusStore()
	const defaultAvatar = "/static/default-avatar.png";

	// 表单数据
	const form = reactive({
		username: "", // 用户名
		phone: null,
		gender: null, // 性别值：0 表示女，1 表示男
		birthday: null,
		avatar: "", // 当前头像的 COS URL
		avatarFile: null, // 新头像文件
		oldAvatar: "", // 旧头像地址
		email: "",
		name: ''
	});

	const avatarPreview = ref(""); // 本地预览地址

	// 性别选项
	const genderOptions = [
		{ label: "女", value: 0 },
		{ label: "男", value: 1 },
	];
	const genderLabels = {
		[1]: '男',
		[0]: '女'
	} // 仅用于显示的文字标签

	// 获取用户信息
	const fetchUserInfo = async () => {
		try {
			const response = await Api.getUserInfo(); // 替换为你的实际 API

			Object.assign(form, {
				...response.data,
				gender: response.data.gender, // gender 值直接从 API 获取
				birthday: formatDate(response.data.birthday),
				oldAvatar: response.data.avatar || "",
			});
		} catch (error) {
			console.error("获取用户信息失败：", error);
			uni.showToast({ title: "获取用户信息失败", icon: "none" });
		}
	};

	// 性别选择器的值变更事件
	const onGenderChange = (e) => {

		form.gender = genderOptions[e.detail.value].value; // 将对应的 gender 值（0 或 1）赋值给表单
	};


	const birthdayChange = (e) => {

		form.birthday = e.detail.value; // 将对应的 gender 值（0 或 1）赋值给表单
	};



	// 删除旧头像
	const deleteOldAvatar = async () => {
		if (form.oldAvatar) {
			try {
				const key = form.oldAvatar.split("/").pop();
				await deleteCOSFile(key);
				console.log("旧头像已删除:", key);
			} catch (error) {
				console.error("删除旧头像失败：", error);
			}
		}
	};

	// 上传头像
	const chooseAvatar = () => {
		uni.chooseImage({
			count: 1,
			sizeType: ["compressed"],
			sourceType: ["album", "camera"],
			success: (res) => {
				const filePath = res.tempFilePaths[0];
				avatarPreview.value = filePath;
				form.avatarFile = res.tempFiles[0];
			},
			fail: () => {
				uni.showToast({ title: "头像选择失败", icon: "none" });
			},
		});
	};

	// 提交表单
	const submitForm = async () => {
		try {
			uni.showLoading({ title: "保存中..." });

			// 如果有新头像文件，则上传
			if (form.avatarFile) {
				await deleteOldAvatar();
				const { url } = await uploadToCOS({ file: form.avatarFile });
				form.avatar = url;
			}

			// 提交用户数据
			const submitData = { ...form };
			delete submitData.avatarFile;
			delete submitData.oldAvatar;

			await Api.updateUserInfo(submitData); // 替换为实际更新接口
			uni.showToast({ title: "保存成功", icon: "success" });

			loginStore.getUserInfo()
			form.oldAvatar = form.avatar; // 更新旧头像地址
		} catch (error) {
			console.error("保存失败：", error);
			uni.showToast({ title: "保存失败，请重试", icon: "none" });
		} finally {
			uni.hideLoading();
		}
	};

	// 页面加载时获取用户信息
	onMounted(() => {
		fetchUserInfo();
	});
</script>

<style scoped>
	/* 样式保持不变 */
</style>
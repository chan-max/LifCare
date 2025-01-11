<script>
	import {
		useLoginStatusStore
	} from './store/login';

	import {
		initConfigStoreBasicConfig
	} from '@/store/config';
	import {
		initLoginStoreUserInfo
	} from '@/store/login';
	import {
		useAnalyzeStore
	} from '@/store/analyze'

	export default {
		async onLaunch() {

			const analyzeStore = useAnalyzeStore()

			await initLoginStoreUserInfo();
			await initConfigStoreBasicConfig();

			const loginStore = useLoginStatusStore();

			if (loginStore.isLogin) {
				uni.reLaunch({
					url: "/pages/home/home",
				})
				analyzeStore.initAnalyze()
				analyzeStore.initDayrecord()
				// 获取用户分析数据信息
			} else {
				//不存在则跳转至登录页
				uni.reLaunch({
					url: "/pages/login/login",
				})
			}
		}
	}
</script>

<style lang='scss'>
	@import "/static/css/tailwind.css";
	@import "/common/lif.css";

	.uni-tabbar__label {
		font-weight: bold;
	}

	body {
		font-family: Roboto, "Droid Sans", sans-serif;
		background: #f3f8f9;
	}

	// 确认按钮
	.uni-datetime-picker--btn {
		background: var(#d80c18);
		color: #fff;
		font-family: PingFang SC;
		font-size: 14px;
		font-weight: 400;
	}

	// 选中区域
	.uni-calendar-item--multiple {
		background-color: #FFF3F4;
	}

	// 前置选项背景
	.uni-calendar-item--before-checked {
		background-color: #d80c18 !important;
	}

	// 后置选项背景
	.uni-calendar-item--after-checked {
		background-color: #d80c18 !important;
	}

	.no-scrollbar::-webkit-scrollbar {
		display: none;
	}

	.no-scrollbar {
		overflow: scroll;
		/* 保证元素可以滚动 */
	}



	/* CSS */
	.button-1 {
		background-color: #EA4C89;
		border-style: none;
		box-sizing: border-box;
		color: #FFFFFF;
		cursor: pointer;
		display: inline-block;
		font-family: "Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial, sans-serif;
		font-size: 14px;
		font-weight: 900;
		list-style: none;
		margin: 0;
		outline: none;
		padding: 8px 12px;
		position: relative;
		text-align: center;
		text-decoration: none;
		transition: color 100ms;
		vertical-align: baseline;
		user-select: none;
		-webkit-user-select: none;
		touch-action: manipulation;
		width: 100%;
		border-radius: 999px;
	}

	.button-1:hover,
	.button-1:focus {
		background-color: #F082AC;
		color: #fff;
	}


	:root {
		--theme-color: #ea4c89;
	}


	/* 引入自定义字体 */
	@font-face {
		font-family: 'number-only';
		src: url('/static/fonts/SignikaSC[wght].woff') format('truetype');
	}

	@font-face {
		font-family: 'number-1';
		src: url('/static/fonts/TiltWarp[XROT,YROT].woff') format('truetype');
	}

	.number {
		font-family: 'number-only',
	}

	.number-1 {
		font-family: 'number-1';
	}

	/* 全局字体设置 */
	* {
		/* font-family: default-font, sans-serif; */
		/* 使用自定义字体 */

		font-family: 'Roboto', 'Droid Sans', 'Noto Sans CJK SC', 'Microsoft YaHei', '黑体', sans-serif;
	}

	.uni-popup__wrapper.center {
		border-radius: 16rpx;
	}

	.uni-mask {
		background: rgba(0, 0, 0, 0.5) !important;
	}

	.uni-toast__content {
		font-size: 12px;
	}
</style>
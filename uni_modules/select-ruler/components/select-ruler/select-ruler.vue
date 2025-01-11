<template>
	<view class="select-ruler">
		<!-- 遮罩层 -->
		<view class="tap-mask" v-if="disable"></view>
		<!-- 线 -->
		<view class="line"></view>
		<view class="row-line"></view>
		<!-- 左右渐变遮罩 -->
		<view class="mask mask-left"></view>
		<view class="mask mask-right"></view>
		<!-- 刻度尺 -->
		<scroll-view  :show-scrollbar="false" :scroll-x="true" @scroll="handleScroll" :scroll-left="scroll_left">
			<span class="ruler-item span-item" v-for="(item, index) in (max - min + 1)">
				<span style="font-weight: bold;">{{((index + min)/multiple).toFixed(point)}}</span>
			</span>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name:"select-ruler",
		data() {
			return {
				number: 0,
				scroll_left: 1,
				scroll: {
					detail:{},
				},
			};
		},
		props: {
			// 最小值
			min: {
				type: Number,
				default: 0
			},
			// 最大值
			max: {
				type: Number,
				default: 500
			},
			// 缩放比例
			multiple: {
				type: Number,
				default: 1
			},
			// 默认值
			defaultValue: {
				type: Number,
				default: 0
			},
			// 是否禁用
			disable: {
				type: Boolean,
				default: false,
			},
			// 小数点后保留位数
			point: {
				type: Number,
				default: 0,
			}
		},
		created() {
			// 等待滚动条初始化完成
			setTimeout(() => {
				this.setDefault(this.defaultValue);
			}, 500);
		},
		methods: {
			// 刻度尺滚动监听
			handleScroll(e) {
				this.scroll = e;
				this.number = Math.round(e.detail.scrollLeft/Math.round((e.detail.scrollWidth-375) / this.max));
				this.$emit('change', ((this.number + this.min)/this.multiple).toFixed(this.point));
			},
			// 初始化刻度尺
			initScroll() {
				this.scroll_left = this.number * Math.round((this.scroll.detail.scrollWidth-375) / this.max);
			},
			// 设置默认值
			setDefault(number) {
				if(number < this.min || number > this.max) {
					uni.showToast({ title: `数值超出范围(${this.min/this.multiple}-${this.max/this.multiple})`, icon: 'none' });
				}
				if(number < this.min) number = this.min;
				if(number > this.max) number = this.max;
				this.number = number - this.min;
				this.initScroll();
			},
			// 增加
			plusValue(step) {
				this.setDefault(this.number + this.min + Math.floor(step));
			},
			// 减少
			reduceValue(step) {
				this.setDefault(this.number + this.min - Math.floor(step));
			},
		}
	}
</script>

<style scoped lang="scss">
	.select-ruler {
		width: 100%;
		height: 150rpx;
		margin-top: 20rpx;
		position: relative;
		
		.tap-mask {
			width: 100%;
			height: 100%;
			position: absolute;
			z-index: 10;
			top: 0;
			left: 0;
		}
		.line {
			width: 10rpx;
			position: absolute;
			left: 366rpx;
			top: 40rpx;
			text-align: center;
			
			&:before {
				content: '';
				width: 6rpx;
				height: 80rpx;
				background: #00BC00;
				display: inline-block;
				vertical-align: text-top;
			}
		}
		.row-line {
			width: 100%;
			height: 1px;
			background: rgba(#3A414B, .07);
			top: 40rpx;
			left: 0;
			position: absolute;
		}
		.mask {
			width: 150rpx;
			height: 120rpx;
			position: absolute;
			top: 0;
			z-index: 2;
			pointer-events: none;
			
			&.mask-left {
				left: 0;
				background-image: linear-gradient(to right, #fff, rgba(#fff, 0));
			}
			&.mask-right {
				right: 0;
				background-image: linear-gradient(to right, rgba(#fff, 0), #fff);
			}
		}
		scroll-view {
			width: 100%;
			height: 100%;
			white-space: nowrap;
			
			.ruler-item {
				width: 10rpx;
				text-align: center;
				display: inline-block;
				position: relative;
				padding-top: 40rpx;
				
				&:first-child {
					margin-left: 366rpx;
				}
				&:last-child {
					margin-right: 376rpx;
				}
				&:before {
					content: '';
					width: 1px;
					height: 30rpx;
					background: rgba(#3A414B, .07);
					display: inline-block;
					vertical-align: text-top;
				}
				span {
					position: absolute;
					top: 0rpx;
					left: 50%;
					transform: translateX(-50%);
					color: #3D3D3D;
					font-size: 24rpx;
					display: none;
				}
				&:nth-child(10n+1) {
				    &::before {
						width: 1px;
				    	height: 60rpx;
				    }
					span {
						display: block;
					}
				}
				
			}
		}
	}
</style>
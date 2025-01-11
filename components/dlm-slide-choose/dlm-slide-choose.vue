<template>
	<scroll-view scroll-x class="slide-scroll" :enable-flex="true"
		:style="{width: screenW + 'px', height: height, background: bgColor, alignItems: align}" @scroll="slideScroll"
		:scroll-left="scrollLeft" @touchend="slideMoveEnd" :scroll-with-animation="true">
		<view class="slide-scroll" :style="{height: height, alignItems: align}">
			<!-- 空白占位 -->
			<view class="empty-none" :style="{width: screenW /2 + 'px'}"></view>
			<!-- 列表项 -->
			<block v-for="(s_item, s_index) in list" :key="s_index">
				<view class="slide-list" :style="{width: bigItemWidth + 'px', margin: `0 ${(cellWidth - bigItemWidth)/2}px`, 
        backgroundColor: selInd === (s_index * cells) ? selColor : color,
        color: selInd === (s_index * cells) ? selColor : color,
        height: setUnit(bigItemHeight)}">
					<view class="list-num"
						:style="{top: numPos === 'bottom' ? `calc(100% + 10rpx)` : 'auto', bottom: numPos === 'top' ? `calc(100% + 10rpx)` : 'auto'}">
						{{s_item}}
					</view>
				</view>
				<view class="slide-item" v-for="(c_item, c_index) in (cells - 1)" :key="c_item" :style="{width: littleItemWidth + 'px', margin: `0 ${(cellWidth - littleItemWidth)/2}px`, 
        backgroundColor: selInd === (s_index * cells + c_index + 1) ? selColor : color,
        height: setUnit(littleItemHeight)}"></view>
			</block>
			<view class="slide-list" :style="{width: bigItemWidth + 'px', margin: `0 ${(cellWidth - bigItemWidth)/2}px`, 
      backgroundColor: selInd === (list.length * cells) ? selColor : color, 
      color: selInd === (list.length * cells) ? selColor : color,
        height: setUnit(bigItemHeight)}">
				<view class="list-num"
					:style="{top: numPos === 'bottom' ? `calc(100% + 10rpx)` : 'auto', bottom: numPos === 'top' ? `calc(100% + 10rpx)` : 'auto'}">
					{{endNum}}
				</view>
			</view>
			<!-- 空白占位 -->
			<view class="empty-none" :style="{width: screenW / 2 + 'px'}"></view>
		</view>
	</scroll-view>
</template>

<script>
	export default {
		data() {
			return {
				scrollLeft: 0, // 仅用于核准中间位置
				list: [],
				selInd: 0
			};
		},
		props: {
			// 总宽度 数字 单位px <=100为屏幕宽度的百分比
			width: {
				type: Number,
				default: 100
			},
			height: {
				type: String,
				default: ''
			},
			// 大刻度宽度
			bigItemWidth: {
				type: Number,
				default: 2
			},
			// 小刻度宽度
			littleItemWidth: {
				type: Number,
				default: 2
			},
			// 每小格宽度
			cellWidth: {
				type: Number,
				default: 20
			},
			// 每个大格分为几个小格
			cells: {
				type: Number,
				default: 5
			},
			// 每个小格子代表的数值
			cellNum: {
				type: Number,
				default: 1
			},
			// 开始数值
			startNum: {
				type: Number,
				default: 0
			},
			// 结束数值
			endNum: {
				type: Number,
				default: 20
			},
			// 背景颜色
			bgColor: {
				type: String,
				default: 'transparent'
			},
			// 刻度颜色
			color: {
				type: String,
				default: '#666'
			},
			// 选中的颜色
			selColor: {
				type: String,
				default: '#f00'
			},
			// 刻度对齐方式 flex-start flex-end
			align: {
				type: String,
				default: 'center'
			},
			// 大刻度高度
			bigItemHeight: {
				type: [String, Number],
				default: 30
			},
			// 小刻度高度
			littleItemHeight: {
				type: [String, Number],
				default: 15
			},
			// 数值的位置 top bottom 
			numPos: {
				type: String,
				default: 'bottom'
			},
			// 用v-model双向绑定
			value: {
				type: Number,
				default: 0
			},
			// 新增的 defaultValue
			defaultValue: {
				type: Number,
				default: 0
			}
		},
		computed: {
			// 总宽度,如果props未传则默认为屏幕宽度
			screenW() {
				const {
					width
				} = this;
				let w = width;
				const screenWidth = uni.getSystemInfoSync().screenWidth;
				if (width <= 100 && width > 0) {
					w = Math.round(screenWidth * width / 100);
				} else if (width > screenWidth || !width) {
					w = screenWidth;
				}
				return w;
			},
			// 大刻度的高度
			bIH() {
				const unit = this.bigItemHeight;
				if (typeof unit === 'number') {
					return (unit + 'px')
				} else {
					return unit;
				}
			}
		},
		mounted() {
			this.initSlide();
		},
		watch: {
			// 当 defaultValue 改变时重新设置刻度位置
			defaultValue: {
				handler(newValue) {
					this.setDefault(newValue);
				},
				immediate: true
			}
		},
		methods: {
			setUnit(unit) {
				if (typeof unit === 'number') {
					return (unit + 'px')
				} else {
					return unit;
				}
			},
			// 滚动触发
			slideScroll(e) {
				const {
					cellWidth,
					endNum,
					startNum,
					cellNum
				} = this;
				const scrollL = e.detail.scrollLeft; // 当前滚动距离左边的距离
				let ind = parseInt(scrollL / cellWidth); // 当前选中是第几个
				const d_len = (endNum - startNum) / cellNum; // 如果略微超过最右边 则也为最后一个
				if (ind > d_len) {
					ind = d_len;
				}
				if (ind !== this.selInd) {
					this.selInd = ind;
				}
			},
			// 触摸结束
			slideMoveEnd(e) {
				const end_t = setTimeout(() => {
					const {
						selInd,
					} = this;
					this.slideTo(selInd);
					this.setEmitFunc();
					clearTimeout(end_t);
				}, 400);
			},
			// 初始化
			initSlide() {
				const {
					startNum,
					endNum,
					cellNum,
					cells
				} = this;
				const listNum = cellNum * cells;
				const len = (endNum - startNum) / listNum;
				let list = [],
					defaultInd = 0;
				for (let i = 0; i < len; i++) {
					// 取整
					const l_num = this.getIntNum(startNum + (i * listNum));
					list.push(l_num);
				}
				this.list = list;
				this.getSelInd();
			},
			// 滚动到正确的刻度
			slideTo(ind) {
				const {
					screenW,
					cellWidth,
					scrollLeft
				} = this;
				const newLeft = ind * cellWidth + (cellWidth / 2);
				this.scrollLeft = (scrollLeft === newLeft) ? (scrollLeft + 0.001) : newLeft;
			},
			// 四舍五入
			getIntNum(n) {
				return parseInt(n * 100) / 100
			},
			// value改变后，计算选中的selInd
			getSelInd() {
				const {
					endNum,
					startNum,
					cellNum,
				} = this;
				let value = this.value,
					isChange = false,
					noHave = false;
				// 不能超过最小最大值
				if (value > endNum) {
					value = endNum;
					isChange = true;
				} else if (value < startNum) {
					value = startNum;
					isChange = true;
				}
				const d_len = (endNum - startNum) / cellNum;
				let defaultInd = -1;
				for (let d = 0; d <= d_len; d++) {
					const item = this.getIntNum(startNum + (d * cellNum));
					if (item === value) {
						defaultInd = d;
						break;
					}
				}
				if (defaultInd === -1) {
					defaultInd = 0;
					noHave = true;
				}
				// 没有匹配到的情况 以及 超过了最大最小值 需要通知父组件修改value
				(isChange || noHave) && this.setEmitFunc();
				if (defaultInd === this.selInd) return;
				this.selInd = defaultInd;
				this.slideTo(defaultInd);
			},
			// 根据 defaultValue 设置默认值
			setDefault(value) {
				this.selInd = this.getSelIndByValue(value);
				this.slideTo(this.selInd);
				this.setEmitFunc();
			},
			// 获取与当前值匹配的 selInd
			getSelIndByValue(value) {
				const {
					endNum,
					startNum,
					cellNum,
				} = this;
				let ind = Math.round((value - startNum) / cellNum);
				const d_len = (endNum - startNum) / cellNum;
				return ind > d_len ? d_len : ind;
			},
			// 父组件通知事件
			setEmitFunc() {
				const {
					selInd,
					startNum,
					cellNum
				} = this;
				var num = this.getIntNum(selInd * cellNum + startNum);

				num = Math.round(num * 10) / 10

				this.$emit('input', num);
				this.$listeners.change && this.$emit('change', num);
			},
		}
	};
</script>

<style>
	.slide-scroll {
		display: flex;
		flex-wrap: nowrap;
		flex-direction: row;
	}

	.slide-list {
		flex-shrink: 0;
		position: relative;
		border-radius: 4px;
		transition: background-color .1s;
	}

	.list-num {
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
	}

	.slide-item {
		flex-shrink: 0;
		border-radius: 4px;
		transition: background-color .1s;
	}

	.empty-none {
		flex-shrink: 0;
		height: 5px;
	}
</style>
<template>
	<view ref="circlePackContainer" class="circle-pack-container"></view>
	<!-- 	<view class="buttons">
		<button @click="addRandomCircle">Add Circle</button>
		<button @click="removeRandomCircle">Delete Circle</button>
		<button @click="setRandomBounds">Random Size</button>
		<button @click="setRandomTarget">Random Target</button>
		<button @click="toggleRandomCirclePin">Toggle Pin</button>
	</view>
	<view class="range-container">
		<label for="damping">Damping</label>
		<input id="damping" type="range" min="0" max="0.05" step="0.001" v-model="damping" @input="setDamping" />
		<text id="damping-value">{{ damping.toFixed(4) }}</text>
	</view> -->
</template>

<script>
	import {
		CirclePacker
	} from '@/static/circlepacker.esm.js';

	export default {
		data() {
			return {
				DRAG_THRESHOLD: 10,
				containerEl: null,
				bounds: {
					width: 300,
					height: 300
				},
				target: {
					x: 150,
					y: 150
				},
				isDragging: false,
				pinnedCircleId: null,
				damping: 0.025,
				circles: [],
				circleEls: {},
				packer: null,
			};
		},
		mounted() {
			uni.getSystemInfo({
				success: (res) => {
					const screenWidth = res.windowWidth; // 屏幕宽度,单位为px
					const screenHeight = res.windowHeight; // 屏幕高度,单位为px
					this.bounds = {
						width: screenWidth,
						height: screenHeight
					}

					this.containerEl = this.$refs.circlePackContainer.$el

					this.containerEl.style.width = screenWidth + 'px'

					this.containerEl.style.height = screenHeight + 'px'

					this.containerEl.style.backgroundColor = '#ddd'
					this.initPacker();
				},
			});
		},
		methods: {
			initPacker() {
				this.circles = [
					this.createCircle(),
					this.createCircle(),
					this.createCircle(),
					this.createCircle(),
					this.createCircle()
				];
				this.packer = new CirclePacker({
					bounds: this.bounds,
					target: this.target,
					circles: this.circles,
					onMove: this.render,
					collisionPasses: 5, // 增加碰撞检查的次数
					centeringPasses: 3,
					correctionPasses: 10, // 增加重叠修正的次数
					noWorker: true,
					animationLoop: true,
				});
			},
			addRandomCircle() {
				this.packer.addCircle(this.createCircle());
			},
			createCircle(x, y, radius) {
				radius = radius || this.random(10, 40);
				x = x || this.random(radius, this.bounds.width - radius);
				y = y || this.random(radius, this.bounds.height - radius);

				const diameter = radius * 2;


				const id = `circle-${this.random(0, 1000, true)}-${Date.now()}`;

				const circle = {
					id: id,
					radius: radius,
					position: {
						x: x,
						y: y
					},
				};

				const circleEl = document.createElement('div');
				circleEl.id = id;
				circleEl.style.width = `${diameter}px`;
				circleEl.style.height = `${diameter}px`;
				circleEl.style.borderRadius = `${radius}px`;
				circleEl.style.backgroundColor = `#aaa`;
				circleEl.classList.add('circle');
				circleEl.style.position = 'absolute'
				this.containerEl.appendChild(circleEl);
				this.circleEls[id] = circleEl;

				return circle;
			},
			removeRandomCircle() {
				const ids = Object.keys(this.circleEls);
				const idToDelete = ids[this.random(0, ids.length, true)];
				this.removeCircle(idToDelete);
			},
			setRandomBounds() {
				this.bounds = {
					width: this.random(200, 500, true),
					height: this.random(200, 500, true),
				};
				this.containerEl.style.width = `${this.bounds.width}px`;
				this.containerEl.style.height = `${this.bounds.height}px`;

				this.packer.setBounds(this.bounds);
				this.target = {
					x: this.bounds.width / 2,
					y: this.bounds.height / 2
				};
				this.packer.setTarget(this.target);
				this.packer.update();
			},
			removeCircle(id) {
				this.packer.removeCircle(id);
				this.containerEl.removeChild(this.circleEls[id]);
				delete this.circleEls[id];
			},
			toggleRandomCirclePin() {
				if (this.pinnedCircleId) {
					this.packer.unpinCircle(this.pinnedCircleId);
					this.circleEls[this.pinnedCircleId].classList.remove('is-pinned');
					this.pinnedCircleId = null;
				} else {
					if (this.circles.length) {
						const randomCircleIndex = Math.floor(Math.random() * this.circles.length);
						const randomCircle = this.circles[randomCircleIndex];

						this.pinnedCircleId = randomCircle.id;
						this.circleEls[this.pinnedCircleId].classList.add('is-pinned');
						this.packer.pinCircle(randomCircle);
					}
				}
			},
			setRandomTarget() {
				this.target = {
					x: this.random(0, this.bounds.width, true),
					y: this.random(0, this.bounds.height, true),
				};
				this.packer.setTarget(this.target);
				this.packer.update();
			},
			setDamping() {
				this.packer.setDamping(this.damping);
			},
			render(circles) {
				for (let id in circles) {
					const circleEl = this.circleEls[id];
					if (circleEl) {
						const circle = circles[id];
						const x = circle.position.x - circle.radius;
						const y = circle.position.y - circle.radius;
						circleEl.style.transform = `translateX(${x}px) translateY(${y}px)`;
					}
				}
			},
			random(min, max, intResult) {
				let result = min + Math.random() * (max - min);
				return intResult ? parseInt(result, 10) : result;
			},
		},
	};
</script>

<style>
	.circle-pack-container {
		position: relative;
		width: 100%;
		height: 100%;
		flex-shrink: 0;
	}
</style>
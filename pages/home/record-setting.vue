<template>
	<l-drag :list="RecordTypeOptions" @change="change":column='1'>
		<!-- // 每一项的插槽 grid 的 content 您传入的数据 -->
		<template #grid="{active, content}">
			<!-- // grid.active 是否为当前拖拽项目 根据自己需要写样式 -->
			<view  :class="{active: active}">
				<text class="text" :class="{'text-active': active}">{{content}}</text>
			</view>
		</template>
	</l-drag>
</template>

<script setup>
	import {
		ref
	} from 'vue'
	import {
		RecordTypeOptions
	} from '@/common/enum/record';
	import lDrag from '@/components/l-drag/l-drag.vue'
	const list = new Array(7).fill(0).map((v, i) => i);
	// 拖拽后新的数据
	const newList = ref([])
	const change = v => newList.value = v
</script>

<style>
</style>
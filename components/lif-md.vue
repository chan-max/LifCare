<template>
	<view class="lif-md">
		<ua-markdown v-bind="$attrs" />
	</view>
</template>

<script setup>

</script>

<style>
	/* Markdown 样式 */
	.lif-md {
		font-family: Arial, sans-serif;
		line-height: 1.6;
		color: #333;
		background-color: #fff;
		padding: 36rpx;
		box-sizing: border-box;
		border-radius: 8rpx;
		box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
	}

	/* 标题 */
	.lif-md h1 {
		font-size: 36rpx;
		font-weight: bold;
		margin: 24rpx 0;
		border-bottom: 2rpx solid #59dcd0;
		padding-bottom: 8rpx;
	}

	.lif-md h2 {
		font-size: 32rpx;
		font-weight: bold;
		margin: 20rpx 0;
		border-bottom: 1rpx solid #ddd;
		padding-bottom: 6rpx;
	}

	.lif-md h3 {
		font-size: 28rpx;
		font-weight: bold;
		margin: 16rpx 0;
	}

	/* 段落 */
	.lif-md p {
		font-size: 28rpx;
		margin: 12rpx 0;
	}

	/* 加粗和斜体 */
	.lif-md strong {
		font-weight: bold;
	}

	.lif-md em {
		font-style: italic;
	}

	/* 引用 */
	.lif-md blockquote {
		margin: 16rpx 0;
		padding: 12rpx 16rpx;
		background-color: #f9f9f9;
		border-left: 4rpx solid #59dcd0;
		color: #555;
		font-style: italic;
	}

	/* 列表 */
	.lif-md ul {
		list-style-type: disc;
		margin: 12rpx 0 12rpx 24rpx;
		padding-left: 24rpx;
	}

	.lif-md ol {
		list-style-type: decimal;
		margin: 12rpx 0 12rpx 24rpx;
		padding-left: 24rpx;
	}

	.lif-md li {
		margin-bottom: 8rpx;
	}

	/* 链接 */
	.lif-md a {
		color: #59dcd0;
		text-decoration: none;
	}

	.lif-md a:hover {
		text-decoration: underline;
	}

	/* 图片 */
	.lif-md img {
		max-width: 100%;
		display: block;
		margin: 16rpx 0;
		border-radius: 8rpx;
	}

	/* 代码块 */
	.lif-md pre {
		background-color: #2d2d2d;
		color: #f8f8f2;
		padding: 16rpx;
		border-radius: 8rpx;
		overflow-x: auto;
		font-size: 24rpx;
	}

	.lif-md code {
		background-color: #f8f8f8;
		color: #d14;
		padding: 2rpx 6rpx;
		border-radius: 4rpx;
		font-family: monospace;
		font-size: 24rpx;
	}

	/* 表格 */
	.lif-md table {
		width: 100%;
		border-collapse: collapse;
		margin: 16rpx 0;
	}

	.lif-md th,
	.lif-md td {
		border: 1rpx solid #ddd;
		padding: 8rpx;
		text-align: left;
	}

	.lif-md th {
		background-color: #f3f3f3;
		font-weight: bold;
	}

	/* 分割线 */
	.lif-md hr {
		border: none;
		border-top: 1rpx solid #ddd;
		margin: 16rpx 0;
	}

	/* 任务列表 */
	.lif-md input[type="checkbox"] {
		margin-right: 8rpx;
	}

	/* 脚注 */
	.lif-md sup {
		font-size: 20rpx;
		color: #59dcd0;
	}
</style>
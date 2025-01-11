<template>
	<lif-md :source="mdvalue"></lif-md>
</template>

<script setup>
	import lifMd from '@/components/lif-md.vue'
	const mdvalue = `# 一级标题

## 二级标题

### 三级标题

这是一个普通段落。

**加粗文字** 和 *斜体文字*，以及 ***同时加粗和斜体***。

> 这是一个引用段落。

1. 有序列表项 1  
2. 有序列表项 2  
3. 有序列表项 3  

- 无序列表项 1  
- 无序列表项 2  
- 无序列表项 3  

[超链接文字](https://example.com)

这是一个嵌入图片的示例：  
![图片描述](https://via.placeholder.com/150)


---

这是一个分割线。

- [ ] 未完成的任务
- [x] 已完成的任务

| 表头1  | 表头2  | 表头3  |
|--------|--------|--------|
| 单元格1 | 单元格2 | 单元格3 |
| 单元格4 | 单元格5 | 单元格6 |

**脚注示例：** 这是一个带有脚注的文本。[^1]  

[^1]: 这是脚注内容。
`
</script>

<style>
</style>
import { ref, watch } from 'vue';

export function useLocalStorage(key, defaultValue = null) {
	// 从 localStorage 获取初始值并反序列化
	const storedValue = uni.getStorageSync(key);
	const data = ref(storedValue !== '' ? deserialize(storedValue) : defaultValue);

	// 监听 data 的变化并更新 localStorage
	watch(data, (newValue) => {
		if (newValue === null || newValue === undefined) {
			uni.removeStorageSync(key); // 如果值为 null 或 undefined，移除存储
		} else {
			uni.setStorageSync(key, serialize(newValue)); // 更新存储
		}
	}, {
		immediate: true,
		deep:true
	});

	return data;
}

// 序列化数据
function serialize(value) {
	if (typeof value === 'object' && value !== null) {
		return JSON.stringify(value); // 对象序列化为JSON字符串
	}
	return String(value); // 其他类型转换为字符串
}

// 反序列化数据
function deserialize(value) {
	try {
		return JSON.parse(value); // 尝试将JSON字符串解析为对象
	} catch (e) {
		return value; // 如果解析失败，返回原始值
	}
}
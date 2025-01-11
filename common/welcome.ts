


/**
 * 根据当前时间生成欢迎语
 * @returns {string} - 欢迎语
 */
export function getGreeting() {
	const now = new Date();
	const hours = now.getHours();

	if (hours >= 5 && hours < 12) {
		return "早上好";
	} else if (hours >= 12 && hours < 14) {
		return "中午好";
	} else if (hours >= 14 && hours < 18) {
		return "下午好";
	} else if (hours >= 18 && hours < 22) {
		return "晚上好";
	} else {
		return "夜深了，注意休息";
	}
}
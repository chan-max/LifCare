


// 我的每日建议记录条数
export const MySuggestRecordCountPerday = 12

export function getRecordCountLabelTip(count) {
	if (count == 0) {
		return {
			color: '#f00',
			text: '今日还没有添加记录，快来添加一条吧!'
		}
	}

	if (count < 6) {
		return {
			color: 'blue',
			text: '继续增加今日记录'
		}
	}

	if (count < 12) {
		return {
			color: '#0f0',
			text: '活跃度不错，继续保持'
		}
	}

	if (count < 99) {
		return {
			color: '',
			text: '今日已完成记录目标'
		}
	}

	return {
		color: '#f00',
		text: '记录太多了'
	}
}
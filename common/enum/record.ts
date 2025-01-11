import { useLocalStorage } from "../hooks/storage"
import { ref } from 'vue'

export enum Daycords {
	// 睡眠
	SLEEP = 'sleep',

	// 饮食
	DIET = 'diet',

	// 身高
	HEIGHT = 'height',

	// 体重
	WEIGHT = 'weight',

	// 步数
	WALK = 'walk',

	// 饮水
	WATER = 'water',

	// 心率脉搏
	PULSE = 'pulse',

	// 心情
	MOOD = 'mood',

	// 吸烟
	SMOKE = 'smoke',

	// 喝酒
	DRINK = 'drink',

	// 生病
	DISEASE = 'disease',

	// 事件
	EVENT = 'event',

	// 标记
	MARK = 'mark',

	// 运动
	SPORT = 'sport',
}


/**
 * @define 所有记录类型
*/
export const RecordTypeOptions = ref([
	{
		type: 'sleep',
		label: '睡眠',
		logo: '/static/img/record/sleep.png'
	},
	{
		type: 'diet',
		label: '饮食',
		logo: '/static/img/record/diet.png'
	},
	{
		type: 'water',
		label: '饮水',
		logo: '/static/img/record/water.png'
	},
	{
		type: 'walk',
		logo: '/static/img/record/walk.png',
		label: '步数'
	},
	{
		type: 'height',
		logo: '/static/img/record/height.png',
		label: '身高'
	},
	{
		type: 'weight',
		label: '体重',
		logo: '/static/img/record/weight.png',
	},
	{
		type: 'pulse',
		label: '心率',
		logo: '/static/img/record/pulse.png',
	},

	{
		type: 'mood',
		label: '心情',
		logo: '/static/img/record/mood.png',
	},

	{
		type: 'feeling',
		label: '感觉',
		logo: '/static/img/record/feeling.png',
	},

	{
		type: 'period',
		label: '生理期',
		logo: '/static/img/record/period.png',
	},


	{
		type: 'smoke',
		label: '吸烟',
		logo: '/static/img/record/smoke.png',
	},

	{
		type: 'drink',
		label: '喝酒',
		logo: '/static/img/record/drink.png',
	},

	{
		type: 'disease',
		label: '生病',
		logo: '/static/img/record/disease.png',
	},

	{
		type: 'event',
		label: '事件',
		logo: '/static/img/record/event.png',
	},

	{
		type: 'mark',
		label: '标记',
		logo: '/static/img/record/mark.png',
	},

	{
		type: 'sport',
		label: '运动',
		logo: '/static/img/record/sport.png',
	},
	{
		type: 'luck',
		label: '运气',
		logo: '/static/img/record/luck.png',
	},
])


export function getRecordTypeOptionByType(type : string) {

	if (!type) {
		console.error('record type is empty ')
		return {
			type: 'unknown',
			label: '未知类型',
			logo: '/static/img/record/unknown.png'
		}
	}

	return RecordTypeOptions.value.find((item) => item.type == type)
}


// 所有可能出现的心情
export const moodOptions = [
	{ type: 'happy', label: '高兴' },
	{ type: 'excited', label: '兴奋' },
	{ type: 'content', label: '满足' },
	{ type: 'calm', label: '平静' },
	{ type: 'relaxed', label: '放松' },
	{ type: 'grateful', label: '感激' },
	{ type: 'optimistic', label: '乐观' },
	{ type: 'proud', label: '自豪' },
	{ type: 'joyful', label: '喜悦' },
	{ type: 'neutral', label: '中立' },
	{ type: 'bored', label: '无聊' },
	{ type: 'tired', label: '疲惫' },
	{ type: 'confused', label: '困惑' },
	{ type: 'curious', label: '好奇' },
	{ type: 'thoughtful', label: '深思' },
	{ type: 'sad', label: '悲伤' },
	{ type: 'lonely', label: '孤独' },
	{ type: 'anxious', label: '焦虑' },
	{ type: 'fearful', label: '害怕' },
	{ type: 'guilty', label: '内疚' },
	{ type: 'ashamed', label: '羞愧' },
	{ type: 'frustrated', label: '沮丧' },
	{ type: 'angry', label: '愤怒' },
	{ type: 'jealous', label: '嫉妒' },
	{ type: 'resentful', label: '愤恨' },
	{ type: 'stressed', label: '压力大' },
	{ type: 'nostalgic', label: '怀旧' },
	{ type: 'embarrassed', label: '尴尬' },
	{ type: 'satisfied', label: '满意' },
	{ type: 'melancholic', label: '忧郁' },
	{ type: 'motivated', label: '有动力' },


	{ type: 'insecure', label: '不安' },
	{ type: 'overwhelmed', label: '不堪重负' },


	{ type: 'inspired', label: '被激励' },
	{ type: 'empowered', label: '充满力量' },
	{ type: 'hopeful-yet-anxious', label: '既充满希望又焦虑' },
	{ type: 'peaceful', label: '安宁' },

	{ type: 'determined', label: '坚定' },

	{ type: 'bittersweet', label: '苦乐参半' },
	{ type: 'relieved', label: '如释重负' },
	{ type: 'exhausted', label: '精疲力尽' },
	{ type: 'curious-yet-nervous', label: '既好奇又紧张' },
	{ type: 'hopeful', label: '充满希望' },
];


export const feelingOptions = [
	// 身体状态
	{ type: 'tired', label: '疲劳', description: '感觉精力耗尽，难以集中注意力，可能需要休息。', value: -4, color: '#ff9999', usageFrequency: 8 }, // 浅红
	{ type: 'relaxed', label: '放松', description: '身体轻松，没有压力，心情愉悦。', value: 4, color: '#99ff99', usageFrequency: 7 }, // 浅绿
	{ type: 'weak', label: '乏力', description: '缺乏力量，行动困难，可能需要补充能量。', value: -3, color: '#ffd700', usageFrequency: 6 }, // 黄色
	{ type: 'energized', label: '有活力', description: '充满能量，精神饱满，准备迎接挑战。', value: 5, color: '#00ccff', usageFrequency: 9 }, // 青色
	{ type: 'sleepy', label: '困倦', description: '想要睡觉，精神不集中，可能需要小憩。', value: -2, color: '#ccccff', usageFrequency: 5 }, // 浅蓝
	{ type: 'refreshed', label: '神清气爽', description: '经过休息或放松后感到焕然一新，精力充沛。', value: 5, color: '#66ff66', usageFrequency: 6 }, // 明亮绿色

	// 疼痛相关
	{ type: 'pain', label: '疼痛', description: '局部或全身感到疼痛，可能影响日常活动。', value: -5, color: '#cc0000', usageFrequency: 9 }, // 深红
	{ type: 'sore', label: '酸痛', description: '肌肉或关节感到不适，常见于运动后。', value: -3, color: '#ffcc99', usageFrequency: 6 }, // 浅橙
	{ type: 'cramp', label: '抽筋', description: '肌肉突然收缩并伴随疼痛，通常发生在运动时。', value: -4, color: '#ff6666', usageFrequency: 5 }, // 红色
	{ type: 'throbbing', label: '跳痛', description: '间歇性强烈的疼痛，如头痛或牙痛，令人难以忍受。', value: -5, color: '#990000', usageFrequency: 4 }, // 更深的红

	// 感觉异常
	{ type: 'numbness', label: '麻木', description: '身体部位失去感觉，常见于长时间保持同一姿势。', value: -3, color: '#cccccc', usageFrequency: 5 }, // 灰色
	{ type: 'tingling', label: '刺痛', description: '像被针刺一样的感觉，可能是神经受到压迫。', value: -2, color: '#ffff99', usageFrequency: 4 }, // 浅黄
	{ type: 'swelling', label: '肿胀', description: '身体部位变大并伴随胀痛，可能是受伤或炎症的表现。', value: -4, color: '#ffcc99', usageFrequency: 3 }, // 浅橙
	{ type: 'dizziness', label: '头晕', description: '感到旋转或站立不稳，需要坐下休息。', value: -3, color: '#ccccff', usageFrequency: 5 }, // 浅蓝
	{ type: 'faintness', label: '眩晕', description: '感到虚弱，有昏厥的风险，应立即坐下或躺下。', value: -5, color: '#cc0000', usageFrequency: 2 }, // 深红

	// 温度与湿度
	{ type: 'cold', label: '寒冷', description: '身体发冷，可能伴随寒颤，需要保暖。', value: -3, color: '#99ccff', usageFrequency: 4 }, // 浅蓝
	{ type: 'hot', label: '炎热', description: '身体发热并可能流汗，需要降温或喝水。', value: -2, color: '#ffcc00', usageFrequency: 5 }, // 黄色
	{ type: 'dryness', label: '干燥', description: '皮肤或喉咙感到干涩，可能需要补水或润肤。', value: -2, color: '#ffff99', usageFrequency: 4 }, // 浅黄
	{ type: 'sweaty', label: '出汗', description: '身体大量出汗，感到潮湿，需要换衣服或降温。', value: -2, color: '#66ccff', usageFrequency: 3 }, // 蓝色

	// 消化与饮食
	{ type: 'bloating', label: '胀气', description: '胃部感到充满气体，不适感明显，需要排气。', value: -3, color: '#ffff99', usageFrequency: 4 }, // 浅黄
	{ type: 'hunger', label: '饥饿', description: '需要进食，感到胃空，有进食的冲动。', value: -1, color: '#ffe6b3', usageFrequency: 6 }, // 非常浅黄
	{ type: 'fullness', label: '饱胀', description: '吃太多后胃部不适，需要消化时间。', value: -2, color: '#ffd699', usageFrequency: 4 }, // 浅橙
	{ type: 'thirstiness', label: '口渴', description: '需要喝水，口干舌燥，应及时补水。', value: -1, color: '#99ccff', usageFrequency: 7 }, // 蓝色
	{ type: 'nausea', label: '恶心', description: '感觉想呕吐或不适，应避免油腻食物。', value: -4, color: '#ff6666', usageFrequency: 3 }, // 红色

	// 舒适度
	{ type: 'comfortable', label: '舒适', description: '身体状态良好，没有不适，可以放松心情。', value: +5, color: '#66ff66', usageFrequency: 8 }, // 明亮绿色
	{ type: 'uncomfortable', label: '不适', description: '整体感觉不舒服或有异常，需要关注身体信号。', value: -3, color: '#cccccc', usageFrequency: 4 }, // 灰色
	{ type: 'restless', label: '坐立不安', description: '感觉无法静坐或放松，需要活动一下来缓解压力.', value: -2, color: '#ffff99', usageFrequency: 5 }, // 浅黄

	// 不确定的感觉
	{ type: 'indifferent', label: '无所谓', description: '对当前状态没有明显的积极或消极感受，可以继续进行日常活动。', value: 0, color: '#cccccc', usageFrequency: 2 }, // 灰色
]




/**
 * @description 运气等级 从 1 - 9
*/
export const luckOptions = [
	{
		level: 1,
		title: '非常差',
		description: '您最近的运气似乎非常差，或许尝试换换生活方式',
	}
]

export const vitalityOptions = [

]
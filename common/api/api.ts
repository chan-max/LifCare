import axios from "uniapp-axios-adapter";
import { v4 as uuidv4 } from 'uuid';
import { UniAdapter } from "uniapp-axios-adapter";
// 创建 Axios 实例
export const axiosInstance = axios.create({
	baseURL: "https://1s.design:4321", // 基础地址
	// baseURL: "https://localhost:4321", // 基础地址   
	// baseURL: "https://192.168.0.101:4321",
	// baseURL: "https://172.20.10.10:4321",
	timeout: 50000, // 请求超时时间
	// adapter: UniAdapter,
	validateStatus: function (status) {
		return status >= 200 && status < 300 || status === 401; // 允许 401
	}
});

import { defaultResponseInterceptors, tokenRequestInterceptor, tokenResponseInterceptor } from "./interceptor";


axiosInstance.interceptors.response.use(defaultResponseInterceptors)

axiosInstance.interceptors.response.use(tokenResponseInterceptor)
axiosInstance.interceptors.request.use(tokenRequestInterceptor)

// 封装通用请求方法
export const api = {
	get: (url, params = {}, config = {}) =>
		axiosInstance.get(url, { params, ...config }),
	post: (url, data = {}, config = {}) =>
		axiosInstance.post(url, data, { ...config }),
	put: (url, data = {}, config = {}) =>
		axiosInstance.put(url, data, { ...config }),
	delete: (url, config = {}) =>
		axiosInstance.delete(url, { ...config }),
};



export const getBasicConfig = () => new Promise(async (resolve, reject) => {
	try {
		let res = await api.post('/api/config')
		resolve(res.data.data)
	} catch (e) {
		reject()
	}
})



export const login = (params) => new Promise(async (resolve, reject) => {
	try {
		let res = await api.post('/api/auth/login', params)
		resolve(res.data)
	} catch (e) {
		reject()
	}
})

export const logout = () => api.post('/api/user/logout')

export const signup = (params) => api.post('/api/user/signup', params)

export const updateUserInfo = (params) => api.post('/api/user/update', params)

export const getUserInfo = () => new Promise(async (resolve, reject) => {
	let res = await api.post('/api/user/getUserInfo')
	resolve(res.data)
})

// 获取 0 - 100 岁的 人数分布
export const getAgeGenderDistribution = () => new Promise(async (resolve, reject) => {
	let res = await api.get(`/api/analyze/age-gender-distribution`)
	resolve(res.data.data)
})


// 获取身高数据分布
export const getHeightDistribution = () => new Promise(async (resolve, reject) => {
	let res = await api.get(`/api/analyze/height-distribution`)
	resolve(res.data.data)
})


export const createDayrecord = () => new Promise(async (resolve, reject) => {
	let res = await api.post(`/api/dayrecord/create`)
	resolve(res.data.data)
})


export const getDayrecord = (datekey ?: any) => new Promise(async (resolve, reject) => {
	let res = await api.get(`/api/dayrecord${datekey ? '/' + datekey : ''}`, {})
	resolve(res.data.data)
})

export const getDayrecordList = (post : any) => new Promise(async (resolve, reject) => {
	try {
		let res = await api.post(`/api/dayrecord/page`, post)
		resolve(res.data)
	} catch (e) {
		reject(e)
	}
})


// 获取近7天的记录
export const getDayrecordLastest = (post ?: any, count = 7) => new Promise(async (resolve, reject) => {
	try {
		let res = await api.get(`/api/dayrecord/latest/${count}`, post)
		resolve(res.data.data)
	} catch (e) {
		reject(e)
	}

})


export const addDayrecordDetail = (date : string, post : any) => new Promise(async (resolve, reject) => {
	post = {
		createTime: new Date(),
		updateTime: new Date(),
		id: uuidv4(),
		...post
	}
	let res = await api.post(`/api/dayrecord/add` + (date ? '/' + date : ""), post).then(res => resolve(res.data.data)).catch(reject)
})


// 清除某个记录中的详情
export const deleteDayrecordDetail = (post : any) => new Promise(async (resolve, reject) => {
	let res = await api.post(`/api/dayrecord/delete-detail`, post)
	resolve(res.data.data)
})


// 获取食物信息，带分页
export const getFoods = (post : any) => new Promise(async (resolve, reject) => {
	let res = await api.post(`/api/food/page`, post)
	resolve(res.data)
})


export const getAnalysis = (post : any) => new Promise(async (resolve, reject) => {
	let res = await api.get(`/api/dayrecord/analysis`, post)
	resolve(res.data.data)
})

export const getMyHeightRecords = (post : any) => new Promise(async (resolve, reject) => {
	let res = await api.get(`/api/dayrecord/height-records`, post)
	resolve(res.data.data)
})

export const getMyLatestHeightRecords = (post : any) => new Promise(async (resolve, reject) => {
	let res = await api.get(`/api/dayrecord/latest-height-records`, post)
	resolve(res.data.data)
})

export const getMyLatestWeightRecords = (post : any) => new Promise(async (resolve, reject) => {
	let res = await api.get(`/api/dayrecord/latest-weight-records`, post)
	resolve(res.data.data)
})



export const getMyWeightRecords = (post : any) => new Promise(async (resolve, reject) => {
	let res = await api.get(`/api/dayrecord/weight-records`, post)
	resolve(res.data.data)
})

export const getMyMonthlyRecordDetail = (type) => new Promise(async (resolve, reject) => {
	let res = await api.get(`/api/dayrecord/my-monthly-record-detail?type=${type}`,)
	resolve(res.data.data)
})



// 女性生理期相关

export const getPeriodMonthly = (year, month) => new Promise(async (resolve, reject) => {
	let res = await api.get(`/api/period/monthly-records?year=${year}&month=${month}`,)
	resolve(res.data.data)
})


export const getPredictPeriodMonthly = (year, month) => new Promise(async (resolve, reject) => {
	let res = await api.get(`/api/period/predict-period-month?year=${year}&month=${month}`,)
	resolve(res.data.data)
})


// 睡眠相关 

export const getSleepCustomInfo = (year, month) => new Promise(async (resolve, reject) => {
	let res = await api.get(`/api/sleep/custom-info`)
	resolve(res.data.data)
})



// 获取这个月的数据
export const getMonthly = (year, month) => new Promise(async (resolve, reject) => {
	let res = await api.get(`/api/dayrecord/monthly-records?year=${year}&month=${month}`,)
	resolve(res.data.data)
})


export const getHello = (year, month) => new Promise(async (resolve, reject) => {
	let res = await api.get(`/api/hello`)
	resolve(res.data.data)
})


export const getUserAnalyze = () => new Promise(async (resolve, reject) => {
	let res = await api.get(`/api/analyze/me`)
	resolve(res.data.data)
})

export default {
	login,
	logout,
	getUserInfo,
	signup,
	updateUserInfo,
	getAgeGenderDistribution,
	getHeightDistribution,
	createDayrecord,
	getBasicConfig,
	getFoods,
	addDayrecordDetail,
	getDayrecord,
	deleteDayrecordDetail,
	getDayrecordList,
	getDayrecordLastest,
	getAnalysis,
	getMyHeightRecords,
	getMyLatestHeightRecords,
	getMyWeightRecords,
	getMyLatestWeightRecords,
	getMyMonthlyRecordDetail,
	getPeriodMonthly,
	getPredictPeriodMonthly,
	getSleepCustomInfo,
	getMonthly,
	getHello,
	getUserAnalyze
};


export { usePromise } from '@/common/hooks/promise'
"use strict";
const common_vendor = require("../vendor.js");
const common_api_interceptor = require("./interceptor.js");
const axiosInstance = common_vendor.axios.create({
  // baseURL: "https://1s.design:4321", // 基础地址
  // baseURL: "https://localhost:4321", // 基础地址   
  // baseURL: "https://192.168.0.101:4321",
  baseURL: "https://172.20.10.10:4321",
  timeout: 5e4,
  // 请求超时时间
  validateStatus: function(status) {
    return status >= 200 && status < 300 || status === 401;
  }
});
axiosInstance.interceptors.response.use(common_api_interceptor.defaultResponseInterceptors);
axiosInstance.interceptors.response.use(common_api_interceptor.tokenResponseInterceptor);
axiosInstance.interceptors.request.use(common_api_interceptor.tokenRequestInterceptor);
const api = {
  get: (url, params = {}, config = {}) => axiosInstance.get(url, { params, ...config }),
  post: (url, data = {}, config = {}) => axiosInstance.post(url, data, { ...config }),
  put: (url, data = {}, config = {}) => axiosInstance.put(url, data, { ...config }),
  delete: (url, config = {}) => axiosInstance.delete(url, { ...config })
};
const getBasicConfig = () => new Promise(async (resolve, reject) => {
  try {
    let res = await api.post("/api/config");
    resolve(res.data.data);
  } catch (e) {
    reject();
  }
});
const login = (params) => new Promise(async (resolve, reject) => {
  try {
    let res = await api.post("/api/auth/login", params);
    resolve(res.data);
  } catch (e) {
    reject();
  }
});
const logout = () => api.post("/api/user/logout");
const signup = (params) => api.post("/api/user/signup", params);
const updateUserInfo = (params) => api.post("/api/user/update", params);
const getUserInfo = () => new Promise(async (resolve, reject) => {
  let res = await api.post("/api/user/getUserInfo");
  resolve(res.data);
});
const getAgeGenderDistribution = () => new Promise(async (resolve, reject) => {
  let res = await api.get(`/api/analyze/age-gender-distribution`);
  resolve(res.data.data);
});
const getHeightDistribution = () => new Promise(async (resolve, reject) => {
  let res = await api.get(`/api/analyze/height-distribution`);
  resolve(res.data.data);
});
const createDayrecord = () => new Promise(async (resolve, reject) => {
  let res = await api.post(`/api/dayrecord/create`);
  resolve(res.data.data);
});
const getDayrecord = (datekey) => new Promise(async (resolve, reject) => {
  let res = await api.get(`/api/dayrecord${datekey ? "/" + datekey : ""}`);
  resolve(res.data.data);
});
const getDayrecordList = (post) => new Promise(async (resolve, reject) => {
  try {
    let res = await api.post(`/api/dayrecord/page`, post);
    resolve(res.data);
  } catch (e) {
    reject(e);
  }
});
const getDayrecordLastest = (post, count = 7) => new Promise(async (resolve, reject) => {
  try {
    let res = await api.get(`/api/dayrecord/latest/${count}`, post);
    resolve(res.data.data);
  } catch (e) {
    reject(e);
  }
});
const addDayrecordDetail = (date, post) => new Promise(async (resolve, reject) => {
  post = {
    createTime: /* @__PURE__ */ new Date(),
    updateTime: /* @__PURE__ */ new Date(),
    id: common_vendor.v4(),
    ...post
  };
  await api.post(`/api/dayrecord/add` + (date ? "/" + date : ""), post).then((res2) => resolve(res2.data.data)).catch(reject);
});
const deleteDayrecordDetail = (post) => new Promise(async (resolve, reject) => {
  let res = await api.post(`/api/dayrecord/delete-detail`, post);
  resolve(res.data.data);
});
const getFoods = (post) => new Promise(async (resolve, reject) => {
  let res = await api.post(`/api/food/page`, post);
  resolve(res.data);
});
const getAnalysis = (post) => new Promise(async (resolve, reject) => {
  let res = await api.get(`/api/dayrecord/analysis`, post);
  resolve(res.data.data);
});
const getMyHeightRecords = (post) => new Promise(async (resolve, reject) => {
  let res = await api.get(`/api/dayrecord/height-records`, post);
  resolve(res.data.data);
});
const getMyLatestHeightRecords = (post) => new Promise(async (resolve, reject) => {
  let res = await api.get(`/api/dayrecord/latest-height-records`, post);
  resolve(res.data.data);
});
const getMyLatestWeightRecords = (post) => new Promise(async (resolve, reject) => {
  let res = await api.get(`/api/dayrecord/latest-weight-records`, post);
  resolve(res.data.data);
});
const getMyWeightRecords = (post) => new Promise(async (resolve, reject) => {
  let res = await api.get(`/api/dayrecord/weight-records`, post);
  resolve(res.data.data);
});
const getMyMonthlyRecordDetail = (type) => new Promise(async (resolve, reject) => {
  let res = await api.get(`/api/dayrecord/my-monthly-record-detail?type=${type}`);
  resolve(res.data.data);
});
const getPeriodMonthly = (year, month) => new Promise(async (resolve, reject) => {
  let res = await api.get(`/api/period/monthly-records?year=${year}&month=${month}`);
  resolve(res.data.data);
});
const getPredictPeriodMonthly = (year, month) => new Promise(async (resolve, reject) => {
  let res = await api.get(`/api/period/predict-period-month?year=${year}&month=${month}`);
  resolve(res.data.data);
});
const getSleepCustomInfo = (year, month) => new Promise(async (resolve, reject) => {
  let res = await api.get(`/api/sleep/custom-info`);
  resolve(res.data.data);
});
const Api = {
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
  getSleepCustomInfo
};
exports.Api = Api;

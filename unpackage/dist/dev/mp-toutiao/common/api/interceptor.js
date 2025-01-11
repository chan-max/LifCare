"use strict";
const common_vendor = require("../vendor.js");
const store_login = require("../../store/login.js");
const tokenResponseInterceptor = (response) => {
  let loginStore = store_login.useLoginStatusStore();
  if (response.headers.authorization) {
    loginStore.token = response.headers.authorization;
  }
  return response;
};
const tokenRequestInterceptor = (request) => {
  let loginStore = store_login.useLoginStatusStore();
  if (loginStore.token) {
    request.headers.authorization = `Bearer ${loginStore.token}`;
  }
  return request;
};
const defaultResponseInterceptors = (response) => {
  var _a, _b, _c;
  if (((_a = response == null ? void 0 : response.data) == null ? void 0 : _a.code) === 400) {
    alert(response.data.message);
    return Promise.reject();
  }
  if (((_b = response == null ? void 0 : response.data) == null ? void 0 : _b.code) === 401) {
    let loginStore = store_login.useLoginStatusStore();
    loginStore.logout();
    common_vendor.index.reLaunch({
      url: "/pages/login/login"
    });
    common_vendor.index.showToast({
      icon: null,
      title: "请重新登录"
    });
    return Promise.reject();
  }
  if (response.data.code == 0) {
    return response;
  }
  alert((_c = response == null ? void 0 : response.data) == null ? void 0 : _c.message);
  throw new Error(response);
};
exports.defaultResponseInterceptors = defaultResponseInterceptors;
exports.tokenRequestInterceptor = tokenRequestInterceptor;
exports.tokenResponseInterceptor = tokenResponseInterceptor;

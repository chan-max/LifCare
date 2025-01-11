"use strict";
const common_vendor = require("../common/vendor.js");
const common_hooks_storage = require("../common/hooks/storage.js");
const common_api_api = require("../common/api/api.js");
const doLoginAction = (data, once = false) => {
  const now = (/* @__PURE__ */ new Date()).getTime();
  const { token } = data;
  const loginStatusStore = useLoginStatusStore();
  loginStatusStore.isLogin = true;
  loginStatusStore.loginTime = now;
  loginStatusStore.once = once;
  loginStatusStore.token = token;
  loginStatusStore.getUserInfo();
};
const doLogout = async () => {
  await common_api_api.Api.logout();
  const loginStatusStore = useLoginStatusStore();
  loginStatusStore.isLogin = false;
  loginStatusStore.userInfo = null;
  loginStatusStore.loginTime = null;
};
const useLoginStatusStore = common_vendor.defineStore("login_status", () => {
  const isLogin = common_vendor.ref(false);
  const loginTime = common_vendor.ref();
  const userInfo = common_vendor.ref();
  const token = common_hooks_storage.useLocalStorage("token", "");
  const once = common_vendor.ref();
  const isAdmin = common_vendor.ref(false);
  if (token.value) {
    isLogin.value = true;
  }
  async function getUserInfo() {
    const loginStore = useLoginStatusStore();
    const res = await common_api_api.Api.getUserInfo();
    const _userInfo = res.data;
    if (_userInfo) {
      userInfo.value = _userInfo;
      loginStore.isAdmin = _userInfo.isAdmin;
      isLogin.value = true;
    } else {
      isLogin.value = false;
    }
  }
  function logout() {
    isLogin.value = false;
    userInfo.value = null;
    token.value = null;
  }
  return {
    isLogin,
    //
    userInfo,
    loginTime,
    token,
    once,
    isAdmin,
    logout,
    getUserInfo
  };
});
async function initLoginStoreUserInfo() {
  const loginStore = useLoginStatusStore();
  if (loginStore.isLogin) {
    await common_vendor.to(loginStore.getUserInfo());
  }
}
exports.doLoginAction = doLoginAction;
exports.doLogout = doLogout;
exports.initLoginStoreUserInfo = initLoginStoreUserInfo;
exports.useLoginStatusStore = useLoginStatusStore;

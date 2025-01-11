"use strict";
const common_vendor = require("../../common/vendor.js");
const common_api_api = require("../../common/api/api.js");
const store_login = require("../../store/login.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  setup() {
    const username = common_vendor.ref("");
    const password = common_vendor.ref("");
    const loginLoading = common_vendor.ref(false);
    const showLoginModal = common_vendor.ref(false);
    const handleLogin = async () => {
      try {
        loginLoading.value = true;
        const res = await common_api_api.Api.login({
          username: username.value,
          password: password.value
        });
        if (res && res.data) {
          store_login.doLoginAction(res.data);
          common_vendor.index.showToast({
            title: "登录成功",
            icon: "success"
          });
          showLoginModal.value = false;
          common_vendor.index.switchTab({
            url: "/pages/home/home"
          });
        } else {
          throw new Error("登录失败");
        }
      } catch (error) {
        console.log(error);
        common_vendor.index.showToast({
          title: "登录失败，请检查账号或密码",
          icon: "none"
        });
      } finally {
        loginLoading.value = false;
      }
    };
    function goSignup() {
      common_vendor.index.redirectTo({
        url: "/pages/login/signup"
      });
    }
    return {
      username,
      password,
      loginLoading,
      handleLogin,
      showLoginModal,
      goSignup
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_assets._imports_0,
    b: $setup.username,
    c: common_vendor.o(($event) => $setup.username = $event.detail.value),
    d: $setup.password,
    e: common_vendor.o(($event) => $setup.password = $event.detail.value),
    f: common_vendor.t($setup.loginLoading ? "登录中..." : "登录"),
    g: $setup.loginLoading,
    h: common_vendor.o((...args) => $setup.handleLogin && $setup.handleLogin(...args)),
    i: common_vendor.o((...args) => $setup.goSignup && $setup.goSignup(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-e4e4508d"]]);
tt.createPage(MiniProgramPage);

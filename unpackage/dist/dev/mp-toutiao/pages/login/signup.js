"use strict";
const common_vendor = require("../../common/vendor.js");
const common_api_api = require("../../common/api/api.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  setup() {
    const username = common_vendor.ref("");
    const password = common_vendor.ref("");
    const confirmPassword = common_vendor.ref("");
    const signupLoading = common_vendor.ref(false);
    const handleSignup = async () => {
      if (password.value !== confirmPassword.value) {
        common_vendor.index.showToast({
          title: "两次输入的密码不一致",
          icon: "none"
        });
        return;
      }
      try {
        signupLoading.value = true;
        const res = await common_api_api.Api.signup({
          username: username.value,
          password: password.value
        });
        if (res && res.data) {
          common_vendor.index.showToast({
            title: "注册成功",
            icon: "success"
          });
          common_vendor.index.redirectTo({
            url: "/pages/login/login"
          });
        } else {
          throw new Error("注册失败");
        }
      } catch (error) {
        console.log(error);
        common_vendor.index.showToast({
          title: "注册失败，请重试",
          icon: "none"
        });
      } finally {
        signupLoading.value = false;
      }
    };
    function goLogin() {
      common_vendor.index.redirectTo({
        url: "/pages/login/login"
      });
    }
    return {
      username,
      password,
      confirmPassword,
      signupLoading,
      handleSignup,
      goLogin
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
    f: $setup.confirmPassword,
    g: common_vendor.o(($event) => $setup.confirmPassword = $event.detail.value),
    h: common_vendor.t($setup.signupLoading ? "注册中..." : "注册"),
    i: $setup.signupLoading,
    j: common_vendor.o((...args) => $setup.handleSignup && $setup.handleSignup(...args)),
    k: common_vendor.o((...args) => $setup.goLogin && $setup.goLogin(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-e3975d0a"]]);
tt.createPage(MiniProgramPage);

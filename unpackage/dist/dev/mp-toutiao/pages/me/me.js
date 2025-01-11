"use strict";
const common_vendor = require("../../common/vendor.js");
const store_login = require("../../store/login.js");
const _sfc_main = {
  __name: "me",
  setup(__props) {
    const loginStore = store_login.useLoginStatusStore();
    function logout() {
      store_login.doLogout();
    }
    function goUpdate() {
      common_vendor.index.navigateTo({
        url: "/pages/me/update"
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(common_vendor.unref(loginStore).userInfo),
        b: common_vendor.o(logout),
        c: common_vendor.o(goUpdate)
      };
    };
  }
};
tt.createPage(_sfc_main);

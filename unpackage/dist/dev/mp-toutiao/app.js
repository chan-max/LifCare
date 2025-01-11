"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
const store_login = require("./store/login.js");
const store_config = require("./store/config.js");
const store_index = require("./store/index.js");
if (!Math) {
  "./pages/home/home.js";
  "./pages/record/record.js";
  "./pages/record/sleep/sleep.js";
  "./pages/record/sleep/record.js";
  "./pages/record/sleep/analyze.js";
  "./pages/record/height/record.js";
  "./pages/record/walk/record.js";
  "./pages/record/luck/record.js";
  "./pages/record/weight/record.js";
  "./pages/record/mood/record.js";
  "./pages/record/smoke/record.js";
  "./pages/record/period/record.js";
  "./pages/workspace/workspace.js";
  "./pages/analyze/analyze.js";
  "./pages/me/me.js";
  "./pages/login/login.js";
  "./pages/login/signup.js";
  "./pages/me/update.js";
}
const _sfc_main = {
  onLaunch: function() {
    store_login.initLoginStoreUserInfo();
    store_config.initConfigStoreBasicConfig();
    const loginStore = store_login.useLoginStatusStore();
    if (loginStore.isLogin) {
      common_vendor.index.reLaunch({
        url: "/pages/home/home"
      });
    } else {
      common_vendor.index.reLaunch({
        url: "/pages/login/login"
      });
    }
  }
};
function createApp() {
  new common_vendor.VConsole();
  const app = common_vendor.createSSRApp(_sfc_main);
  app.use(store_index.store);
  app.config.globalProperties.$adpid = "1111111111";
  app.config.globalProperties.$backgroundAudioData = {
    playing: false,
    playTime: 0,
    formatedPlayTime: "00:00:00"
  };
  app.use(common_vendor.createPinia());
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;

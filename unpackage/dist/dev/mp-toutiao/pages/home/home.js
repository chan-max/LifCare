"use strict";
const common_vendor = require("../../common/vendor.js");
const store_login = require("../../store/login.js");
const common_welcome = require("../../common/welcome.js");
const common_api_api = require("../../common/api/api.js");
if (!Math) {
  ChartLifePercent();
}
const ChartLifePercent = () => "../../components/chart/life-percent.js";
const _sfc_main = {
  __name: "home",
  setup(__props) {
    let loginStore = store_login.useLoginStatusStore();
    let dayrecord = common_vendor.ref({});
    async function init() {
      common_api_api.Api.getDayrecord().then((res) => {
        dayrecord.value = res;
      });
    }
    common_vendor.onBeforeMount(init);
    return (_ctx, _cache) => {
      var _a, _b, _c, _d, _e, _f, _g, _h;
      return {
        a: common_vendor.t(common_vendor.unref(common_welcome.getGreeting)()),
        b: ((_b = (_a = common_vendor.unref(loginStore)) == null ? void 0 : _a.userInfo) == null ? void 0 : _b.gender) == "0" ? "/static/img/male.png" : "/static/img/female.png",
        c: common_vendor.t(((_d = (_c = common_vendor.unref(loginStore)) == null ? void 0 : _c.userInfo) == null ? void 0 : _d.name) || ((_f = (_e = common_vendor.unref(loginStore)) == null ? void 0 : _e.userInfo) == null ? void 0 : _f.username)),
        d: ((_h = (_g = common_vendor.unref(loginStore)) == null ? void 0 : _g.userInfo) == null ? void 0 : _h.avatar) || "/static/img/default-avatar.png"
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-07e72d3c"]]);
tt.createPage(MiniProgramPage);

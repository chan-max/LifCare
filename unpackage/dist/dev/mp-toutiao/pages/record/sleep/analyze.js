"use strict";
const common_vendor = require("../../../common/vendor.js");
const common_api_api = require("../../../common/api/api.js");
const _sfc_main = {
  __name: "analyze",
  setup(__props) {
    const store = common_vendor.ref({});
    common_vendor.onBeforeMount(() => {
      common_api_api.Api.getSleepCustomInfo().then((res) => {
        store.value = res;
      });
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(store.value.totalSleepDays),
        b: common_vendor.t(store.value.totalSleepHours),
        c: common_vendor.t(store.value.totalSleepSegments),
        d: common_vendor.t(store.value.averageSleepSegments),
        e: common_vendor.t(store.value.averageSleepHours)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-70dba725"]]);
tt.createPage(MiniProgramPage);

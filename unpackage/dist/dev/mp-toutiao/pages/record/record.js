"use strict";
const common_vendor = require("../../common/vendor.js");
const common_enum_record = require("../../common/enum/record.js");
const common_api_api = require("../../common/api/api.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  __name: "record",
  setup(__props) {
    const store = common_vendor.ref({
      height: "",
      weight: "",
      dayrecord: {},
      dayrecordSleepCount: 0,
      totalSmokeCount: 0
    });
    common_vendor.ref({});
    async function init() {
      common_api_api.Api.getMyLatestHeightRecords().then((res) => {
        store.value.height = res == null ? void 0 : res.height;
      });
      common_api_api.Api.getMyLatestWeightRecords().then((res) => {
        store.value.weight = res == null ? void 0 : res.weight;
      });
      common_api_api.Api.getDayrecord().then((res) => {
        store.value.dayrecordSleepCount = res.record.filter((item) => item.type == "sleep").length;
        store.value.totalSmokeCount = res.record.reduce((res2, item) => {
          if (item.type == "smoke") {
            res2 += item.smokeCount;
          }
          return res2;
        }, 0);
      });
    }
    common_vendor.onShow(() => {
      init();
    });
    const activeIndex = common_vendor.ref(-1);
    function onTouchStart(index) {
      activeIndex.value = index;
    }
    function onTouchEnd() {
      activeIndex.value = -1;
    }
    function goToPage(type) {
      common_vendor.index.navigateTo({
        url: `/pages/record/${type}/record`
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(common_vendor.unref(common_enum_record.RecordTypeOptions), (item, index, i0) => {
          return common_vendor.e({
            a: item.logo,
            b: common_vendor.t(item.label),
            c: item.type == "sleep"
          }, item.type == "sleep" ? common_vendor.e({
            d: store.value.dayrecordSleepCount
          }, store.value.dayrecordSleepCount ? {
            e: common_vendor.t(store.value.dayrecordSleepCount)
          } : {}) : {}, {
            f: item.type == "height"
          }, item.type == "height" ? {
            g: common_vendor.t(store.value.height ? `${store.value.height} cm` : "未记录")
          } : {}, {
            h: item.type == "weight"
          }, item.type == "weight" ? {
            i: common_vendor.t(store.value.weight ? `${store.value.weight} kg` : "未记录")
          } : {}, {
            j: item.type == "period"
          }, item.type == "period" ? {} : {}, {
            k: item.type == "smoke"
          }, item.type == "smoke" ? {
            l: common_vendor.t(store.value.totalSmokeCount)
          } : {}, {
            m: "ef6850c5-0-" + i0,
            n: index,
            o: common_vendor.o(($event) => goToPage(item.type)),
            p: activeIndex.value === index ? 1 : "",
            q: common_vendor.o(($event) => onTouchStart(index))
          });
        }),
        b: common_vendor.p({
          type: "right",
          size: "16",
          color: "#ccc"
        }),
        c: common_vendor.o(onTouchEnd)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-ef6850c5"]]);
tt.createPage(MiniProgramPage);

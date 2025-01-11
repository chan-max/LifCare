"use strict";
const common_vendor = require("../../../common/vendor.js");
const common_date = require("../../../common/date.js");
const common_api_api = require("../../../common/api/api.js");
if (!Array) {
  const _easycom_uni_calendar2 = common_vendor.resolveComponent("uni-calendar");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_ua_timeline_item2 = common_vendor.resolveComponent("ua-timeline-item");
  const _easycom_ua_timeline2 = common_vendor.resolveComponent("ua-timeline");
  (_easycom_uni_calendar2 + _easycom_uni_icons2 + _easycom_ua_timeline_item2 + _easycom_ua_timeline2)();
}
const _easycom_uni_calendar = () => "../../../uni_modules/uni-calendar/components/uni-calendar/uni-calendar.js";
const _easycom_uni_icons = () => "../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_ua_timeline_item = () => "../../../components/ua-timeline-item/ua-timeline-item.js";
const _easycom_ua_timeline = () => "../../../components/ua-timeline/ua-timeline.js";
if (!Math) {
  (_easycom_uni_calendar + _easycom_uni_icons + _easycom_ua_timeline_item + _easycom_ua_timeline)();
}
const _sfc_main = {
  __name: "record",
  setup(__props) {
    function change(e) {
      initDayrecord(e.fulldate);
    }
    common_vendor.ref("2025-1-1");
    common_vendor.ref("2025-1-7");
    const dayrecord = common_vendor.ref({});
    const selected = common_vendor.ref([]);
    async function initCalendar(e) {
      let {
        year,
        month
      } = e;
      let predict = await common_api_api.Api.getPredictPeriodMonthly(year, month);
      let res = predict.map((item) => {
        return {
          date: item.date,
          info: "预测",
          class: "period-predict-highlight"
        };
      });
      selected.value = res;
    }
    async function addRecord(datekey = common_date.getDayRecordDateKey()) {
      const record = {
        type: "period"
      };
      await common_api_api.Api.addDayrecordDetail(datekey, {
        ...record
      });
      common_vendor.index.showToast({
        title: "生理期记录成功",
        icon: "success"
      });
      initCurrentMonth();
      initDayrecord(datekey);
    }
    function initCurrentMonth() {
      let [year, month] = common_date.getDayRecordDateKey().split("-");
      initCalendar({
        year,
        month
      });
    }
    async function initDayrecord(datekey = common_date.getDayRecordDateKey()) {
      let res = await common_api_api.Api.getDayrecord(datekey);
      res.record = res.record.slice().reverse().filter((item) => item.type == "period");
      dayrecord.value = res;
    }
    async function deleteRecord(item) {
      await common_api_api.Api.deleteDayrecordDetail({
        id: item.id,
        pid: dayrecord.value.id
      });
      common_vendor.index.showToast({
        title: "删除成功",
        icon: "success"
      });
      initCurrentMonth();
      initDayrecord(dayrecord.value.date);
    }
    common_vendor.onBeforeMount(() => {
      initCurrentMonth();
      initDayrecord();
    });
    return (_ctx, _cache) => {
      var _a;
      return {
        a: common_vendor.o(change),
        b: common_vendor.o(initCalendar),
        c: common_vendor.p({
          selected: selected.value,
          showMonth: false
        }),
        d: common_vendor.o(($event) => addRecord(dayrecord.value.date)),
        e: common_vendor.t(dayrecord.value.date),
        f: common_vendor.f((_a = dayrecord.value) == null ? void 0 : _a.record, (record, index, i0) => {
          return {
            a: common_vendor.o(($event) => deleteRecord(record)),
            b: "2382266c-3-" + i0 + "," + ("2382266c-2-" + i0),
            c: "2382266c-2-" + i0 + ",2382266c-1",
            d: common_vendor.p({
              timestamp: "记录时间: " + common_vendor.unref(common_date.formatDate)(record == null ? void 0 : record.createTime),
              lineType: "dotted"
            }),
            e: record == null ? void 0 : record.id
          };
        }),
        g: common_vendor.p({
          type: "closeempty",
          size: "16",
          color: "#ccc"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-2382266c"]]);
tt.createPage(MiniProgramPage);

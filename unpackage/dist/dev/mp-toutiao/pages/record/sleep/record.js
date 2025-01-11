"use strict";
const common_vendor = require("../../../common/vendor.js");
const common_api_api = require("../../../common/api/api.js");
const common_date = require("../../../common/date.js");
const timeCircle = () => "./time-circle.js";
const _sfc_main = {
  components: {
    timeCircle
  },
  data() {
    return {
      datekey: common_date.getDayRecordDateKey(),
      dateRange: [],
      sleepDurationText: "共8小时",
      sleepRecords: [],
      dayrecord: {},
      // 今天记录的睡眠记录
      todaySleepRecords: [],
      timePresets: [
        // Existing presets
        {
          label: "昨晚23:00-今早7:00",
          start: this.getYesterdayAt(23, 0),
          end: this.getTodayAt(7, 0)
        },
        {
          label: "昨晚00:00-今早8:00",
          start: this.getYesterdayAt(24, 0),
          end: this.getTodayAt(8, 0)
        },
        {
          label: "今天1:00到今天9:00",
          start: this.getTodayAt(1, 0),
          end: this.getTodayAt(9, 0)
        },
        {
          label: "近半小时",
          start: this.getRelativeTime(-30),
          end: /* @__PURE__ */ new Date()
        },
        {
          label: "近十分钟",
          start: this.getRelativeTime(-10),
          end: /* @__PURE__ */ new Date()
        },
        {
          label: "近一小时",
          start: this.getRelativeTime(-60),
          end: /* @__PURE__ */ new Date()
        },
        {
          label: "最近两小时",
          start: this.getRelativeTime(-120),
          end: /* @__PURE__ */ new Date()
        },
        {
          label: "近五分钟",
          start: this.getRelativeTime(-5),
          end: /* @__PURE__ */ new Date()
        },
        // Added more presets
        {
          label: "昨晚10:00-早上6:00",
          start: this.getYesterdayAt(22, 0),
          end: this.getTodayAt(6, 0)
        },
        {
          label: "昨晚21:00-今早5:00",
          start: this.getYesterdayAt(21, 0),
          end: this.getTodayAt(5, 0)
        },
        {
          label: "中午12:00-下午14:00",
          start: this.getTodayAt(12, 0),
          end: this.getTodayAt(14, 0)
        },
        {
          label: "今晚20:00-今早4:00",
          start: this.getYesterdayAt(20, 0),
          end: this.getTodayAt(4, 0)
        },
        {
          label: "早上5:00-中午11:00",
          start: this.getTodayAt(5, 0),
          end: this.getTodayAt(11, 0)
        }
      ]
    };
  },
  beforeMount() {
    this.init();
  },
  mounted() {
    setTimeout(() => {
      const yesterday = this.getYesterdayAt(23, 0);
      const todayMorning = this.getTodayAt(7, 0);
      this.dateRange = [common_date.formatDate(yesterday), common_date.formatDate(todayMorning)];
      this.updateSleepDuration();
    });
  },
  methods: {
    formatDate: common_date.formatDate,
    async init() {
      let dayrecord = await common_api_api.Api.getDayrecord();
      let todaySleepRecords = dayrecord.record.filter((item) => item.type == "sleep");
      todaySleepRecords = todaySleepRecords.sort((a, b) => new Date(b.createTime).getTime() - new Date(a.createTime).getTime());
      todaySleepRecords.forEach((item) => item.pid = dayrecord.id);
      this.todaySleepRecords = todaySleepRecords;
      this.dayrecord = dayrecord;
    },
    getYesterdayAt(hour, minute) {
      const date = /* @__PURE__ */ new Date();
      date.setDate(date.getDate() - 1);
      date.setHours(hour, minute, 0, 0);
      return date;
    },
    getTodayAt(hour, minute) {
      const date = /* @__PURE__ */ new Date();
      date.setHours(hour, minute, 0, 0);
      return date;
    },
    getRelativeTime(minutes) {
      const date = /* @__PURE__ */ new Date();
      date.setMinutes(date.getMinutes() + minutes);
      return date;
    },
    applyPreset(preset) {
      this.dateRange = [common_date.formatDate(preset.start), common_date.formatDate(preset.end)];
      this.updateSleepDuration();
    },
    getTimeRangeLabel(startTime, endTime) {
      startTime = new Date(startTime);
      endTime = new Date(endTime);
      const durationMs = endTime - startTime;
      const durationHours = Math.floor(durationMs / 1e3 / 60 / 60);
      const durationMinutes = Math.floor(durationMs / 1e3 / 60 % 60);
      return `${durationHours}小时${durationMinutes}分钟`;
    },
    updateSleepDuration() {
      const startTime = new Date(this.dateRange[0]);
      const endTime = new Date(this.dateRange[1]);
      if (endTime > startTime) {
        const durationMs = endTime - startTime;
        const durationHours = Math.floor(durationMs / 1e3 / 60 / 60);
        const durationMinutes = Math.floor(durationMs / 1e3 / 60 % 60);
        this.sleepDurationText = `共${durationHours}小时${durationMinutes}分钟`;
      } else {
        this.sleepDurationText = "结束时间需要晚于起始时间";
      }
    },
    onDateRangeConfirm() {
      setTimeout(() => {
        this.updateSleepDuration();
      }, 33);
    },
    removeYear(datetime) {
      const result = datetime == null ? void 0 : datetime.replace(/^\d{4}-/, "");
      return result;
    },
    async addRecord() {
      const record = {
        type: "sleep",
        startTime: this.dateRange[0],
        endTime: this.dateRange[1]
      };
      await common_api_api.Api.addDayrecordDetail(this.datekey, {
        ...record
      });
      common_vendor.index.showToast({
        title: "记录成功",
        icon: "success"
      });
      this.init();
    },
    // 删除记录
    async deleteRecord(item) {
      await common_api_api.Api.deleteDayrecordDetail({
        id: item.id,
        pid: item.pid
      });
      common_vendor.index.showToast({
        title: "删除成功",
        icon: "success"
      });
      this.init();
    },
    goSleepAnalyze() {
      common_vendor.index.navigateTo({
        url: "/pages/record/sleep/analyze"
      });
    }
  }
};
if (!Array) {
  const _component_timeCircle = common_vendor.resolveComponent("timeCircle");
  const _easycom_uni_datetime_picker2 = common_vendor.resolveComponent("uni-datetime-picker");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_ua_timeline_item2 = common_vendor.resolveComponent("ua-timeline-item");
  const _easycom_ua_timeline2 = common_vendor.resolveComponent("ua-timeline");
  (_component_timeCircle + _easycom_uni_datetime_picker2 + _easycom_uni_icons2 + _easycom_ua_timeline_item2 + _easycom_ua_timeline2)();
}
const _easycom_uni_datetime_picker = () => "../../../uni_modules/uni-datetime-picker/components/uni-datetime-picker/uni-datetime-picker.js";
const _easycom_uni_icons = () => "../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_ua_timeline_item = () => "../../../components/ua-timeline-item/ua-timeline-item.js";
const _easycom_ua_timeline = () => "../../../components/ua-timeline/ua-timeline.js";
if (!Math) {
  (_easycom_uni_datetime_picker + _easycom_uni_icons + _easycom_ua_timeline_item + _easycom_ua_timeline)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      startTime: $data.dateRange[0],
      endTime: $data.dateRange[1]
    }),
    b: common_vendor.t($data.datekey),
    c: common_vendor.t($options.removeYear($data.dateRange[0])),
    d: common_vendor.t($options.removeYear($data.dateRange[1])),
    e: common_vendor.o($options.onDateRangeConfirm),
    f: common_vendor.o(($event) => $data.dateRange = $event),
    g: common_vendor.p({
      type: "datetimerange",
      label: "睡眠时间范围",
      modelValue: $data.dateRange
    }),
    h: common_vendor.t($data.sleepDurationText),
    i: common_vendor.o((...args) => $options.addRecord && $options.addRecord(...args)),
    j: common_vendor.f($data.timePresets, (preset, index, i0) => {
      return {
        a: common_vendor.t(preset.label),
        b: index,
        c: common_vendor.o(($event) => $options.applyPreset(preset))
      };
    }),
    k: common_vendor.f($data.todaySleepRecords, (record, index, i0) => {
      return {
        a: common_vendor.t(record.startTime),
        b: common_vendor.t(record.endTime),
        c: common_vendor.t($options.getTimeRangeLabel(record.startTime, record.endTime)),
        d: common_vendor.o(($event) => $options.deleteRecord(record)),
        e: "137f42ba-4-" + i0 + "," + ("137f42ba-3-" + i0),
        f: "137f42ba-3-" + i0 + ",137f42ba-2",
        g: common_vendor.p({
          timestamp: "记录时间: " + $options.formatDate(record.createTime),
          lineType: "dotted"
        }),
        h: record.id
      };
    }),
    l: common_vendor.p({
      type: "closeempty",
      size: "16",
      color: "#ccc"
    }),
    m: common_vendor.o((...args) => $options.goSleepAnalyze && $options.goSleepAnalyze(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-137f42ba"]]);
tt.createPage(MiniProgramPage);

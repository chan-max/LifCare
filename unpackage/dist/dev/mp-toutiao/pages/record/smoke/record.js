"use strict";
const common_vendor = require("../../../common/vendor.js");
const common_date = require("../../../common/date.js");
const common_api_api = require("../../../common/api/api.js");
const _sfc_main = {
  data() {
    const now = /* @__PURE__ */ new Date();
    const smokeTimeOptions = [
      {
        label: "刚刚",
        value: now.toISOString()
      },
      {
        label: "五分钟前",
        value: new Date(now.getTime() - 5 * 60 * 1e3).toISOString()
      },
      {
        label: "十分钟前",
        value: new Date(now.getTime() - 10 * 60 * 1e3).toISOString()
      },
      {
        label: "十五分钟前",
        value: new Date(now.getTime() - 15 * 60 * 1e3).toISOString()
      },
      {
        label: "半小时前",
        value: new Date(now.getTime() - 30 * 60 * 1e3).toISOString()
      },
      {
        label: "一小时前",
        value: new Date(now.getTime() - 60 * 60 * 1e3).toISOString()
      }
    ];
    return {
      datekey: common_date.getDayRecordDateKey(),
      // 吸烟支数选项
      smokeCountOptions: [
        {
          label: "1 支",
          value: 1
        },
        {
          label: "2 支",
          value: 2
        },
        {
          label: "半支",
          value: 0.5
        },
        {
          label: "1/4 支",
          value: 0.25
        }
      ],
      // 吸烟时间选项
      smokeTimeOptions,
      // 选择器的当前值
      pickerValue: [0, 0],
      // [支数索引, 时间索引]
      // 保存的记录
      savedRecord: null,
      dayrecord: {},
      smokeRecords: []
    };
  },
  beforeMount() {
    this.init();
  },
  methods: {
    formatDate: common_date.formatDate,
    // 处理 Picker 的值变化
    onPickerChange(e) {
      this.pickerValue = e.detail.value;
    },
    async init() {
      let dayrecord = await common_api_api.Api.getDayrecord();
      let smokeRecords = dayrecord.record.filter((item) => item.type == "smoke");
      smokeRecords = smokeRecords.sort((a, b) => new Date(b.createTime).getTime() - new Date(a.createTime).getTime());
      smokeRecords.forEach((item) => item.pid = dayrecord.id);
      this.smokeRecords = smokeRecords;
      this.dayrecord = dayrecord;
    },
    async addRecord() {
      const [countIndex, timeIndex] = this.pickerValue;
      const smokeCount = this.smokeCountOptions[countIndex];
      const smokeTime = this.smokeTimeOptions[timeIndex];
      this.savedRecord = {
        smokeCountLabel: smokeCount.label,
        smokeCountValue: smokeCount.value,
        smokeTimeLabel: smokeTime.label,
        smokeTimeValue: smokeTime.value
      };
      const record = {
        type: "smoke",
        smokeCount: smokeCount.value,
        smokeTime: smokeTime.value
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
    }
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_ua_timeline_item2 = common_vendor.resolveComponent("ua-timeline-item");
  const _easycom_ua_timeline2 = common_vendor.resolveComponent("ua-timeline");
  (_easycom_uni_icons2 + _easycom_ua_timeline_item2 + _easycom_ua_timeline2)();
}
const _easycom_uni_icons = () => "../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_ua_timeline_item = () => "../../../components/ua-timeline-item/ua-timeline-item.js";
const _easycom_ua_timeline = () => "../../../components/ua-timeline/ua-timeline.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_ua_timeline_item + _easycom_ua_timeline)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.smokeCountOptions, (option, index, i0) => {
      return {
        a: common_vendor.t(option.label),
        b: index
      };
    }),
    b: common_vendor.f($data.smokeTimeOptions, (option, index, i0) => {
      return {
        a: common_vendor.t(option.label),
        b: index
      };
    }),
    c: $data.pickerValue,
    d: common_vendor.o((...args) => $options.onPickerChange && $options.onPickerChange(...args)),
    e: common_vendor.o((...args) => $options.addRecord && $options.addRecord(...args)),
    f: common_vendor.f($data.smokeRecords, (record, index, i0) => {
      return {
        a: common_vendor.t($options.formatDate(record.smokeTime)),
        b: common_vendor.t(record.smokeCount),
        c: common_vendor.o(($event) => $options.deleteRecord(record)),
        d: "e13cb77f-2-" + i0 + "," + ("e13cb77f-1-" + i0),
        e: "e13cb77f-1-" + i0 + ",e13cb77f-0",
        f: common_vendor.p({
          timestamp: "记录时间: " + $options.formatDate(record.createTime),
          lineType: "dotted"
        }),
        g: record.id
      };
    }),
    g: common_vendor.p({
      type: "closeempty",
      size: "16",
      color: "#ccc"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-e13cb77f"]]);
tt.createPage(MiniProgramPage);

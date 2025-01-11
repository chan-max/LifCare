"use strict";
const common_vendor = require("../../../common/vendor.js");
const common_date = require("../../../common/date.js");
const common_api_api = require("../../../common/api/api.js");
const _sfc_main = {
  computed: {
    currentLuck() {
      return this.luckOptions.find((option) => option.level == this.luckRecordScore);
    }
  },
  data() {
    return {
      luckRecords: [],
      luckRecordScore: 5,
      luckOptions: [
        {
          level: 1,
          title: "非常差",
          description: "您最近的运气似乎非常差，或许尝试换换生活方式"
        },
        {
          level: 2,
          title: "较差",
          description: "近期有些不顺，但不要灰心，多注意细节"
        },
        {
          level: 3,
          title: "稍差",
          description: "虽然有些问题，但通过努力可以改善"
        },
        {
          level: 4,
          title: "一般",
          description: "运气平平，无需担忧，专注于当前目标"
        },
        {
          level: 5,
          title: "尚可",
          description: "运气还不错，抓住机会提升自己"
        },
        {
          level: 6,
          title: "较好",
          description: "事情正在变好，保持积极心态"
        },
        {
          level: 7,
          title: "很好",
          description: "运气颇佳，多尝试新事物"
        },
        {
          level: 8,
          title: "极好",
          description: "几乎事事顺利，继续保持努力"
        },
        {
          level: 9,
          title: "非常好",
          description: "极为幸运，尝试挑战更大的目标"
        }
      ]
    };
  },
  beforeMount() {
    this.init();
  },
  methods: {
    formatDate: common_date.formatDate,
    async init() {
      common_vendor.index.showLoading({
        title: "Loading...",
        mask: true
      });
      let res = await common_api_api.Api.getMyMonthlyRecordDetail("luck");
      this.luckRecords = res.slice().reverse();
      setTimeout(() => {
        this.loadChart();
        common_vendor.index.hideLoading();
      }, 33);
    },
    onRateChange(value) {
      this.luckRecordScore = Number(value.value);
    },
    async addRecord() {
      const record = {
        type: "luck",
        score: this.luckRecordScore
      };
      let datekey = common_date.getDayRecordDateKey();
      await common_api_api.Api.addDayrecordDetail(datekey, {
        ...record
      });
      common_vendor.index.showToast({
        title: "记录成功",
        icon: "success"
      });
      this.init();
    },
    async loadChart() {
      if (!this.$refs.chartRef)
        return;
      const myChart = await this.$refs.chartRef.init(common_vendor.echarts);
      const chartData = this.luckRecords.slice().reverse().map((record) => ({
        timestamp: record.createTime,
        score: record.score
      }));
      const option = {
        tooltip: {
          trigger: "axis",
          // 鼠标悬停显示数据
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985"
            }
          }
        },
        xAxis: {
          type: "category",
          data: chartData.map((data) => common_date.formatDate(data.timestamp)),
          // 使用格式化的日期数据
          axisLine: {
            show: false,
            // 显示 x 轴
            lineStyle: {
              color: "#ccc"
            }
          },
          axisLabel: {
            show: true,
            // 显示 x 轴标签
            color: "#666",
            // 标签颜色
            formatter: (val) => {
              return val.split(" ")[0];
            }
            // 设置单位
          },
          axisTick: {
            show: true
            // 显示 x 轴刻度
          },
          // name: '日期', // x 轴标题
          nameTextStyle: {
            color: "#666",
            fontSize: 14
          }
        },
        yAxis: {
          type: "value",
          axisLine: {
            show: false,
            // 显示 y 轴
            lineStyle: {
              color: "#ccc"
            }
          },
          axisLabel: {
            show: true,
            // 显示 y 轴标签
            color: "#666",
            // 标签颜色
            formatter: "{value}"
            // 设置单位
          },
          axisTick: {
            show: true
            // 显示 y 轴刻度
          },
          // name: '', // y 轴标题
          nameTextStyle: {
            color: "#666",
            fontSize: 14
          }
        },
        series: [{
          data: chartData.map((data) => data.score),
          type: "line",
          smooth: true,
          // 平滑曲线
          itemStyle: {
            color: "#ea4c89"
            // 曲线颜色
          },
          lineStyle: {
            width: 2,
            // 线条宽度
            color: "#ea4c89"
            // 曲线颜色
          },
          symbolSize: 0
          // 隐藏数据点
        }],
        grid: {
          top: "60",
          // 上边距，增加空间让标题显示完整
          right: "60",
          // 右边距
          bottom: "60",
          // 下边距
          left: "60"
          // 左边距，增加空间显示坐标轴标题
        }
      };
      myChart.setOption(option);
    },
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
  const _easycom_uni_rate2 = common_vendor.resolveComponent("uni-rate");
  const _easycom_l_echart2 = common_vendor.resolveComponent("l-echart");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_ua_timeline_item2 = common_vendor.resolveComponent("ua-timeline-item");
  const _easycom_ua_timeline2 = common_vendor.resolveComponent("ua-timeline");
  (_easycom_uni_rate2 + _easycom_l_echart2 + _easycom_uni_icons2 + _easycom_ua_timeline_item2 + _easycom_ua_timeline2)();
}
const _easycom_uni_rate = () => "../../../uni_modules/uni-rate/components/uni-rate/uni-rate.js";
const _easycom_l_echart = () => "../../../uni_modules/lime-echart/components/l-echart/l-echart.js";
const _easycom_uni_icons = () => "../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_ua_timeline_item = () => "../../../components/ua-timeline-item/ua-timeline-item.js";
const _easycom_ua_timeline = () => "../../../components/ua-timeline/ua-timeline.js";
if (!Math) {
  (_easycom_uni_rate + _easycom_l_echart + _easycom_uni_icons + _easycom_ua_timeline_item + _easycom_ua_timeline)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: _ctx.value,
    b: common_vendor.o(($event) => _ctx.value = $event.detail.value),
    c: common_vendor.o($options.onRateChange),
    d: common_vendor.p({
      value: $data.luckRecordScore,
      max: "9",
      size: 36
    }),
    e: common_vendor.t($options.currentLuck.title),
    f: common_vendor.t($options.currentLuck.description),
    g: common_vendor.o((...args) => $options.addRecord && $options.addRecord(...args)),
    h: common_vendor.sr("chartRef", "9799d2f6-1"),
    i: common_vendor.f($data.luckRecords, (record, index, i0) => {
      return {
        a: common_vendor.t(record.score),
        b: common_vendor.o(($event) => $options.deleteRecord(record)),
        c: "9799d2f6-4-" + i0 + "," + ("9799d2f6-3-" + i0),
        d: "9799d2f6-3-" + i0 + ",9799d2f6-2",
        e: common_vendor.p({
          timestamp: $options.formatDate(record.createTime),
          lineType: "dotted"
        }),
        f: record.id
      };
    }),
    j: common_vendor.p({
      type: "closeempty",
      size: "12",
      color: "#ddd"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-9799d2f6"]]);
tt.createPage(MiniProgramPage);

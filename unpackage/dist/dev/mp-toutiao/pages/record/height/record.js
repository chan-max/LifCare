"use strict";
const common_vendor = require("../../../common/vendor.js");
const common_api_api = require("../../../common/api/api.js");
const common_date = require("../../../common/date.js");
const LEchart = () => "../../../uni_modules/lime-echart/components/l-echart/l-echart.js";
const _sfc_main = {
  components: {
    lEchart: LEchart
  },
  data() {
    return {
      defaultValue: 150,
      inputHeight: 0,
      heightRecords: [],
      showDeletePopup: false,
      // 控制删除确认弹窗
      recordToDelete: null,
      // 当前待删除的记录id
      chartRef: null
      // ECharts 实例
    };
  },
  onLoad() {
    this.init();
  },
  methods: {
    formatDate: common_date.formatDate,
    // 初始化加载身高记录
    async init() {
      var _a;
      common_vendor.index.showLoading({
        title: "Loading...",
        mask: true
      });
      let res = await common_api_api.Api.getMyHeightRecords();
      res = res.sort((a, b) => new Date(b.createTime) - new Date(a.createTime));
      this.heightRecords = res;
      this.defaultValue = this.inputHeight = Number(((_a = res[0]) == null ? void 0 : _a.height) || 150);
      setTimeout(() => {
        this.loadChart();
        common_vendor.index.hideLoading();
      }, 33);
    },
    // 更新输入的身高
    change(val) {
      if (!val) {
        return;
      }
      this.inputHeight = val;
    },
    // 提交身高记录
    async submitRecord() {
      const record = {
        type: "height",
        height: this.inputHeight
      };
      let datekey = common_date.getDayRecordDateKey();
      await common_api_api.Api.addDayrecordDetail(datekey, {
        ...record
      });
      common_vendor.index.showToast({
        title: "身高记录成功",
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
    // 加载 ECharts 图表
    // 加载 ECharts 图表
    // 加载 ECharts 图表
    async loadChart() {
      if (!this.$refs.chartRef)
        return;
      const myChart = await this.$refs.chartRef.init(common_vendor.echarts);
      const chartData = this.heightRecords.slice().reverse().map((record) => ({
        timestamp: record.createTime,
        height: record.height
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
          // name: '身高', // y 轴标题
          nameTextStyle: {
            color: "#666",
            fontSize: 14
          }
        },
        series: [{
          data: chartData.map((data) => data.height),
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
    }
  },
  beforeDestroy() {
    if (this.chartInstance) {
      this.chartInstance.dispose();
    }
  }
};
if (!Array) {
  const _easycom_dlm_slide_choose2 = common_vendor.resolveComponent("dlm-slide-choose");
  const _easycom_l_echart2 = common_vendor.resolveComponent("l-echart");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_ua_timeline_item2 = common_vendor.resolveComponent("ua-timeline-item");
  const _easycom_ua_timeline2 = common_vendor.resolveComponent("ua-timeline");
  (_easycom_dlm_slide_choose2 + _easycom_l_echart2 + _easycom_uni_icons2 + _easycom_ua_timeline_item2 + _easycom_ua_timeline2)();
}
const _easycom_dlm_slide_choose = () => "../../../components/dlm-slide-choose/dlm-slide-choose.js";
const _easycom_l_echart = () => "../../../uni_modules/lime-echart/components/l-echart/l-echart.js";
const _easycom_uni_icons = () => "../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_ua_timeline_item = () => "../../../components/ua-timeline-item/ua-timeline-item.js";
const _easycom_ua_timeline = () => "../../../components/ua-timeline/ua-timeline.js";
if (!Math) {
  (_easycom_dlm_slide_choose + _easycom_l_echart + _easycom_uni_icons + _easycom_ua_timeline_item + _easycom_ua_timeline)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.t($data.inputHeight),
    b: $data.inputHeight
  }, $data.inputHeight ? {
    c: common_vendor.sr("slide", "44fe9e6f-0"),
    d: common_vendor.o($options.change),
    e: common_vendor.p({
      width: 100,
      bigItemWidth: 5,
      littleItemWidth: 5,
      defaultValue: $data.defaultValue,
      height: "300rpx",
      cellWidth: 10,
      cells: 10,
      cellNum: 1,
      startNum: 50,
      endNum: 250,
      bgColor: "linear-gradient(to right, #ea4c89, #ea4c89)",
      color: "#fff",
      bigItemHeight: 40,
      littleItemHeight: 20,
      selColor: "#0ff",
      align: "center",
      numPos: "top"
    })
  } : {}, {
    f: common_vendor.o((...args) => $options.submitRecord && $options.submitRecord(...args)),
    g: common_vendor.sr("chartRef", "44fe9e6f-1"),
    h: common_vendor.f($data.heightRecords, (record, index, i0) => {
      return {
        a: common_vendor.t(record.height),
        b: common_vendor.o(($event) => $options.deleteRecord(record)),
        c: "44fe9e6f-4-" + i0 + "," + ("44fe9e6f-3-" + i0),
        d: "44fe9e6f-3-" + i0 + ",44fe9e6f-2",
        e: common_vendor.p({
          timestamp: $options.formatDate(record.createTime),
          lineType: "dotted"
        }),
        f: record.id
      };
    }),
    i: common_vendor.p({
      type: "closeempty",
      size: "12",
      color: "#ddd"
    })
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-44fe9e6f"]]);
tt.createPage(MiniProgramPage);

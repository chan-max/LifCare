"use strict";
const common_vendor = require("../../../common/vendor.js");
if (!Math) {
  LEchart();
}
const LEchart = () => "../../../uni_modules/lime-echart/components/l-echart/l-echart.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "analyze-sleep-score",
  props: {
    value: {
      type: Number,
      required: true,
      default: 80
    }
  },
  setup(__props) {
    const props = __props;
    const chartRef = common_vendor.ref(null);
    let option = common_vendor.ref({});
    const updateChartOption = (value) => {
      option.value = {
        backgroundColor: "transparent",
        title: {
          text: `${value}分`,
          subtext: "睡眠",
          left: "center",
          top: "center",
          // top待调整
          textStyle: {
            color: "#fff",
            fontSize: 50,
            fontFamily: "DINAlternate-Bold"
          },
          subtextStyle: {
            color: "#ff",
            fontSize: 30,
            fontFamily: "PingFangSC-Regular",
            top: "center"
          },
          itemGap: -4
          // 主副标题间距
        },
        xAxis: { splitLine: { show: false }, axisLabel: { show: false }, axisLine: { show: false } },
        yAxis: { splitLine: { show: false }, axisLabel: { show: false }, axisLine: { show: false } },
        series: [
          // 内圆
          {
            type: "pie",
            radius: ["0", "50%"],
            center: ["50%", "50%"],
            hoverAnimation: false,
            z: 0,
            itemStyle: {
              normal: {
                color: new common_vendor.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#FFC600" },
                  { offset: 0.5, color: "#30D27C" },
                  { offset: 1, color: "#0B95FF" }
                ]),
                label: { show: false },
                labelLine: { show: false }
              }
            },
            label: { normal: { position: "center" } },
            data: [100]
          },
          // 进度圈
          {
            type: "pie",
            clockWise: true,
            radius: ["60%", "55%"],
            hoverAnimation: false,
            data: [
              {
                value,
                itemStyle: {
                  normal: {
                    borderWidth: 10,
                    borderColor: {
                      colorStops: [
                        { offset: 0, color: "#FFC600" },
                        { offset: 1, color: "#0B95FF" }
                      ]
                    },
                    color: {
                      colorStops: [
                        { offset: 0, color: "#FFC600" },
                        { offset: 1, color: "#0B95FF" }
                      ]
                    },
                    label: { show: false },
                    labelLine: { show: false }
                  }
                }
              },
              {
                name: "",
                value: 100 - value,
                itemStyle: {
                  normal: {
                    label: { show: false },
                    labelLine: { show: false },
                    color: "rgba(0, 0, 0, 0)",
                    borderColor: "rgba(0, 0, 0, 0)",
                    borderWidth: 0
                  }
                }
              }
            ]
          },
          // 刻度尺
          {
            type: "gauge",
            radius: "67%",
            startAngle: 225,
            endAngle: -134.8,
            z: 4,
            axisTick: { show: true, lineStyle: { width: 2, color: "rgba(1,244,255, 0.9)" } },
            splitLine: { length: 16, lineStyle: { width: 2, color: "rgba(1,244,255, 0.9)" } },
            axisLabel: { color: "rgba(255,255,255,0)", fontSize: 12 },
            pointer: { show: false },
            axisLine: { lineStyle: { opacity: 0 } },
            detail: { show: false },
            data: [{ value: 0, name: "" }]
          }
        ]
      };
    };
    common_vendor.watch(() => props.value, (newValue) => {
      if (!chartRef.value)
        return;
      updateChartOption(newValue);
      chartRef.value.init(common_vendor.echarts).then((myChart) => {
        myChart.setOption(option.value);
      });
    });
    common_vendor.onMounted(() => {
      if (!chartRef.value)
        return;
      updateChartOption(props.value);
      chartRef.value.init(common_vendor.echarts).then((myChart) => {
        myChart.setOption(option.value);
      });
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.sr(chartRef, "4dd78196-0", {
          "k": "chartRef"
        })
      };
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-4dd78196"]]);
tt.createComponent(Component);

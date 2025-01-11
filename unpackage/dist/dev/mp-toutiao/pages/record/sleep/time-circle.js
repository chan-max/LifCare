"use strict";
const common_vendor = require("../../../common/vendor.js");
if (!Math) {
  LEchart();
}
const LEchart = () => "../../../uni_modules/lime-echart/components/l-echart/l-echart.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "time-circle",
  props: {
    startTime: {
      type: String,
      default: "2024-01-01 12:00:00"
      // 默认时间值
    },
    endTime: {
      type: String,
      default: "2024-01-01 18:00:00"
      // 默认时间值
    }
  },
  setup(__props) {
    const props = __props;
    const chartRef = common_vendor.ref(null);
    function calculateTimeRange(start, end) {
      const startDate = new Date(start);
      const endDate = new Date(end);
      const timeDiff = endDate.getTime() - startDate.getTime();
      return timeDiff / (1e3 * 3600);
    }
    function calculateStartAngle(start) {
      const startDate = new Date(start);
      const hours = startDate.getHours();
      const minutes = startDate.getMinutes();
      const hourAngle = hours % 12 * 30;
      const minuteAngle = minutes / 60 * 30;
      return -(hourAngle + minuteAngle) + 90;
    }
    function calculatePercentage(start, end) {
      const totalHoursIn12Hours = 12;
      const hoursDiff = calculateTimeRange(start, end);
      return hoursDiff / totalHoursIn12Hours * 100;
    }
    const getOptions = () => {
      return {
        title: [
          {
            text: "十二小时占比",
            x: "center",
            top: "55%",
            textStyle: {
              color: "#333333",
              // 更接近黑色
              fontSize: 14,
              // 调整文字大小
              fontWeight: "100"
            }
          },
          {
            text: `${(calculatePercentage(props.startTime, props.endTime) / 1).toFixed(1)}%`,
            // 显示百分比
            x: "center",
            top: "38%",
            textStyle: {
              fontSize: "36",
              // 调整标题字体大小
              color: "#333333",
              // 更接近黑色
              fontFamily: "DINAlternate-Bold, DINAlternate",
              fontWeight: "600"
            }
          }
        ],
        backgroundColor: "transparent",
        polar: {
          radius: ["50%", "80%"],
          center: ["50%", "50%"]
        },
        angleAxis: {
          max: 360,
          show: false,
          startAngle: calculateStartAngle(props.startTime)
          // 设置起始角度
        },
        radiusAxis: {
          type: "category",
          show: true,
          axisLabel: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          }
        },
        series: [
          {
            name: "",
            type: "bar",
            roundCap: true,
            barWidth: 100,
            // 调整条形图宽度
            showBackground: true,
            backgroundStyle: {
              color: "rgba(66, 66, 66, .3)"
            },
            data: [calculatePercentage(props.startTime, props.endTime) * 3.6],
            // 使用百分比数据
            coordinateSystem: "polar",
            itemStyle: {
              normal: {
                color: new common_vendor.LinearGradient(0, 1, 0, 0, [
                  { offset: 0, color: "#16CEB9" },
                  { offset: 1, color: "#00fa00" }
                ])
              }
            }
          }
        ]
      };
    };
    const updateChart = async () => {
      if (!chartRef.value)
        return;
      const myChart = await chartRef.value.init(common_vendor.echarts);
      myChart.setOption(getOptions());
    };
    common_vendor.onMounted(() => {
      setTimeout(async () => {
        if (!chartRef.value)
          return;
        const myChart = await chartRef.value.init(common_vendor.echarts);
        myChart.setOption(getOptions());
      }, 33);
    });
    common_vendor.watch([() => props.startTime, () => props.endTime], updateChart, { immediate: true });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.sr(chartRef, "770b4e2c-0", {
          "k": "chartRef"
        })
      };
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-770b4e2c"]]);
tt.createComponent(Component);

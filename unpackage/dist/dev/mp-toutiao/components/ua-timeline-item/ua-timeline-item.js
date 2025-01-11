"use strict";
const common_vendor = require("../../common/vendor.js");
const components_uaTimelineItem_util = require("./util.js");
const _sfc_main = {
  __name: "ua-timeline-item",
  props: {
    type: { type: String, default: "" },
    // 时间戳
    timestamp: { type: String, default: "" },
    // 隐藏时间戳
    hideTimestamp: { type: [Boolean, String], default: false },
    // 时间戳位置(top / bottom)
    placement: { type: String, default: "bottom" },
    // 节点颜色
    color: String,
    // 节点图标
    icon: String,
    // 节点尺寸
    size: { type: [Number, String], default: 12 },
    // 分割线类型(solid / dashed / dotted)
    lineType: { type: String, default: "solid" },
    // 分割线颜色
    lineColor: String
  },
  emits: ["click"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const preClass = components_uaTimelineItem_util.formatCls(props, "ve__timeline-item--", ["type"]);
    const lineStyle = common_vendor.computed(() => {
      return `
			border-left-style: ${props.lineType};
			border-left-color: ${props.lineColor};
		`;
    });
    const nodeStyle = common_vendor.computed(() => {
      return `
			background: ${props.color};
			height: ${components_uaTimelineItem_util.addUnit(components_uaTimelineItem_util.Int(props.size))};
			width: ${components_uaTimelineItem_util.addUnit(components_uaTimelineItem_util.Int(props.size))};
			left: ${components_uaTimelineItem_util.Int(props.size) > 12 ? -(components_uaTimelineItem_util.Int(props.size) - 12) / 2 + "px" : (12 - components_uaTimelineItem_util.Int(props.size)) / 2 + "px"};
		`;
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.s(lineStyle.value),
        b: !_ctx.$slots.dot
      }, !_ctx.$slots.dot ? common_vendor.e({
        c: __props.icon
      }, __props.icon ? {
        d: common_vendor.n(__props.icon)
      } : {}, {
        e: common_vendor.s(nodeStyle.value)
      }) : {}, {
        f: _ctx.$slots.dot
      }, _ctx.$slots.dot ? {
        g: __props.color
      } : {}, {
        h: !common_vendor.unref(components_uaTimelineItem_util.isTrue)(__props.hideTimestamp) && __props.placement == "top"
      }, !common_vendor.unref(components_uaTimelineItem_util.isTrue)(__props.hideTimestamp) && __props.placement == "top" ? {
        i: common_vendor.t(__props.timestamp)
      } : {}, {
        j: !common_vendor.unref(components_uaTimelineItem_util.isTrue)(__props.hideTimestamp) && __props.placement == "bottom"
      }, !common_vendor.unref(components_uaTimelineItem_util.isTrue)(__props.hideTimestamp) && __props.placement == "bottom" ? {
        k: common_vendor.t(__props.timestamp)
      } : {}, {
        l: common_vendor.unref(components_uaTimelineItem_util.addUnit)(common_vendor.unref(components_uaTimelineItem_util.Int)(__props.size) / 2 - 9),
        m: common_vendor.n(common_vendor.unref(preClass))
      });
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-c7778077"]]);
tt.createComponent(Component);

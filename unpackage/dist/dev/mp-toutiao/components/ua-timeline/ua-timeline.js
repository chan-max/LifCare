"use strict";
const common_vendor = require("../../common/vendor.js");
const components_uaTimeline_util = require("./util.js");
const _sfc_main = {
  __name: "ua-timeline",
  props: {
    // 类型(card)
    type: { type: String, default: "" }
  },
  emits: ["click"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const preClass = components_uaTimeline_util.formatCls(props, "ve__timeline--", ["type"]);
    const handleClick = (e) => {
      emit("click", e);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.n(common_vendor.unref(preClass)),
        b: common_vendor.o(handleClick)
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-29d93229"]]);
tt.createComponent(Component);

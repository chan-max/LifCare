"use strict";
const common_vendor = require("../../../common/vendor.js");
const common_enum_record = require("../../../common/enum/record.js");
const _sfc_main = {
  __name: "record",
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(common_vendor.unref(common_enum_record.moodOptions)),
        b: _ctx.indicatorDots,
        c: _ctx.interval,
        d: _ctx.duration
      };
    };
  }
};
tt.createPage(_sfc_main);

"use strict";
const common_vendor = require("../../common/vendor.js");
function formatCls(props, prefix, prefixCls) {
  const mergeClass = common_vendor.computed(() => {
    let mergeCls = common_vendor.ref([]);
    let preCls;
    for (let key in props) {
      if (isArray(prefixCls) && prefixCls.includes(key) && props[key]) {
        if (isBool(props[key])) {
          if (JSON.parse(props[key])) {
            preCls = `${prefix}${key}`;
          }
        } else {
          preCls = `${prefix}${props[key]}`;
        }
        const index = mergeCls.value.findIndex((v) => v == preCls);
        if (index == -1) {
          mergeCls.value.push(preCls);
        } else {
          mergeCls.value.splice(index, 1);
        }
      }
    }
    return [...mergeCls.value].join(" ");
  });
  return mergeClass;
}
function Int(v) {
  return parseInt(v);
}
function isBool(str) {
  return /^true|false$/i.test(str);
}
function isTrue(str) {
  return /^true$/i.test(str);
}
function isArray(str) {
  return isObject(str) || Array.isArray(str);
}
function isObject(str) {
  return str != null && typeof str == "object";
}
function addUnit(value, defaultUnit = "px") {
  if (!value && value != 0)
    return "";
  if (/\%|px|rem/.test(value)) {
    return value;
  } else {
    return `${value}${defaultUnit}`;
  }
}
exports.Int = Int;
exports.addUnit = addUnit;
exports.formatCls = formatCls;
exports.isTrue = isTrue;

"use strict";
const common_vendor = require("../vendor.js");
function useLocalStorage(key, defaultValue = null) {
  const storedValue = common_vendor.index.getStorageSync(key);
  const data = common_vendor.ref(storedValue !== "" ? storedValue : defaultValue);
  common_vendor.watch(data, (newValue) => {
    if (newValue === null || newValue === void 0) {
      common_vendor.index.removeStorageSync(key);
    } else {
      common_vendor.index.setStorageSync(key, newValue);
    }
  });
  return data;
}
exports.useLocalStorage = useLocalStorage;

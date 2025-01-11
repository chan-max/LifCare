"use strict";
const common_vendor = require("../common/vendor.js");
const common_api_api = require("../common/api/api.js");
async function initConfigStoreBasicConfig() {
  const configStore = useConfigStore();
  const config = await common_api_api.Api.getBasicConfig();
  configStore.$patch(config);
}
const useConfigStore = common_vendor.defineStore("global_config", () => {
  const ok = common_vendor.ref(false);
  const cos = common_vendor.ref();
  const json = common_vendor.ref({});
  fetch("/project.config.json").then((response) => {
    if (!response.ok) {
      console.log("project.config.json laod error");
    }
    return response.json();
  }).then((data) => {
    json.value = data;
  }).catch((error) => {
    console.log("project.config.json laod error");
  });
  return {
    ok,
    cos,
    json
  };
});
exports.initConfigStoreBasicConfig = initConfigStoreBasicConfig;
exports.useConfigStore = useConfigStore;

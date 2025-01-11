"use strict";
const common_vendor = require("../vendor.js");
const store_config = require("../../store/config.js");
var _cos;
const getCOS = () => {
  let configStore = store_config.useConfigStore();
  if (_cos) {
    return _cos;
  }
  _cos = new common_vendor.COS({
    SecretId: configStore.cos.SecretId,
    SecretKey: configStore.cos.SecretKey,
    Bucket: configStore.cos.Bucket,
    Region: configStore.cos.Region
  });
  return _cos;
};
async function uploadToCOS({
  file,
  key = (/* @__PURE__ */ new Date()).getTime() + "_1s_" + file.name
}) {
  const cos = getCOS();
  try {
    const res = await cos.uploadFile({
      Key: String(key),
      Body: file,
      Bucket: cos.options.Bucket,
      Region: cos.options.Region
    });
    return {
      url: `https://${res.Location}`,
      key
    };
  } catch (e) {
    throw e;
  }
}
function deleteCOSFile(key) {
  if (key.startsWith("http")) {
    key = key.substring(key.lastIndexOf("/") + 1);
  }
  return new Promise((resolve, reject) => {
    const cos = getCOS();
    key = String(key);
    cos.deleteObject({
      Bucket: cos.options.Bucket,
      Region: cos.options.Region,
      Key: key
    }, function(err, data) {
      if (err) {
        console.error("删除文件失败:", err);
        reject(err);
      } else {
        console.log("删除文件成功:", data);
        resolve(data);
      }
    });
  });
}
exports.deleteCOSFile = deleteCOSFile;
exports.uploadToCOS = uploadToCOS;

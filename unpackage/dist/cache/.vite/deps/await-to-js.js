import "./chunk-P2LSHJDD.js";

// ../../../../../../Users/jackie/workspace/lif-app/LifCare/node_modules/await-to-js/dist/await-to-js.es5.js
function to(promise, errorExt) {
  return promise.then(function(data) {
    return [null, data];
  }).catch(function(err) {
    if (errorExt) {
      Object.assign(err, errorExt);
    }
    return [err, void 0];
  });
}
var await_to_js_es5_default = to;
export {
  await_to_js_es5_default as default,
  to
};
//# sourceMappingURL=await-to-js.js.map

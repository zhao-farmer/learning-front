"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/item01/item01.js";
  "./pages/item02/item01.js";
  "./pages/item03/item01.js";
  "./pages/item04/item01.js";
  "./pages/item05/item01.js";
  "./pages/item06/item01.js";
  "./pages/item07/item01.js";
  "./pages/item08/item01.js";
  "./pages/item09/item01.js";
}
const _sfc_main = {
  onLaunch: function() {
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
function createApp() {
  const app = common_vendor.createSSRApp(_sfc_main);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;

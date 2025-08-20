"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "item01",
  setup(__props) {
    common_vendor.ref(0);
    common_vendor.ref(true);
    common_vendor.onLoad(() => {
      common_vendor.index.__f__("log", "at pages/item03/item01.vue:8", "onLoad,页面生命周期钩子");
    });
    common_vendor.onMounted(() => {
      common_vendor.index.__f__("log", "at pages/item03/item01.vue:11", "onMounted,组件生命周期函数");
    });
    return (_ctx, _cache) => {
      return {};
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/item03/item01.js.map

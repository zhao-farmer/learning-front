"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "item01",
  setup(__props) {
    setTimeout(() => {
      common_vendor.index.setNavigationBarTitle({
        title: "动态标题"
      });
      common_vendor.index.setNavigationBarColor({
        // 前景色 仅支持 #ffffff 和 #000000
        frontColor: "#ffffff",
        // 背景颜色
        backgroundColor: "#2C405A"
      });
    }, 1500);
    setTimeout(() => {
      common_vendor.index.showNavigationBarLoading();
      setTimeout(() => {
        common_vendor.index.hideNavigationBarLoading();
      }, 1e3);
    }, 2500);
    common_vendor.index.hideHomeButton();
    return (_ctx, _cache) => {
      return {};
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-a4ee5f1b"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/item05/item01.js.map

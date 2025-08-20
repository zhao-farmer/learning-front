"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "item01",
  setup(__props) {
    common_vendor.index.showToast({
      // 最多显示7个字符
      title: "成功失败加载进行",
      // 提示的图标
      icon: "success",
      // 自定义图标
      // icon:"../static/logo.png"
      // 是否存在遮罩，如果存在遮罩，无法进行其他操作
      mask: true,
      // 信息存在时间
      duration: 1e3,
      // 成功时的提示信息
      success: (res) => {
        common_vendor.index.__f__("log", "at pages/item04/item01.vue:24", res);
      }
    });
    function show() {
      common_vendor.index.showToast({
        title: "显示",
        duration: 3e3
      });
    }
    function hide() {
      common_vendor.index.hideToast();
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(show),
        b: common_vendor.o(hide)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-cdb6a0f3"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/item04/item01.js.map

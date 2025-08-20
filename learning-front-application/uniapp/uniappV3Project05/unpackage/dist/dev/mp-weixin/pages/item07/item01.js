"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "item01",
  setup(__props) {
    setTimeout(() => {
      common_vendor.index.startPullDownRefresh();
    }, 1e3);
    function stop() {
      common_vendor.index.stopPullDownRefresh();
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(stop)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-470e33a6"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/item07/item01.js.map

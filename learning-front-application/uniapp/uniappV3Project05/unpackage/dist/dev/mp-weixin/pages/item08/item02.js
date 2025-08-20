"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "item02",
  setup(__props) {
    common_vendor.onLoad((e) => {
      common_vendor.index.__f__("log", "at pages/item08/item02.vue:11", e);
    });
    function goBack() {
      common_vendor.index.navigateBack();
    }
    common_vendor.index.__f__("log", "at pages/item08/item02.vue:19", getCurrentPages());
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(goBack)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-5c5bf46f"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/item08/item02.js.map

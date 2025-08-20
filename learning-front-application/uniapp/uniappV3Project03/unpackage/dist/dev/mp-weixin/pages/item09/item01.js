"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  __name: "item01",
  setup(__props) {
    const iptValue = common_vendor.ref("");
    const isActive = common_vendor.ref(false);
    function onConfirm() {
    }
    return (_ctx, _cache) => {
      return {
        a: iptValue.value,
        b: common_vendor.o(($event) => isActive.value = true),
        c: common_vendor.o(($event) => isActive.value = false),
        d: common_vendor.o(onConfirm),
        e: common_assets._imports_0,
        f: common_vendor.n(isActive.value ? "active" : "")
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-748a34ac"]]);
wx.createPage(MiniProgramPage);

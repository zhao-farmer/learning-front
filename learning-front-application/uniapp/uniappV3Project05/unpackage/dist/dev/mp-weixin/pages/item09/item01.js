"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "item01",
  setup(__props) {
    common_vendor.index.setStorageSync("storage_key", "hello");
    common_vendor.index.setStorageSync("storage_key", "张三");
    common_vendor.index.setStorageSync("arrs", [1, 2, 3]);
    common_vendor.index.setStorageSync("name", "李四");
    let myName = common_vendor.index.getStorageSync("name");
    common_vendor.index.__f__("log", "at pages/item09/item01.vue:26", myName);
    let all = common_vendor.index.getStorageInfoSync();
    common_vendor.index.__f__("log", "at pages/item09/item01.vue:31", all);
    function onRemove() {
      common_vendor.index.removeStorageSync("name");
    }
    function onClear() {
      common_vendor.index.clearStorageSync();
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(onRemove),
        b: common_vendor.o(onClear)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-748a34ac"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/item09/item01.js.map

"use strict";
const common_vendor = require("../../common/vendor.js");
const a = 6;
const _sfc_main = {
  __name: "item01",
  setup(__props) {
    function fn() {
      return "vue3学习";
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(2 + 3),
        b: common_vendor.t(a + 3),
        c: common_vendor.t(Date.now()),
        d: common_vendor.t(Math.random()),
        e: common_vendor.t("张三"),
        f: common_vendor.t(fn())
      };
    };
  }
};
wx.createPage(_sfc_main);

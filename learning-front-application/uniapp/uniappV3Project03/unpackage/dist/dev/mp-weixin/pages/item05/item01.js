"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "item01",
  setup(__props) {
    const num = common_vendor.ref(1);
    const color = common_vendor.ref("#fc359a");
    const isLoading = common_vendor.ref(false);
    function onClick() {
      num.value++;
      color.value = "#" + String(Math.random()).substring(3, 9);
    }
    function onChange(e) {
      isLoading.value = e.detail.value;
      console.log(e.detail.value);
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(num.value),
        b: common_vendor.o(onClick),
        c: color.value,
        d: common_vendor.o(onChange),
        e: isLoading.value
      };
    };
  }
};
wx.createPage(_sfc_main);

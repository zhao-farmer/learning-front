"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "item01",
  setup(__props) {
    const isActive = common_vendor.ref(true);
    const size = common_vendor.ref(30);
    let index = 0;
    setInterval(() => {
      index++;
      size.value = index % 20 + 8;
      isActive.value = !isActive.value;
    }, 1e3);
    return (_ctx, _cache) => {
      return {
        a: isActive.value ? 1 : "",
        b: common_vendor.n(isActive.value ? "active" : ""),
        c: "260px",
        d: size.value + "px"
      };
    };
  }
};
wx.createPage(_sfc_main);

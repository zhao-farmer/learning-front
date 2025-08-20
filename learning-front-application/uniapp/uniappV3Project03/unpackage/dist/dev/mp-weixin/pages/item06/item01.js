"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  __name: "item01",
  setup(__props) {
    const shop = common_vendor.ref(true);
    const day = common_vendor.ref(30);
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: shop.value
      }, shop.value ? {} : {}, {
        b: shop.value,
        c: day.value === 1
      }, day.value === 1 ? {} : day.value === 2 ? {} : day.value === 3 ? {} : day.value === 4 ? {} : day.value === 5 ? {} : day.value === 6 ? {} : day.value === 7 ? {} : {}, {
        d: day.value === 2,
        e: day.value === 3,
        f: day.value === 4,
        g: day.value === 5,
        h: day.value === 6,
        i: day.value === 7
      }, {}, {
        k: common_assets._imports_1
      }, {
        l: common_assets._imports_2
      });
    };
  }
};
wx.createPage(_sfc_main);

"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "item01",
  setup(__props) {
    const nba = common_vendor.ref([
      { id: "1", name: "乔丹", num: 23 },
      { id: "2", name: "詹姆斯", num: 6 },
      { id: "3", name: "科比", num: 24 }
    ]);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(10, (item, index, i0) => {
          return {
            a: common_vendor.t(index + 1),
            b: index
          };
        }),
        b: common_vendor.f(nba.value, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.name),
            b: common_vendor.t(item.num),
            c: item.id
          };
        })
      };
    };
  }
};
wx.createPage(_sfc_main);

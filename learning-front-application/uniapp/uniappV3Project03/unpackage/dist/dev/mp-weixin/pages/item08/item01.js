"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "item01",
  setup(__props) {
    const goods = common_vendor.ref([
      { id: 11, name: "小米" },
      { id: 22, name: "华为" },
      { id: 33, name: "oppo" },
      { id: 44, name: "苹果" }
    ]);
    function remove(index) {
      goods.value.splice(index, 1);
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(goods.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item.name),
            b: common_vendor.o(($event) => remove(index), item.id),
            c: item.id
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-851f0dd8"]]);
wx.createPage(MiniProgramPage);

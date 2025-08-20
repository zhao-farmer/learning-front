"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "requestDomo01",
  setup(__props) {
    const pets = common_vendor.ref([]);
    function newwork() {
      common_vendor.index.request({
        url: "https://api.thecatapi.com/v1/images/search",
        data: {
          limit: 10
        }
      }).then((res) => {
        common_vendor.index.__f__("log", "at pages/requestDomo02/requestDomo01.vue:25", res.data);
        pets.value = res.data;
      });
    }
    newwork();
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(pets.value, (item, k0, i0) => {
          return {
            a: item.url,
            b: common_vendor.t(item.width),
            c: common_vendor.t(item.height),
            d: item.id
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-3a4531d2"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/requestDomo02/requestDomo01.js.map

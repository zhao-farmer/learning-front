"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "requestDomo02",
  setup(__props) {
    const pets = common_vendor.ref([]);
    const onPreview = function(index) {
      let urls = pets.value.map((item) => item.url);
      common_vendor.index.previewImage({
        current: index,
        urls
      });
    };
    function newwork() {
      common_vendor.index.request({
        url: "https://api.thecatapi.com/v1/images/search",
        data: {
          limit: 10
        }
      }).then((res) => {
        pets.value = res.data;
      });
    }
    newwork();
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(pets.value, (item, index, i0) => {
          return {
            a: item.url,
            b: common_vendor.o(($event) => onPreview(index), item.id),
            c: common_vendor.t(item.width),
            d: common_vendor.t(item.height),
            e: item.id
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-cc937869"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/requestDomo02/requestDomo02.js.map

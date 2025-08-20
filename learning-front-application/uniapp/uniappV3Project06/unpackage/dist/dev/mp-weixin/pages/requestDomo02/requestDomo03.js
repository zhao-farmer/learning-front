"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "requestDomo03",
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
      common_vendor.index.showNavigationBarLoading();
      common_vendor.index.request({
        url: "https://xxx.xxx.xxx/",
        // url:"https://api.thecatapi.com/v1/images/search",
        data: {
          limit: 10
        },
        timeout: 3e3
      }).then((res) => {
        pets.value = res.data;
      }).catch((err) => {
        common_vendor.index.showToast({
          title: "请求有误，请从新刷新",
          icon: "none"
        });
      }).finally(() => {
        common_vendor.index.hideNavigationBarLoading();
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
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-bc46a9ce"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/requestDomo02/requestDomo03.js.map

"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  __name: "requestDomo01",
  setup(__props) {
    const pets = common_vendor.ref([]);
    const onPreview = function(index) {
      let urls = pets.value.map((item) => item.url);
      common_vendor.index.previewImage({
        current: index,
        urls
      });
    };
    const onRefresh = function() {
      common_vendor.index.startPullDownRefresh();
      restart();
    };
    const onTop = function() {
      common_vendor.index.pageScrollTo({
        scrollTop: 0,
        duration: 100
      });
    };
    function newwork() {
      common_vendor.index.showNavigationBarLoading();
      common_vendor.index.request({
        url: "https://api.thecatapi.com/v1/images/search",
        data: {
          limit: 10
        }
      }).then((res) => {
        common_vendor.index.__f__("log", "at pages/requestDomo03/requestDomo01.vue:62", res.data);
        pets.value = [...pets.value, ...res.data];
      }).catch((err) => {
        common_vendor.index.showToast({
          title: "请求有误，请从新刷新",
          icon: "none"
        });
      }).finally(() => {
        common_vendor.index.hideNavigationBarLoading();
        common_vendor.index.stopPullDownRefresh();
      });
    }
    common_vendor.onReachBottom(() => {
      newwork();
    });
    common_vendor.onPullDownRefresh(() => {
      restart();
    });
    function restart() {
      pets.value = [];
      newwork();
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
        }),
        b: common_vendor.p({
          type: "refreshempty",
          size: "26",
          color: "#888"
        }),
        c: common_vendor.o(onRefresh),
        d: common_vendor.p({
          type: "arrow-up",
          size: "26",
          color: "#888"
        }),
        e: common_vendor.o(onTop)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-57f89ca9"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/requestDomo03/requestDomo01.js.map

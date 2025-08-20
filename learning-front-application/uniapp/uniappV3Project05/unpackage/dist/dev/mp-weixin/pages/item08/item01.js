"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "item01",
  setup(__props) {
    function goDemo02() {
      common_vendor.index.navigateTo({
        url: "/pages/item08/item02?name=张三&age=18&like=足球"
      });
    }
    function goIndex() {
      common_vendor.index.reLaunch({
        url: "/pages/item01/item01"
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(goDemo02),
        b: common_vendor.o(goIndex)
      };
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/item08/item01.js.map

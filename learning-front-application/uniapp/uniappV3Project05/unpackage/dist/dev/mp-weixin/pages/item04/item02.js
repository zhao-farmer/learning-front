"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "item02",
  setup(__props) {
    common_vendor.index.showLoading({
      title: "加载中...",
      mask: true,
      // 如果失败
      fail: (err) => {
        common_vendor.index.hideLoading();
      }
    });
    return (_ctx, _cache) => {
      return {};
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/item04/item02.js.map

"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "item01",
  setup(__props) {
    common_vendor.index.setTabBarItem({
      index: 0,
      text: "自定义"
    });
    common_vendor.index.setTabBarBadge({
      index: 1,
      text: "99+"
    });
    common_vendor.index.showTabBarRedDot({
      index: 2,
      text: "99+"
    });
    setTimeout(() => {
      common_vendor.index.removeTabBarBadge({
        index: 1
      });
      common_vendor.index.hideTabBarRedDot({
        index: 2
      });
    }, 2e3);
    return (_ctx, _cache) => {
      return {};
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/item06/item01.js.map

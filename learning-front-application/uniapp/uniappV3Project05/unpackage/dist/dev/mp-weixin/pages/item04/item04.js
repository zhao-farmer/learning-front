"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "item04",
  setup(__props) {
    let arrs = ["高中", "大专", "本科", "研究生"];
    function select() {
      common_vendor.index.showActionSheet({
        // 标签
        title: "请选择",
        // 列表信息
        itemList: arrs,
        // 每一项的颜色
        itemColor: "#007aff",
        success: (res) => {
          common_vendor.index.__f__("log", "at pages/item04/item04.vue:20", arrs[res.tapIndex]);
        }
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(select)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-9532aa48"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/item04/item04.js.map

"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "item03",
  setup(__props) {
    function onClick1() {
      common_vendor.index.showModal({
        // 标题
        title: "是否删除",
        // 内容
        content: "删除后不会恢复！",
        // 是否显示取消按钮
        showCancel: true,
        // 取消按钮文字
        cancelText: "No",
        // 取消按钮文字颜色
        cancelColor: "#dd524d",
        // 确认按钮
        confirmText: "Yes",
        // 确认按钮文字颜色
        confirmColor: "#4cd964"
      });
    }
    function onClick2() {
      common_vendor.index.showModal({
        // 标题
        title: "验证码",
        // 显示输入框
        editable: true,
        // 输入框提示
        placeholderText: "请输入验证码!"
      });
    }
    function onClick3() {
      common_vendor.index.showModal({
        // 标题
        title: "提示选择",
        success: (res) => {
          if (res.confirm) {
            common_vendor.index.showToast({
              title: "删除成功"
            });
          }
        },
        fail: (res) => {
          if (res.confirm) {
            common_vendor.index.showToast({
              title: "取消此操作"
            });
          }
        }
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(onClick1),
        b: common_vendor.o(onClick2),
        c: common_vendor.o(onClick3)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-2199cdc2"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/item04/item03.js.map

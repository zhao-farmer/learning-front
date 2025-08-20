"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "item01",
  setup(__props) {
    let num1 = 6;
    setInterval(() => {
      num1++;
      console.log(num1);
    }, 1e3);
    let num2 = common_vendor.ref(10);
    setInterval(() => {
      num2.value++;
      console.log(num2.value);
    }, 1e3);
    let test = common_vendor.ref("咸虾米");
    let arr = common_vendor.ref([1, 2, 3, 4]);
    let obj = common_vendor.ref({ name: "王五", age: 18 });
    obj.value.name = "李四";
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(common_vendor.unref(num1)),
        b: common_vendor.t(common_vendor.unref(num2)),
        c: common_vendor.t(common_vendor.unref(test)),
        d: common_vendor.t(common_vendor.unref(arr)),
        e: common_vendor.t(common_vendor.unref(obj))
      };
    };
  }
};
wx.createPage(_sfc_main);

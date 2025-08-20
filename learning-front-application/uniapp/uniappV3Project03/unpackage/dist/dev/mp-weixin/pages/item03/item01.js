"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "item01",
  setup(__props) {
    const arrs = common_vendor.ref([
      "../../static/pic1.png",
      "../../static/pic2.png",
      "../../static/pic3.webp",
      "../../static/pic4.jpg"
    ]);
    const picUrl = common_vendor.ref("../../static/pic1.png");
    let index = 0;
    setInterval(() => {
      index++;
      picUrl.value = arrs.value[index % 4];
    }, 1e3);
    return (_ctx, _cache) => {
      return {
        a: picUrl.value
      };
    };
  }
};
wx.createPage(_sfc_main);

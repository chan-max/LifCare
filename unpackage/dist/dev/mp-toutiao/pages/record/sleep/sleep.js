"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  methods: {
    goRecord() {
      common_vendor.index.navigateTo({
        url: "/pages/record/sleep/record"
      });
    }
  },
  data() {
    return {
      cards: [
        {
          image: "/static/img/draw/sleep1.jpeg",
          title: "我们为什么要睡觉",
          description: "记录你的睡眠模式并提供科学的分析建议。"
        },
        {
          image: "/static/img/draw/sleep2.jpeg",
          title: "睡眠时间规划",
          description: "帮助你设定最佳的入睡和醒来时间。"
        },
        {
          image: "/static/img/draw/sleep3.jpeg",
          title: "健康报告",
          description: "通过长期记录生成全面的睡眠健康报告。"
        },
        {
          image: "/static/img/draw/sleep4.jpg",
          title: "健康报告",
          description: "通过长期记录生成全面的睡眠健康报告。"
        },
        {
          image: "/static/img/draw/sleep5.jpeg",
          title: "健康报告",
          description: "通过长期记录生成全面的睡眠健康报告。"
        }
      ]
    };
  },
  onLoad() {
    common_vendor.index.showTabBar();
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.goRecord && $options.goRecord(...args)),
    b: common_vendor.f($data.cards, (card, index, i0) => {
      return {
        a: card.image,
        b: common_vendor.t(card.title),
        c: common_vendor.t(card.description),
        d: index
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-fc92e831"]]);
tt.createPage(MiniProgramPage);

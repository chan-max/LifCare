"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      scrollLeft: 0,
      // 仅用于核准中间位置
      list: [],
      selInd: 0
    };
  },
  props: {
    // 总宽度 数字 单位px <=100为屏幕宽度的百分比
    width: {
      type: Number,
      default: 100
    },
    height: {
      type: String,
      default: ""
    },
    // 大刻度宽度
    bigItemWidth: {
      type: Number,
      default: 2
    },
    // 小刻度宽度
    littleItemWidth: {
      type: Number,
      default: 2
    },
    // 每小格宽度
    cellWidth: {
      type: Number,
      default: 20
    },
    // 每个大格分为几个小格
    cells: {
      type: Number,
      default: 5
    },
    // 每个小格子代表的数值
    cellNum: {
      type: Number,
      default: 1
    },
    // 开始数值
    startNum: {
      type: Number,
      default: 0
    },
    // 结束数值
    endNum: {
      type: Number,
      default: 20
    },
    // 背景颜色
    bgColor: {
      type: String,
      default: "transparent"
    },
    // 刻度颜色
    color: {
      type: String,
      default: "#666"
    },
    // 选中的颜色
    selColor: {
      type: String,
      default: "#f00"
    },
    // 刻度对齐方式 flex-start flex-end
    align: {
      type: String,
      default: "center"
    },
    // 大刻度高度
    bigItemHeight: {
      type: [String, Number],
      default: 30
    },
    // 小刻度高度
    littleItemHeight: {
      type: [String, Number],
      default: 15
    },
    // 数值的位置 top bottom 
    numPos: {
      type: String,
      default: "bottom"
    },
    // 用v-model双向绑定
    value: {
      type: Number,
      default: 0
    },
    // 新增的 defaultValue
    defaultValue: {
      type: Number,
      default: 0
    }
  },
  computed: {
    // 总宽度,如果props未传则默认为屏幕宽度
    screenW() {
      const {
        width
      } = this;
      let w = width;
      const screenWidth = common_vendor.index.getSystemInfoSync().screenWidth;
      if (width <= 100 && width > 0) {
        w = Math.round(screenWidth * width / 100);
      } else if (width > screenWidth || !width) {
        w = screenWidth;
      }
      return w;
    },
    // 大刻度的高度
    bIH() {
      const unit = this.bigItemHeight;
      if (typeof unit === "number") {
        return unit + "px";
      } else {
        return unit;
      }
    }
  },
  mounted() {
    this.initSlide();
  },
  watch: {
    // 当 defaultValue 改变时重新设置刻度位置
    defaultValue: {
      handler(newValue) {
        this.setDefault(newValue);
      },
      immediate: true
    }
  },
  methods: {
    setUnit(unit) {
      if (typeof unit === "number") {
        return unit + "px";
      } else {
        return unit;
      }
    },
    // 滚动触发
    slideScroll(e) {
      const {
        cellWidth,
        endNum,
        startNum,
        cellNum
      } = this;
      const scrollL = e.detail.scrollLeft;
      let ind = parseInt(scrollL / cellWidth);
      const d_len = (endNum - startNum) / cellNum;
      if (ind > d_len) {
        ind = d_len;
      }
      if (ind !== this.selInd) {
        this.selInd = ind;
      }
    },
    // 触摸结束
    slideMoveEnd(e) {
      const end_t = setTimeout(() => {
        const {
          selInd
        } = this;
        this.slideTo(selInd);
        this.setEmitFunc();
        clearTimeout(end_t);
      }, 400);
    },
    // 初始化
    initSlide() {
      const {
        startNum,
        endNum,
        cellNum,
        cells
      } = this;
      const listNum = cellNum * cells;
      const len = (endNum - startNum) / listNum;
      let list = [];
      for (let i = 0; i < len; i++) {
        const l_num = this.getIntNum(startNum + i * listNum);
        list.push(l_num);
      }
      this.list = list;
      this.getSelInd();
    },
    // 滚动到正确的刻度
    slideTo(ind) {
      const {
        screenW,
        cellWidth,
        scrollLeft
      } = this;
      const newLeft = ind * cellWidth + cellWidth / 2;
      this.scrollLeft = scrollLeft === newLeft ? scrollLeft + 1e-3 : newLeft;
    },
    // 四舍五入
    getIntNum(n) {
      return parseInt(n * 100) / 100;
    },
    // value改变后，计算选中的selInd
    getSelInd() {
      const {
        endNum,
        startNum,
        cellNum
      } = this;
      let value = this.value, isChange = false, noHave = false;
      if (value > endNum) {
        value = endNum;
        isChange = true;
      } else if (value < startNum) {
        value = startNum;
        isChange = true;
      }
      const d_len = (endNum - startNum) / cellNum;
      let defaultInd = -1;
      for (let d = 0; d <= d_len; d++) {
        const item = this.getIntNum(startNum + d * cellNum);
        if (item === value) {
          defaultInd = d;
          break;
        }
      }
      if (defaultInd === -1) {
        defaultInd = 0;
        noHave = true;
      }
      (isChange || noHave) && this.setEmitFunc();
      if (defaultInd === this.selInd)
        return;
      this.selInd = defaultInd;
      this.slideTo(defaultInd);
    },
    // 根据 defaultValue 设置默认值
    setDefault(value) {
      this.selInd = this.getSelIndByValue(value);
      this.slideTo(this.selInd);
      this.setEmitFunc();
    },
    // 获取与当前值匹配的 selInd
    getSelIndByValue(value) {
      const {
        endNum,
        startNum,
        cellNum
      } = this;
      let ind = Math.round((value - startNum) / cellNum);
      const d_len = (endNum - startNum) / cellNum;
      return ind > d_len ? d_len : ind;
    },
    // 父组件通知事件
    setEmitFunc() {
      const {
        selInd,
        startNum,
        cellNum
      } = this;
      var num = this.getIntNum(selInd * cellNum + startNum);
      num = Math.round(num * 10) / 10;
      this.$emit("input", num);
      this.$listeners.change && this.$emit("change", num);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $options.screenW / 2 + "px",
    b: common_vendor.f($data.list, (s_item, s_index, i0) => {
      return {
        a: common_vendor.t(s_item),
        b: $data.selInd === s_index * $props.cells ? $props.selColor : $props.color,
        c: $data.selInd === s_index * $props.cells ? $props.selColor : $props.color,
        d: common_vendor.f($props.cells - 1, (c_item, c_index, i1) => {
          return {
            a: c_item,
            b: $data.selInd === s_index * $props.cells + c_index + 1 ? $props.selColor : $props.color
          };
        }),
        e: s_index
      };
    }),
    c: $props.numPos === "bottom" ? `calc(100% + 10rpx)` : "auto",
    d: $props.numPos === "top" ? `calc(100% + 10rpx)` : "auto",
    e: $props.bigItemWidth + "px",
    f: `0 ${($props.cellWidth - $props.bigItemWidth) / 2}px`,
    g: $options.setUnit($props.bigItemHeight),
    h: $props.littleItemWidth + "px",
    i: `0 ${($props.cellWidth - $props.littleItemWidth) / 2}px`,
    j: $options.setUnit($props.littleItemHeight),
    k: common_vendor.t($props.endNum),
    l: $props.numPos === "bottom" ? `calc(100% + 10rpx)` : "auto",
    m: $props.numPos === "top" ? `calc(100% + 10rpx)` : "auto",
    n: $props.bigItemWidth + "px",
    o: `0 ${($props.cellWidth - $props.bigItemWidth) / 2}px`,
    p: $data.selInd === $data.list.length * $props.cells ? $props.selColor : $props.color,
    q: $data.selInd === $data.list.length * $props.cells ? $props.selColor : $props.color,
    r: $options.setUnit($props.bigItemHeight),
    s: $options.screenW / 2 + "px",
    t: $props.height,
    v: $props.align,
    w: $options.screenW + "px",
    x: $props.height,
    y: $props.bgColor,
    z: $props.align,
    A: common_vendor.o((...args) => $options.slideScroll && $options.slideScroll(...args)),
    B: $data.scrollLeft,
    C: common_vendor.o((...args) => $options.slideMoveEnd && $options.slideMoveEnd(...args))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
tt.createComponent(Component);

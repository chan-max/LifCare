import {
  SeriesData_default,
  extendChartView,
  extendSeriesModel,
  graphic_exports2 as graphic_exports,
  helper_exports,
  install,
  install2,
  installLabelLayout,
  parsePercent2 as parsePercent,
  use
} from "./chunk-W75RRTKB.js";
import "./chunk-P2LSHJDD.js";

// ../../../../../../Users/jackie/workspace/lif-app/LifCare/node_modules/echarts/lib/echarts.js
use([install, install2]);
use(installLabelLayout);

// ../../../../../../Users/jackie/workspace/lif-app/LifCare/node_modules/echarts-liquidfill/src/liquidFillSeries.js
extendSeriesModel({
  type: "series.liquidFill",
  optionUpdated: function() {
    var option = this.option;
    option.gridSize = Math.max(Math.floor(option.gridSize), 4);
  },
  getInitialData: function(option, ecModel) {
    var dimensions = helper_exports.createDimensions(option.data, {
      coordDimensions: ["value"]
    });
    var list = new SeriesData_default(dimensions, this);
    list.initData(option.data);
    return list;
  },
  defaultOption: {
    color: ["#294D99", "#156ACF", "#1598ED", "#45BDFF"],
    center: ["50%", "50%"],
    radius: "50%",
    amplitude: "8%",
    waveLength: "80%",
    phase: "auto",
    period: "auto",
    direction: "right",
    shape: "circle",
    waveAnimation: true,
    animationEasing: "linear",
    animationEasingUpdate: "linear",
    animationDuration: 2e3,
    animationDurationUpdate: 1e3,
    outline: {
      show: true,
      borderDistance: 8,
      itemStyle: {
        color: "none",
        borderColor: "#294D99",
        borderWidth: 8,
        shadowBlur: 20,
        shadowColor: "rgba(0, 0, 0, 0.25)"
      }
    },
    backgroundStyle: {
      color: "#E3F7FF"
    },
    itemStyle: {
      opacity: 0.95,
      shadowBlur: 50,
      shadowColor: "rgba(0, 0, 0, 0.4)"
    },
    label: {
      show: true,
      color: "#294D99",
      insideColor: "#fff",
      fontSize: 50,
      fontWeight: "bold",
      align: "center",
      baseline: "middle",
      position: "inside"
    },
    emphasis: {
      itemStyle: {
        opacity: 0.8
      }
    }
  }
});

// ../../../../../../Users/jackie/workspace/lif-app/LifCare/node_modules/echarts-liquidfill/src/liquidFillShape.js
var liquidFillShape_default = graphic_exports.extendShape({
  type: "ec-liquid-fill",
  shape: {
    waveLength: 0,
    radius: 0,
    radiusY: 0,
    cx: 0,
    cy: 0,
    waterLevel: 0,
    amplitude: 0,
    phase: 0,
    inverse: false
  },
  buildPath: function(ctx, shape) {
    if (shape.radiusY == null) {
      shape.radiusY = shape.radius;
    }
    var curves = Math.max(
      Math.ceil(2 * shape.radius / shape.waveLength * 4) * 2,
      8
    );
    while (shape.phase < -Math.PI * 2) {
      shape.phase += Math.PI * 2;
    }
    while (shape.phase > 0) {
      shape.phase -= Math.PI * 2;
    }
    var phase = shape.phase / Math.PI / 2 * shape.waveLength;
    var left = shape.cx - shape.radius + phase - shape.radius * 2;
    ctx.moveTo(left, shape.waterLevel);
    var waveRight = 0;
    for (var c = 0; c < curves; ++c) {
      var stage = c % 4;
      var pos = getWaterPositions(
        c * shape.waveLength / 4,
        stage,
        shape.waveLength,
        shape.amplitude
      );
      ctx.bezierCurveTo(
        pos[0][0] + left,
        -pos[0][1] + shape.waterLevel,
        pos[1][0] + left,
        -pos[1][1] + shape.waterLevel,
        pos[2][0] + left,
        -pos[2][1] + shape.waterLevel
      );
      if (c === curves - 1) {
        waveRight = pos[2][0];
      }
    }
    if (shape.inverse) {
      ctx.lineTo(waveRight + left, shape.cy - shape.radiusY);
      ctx.lineTo(left, shape.cy - shape.radiusY);
      ctx.lineTo(left, shape.waterLevel);
    } else {
      ctx.lineTo(waveRight + left, shape.cy + shape.radiusY);
      ctx.lineTo(left, shape.cy + shape.radiusY);
      ctx.lineTo(left, shape.waterLevel);
    }
    ctx.closePath();
  }
});
function getWaterPositions(x, stage, waveLength, amplitude) {
  if (stage === 0) {
    return [
      [x + 1 / 2 * waveLength / Math.PI / 2, amplitude / 2],
      [x + 1 / 2 * waveLength / Math.PI, amplitude],
      [x + waveLength / 4, amplitude]
    ];
  } else if (stage === 1) {
    return [
      [
        x + 1 / 2 * waveLength / Math.PI / 2 * (Math.PI - 2),
        amplitude
      ],
      [
        x + 1 / 2 * waveLength / Math.PI / 2 * (Math.PI - 1),
        amplitude / 2
      ],
      [x + waveLength / 4, 0]
    ];
  } else if (stage === 2) {
    return [
      [x + 1 / 2 * waveLength / Math.PI / 2, -amplitude / 2],
      [x + 1 / 2 * waveLength / Math.PI, -amplitude],
      [x + waveLength / 4, -amplitude]
    ];
  } else {
    return [
      [
        x + 1 / 2 * waveLength / Math.PI / 2 * (Math.PI - 2),
        -amplitude
      ],
      [
        x + 1 / 2 * waveLength / Math.PI / 2 * (Math.PI - 1),
        -amplitude / 2
      ],
      [x + waveLength / 4, 0]
    ];
  }
}

// ../../../../../../Users/jackie/workspace/lif-app/LifCare/node_modules/echarts-liquidfill/src/liquidFillView.js
var parsePercent2 = parsePercent;
function isPathSymbol(symbol) {
  return symbol && symbol.indexOf("path://") === 0;
}
extendChartView({
  type: "liquidFill",
  render: function(seriesModel, ecModel, api) {
    var self = this;
    var group = this.group;
    group.removeAll();
    var data = seriesModel.getData();
    var itemModel = data.getItemModel(0);
    var center = itemModel.get("center");
    var radius = itemModel.get("radius");
    var width = api.getWidth();
    var height = api.getHeight();
    var size = Math.min(width, height);
    var outlineDistance = 0;
    var outlineBorderWidth = 0;
    var showOutline = seriesModel.get("outline.show");
    if (showOutline) {
      outlineDistance = seriesModel.get("outline.borderDistance");
      outlineBorderWidth = parsePercent2(
        seriesModel.get("outline.itemStyle.borderWidth"),
        size
      );
    }
    var cx = parsePercent2(center[0], width);
    var cy = parsePercent2(center[1], height);
    var outterRadius;
    var innerRadius;
    var paddingRadius;
    var isFillContainer = false;
    var symbol = seriesModel.get("shape");
    if (symbol === "container") {
      isFillContainer = true;
      outterRadius = [
        width / 2,
        height / 2
      ];
      innerRadius = [
        outterRadius[0] - outlineBorderWidth / 2,
        outterRadius[1] - outlineBorderWidth / 2
      ];
      paddingRadius = [
        parsePercent2(outlineDistance, width),
        parsePercent2(outlineDistance, height)
      ];
      radius = [
        Math.max(innerRadius[0] - paddingRadius[0], 0),
        Math.max(innerRadius[1] - paddingRadius[1], 0)
      ];
    } else {
      outterRadius = parsePercent2(radius, size) / 2;
      innerRadius = outterRadius - outlineBorderWidth / 2;
      paddingRadius = parsePercent2(outlineDistance, size);
      radius = Math.max(innerRadius - paddingRadius, 0);
    }
    if (showOutline) {
      var outline = getOutline();
      outline.style.lineWidth = outlineBorderWidth;
      group.add(getOutline());
    }
    var left = isFillContainer ? 0 : cx - radius;
    var top = isFillContainer ? 0 : cy - radius;
    var wavePath = null;
    group.add(getBackground());
    var oldData = this._data;
    var waves = [];
    data.diff(oldData).add(function(idx) {
      var wave = getWave(idx, false);
      var waterLevel = wave.shape.waterLevel;
      wave.shape.waterLevel = isFillContainer ? height / 2 : radius;
      graphic_exports.initProps(wave, {
        shape: {
          waterLevel
        }
      }, seriesModel);
      wave.z2 = 2;
      setWaveAnimation(idx, wave, null);
      group.add(wave);
      data.setItemGraphicEl(idx, wave);
      waves.push(wave);
    }).update(function(newIdx, oldIdx) {
      var waveElement = oldData.getItemGraphicEl(oldIdx);
      var newWave = getWave(newIdx, false, waveElement);
      var shape = {};
      var shapeAttrs = ["amplitude", "cx", "cy", "phase", "radius", "radiusY", "waterLevel", "waveLength"];
      for (var i = 0; i < shapeAttrs.length; ++i) {
        var attr = shapeAttrs[i];
        if (newWave.shape.hasOwnProperty(attr)) {
          shape[attr] = newWave.shape[attr];
        }
      }
      var style = {};
      var styleAttrs = ["fill", "opacity", "shadowBlur", "shadowColor"];
      for (var i = 0; i < styleAttrs.length; ++i) {
        var attr = styleAttrs[i];
        if (newWave.style.hasOwnProperty(attr)) {
          style[attr] = newWave.style[attr];
        }
      }
      if (isFillContainer) {
        shape.radiusY = height / 2;
      }
      graphic_exports.updateProps(waveElement, {
        shape,
        x: newWave.x,
        y: newWave.y
      }, seriesModel);
      if (seriesModel.isUniversalTransitionEnabled && seriesModel.isUniversalTransitionEnabled()) {
        graphic_exports.updateProps(waveElement, {
          style
        }, seriesModel);
      } else {
        waveElement.useStyle(style);
      }
      var oldWaveClipPath = waveElement.getClipPath();
      var newWaveClipPath = newWave.getClipPath();
      waveElement.setClipPath(newWave.getClipPath());
      waveElement.shape.inverse = newWave.inverse;
      if (oldWaveClipPath && newWaveClipPath && self._shape === symbol && !isPathSymbol(symbol)) {
        graphic_exports.updateProps(newWaveClipPath, {
          shape: oldWaveClipPath.shape
        }, seriesModel, { isFrom: true });
      }
      setWaveAnimation(newIdx, waveElement, waveElement);
      group.add(waveElement);
      data.setItemGraphicEl(newIdx, waveElement);
      waves.push(waveElement);
    }).remove(function(idx) {
      var wave = oldData.getItemGraphicEl(idx);
      group.remove(wave);
    }).execute();
    if (itemModel.get("label.show")) {
      group.add(getText(waves));
    }
    this._shape = symbol;
    this._data = data;
    function getPath(r, isForClipping) {
      if (symbol) {
        if (isPathSymbol(symbol)) {
          var path = graphic_exports.makePath(symbol.slice(7), {});
          var bouding = path.getBoundingRect();
          var w = bouding.width;
          var h = bouding.height;
          if (w > h) {
            h = r * 2 / w * h;
            w = r * 2;
          } else {
            w = r * 2 / h * w;
            h = r * 2;
          }
          var left2 = isForClipping ? 0 : cx - w / 2;
          var top2 = isForClipping ? 0 : cy - h / 2;
          path = graphic_exports.makePath(
            symbol.slice(7),
            {},
            new graphic_exports.BoundingRect(left2, top2, w, h)
          );
          if (isForClipping) {
            path.x = -w / 2;
            path.y = -h / 2;
          }
          return path;
        } else if (isFillContainer) {
          var x = isForClipping ? -r[0] : cx - r[0];
          var y = isForClipping ? -r[1] : cy - r[1];
          return helper_exports.createSymbol(
            "rect",
            x,
            y,
            r[0] * 2,
            r[1] * 2
          );
        } else {
          var x = isForClipping ? -r : cx - r;
          var y = isForClipping ? -r : cy - r;
          if (symbol === "pin") {
            y += r;
          } else if (symbol === "arrow") {
            y -= r;
          }
          return helper_exports.createSymbol(symbol, x, y, r * 2, r * 2);
        }
      }
      return new graphic_exports.Circle({
        shape: {
          cx: isForClipping ? 0 : cx,
          cy: isForClipping ? 0 : cy,
          r
        }
      });
    }
    function getOutline() {
      var outlinePath = getPath(outterRadius);
      outlinePath.style.fill = null;
      outlinePath.setStyle(seriesModel.getModel("outline.itemStyle").getItemStyle());
      return outlinePath;
    }
    function getBackground() {
      var strokePath = getPath(radius);
      strokePath.setStyle(seriesModel.getModel("backgroundStyle").getItemStyle());
      strokePath.style.fill = null;
      strokePath.z2 = 5;
      var fillPath = getPath(radius);
      fillPath.setStyle(seriesModel.getModel("backgroundStyle").getItemStyle());
      fillPath.style.stroke = null;
      var group2 = new graphic_exports.Group();
      group2.add(strokePath);
      group2.add(fillPath);
      return group2;
    }
    function getWave(idx, isInverse, oldWave) {
      var radiusX = isFillContainer ? radius[0] : radius;
      var radiusY = isFillContainer ? height / 2 : radius;
      var itemModel2 = data.getItemModel(idx);
      var itemStyleModel = itemModel2.getModel("itemStyle");
      var phase = itemModel2.get("phase");
      var amplitude = parsePercent2(
        itemModel2.get("amplitude"),
        radiusY * 2
      );
      var waveLength = parsePercent2(
        itemModel2.get("waveLength"),
        radiusX * 2
      );
      var value = data.get("value", idx);
      var waterLevel = radiusY - value * radiusY * 2;
      phase = oldWave ? oldWave.shape.phase : phase === "auto" ? idx * Math.PI / 4 : phase;
      var normalStyle = itemStyleModel.getItemStyle();
      if (!normalStyle.fill) {
        var seriesColor = seriesModel.get("color");
        var id = idx % seriesColor.length;
        normalStyle.fill = seriesColor[id];
      }
      var x = radiusX * 2;
      var wave = new liquidFillShape_default({
        shape: {
          waveLength,
          radius: radiusX,
          radiusY,
          cx: x,
          cy: 0,
          waterLevel,
          amplitude,
          phase,
          inverse: isInverse
        },
        style: normalStyle,
        x: cx,
        y: cy
      });
      wave.shape._waterLevel = waterLevel;
      var hoverStyle = itemModel2.getModel("emphasis.itemStyle").getItemStyle();
      hoverStyle.lineWidth = 0;
      wave.ensureState("emphasis").style = hoverStyle;
      helper_exports.enableHoverEmphasis(wave);
      var clip = getPath(radius, true);
      clip.setStyle({
        fill: "white"
      });
      wave.setClipPath(clip);
      return wave;
    }
    function setWaveAnimation(idx, wave, oldWave) {
      var itemModel2 = data.getItemModel(idx);
      var maxSpeed = itemModel2.get("period");
      var direction = itemModel2.get("direction");
      var value = data.get("value", idx);
      var phase = itemModel2.get("phase");
      phase = oldWave ? oldWave.shape.phase : phase === "auto" ? idx * Math.PI / 4 : phase;
      var defaultSpeed = function(maxSpeed2) {
        var cnt = data.count();
        return cnt === 0 ? maxSpeed2 : maxSpeed2 * (0.2 + (cnt - idx) / cnt * 0.8);
      };
      var speed = 0;
      if (maxSpeed === "auto") {
        speed = defaultSpeed(5e3);
      } else {
        speed = typeof maxSpeed === "function" ? maxSpeed(value, idx) : maxSpeed;
      }
      var phaseOffset = 0;
      if (direction === "right" || direction == null) {
        phaseOffset = Math.PI;
      } else if (direction === "left") {
        phaseOffset = -Math.PI;
      } else if (direction === "none") {
        phaseOffset = 0;
      } else {
        console.error("Illegal direction value for liquid fill.");
      }
      if (direction !== "none" && itemModel2.get("waveAnimation")) {
        wave.animate("shape", true).when(0, {
          phase
        }).when(speed / 2, {
          phase: phaseOffset + phase
        }).when(speed, {
          phase: phaseOffset * 2 + phase
        }).during(function() {
          if (wavePath) {
            wavePath.dirty(true);
          }
        }).start();
      }
    }
    function getText(waves2) {
      var labelModel = itemModel.getModel("label");
      function formatLabel() {
        var formatted = seriesModel.getFormattedLabel(0, "normal");
        var defaultVal = data.get("value", 0) * 100;
        var defaultLabel = data.getName(0) || seriesModel.name;
        if (!isNaN(defaultVal)) {
          defaultLabel = defaultVal.toFixed(0) + "%";
        }
        return formatted == null ? defaultLabel : formatted;
      }
      var textRectOption = {
        z2: 10,
        shape: {
          x: left,
          y: top,
          width: (isFillContainer ? radius[0] : radius) * 2,
          height: (isFillContainer ? radius[1] : radius) * 2
        },
        style: {
          fill: "transparent"
        },
        textConfig: {
          position: labelModel.get("position") || "inside"
        },
        silent: true
      };
      var textOption = {
        style: {
          text: formatLabel(),
          textAlign: labelModel.get("align"),
          textVerticalAlign: labelModel.get("baseline")
        }
      };
      Object.assign(textOption.style, helper_exports.createTextStyle(labelModel));
      var outsideTextRect = new graphic_exports.Rect(textRectOption);
      var insideTextRect = new graphic_exports.Rect(textRectOption);
      insideTextRect.disableLabelAnimation = true;
      outsideTextRect.disableLabelAnimation = true;
      var outsideText = new graphic_exports.Text(textOption);
      var insideText = new graphic_exports.Text(textOption);
      outsideTextRect.setTextContent(outsideText);
      insideTextRect.setTextContent(insideText);
      var insColor = labelModel.get("insideColor");
      insideText.style.fill = insColor;
      var group2 = new graphic_exports.Group();
      group2.add(outsideTextRect);
      group2.add(insideTextRect);
      var boundingCircle = getPath(radius, true);
      wavePath = new graphic_exports.CompoundPath({
        shape: {
          paths: waves2
        },
        x: cx,
        y: cy
      });
      wavePath.setClipPath(boundingCircle);
      insideTextRect.setClipPath(wavePath);
      return group2;
    }
  },
  dispose: function() {
  }
});
//# sourceMappingURL=echarts-liquidfill.js.map

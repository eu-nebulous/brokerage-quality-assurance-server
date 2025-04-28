(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/tailwindcss/lib/util/colorNames.js
  var require_colorNames = __commonJS({
    "node_modules/tailwindcss/lib/util/colorNames.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return _default;
        }
      });
      var _default = {
        aliceblue: [
          240,
          248,
          255
        ],
        antiquewhite: [
          250,
          235,
          215
        ],
        aqua: [
          0,
          255,
          255
        ],
        aquamarine: [
          127,
          255,
          212
        ],
        azure: [
          240,
          255,
          255
        ],
        beige: [
          245,
          245,
          220
        ],
        bisque: [
          255,
          228,
          196
        ],
        black: [
          0,
          0,
          0
        ],
        blanchedalmond: [
          255,
          235,
          205
        ],
        blue: [
          0,
          0,
          255
        ],
        blueviolet: [
          138,
          43,
          226
        ],
        brown: [
          165,
          42,
          42
        ],
        burlywood: [
          222,
          184,
          135
        ],
        cadetblue: [
          95,
          158,
          160
        ],
        chartreuse: [
          127,
          255,
          0
        ],
        chocolate: [
          210,
          105,
          30
        ],
        coral: [
          255,
          127,
          80
        ],
        cornflowerblue: [
          100,
          149,
          237
        ],
        cornsilk: [
          255,
          248,
          220
        ],
        crimson: [
          220,
          20,
          60
        ],
        cyan: [
          0,
          255,
          255
        ],
        darkblue: [
          0,
          0,
          139
        ],
        darkcyan: [
          0,
          139,
          139
        ],
        darkgoldenrod: [
          184,
          134,
          11
        ],
        darkgray: [
          169,
          169,
          169
        ],
        darkgreen: [
          0,
          100,
          0
        ],
        darkgrey: [
          169,
          169,
          169
        ],
        darkkhaki: [
          189,
          183,
          107
        ],
        darkmagenta: [
          139,
          0,
          139
        ],
        darkolivegreen: [
          85,
          107,
          47
        ],
        darkorange: [
          255,
          140,
          0
        ],
        darkorchid: [
          153,
          50,
          204
        ],
        darkred: [
          139,
          0,
          0
        ],
        darksalmon: [
          233,
          150,
          122
        ],
        darkseagreen: [
          143,
          188,
          143
        ],
        darkslateblue: [
          72,
          61,
          139
        ],
        darkslategray: [
          47,
          79,
          79
        ],
        darkslategrey: [
          47,
          79,
          79
        ],
        darkturquoise: [
          0,
          206,
          209
        ],
        darkviolet: [
          148,
          0,
          211
        ],
        deeppink: [
          255,
          20,
          147
        ],
        deepskyblue: [
          0,
          191,
          255
        ],
        dimgray: [
          105,
          105,
          105
        ],
        dimgrey: [
          105,
          105,
          105
        ],
        dodgerblue: [
          30,
          144,
          255
        ],
        firebrick: [
          178,
          34,
          34
        ],
        floralwhite: [
          255,
          250,
          240
        ],
        forestgreen: [
          34,
          139,
          34
        ],
        fuchsia: [
          255,
          0,
          255
        ],
        gainsboro: [
          220,
          220,
          220
        ],
        ghostwhite: [
          248,
          248,
          255
        ],
        gold: [
          255,
          215,
          0
        ],
        goldenrod: [
          218,
          165,
          32
        ],
        gray: [
          128,
          128,
          128
        ],
        green: [
          0,
          128,
          0
        ],
        greenyellow: [
          173,
          255,
          47
        ],
        grey: [
          128,
          128,
          128
        ],
        honeydew: [
          240,
          255,
          240
        ],
        hotpink: [
          255,
          105,
          180
        ],
        indianred: [
          205,
          92,
          92
        ],
        indigo: [
          75,
          0,
          130
        ],
        ivory: [
          255,
          255,
          240
        ],
        khaki: [
          240,
          230,
          140
        ],
        lavender: [
          230,
          230,
          250
        ],
        lavenderblush: [
          255,
          240,
          245
        ],
        lawngreen: [
          124,
          252,
          0
        ],
        lemonchiffon: [
          255,
          250,
          205
        ],
        lightblue: [
          173,
          216,
          230
        ],
        lightcoral: [
          240,
          128,
          128
        ],
        lightcyan: [
          224,
          255,
          255
        ],
        lightgoldenrodyellow: [
          250,
          250,
          210
        ],
        lightgray: [
          211,
          211,
          211
        ],
        lightgreen: [
          144,
          238,
          144
        ],
        lightgrey: [
          211,
          211,
          211
        ],
        lightpink: [
          255,
          182,
          193
        ],
        lightsalmon: [
          255,
          160,
          122
        ],
        lightseagreen: [
          32,
          178,
          170
        ],
        lightskyblue: [
          135,
          206,
          250
        ],
        lightslategray: [
          119,
          136,
          153
        ],
        lightslategrey: [
          119,
          136,
          153
        ],
        lightsteelblue: [
          176,
          196,
          222
        ],
        lightyellow: [
          255,
          255,
          224
        ],
        lime: [
          0,
          255,
          0
        ],
        limegreen: [
          50,
          205,
          50
        ],
        linen: [
          250,
          240,
          230
        ],
        magenta: [
          255,
          0,
          255
        ],
        maroon: [
          128,
          0,
          0
        ],
        mediumaquamarine: [
          102,
          205,
          170
        ],
        mediumblue: [
          0,
          0,
          205
        ],
        mediumorchid: [
          186,
          85,
          211
        ],
        mediumpurple: [
          147,
          112,
          219
        ],
        mediumseagreen: [
          60,
          179,
          113
        ],
        mediumslateblue: [
          123,
          104,
          238
        ],
        mediumspringgreen: [
          0,
          250,
          154
        ],
        mediumturquoise: [
          72,
          209,
          204
        ],
        mediumvioletred: [
          199,
          21,
          133
        ],
        midnightblue: [
          25,
          25,
          112
        ],
        mintcream: [
          245,
          255,
          250
        ],
        mistyrose: [
          255,
          228,
          225
        ],
        moccasin: [
          255,
          228,
          181
        ],
        navajowhite: [
          255,
          222,
          173
        ],
        navy: [
          0,
          0,
          128
        ],
        oldlace: [
          253,
          245,
          230
        ],
        olive: [
          128,
          128,
          0
        ],
        olivedrab: [
          107,
          142,
          35
        ],
        orange: [
          255,
          165,
          0
        ],
        orangered: [
          255,
          69,
          0
        ],
        orchid: [
          218,
          112,
          214
        ],
        palegoldenrod: [
          238,
          232,
          170
        ],
        palegreen: [
          152,
          251,
          152
        ],
        paleturquoise: [
          175,
          238,
          238
        ],
        palevioletred: [
          219,
          112,
          147
        ],
        papayawhip: [
          255,
          239,
          213
        ],
        peachpuff: [
          255,
          218,
          185
        ],
        peru: [
          205,
          133,
          63
        ],
        pink: [
          255,
          192,
          203
        ],
        plum: [
          221,
          160,
          221
        ],
        powderblue: [
          176,
          224,
          230
        ],
        purple: [
          128,
          0,
          128
        ],
        rebeccapurple: [
          102,
          51,
          153
        ],
        red: [
          255,
          0,
          0
        ],
        rosybrown: [
          188,
          143,
          143
        ],
        royalblue: [
          65,
          105,
          225
        ],
        saddlebrown: [
          139,
          69,
          19
        ],
        salmon: [
          250,
          128,
          114
        ],
        sandybrown: [
          244,
          164,
          96
        ],
        seagreen: [
          46,
          139,
          87
        ],
        seashell: [
          255,
          245,
          238
        ],
        sienna: [
          160,
          82,
          45
        ],
        silver: [
          192,
          192,
          192
        ],
        skyblue: [
          135,
          206,
          235
        ],
        slateblue: [
          106,
          90,
          205
        ],
        slategray: [
          112,
          128,
          144
        ],
        slategrey: [
          112,
          128,
          144
        ],
        snow: [
          255,
          250,
          250
        ],
        springgreen: [
          0,
          255,
          127
        ],
        steelblue: [
          70,
          130,
          180
        ],
        tan: [
          210,
          180,
          140
        ],
        teal: [
          0,
          128,
          128
        ],
        thistle: [
          216,
          191,
          216
        ],
        tomato: [
          255,
          99,
          71
        ],
        turquoise: [
          64,
          224,
          208
        ],
        violet: [
          238,
          130,
          238
        ],
        wheat: [
          245,
          222,
          179
        ],
        white: [
          255,
          255,
          255
        ],
        whitesmoke: [
          245,
          245,
          245
        ],
        yellow: [
          255,
          255,
          0
        ],
        yellowgreen: [
          154,
          205,
          50
        ]
      };
    }
  });

  // node_modules/tailwindcss/lib/util/color.js
  var require_color = __commonJS({
    "node_modules/tailwindcss/lib/util/color.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        parseColor: function() {
          return parseColor2;
        },
        formatColor: function() {
          return formatColor;
        }
      });
      var _colorNames = /* @__PURE__ */ _interop_require_default(require_colorNames());
      function _interop_require_default(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      var HEX = /^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i;
      var SHORT_HEX = /^#([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i;
      var VALUE = /(?:\d+|\d*\.\d+)%?/;
      var SEP = /(?:\s*,\s*|\s+)/;
      var ALPHA_SEP = /\s*[,/]\s*/;
      var CUSTOM_PROPERTY = /var\(--(?:[^ )]*?)(?:,(?:[^ )]*?|var\(--[^ )]*?\)))?\)/;
      var RGB = new RegExp(`^(rgba?)\\(\\s*(${VALUE.source}|${CUSTOM_PROPERTY.source})(?:${SEP.source}(${VALUE.source}|${CUSTOM_PROPERTY.source}))?(?:${SEP.source}(${VALUE.source}|${CUSTOM_PROPERTY.source}))?(?:${ALPHA_SEP.source}(${VALUE.source}|${CUSTOM_PROPERTY.source}))?\\s*\\)$`);
      var HSL = new RegExp(`^(hsla?)\\(\\s*((?:${VALUE.source})(?:deg|rad|grad|turn)?|${CUSTOM_PROPERTY.source})(?:${SEP.source}(${VALUE.source}|${CUSTOM_PROPERTY.source}))?(?:${SEP.source}(${VALUE.source}|${CUSTOM_PROPERTY.source}))?(?:${ALPHA_SEP.source}(${VALUE.source}|${CUSTOM_PROPERTY.source}))?\\s*\\)$`);
      function parseColor2(value, { loose = false } = {}) {
        var _match_, _match__toString;
        if (typeof value !== "string") {
          return null;
        }
        value = value.trim();
        if (value === "transparent") {
          return {
            mode: "rgb",
            color: [
              "0",
              "0",
              "0"
            ],
            alpha: "0"
          };
        }
        if (value in _colorNames.default) {
          return {
            mode: "rgb",
            color: _colorNames.default[value].map((v) => v.toString())
          };
        }
        let hex = value.replace(SHORT_HEX, (_, r, g, b, a) => [
          "#",
          r,
          r,
          g,
          g,
          b,
          b,
          a ? a + a : ""
        ].join("")).match(HEX);
        if (hex !== null) {
          return {
            mode: "rgb",
            color: [
              parseInt(hex[1], 16),
              parseInt(hex[2], 16),
              parseInt(hex[3], 16)
            ].map((v) => v.toString()),
            alpha: hex[4] ? (parseInt(hex[4], 16) / 255).toString() : void 0
          };
        }
        var _value_match;
        let match = (_value_match = value.match(RGB)) !== null && _value_match !== void 0 ? _value_match : value.match(HSL);
        if (match === null) {
          return null;
        }
        let color = [
          match[2],
          match[3],
          match[4]
        ].filter(Boolean).map((v) => v.toString());
        if (color.length === 2 && color[0].startsWith("var(")) {
          return {
            mode: match[1],
            color: [
              color[0]
            ],
            alpha: color[1]
          };
        }
        if (!loose && color.length !== 3) {
          return null;
        }
        if (color.length < 3 && !color.some((part) => /^var\(.*?\)$/.test(part))) {
          return null;
        }
        return {
          mode: match[1],
          color,
          alpha: (_match_ = match[5]) === null || _match_ === void 0 ? void 0 : (_match__toString = _match_.toString) === null || _match__toString === void 0 ? void 0 : _match__toString.call(_match_)
        };
      }
      function formatColor({ mode, color, alpha }) {
        let hasAlpha = alpha !== void 0;
        if (mode === "rgba" || mode === "hsla") {
          return `${mode}(${color.join(", ")}${hasAlpha ? `, ${alpha}` : ""})`;
        }
        return `${mode}(${color.join(" ")}${hasAlpha ? ` / ${alpha}` : ""})`;
      }
    }
  });

  // node_modules/tailwindcss/lib/util/negateValue.js
  var require_negateValue = __commonJS({
    "node_modules/tailwindcss/lib/util/negateValue.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return negateValue;
        }
      });
      function negateValue(value) {
        value = `${value}`;
        if (value === "0") {
          return "0";
        }
        if (/^[+-]?(\d+|\d*\.\d+)(e[+-]?\d+)?(%|\w+)?$/.test(value)) {
          return value.replace(/^[+-]?/, (sign) => sign === "-" ? "" : "-");
        }
        let numericFunctions = [
          "var",
          "calc",
          "min",
          "max",
          "clamp"
        ];
        for (const fn of numericFunctions) {
          if (value.includes(`${fn}(`)) {
            return `calc(${value} * -1)`;
          }
        }
      }
    }
  });

  // node_modules/tailwindcss/lib/corePluginList.js
  var require_corePluginList = __commonJS({
    "node_modules/tailwindcss/lib/corePluginList.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return _default;
        }
      });
      var _default = [
        "preflight",
        "container",
        "accessibility",
        "pointerEvents",
        "visibility",
        "position",
        "inset",
        "isolation",
        "zIndex",
        "order",
        "gridColumn",
        "gridColumnStart",
        "gridColumnEnd",
        "gridRow",
        "gridRowStart",
        "gridRowEnd",
        "float",
        "clear",
        "margin",
        "boxSizing",
        "lineClamp",
        "display",
        "aspectRatio",
        "size",
        "height",
        "maxHeight",
        "minHeight",
        "width",
        "minWidth",
        "maxWidth",
        "flex",
        "flexShrink",
        "flexGrow",
        "flexBasis",
        "tableLayout",
        "captionSide",
        "borderCollapse",
        "borderSpacing",
        "transformOrigin",
        "translate",
        "rotate",
        "skew",
        "scale",
        "transform",
        "animation",
        "cursor",
        "touchAction",
        "userSelect",
        "resize",
        "scrollSnapType",
        "scrollSnapAlign",
        "scrollSnapStop",
        "scrollMargin",
        "scrollPadding",
        "listStylePosition",
        "listStyleType",
        "listStyleImage",
        "appearance",
        "columns",
        "breakBefore",
        "breakInside",
        "breakAfter",
        "gridAutoColumns",
        "gridAutoFlow",
        "gridAutoRows",
        "gridTemplateColumns",
        "gridTemplateRows",
        "flexDirection",
        "flexWrap",
        "placeContent",
        "placeItems",
        "alignContent",
        "alignItems",
        "justifyContent",
        "justifyItems",
        "gap",
        "space",
        "divideWidth",
        "divideStyle",
        "divideColor",
        "divideOpacity",
        "placeSelf",
        "alignSelf",
        "justifySelf",
        "overflow",
        "overscrollBehavior",
        "scrollBehavior",
        "textOverflow",
        "hyphens",
        "whitespace",
        "textWrap",
        "wordBreak",
        "borderRadius",
        "borderWidth",
        "borderStyle",
        "borderColor",
        "borderOpacity",
        "backgroundColor",
        "backgroundOpacity",
        "backgroundImage",
        "gradientColorStops",
        "boxDecorationBreak",
        "backgroundSize",
        "backgroundAttachment",
        "backgroundClip",
        "backgroundPosition",
        "backgroundRepeat",
        "backgroundOrigin",
        "fill",
        "stroke",
        "strokeWidth",
        "objectFit",
        "objectPosition",
        "padding",
        "textAlign",
        "textIndent",
        "verticalAlign",
        "fontFamily",
        "fontSize",
        "fontWeight",
        "textTransform",
        "fontStyle",
        "fontVariantNumeric",
        "lineHeight",
        "letterSpacing",
        "textColor",
        "textOpacity",
        "textDecoration",
        "textDecorationColor",
        "textDecorationStyle",
        "textDecorationThickness",
        "textUnderlineOffset",
        "fontSmoothing",
        "placeholderColor",
        "placeholderOpacity",
        "caretColor",
        "accentColor",
        "opacity",
        "backgroundBlendMode",
        "mixBlendMode",
        "boxShadow",
        "boxShadowColor",
        "outlineStyle",
        "outlineWidth",
        "outlineOffset",
        "outlineColor",
        "ringWidth",
        "ringColor",
        "ringOpacity",
        "ringOffsetWidth",
        "ringOffsetColor",
        "blur",
        "brightness",
        "contrast",
        "dropShadow",
        "grayscale",
        "hueRotate",
        "invert",
        "saturate",
        "sepia",
        "filter",
        "backdropBlur",
        "backdropBrightness",
        "backdropContrast",
        "backdropGrayscale",
        "backdropHueRotate",
        "backdropInvert",
        "backdropOpacity",
        "backdropSaturate",
        "backdropSepia",
        "backdropFilter",
        "transitionProperty",
        "transitionDelay",
        "transitionDuration",
        "transitionTimingFunction",
        "willChange",
        "contain",
        "content",
        "forcedColorAdjust"
      ];
    }
  });

  // node_modules/tailwindcss/lib/util/configurePlugins.js
  var require_configurePlugins = __commonJS({
    "node_modules/tailwindcss/lib/util/configurePlugins.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return _default;
        }
      });
      function _default(pluginConfig, plugins) {
        if (pluginConfig === void 0) {
          return plugins;
        }
        const pluginNames = Array.isArray(pluginConfig) ? pluginConfig : [
          ...new Set(plugins.filter((pluginName) => {
            return pluginConfig !== false && pluginConfig[pluginName] !== false;
          }).concat(Object.keys(pluginConfig).filter((pluginName) => {
            return pluginConfig[pluginName] !== false;
          })))
        ];
        return pluginNames;
      }
    }
  });

  // node_modules/picocolors/picocolors.browser.js
  var require_picocolors_browser = __commonJS({
    "node_modules/picocolors/picocolors.browser.js"(exports, module) {
      var x = String;
      var create = function() {
        return { isColorSupported: false, reset: x, bold: x, dim: x, italic: x, underline: x, inverse: x, hidden: x, strikethrough: x, black: x, red: x, green: x, yellow: x, blue: x, magenta: x, cyan: x, white: x, gray: x, bgBlack: x, bgRed: x, bgGreen: x, bgYellow: x, bgBlue: x, bgMagenta: x, bgCyan: x, bgWhite: x, blackBright: x, redBright: x, greenBright: x, yellowBright: x, blueBright: x, magentaBright: x, cyanBright: x, whiteBright: x, bgBlackBright: x, bgRedBright: x, bgGreenBright: x, bgYellowBright: x, bgBlueBright: x, bgMagentaBright: x, bgCyanBright: x, bgWhiteBright: x };
      };
      module.exports = create();
      module.exports.createColors = create;
    }
  });

  // node_modules/tailwindcss/lib/util/log.js
  var require_log = __commonJS({
    "node_modules/tailwindcss/lib/util/log.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        dim: function() {
          return dim;
        },
        default: function() {
          return _default;
        }
      });
      var _picocolors = /* @__PURE__ */ _interop_require_default(require_picocolors_browser());
      function _interop_require_default(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      var alreadyShown = /* @__PURE__ */ new Set();
      function log(type, messages, key) {
        if (typeof process !== "undefined" && process.env.JEST_WORKER_ID)
          return;
        if (key && alreadyShown.has(key))
          return;
        if (key)
          alreadyShown.add(key);
        console.warn("");
        messages.forEach((message) => console.warn(type, "-", message));
      }
      function dim(input) {
        return _picocolors.default.dim(input);
      }
      var _default = {
        info(key, messages) {
          log(_picocolors.default.bold(_picocolors.default.cyan("info")), ...Array.isArray(key) ? [
            key
          ] : [
            messages,
            key
          ]);
        },
        warn(key, messages) {
          log(_picocolors.default.bold(_picocolors.default.yellow("warn")), ...Array.isArray(key) ? [
            key
          ] : [
            messages,
            key
          ]);
        },
        risk(key, messages) {
          log(_picocolors.default.bold(_picocolors.default.magenta("risk")), ...Array.isArray(key) ? [
            key
          ] : [
            messages,
            key
          ]);
        }
      };
    }
  });

  // node_modules/tailwindcss/lib/public/colors.js
  var require_colors = __commonJS({
    "node_modules/tailwindcss/lib/public/colors.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return _default;
        }
      });
      var _log = /* @__PURE__ */ _interop_require_default(require_log());
      function _interop_require_default(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      function warn({ version, from, to }) {
        _log.default.warn(`${from}-color-renamed`, [
          `As of Tailwind CSS ${version}, \`${from}\` has been renamed to \`${to}\`.`,
          "Update your configuration file to silence this warning."
        ]);
      }
      var _default = {
        inherit: "inherit",
        current: "currentColor",
        transparent: "transparent",
        black: "#000",
        white: "#fff",
        slate: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
          950: "#020617"
        },
        gray: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
          950: "#030712"
        },
        zinc: {
          50: "#fafafa",
          100: "#f4f4f5",
          200: "#e4e4e7",
          300: "#d4d4d8",
          400: "#a1a1aa",
          500: "#71717a",
          600: "#52525b",
          700: "#3f3f46",
          800: "#27272a",
          900: "#18181b",
          950: "#09090b"
        },
        neutral: {
          50: "#fafafa",
          100: "#f5f5f5",
          200: "#e5e5e5",
          300: "#d4d4d4",
          400: "#a3a3a3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
          950: "#0a0a0a"
        },
        stone: {
          50: "#fafaf9",
          100: "#f5f5f4",
          200: "#e7e5e4",
          300: "#d6d3d1",
          400: "#a8a29e",
          500: "#78716c",
          600: "#57534e",
          700: "#44403c",
          800: "#292524",
          900: "#1c1917",
          950: "#0c0a09"
        },
        red: {
          50: "#fef2f2",
          100: "#fee2e2",
          200: "#fecaca",
          300: "#fca5a5",
          400: "#f87171",
          500: "#ef4444",
          600: "#dc2626",
          700: "#b91c1c",
          800: "#991b1b",
          900: "#7f1d1d",
          950: "#450a0a"
        },
        orange: {
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#f97316",
          600: "#ea580c",
          700: "#c2410c",
          800: "#9a3412",
          900: "#7c2d12",
          950: "#431407"
        },
        amber: {
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
          700: "#b45309",
          800: "#92400e",
          900: "#78350f",
          950: "#451a03"
        },
        yellow: {
          50: "#fefce8",
          100: "#fef9c3",
          200: "#fef08a",
          300: "#fde047",
          400: "#facc15",
          500: "#eab308",
          600: "#ca8a04",
          700: "#a16207",
          800: "#854d0e",
          900: "#713f12",
          950: "#422006"
        },
        lime: {
          50: "#f7fee7",
          100: "#ecfccb",
          200: "#d9f99d",
          300: "#bef264",
          400: "#a3e635",
          500: "#84cc16",
          600: "#65a30d",
          700: "#4d7c0f",
          800: "#3f6212",
          900: "#365314",
          950: "#1a2e05"
        },
        green: {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
          950: "#052e16"
        },
        emerald: {
          50: "#ecfdf5",
          100: "#d1fae5",
          200: "#a7f3d0",
          300: "#6ee7b7",
          400: "#34d399",
          500: "#10b981",
          600: "#059669",
          700: "#047857",
          800: "#065f46",
          900: "#064e3b",
          950: "#022c22"
        },
        teal: {
          50: "#f0fdfa",
          100: "#ccfbf1",
          200: "#99f6e4",
          300: "#5eead4",
          400: "#2dd4bf",
          500: "#14b8a6",
          600: "#0d9488",
          700: "#0f766e",
          800: "#115e59",
          900: "#134e4a",
          950: "#042f2e"
        },
        cyan: {
          50: "#ecfeff",
          100: "#cffafe",
          200: "#a5f3fc",
          300: "#67e8f9",
          400: "#22d3ee",
          500: "#06b6d4",
          600: "#0891b2",
          700: "#0e7490",
          800: "#155e75",
          900: "#164e63",
          950: "#083344"
        },
        sky: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
          950: "#082f49"
        },
        blue: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
          950: "#172554"
        },
        indigo: {
          50: "#eef2ff",
          100: "#e0e7ff",
          200: "#c7d2fe",
          300: "#a5b4fc",
          400: "#818cf8",
          500: "#6366f1",
          600: "#4f46e5",
          700: "#4338ca",
          800: "#3730a3",
          900: "#312e81",
          950: "#1e1b4b"
        },
        violet: {
          50: "#f5f3ff",
          100: "#ede9fe",
          200: "#ddd6fe",
          300: "#c4b5fd",
          400: "#a78bfa",
          500: "#8b5cf6",
          600: "#7c3aed",
          700: "#6d28d9",
          800: "#5b21b6",
          900: "#4c1d95",
          950: "#2e1065"
        },
        purple: {
          50: "#faf5ff",
          100: "#f3e8ff",
          200: "#e9d5ff",
          300: "#d8b4fe",
          400: "#c084fc",
          500: "#a855f7",
          600: "#9333ea",
          700: "#7e22ce",
          800: "#6b21a8",
          900: "#581c87",
          950: "#3b0764"
        },
        fuchsia: {
          50: "#fdf4ff",
          100: "#fae8ff",
          200: "#f5d0fe",
          300: "#f0abfc",
          400: "#e879f9",
          500: "#d946ef",
          600: "#c026d3",
          700: "#a21caf",
          800: "#86198f",
          900: "#701a75",
          950: "#4a044e"
        },
        pink: {
          50: "#fdf2f8",
          100: "#fce7f3",
          200: "#fbcfe8",
          300: "#f9a8d4",
          400: "#f472b6",
          500: "#ec4899",
          600: "#db2777",
          700: "#be185d",
          800: "#9d174d",
          900: "#831843",
          950: "#500724"
        },
        rose: {
          50: "#fff1f2",
          100: "#ffe4e6",
          200: "#fecdd3",
          300: "#fda4af",
          400: "#fb7185",
          500: "#f43f5e",
          600: "#e11d48",
          700: "#be123c",
          800: "#9f1239",
          900: "#881337",
          950: "#4c0519"
        },
        get lightBlue() {
          warn({
            version: "v2.2",
            from: "lightBlue",
            to: "sky"
          });
          return this.sky;
        },
        get warmGray() {
          warn({
            version: "v3.0",
            from: "warmGray",
            to: "stone"
          });
          return this.stone;
        },
        get trueGray() {
          warn({
            version: "v3.0",
            from: "trueGray",
            to: "neutral"
          });
          return this.neutral;
        },
        get coolGray() {
          warn({
            version: "v3.0",
            from: "coolGray",
            to: "gray"
          });
          return this.gray;
        },
        get blueGray() {
          warn({
            version: "v3.0",
            from: "blueGray",
            to: "slate"
          });
          return this.slate;
        }
      };
    }
  });

  // node_modules/tailwindcss/lib/util/defaults.js
  var require_defaults = __commonJS({
    "node_modules/tailwindcss/lib/util/defaults.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "defaults", {
        enumerable: true,
        get: function() {
          return defaults;
        }
      });
      function defaults(target, ...sources) {
        for (let source of sources) {
          for (let k in source) {
            var _target_hasOwnProperty;
            if (!(target === null || target === void 0 ? void 0 : (_target_hasOwnProperty = target.hasOwnProperty) === null || _target_hasOwnProperty === void 0 ? void 0 : _target_hasOwnProperty.call(target, k))) {
              target[k] = source[k];
            }
          }
          for (let k of Object.getOwnPropertySymbols(source)) {
            var _target_hasOwnProperty1;
            if (!(target === null || target === void 0 ? void 0 : (_target_hasOwnProperty1 = target.hasOwnProperty) === null || _target_hasOwnProperty1 === void 0 ? void 0 : _target_hasOwnProperty1.call(target, k))) {
              target[k] = source[k];
            }
          }
        }
        return target;
      }
    }
  });

  // node_modules/tailwindcss/lib/util/toPath.js
  var require_toPath = __commonJS({
    "node_modules/tailwindcss/lib/util/toPath.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "toPath", {
        enumerable: true,
        get: function() {
          return toPath;
        }
      });
      function toPath(path) {
        if (Array.isArray(path))
          return path;
        let openBrackets = path.split("[").length - 1;
        let closedBrackets = path.split("]").length - 1;
        if (openBrackets !== closedBrackets) {
          throw new Error(`Path is invalid. Has unbalanced brackets: ${path}`);
        }
        return path.split(/\.(?![^\[]*\])|[\[\]]/g).filter(Boolean);
      }
    }
  });

  // node_modules/tailwindcss/lib/featureFlags.js
  var require_featureFlags = __commonJS({
    "node_modules/tailwindcss/lib/featureFlags.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        flagEnabled: function() {
          return flagEnabled;
        },
        issueFlagNotices: function() {
          return issueFlagNotices;
        },
        default: function() {
          return _default;
        }
      });
      var _picocolors = /* @__PURE__ */ _interop_require_default(require_picocolors_browser());
      var _log = /* @__PURE__ */ _interop_require_default(require_log());
      function _interop_require_default(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      var defaults = {
        optimizeUniversalDefaults: false,
        generalizedModifiers: true,
        disableColorOpacityUtilitiesByDefault: false,
        relativeContentPathsByDefault: false
      };
      var featureFlags = {
        future: [
          "hoverOnlyWhenSupported",
          "respectDefaultRingColorOpacity",
          "disableColorOpacityUtilitiesByDefault",
          "relativeContentPathsByDefault"
        ],
        experimental: [
          "optimizeUniversalDefaults",
          "generalizedModifiers"
        ]
      };
      function flagEnabled(config, flag) {
        if (featureFlags.future.includes(flag)) {
          var _config_future;
          var _config_future_flag, _ref;
          return config.future === "all" || ((_ref = (_config_future_flag = config === null || config === void 0 ? void 0 : (_config_future = config.future) === null || _config_future === void 0 ? void 0 : _config_future[flag]) !== null && _config_future_flag !== void 0 ? _config_future_flag : defaults[flag]) !== null && _ref !== void 0 ? _ref : false);
        }
        if (featureFlags.experimental.includes(flag)) {
          var _config_experimental;
          var _config_experimental_flag, _ref1;
          return config.experimental === "all" || ((_ref1 = (_config_experimental_flag = config === null || config === void 0 ? void 0 : (_config_experimental = config.experimental) === null || _config_experimental === void 0 ? void 0 : _config_experimental[flag]) !== null && _config_experimental_flag !== void 0 ? _config_experimental_flag : defaults[flag]) !== null && _ref1 !== void 0 ? _ref1 : false);
        }
        return false;
      }
      function experimentalFlagsEnabled(config) {
        if (config.experimental === "all") {
          return featureFlags.experimental;
        }
        var _config_experimental;
        return Object.keys((_config_experimental = config === null || config === void 0 ? void 0 : config.experimental) !== null && _config_experimental !== void 0 ? _config_experimental : {}).filter((flag) => featureFlags.experimental.includes(flag) && config.experimental[flag]);
      }
      function issueFlagNotices(config) {
        if (process.env.JEST_WORKER_ID !== void 0) {
          return;
        }
        if (experimentalFlagsEnabled(config).length > 0) {
          let changes = experimentalFlagsEnabled(config).map((s) => _picocolors.default.yellow(s)).join(", ");
          _log.default.warn("experimental-flags-enabled", [
            `You have enabled experimental features: ${changes}`,
            "Experimental features in Tailwind CSS are not covered by semver, may introduce breaking changes, and can change at any time."
          ]);
        }
      }
      var _default = featureFlags;
    }
  });

  // node_modules/tailwindcss/lib/util/normalizeConfig.js
  var require_normalizeConfig = __commonJS({
    "node_modules/tailwindcss/lib/util/normalizeConfig.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "normalizeConfig", {
        enumerable: true,
        get: function() {
          return normalizeConfig;
        }
      });
      var _featureFlags = require_featureFlags();
      var _log = /* @__PURE__ */ _interop_require_wildcard(require_log());
      function _getRequireWildcardCache(nodeInterop) {
        if (typeof WeakMap !== "function")
          return null;
        var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
        var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
        return (_getRequireWildcardCache = function(nodeInterop2) {
          return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
        })(nodeInterop);
      }
      function _interop_require_wildcard(obj, nodeInterop) {
        if (!nodeInterop && obj && obj.__esModule) {
          return obj;
        }
        if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
          return {
            default: obj
          };
        }
        var cache = _getRequireWildcardCache(nodeInterop);
        if (cache && cache.has(obj)) {
          return cache.get(obj);
        }
        var newObj = {};
        var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var key in obj) {
          if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
              Object.defineProperty(newObj, key, desc);
            } else {
              newObj[key] = obj[key];
            }
          }
        }
        newObj.default = obj;
        if (cache) {
          cache.set(obj, newObj);
        }
        return newObj;
      }
      function normalizeConfig(config) {
        let valid = (() => {
          if (config.purge) {
            return false;
          }
          if (!config.content) {
            return false;
          }
          if (!Array.isArray(config.content) && !(typeof config.content === "object" && config.content !== null)) {
            return false;
          }
          if (Array.isArray(config.content)) {
            return config.content.every((path) => {
              if (typeof path === "string")
                return true;
              if (typeof (path === null || path === void 0 ? void 0 : path.raw) !== "string")
                return false;
              if ((path === null || path === void 0 ? void 0 : path.extension) && typeof (path === null || path === void 0 ? void 0 : path.extension) !== "string") {
                return false;
              }
              return true;
            });
          }
          if (typeof config.content === "object" && config.content !== null) {
            if (Object.keys(config.content).some((key) => ![
              "files",
              "relative",
              "extract",
              "transform"
            ].includes(key))) {
              return false;
            }
            if (Array.isArray(config.content.files)) {
              if (!config.content.files.every((path) => {
                if (typeof path === "string")
                  return true;
                if (typeof (path === null || path === void 0 ? void 0 : path.raw) !== "string")
                  return false;
                if ((path === null || path === void 0 ? void 0 : path.extension) && typeof (path === null || path === void 0 ? void 0 : path.extension) !== "string") {
                  return false;
                }
                return true;
              })) {
                return false;
              }
              if (typeof config.content.extract === "object") {
                for (let value of Object.values(config.content.extract)) {
                  if (typeof value !== "function") {
                    return false;
                  }
                }
              } else if (!(config.content.extract === void 0 || typeof config.content.extract === "function")) {
                return false;
              }
              if (typeof config.content.transform === "object") {
                for (let value of Object.values(config.content.transform)) {
                  if (typeof value !== "function") {
                    return false;
                  }
                }
              } else if (!(config.content.transform === void 0 || typeof config.content.transform === "function")) {
                return false;
              }
              if (typeof config.content.relative !== "boolean" && typeof config.content.relative !== "undefined") {
                return false;
              }
            }
            return true;
          }
          return false;
        })();
        if (!valid) {
          _log.default.warn("purge-deprecation", [
            "The `purge`/`content` options have changed in Tailwind CSS v3.0.",
            "Update your configuration file to eliminate this warning.",
            "https://tailwindcss.com/docs/upgrade-guide#configure-content-sources"
          ]);
        }
        config.safelist = (() => {
          var _purge_options;
          let { content, purge, safelist } = config;
          if (Array.isArray(safelist))
            return safelist;
          if (Array.isArray(content === null || content === void 0 ? void 0 : content.safelist))
            return content.safelist;
          if (Array.isArray(purge === null || purge === void 0 ? void 0 : purge.safelist))
            return purge.safelist;
          if (Array.isArray(purge === null || purge === void 0 ? void 0 : (_purge_options = purge.options) === null || _purge_options === void 0 ? void 0 : _purge_options.safelist))
            return purge.options.safelist;
          return [];
        })();
        config.blocklist = (() => {
          let { blocklist } = config;
          if (Array.isArray(blocklist)) {
            if (blocklist.every((item) => typeof item === "string")) {
              return blocklist;
            }
            _log.default.warn("blocklist-invalid", [
              "The `blocklist` option must be an array of strings.",
              "https://tailwindcss.com/docs/content-configuration#discarding-classes"
            ]);
          }
          return [];
        })();
        if (typeof config.prefix === "function") {
          _log.default.warn("prefix-function", [
            "As of Tailwind CSS v3.0, `prefix` cannot be a function.",
            "Update `prefix` in your configuration to be a string to eliminate this warning.",
            "https://tailwindcss.com/docs/upgrade-guide#prefix-cannot-be-a-function"
          ]);
          config.prefix = "";
        } else {
          var _config_prefix;
          config.prefix = (_config_prefix = config.prefix) !== null && _config_prefix !== void 0 ? _config_prefix : "";
        }
        config.content = {
          relative: (() => {
            let { content } = config;
            if (content === null || content === void 0 ? void 0 : content.relative) {
              return content.relative;
            }
            return (0, _featureFlags.flagEnabled)(config, "relativeContentPathsByDefault");
          })(),
          files: (() => {
            let { content, purge } = config;
            if (Array.isArray(purge))
              return purge;
            if (Array.isArray(purge === null || purge === void 0 ? void 0 : purge.content))
              return purge.content;
            if (Array.isArray(content))
              return content;
            if (Array.isArray(content === null || content === void 0 ? void 0 : content.content))
              return content.content;
            if (Array.isArray(content === null || content === void 0 ? void 0 : content.files))
              return content.files;
            return [];
          })(),
          extract: (() => {
            let extract = (() => {
              var _config_purge, _config_content, _config_purge1, _config_purge_extract, _config_content1, _config_content_extract, _config_purge2, _config_purge_options, _config_content2, _config_content_options;
              if ((_config_purge = config.purge) === null || _config_purge === void 0 ? void 0 : _config_purge.extract)
                return config.purge.extract;
              if ((_config_content = config.content) === null || _config_content === void 0 ? void 0 : _config_content.extract)
                return config.content.extract;
              if ((_config_purge1 = config.purge) === null || _config_purge1 === void 0 ? void 0 : (_config_purge_extract = _config_purge1.extract) === null || _config_purge_extract === void 0 ? void 0 : _config_purge_extract.DEFAULT)
                return config.purge.extract.DEFAULT;
              if ((_config_content1 = config.content) === null || _config_content1 === void 0 ? void 0 : (_config_content_extract = _config_content1.extract) === null || _config_content_extract === void 0 ? void 0 : _config_content_extract.DEFAULT)
                return config.content.extract.DEFAULT;
              if ((_config_purge2 = config.purge) === null || _config_purge2 === void 0 ? void 0 : (_config_purge_options = _config_purge2.options) === null || _config_purge_options === void 0 ? void 0 : _config_purge_options.extractors)
                return config.purge.options.extractors;
              if ((_config_content2 = config.content) === null || _config_content2 === void 0 ? void 0 : (_config_content_options = _config_content2.options) === null || _config_content_options === void 0 ? void 0 : _config_content_options.extractors)
                return config.content.options.extractors;
              return {};
            })();
            let extractors = {};
            let defaultExtractor = (() => {
              var _config_purge, _config_purge_options, _config_content, _config_content_options;
              if ((_config_purge = config.purge) === null || _config_purge === void 0 ? void 0 : (_config_purge_options = _config_purge.options) === null || _config_purge_options === void 0 ? void 0 : _config_purge_options.defaultExtractor) {
                return config.purge.options.defaultExtractor;
              }
              if ((_config_content = config.content) === null || _config_content === void 0 ? void 0 : (_config_content_options = _config_content.options) === null || _config_content_options === void 0 ? void 0 : _config_content_options.defaultExtractor) {
                return config.content.options.defaultExtractor;
              }
              return void 0;
            })();
            if (defaultExtractor !== void 0) {
              extractors.DEFAULT = defaultExtractor;
            }
            if (typeof extract === "function") {
              extractors.DEFAULT = extract;
            } else if (Array.isArray(extract)) {
              for (let { extensions, extractor } of extract !== null && extract !== void 0 ? extract : []) {
                for (let extension of extensions) {
                  extractors[extension] = extractor;
                }
              }
            } else if (typeof extract === "object" && extract !== null) {
              Object.assign(extractors, extract);
            }
            return extractors;
          })(),
          transform: (() => {
            let transform = (() => {
              var _config_purge, _config_content, _config_purge1, _config_purge_transform, _config_content1, _config_content_transform;
              if ((_config_purge = config.purge) === null || _config_purge === void 0 ? void 0 : _config_purge.transform)
                return config.purge.transform;
              if ((_config_content = config.content) === null || _config_content === void 0 ? void 0 : _config_content.transform)
                return config.content.transform;
              if ((_config_purge1 = config.purge) === null || _config_purge1 === void 0 ? void 0 : (_config_purge_transform = _config_purge1.transform) === null || _config_purge_transform === void 0 ? void 0 : _config_purge_transform.DEFAULT)
                return config.purge.transform.DEFAULT;
              if ((_config_content1 = config.content) === null || _config_content1 === void 0 ? void 0 : (_config_content_transform = _config_content1.transform) === null || _config_content_transform === void 0 ? void 0 : _config_content_transform.DEFAULT)
                return config.content.transform.DEFAULT;
              return {};
            })();
            let transformers = {};
            if (typeof transform === "function") {
              transformers.DEFAULT = transform;
            } else if (typeof transform === "object" && transform !== null) {
              Object.assign(transformers, transform);
            }
            return transformers;
          })()
        };
        for (let file of config.content.files) {
          if (typeof file === "string" && /{([^,]*?)}/g.test(file)) {
            _log.default.warn("invalid-glob-braces", [
              `The glob pattern ${(0, _log.dim)(file)} in your Tailwind CSS configuration is invalid.`,
              `Update it to ${(0, _log.dim)(file.replace(/{([^,]*?)}/g, "$1"))} to silence this warning.`
            ]);
            break;
          }
        }
        return config;
      }
    }
  });

  // node_modules/tailwindcss/lib/util/isPlainObject.js
  var require_isPlainObject = __commonJS({
    "node_modules/tailwindcss/lib/util/isPlainObject.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return isPlainObject;
        }
      });
      function isPlainObject(value) {
        if (Object.prototype.toString.call(value) !== "[object Object]") {
          return false;
        }
        const prototype = Object.getPrototypeOf(value);
        return prototype === null || Object.getPrototypeOf(prototype) === null;
      }
    }
  });

  // node_modules/tailwindcss/lib/util/cloneDeep.js
  var require_cloneDeep = __commonJS({
    "node_modules/tailwindcss/lib/util/cloneDeep.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "cloneDeep", {
        enumerable: true,
        get: function() {
          return cloneDeep;
        }
      });
      function cloneDeep(value) {
        if (Array.isArray(value)) {
          return value.map((child) => cloneDeep(child));
        }
        if (typeof value === "object" && value !== null) {
          return Object.fromEntries(Object.entries(value).map(([k, v]) => [
            k,
            cloneDeep(v)
          ]));
        }
        return value;
      }
    }
  });

  // node_modules/tailwindcss/lib/util/escapeCommas.js
  var require_escapeCommas = __commonJS({
    "node_modules/tailwindcss/lib/util/escapeCommas.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return escapeCommas;
        }
      });
      function escapeCommas(className) {
        return className.replace(/\\,/g, "\\2c ");
      }
    }
  });

  // node_modules/tailwindcss/lib/util/withAlphaVariable.js
  var require_withAlphaVariable = __commonJS({
    "node_modules/tailwindcss/lib/util/withAlphaVariable.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        withAlphaValue: function() {
          return withAlphaValue;
        },
        default: function() {
          return withAlphaVariable;
        }
      });
      var _color = require_color();
      function withAlphaValue(color, alphaValue, defaultValue) {
        if (typeof color === "function") {
          return color({
            opacityValue: alphaValue
          });
        }
        let parsed = (0, _color.parseColor)(color, {
          loose: true
        });
        if (parsed === null) {
          return defaultValue;
        }
        return (0, _color.formatColor)({
          ...parsed,
          alpha: alphaValue
        });
      }
      function withAlphaVariable({ color, property, variable }) {
        let properties = [].concat(property);
        if (typeof color === "function") {
          return {
            [variable]: "1",
            ...Object.fromEntries(properties.map((p) => {
              return [
                p,
                color({
                  opacityVariable: variable,
                  opacityValue: `var(${variable})`
                })
              ];
            }))
          };
        }
        const parsed = (0, _color.parseColor)(color);
        if (parsed === null) {
          return Object.fromEntries(properties.map((p) => [
            p,
            color
          ]));
        }
        if (parsed.alpha !== void 0) {
          return Object.fromEntries(properties.map((p) => [
            p,
            color
          ]));
        }
        return {
          [variable]: "1",
          ...Object.fromEntries(properties.map((p) => {
            return [
              p,
              (0, _color.formatColor)({
                ...parsed,
                alpha: `var(${variable})`
              })
            ];
          }))
        };
      }
    }
  });

  // node_modules/tailwindcss/lib/util/splitAtTopLevelOnly.js
  var require_splitAtTopLevelOnly = __commonJS({
    "node_modules/tailwindcss/lib/util/splitAtTopLevelOnly.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "splitAtTopLevelOnly", {
        enumerable: true,
        get: function() {
          return splitAtTopLevelOnly;
        }
      });
      function splitAtTopLevelOnly(input, separator) {
        let stack = [];
        let parts = [];
        let lastPos = 0;
        let isEscaped = false;
        for (let idx = 0; idx < input.length; idx++) {
          let char = input[idx];
          if (stack.length === 0 && char === separator[0] && !isEscaped) {
            if (separator.length === 1 || input.slice(idx, idx + separator.length) === separator) {
              parts.push(input.slice(lastPos, idx));
              lastPos = idx + separator.length;
            }
          }
          isEscaped = isEscaped ? false : char === "\\";
          if (char === "(" || char === "[" || char === "{") {
            stack.push(char);
          } else if (char === ")" && stack[stack.length - 1] === "(" || char === "]" && stack[stack.length - 1] === "[" || char === "}" && stack[stack.length - 1] === "{") {
            stack.pop();
          }
        }
        parts.push(input.slice(lastPos));
        return parts;
      }
    }
  });

  // node_modules/tailwindcss/lib/util/parseBoxShadowValue.js
  var require_parseBoxShadowValue = __commonJS({
    "node_modules/tailwindcss/lib/util/parseBoxShadowValue.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        parseBoxShadowValue: function() {
          return parseBoxShadowValue;
        },
        formatBoxShadowValue: function() {
          return formatBoxShadowValue;
        }
      });
      var _splitAtTopLevelOnly = require_splitAtTopLevelOnly();
      var KEYWORDS = /* @__PURE__ */ new Set([
        "inset",
        "inherit",
        "initial",
        "revert",
        "unset"
      ]);
      var SPACE = /\ +(?![^(]*\))/g;
      var LENGTH = /^-?(\d+|\.\d+)(.*?)$/g;
      function parseBoxShadowValue(input) {
        let shadows = (0, _splitAtTopLevelOnly.splitAtTopLevelOnly)(input, ",");
        return shadows.map((shadow) => {
          let value = shadow.trim();
          let result = {
            raw: value
          };
          let parts = value.split(SPACE);
          let seen = /* @__PURE__ */ new Set();
          for (let part of parts) {
            LENGTH.lastIndex = 0;
            if (!seen.has("KEYWORD") && KEYWORDS.has(part)) {
              result.keyword = part;
              seen.add("KEYWORD");
            } else if (LENGTH.test(part)) {
              if (!seen.has("X")) {
                result.x = part;
                seen.add("X");
              } else if (!seen.has("Y")) {
                result.y = part;
                seen.add("Y");
              } else if (!seen.has("BLUR")) {
                result.blur = part;
                seen.add("BLUR");
              } else if (!seen.has("SPREAD")) {
                result.spread = part;
                seen.add("SPREAD");
              }
            } else {
              if (!result.color) {
                result.color = part;
              } else {
                if (!result.unknown)
                  result.unknown = [];
                result.unknown.push(part);
              }
            }
          }
          result.valid = result.x !== void 0 && result.y !== void 0;
          return result;
        });
      }
      function formatBoxShadowValue(shadows) {
        return shadows.map((shadow) => {
          if (!shadow.valid) {
            return shadow.raw;
          }
          return [
            shadow.keyword,
            shadow.x,
            shadow.y,
            shadow.blur,
            shadow.spread,
            shadow.color
          ].filter(Boolean).join(" ");
        }).join(", ");
      }
    }
  });

  // node_modules/tailwindcss/lib/util/dataTypes.js
  var require_dataTypes = __commonJS({
    "node_modules/tailwindcss/lib/util/dataTypes.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        normalize: function() {
          return normalize;
        },
        normalizeAttributeSelectors: function() {
          return normalizeAttributeSelectors;
        },
        url: function() {
          return url;
        },
        number: function() {
          return number;
        },
        percentage: function() {
          return percentage;
        },
        length: function() {
          return length;
        },
        lineWidth: function() {
          return lineWidth;
        },
        shadow: function() {
          return shadow;
        },
        color: function() {
          return color;
        },
        image: function() {
          return image;
        },
        gradient: function() {
          return gradient;
        },
        position: function() {
          return position;
        },
        familyName: function() {
          return familyName;
        },
        genericName: function() {
          return genericName;
        },
        absoluteSize: function() {
          return absoluteSize;
        },
        relativeSize: function() {
          return relativeSize;
        }
      });
      var _color = require_color();
      var _parseBoxShadowValue = require_parseBoxShadowValue();
      var _splitAtTopLevelOnly = require_splitAtTopLevelOnly();
      var cssFunctions = [
        "min",
        "max",
        "clamp",
        "calc"
      ];
      function isCSSFunction(value) {
        return cssFunctions.some((fn) => new RegExp(`^${fn}\\(.*\\)`).test(value));
      }
      var AUTO_VAR_INJECTION_EXCEPTIONS = /* @__PURE__ */ new Set([
        // Concrete properties
        "scroll-timeline-name",
        "timeline-scope",
        "view-timeline-name",
        "font-palette",
        "anchor-name",
        "anchor-scope",
        "position-anchor",
        "position-try-options",
        // Shorthand properties
        "scroll-timeline",
        "animation-timeline",
        "view-timeline",
        "position-try"
      ]);
      function normalize(value, context = null, isRoot = true) {
        let isVarException = context && AUTO_VAR_INJECTION_EXCEPTIONS.has(context.property);
        if (value.startsWith("--") && !isVarException) {
          return `var(${value})`;
        }
        if (value.includes("url(")) {
          return value.split(/(url\(.*?\))/g).filter(Boolean).map((part) => {
            if (/^url\(.*?\)$/.test(part)) {
              return part;
            }
            return normalize(part, context, false);
          }).join("");
        }
        value = value.replace(/([^\\])_+/g, (fullMatch, characterBefore) => characterBefore + " ".repeat(fullMatch.length - 1)).replace(/^_/g, " ").replace(/\\_/g, "_");
        if (isRoot) {
          value = value.trim();
        }
        value = normalizeMathOperatorSpacing(value);
        return value;
      }
      function normalizeAttributeSelectors(value) {
        if (value.includes("=")) {
          value = value.replace(/(=.*)/g, (_fullMatch, match) => {
            if (match[1] === "'" || match[1] === '"') {
              return match;
            }
            if (match.length > 2) {
              let trailingCharacter = match[match.length - 1];
              if (match[match.length - 2] === " " && (trailingCharacter === "i" || trailingCharacter === "I" || trailingCharacter === "s" || trailingCharacter === "S")) {
                return `="${match.slice(1, -2)}" ${match[match.length - 1]}`;
              }
            }
            return `="${match.slice(1)}"`;
          });
        }
        return value;
      }
      function normalizeMathOperatorSpacing(value) {
        let preventFormattingInFunctions = [
          "theme"
        ];
        let preventFormattingKeywords = [
          "min-content",
          "max-content",
          "fit-content",
          // Env
          "safe-area-inset-top",
          "safe-area-inset-right",
          "safe-area-inset-bottom",
          "safe-area-inset-left",
          "titlebar-area-x",
          "titlebar-area-y",
          "titlebar-area-width",
          "titlebar-area-height",
          "keyboard-inset-top",
          "keyboard-inset-right",
          "keyboard-inset-bottom",
          "keyboard-inset-left",
          "keyboard-inset-width",
          "keyboard-inset-height",
          "radial-gradient",
          "linear-gradient",
          "conic-gradient",
          "repeating-radial-gradient",
          "repeating-linear-gradient",
          "repeating-conic-gradient",
          "anchor-size"
        ];
        return value.replace(/(calc|min|max|clamp)\(.+\)/g, (match) => {
          let result = "";
          function lastChar() {
            let char = result.trimEnd();
            return char[char.length - 1];
          }
          for (let i = 0; i < match.length; i++) {
            let peek = function(word) {
              return word.split("").every((char2, j) => match[i + j] === char2);
            }, consumeUntil = function(chars) {
              let minIndex = Infinity;
              for (let char2 of chars) {
                let index = match.indexOf(char2, i);
                if (index !== -1 && index < minIndex) {
                  minIndex = index;
                }
              }
              let result2 = match.slice(i, minIndex);
              i += result2.length - 1;
              return result2;
            };
            let char = match[i];
            if (peek("var")) {
              result += consumeUntil([
                ")",
                ","
              ]);
            } else if (preventFormattingKeywords.some((keyword) => peek(keyword))) {
              let keyword = preventFormattingKeywords.find((keyword2) => peek(keyword2));
              result += keyword;
              i += keyword.length - 1;
            } else if (preventFormattingInFunctions.some((fn) => peek(fn))) {
              result += consumeUntil([
                ")"
              ]);
            } else if (peek("[")) {
              result += consumeUntil([
                "]"
              ]);
            } else if ([
              "+",
              "-",
              "*",
              "/"
            ].includes(char) && ![
              "(",
              "+",
              "-",
              "*",
              "/",
              ","
            ].includes(lastChar())) {
              result += ` ${char} `;
            } else {
              result += char;
            }
          }
          return result.replace(/\s+/g, " ");
        });
      }
      function url(value) {
        return value.startsWith("url(");
      }
      function number(value) {
        return !isNaN(Number(value)) || isCSSFunction(value);
      }
      function percentage(value) {
        return value.endsWith("%") && number(value.slice(0, -1)) || isCSSFunction(value);
      }
      var lengthUnits = [
        "cm",
        "mm",
        "Q",
        "in",
        "pc",
        "pt",
        "px",
        "em",
        "ex",
        "ch",
        "rem",
        "lh",
        "rlh",
        "vw",
        "vh",
        "vmin",
        "vmax",
        "vb",
        "vi",
        "svw",
        "svh",
        "lvw",
        "lvh",
        "dvw",
        "dvh",
        "cqw",
        "cqh",
        "cqi",
        "cqb",
        "cqmin",
        "cqmax"
      ];
      var lengthUnitsPattern = `(?:${lengthUnits.join("|")})`;
      function length(value) {
        return value === "0" || new RegExp(`^[+-]?[0-9]*.?[0-9]+(?:[eE][+-]?[0-9]+)?${lengthUnitsPattern}$`).test(value) || isCSSFunction(value);
      }
      var lineWidths = /* @__PURE__ */ new Set([
        "thin",
        "medium",
        "thick"
      ]);
      function lineWidth(value) {
        return lineWidths.has(value);
      }
      function shadow(value) {
        let parsedShadows = (0, _parseBoxShadowValue.parseBoxShadowValue)(normalize(value));
        for (let parsedShadow of parsedShadows) {
          if (!parsedShadow.valid) {
            return false;
          }
        }
        return true;
      }
      function color(value) {
        let colors2 = 0;
        let result = (0, _splitAtTopLevelOnly.splitAtTopLevelOnly)(value, "_").every((part) => {
          part = normalize(part);
          if (part.startsWith("var("))
            return true;
          if ((0, _color.parseColor)(part, {
            loose: true
          }) !== null)
            return colors2++, true;
          return false;
        });
        if (!result)
          return false;
        return colors2 > 0;
      }
      function image(value) {
        let images = 0;
        let result = (0, _splitAtTopLevelOnly.splitAtTopLevelOnly)(value, ",").every((part) => {
          part = normalize(part);
          if (part.startsWith("var("))
            return true;
          if (url(part) || gradient(part) || [
            "element(",
            "image(",
            "cross-fade(",
            "image-set("
          ].some((fn) => part.startsWith(fn))) {
            images++;
            return true;
          }
          return false;
        });
        if (!result)
          return false;
        return images > 0;
      }
      var gradientTypes = /* @__PURE__ */ new Set([
        "conic-gradient",
        "linear-gradient",
        "radial-gradient",
        "repeating-conic-gradient",
        "repeating-linear-gradient",
        "repeating-radial-gradient"
      ]);
      function gradient(value) {
        value = normalize(value);
        for (let type of gradientTypes) {
          if (value.startsWith(`${type}(`)) {
            return true;
          }
        }
        return false;
      }
      var validPositions = /* @__PURE__ */ new Set([
        "center",
        "top",
        "right",
        "bottom",
        "left"
      ]);
      function position(value) {
        let positions = 0;
        let result = (0, _splitAtTopLevelOnly.splitAtTopLevelOnly)(value, "_").every((part) => {
          part = normalize(part);
          if (part.startsWith("var("))
            return true;
          if (validPositions.has(part) || length(part) || percentage(part)) {
            positions++;
            return true;
          }
          return false;
        });
        if (!result)
          return false;
        return positions > 0;
      }
      function familyName(value) {
        let fonts = 0;
        let result = (0, _splitAtTopLevelOnly.splitAtTopLevelOnly)(value, ",").every((part) => {
          part = normalize(part);
          if (part.startsWith("var("))
            return true;
          if (part.includes(" ")) {
            if (!/(['"])([^"']+)\1/g.test(part)) {
              return false;
            }
          }
          if (/^\d/g.test(part)) {
            return false;
          }
          fonts++;
          return true;
        });
        if (!result)
          return false;
        return fonts > 0;
      }
      var genericNames = /* @__PURE__ */ new Set([
        "serif",
        "sans-serif",
        "monospace",
        "cursive",
        "fantasy",
        "system-ui",
        "ui-serif",
        "ui-sans-serif",
        "ui-monospace",
        "ui-rounded",
        "math",
        "emoji",
        "fangsong"
      ]);
      function genericName(value) {
        return genericNames.has(value);
      }
      var absoluteSizes = /* @__PURE__ */ new Set([
        "xx-small",
        "x-small",
        "small",
        "medium",
        "large",
        "x-large",
        "xx-large",
        "xxx-large"
      ]);
      function absoluteSize(value) {
        return absoluteSizes.has(value);
      }
      var relativeSizes = /* @__PURE__ */ new Set([
        "larger",
        "smaller"
      ]);
      function relativeSize(value) {
        return relativeSizes.has(value);
      }
    }
  });

  // node_modules/tailwindcss/lib/util/validateFormalSyntax.js
  var require_validateFormalSyntax = __commonJS({
    "node_modules/tailwindcss/lib/util/validateFormalSyntax.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "backgroundSize", {
        enumerable: true,
        get: function() {
          return backgroundSize;
        }
      });
      var _dataTypes = require_dataTypes();
      var _splitAtTopLevelOnly = require_splitAtTopLevelOnly();
      function backgroundSize(value) {
        let keywordValues = [
          "cover",
          "contain"
        ];
        return (0, _splitAtTopLevelOnly.splitAtTopLevelOnly)(value, ",").every((part) => {
          let sizes = (0, _splitAtTopLevelOnly.splitAtTopLevelOnly)(part, "_").filter(Boolean);
          if (sizes.length === 1 && keywordValues.includes(sizes[0]))
            return true;
          if (sizes.length !== 1 && sizes.length !== 2)
            return false;
          return sizes.every((size) => (0, _dataTypes.length)(size) || (0, _dataTypes.percentage)(size) || size === "auto");
        });
      }
    }
  });

  // node_modules/tailwindcss/lib/util/pluginUtils.js
  var require_pluginUtils = __commonJS({
    "node_modules/tailwindcss/lib/util/pluginUtils.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        updateAllClasses: function() {
          return updateAllClasses;
        },
        asValue: function() {
          return asValue;
        },
        parseColorFormat: function() {
          return parseColorFormat;
        },
        asColor: function() {
          return asColor;
        },
        asLookupValue: function() {
          return asLookupValue;
        },
        typeMap: function() {
          return typeMap;
        },
        coerceValue: function() {
          return coerceValue;
        },
        getMatchingTypes: function() {
          return getMatchingTypes;
        }
      });
      var _escapeCommas = /* @__PURE__ */ _interop_require_default(require_escapeCommas());
      var _withAlphaVariable = require_withAlphaVariable();
      var _dataTypes = require_dataTypes();
      var _negateValue = /* @__PURE__ */ _interop_require_default(require_negateValue());
      var _validateFormalSyntax = require_validateFormalSyntax();
      var _featureFlags = require_featureFlags();
      function _interop_require_default(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      function updateAllClasses(selectors, updateClass) {
        selectors.walkClasses((sel) => {
          sel.value = updateClass(sel.value);
          if (sel.raws && sel.raws.value) {
            sel.raws.value = (0, _escapeCommas.default)(sel.raws.value);
          }
        });
      }
      function resolveArbitraryValue(modifier, validate) {
        if (!isArbitraryValue(modifier)) {
          return void 0;
        }
        let value = modifier.slice(1, -1);
        if (!validate(value)) {
          return void 0;
        }
        return (0, _dataTypes.normalize)(value);
      }
      function asNegativeValue(modifier, lookup = {}, validate) {
        let positiveValue = lookup[modifier];
        if (positiveValue !== void 0) {
          return (0, _negateValue.default)(positiveValue);
        }
        if (isArbitraryValue(modifier)) {
          let resolved = resolveArbitraryValue(modifier, validate);
          if (resolved === void 0) {
            return void 0;
          }
          return (0, _negateValue.default)(resolved);
        }
      }
      function asValue(modifier, options = {}, { validate = () => true } = {}) {
        var _options_values;
        let value = (_options_values = options.values) === null || _options_values === void 0 ? void 0 : _options_values[modifier];
        if (value !== void 0) {
          return value;
        }
        if (options.supportsNegativeValues && modifier.startsWith("-")) {
          return asNegativeValue(modifier.slice(1), options.values, validate);
        }
        return resolveArbitraryValue(modifier, validate);
      }
      function isArbitraryValue(input) {
        return input.startsWith("[") && input.endsWith("]");
      }
      function splitUtilityModifier(modifier) {
        let slashIdx = modifier.lastIndexOf("/");
        let arbitraryStartIdx = modifier.lastIndexOf("[", slashIdx);
        let arbitraryEndIdx = modifier.indexOf("]", slashIdx);
        let isNextToArbitrary = modifier[slashIdx - 1] === "]" || modifier[slashIdx + 1] === "[";
        if (!isNextToArbitrary) {
          if (arbitraryStartIdx !== -1 && arbitraryEndIdx !== -1) {
            if (arbitraryStartIdx < slashIdx && slashIdx < arbitraryEndIdx) {
              slashIdx = modifier.lastIndexOf("/", arbitraryStartIdx);
            }
          }
        }
        if (slashIdx === -1 || slashIdx === modifier.length - 1) {
          return [
            modifier,
            void 0
          ];
        }
        let arbitrary = isArbitraryValue(modifier);
        if (arbitrary && !modifier.includes("]/[")) {
          return [
            modifier,
            void 0
          ];
        }
        return [
          modifier.slice(0, slashIdx),
          modifier.slice(slashIdx + 1)
        ];
      }
      function parseColorFormat(value) {
        if (typeof value === "string" && value.includes("<alpha-value>")) {
          let oldValue = value;
          return ({ opacityValue = 1 }) => oldValue.replace(/<alpha-value>/g, opacityValue);
        }
        return value;
      }
      function unwrapArbitraryModifier(modifier) {
        return (0, _dataTypes.normalize)(modifier.slice(1, -1));
      }
      function asColor(modifier, options = {}, { tailwindConfig: tailwindConfig2 = {} } = {}) {
        var _options_values;
        if (((_options_values = options.values) === null || _options_values === void 0 ? void 0 : _options_values[modifier]) !== void 0) {
          var _options_values1;
          return parseColorFormat((_options_values1 = options.values) === null || _options_values1 === void 0 ? void 0 : _options_values1[modifier]);
        }
        let [color, alpha] = splitUtilityModifier(modifier);
        if (alpha !== void 0) {
          var _options_values2, _tailwindConfig_theme, _tailwindConfig_theme_opacity;
          var _options_values_color;
          let normalizedColor = (_options_values_color = (_options_values2 = options.values) === null || _options_values2 === void 0 ? void 0 : _options_values2[color]) !== null && _options_values_color !== void 0 ? _options_values_color : isArbitraryValue(color) ? color.slice(1, -1) : void 0;
          if (normalizedColor === void 0) {
            return void 0;
          }
          normalizedColor = parseColorFormat(normalizedColor);
          if (isArbitraryValue(alpha)) {
            return (0, _withAlphaVariable.withAlphaValue)(normalizedColor, unwrapArbitraryModifier(alpha));
          }
          if (((_tailwindConfig_theme = tailwindConfig2.theme) === null || _tailwindConfig_theme === void 0 ? void 0 : (_tailwindConfig_theme_opacity = _tailwindConfig_theme.opacity) === null || _tailwindConfig_theme_opacity === void 0 ? void 0 : _tailwindConfig_theme_opacity[alpha]) === void 0) {
            return void 0;
          }
          return (0, _withAlphaVariable.withAlphaValue)(normalizedColor, tailwindConfig2.theme.opacity[alpha]);
        }
        return asValue(modifier, options, {
          validate: _dataTypes.color
        });
      }
      function asLookupValue(modifier, options = {}) {
        var _options_values;
        return (_options_values = options.values) === null || _options_values === void 0 ? void 0 : _options_values[modifier];
      }
      function guess(validate) {
        return (modifier, options) => {
          return asValue(modifier, options, {
            validate
          });
        };
      }
      var typeMap = {
        any: asValue,
        color: asColor,
        url: guess(_dataTypes.url),
        image: guess(_dataTypes.image),
        length: guess(_dataTypes.length),
        percentage: guess(_dataTypes.percentage),
        position: guess(_dataTypes.position),
        lookup: asLookupValue,
        "generic-name": guess(_dataTypes.genericName),
        "family-name": guess(_dataTypes.familyName),
        number: guess(_dataTypes.number),
        "line-width": guess(_dataTypes.lineWidth),
        "absolute-size": guess(_dataTypes.absoluteSize),
        "relative-size": guess(_dataTypes.relativeSize),
        shadow: guess(_dataTypes.shadow),
        size: guess(_validateFormalSyntax.backgroundSize)
      };
      var supportedTypes = Object.keys(typeMap);
      function splitAtFirst(input, delim) {
        let idx = input.indexOf(delim);
        if (idx === -1)
          return [
            void 0,
            input
          ];
        return [
          input.slice(0, idx),
          input.slice(idx + 1)
        ];
      }
      function coerceValue(types, modifier, options, tailwindConfig2) {
        if (options.values && modifier in options.values) {
          for (let { type } of types !== null && types !== void 0 ? types : []) {
            let result = typeMap[type](modifier, options, {
              tailwindConfig: tailwindConfig2
            });
            if (result === void 0) {
              continue;
            }
            return [
              result,
              type,
              null
            ];
          }
        }
        if (isArbitraryValue(modifier)) {
          let arbitraryValue = modifier.slice(1, -1);
          let [explicitType, value] = splitAtFirst(arbitraryValue, ":");
          if (!/^[\w-_]+$/g.test(explicitType)) {
            value = arbitraryValue;
          } else if (explicitType !== void 0 && !supportedTypes.includes(explicitType)) {
            return [];
          }
          if (value.length > 0 && supportedTypes.includes(explicitType)) {
            return [
              asValue(`[${value}]`, options),
              explicitType,
              null
            ];
          }
        }
        let matches = getMatchingTypes(types, modifier, options, tailwindConfig2);
        for (let match of matches) {
          return match;
        }
        return [];
      }
      function* getMatchingTypes(types, rawModifier, options, tailwindConfig2) {
        let modifiersEnabled = (0, _featureFlags.flagEnabled)(tailwindConfig2, "generalizedModifiers");
        let [modifier, utilityModifier] = splitUtilityModifier(rawModifier);
        let canUseUtilityModifier = modifiersEnabled && options.modifiers != null && (options.modifiers === "any" || typeof options.modifiers === "object" && (utilityModifier && isArbitraryValue(utilityModifier) || utilityModifier in options.modifiers));
        if (!canUseUtilityModifier) {
          modifier = rawModifier;
          utilityModifier = void 0;
        }
        if (utilityModifier !== void 0 && modifier === "") {
          modifier = "DEFAULT";
        }
        if (utilityModifier !== void 0) {
          if (typeof options.modifiers === "object") {
            var _options_modifiers;
            var _options_modifiers_utilityModifier;
            let configValue = (_options_modifiers_utilityModifier = (_options_modifiers = options.modifiers) === null || _options_modifiers === void 0 ? void 0 : _options_modifiers[utilityModifier]) !== null && _options_modifiers_utilityModifier !== void 0 ? _options_modifiers_utilityModifier : null;
            if (configValue !== null) {
              utilityModifier = configValue;
            } else if (isArbitraryValue(utilityModifier)) {
              utilityModifier = unwrapArbitraryModifier(utilityModifier);
            }
          }
        }
        for (let { type } of types !== null && types !== void 0 ? types : []) {
          let result = typeMap[type](modifier, options, {
            tailwindConfig: tailwindConfig2
          });
          if (result === void 0) {
            continue;
          }
          yield [
            result,
            type,
            utilityModifier !== null && utilityModifier !== void 0 ? utilityModifier : null
          ];
        }
      }
    }
  });

  // node_modules/tailwindcss/lib/util/toColorValue.js
  var require_toColorValue = __commonJS({
    "node_modules/tailwindcss/lib/util/toColorValue.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return toColorValue;
        }
      });
      function toColorValue(maybeFunction) {
        return typeof maybeFunction === "function" ? maybeFunction({}) : maybeFunction;
      }
    }
  });

  // node_modules/tailwindcss/lib/util/resolveConfig.js
  var require_resolveConfig = __commonJS({
    "node_modules/tailwindcss/lib/util/resolveConfig.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return resolveConfig2;
        }
      });
      var _negateValue = /* @__PURE__ */ _interop_require_default(require_negateValue());
      var _corePluginList = /* @__PURE__ */ _interop_require_default(require_corePluginList());
      var _configurePlugins = /* @__PURE__ */ _interop_require_default(require_configurePlugins());
      var _colors = /* @__PURE__ */ _interop_require_default(require_colors());
      var _defaults = require_defaults();
      var _toPath = require_toPath();
      var _normalizeConfig = require_normalizeConfig();
      var _isPlainObject = /* @__PURE__ */ _interop_require_default(require_isPlainObject());
      var _cloneDeep = require_cloneDeep();
      var _pluginUtils = require_pluginUtils();
      var _withAlphaVariable = require_withAlphaVariable();
      var _toColorValue = /* @__PURE__ */ _interop_require_default(require_toColorValue());
      function _interop_require_default(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      function isFunction(input) {
        return typeof input === "function";
      }
      function mergeWith(target, ...sources) {
        let customizer = sources.pop();
        for (let source of sources) {
          for (let k in source) {
            let merged = customizer(target[k], source[k]);
            if (merged === void 0) {
              if ((0, _isPlainObject.default)(target[k]) && (0, _isPlainObject.default)(source[k])) {
                target[k] = mergeWith({}, target[k], source[k], customizer);
              } else {
                target[k] = source[k];
              }
            } else {
              target[k] = merged;
            }
          }
        }
        return target;
      }
      var configUtils = {
        colors: _colors.default,
        negative(scale) {
          return Object.keys(scale).filter((key) => scale[key] !== "0").reduce((negativeScale, key) => {
            let negativeValue = (0, _negateValue.default)(scale[key]);
            if (negativeValue !== void 0) {
              negativeScale[`-${key}`] = negativeValue;
            }
            return negativeScale;
          }, {});
        },
        breakpoints(screens) {
          return Object.keys(screens).filter((key) => typeof screens[key] === "string").reduce((breakpoints, key) => ({
            ...breakpoints,
            [`screen-${key}`]: screens[key]
          }), {});
        }
      };
      function value(valueToResolve, ...args) {
        return isFunction(valueToResolve) ? valueToResolve(...args) : valueToResolve;
      }
      function collectExtends(items) {
        return items.reduce((merged, { extend }) => {
          return mergeWith(merged, extend, (mergedValue, extendValue) => {
            if (mergedValue === void 0) {
              return [
                extendValue
              ];
            }
            if (Array.isArray(mergedValue)) {
              return [
                extendValue,
                ...mergedValue
              ];
            }
            return [
              extendValue,
              mergedValue
            ];
          });
        }, {});
      }
      function mergeThemes(themes) {
        return {
          ...themes.reduce((merged, theme) => (0, _defaults.defaults)(merged, theme), {}),
          // In order to resolve n config objects, we combine all of their `extend` properties
          // into arrays instead of objects so they aren't overridden.
          extend: collectExtends(themes)
        };
      }
      function mergeExtensionCustomizer(merged, value2) {
        if (Array.isArray(merged) && (0, _isPlainObject.default)(merged[0])) {
          return merged.concat(value2);
        }
        if (Array.isArray(value2) && (0, _isPlainObject.default)(value2[0]) && (0, _isPlainObject.default)(merged)) {
          return [
            merged,
            ...value2
          ];
        }
        if (Array.isArray(value2)) {
          return value2;
        }
        return void 0;
      }
      function mergeExtensions({ extend, ...theme }) {
        return mergeWith(theme, extend, (themeValue, extensions) => {
          if (!isFunction(themeValue) && !extensions.some(isFunction)) {
            return mergeWith({}, themeValue, ...extensions, mergeExtensionCustomizer);
          }
          return (resolveThemePath, utils) => mergeWith({}, ...[
            themeValue,
            ...extensions
          ].map((e) => value(e, resolveThemePath, utils)), mergeExtensionCustomizer);
        });
      }
      function* toPaths(key) {
        let path = (0, _toPath.toPath)(key);
        if (path.length === 0) {
          return;
        }
        yield path;
        if (Array.isArray(key)) {
          return;
        }
        let pattern = /^(.*?)\s*\/\s*([^/]+)$/;
        let matches = key.match(pattern);
        if (matches !== null) {
          let [, prefix, alpha] = matches;
          let newPath = (0, _toPath.toPath)(prefix);
          newPath.alpha = alpha;
          yield newPath;
        }
      }
      function resolveFunctionKeys(object) {
        const resolvePath = (key, defaultValue) => {
          for (const path of toPaths(key)) {
            let index = 0;
            let val = object;
            while (val !== void 0 && val !== null && index < path.length) {
              val = val[path[index++]];
              let shouldResolveAsFn = isFunction(val) && (path.alpha === void 0 || index <= path.length - 1);
              val = shouldResolveAsFn ? val(resolvePath, configUtils) : val;
            }
            if (val !== void 0) {
              if (path.alpha !== void 0) {
                let normalized = (0, _pluginUtils.parseColorFormat)(val);
                return (0, _withAlphaVariable.withAlphaValue)(normalized, path.alpha, (0, _toColorValue.default)(normalized));
              }
              if ((0, _isPlainObject.default)(val)) {
                return (0, _cloneDeep.cloneDeep)(val);
              }
              return val;
            }
          }
          return defaultValue;
        };
        Object.assign(resolvePath, {
          theme: resolvePath,
          ...configUtils
        });
        return Object.keys(object).reduce((resolved, key) => {
          resolved[key] = isFunction(object[key]) ? object[key](resolvePath, configUtils) : object[key];
          return resolved;
        }, {});
      }
      function extractPluginConfigs(configs) {
        let allConfigs = [];
        configs.forEach((config) => {
          allConfigs = [
            ...allConfigs,
            config
          ];
          var _config_plugins;
          const plugins = (_config_plugins = config === null || config === void 0 ? void 0 : config.plugins) !== null && _config_plugins !== void 0 ? _config_plugins : [];
          if (plugins.length === 0) {
            return;
          }
          plugins.forEach((plugin) => {
            if (plugin.__isOptionsFunction) {
              plugin = plugin();
            }
            var _plugin_config;
            allConfigs = [
              ...allConfigs,
              ...extractPluginConfigs([
                (_plugin_config = plugin === null || plugin === void 0 ? void 0 : plugin.config) !== null && _plugin_config !== void 0 ? _plugin_config : {}
              ])
            ];
          });
        });
        return allConfigs;
      }
      function resolveCorePlugins(corePluginConfigs) {
        const result = [
          ...corePluginConfigs
        ].reduceRight((resolved, corePluginConfig) => {
          if (isFunction(corePluginConfig)) {
            return corePluginConfig({
              corePlugins: resolved
            });
          }
          return (0, _configurePlugins.default)(corePluginConfig, resolved);
        }, _corePluginList.default);
        return result;
      }
      function resolvePluginLists(pluginLists) {
        const result = [
          ...pluginLists
        ].reduceRight((resolved, pluginList) => {
          return [
            ...resolved,
            ...pluginList
          ];
        }, []);
        return result;
      }
      function resolveConfig2(configs) {
        let allConfigs = [
          ...extractPluginConfigs(configs),
          {
            prefix: "",
            important: false,
            separator: ":"
          }
        ];
        var _t_theme, _c_plugins;
        return (0, _normalizeConfig.normalizeConfig)((0, _defaults.defaults)({
          theme: resolveFunctionKeys(mergeExtensions(mergeThemes(allConfigs.map((t) => {
            return (_t_theme = t === null || t === void 0 ? void 0 : t.theme) !== null && _t_theme !== void 0 ? _t_theme : {};
          })))),
          corePlugins: resolveCorePlugins(allConfigs.map((c) => c.corePlugins)),
          plugins: resolvePluginLists(configs.map((c) => {
            return (_c_plugins = c === null || c === void 0 ? void 0 : c.plugins) !== null && _c_plugins !== void 0 ? _c_plugins : [];
          }))
        }, ...allConfigs));
      }
    }
  });

  // node_modules/tailwindcss/stubs/config.full.js
  var require_config_full = __commonJS({
    "node_modules/tailwindcss/stubs/config.full.js"(exports, module) {
      module.exports = {
        content: [],
        presets: [],
        darkMode: "media",
        // or 'class'
        theme: {
          accentColor: ({ theme }) => ({
            ...theme("colors"),
            auto: "auto"
          }),
          animation: {
            none: "none",
            spin: "spin 1s linear infinite",
            ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
            pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
            bounce: "bounce 1s infinite"
          },
          aria: {
            busy: 'busy="true"',
            checked: 'checked="true"',
            disabled: 'disabled="true"',
            expanded: 'expanded="true"',
            hidden: 'hidden="true"',
            pressed: 'pressed="true"',
            readonly: 'readonly="true"',
            required: 'required="true"',
            selected: 'selected="true"'
          },
          aspectRatio: {
            auto: "auto",
            square: "1 / 1",
            video: "16 / 9"
          },
          backdropBlur: ({ theme }) => theme("blur"),
          backdropBrightness: ({ theme }) => theme("brightness"),
          backdropContrast: ({ theme }) => theme("contrast"),
          backdropGrayscale: ({ theme }) => theme("grayscale"),
          backdropHueRotate: ({ theme }) => theme("hueRotate"),
          backdropInvert: ({ theme }) => theme("invert"),
          backdropOpacity: ({ theme }) => theme("opacity"),
          backdropSaturate: ({ theme }) => theme("saturate"),
          backdropSepia: ({ theme }) => theme("sepia"),
          backgroundColor: ({ theme }) => theme("colors"),
          backgroundImage: {
            none: "none",
            "gradient-to-t": "linear-gradient(to top, var(--tw-gradient-stops))",
            "gradient-to-tr": "linear-gradient(to top right, var(--tw-gradient-stops))",
            "gradient-to-r": "linear-gradient(to right, var(--tw-gradient-stops))",
            "gradient-to-br": "linear-gradient(to bottom right, var(--tw-gradient-stops))",
            "gradient-to-b": "linear-gradient(to bottom, var(--tw-gradient-stops))",
            "gradient-to-bl": "linear-gradient(to bottom left, var(--tw-gradient-stops))",
            "gradient-to-l": "linear-gradient(to left, var(--tw-gradient-stops))",
            "gradient-to-tl": "linear-gradient(to top left, var(--tw-gradient-stops))"
          },
          backgroundOpacity: ({ theme }) => theme("opacity"),
          backgroundPosition: {
            bottom: "bottom",
            center: "center",
            left: "left",
            "left-bottom": "left bottom",
            "left-top": "left top",
            right: "right",
            "right-bottom": "right bottom",
            "right-top": "right top",
            top: "top"
          },
          backgroundSize: {
            auto: "auto",
            cover: "cover",
            contain: "contain"
          },
          blur: {
            0: "0",
            none: "",
            sm: "4px",
            DEFAULT: "8px",
            md: "12px",
            lg: "16px",
            xl: "24px",
            "2xl": "40px",
            "3xl": "64px"
          },
          borderColor: ({ theme }) => ({
            ...theme("colors"),
            DEFAULT: theme("colors.gray.200", "currentColor")
          }),
          borderOpacity: ({ theme }) => theme("opacity"),
          borderRadius: {
            none: "0px",
            sm: "0.125rem",
            DEFAULT: "0.25rem",
            md: "0.375rem",
            lg: "0.5rem",
            xl: "0.75rem",
            "2xl": "1rem",
            "3xl": "1.5rem",
            full: "9999px"
          },
          borderSpacing: ({ theme }) => ({
            ...theme("spacing")
          }),
          borderWidth: {
            DEFAULT: "1px",
            0: "0px",
            2: "2px",
            4: "4px",
            8: "8px"
          },
          boxShadow: {
            sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
            DEFAULT: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
            md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
            lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
            xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
            "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
            inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
            none: "none"
          },
          boxShadowColor: ({ theme }) => theme("colors"),
          brightness: {
            0: "0",
            50: ".5",
            75: ".75",
            90: ".9",
            95: ".95",
            100: "1",
            105: "1.05",
            110: "1.1",
            125: "1.25",
            150: "1.5",
            200: "2"
          },
          caretColor: ({ theme }) => theme("colors"),
          colors: ({ colors: colors2 }) => ({
            inherit: colors2.inherit,
            current: colors2.current,
            transparent: colors2.transparent,
            black: colors2.black,
            white: colors2.white,
            slate: colors2.slate,
            gray: colors2.gray,
            zinc: colors2.zinc,
            neutral: colors2.neutral,
            stone: colors2.stone,
            red: colors2.red,
            orange: colors2.orange,
            amber: colors2.amber,
            yellow: colors2.yellow,
            lime: colors2.lime,
            green: colors2.green,
            emerald: colors2.emerald,
            teal: colors2.teal,
            cyan: colors2.cyan,
            sky: colors2.sky,
            blue: colors2.blue,
            indigo: colors2.indigo,
            violet: colors2.violet,
            purple: colors2.purple,
            fuchsia: colors2.fuchsia,
            pink: colors2.pink,
            rose: colors2.rose
          }),
          columns: {
            auto: "auto",
            1: "1",
            2: "2",
            3: "3",
            4: "4",
            5: "5",
            6: "6",
            7: "7",
            8: "8",
            9: "9",
            10: "10",
            11: "11",
            12: "12",
            "3xs": "16rem",
            "2xs": "18rem",
            xs: "20rem",
            sm: "24rem",
            md: "28rem",
            lg: "32rem",
            xl: "36rem",
            "2xl": "42rem",
            "3xl": "48rem",
            "4xl": "56rem",
            "5xl": "64rem",
            "6xl": "72rem",
            "7xl": "80rem"
          },
          container: {},
          content: {
            none: "none"
          },
          contrast: {
            0: "0",
            50: ".5",
            75: ".75",
            100: "1",
            125: "1.25",
            150: "1.5",
            200: "2"
          },
          cursor: {
            auto: "auto",
            default: "default",
            pointer: "pointer",
            wait: "wait",
            text: "text",
            move: "move",
            help: "help",
            "not-allowed": "not-allowed",
            none: "none",
            "context-menu": "context-menu",
            progress: "progress",
            cell: "cell",
            crosshair: "crosshair",
            "vertical-text": "vertical-text",
            alias: "alias",
            copy: "copy",
            "no-drop": "no-drop",
            grab: "grab",
            grabbing: "grabbing",
            "all-scroll": "all-scroll",
            "col-resize": "col-resize",
            "row-resize": "row-resize",
            "n-resize": "n-resize",
            "e-resize": "e-resize",
            "s-resize": "s-resize",
            "w-resize": "w-resize",
            "ne-resize": "ne-resize",
            "nw-resize": "nw-resize",
            "se-resize": "se-resize",
            "sw-resize": "sw-resize",
            "ew-resize": "ew-resize",
            "ns-resize": "ns-resize",
            "nesw-resize": "nesw-resize",
            "nwse-resize": "nwse-resize",
            "zoom-in": "zoom-in",
            "zoom-out": "zoom-out"
          },
          divideColor: ({ theme }) => theme("borderColor"),
          divideOpacity: ({ theme }) => theme("borderOpacity"),
          divideWidth: ({ theme }) => theme("borderWidth"),
          dropShadow: {
            sm: "0 1px 1px rgb(0 0 0 / 0.05)",
            DEFAULT: ["0 1px 2px rgb(0 0 0 / 0.1)", "0 1px 1px rgb(0 0 0 / 0.06)"],
            md: ["0 4px 3px rgb(0 0 0 / 0.07)", "0 2px 2px rgb(0 0 0 / 0.06)"],
            lg: ["0 10px 8px rgb(0 0 0 / 0.04)", "0 4px 3px rgb(0 0 0 / 0.1)"],
            xl: ["0 20px 13px rgb(0 0 0 / 0.03)", "0 8px 5px rgb(0 0 0 / 0.08)"],
            "2xl": "0 25px 25px rgb(0 0 0 / 0.15)",
            none: "0 0 #0000"
          },
          fill: ({ theme }) => ({
            none: "none",
            ...theme("colors")
          }),
          flex: {
            1: "1 1 0%",
            auto: "1 1 auto",
            initial: "0 1 auto",
            none: "none"
          },
          flexBasis: ({ theme }) => ({
            auto: "auto",
            ...theme("spacing"),
            "1/2": "50%",
            "1/3": "33.333333%",
            "2/3": "66.666667%",
            "1/4": "25%",
            "2/4": "50%",
            "3/4": "75%",
            "1/5": "20%",
            "2/5": "40%",
            "3/5": "60%",
            "4/5": "80%",
            "1/6": "16.666667%",
            "2/6": "33.333333%",
            "3/6": "50%",
            "4/6": "66.666667%",
            "5/6": "83.333333%",
            "1/12": "8.333333%",
            "2/12": "16.666667%",
            "3/12": "25%",
            "4/12": "33.333333%",
            "5/12": "41.666667%",
            "6/12": "50%",
            "7/12": "58.333333%",
            "8/12": "66.666667%",
            "9/12": "75%",
            "10/12": "83.333333%",
            "11/12": "91.666667%",
            full: "100%"
          }),
          flexGrow: {
            0: "0",
            DEFAULT: "1"
          },
          flexShrink: {
            0: "0",
            DEFAULT: "1"
          },
          fontFamily: {
            sans: [
              "ui-sans-serif",
              "system-ui",
              "sans-serif",
              '"Apple Color Emoji"',
              '"Segoe UI Emoji"',
              '"Segoe UI Symbol"',
              '"Noto Color Emoji"'
            ],
            serif: ["ui-serif", "Georgia", "Cambria", '"Times New Roman"', "Times", "serif"],
            mono: [
              "ui-monospace",
              "SFMono-Regular",
              "Menlo",
              "Monaco",
              "Consolas",
              '"Liberation Mono"',
              '"Courier New"',
              "monospace"
            ]
          },
          fontSize: {
            xs: ["0.75rem", { lineHeight: "1rem" }],
            sm: ["0.875rem", { lineHeight: "1.25rem" }],
            base: ["1rem", { lineHeight: "1.5rem" }],
            lg: ["1.125rem", { lineHeight: "1.75rem" }],
            xl: ["1.25rem", { lineHeight: "1.75rem" }],
            "2xl": ["1.5rem", { lineHeight: "2rem" }],
            "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
            "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
            "5xl": ["3rem", { lineHeight: "1" }],
            "6xl": ["3.75rem", { lineHeight: "1" }],
            "7xl": ["4.5rem", { lineHeight: "1" }],
            "8xl": ["6rem", { lineHeight: "1" }],
            "9xl": ["8rem", { lineHeight: "1" }]
          },
          fontWeight: {
            thin: "100",
            extralight: "200",
            light: "300",
            normal: "400",
            medium: "500",
            semibold: "600",
            bold: "700",
            extrabold: "800",
            black: "900"
          },
          gap: ({ theme }) => theme("spacing"),
          gradientColorStops: ({ theme }) => theme("colors"),
          gradientColorStopPositions: {
            "0%": "0%",
            "5%": "5%",
            "10%": "10%",
            "15%": "15%",
            "20%": "20%",
            "25%": "25%",
            "30%": "30%",
            "35%": "35%",
            "40%": "40%",
            "45%": "45%",
            "50%": "50%",
            "55%": "55%",
            "60%": "60%",
            "65%": "65%",
            "70%": "70%",
            "75%": "75%",
            "80%": "80%",
            "85%": "85%",
            "90%": "90%",
            "95%": "95%",
            "100%": "100%"
          },
          grayscale: {
            0: "0",
            DEFAULT: "100%"
          },
          gridAutoColumns: {
            auto: "auto",
            min: "min-content",
            max: "max-content",
            fr: "minmax(0, 1fr)"
          },
          gridAutoRows: {
            auto: "auto",
            min: "min-content",
            max: "max-content",
            fr: "minmax(0, 1fr)"
          },
          gridColumn: {
            auto: "auto",
            "span-1": "span 1 / span 1",
            "span-2": "span 2 / span 2",
            "span-3": "span 3 / span 3",
            "span-4": "span 4 / span 4",
            "span-5": "span 5 / span 5",
            "span-6": "span 6 / span 6",
            "span-7": "span 7 / span 7",
            "span-8": "span 8 / span 8",
            "span-9": "span 9 / span 9",
            "span-10": "span 10 / span 10",
            "span-11": "span 11 / span 11",
            "span-12": "span 12 / span 12",
            "span-full": "1 / -1"
          },
          gridColumnEnd: {
            auto: "auto",
            1: "1",
            2: "2",
            3: "3",
            4: "4",
            5: "5",
            6: "6",
            7: "7",
            8: "8",
            9: "9",
            10: "10",
            11: "11",
            12: "12",
            13: "13"
          },
          gridColumnStart: {
            auto: "auto",
            1: "1",
            2: "2",
            3: "3",
            4: "4",
            5: "5",
            6: "6",
            7: "7",
            8: "8",
            9: "9",
            10: "10",
            11: "11",
            12: "12",
            13: "13"
          },
          gridRow: {
            auto: "auto",
            "span-1": "span 1 / span 1",
            "span-2": "span 2 / span 2",
            "span-3": "span 3 / span 3",
            "span-4": "span 4 / span 4",
            "span-5": "span 5 / span 5",
            "span-6": "span 6 / span 6",
            "span-7": "span 7 / span 7",
            "span-8": "span 8 / span 8",
            "span-9": "span 9 / span 9",
            "span-10": "span 10 / span 10",
            "span-11": "span 11 / span 11",
            "span-12": "span 12 / span 12",
            "span-full": "1 / -1"
          },
          gridRowEnd: {
            auto: "auto",
            1: "1",
            2: "2",
            3: "3",
            4: "4",
            5: "5",
            6: "6",
            7: "7",
            8: "8",
            9: "9",
            10: "10",
            11: "11",
            12: "12",
            13: "13"
          },
          gridRowStart: {
            auto: "auto",
            1: "1",
            2: "2",
            3: "3",
            4: "4",
            5: "5",
            6: "6",
            7: "7",
            8: "8",
            9: "9",
            10: "10",
            11: "11",
            12: "12",
            13: "13"
          },
          gridTemplateColumns: {
            none: "none",
            subgrid: "subgrid",
            1: "repeat(1, minmax(0, 1fr))",
            2: "repeat(2, minmax(0, 1fr))",
            3: "repeat(3, minmax(0, 1fr))",
            4: "repeat(4, minmax(0, 1fr))",
            5: "repeat(5, minmax(0, 1fr))",
            6: "repeat(6, minmax(0, 1fr))",
            7: "repeat(7, minmax(0, 1fr))",
            8: "repeat(8, minmax(0, 1fr))",
            9: "repeat(9, minmax(0, 1fr))",
            10: "repeat(10, minmax(0, 1fr))",
            11: "repeat(11, minmax(0, 1fr))",
            12: "repeat(12, minmax(0, 1fr))"
          },
          gridTemplateRows: {
            none: "none",
            subgrid: "subgrid",
            1: "repeat(1, minmax(0, 1fr))",
            2: "repeat(2, minmax(0, 1fr))",
            3: "repeat(3, minmax(0, 1fr))",
            4: "repeat(4, minmax(0, 1fr))",
            5: "repeat(5, minmax(0, 1fr))",
            6: "repeat(6, minmax(0, 1fr))",
            7: "repeat(7, minmax(0, 1fr))",
            8: "repeat(8, minmax(0, 1fr))",
            9: "repeat(9, minmax(0, 1fr))",
            10: "repeat(10, minmax(0, 1fr))",
            11: "repeat(11, minmax(0, 1fr))",
            12: "repeat(12, minmax(0, 1fr))"
          },
          height: ({ theme }) => ({
            auto: "auto",
            ...theme("spacing"),
            "1/2": "50%",
            "1/3": "33.333333%",
            "2/3": "66.666667%",
            "1/4": "25%",
            "2/4": "50%",
            "3/4": "75%",
            "1/5": "20%",
            "2/5": "40%",
            "3/5": "60%",
            "4/5": "80%",
            "1/6": "16.666667%",
            "2/6": "33.333333%",
            "3/6": "50%",
            "4/6": "66.666667%",
            "5/6": "83.333333%",
            full: "100%",
            screen: "100vh",
            svh: "100svh",
            lvh: "100lvh",
            dvh: "100dvh",
            min: "min-content",
            max: "max-content",
            fit: "fit-content"
          }),
          hueRotate: {
            0: "0deg",
            15: "15deg",
            30: "30deg",
            60: "60deg",
            90: "90deg",
            180: "180deg"
          },
          inset: ({ theme }) => ({
            auto: "auto",
            ...theme("spacing"),
            "1/2": "50%",
            "1/3": "33.333333%",
            "2/3": "66.666667%",
            "1/4": "25%",
            "2/4": "50%",
            "3/4": "75%",
            full: "100%"
          }),
          invert: {
            0: "0",
            DEFAULT: "100%"
          },
          keyframes: {
            spin: {
              to: {
                transform: "rotate(360deg)"
              }
            },
            ping: {
              "75%, 100%": {
                transform: "scale(2)",
                opacity: "0"
              }
            },
            pulse: {
              "50%": {
                opacity: ".5"
              }
            },
            bounce: {
              "0%, 100%": {
                transform: "translateY(-25%)",
                animationTimingFunction: "cubic-bezier(0.8,0,1,1)"
              },
              "50%": {
                transform: "none",
                animationTimingFunction: "cubic-bezier(0,0,0.2,1)"
              }
            }
          },
          letterSpacing: {
            tighter: "-0.05em",
            tight: "-0.025em",
            normal: "0em",
            wide: "0.025em",
            wider: "0.05em",
            widest: "0.1em"
          },
          lineHeight: {
            none: "1",
            tight: "1.25",
            snug: "1.375",
            normal: "1.5",
            relaxed: "1.625",
            loose: "2",
            3: ".75rem",
            4: "1rem",
            5: "1.25rem",
            6: "1.5rem",
            7: "1.75rem",
            8: "2rem",
            9: "2.25rem",
            10: "2.5rem"
          },
          listStyleType: {
            none: "none",
            disc: "disc",
            decimal: "decimal"
          },
          listStyleImage: {
            none: "none"
          },
          margin: ({ theme }) => ({
            auto: "auto",
            ...theme("spacing")
          }),
          lineClamp: {
            1: "1",
            2: "2",
            3: "3",
            4: "4",
            5: "5",
            6: "6"
          },
          maxHeight: ({ theme }) => ({
            ...theme("spacing"),
            none: "none",
            full: "100%",
            screen: "100vh",
            svh: "100svh",
            lvh: "100lvh",
            dvh: "100dvh",
            min: "min-content",
            max: "max-content",
            fit: "fit-content"
          }),
          maxWidth: ({ theme, breakpoints }) => ({
            ...theme("spacing"),
            none: "none",
            xs: "20rem",
            sm: "24rem",
            md: "28rem",
            lg: "32rem",
            xl: "36rem",
            "2xl": "42rem",
            "3xl": "48rem",
            "4xl": "56rem",
            "5xl": "64rem",
            "6xl": "72rem",
            "7xl": "80rem",
            full: "100%",
            min: "min-content",
            max: "max-content",
            fit: "fit-content",
            prose: "65ch",
            ...breakpoints(theme("screens"))
          }),
          minHeight: ({ theme }) => ({
            ...theme("spacing"),
            full: "100%",
            screen: "100vh",
            svh: "100svh",
            lvh: "100lvh",
            dvh: "100dvh",
            min: "min-content",
            max: "max-content",
            fit: "fit-content"
          }),
          minWidth: ({ theme }) => ({
            ...theme("spacing"),
            full: "100%",
            min: "min-content",
            max: "max-content",
            fit: "fit-content"
          }),
          objectPosition: {
            bottom: "bottom",
            center: "center",
            left: "left",
            "left-bottom": "left bottom",
            "left-top": "left top",
            right: "right",
            "right-bottom": "right bottom",
            "right-top": "right top",
            top: "top"
          },
          opacity: {
            0: "0",
            5: "0.05",
            10: "0.1",
            15: "0.15",
            20: "0.2",
            25: "0.25",
            30: "0.3",
            35: "0.35",
            40: "0.4",
            45: "0.45",
            50: "0.5",
            55: "0.55",
            60: "0.6",
            65: "0.65",
            70: "0.7",
            75: "0.75",
            80: "0.8",
            85: "0.85",
            90: "0.9",
            95: "0.95",
            100: "1"
          },
          order: {
            first: "-9999",
            last: "9999",
            none: "0",
            1: "1",
            2: "2",
            3: "3",
            4: "4",
            5: "5",
            6: "6",
            7: "7",
            8: "8",
            9: "9",
            10: "10",
            11: "11",
            12: "12"
          },
          outlineColor: ({ theme }) => theme("colors"),
          outlineOffset: {
            0: "0px",
            1: "1px",
            2: "2px",
            4: "4px",
            8: "8px"
          },
          outlineWidth: {
            0: "0px",
            1: "1px",
            2: "2px",
            4: "4px",
            8: "8px"
          },
          padding: ({ theme }) => theme("spacing"),
          placeholderColor: ({ theme }) => theme("colors"),
          placeholderOpacity: ({ theme }) => theme("opacity"),
          ringColor: ({ theme }) => ({
            DEFAULT: theme("colors.blue.500", "#3b82f6"),
            ...theme("colors")
          }),
          ringOffsetColor: ({ theme }) => theme("colors"),
          ringOffsetWidth: {
            0: "0px",
            1: "1px",
            2: "2px",
            4: "4px",
            8: "8px"
          },
          ringOpacity: ({ theme }) => ({
            DEFAULT: "0.5",
            ...theme("opacity")
          }),
          ringWidth: {
            DEFAULT: "3px",
            0: "0px",
            1: "1px",
            2: "2px",
            4: "4px",
            8: "8px"
          },
          rotate: {
            0: "0deg",
            1: "1deg",
            2: "2deg",
            3: "3deg",
            6: "6deg",
            12: "12deg",
            45: "45deg",
            90: "90deg",
            180: "180deg"
          },
          saturate: {
            0: "0",
            50: ".5",
            100: "1",
            150: "1.5",
            200: "2"
          },
          scale: {
            0: "0",
            50: ".5",
            75: ".75",
            90: ".9",
            95: ".95",
            100: "1",
            105: "1.05",
            110: "1.1",
            125: "1.25",
            150: "1.5"
          },
          screens: {
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1536px"
          },
          scrollMargin: ({ theme }) => ({
            ...theme("spacing")
          }),
          scrollPadding: ({ theme }) => theme("spacing"),
          sepia: {
            0: "0",
            DEFAULT: "100%"
          },
          skew: {
            0: "0deg",
            1: "1deg",
            2: "2deg",
            3: "3deg",
            6: "6deg",
            12: "12deg"
          },
          space: ({ theme }) => ({
            ...theme("spacing")
          }),
          spacing: {
            px: "1px",
            0: "0px",
            0.5: "0.125rem",
            1: "0.25rem",
            1.5: "0.375rem",
            2: "0.5rem",
            2.5: "0.625rem",
            3: "0.75rem",
            3.5: "0.875rem",
            4: "1rem",
            5: "1.25rem",
            6: "1.5rem",
            7: "1.75rem",
            8: "2rem",
            9: "2.25rem",
            10: "2.5rem",
            11: "2.75rem",
            12: "3rem",
            14: "3.5rem",
            16: "4rem",
            20: "5rem",
            24: "6rem",
            28: "7rem",
            32: "8rem",
            36: "9rem",
            40: "10rem",
            44: "11rem",
            48: "12rem",
            52: "13rem",
            56: "14rem",
            60: "15rem",
            64: "16rem",
            72: "18rem",
            80: "20rem",
            96: "24rem"
          },
          stroke: ({ theme }) => ({
            none: "none",
            ...theme("colors")
          }),
          strokeWidth: {
            0: "0",
            1: "1",
            2: "2"
          },
          supports: {},
          data: {},
          textColor: ({ theme }) => theme("colors"),
          textDecorationColor: ({ theme }) => theme("colors"),
          textDecorationThickness: {
            auto: "auto",
            "from-font": "from-font",
            0: "0px",
            1: "1px",
            2: "2px",
            4: "4px",
            8: "8px"
          },
          textIndent: ({ theme }) => ({
            ...theme("spacing")
          }),
          textOpacity: ({ theme }) => theme("opacity"),
          textUnderlineOffset: {
            auto: "auto",
            0: "0px",
            1: "1px",
            2: "2px",
            4: "4px",
            8: "8px"
          },
          transformOrigin: {
            center: "center",
            top: "top",
            "top-right": "top right",
            right: "right",
            "bottom-right": "bottom right",
            bottom: "bottom",
            "bottom-left": "bottom left",
            left: "left",
            "top-left": "top left"
          },
          transitionDelay: {
            0: "0s",
            75: "75ms",
            100: "100ms",
            150: "150ms",
            200: "200ms",
            300: "300ms",
            500: "500ms",
            700: "700ms",
            1e3: "1000ms"
          },
          transitionDuration: {
            DEFAULT: "150ms",
            0: "0s",
            75: "75ms",
            100: "100ms",
            150: "150ms",
            200: "200ms",
            300: "300ms",
            500: "500ms",
            700: "700ms",
            1e3: "1000ms"
          },
          transitionProperty: {
            none: "none",
            all: "all",
            DEFAULT: "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
            colors: "color, background-color, border-color, text-decoration-color, fill, stroke",
            opacity: "opacity",
            shadow: "box-shadow",
            transform: "transform"
          },
          transitionTimingFunction: {
            DEFAULT: "cubic-bezier(0.4, 0, 0.2, 1)",
            linear: "linear",
            in: "cubic-bezier(0.4, 0, 1, 1)",
            out: "cubic-bezier(0, 0, 0.2, 1)",
            "in-out": "cubic-bezier(0.4, 0, 0.2, 1)"
          },
          translate: ({ theme }) => ({
            ...theme("spacing"),
            "1/2": "50%",
            "1/3": "33.333333%",
            "2/3": "66.666667%",
            "1/4": "25%",
            "2/4": "50%",
            "3/4": "75%",
            full: "100%"
          }),
          size: ({ theme }) => ({
            auto: "auto",
            ...theme("spacing"),
            "1/2": "50%",
            "1/3": "33.333333%",
            "2/3": "66.666667%",
            "1/4": "25%",
            "2/4": "50%",
            "3/4": "75%",
            "1/5": "20%",
            "2/5": "40%",
            "3/5": "60%",
            "4/5": "80%",
            "1/6": "16.666667%",
            "2/6": "33.333333%",
            "3/6": "50%",
            "4/6": "66.666667%",
            "5/6": "83.333333%",
            "1/12": "8.333333%",
            "2/12": "16.666667%",
            "3/12": "25%",
            "4/12": "33.333333%",
            "5/12": "41.666667%",
            "6/12": "50%",
            "7/12": "58.333333%",
            "8/12": "66.666667%",
            "9/12": "75%",
            "10/12": "83.333333%",
            "11/12": "91.666667%",
            full: "100%",
            min: "min-content",
            max: "max-content",
            fit: "fit-content"
          }),
          width: ({ theme }) => ({
            auto: "auto",
            ...theme("spacing"),
            "1/2": "50%",
            "1/3": "33.333333%",
            "2/3": "66.666667%",
            "1/4": "25%",
            "2/4": "50%",
            "3/4": "75%",
            "1/5": "20%",
            "2/5": "40%",
            "3/5": "60%",
            "4/5": "80%",
            "1/6": "16.666667%",
            "2/6": "33.333333%",
            "3/6": "50%",
            "4/6": "66.666667%",
            "5/6": "83.333333%",
            "1/12": "8.333333%",
            "2/12": "16.666667%",
            "3/12": "25%",
            "4/12": "33.333333%",
            "5/12": "41.666667%",
            "6/12": "50%",
            "7/12": "58.333333%",
            "8/12": "66.666667%",
            "9/12": "75%",
            "10/12": "83.333333%",
            "11/12": "91.666667%",
            full: "100%",
            screen: "100vw",
            svw: "100svw",
            lvw: "100lvw",
            dvw: "100dvw",
            min: "min-content",
            max: "max-content",
            fit: "fit-content"
          }),
          willChange: {
            auto: "auto",
            scroll: "scroll-position",
            contents: "contents",
            transform: "transform"
          },
          zIndex: {
            auto: "auto",
            0: "0",
            10: "10",
            20: "20",
            30: "30",
            40: "40",
            50: "50"
          }
        },
        plugins: []
      };
    }
  });

  // node_modules/tailwindcss/lib/util/getAllConfigs.js
  var require_getAllConfigs = __commonJS({
    "node_modules/tailwindcss/lib/util/getAllConfigs.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return getAllConfigs;
        }
      });
      var _configfull = /* @__PURE__ */ _interop_require_default(require_config_full());
      var _featureFlags = require_featureFlags();
      function _interop_require_default(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      function getAllConfigs(config) {
        var _config_presets;
        const configs = ((_config_presets = config === null || config === void 0 ? void 0 : config.presets) !== null && _config_presets !== void 0 ? _config_presets : [
          _configfull.default
        ]).slice().reverse().flatMap((preset) => getAllConfigs(preset instanceof Function ? preset() : preset));
        const features = {
          // Add experimental configs here...
          respectDefaultRingColorOpacity: {
            theme: {
              ringColor: ({ theme }) => ({
                DEFAULT: "#3b82f67f",
                ...theme("colors")
              })
            }
          },
          disableColorOpacityUtilitiesByDefault: {
            corePlugins: {
              backgroundOpacity: false,
              borderOpacity: false,
              divideOpacity: false,
              placeholderOpacity: false,
              ringOpacity: false,
              textOpacity: false
            }
          }
        };
        const experimentals = Object.keys(features).filter((feature) => (0, _featureFlags.flagEnabled)(config, feature)).map((feature) => features[feature]);
        return [
          config,
          ...experimentals,
          ...configs
        ];
      }
    }
  });

  // node_modules/tailwindcss/lib/public/resolve-config.js
  var require_resolve_config = __commonJS({
    "node_modules/tailwindcss/lib/public/resolve-config.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return resolveConfig2;
        }
      });
      var _resolveConfig = /* @__PURE__ */ _interop_require_default(require_resolveConfig());
      var _getAllConfigs = /* @__PURE__ */ _interop_require_default(require_getAllConfigs());
      function _interop_require_default(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      function resolveConfig2(...configs) {
        let [, ...defaultConfigs] = (0, _getAllConfigs.default)(configs[0]);
        return (0, _resolveConfig.default)([
          ...configs,
          ...defaultConfigs
        ]);
      }
    }
  });

  // node_modules/tailwindcss/resolveConfig.js
  var require_resolveConfig2 = __commonJS({
    "node_modules/tailwindcss/resolveConfig.js"(exports, module) {
      var resolveConfig2 = require_resolve_config();
      module.exports = (resolveConfig2.__esModule ? resolveConfig2 : { default: resolveConfig2 }).default;
    }
  });

  // node_modules/tailwindcss/lib/util/createPlugin.js
  var require_createPlugin = __commonJS({
    "node_modules/tailwindcss/lib/util/createPlugin.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return _default;
        }
      });
      function createPlugin(plugin, config) {
        return {
          handler: plugin,
          config
        };
      }
      createPlugin.withOptions = function(pluginFunction, configFunction = () => ({})) {
        const optionsFunction = function(options) {
          return {
            __options: options,
            handler: pluginFunction(options),
            config: configFunction(options)
          };
        };
        optionsFunction.__isOptionsFunction = true;
        optionsFunction.__pluginFunction = pluginFunction;
        optionsFunction.__configFunction = configFunction;
        return optionsFunction;
      };
      var _default = createPlugin;
    }
  });

  // node_modules/tailwindcss/lib/public/create-plugin.js
  var require_create_plugin = __commonJS({
    "node_modules/tailwindcss/lib/public/create-plugin.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return _default;
        }
      });
      var _createPlugin = /* @__PURE__ */ _interop_require_default(require_createPlugin());
      function _interop_require_default(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      var _default = _createPlugin.default;
    }
  });

  // node_modules/tailwindcss/plugin.js
  var require_plugin = __commonJS({
    "node_modules/tailwindcss/plugin.js"(exports, module) {
      var createPlugin = require_create_plugin();
      module.exports = (createPlugin.__esModule ? createPlugin : { default: createPlugin }).default;
    }
  });

  // node_modules/tailwindcss/colors.js
  var require_colors2 = __commonJS({
    "node_modules/tailwindcss/colors.js"(exports, module) {
      var colors2 = require_colors();
      module.exports = (colors2.__esModule ? colors2 : { default: colors2 }).default;
    }
  });

  // node_modules/mini-svg-data-uri/shorter-css-color-names.js
  var require_shorter_css_color_names = __commonJS({
    "node_modules/mini-svg-data-uri/shorter-css-color-names.js"(exports, module) {
      module.exports = {
        aqua: /#00ffff(ff)?(?!\w)|#0ff(f)?(?!\w)/gi,
        azure: /#f0ffff(ff)?(?!\w)/gi,
        beige: /#f5f5dc(ff)?(?!\w)/gi,
        bisque: /#ffe4c4(ff)?(?!\w)/gi,
        black: /#000000(ff)?(?!\w)|#000(f)?(?!\w)/gi,
        blue: /#0000ff(ff)?(?!\w)|#00f(f)?(?!\w)/gi,
        brown: /#a52a2a(ff)?(?!\w)/gi,
        coral: /#ff7f50(ff)?(?!\w)/gi,
        cornsilk: /#fff8dc(ff)?(?!\w)/gi,
        crimson: /#dc143c(ff)?(?!\w)/gi,
        cyan: /#00ffff(ff)?(?!\w)|#0ff(f)?(?!\w)/gi,
        darkblue: /#00008b(ff)?(?!\w)/gi,
        darkcyan: /#008b8b(ff)?(?!\w)/gi,
        darkgrey: /#a9a9a9(ff)?(?!\w)/gi,
        darkred: /#8b0000(ff)?(?!\w)/gi,
        deeppink: /#ff1493(ff)?(?!\w)/gi,
        dimgrey: /#696969(ff)?(?!\w)/gi,
        gold: /#ffd700(ff)?(?!\w)/gi,
        green: /#008000(ff)?(?!\w)/gi,
        grey: /#808080(ff)?(?!\w)/gi,
        honeydew: /#f0fff0(ff)?(?!\w)/gi,
        hotpink: /#ff69b4(ff)?(?!\w)/gi,
        indigo: /#4b0082(ff)?(?!\w)/gi,
        ivory: /#fffff0(ff)?(?!\w)/gi,
        khaki: /#f0e68c(ff)?(?!\w)/gi,
        lavender: /#e6e6fa(ff)?(?!\w)/gi,
        lime: /#00ff00(ff)?(?!\w)|#0f0(f)?(?!\w)/gi,
        linen: /#faf0e6(ff)?(?!\w)/gi,
        maroon: /#800000(ff)?(?!\w)/gi,
        moccasin: /#ffe4b5(ff)?(?!\w)/gi,
        navy: /#000080(ff)?(?!\w)/gi,
        oldlace: /#fdf5e6(ff)?(?!\w)/gi,
        olive: /#808000(ff)?(?!\w)/gi,
        orange: /#ffa500(ff)?(?!\w)/gi,
        orchid: /#da70d6(ff)?(?!\w)/gi,
        peru: /#cd853f(ff)?(?!\w)/gi,
        pink: /#ffc0cb(ff)?(?!\w)/gi,
        plum: /#dda0dd(ff)?(?!\w)/gi,
        purple: /#800080(ff)?(?!\w)/gi,
        red: /#ff0000(ff)?(?!\w)|#f00(f)?(?!\w)/gi,
        salmon: /#fa8072(ff)?(?!\w)/gi,
        seagreen: /#2e8b57(ff)?(?!\w)/gi,
        seashell: /#fff5ee(ff)?(?!\w)/gi,
        sienna: /#a0522d(ff)?(?!\w)/gi,
        silver: /#c0c0c0(ff)?(?!\w)/gi,
        skyblue: /#87ceeb(ff)?(?!\w)/gi,
        snow: /#fffafa(ff)?(?!\w)/gi,
        tan: /#d2b48c(ff)?(?!\w)/gi,
        teal: /#008080(ff)?(?!\w)/gi,
        thistle: /#d8bfd8(ff)?(?!\w)/gi,
        tomato: /#ff6347(ff)?(?!\w)/gi,
        violet: /#ee82ee(ff)?(?!\w)/gi,
        wheat: /#f5deb3(ff)?(?!\w)/gi,
        white: /#ffffff(ff)?(?!\w)|#fff(f)?(?!\w)/gi
      };
    }
  });

  // node_modules/mini-svg-data-uri/index.js
  var require_mini_svg_data_uri = __commonJS({
    "node_modules/mini-svg-data-uri/index.js"(exports, module) {
      var shorterNames = require_shorter_css_color_names();
      var REGEX = {
        whitespace: /\s+/g,
        urlHexPairs: /%[\dA-F]{2}/g,
        quotes: /"/g
      };
      function collapseWhitespace(str) {
        return str.trim().replace(REGEX.whitespace, " ");
      }
      function dataURIPayload(string) {
        return encodeURIComponent(string).replace(REGEX.urlHexPairs, specialHexEncode);
      }
      function colorCodeToShorterNames(string) {
        Object.keys(shorterNames).forEach(function(key) {
          if (shorterNames[key].test(string)) {
            string = string.replace(shorterNames[key], key);
          }
        });
        return string;
      }
      function specialHexEncode(match) {
        switch (match) {
          case "%20":
            return " ";
          case "%3D":
            return "=";
          case "%3A":
            return ":";
          case "%2F":
            return "/";
          default:
            return match.toLowerCase();
        }
      }
      function svgToTinyDataUri(svgString) {
        if (typeof svgString !== "string") {
          throw new TypeError("Expected a string, but received " + typeof svgString);
        }
        if (svgString.charCodeAt(0) === 65279) {
          svgString = svgString.slice(1);
        }
        var body = colorCodeToShorterNames(collapseWhitespace(svgString)).replace(REGEX.quotes, "'");
        return "data:image/svg+xml," + dataURIPayload(body);
      }
      svgToTinyDataUri.toSrcset = function toSrcset(svgString) {
        return svgToTinyDataUri(svgString).replace(/ /g, "%20");
      };
      module.exports = svgToTinyDataUri;
    }
  });

  // node_modules/tailwindcss/lib/public/default-theme.js
  var require_default_theme = __commonJS({
    "node_modules/tailwindcss/lib/public/default-theme.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return _default;
        }
      });
      var _cloneDeep = require_cloneDeep();
      var _configfull = /* @__PURE__ */ _interop_require_default(require_config_full());
      function _interop_require_default(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      var _default = (0, _cloneDeep.cloneDeep)(_configfull.default.theme);
    }
  });

  // node_modules/tailwindcss/defaultTheme.js
  var require_defaultTheme = __commonJS({
    "node_modules/tailwindcss/defaultTheme.js"(exports, module) {
      var defaultTheme = require_default_theme();
      module.exports = (defaultTheme.__esModule ? defaultTheme : { default: defaultTheme }).default;
    }
  });

  // node_modules/@tailwindcss/forms/src/index.js
  var require_src = __commonJS({
    "node_modules/@tailwindcss/forms/src/index.js"(exports, module) {
      var svgToDataUri = require_mini_svg_data_uri();
      var plugin = require_plugin();
      var defaultTheme = require_defaultTheme();
      var colors2 = require_colors2();
      var [baseFontSize, { lineHeight: baseLineHeight }] = defaultTheme.fontSize.base;
      var { spacing, borderWidth, borderRadius } = defaultTheme;
      function resolveColor(color, opacityVariableName) {
        return color.replace("<alpha-value>", `var(${opacityVariableName}, 1)`);
      }
      var forms = plugin.withOptions(function(options = { strategy: void 0 }) {
        return function({ addBase, addComponents, theme }) {
          function resolveChevronColor(color, fallback) {
            let resolved = theme(color);
            if (!resolved || resolved.includes("var(")) {
              return fallback;
            }
            return resolved.replace("<alpha-value>", "1");
          }
          const strategy = options.strategy === void 0 ? ["base", "class"] : [options.strategy];
          const rules = [
            {
              base: [
                "[type='text']",
                "input:where(:not([type]))",
                "[type='email']",
                "[type='url']",
                "[type='password']",
                "[type='number']",
                "[type='date']",
                "[type='datetime-local']",
                "[type='month']",
                "[type='search']",
                "[type='tel']",
                "[type='time']",
                "[type='week']",
                "[multiple]",
                "textarea",
                "select"
              ],
              class: [".form-input", ".form-textarea", ".form-select", ".form-multiselect"],
              styles: {
                appearance: "none",
                "background-color": "#fff",
                "border-color": resolveColor(
                  theme("colors.gray.500", colors2.gray[500]),
                  "--tw-border-opacity"
                ),
                "border-width": borderWidth["DEFAULT"],
                "border-radius": borderRadius.none,
                "padding-top": spacing[2],
                "padding-right": spacing[3],
                "padding-bottom": spacing[2],
                "padding-left": spacing[3],
                "font-size": baseFontSize,
                "line-height": baseLineHeight,
                "--tw-shadow": "0 0 #0000",
                "&:focus": {
                  outline: "2px solid transparent",
                  "outline-offset": "2px",
                  "--tw-ring-inset": "var(--tw-empty,/*!*/ /*!*/)",
                  "--tw-ring-offset-width": "0px",
                  "--tw-ring-offset-color": "#fff",
                  "--tw-ring-color": resolveColor(
                    theme("colors.blue.600", colors2.blue[600]),
                    "--tw-ring-opacity"
                  ),
                  "--tw-ring-offset-shadow": `var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)`,
                  "--tw-ring-shadow": `var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color)`,
                  "box-shadow": `var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)`,
                  "border-color": resolveColor(
                    theme("colors.blue.600", colors2.blue[600]),
                    "--tw-border-opacity"
                  )
                }
              }
            },
            {
              base: ["input::placeholder", "textarea::placeholder"],
              class: [".form-input::placeholder", ".form-textarea::placeholder"],
              styles: {
                color: resolveColor(theme("colors.gray.500", colors2.gray[500]), "--tw-text-opacity"),
                opacity: "1"
              }
            },
            {
              base: ["::-webkit-datetime-edit-fields-wrapper"],
              class: [".form-input::-webkit-datetime-edit-fields-wrapper"],
              styles: {
                padding: "0"
              }
            },
            {
              // Unfortunate hack until https://bugs.webkit.org/show_bug.cgi?id=198959 is fixed.
              // This sucks because users can't change line-height with a utility on date inputs now.
              // Reference: https://github.com/twbs/bootstrap/pull/31993
              base: ["::-webkit-date-and-time-value"],
              class: [".form-input::-webkit-date-and-time-value"],
              styles: {
                "min-height": "1.5em"
              }
            },
            {
              // In Safari on iOS date and time inputs are centered instead of left-aligned and can't be
              // changed with `text-align` utilities on the input by default. Resetting this to `inherit`
              // makes them left-aligned by default and makes it possible to override the alignment with
              // utility classes without using an arbitrary variant to target the pseudo-elements.
              base: ["::-webkit-date-and-time-value"],
              class: [".form-input::-webkit-date-and-time-value"],
              styles: {
                "text-align": "inherit"
              }
            },
            {
              // In Safari on macOS date time inputs that are set to `display: block` have unexpected
              // extra bottom spacing. This can be corrected by setting the `::-webkit-datetime-edit`
              // pseudo-element to `display: inline-flex`, instead of the browser default of
              // `display: inline-block`.
              base: ["::-webkit-datetime-edit"],
              class: [".form-input::-webkit-datetime-edit"],
              styles: {
                display: "inline-flex"
              }
            },
            {
              // In Safari on macOS date time inputs are 4px taller than normal inputs
              // This is because there is extra padding on the datetime-edit and datetime-edit-{part}-field pseudo elements
              // See https://github.com/tailwindlabs/tailwindcss-forms/issues/95
              base: [
                "::-webkit-datetime-edit",
                "::-webkit-datetime-edit-year-field",
                "::-webkit-datetime-edit-month-field",
                "::-webkit-datetime-edit-day-field",
                "::-webkit-datetime-edit-hour-field",
                "::-webkit-datetime-edit-minute-field",
                "::-webkit-datetime-edit-second-field",
                "::-webkit-datetime-edit-millisecond-field",
                "::-webkit-datetime-edit-meridiem-field"
              ],
              class: [
                ".form-input::-webkit-datetime-edit",
                ".form-input::-webkit-datetime-edit-year-field",
                ".form-input::-webkit-datetime-edit-month-field",
                ".form-input::-webkit-datetime-edit-day-field",
                ".form-input::-webkit-datetime-edit-hour-field",
                ".form-input::-webkit-datetime-edit-minute-field",
                ".form-input::-webkit-datetime-edit-second-field",
                ".form-input::-webkit-datetime-edit-millisecond-field",
                ".form-input::-webkit-datetime-edit-meridiem-field"
              ],
              styles: {
                "padding-top": 0,
                "padding-bottom": 0
              }
            },
            {
              base: ["select"],
              class: [".form-select"],
              styles: {
                "background-image": `url("${svgToDataUri(
                  `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path stroke="${resolveChevronColor(
                    "colors.gray.500",
                    colors2.gray[500]
                  )}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 8l4 4 4-4"/></svg>`
                )}")`,
                "background-position": `right ${spacing[2]} center`,
                "background-repeat": `no-repeat`,
                "background-size": `1.5em 1.5em`,
                "padding-right": spacing[10],
                "print-color-adjust": `exact`
              }
            },
            {
              base: ["[multiple]", '[size]:where(select:not([size="1"]))'],
              class: ['.form-select:where([size]:not([size="1"]))'],
              styles: {
                "background-image": "initial",
                "background-position": "initial",
                "background-repeat": "unset",
                "background-size": "initial",
                "padding-right": spacing[3],
                "print-color-adjust": "unset"
              }
            },
            {
              base: [`[type='checkbox']`, `[type='radio']`],
              class: [".form-checkbox", ".form-radio"],
              styles: {
                appearance: "none",
                padding: "0",
                "print-color-adjust": "exact",
                display: "inline-block",
                "vertical-align": "middle",
                "background-origin": "border-box",
                "user-select": "none",
                "flex-shrink": "0",
                height: spacing[4],
                width: spacing[4],
                color: resolveColor(theme("colors.blue.600", colors2.blue[600]), "--tw-text-opacity"),
                "background-color": "#fff",
                "border-color": resolveColor(
                  theme("colors.gray.500", colors2.gray[500]),
                  "--tw-border-opacity"
                ),
                "border-width": borderWidth["DEFAULT"],
                "--tw-shadow": "0 0 #0000"
              }
            },
            {
              base: [`[type='checkbox']`],
              class: [".form-checkbox"],
              styles: {
                "border-radius": borderRadius["none"]
              }
            },
            {
              base: [`[type='radio']`],
              class: [".form-radio"],
              styles: {
                "border-radius": "100%"
              }
            },
            {
              base: [`[type='checkbox']:focus`, `[type='radio']:focus`],
              class: [".form-checkbox:focus", ".form-radio:focus"],
              styles: {
                outline: "2px solid transparent",
                "outline-offset": "2px",
                "--tw-ring-inset": "var(--tw-empty,/*!*/ /*!*/)",
                "--tw-ring-offset-width": "2px",
                "--tw-ring-offset-color": "#fff",
                "--tw-ring-color": resolveColor(
                  theme("colors.blue.600", colors2.blue[600]),
                  "--tw-ring-opacity"
                ),
                "--tw-ring-offset-shadow": `var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)`,
                "--tw-ring-shadow": `var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color)`,
                "box-shadow": `var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)`
              }
            },
            {
              base: [`[type='checkbox']:checked`, `[type='radio']:checked`],
              class: [".form-checkbox:checked", ".form-radio:checked"],
              styles: {
                "border-color": `transparent`,
                "background-color": `currentColor`,
                "background-size": `100% 100%`,
                "background-position": `center`,
                "background-repeat": `no-repeat`
              }
            },
            {
              base: [`[type='checkbox']:checked`],
              class: [".form-checkbox:checked"],
              styles: {
                "background-image": `url("${svgToDataUri(
                  `<svg viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z"/></svg>`
                )}")`,
                "@media (forced-colors: active) ": {
                  appearance: "auto"
                }
              }
            },
            {
              base: [`[type='radio']:checked`],
              class: [".form-radio:checked"],
              styles: {
                "background-image": `url("${svgToDataUri(
                  `<svg viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="3"/></svg>`
                )}")`,
                "@media (forced-colors: active) ": {
                  appearance: "auto"
                }
              }
            },
            {
              base: [
                `[type='checkbox']:checked:hover`,
                `[type='checkbox']:checked:focus`,
                `[type='radio']:checked:hover`,
                `[type='radio']:checked:focus`
              ],
              class: [
                ".form-checkbox:checked:hover",
                ".form-checkbox:checked:focus",
                ".form-radio:checked:hover",
                ".form-radio:checked:focus"
              ],
              styles: {
                "border-color": "transparent",
                "background-color": "currentColor"
              }
            },
            {
              base: [`[type='checkbox']:indeterminate`],
              class: [".form-checkbox:indeterminate"],
              styles: {
                "background-image": `url("${svgToDataUri(
                  `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h8"/></svg>`
                )}")`,
                "border-color": `transparent`,
                "background-color": `currentColor`,
                "background-size": `100% 100%`,
                "background-position": `center`,
                "background-repeat": `no-repeat`,
                "@media (forced-colors: active) ": {
                  appearance: "auto"
                }
              }
            },
            {
              base: [`[type='checkbox']:indeterminate:hover`, `[type='checkbox']:indeterminate:focus`],
              class: [".form-checkbox:indeterminate:hover", ".form-checkbox:indeterminate:focus"],
              styles: {
                "border-color": "transparent",
                "background-color": "currentColor"
              }
            },
            {
              base: [`[type='file']`],
              class: null,
              styles: {
                background: "unset",
                "border-color": "inherit",
                "border-width": "0",
                "border-radius": "0",
                padding: "0",
                "font-size": "unset",
                "line-height": "inherit"
              }
            },
            {
              base: [`[type='file']:focus`],
              class: null,
              styles: {
                outline: [`1px solid ButtonText`, `1px auto -webkit-focus-ring-color`]
              }
            }
          ];
          const getStrategyRules = (strategy2) => rules.map((rule) => {
            if (rule[strategy2] === null)
              return null;
            return { [rule[strategy2]]: rule.styles };
          }).filter(Boolean);
          if (strategy.includes("base")) {
            addBase(getStrategyRules("base"));
          }
          if (strategy.includes("class")) {
            addComponents(getStrategyRules("class"));
          }
        };
      });
      module.exports = forms;
    }
  });

  // tailwind.config.js
  var require_tailwind_config = __commonJS({
    "tailwind.config.js"(exports, module) {
      var plugin = require_plugin();
      var colors2 = require_colors2();
      var { parseColor: parseColor2 } = require_color();
      var toRGB = (value) => {
        return parseColor2(value).color.join(" ");
      };
      module.exports = {
        content: ["./*.html", "./src/**/*.{php,html,js,jsx,ts,tsx}"],
        darkMode: "class",
        theme: {
          extend: {
            colors: {
              theme: {
                1: "rgb(var(--color-theme-1) / <alpha-value>)",
                2: "rgb(var(--color-theme-2) / <alpha-value>)"
              },
              primary: "rgb(var(--color-primary) / <alpha-value>)",
              secondary: "rgb(var(--color-secondary) / <alpha-value>)",
              success: "rgb(var(--color-success) / <alpha-value>)",
              info: "rgb(var(--color-info) / <alpha-value>)",
              warning: "rgb(var(--color-warning) / <alpha-value>)",
              pending: "rgb(var(--color-pending) / <alpha-value>)",
              danger: "rgb(var(--color-danger) / <alpha-value>)",
              light: "rgb(var(--color-light) / <alpha-value>)",
              dark: "rgb(var(--color-dark) / <alpha-value>)",
              darkmode: {
                50: "rgb(var(--color-darkmode-50) / <alpha-value>)",
                100: "rgb(var(--color-darkmode-100) / <alpha-value>)",
                200: "rgb(var(--color-darkmode-200) / <alpha-value>)",
                300: "rgb(var(--color-darkmode-300) / <alpha-value>)",
                400: "rgb(var(--color-darkmode-400) / <alpha-value>)",
                500: "rgb(var(--color-darkmode-500) / <alpha-value>)",
                600: "rgb(var(--color-darkmode-600) / <alpha-value>)",
                700: "rgb(var(--color-darkmode-700) / <alpha-value>)",
                800: "rgb(var(--color-darkmode-800) / <alpha-value>)",
                900: "rgb(var(--color-darkmode-900) / <alpha-value>)"
              }
            },
            fontFamily: {
              roboto: ["Roboto"]
            },
            container: {
              center: true
            },
            maxWidth: {
              "1/4": "25%",
              "1/2": "50%",
              "3/4": "75%"
            },
            strokeWidth: {
              0.5: 0.5,
              1.5: 1.5,
              2.5: 2.5
            },
            backgroundImage: {
              "chevron-white": `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23ffffff95' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
              "chevron-black": `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%2300000095' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
              "file-icon-empty-directory": `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='786' height='786' viewBox='0 0 786 786'%3E%3Cdefs%3E%3ClinearGradient id='linear-gradient' x1='0.5' x2='0.5' y2='1' gradientUnits='objectBoundingBox'%3E%3Cstop offset='0' stop-color='%238a97ac'/%3E%3Cstop offset='1' stop-color='%235d6c83'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg id='Group_2' data-name='Group 2' transform='translate(-567 -93)'%3E%3Crect id='Rectangle_4' data-name='Rectangle 4' width='418' height='681' rx='40' transform='translate(896 109)' fill='%2395a5b9'/%3E%3Crect id='Rectangle_3' data-name='Rectangle 3' width='433' height='681' rx='40' transform='translate(606 93)' fill='%23a0aec0'/%3E%3Crect id='Rectangle_2' data-name='Rectangle 2' width='786' height='721' rx='40' transform='translate(567 158)' fill='url(%23linear-gradient)'/%3E%3C/g%3E%3C/svg%3E%0A")`,
              "file-icon-directory": `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='786' height='786' viewBox='0 0 786 786'%3E%3Cdefs%3E%3ClinearGradient id='linear-gradient' x1='0.5' x2='0.5' y2='1' gradientUnits='objectBoundingBox'%3E%3Cstop offset='0' stop-color='%238a97ac'/%3E%3Cstop offset='1' stop-color='%235d6c83'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg id='Group_3' data-name='Group 3' transform='translate(-567 -93)'%3E%3Crect id='Rectangle_4' data-name='Rectangle 4' width='418' height='681' rx='40' transform='translate(896 109)' fill='%2395a5b9'/%3E%3Crect id='Rectangle_3' data-name='Rectangle 3' width='433' height='681' rx='40' transform='translate(606 93)' fill='%23a0aec0'/%3E%3Crect id='Rectangle_2' data-name='Rectangle 2' width='742' height='734' rx='40' transform='translate(590 145)' fill='%23bec8d9'/%3E%3Crect id='Rectangle_5' data-name='Rectangle 5' width='786' height='692' rx='40' transform='translate(567 187)' fill='url(%23linear-gradient)'/%3E%3C/g%3E%3C/svg%3E%0A")`,
              "file-icon-file": `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='628.027' height='786.012' viewBox='0 0 628.027 786.012'%3E%3Cdefs%3E%3ClinearGradient id='linear-gradient' x1='0.5' x2='0.5' y2='1' gradientUnits='objectBoundingBox'%3E%3Cstop offset='0' stop-color='%238a97ac'/%3E%3Cstop offset='1' stop-color='%235d6c83'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg id='Group_5' data-name='Group 5' transform='translate(-646 -92.988)'%3E%3Cpath id='Union_2' data-name='Union 2' d='M40,786A40,40,0,0,1,0,746V40A40,40,0,0,1,40,0H501V103h29v24h98V746a40,40,0,0,1-40,40Z' transform='translate(646 93)' fill='url(%23linear-gradient)'/%3E%3Cpath id='Intersection_2' data-name='Intersection 2' d='M.409,162.042l.058-109.9c31.605,29.739,125.37,125.377,125.37,125.377l-109.976.049A20.025,20.025,0,0,1,.409,162.042Z' transform='translate(1147 42)' fill='%23bec8d9' stroke='%23bec8d9' stroke-width='1'/%3E%3C/g%3E%3C/svg%3E%0A")`
            }
          }
        },
        plugins: [
          require_src(),
          plugin(function({ addBase }) {
            addBase({
              // Default colors
              ":root": {
                "--color-theme-1": toRGB(colors2.indigo["800"]),
                "--color-theme-2": toRGB(colors2.indigo["900"]),
                "--color-primary": toRGB(colors2.indigo["900"]),
                "--color-secondary": toRGB(colors2.slate["200"]),
                "--color-success": toRGB(colors2.emerald["600"]),
                "--color-info": toRGB(colors2.cyan["500"]),
                "--color-warning": toRGB(colors2.yellow["500"]),
                "--color-pending": toRGB(colors2.orange["600"]),
                "--color-danger": toRGB(colors2.red["700"]),
                "--color-light": toRGB(colors2.slate["100"]),
                "--color-dark": toRGB(colors2.slate["800"]),
                "&.dark": {
                  "--color-primary": toRGB(colors2.indigo["700"])
                }
              },
              // Default dark-mode colors
              ".dark": {
                "--color-primary": toRGB(colors2.blue["700"]),
                "--color-darkmode-50": "87 103 132",
                "--color-darkmode-100": "74 90 121",
                "--color-darkmode-200": "65 81 114",
                "--color-darkmode-300": "53 69 103",
                "--color-darkmode-400": "48 61 93",
                "--color-darkmode-500": "41 53 82",
                "--color-darkmode-600": "40 51 78",
                "--color-darkmode-700": "35 45 69",
                "--color-darkmode-800": "27 37 59",
                "--color-darkmode-900": "15 23 42"
              }
            });
          })
        ],
        variants: {
          extend: {
            boxShadow: ["dark"]
          }
        }
      };
    }
  });

  // node_modules/flat/index.js
  var require_flat = __commonJS({
    "node_modules/flat/index.js"(exports, module) {
      module.exports = flatten2;
      flatten2.flatten = flatten2;
      flatten2.unflatten = unflatten;
      function isBuffer(obj) {
        return obj && obj.constructor && typeof obj.constructor.isBuffer === "function" && obj.constructor.isBuffer(obj);
      }
      function keyIdentity(key) {
        return key;
      }
      function flatten2(target, opts) {
        opts = opts || {};
        const delimiter = opts.delimiter || ".";
        const maxDepth = opts.maxDepth;
        const transformKey = opts.transformKey || keyIdentity;
        const output = {};
        function step(object, prev, currentDepth) {
          currentDepth = currentDepth || 1;
          Object.keys(object).forEach(function(key) {
            const value = object[key];
            const isarray = opts.safe && Array.isArray(value);
            const type = Object.prototype.toString.call(value);
            const isbuffer = isBuffer(value);
            const isobject = type === "[object Object]" || type === "[object Array]";
            const newKey = prev ? prev + delimiter + transformKey(key) : transformKey(key);
            if (!isarray && !isbuffer && isobject && Object.keys(value).length && (!opts.maxDepth || currentDepth < maxDepth)) {
              return step(value, newKey, currentDepth + 1);
            }
            output[newKey] = value;
          });
        }
        step(target);
        return output;
      }
      function unflatten(target, opts) {
        opts = opts || {};
        const delimiter = opts.delimiter || ".";
        const overwrite = opts.overwrite || false;
        const transformKey = opts.transformKey || keyIdentity;
        const result = {};
        const isbuffer = isBuffer(target);
        if (isbuffer || Object.prototype.toString.call(target) !== "[object Object]") {
          return target;
        }
        function getkey(key) {
          const parsedKey = Number(key);
          return isNaN(parsedKey) || key.indexOf(".") !== -1 || opts.object ? key : parsedKey;
        }
        function addKeys(keyPrefix, recipient, target2) {
          return Object.keys(target2).reduce(function(result2, key) {
            result2[keyPrefix + delimiter + key] = target2[key];
            return result2;
          }, recipient);
        }
        function isEmpty(val) {
          const type = Object.prototype.toString.call(val);
          const isArray = type === "[object Array]";
          const isObject = type === "[object Object]";
          if (!val) {
            return true;
          } else if (isArray) {
            return !val.length;
          } else if (isObject) {
            return !Object.keys(val).length;
          }
        }
        target = Object.keys(target).reduce(function(result2, key) {
          const type = Object.prototype.toString.call(target[key]);
          const isObject = type === "[object Object]" || type === "[object Array]";
          if (!isObject || isEmpty(target[key])) {
            result2[key] = target[key];
            return result2;
          } else {
            return addKeys(
              key,
              result2,
              flatten2(target[key], opts)
            );
          }
        }, {});
        Object.keys(target).forEach(function(key) {
          const split = key.split(delimiter).map(transformKey);
          let key1 = getkey(split.shift());
          let key2 = getkey(split[0]);
          let recipient = result;
          while (key2 !== void 0) {
            if (key1 === "__proto__") {
              return;
            }
            const type = Object.prototype.toString.call(recipient[key1]);
            const isobject = type === "[object Object]" || type === "[object Array]";
            if (!overwrite && !isobject && typeof recipient[key1] !== "undefined") {
              return;
            }
            if (overwrite && !isobject || !overwrite && recipient[key1] == null) {
              recipient[key1] = typeof key2 === "number" && !opts.object ? [] : {};
            }
            recipient = recipient[key1];
            if (split.length > 0) {
              key1 = getkey(split.shift());
              key2 = getkey(split[0]);
            }
          }
          recipient[key1] = unflatten(target[key], opts);
        });
        return result;
      }
    }
  });

  // src/js/utils/helper.js
  var import_color = __toESM(require_color());
  var helpers = {
    cutText(text, length) {
      if (text.split(" ").length > 1) {
        let string = text.substring(0, length);
        let splitText = string.split(" ");
        splitText.pop();
        return splitText.join(" ") + "...";
      } else {
        return text;
      }
    },
    formatDate(date, format) {
      return dayjs(date).format(format);
    },
    capitalizeFirstLetter(string) {
      if (string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
    },
    onlyNumber(number) {
      if (number) {
        return number.replace(/\D/g, "");
      } else {
        return "";
      }
    },
    formatCurrency(number) {
      if (number) {
        let formattedNumber = number.toString().replace(/\D/g, "");
        let rest = formattedNumber.length % 3;
        let currency = formattedNumber.substr(0, rest);
        let thousand = formattedNumber.substr(rest).match(/\d{3}/g);
        let separator;
        if (thousand) {
          separator = rest ? "." : "";
          currency += separator + thousand.join(".");
        }
        return currency;
      } else {
        return "";
      }
    },
    timeAgo(time) {
      let date = new Date(
        (time || "").replace(/-/g, "/").replace(/[TZ]/g, " ")
      ), diff = ((/* @__PURE__ */ new Date()).getTime() - date.getTime()) / 1e3, dayDiff = Math.floor(diff / 86400);
      if (isNaN(dayDiff) || dayDiff < 0 || dayDiff >= 31)
        return dayjs(time).format("MMMM DD, YYYY");
      return dayDiff == 0 && (diff < 60 && "just now" || diff < 120 && "1 minute ago" || diff < 3600 && Math.floor(diff / 60) + " minutes ago" || diff < 7200 && "1 hour ago" || diff < 86400 && Math.floor(diff / 3600) + " hours ago") || dayDiff == 1 && "Yesterday" || dayDiff < 7 && dayDiff + " days ago" || dayDiff < 31 && Math.ceil(dayDiff / 7) + " weeks ago";
    },
    diffTimeByNow(time) {
      let startDate = dayjs(dayjs().format("YYYY-MM-DD HH:mm:ss").toString());
      let endDate = dayjs(
        dayjs(time).format("YYYY-MM-DD HH:mm:ss").toString()
      );
      let duration = dayjs.duration(endDate.diff(startDate));
      let milliseconds = Math.floor(duration.asMilliseconds());
      let days = Math.round(milliseconds / 864e5);
      let hours = Math.round(milliseconds % 864e5 / 36e5);
      let minutes = Math.round(milliseconds % 864e5 % 36e5 / 6e4);
      let seconds = Math.round(
        milliseconds % 864e5 % 36e5 % 6e4 / 1e3
      );
      if (seconds < 30 && seconds >= 0) {
        minutes += 1;
      }
      return {
        days: days.toString().length < 2 ? "0" + days : days,
        hours: hours.toString().length < 2 ? "0" + hours : hours,
        minutes: minutes.toString().length < 2 ? "0" + minutes : minutes,
        seconds: seconds.toString().length < 2 ? "0" + seconds : seconds
      };
    },
    isset(obj) {
      return Object.keys(obj).length;
    },
    assign(obj) {
      return JSON.parse(JSON.stringify(obj));
    },
    delay(time) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve();
        }, time);
      });
    },
    randomNumbers(from, to, length) {
      let numbers = [0];
      for (let i = 1; i < length; i++) {
        numbers.push(Math.ceil(Math.random() * (from - to) + to));
      }
      return numbers;
    },
    replaceAll(str, find, replace) {
      return str.replace(new RegExp(find, "g"), replace);
    },
    toRGB(value) {
      return (0, import_color.parseColor)(value).color.join(" ");
    },
    watchClassNameChanges(targetElement, callback) {
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.attributeName === "class") {
            const currentClassName = mutation.target.className;
            callback(currentClassName);
          }
        });
      });
      const config = { attributes: true, attributeFilter: ["class"] };
      observer.observe(targetElement, config);
      return observer;
    }
  };
  window.helper = helpers;
  var helper_default = helpers;

  // src/js/utils/colors.js
  var import_resolveConfig = __toESM(require_resolveConfig2());
  var import_tailwind_config = __toESM(require_tailwind_config());
  var import_flat = __toESM(require_flat());
  var twConfig = (0, import_resolveConfig.default)(import_tailwind_config.default);
  var colors = twConfig.theme?.colors;
  function getColor(colorKey, opacity = 1) {
    const flattenColors = (0, import_flat.default)(colors);
    if (flattenColors[colorKey].search("var") === -1) {
      return `rgb(${helper_default.toRGB(flattenColors[colorKey])} / ${opacity})`;
    } else {
      const cssVariableName = `--color-${flattenColors[colorKey].split("--color-")[1].split(")")[0]}`;
      return `rgb(${getComputedStyle(document.body).getPropertyValue(
        cssVariableName
      )} / ${opacity})`;
    }
  }
  window.getColor = getColor;
})();

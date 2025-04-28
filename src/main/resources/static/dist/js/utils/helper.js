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
})();

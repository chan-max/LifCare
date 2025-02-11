import {
  __commonJS
} from "./chunk-P2LSHJDD.js";

// ../../../../../../Users/jackie/workspace/lif-app/LifCare/node_modules/cos-js-sdk-v5/dist/cos-js-sdk-v5.js
var require_cos_js_sdk_v5 = __commonJS({
  "../../../../../../Users/jackie/workspace/lif-app/LifCare/node_modules/cos-js-sdk-v5/dist/cos-js-sdk-v5.js"(exports, module) {
    (function webpackUniversalModuleDefinition(root, factory) {
      if (typeof exports === "object" && typeof module === "object")
        module.exports = factory();
      else if (typeof define === "function" && define.amd)
        define([], factory);
      else if (typeof exports === "object")
        exports["COS"] = factory();
      else
        root["COS"] = factory();
    })(exports, function() {
      return (
        /******/
        function(modules) {
          var installedModules = {};
          function __webpack_require__(moduleId) {
            if (installedModules[moduleId]) {
              return installedModules[moduleId].exports;
            }
            var module2 = installedModules[moduleId] = {
              /******/
              i: moduleId,
              /******/
              l: false,
              /******/
              exports: {}
              /******/
            };
            modules[moduleId].call(module2.exports, module2, module2.exports, __webpack_require__);
            module2.l = true;
            return module2.exports;
          }
          __webpack_require__.m = modules;
          __webpack_require__.c = installedModules;
          __webpack_require__.d = function(exports2, name, getter) {
            if (!__webpack_require__.o(exports2, name)) {
              Object.defineProperty(exports2, name, { enumerable: true, get: getter });
            }
          };
          __webpack_require__.r = function(exports2) {
            if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
              Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
            }
            Object.defineProperty(exports2, "__esModule", { value: true });
          };
          __webpack_require__.t = function(value, mode) {
            if (mode & 1)
              value = __webpack_require__(value);
            if (mode & 8)
              return value;
            if (mode & 4 && typeof value === "object" && value && value.__esModule)
              return value;
            var ns = /* @__PURE__ */ Object.create(null);
            __webpack_require__.r(ns);
            Object.defineProperty(ns, "default", { enumerable: true, value });
            if (mode & 2 && typeof value != "string")
              for (var key in value)
                __webpack_require__.d(ns, key, (function(key2) {
                  return value[key2];
                }).bind(null, key));
            return ns;
          };
          __webpack_require__.n = function(module2) {
            var getter = module2 && module2.__esModule ? (
              /******/
              function getDefault() {
                return module2["default"];
              }
            ) : (
              /******/
              function getModuleExports() {
                return module2;
              }
            );
            __webpack_require__.d(getter, "a", getter);
            return getter;
          };
          __webpack_require__.o = function(object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
          };
          __webpack_require__.p = "/dist/";
          return __webpack_require__(__webpack_require__.s = "./index.js");
        }({
          /***/
          "./index.js": (
            /*!******************!*\
              !*** ./index.js ***!
              \******************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var COS = __webpack_require__(
                /*! ./src/cos */
                "./src/cos.js"
              );
              module2.exports = COS;
            }
          ),
          /***/
          "./lib/base64.js": (
            /*!***********************!*\
              !*** ./lib/base64.js ***!
              \***********************/
            /*! no static exports found */
            /***/
            function(module2, exports2) {
              var Base64 = function(global) {
                global = global || {};
                "use strict";
                var _Base64 = global.Base64;
                var version = "2.1.9";
                var buffer;
                var b64chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
                var b64tab = function(bin) {
                  var t = {};
                  for (var i = 0, l = bin.length; i < l; i++)
                    t[bin.charAt(i)] = i;
                  return t;
                }(b64chars);
                var fromCharCode = String.fromCharCode;
                var cb_utob = function cb_utob2(c) {
                  if (c.length < 2) {
                    var cc = c.charCodeAt(0);
                    return cc < 128 ? c : cc < 2048 ? fromCharCode(192 | cc >>> 6) + fromCharCode(128 | cc & 63) : fromCharCode(224 | cc >>> 12 & 15) + fromCharCode(128 | cc >>> 6 & 63) + fromCharCode(128 | cc & 63);
                  } else {
                    var cc = 65536 + (c.charCodeAt(0) - 55296) * 1024 + (c.charCodeAt(1) - 56320);
                    return fromCharCode(240 | cc >>> 18 & 7) + fromCharCode(128 | cc >>> 12 & 63) + fromCharCode(128 | cc >>> 6 & 63) + fromCharCode(128 | cc & 63);
                  }
                };
                var re_utob = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g;
                var utob = function utob2(u) {
                  return u.replace(re_utob, cb_utob);
                };
                var cb_encode = function cb_encode2(ccc) {
                  var padlen = [0, 2, 1][ccc.length % 3], ord = ccc.charCodeAt(0) << 16 | (ccc.length > 1 ? ccc.charCodeAt(1) : 0) << 8 | (ccc.length > 2 ? ccc.charCodeAt(2) : 0), chars = [b64chars.charAt(ord >>> 18), b64chars.charAt(ord >>> 12 & 63), padlen >= 2 ? "=" : b64chars.charAt(ord >>> 6 & 63), padlen >= 1 ? "=" : b64chars.charAt(ord & 63)];
                  return chars.join("");
                };
                var btoa2 = global.btoa ? function(b) {
                  return global.btoa(b);
                } : function(b) {
                  return b.replace(/[\s\S]{1,3}/g, cb_encode);
                };
                var _encode = buffer ? function(u) {
                  return (u.constructor === buffer.constructor ? u : new buffer(u)).toString("base64");
                } : function(u) {
                  return btoa2(utob(u));
                };
                var encode = function encode2(u, urisafe) {
                  return !urisafe ? _encode(String(u)) : _encode(String(u)).replace(/[+\/]/g, function(m0) {
                    return m0 == "+" ? "-" : "_";
                  }).replace(/=/g, "");
                };
                var encodeURI = function encodeURI2(u) {
                  return encode(u, true);
                };
                var re_btou = new RegExp(["[À-ß][-¿]", "[à-ï][-¿]{2}", "[ð-÷][-¿]{3}"].join("|"), "g");
                var cb_btou = function cb_btou2(cccc) {
                  switch (cccc.length) {
                    case 4:
                      var cp = (7 & cccc.charCodeAt(0)) << 18 | (63 & cccc.charCodeAt(1)) << 12 | (63 & cccc.charCodeAt(2)) << 6 | 63 & cccc.charCodeAt(3), offset = cp - 65536;
                      return fromCharCode((offset >>> 10) + 55296) + fromCharCode((offset & 1023) + 56320);
                    case 3:
                      return fromCharCode((15 & cccc.charCodeAt(0)) << 12 | (63 & cccc.charCodeAt(1)) << 6 | 63 & cccc.charCodeAt(2));
                    default:
                      return fromCharCode((31 & cccc.charCodeAt(0)) << 6 | 63 & cccc.charCodeAt(1));
                  }
                };
                var btou = function btou2(b) {
                  return b.replace(re_btou, cb_btou);
                };
                var cb_decode = function cb_decode2(cccc) {
                  var len = cccc.length, padlen = len % 4, n = (len > 0 ? b64tab[cccc.charAt(0)] << 18 : 0) | (len > 1 ? b64tab[cccc.charAt(1)] << 12 : 0) | (len > 2 ? b64tab[cccc.charAt(2)] << 6 : 0) | (len > 3 ? b64tab[cccc.charAt(3)] : 0), chars = [fromCharCode(n >>> 16), fromCharCode(n >>> 8 & 255), fromCharCode(n & 255)];
                  chars.length -= [0, 0, 2, 1][padlen];
                  return chars.join("");
                };
                var atob2 = global.atob ? function(a) {
                  return global.atob(a);
                } : function(a) {
                  return a.replace(/[\s\S]{1,4}/g, cb_decode);
                };
                var _decode = buffer ? function(a) {
                  return (a.constructor === buffer.constructor ? a : new buffer(a, "base64")).toString();
                } : function(a) {
                  return btou(atob2(a));
                };
                var decode = function decode2(a) {
                  return _decode(String(a).replace(/[-_]/g, function(m0) {
                    return m0 == "-" ? "+" : "/";
                  }).replace(/[^A-Za-z0-9\+\/]/g, ""));
                };
                var noConflict = function noConflict2() {
                  var Base643 = global.Base64;
                  global.Base64 = _Base64;
                  return Base643;
                };
                var Base642 = {
                  VERSION: version,
                  atob: atob2,
                  btoa: btoa2,
                  fromBase64: decode,
                  toBase64: encode,
                  utob,
                  encode,
                  encodeURI,
                  btou,
                  decode,
                  noConflict
                };
                return Base642;
              }();
              module2.exports = Base64;
            }
          ),
          /***/
          "./lib/crypto.js": (
            /*!***********************!*\
              !*** ./lib/crypto.js ***!
              \***********************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              (function(module3) {
                var _typeof = __webpack_require__(
                  /*! @babel/runtime/helpers/typeof */
                  "./node_modules/@babel/runtime/helpers/typeof.js"
                );
                var CryptoJS = CryptoJS || function(g, l) {
                  var e = {}, d = e.lib = {}, m = function m2() {
                  }, k = d.Base = {
                    extend: function extend(a) {
                      m.prototype = this;
                      var c = new m();
                      a && c.mixIn(a);
                      c.hasOwnProperty("init") || (c.init = function() {
                        c.$super.init.apply(this, arguments);
                      });
                      c.init.prototype = c;
                      c.$super = this;
                      return c;
                    },
                    create: function create() {
                      var a = this.extend();
                      a.init.apply(a, arguments);
                      return a;
                    },
                    init: function init() {
                    },
                    mixIn: function mixIn(a) {
                      for (var c in a)
                        a.hasOwnProperty(c) && (this[c] = a[c]);
                      a.hasOwnProperty("toString") && (this.toString = a.toString);
                    },
                    clone: function clone() {
                      return this.init.prototype.extend(this);
                    }
                  }, p = d.WordArray = k.extend({
                    init: function init(a, c) {
                      a = this.words = a || [];
                      this.sigBytes = c != l ? c : 4 * a.length;
                    },
                    toString: function toString(a) {
                      return (a || n).stringify(this);
                    },
                    concat: function concat(a) {
                      var c = this.words, q = a.words, f = this.sigBytes;
                      a = a.sigBytes;
                      this.clamp();
                      if (f % 4)
                        for (var b2 = 0; b2 < a; b2++)
                          c[f + b2 >>> 2] |= (q[b2 >>> 2] >>> 24 - 8 * (b2 % 4) & 255) << 24 - 8 * ((f + b2) % 4);
                      else if (65535 < q.length)
                        for (b2 = 0; b2 < a; b2 += 4)
                          c[f + b2 >>> 2] = q[b2 >>> 2];
                      else
                        c.push.apply(c, q);
                      this.sigBytes += a;
                      return this;
                    },
                    clamp: function clamp() {
                      var a = this.words, c = this.sigBytes;
                      a[c >>> 2] &= 4294967295 << 32 - 8 * (c % 4);
                      a.length = g.ceil(c / 4);
                    },
                    clone: function clone() {
                      var a = k.clone.call(this);
                      a.words = this.words.slice(0);
                      return a;
                    },
                    random: function random(a) {
                      for (var c = [], b2 = 0; b2 < a; b2 += 4)
                        c.push(4294967296 * g.random() | 0);
                      return new p.init(c, a);
                    }
                  }), b = e.enc = {}, n = b.Hex = {
                    stringify: function stringify(a) {
                      var c = a.words;
                      a = a.sigBytes;
                      for (var b2 = [], f = 0; f < a; f++) {
                        var d2 = c[f >>> 2] >>> 24 - 8 * (f % 4) & 255;
                        b2.push((d2 >>> 4).toString(16));
                        b2.push((d2 & 15).toString(16));
                      }
                      return b2.join("");
                    },
                    parse: function parse(a) {
                      for (var c = a.length, b2 = [], f = 0; f < c; f += 2)
                        b2[f >>> 3] |= parseInt(a.substr(f, 2), 16) << 24 - 4 * (f % 8);
                      return new p.init(b2, c / 2);
                    }
                  }, j = b.Latin1 = {
                    stringify: function stringify(a) {
                      var c = a.words;
                      a = a.sigBytes;
                      for (var b2 = [], f = 0; f < a; f++)
                        b2.push(String.fromCharCode(c[f >>> 2] >>> 24 - 8 * (f % 4) & 255));
                      return b2.join("");
                    },
                    parse: function parse(a) {
                      for (var c = a.length, b2 = [], f = 0; f < c; f++)
                        b2[f >>> 2] |= (a.charCodeAt(f) & 255) << 24 - 8 * (f % 4);
                      return new p.init(b2, c);
                    }
                  }, h = b.Utf8 = {
                    stringify: function stringify(a) {
                      try {
                        return decodeURIComponent(escape(j.stringify(a)));
                      } catch (c) {
                        throw Error("Malformed UTF-8 data");
                      }
                    },
                    parse: function parse(a) {
                      return j.parse(unescape(encodeURIComponent(a)));
                    }
                  }, r = d.BufferedBlockAlgorithm = k.extend({
                    reset: function reset() {
                      this._data = new p.init();
                      this._nDataBytes = 0;
                    },
                    _append: function _append(a) {
                      "string" == typeof a && (a = h.parse(a));
                      this._data.concat(a);
                      this._nDataBytes += a.sigBytes;
                    },
                    _process: function _process(a) {
                      var c = this._data, b2 = c.words, f = c.sigBytes, d2 = this.blockSize, e2 = f / (4 * d2), e2 = a ? g.ceil(e2) : g.max((e2 | 0) - this._minBufferSize, 0);
                      a = e2 * d2;
                      f = g.min(4 * a, f);
                      if (a) {
                        for (var k2 = 0; k2 < a; k2 += d2)
                          this._doProcessBlock(b2, k2);
                        k2 = b2.splice(0, a);
                        c.sigBytes -= f;
                      }
                      return new p.init(k2, f);
                    },
                    clone: function clone() {
                      var a = k.clone.call(this);
                      a._data = this._data.clone();
                      return a;
                    },
                    _minBufferSize: 0
                  });
                  d.Hasher = r.extend({
                    cfg: k.extend(),
                    init: function init(a) {
                      this.cfg = this.cfg.extend(a);
                      this.reset();
                    },
                    reset: function reset() {
                      r.reset.call(this);
                      this._doReset();
                    },
                    update: function update(a) {
                      this._append(a);
                      this._process();
                      return this;
                    },
                    finalize: function finalize(a) {
                      a && this._append(a);
                      return this._doFinalize();
                    },
                    blockSize: 16,
                    _createHelper: function _createHelper(a) {
                      return function(b2, d2) {
                        return new a.init(d2).finalize(b2);
                      };
                    },
                    _createHmacHelper: function _createHmacHelper(a) {
                      return function(b2, d2) {
                        return new s.HMAC.init(a, d2).finalize(b2);
                      };
                    }
                  });
                  var s = e.algo = {};
                  return e;
                }(Math);
                (function() {
                  var g = CryptoJS, l = g.lib, e = l.WordArray, d = l.Hasher, m = [], l = g.algo.SHA1 = d.extend({
                    _doReset: function _doReset() {
                      this._hash = new e.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
                    },
                    _doProcessBlock: function _doProcessBlock(d2, e2) {
                      for (var b = this._hash.words, n = b[0], j = b[1], h = b[2], g2 = b[3], l2 = b[4], a = 0; 80 > a; a++) {
                        if (16 > a)
                          m[a] = d2[e2 + a] | 0;
                        else {
                          var c = m[a - 3] ^ m[a - 8] ^ m[a - 14] ^ m[a - 16];
                          m[a] = c << 1 | c >>> 31;
                        }
                        c = (n << 5 | n >>> 27) + l2 + m[a];
                        c = 20 > a ? c + ((j & h | ~j & g2) + 1518500249) : 40 > a ? c + ((j ^ h ^ g2) + 1859775393) : 60 > a ? c + ((j & h | j & g2 | h & g2) - 1894007588) : c + ((j ^ h ^ g2) - 899497514);
                        l2 = g2;
                        g2 = h;
                        h = j << 30 | j >>> 2;
                        j = n;
                        n = c;
                      }
                      b[0] = b[0] + n | 0;
                      b[1] = b[1] + j | 0;
                      b[2] = b[2] + h | 0;
                      b[3] = b[3] + g2 | 0;
                      b[4] = b[4] + l2 | 0;
                    },
                    _doFinalize: function _doFinalize() {
                      var d2 = this._data, e2 = d2.words, b = 8 * this._nDataBytes, g2 = 8 * d2.sigBytes;
                      e2[g2 >>> 5] |= 128 << 24 - g2 % 32;
                      e2[(g2 + 64 >>> 9 << 4) + 14] = Math.floor(b / 4294967296);
                      e2[(g2 + 64 >>> 9 << 4) + 15] = b;
                      d2.sigBytes = 4 * e2.length;
                      this._process();
                      return this._hash;
                    },
                    clone: function clone() {
                      var e2 = d.clone.call(this);
                      e2._hash = this._hash.clone();
                      return e2;
                    }
                  });
                  g.SHA1 = d._createHelper(l);
                  g.HmacSHA1 = d._createHmacHelper(l);
                })();
                (function() {
                  var g = CryptoJS, l = g.enc.Utf8;
                  g.algo.HMAC = g.lib.Base.extend({
                    init: function init(e, d) {
                      e = this._hasher = new e.init();
                      "string" == typeof d && (d = l.parse(d));
                      var g2 = e.blockSize, k = 4 * g2;
                      d.sigBytes > k && (d = e.finalize(d));
                      d.clamp();
                      for (var p = this._oKey = d.clone(), b = this._iKey = d.clone(), n = p.words, j = b.words, h = 0; h < g2; h++)
                        n[h] ^= 1549556828, j[h] ^= 909522486;
                      p.sigBytes = b.sigBytes = k;
                      this.reset();
                    },
                    reset: function reset() {
                      var e = this._hasher;
                      e.reset();
                      e.update(this._iKey);
                    },
                    update: function update(e) {
                      this._hasher.update(e);
                      return this;
                    },
                    finalize: function finalize(e) {
                      var d = this._hasher;
                      e = d.finalize(e);
                      d.reset();
                      return d.finalize(this._oKey.clone().concat(e));
                    }
                  });
                })();
                (function() {
                  var C = CryptoJS;
                  var C_lib = C.lib;
                  var WordArray = C_lib.WordArray;
                  var C_enc = C.enc;
                  var Base64 = C_enc.Base64 = {
                    /**
                     * Converts a word array to a Base64 string.
                     *
                     * @param {WordArray} wordArray The word array.
                     *
                     * @return {string} The Base64 string.
                     *
                     * @static
                     *
                     * @example
                     *
                     *     var base64String = CryptoJS.enc.Base64.stringify(wordArray);
                     */
                    stringify: function stringify(wordArray) {
                      var words = wordArray.words;
                      var sigBytes = wordArray.sigBytes;
                      var map = this._map;
                      wordArray.clamp();
                      var base64Chars = [];
                      for (var i = 0; i < sigBytes; i += 3) {
                        var byte1 = words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                        var byte2 = words[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 255;
                        var byte3 = words[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 255;
                        var triplet = byte1 << 16 | byte2 << 8 | byte3;
                        for (var j = 0; j < 4 && i + j * 0.75 < sigBytes; j++) {
                          base64Chars.push(map.charAt(triplet >>> 6 * (3 - j) & 63));
                        }
                      }
                      var paddingChar = map.charAt(64);
                      if (paddingChar) {
                        while (base64Chars.length % 4) {
                          base64Chars.push(paddingChar);
                        }
                      }
                      return base64Chars.join("");
                    },
                    /**
                     * Converts a Base64 string to a word array.
                     *
                     * @param {string} base64Str The Base64 string.
                     *
                     * @return {WordArray} The word array.
                     *
                     * @static
                     *
                     * @example
                     *
                     *     var wordArray = CryptoJS.enc.Base64.parse(base64String);
                     */
                    parse: function parse(base64Str) {
                      var base64StrLength = base64Str.length;
                      var map = this._map;
                      var paddingChar = map.charAt(64);
                      if (paddingChar) {
                        var paddingIndex = base64Str.indexOf(paddingChar);
                        if (paddingIndex != -1) {
                          base64StrLength = paddingIndex;
                        }
                      }
                      var words = [];
                      var nBytes = 0;
                      for (var i = 0; i < base64StrLength; i++) {
                        if (i % 4) {
                          var bits1 = map.indexOf(base64Str.charAt(i - 1)) << i % 4 * 2;
                          var bits2 = map.indexOf(base64Str.charAt(i)) >>> 6 - i % 4 * 2;
                          words[nBytes >>> 2] |= (bits1 | bits2) << 24 - nBytes % 4 * 8;
                          nBytes++;
                        }
                      }
                      return WordArray.create(words, nBytes);
                    },
                    _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
                  };
                })();
                if ((false ? void 0 : _typeof(module3)) === "object") {
                  module3.exports = CryptoJS;
                } else {
                  window.CryptoJS = CryptoJS;
                }
              }).call(this, __webpack_require__(
                /*! ./../node_modules/webpack/buildin/module.js */
                "./node_modules/webpack/buildin/module.js"
              )(module2));
            }
          ),
          /***/
          "./lib/md5.js": (
            /*!********************!*\
              !*** ./lib/md5.js ***!
              \********************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              (function(module3) {
                var __WEBPACK_AMD_DEFINE_RESULT__;
                var _typeof = __webpack_require__(
                  /*! @babel/runtime/helpers/typeof */
                  "./node_modules/@babel/runtime/helpers/typeof.js"
                );
                (function() {
                  "use strict";
                  var WINDOW = (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object";
                  var root = WINDOW ? window : {};
                  if (root.JS_MD5_NO_WINDOW) {
                    WINDOW = false;
                  }
                  var WEB_WORKER = !WINDOW && (typeof self === "undefined" ? "undefined" : _typeof(self)) === "object";
                  if (WEB_WORKER) {
                    root = self;
                  }
                  var COMMON_JS = !root.JS_MD5_NO_COMMON_JS && (false ? void 0 : _typeof(module3)) === "object" && module3.exports;
                  var AMD = __webpack_require__(
                    /*! !webpack amd options */
                    "./node_modules/webpack/buildin/amd-options.js"
                  );
                  var ARRAY_BUFFER = !root.JS_MD5_NO_ARRAY_BUFFER && typeof ArrayBuffer !== "undefined";
                  var HEX_CHARS = "0123456789abcdef".split("");
                  var EXTRA = [128, 32768, 8388608, -2147483648];
                  var SHIFT = [0, 8, 16, 24];
                  var OUTPUT_TYPES = ["hex", "array", "digest", "buffer", "arrayBuffer", "base64"];
                  var BASE64_ENCODE_CHAR = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
                  var blocks = [], buffer8;
                  if (ARRAY_BUFFER) {
                    var buffer = new ArrayBuffer(68);
                    buffer8 = new Uint8Array(buffer);
                    blocks = new Uint32Array(buffer);
                  }
                  if (root.JS_MD5_NO_NODE_JS || !Array.isArray) {
                    Array.isArray = function(obj) {
                      return Object.prototype.toString.call(obj) === "[object Array]";
                    };
                  }
                  if (ARRAY_BUFFER && (root.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView)) {
                    ArrayBuffer.isView = function(obj) {
                      return _typeof(obj) === "object" && obj.buffer && obj.buffer.constructor === ArrayBuffer;
                    };
                  }
                  var createOutputMethod = function createOutputMethod2(outputType) {
                    return function(message, isBinStr) {
                      return new Md5(true).update(message, isBinStr)[outputType]();
                    };
                  };
                  var createMethod = function createMethod2() {
                    var method = createOutputMethod("hex");
                    method.getCtx = method.create = function() {
                      return new Md5();
                    };
                    method.update = function(message) {
                      return method.create().update(message);
                    };
                    for (var i = 0; i < OUTPUT_TYPES.length; ++i) {
                      var type = OUTPUT_TYPES[i];
                      method[type] = createOutputMethod(type);
                    }
                    return method;
                  };
                  function Md5(sharedMemory) {
                    if (sharedMemory) {
                      blocks[0] = blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
                      this.blocks = blocks;
                      this.buffer8 = buffer8;
                    } else {
                      if (ARRAY_BUFFER) {
                        var buffer2 = new ArrayBuffer(68);
                        this.buffer8 = new Uint8Array(buffer2);
                        this.blocks = new Uint32Array(buffer2);
                      } else {
                        this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                      }
                    }
                    this.h0 = this.h1 = this.h2 = this.h3 = this.start = this.bytes = this.hBytes = 0;
                    this.finalized = this.hashed = false;
                    this.first = true;
                  }
                  Md5.prototype.update = function(message, isBinStr) {
                    if (this.finalized) {
                      return;
                    }
                    var code, index = 0, i, length = message.length, blocks2 = this.blocks;
                    var buffer82 = this.buffer8;
                    while (index < length) {
                      if (this.hashed) {
                        this.hashed = false;
                        blocks2[0] = blocks2[16];
                        blocks2[16] = blocks2[1] = blocks2[2] = blocks2[3] = blocks2[4] = blocks2[5] = blocks2[6] = blocks2[7] = blocks2[8] = blocks2[9] = blocks2[10] = blocks2[11] = blocks2[12] = blocks2[13] = blocks2[14] = blocks2[15] = 0;
                      }
                      if (ARRAY_BUFFER) {
                        for (i = this.start; index < length && i < 64; ++index) {
                          code = message.charCodeAt(index);
                          if (isBinStr || code < 128) {
                            buffer82[i++] = code;
                          } else if (code < 2048) {
                            buffer82[i++] = 192 | code >> 6;
                            buffer82[i++] = 128 | code & 63;
                          } else if (code < 55296 || code >= 57344) {
                            buffer82[i++] = 224 | code >> 12;
                            buffer82[i++] = 128 | code >> 6 & 63;
                            buffer82[i++] = 128 | code & 63;
                          } else {
                            code = 65536 + ((code & 1023) << 10 | message.charCodeAt(++index) & 1023);
                            buffer82[i++] = 240 | code >> 18;
                            buffer82[i++] = 128 | code >> 12 & 63;
                            buffer82[i++] = 128 | code >> 6 & 63;
                            buffer82[i++] = 128 | code & 63;
                          }
                        }
                      } else {
                        for (i = this.start; index < length && i < 64; ++index) {
                          code = message.charCodeAt(index);
                          if (isBinStr || code < 128) {
                            blocks2[i >> 2] |= code << SHIFT[i++ & 3];
                          } else if (code < 2048) {
                            blocks2[i >> 2] |= (192 | code >> 6) << SHIFT[i++ & 3];
                            blocks2[i >> 2] |= (128 | code & 63) << SHIFT[i++ & 3];
                          } else if (code < 55296 || code >= 57344) {
                            blocks2[i >> 2] |= (224 | code >> 12) << SHIFT[i++ & 3];
                            blocks2[i >> 2] |= (128 | code >> 6 & 63) << SHIFT[i++ & 3];
                            blocks2[i >> 2] |= (128 | code & 63) << SHIFT[i++ & 3];
                          } else {
                            code = 65536 + ((code & 1023) << 10 | message.charCodeAt(++index) & 1023);
                            blocks2[i >> 2] |= (240 | code >> 18) << SHIFT[i++ & 3];
                            blocks2[i >> 2] |= (128 | code >> 12 & 63) << SHIFT[i++ & 3];
                            blocks2[i >> 2] |= (128 | code >> 6 & 63) << SHIFT[i++ & 3];
                            blocks2[i >> 2] |= (128 | code & 63) << SHIFT[i++ & 3];
                          }
                        }
                      }
                      this.lastByteIndex = i;
                      this.bytes += i - this.start;
                      if (i >= 64) {
                        this.start = i - 64;
                        this.hash();
                        this.hashed = true;
                      } else {
                        this.start = i;
                      }
                    }
                    if (this.bytes > 4294967295) {
                      this.hBytes += this.bytes / 4294967296 << 0;
                      this.bytes = this.bytes % 4294967296;
                    }
                    return this;
                  };
                  Md5.prototype.finalize = function() {
                    if (this.finalized) {
                      return;
                    }
                    this.finalized = true;
                    var blocks2 = this.blocks, i = this.lastByteIndex;
                    blocks2[i >> 2] |= EXTRA[i & 3];
                    if (i >= 56) {
                      if (!this.hashed) {
                        this.hash();
                      }
                      blocks2[0] = blocks2[16];
                      blocks2[16] = blocks2[1] = blocks2[2] = blocks2[3] = blocks2[4] = blocks2[5] = blocks2[6] = blocks2[7] = blocks2[8] = blocks2[9] = blocks2[10] = blocks2[11] = blocks2[12] = blocks2[13] = blocks2[14] = blocks2[15] = 0;
                    }
                    blocks2[14] = this.bytes << 3;
                    blocks2[15] = this.hBytes << 3 | this.bytes >>> 29;
                    this.hash();
                  };
                  Md5.prototype.hash = function() {
                    var a, b, c, d, bc, da, blocks2 = this.blocks;
                    if (this.first) {
                      a = blocks2[0] - 680876937;
                      a = (a << 7 | a >>> 25) - 271733879 << 0;
                      d = (-1732584194 ^ a & 2004318071) + blocks2[1] - 117830708;
                      d = (d << 12 | d >>> 20) + a << 0;
                      c = (-271733879 ^ d & (a ^ -271733879)) + blocks2[2] - 1126478375;
                      c = (c << 17 | c >>> 15) + d << 0;
                      b = (a ^ c & (d ^ a)) + blocks2[3] - 1316259209;
                      b = (b << 22 | b >>> 10) + c << 0;
                    } else {
                      a = this.h0;
                      b = this.h1;
                      c = this.h2;
                      d = this.h3;
                      a += (d ^ b & (c ^ d)) + blocks2[0] - 680876936;
                      a = (a << 7 | a >>> 25) + b << 0;
                      d += (c ^ a & (b ^ c)) + blocks2[1] - 389564586;
                      d = (d << 12 | d >>> 20) + a << 0;
                      c += (b ^ d & (a ^ b)) + blocks2[2] + 606105819;
                      c = (c << 17 | c >>> 15) + d << 0;
                      b += (a ^ c & (d ^ a)) + blocks2[3] - 1044525330;
                      b = (b << 22 | b >>> 10) + c << 0;
                    }
                    a += (d ^ b & (c ^ d)) + blocks2[4] - 176418897;
                    a = (a << 7 | a >>> 25) + b << 0;
                    d += (c ^ a & (b ^ c)) + blocks2[5] + 1200080426;
                    d = (d << 12 | d >>> 20) + a << 0;
                    c += (b ^ d & (a ^ b)) + blocks2[6] - 1473231341;
                    c = (c << 17 | c >>> 15) + d << 0;
                    b += (a ^ c & (d ^ a)) + blocks2[7] - 45705983;
                    b = (b << 22 | b >>> 10) + c << 0;
                    a += (d ^ b & (c ^ d)) + blocks2[8] + 1770035416;
                    a = (a << 7 | a >>> 25) + b << 0;
                    d += (c ^ a & (b ^ c)) + blocks2[9] - 1958414417;
                    d = (d << 12 | d >>> 20) + a << 0;
                    c += (b ^ d & (a ^ b)) + blocks2[10] - 42063;
                    c = (c << 17 | c >>> 15) + d << 0;
                    b += (a ^ c & (d ^ a)) + blocks2[11] - 1990404162;
                    b = (b << 22 | b >>> 10) + c << 0;
                    a += (d ^ b & (c ^ d)) + blocks2[12] + 1804603682;
                    a = (a << 7 | a >>> 25) + b << 0;
                    d += (c ^ a & (b ^ c)) + blocks2[13] - 40341101;
                    d = (d << 12 | d >>> 20) + a << 0;
                    c += (b ^ d & (a ^ b)) + blocks2[14] - 1502002290;
                    c = (c << 17 | c >>> 15) + d << 0;
                    b += (a ^ c & (d ^ a)) + blocks2[15] + 1236535329;
                    b = (b << 22 | b >>> 10) + c << 0;
                    a += (c ^ d & (b ^ c)) + blocks2[1] - 165796510;
                    a = (a << 5 | a >>> 27) + b << 0;
                    d += (b ^ c & (a ^ b)) + blocks2[6] - 1069501632;
                    d = (d << 9 | d >>> 23) + a << 0;
                    c += (a ^ b & (d ^ a)) + blocks2[11] + 643717713;
                    c = (c << 14 | c >>> 18) + d << 0;
                    b += (d ^ a & (c ^ d)) + blocks2[0] - 373897302;
                    b = (b << 20 | b >>> 12) + c << 0;
                    a += (c ^ d & (b ^ c)) + blocks2[5] - 701558691;
                    a = (a << 5 | a >>> 27) + b << 0;
                    d += (b ^ c & (a ^ b)) + blocks2[10] + 38016083;
                    d = (d << 9 | d >>> 23) + a << 0;
                    c += (a ^ b & (d ^ a)) + blocks2[15] - 660478335;
                    c = (c << 14 | c >>> 18) + d << 0;
                    b += (d ^ a & (c ^ d)) + blocks2[4] - 405537848;
                    b = (b << 20 | b >>> 12) + c << 0;
                    a += (c ^ d & (b ^ c)) + blocks2[9] + 568446438;
                    a = (a << 5 | a >>> 27) + b << 0;
                    d += (b ^ c & (a ^ b)) + blocks2[14] - 1019803690;
                    d = (d << 9 | d >>> 23) + a << 0;
                    c += (a ^ b & (d ^ a)) + blocks2[3] - 187363961;
                    c = (c << 14 | c >>> 18) + d << 0;
                    b += (d ^ a & (c ^ d)) + blocks2[8] + 1163531501;
                    b = (b << 20 | b >>> 12) + c << 0;
                    a += (c ^ d & (b ^ c)) + blocks2[13] - 1444681467;
                    a = (a << 5 | a >>> 27) + b << 0;
                    d += (b ^ c & (a ^ b)) + blocks2[2] - 51403784;
                    d = (d << 9 | d >>> 23) + a << 0;
                    c += (a ^ b & (d ^ a)) + blocks2[7] + 1735328473;
                    c = (c << 14 | c >>> 18) + d << 0;
                    b += (d ^ a & (c ^ d)) + blocks2[12] - 1926607734;
                    b = (b << 20 | b >>> 12) + c << 0;
                    bc = b ^ c;
                    a += (bc ^ d) + blocks2[5] - 378558;
                    a = (a << 4 | a >>> 28) + b << 0;
                    d += (bc ^ a) + blocks2[8] - 2022574463;
                    d = (d << 11 | d >>> 21) + a << 0;
                    da = d ^ a;
                    c += (da ^ b) + blocks2[11] + 1839030562;
                    c = (c << 16 | c >>> 16) + d << 0;
                    b += (da ^ c) + blocks2[14] - 35309556;
                    b = (b << 23 | b >>> 9) + c << 0;
                    bc = b ^ c;
                    a += (bc ^ d) + blocks2[1] - 1530992060;
                    a = (a << 4 | a >>> 28) + b << 0;
                    d += (bc ^ a) + blocks2[4] + 1272893353;
                    d = (d << 11 | d >>> 21) + a << 0;
                    da = d ^ a;
                    c += (da ^ b) + blocks2[7] - 155497632;
                    c = (c << 16 | c >>> 16) + d << 0;
                    b += (da ^ c) + blocks2[10] - 1094730640;
                    b = (b << 23 | b >>> 9) + c << 0;
                    bc = b ^ c;
                    a += (bc ^ d) + blocks2[13] + 681279174;
                    a = (a << 4 | a >>> 28) + b << 0;
                    d += (bc ^ a) + blocks2[0] - 358537222;
                    d = (d << 11 | d >>> 21) + a << 0;
                    da = d ^ a;
                    c += (da ^ b) + blocks2[3] - 722521979;
                    c = (c << 16 | c >>> 16) + d << 0;
                    b += (da ^ c) + blocks2[6] + 76029189;
                    b = (b << 23 | b >>> 9) + c << 0;
                    bc = b ^ c;
                    a += (bc ^ d) + blocks2[9] - 640364487;
                    a = (a << 4 | a >>> 28) + b << 0;
                    d += (bc ^ a) + blocks2[12] - 421815835;
                    d = (d << 11 | d >>> 21) + a << 0;
                    da = d ^ a;
                    c += (da ^ b) + blocks2[15] + 530742520;
                    c = (c << 16 | c >>> 16) + d << 0;
                    b += (da ^ c) + blocks2[2] - 995338651;
                    b = (b << 23 | b >>> 9) + c << 0;
                    a += (c ^ (b | ~d)) + blocks2[0] - 198630844;
                    a = (a << 6 | a >>> 26) + b << 0;
                    d += (b ^ (a | ~c)) + blocks2[7] + 1126891415;
                    d = (d << 10 | d >>> 22) + a << 0;
                    c += (a ^ (d | ~b)) + blocks2[14] - 1416354905;
                    c = (c << 15 | c >>> 17) + d << 0;
                    b += (d ^ (c | ~a)) + blocks2[5] - 57434055;
                    b = (b << 21 | b >>> 11) + c << 0;
                    a += (c ^ (b | ~d)) + blocks2[12] + 1700485571;
                    a = (a << 6 | a >>> 26) + b << 0;
                    d += (b ^ (a | ~c)) + blocks2[3] - 1894986606;
                    d = (d << 10 | d >>> 22) + a << 0;
                    c += (a ^ (d | ~b)) + blocks2[10] - 1051523;
                    c = (c << 15 | c >>> 17) + d << 0;
                    b += (d ^ (c | ~a)) + blocks2[1] - 2054922799;
                    b = (b << 21 | b >>> 11) + c << 0;
                    a += (c ^ (b | ~d)) + blocks2[8] + 1873313359;
                    a = (a << 6 | a >>> 26) + b << 0;
                    d += (b ^ (a | ~c)) + blocks2[15] - 30611744;
                    d = (d << 10 | d >>> 22) + a << 0;
                    c += (a ^ (d | ~b)) + blocks2[6] - 1560198380;
                    c = (c << 15 | c >>> 17) + d << 0;
                    b += (d ^ (c | ~a)) + blocks2[13] + 1309151649;
                    b = (b << 21 | b >>> 11) + c << 0;
                    a += (c ^ (b | ~d)) + blocks2[4] - 145523070;
                    a = (a << 6 | a >>> 26) + b << 0;
                    d += (b ^ (a | ~c)) + blocks2[11] - 1120210379;
                    d = (d << 10 | d >>> 22) + a << 0;
                    c += (a ^ (d | ~b)) + blocks2[2] + 718787259;
                    c = (c << 15 | c >>> 17) + d << 0;
                    b += (d ^ (c | ~a)) + blocks2[9] - 343485551;
                    b = (b << 21 | b >>> 11) + c << 0;
                    if (this.first) {
                      this.h0 = a + 1732584193 << 0;
                      this.h1 = b - 271733879 << 0;
                      this.h2 = c - 1732584194 << 0;
                      this.h3 = d + 271733878 << 0;
                      this.first = false;
                    } else {
                      this.h0 = this.h0 + a << 0;
                      this.h1 = this.h1 + b << 0;
                      this.h2 = this.h2 + c << 0;
                      this.h3 = this.h3 + d << 0;
                    }
                  };
                  Md5.prototype.hex = function() {
                    this.finalize();
                    var h0 = this.h0, h1 = this.h1, h2 = this.h2, h3 = this.h3;
                    return HEX_CHARS[h0 >> 4 & 15] + HEX_CHARS[h0 & 15] + HEX_CHARS[h0 >> 12 & 15] + HEX_CHARS[h0 >> 8 & 15] + HEX_CHARS[h0 >> 20 & 15] + HEX_CHARS[h0 >> 16 & 15] + HEX_CHARS[h0 >> 28 & 15] + HEX_CHARS[h0 >> 24 & 15] + HEX_CHARS[h1 >> 4 & 15] + HEX_CHARS[h1 & 15] + HEX_CHARS[h1 >> 12 & 15] + HEX_CHARS[h1 >> 8 & 15] + HEX_CHARS[h1 >> 20 & 15] + HEX_CHARS[h1 >> 16 & 15] + HEX_CHARS[h1 >> 28 & 15] + HEX_CHARS[h1 >> 24 & 15] + HEX_CHARS[h2 >> 4 & 15] + HEX_CHARS[h2 & 15] + HEX_CHARS[h2 >> 12 & 15] + HEX_CHARS[h2 >> 8 & 15] + HEX_CHARS[h2 >> 20 & 15] + HEX_CHARS[h2 >> 16 & 15] + HEX_CHARS[h2 >> 28 & 15] + HEX_CHARS[h2 >> 24 & 15] + HEX_CHARS[h3 >> 4 & 15] + HEX_CHARS[h3 & 15] + HEX_CHARS[h3 >> 12 & 15] + HEX_CHARS[h3 >> 8 & 15] + HEX_CHARS[h3 >> 20 & 15] + HEX_CHARS[h3 >> 16 & 15] + HEX_CHARS[h3 >> 28 & 15] + HEX_CHARS[h3 >> 24 & 15];
                  };
                  Md5.prototype.toString = Md5.prototype.hex;
                  Md5.prototype.digest = function(format) {
                    if (format === "hex")
                      return this.hex();
                    this.finalize();
                    var h0 = this.h0, h1 = this.h1, h2 = this.h2, h3 = this.h3;
                    var res = [h0 & 255, h0 >> 8 & 255, h0 >> 16 & 255, h0 >> 24 & 255, h1 & 255, h1 >> 8 & 255, h1 >> 16 & 255, h1 >> 24 & 255, h2 & 255, h2 >> 8 & 255, h2 >> 16 & 255, h2 >> 24 & 255, h3 & 255, h3 >> 8 & 255, h3 >> 16 & 255, h3 >> 24 & 255];
                    return res;
                  };
                  Md5.prototype.array = Md5.prototype.digest;
                  Md5.prototype.arrayBuffer = function() {
                    this.finalize();
                    var buffer2 = new ArrayBuffer(16);
                    var blocks2 = new Uint32Array(buffer2);
                    blocks2[0] = this.h0;
                    blocks2[1] = this.h1;
                    blocks2[2] = this.h2;
                    blocks2[3] = this.h3;
                    return buffer2;
                  };
                  Md5.prototype.buffer = Md5.prototype.arrayBuffer;
                  Md5.prototype.base64 = function() {
                    var v1, v2, v3, base64Str = "", bytes = this.array();
                    for (var i = 0; i < 15; ) {
                      v1 = bytes[i++];
                      v2 = bytes[i++];
                      v3 = bytes[i++];
                      base64Str += BASE64_ENCODE_CHAR[v1 >>> 2] + BASE64_ENCODE_CHAR[(v1 << 4 | v2 >>> 4) & 63] + BASE64_ENCODE_CHAR[(v2 << 2 | v3 >>> 6) & 63] + BASE64_ENCODE_CHAR[v3 & 63];
                    }
                    v1 = bytes[i];
                    base64Str += BASE64_ENCODE_CHAR[v1 >>> 2] + BASE64_ENCODE_CHAR[v1 << 4 & 63] + "==";
                    return base64Str;
                  };
                  var exports3 = createMethod();
                  if (COMMON_JS) {
                    module3.exports = exports3;
                  } else {
                    root.md5 = exports3;
                    if (AMD) {
                      !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
                        return exports3;
                      }).call(exports3, __webpack_require__, exports3, module3), __WEBPACK_AMD_DEFINE_RESULT__ !== void 0 && (module3.exports = __WEBPACK_AMD_DEFINE_RESULT__));
                    }
                  }
                })();
              }).call(this, __webpack_require__(
                /*! ./../node_modules/webpack/buildin/module.js */
                "./node_modules/webpack/buildin/module.js"
              )(module2));
            }
          ),
          /***/
          "./lib/request.js": (
            /*!************************!*\
              !*** ./lib/request.js ***!
              \************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var _typeof = __webpack_require__(
                /*! @babel/runtime/helpers/typeof */
                "./node_modules/@babel/runtime/helpers/typeof.js"
              );
              var stringifyPrimitive = function stringifyPrimitive2(v) {
                switch (_typeof(v)) {
                  case "string":
                    return v;
                  case "boolean":
                    return v ? "true" : "false";
                  case "number":
                    return isFinite(v) ? v : "";
                  default:
                    return "";
                }
              };
              var queryStringify = function queryStringify2(obj, sep, eq, name) {
                sep = sep || "&";
                eq = eq || "=";
                if (obj === null) {
                  obj = void 0;
                }
                if (_typeof(obj) === "object") {
                  return Object.keys(obj).map(function(k) {
                    var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
                    if (Array.isArray(obj[k])) {
                      return obj[k].map(function(v) {
                        return ks + encodeURIComponent(stringifyPrimitive(v));
                      }).join(sep);
                    } else {
                      return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
                    }
                  }).filter(Boolean).join(sep);
                }
                if (!name)
                  return "";
                return encodeURIComponent(stringifyPrimitive(name)) + eq + encodeURIComponent(stringifyPrimitive(obj));
              };
              var xhrRes = function xhrRes2(err, xhr, body) {
                var headers = {};
                var strHeaders = xhr.getAllResponseHeaders();
                if (strHeaders && strHeaders.length > 0) {
                  strHeaders.trim().split("\n").forEach(function(item) {
                    if (item) {
                      var index = item.indexOf(":");
                      var key = item.substr(0, index).trim().toLowerCase();
                      var val2 = item.substr(index + 1).trim();
                      headers[key] = val2;
                    }
                  });
                }
                return {
                  error: err,
                  statusCode: xhr.status,
                  statusMessage: xhr.statusText,
                  headers,
                  body
                };
              };
              var xhrBody = function xhrBody2(xhr, dataType) {
                return !dataType && dataType === "text" ? xhr.responseText : xhr.response;
              };
              var request = function request2(opt, callback) {
                var method = (opt.method || "GET").toUpperCase();
                var url = opt.url;
                if (opt.qs) {
                  var qsStr = queryStringify(opt.qs);
                  if (qsStr) {
                    url += (url.indexOf("?") === -1 ? "?" : "&") + qsStr;
                  }
                }
                var xhr = new XMLHttpRequest();
                xhr.open(method, url, true);
                xhr.responseType = opt.dataType || "text";
                if (opt.xhrFields) {
                  for (var xhrField in opt.xhrFields) {
                    xhr[xhrField] = opt.xhrFields[xhrField];
                  }
                }
                var headers = opt.headers;
                if (headers) {
                  for (var key in headers) {
                    if (headers.hasOwnProperty(key) && key.toLowerCase() !== "content-length" && key.toLowerCase() !== "user-agent" && key.toLowerCase() !== "origin" && key.toLowerCase() !== "host") {
                      xhr.setRequestHeader(key, headers[key]);
                    }
                  }
                }
                if (opt.onProgress && xhr.upload)
                  xhr.upload.onprogress = opt.onProgress;
                if (opt.onDownloadProgress)
                  xhr.onprogress = opt.onDownloadProgress;
                if (opt.timeout)
                  xhr.timeout = opt.timeout;
                xhr.ontimeout = function(event) {
                  var error = new Error("timeout");
                  callback(xhrRes(error, xhr));
                };
                xhr.onload = function() {
                  callback(xhrRes(null, xhr, xhrBody(xhr, opt.dataType)));
                };
                xhr.onerror = function(err) {
                  var body = xhrBody(xhr, opt.dataType);
                  if (body) {
                    callback(xhrRes(null, xhr, body));
                  } else {
                    var error = xhr.statusText;
                    if (!error && xhr.status === 0)
                      error = new Error("CORS blocked or network error");
                    callback(xhrRes(error, xhr, body));
                  }
                };
                xhr.send(opt.body || "");
                return xhr;
              };
              module2.exports = request;
            }
          ),
          /***/
          "./node_modules/@babel/runtime/helpers/classCallCheck.js": (
            /*!***************************************************************!*\
              !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
              \***************************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2) {
              function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                  throw new TypeError("Cannot call a class as a function");
                }
              }
              module2.exports = _classCallCheck, module2.exports.__esModule = true, module2.exports["default"] = module2.exports;
            }
          ),
          /***/
          "./node_modules/@babel/runtime/helpers/createClass.js": (
            /*!************************************************************!*\
              !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
              \************************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var toPropertyKey = __webpack_require__(
                /*! ./toPropertyKey.js */
                "./node_modules/@babel/runtime/helpers/toPropertyKey.js"
              );
              function _defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                  var descriptor = props[i];
                  descriptor.enumerable = descriptor.enumerable || false;
                  descriptor.configurable = true;
                  if ("value" in descriptor)
                    descriptor.writable = true;
                  Object.defineProperty(target, toPropertyKey(descriptor.key), descriptor);
                }
              }
              function _createClass(Constructor, protoProps, staticProps) {
                if (protoProps)
                  _defineProperties(Constructor.prototype, protoProps);
                if (staticProps)
                  _defineProperties(Constructor, staticProps);
                Object.defineProperty(Constructor, "prototype", {
                  writable: false
                });
                return Constructor;
              }
              module2.exports = _createClass, module2.exports.__esModule = true, module2.exports["default"] = module2.exports;
            }
          ),
          /***/
          "./node_modules/@babel/runtime/helpers/toPrimitive.js": (
            /*!************************************************************!*\
              !*** ./node_modules/@babel/runtime/helpers/toPrimitive.js ***!
              \************************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var _typeof = __webpack_require__(
                /*! ./typeof.js */
                "./node_modules/@babel/runtime/helpers/typeof.js"
              )["default"];
              function _toPrimitive(input, hint) {
                if (_typeof(input) !== "object" || input === null)
                  return input;
                var prim = input[Symbol.toPrimitive];
                if (prim !== void 0) {
                  var res = prim.call(input, hint || "default");
                  if (_typeof(res) !== "object")
                    return res;
                  throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return (hint === "string" ? String : Number)(input);
              }
              module2.exports = _toPrimitive, module2.exports.__esModule = true, module2.exports["default"] = module2.exports;
            }
          ),
          /***/
          "./node_modules/@babel/runtime/helpers/toPropertyKey.js": (
            /*!**************************************************************!*\
              !*** ./node_modules/@babel/runtime/helpers/toPropertyKey.js ***!
              \**************************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var _typeof = __webpack_require__(
                /*! ./typeof.js */
                "./node_modules/@babel/runtime/helpers/typeof.js"
              )["default"];
              var toPrimitive = __webpack_require__(
                /*! ./toPrimitive.js */
                "./node_modules/@babel/runtime/helpers/toPrimitive.js"
              );
              function _toPropertyKey(arg) {
                var key = toPrimitive(arg, "string");
                return _typeof(key) === "symbol" ? key : String(key);
              }
              module2.exports = _toPropertyKey, module2.exports.__esModule = true, module2.exports["default"] = module2.exports;
            }
          ),
          /***/
          "./node_modules/@babel/runtime/helpers/typeof.js": (
            /*!*******************************************************!*\
              !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
              \*******************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2) {
              function _typeof(o) {
                "@babel/helpers - typeof";
                return module2.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
                  return typeof o2;
                } : function(o2) {
                  return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
                }, module2.exports.__esModule = true, module2.exports["default"] = module2.exports, _typeof(o);
              }
              module2.exports = _typeof, module2.exports.__esModule = true, module2.exports["default"] = module2.exports;
            }
          ),
          /***/
          "./node_modules/fast-xml-parser/src/fxp.js": (
            /*!*************************************************!*\
              !*** ./node_modules/fast-xml-parser/src/fxp.js ***!
              \*************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              const validator = __webpack_require__(
                /*! ./validator */
                "./node_modules/fast-xml-parser/src/validator.js"
              );
              const XMLParser = __webpack_require__(
                /*! ./xmlparser/XMLParser */
                "./node_modules/fast-xml-parser/src/xmlparser/XMLParser.js"
              );
              const XMLBuilder = __webpack_require__(
                /*! ./xmlbuilder/json2xml */
                "./node_modules/fast-xml-parser/src/xmlbuilder/json2xml.js"
              );
              module2.exports = {
                XMLParser,
                XMLValidator: validator,
                XMLBuilder
              };
            }
          ),
          /***/
          "./node_modules/fast-xml-parser/src/ignoreAttributes.js": (
            /*!**************************************************************!*\
              !*** ./node_modules/fast-xml-parser/src/ignoreAttributes.js ***!
              \**************************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2) {
              function getIgnoreAttributesFn(ignoreAttributes) {
                if (typeof ignoreAttributes === "function") {
                  return ignoreAttributes;
                }
                if (Array.isArray(ignoreAttributes)) {
                  return (attrName) => {
                    for (const pattern of ignoreAttributes) {
                      if (typeof pattern === "string" && attrName === pattern) {
                        return true;
                      }
                      if (pattern instanceof RegExp && pattern.test(attrName)) {
                        return true;
                      }
                    }
                  };
                }
                return () => false;
              }
              module2.exports = getIgnoreAttributesFn;
            }
          ),
          /***/
          "./node_modules/fast-xml-parser/src/util.js": (
            /*!**************************************************!*\
              !*** ./node_modules/fast-xml-parser/src/util.js ***!
              \**************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              const nameStartChar = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD";
              const nameChar = nameStartChar + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040";
              const nameRegexp = "[" + nameStartChar + "][" + nameChar + "]*";
              const regexName = new RegExp("^" + nameRegexp + "$");
              const getAllMatches = function(string, regex) {
                const matches = [];
                let match = regex.exec(string);
                while (match) {
                  const allmatches = [];
                  allmatches.startIndex = regex.lastIndex - match[0].length;
                  const len = match.length;
                  for (let index = 0; index < len; index++) {
                    allmatches.push(match[index]);
                  }
                  matches.push(allmatches);
                  match = regex.exec(string);
                }
                return matches;
              };
              const isName = function(string) {
                const match = regexName.exec(string);
                return !(match === null || typeof match === "undefined");
              };
              exports2.isExist = function(v) {
                return typeof v !== "undefined";
              };
              exports2.isEmptyObject = function(obj) {
                return Object.keys(obj).length === 0;
              };
              exports2.merge = function(target, a, arrayMode) {
                if (a) {
                  const keys = Object.keys(a);
                  const len = keys.length;
                  for (let i = 0; i < len; i++) {
                    if (arrayMode === "strict") {
                      target[keys[i]] = [a[keys[i]]];
                    } else {
                      target[keys[i]] = a[keys[i]];
                    }
                  }
                }
              };
              exports2.getValue = function(v) {
                if (exports2.isExist(v)) {
                  return v;
                } else {
                  return "";
                }
              };
              exports2.isName = isName;
              exports2.getAllMatches = getAllMatches;
              exports2.nameRegexp = nameRegexp;
            }
          ),
          /***/
          "./node_modules/fast-xml-parser/src/validator.js": (
            /*!*******************************************************!*\
              !*** ./node_modules/fast-xml-parser/src/validator.js ***!
              \*******************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              const util = __webpack_require__(
                /*! ./util */
                "./node_modules/fast-xml-parser/src/util.js"
              );
              const defaultOptions = {
                allowBooleanAttributes: false,
                //A tag can have attributes without any value
                unpairedTags: []
              };
              exports2.validate = function(xmlData, options) {
                options = Object.assign({}, defaultOptions, options);
                const tags = [];
                let tagFound = false;
                let reachedRoot = false;
                if (xmlData[0] === "\uFEFF") {
                  xmlData = xmlData.substr(1);
                }
                for (let i = 0; i < xmlData.length; i++) {
                  if (xmlData[i] === "<" && xmlData[i + 1] === "?") {
                    i += 2;
                    i = readPI(xmlData, i);
                    if (i.err)
                      return i;
                  } else if (xmlData[i] === "<") {
                    let tagStartPos = i;
                    i++;
                    if (xmlData[i] === "!") {
                      i = readCommentAndCDATA(xmlData, i);
                      continue;
                    } else {
                      let closingTag = false;
                      if (xmlData[i] === "/") {
                        closingTag = true;
                        i++;
                      }
                      let tagName = "";
                      for (; i < xmlData.length && xmlData[i] !== ">" && xmlData[i] !== " " && xmlData[i] !== "	" && xmlData[i] !== "\n" && xmlData[i] !== "\r"; i++) {
                        tagName += xmlData[i];
                      }
                      tagName = tagName.trim();
                      if (tagName[tagName.length - 1] === "/") {
                        tagName = tagName.substring(0, tagName.length - 1);
                        i--;
                      }
                      if (!validateTagName(tagName)) {
                        let msg;
                        if (tagName.trim().length === 0) {
                          msg = "Invalid space after '<'.";
                        } else {
                          msg = "Tag '" + tagName + "' is an invalid name.";
                        }
                        return getErrorObject("InvalidTag", msg, getLineNumberForPosition(xmlData, i));
                      }
                      const result = readAttributeStr(xmlData, i);
                      if (result === false) {
                        return getErrorObject("InvalidAttr", "Attributes for '" + tagName + "' have open quote.", getLineNumberForPosition(xmlData, i));
                      }
                      let attrStr = result.value;
                      i = result.index;
                      if (attrStr[attrStr.length - 1] === "/") {
                        const attrStrStart = i - attrStr.length;
                        attrStr = attrStr.substring(0, attrStr.length - 1);
                        const isValid = validateAttributeString(attrStr, options);
                        if (isValid === true) {
                          tagFound = true;
                        } else {
                          return getErrorObject(isValid.err.code, isValid.err.msg, getLineNumberForPosition(xmlData, attrStrStart + isValid.err.line));
                        }
                      } else if (closingTag) {
                        if (!result.tagClosed) {
                          return getErrorObject("InvalidTag", "Closing tag '" + tagName + "' doesn't have proper closing.", getLineNumberForPosition(xmlData, i));
                        } else if (attrStr.trim().length > 0) {
                          return getErrorObject("InvalidTag", "Closing tag '" + tagName + "' can't have attributes or invalid starting.", getLineNumberForPosition(xmlData, tagStartPos));
                        } else if (tags.length === 0) {
                          return getErrorObject("InvalidTag", "Closing tag '" + tagName + "' has not been opened.", getLineNumberForPosition(xmlData, tagStartPos));
                        } else {
                          const otg = tags.pop();
                          if (tagName !== otg.tagName) {
                            let openPos = getLineNumberForPosition(xmlData, otg.tagStartPos);
                            return getErrorObject(
                              "InvalidTag",
                              "Expected closing tag '" + otg.tagName + "' (opened in line " + openPos.line + ", col " + openPos.col + ") instead of closing tag '" + tagName + "'.",
                              getLineNumberForPosition(xmlData, tagStartPos)
                            );
                          }
                          if (tags.length == 0) {
                            reachedRoot = true;
                          }
                        }
                      } else {
                        const isValid = validateAttributeString(attrStr, options);
                        if (isValid !== true) {
                          return getErrorObject(isValid.err.code, isValid.err.msg, getLineNumberForPosition(xmlData, i - attrStr.length + isValid.err.line));
                        }
                        if (reachedRoot === true) {
                          return getErrorObject("InvalidXml", "Multiple possible root nodes found.", getLineNumberForPosition(xmlData, i));
                        } else if (options.unpairedTags.indexOf(tagName) !== -1) {
                        } else {
                          tags.push({ tagName, tagStartPos });
                        }
                        tagFound = true;
                      }
                      for (i++; i < xmlData.length; i++) {
                        if (xmlData[i] === "<") {
                          if (xmlData[i + 1] === "!") {
                            i++;
                            i = readCommentAndCDATA(xmlData, i);
                            continue;
                          } else if (xmlData[i + 1] === "?") {
                            i = readPI(xmlData, ++i);
                            if (i.err)
                              return i;
                          } else {
                            break;
                          }
                        } else if (xmlData[i] === "&") {
                          const afterAmp = validateAmpersand(xmlData, i);
                          if (afterAmp == -1)
                            return getErrorObject("InvalidChar", "char '&' is not expected.", getLineNumberForPosition(xmlData, i));
                          i = afterAmp;
                        } else {
                          if (reachedRoot === true && !isWhiteSpace(xmlData[i])) {
                            return getErrorObject("InvalidXml", "Extra text at the end", getLineNumberForPosition(xmlData, i));
                          }
                        }
                      }
                      if (xmlData[i] === "<") {
                        i--;
                      }
                    }
                  } else {
                    if (isWhiteSpace(xmlData[i])) {
                      continue;
                    }
                    return getErrorObject("InvalidChar", "char '" + xmlData[i] + "' is not expected.", getLineNumberForPosition(xmlData, i));
                  }
                }
                if (!tagFound) {
                  return getErrorObject("InvalidXml", "Start tag expected.", 1);
                } else if (tags.length == 1) {
                  return getErrorObject("InvalidTag", "Unclosed tag '" + tags[0].tagName + "'.", getLineNumberForPosition(xmlData, tags[0].tagStartPos));
                } else if (tags.length > 0) {
                  return getErrorObject("InvalidXml", "Invalid '" + JSON.stringify(tags.map((t) => t.tagName), null, 4).replace(/\r?\n/g, "") + "' found.", { line: 1, col: 1 });
                }
                return true;
              };
              function isWhiteSpace(char) {
                return char === " " || char === "	" || char === "\n" || char === "\r";
              }
              function readPI(xmlData, i) {
                const start = i;
                for (; i < xmlData.length; i++) {
                  if (xmlData[i] == "?" || xmlData[i] == " ") {
                    const tagname = xmlData.substr(start, i - start);
                    if (i > 5 && tagname === "xml") {
                      return getErrorObject("InvalidXml", "XML declaration allowed only at the start of the document.", getLineNumberForPosition(xmlData, i));
                    } else if (xmlData[i] == "?" && xmlData[i + 1] == ">") {
                      i++;
                      break;
                    } else {
                      continue;
                    }
                  }
                }
                return i;
              }
              function readCommentAndCDATA(xmlData, i) {
                if (xmlData.length > i + 5 && xmlData[i + 1] === "-" && xmlData[i + 2] === "-") {
                  for (i += 3; i < xmlData.length; i++) {
                    if (xmlData[i] === "-" && xmlData[i + 1] === "-" && xmlData[i + 2] === ">") {
                      i += 2;
                      break;
                    }
                  }
                } else if (xmlData.length > i + 8 && xmlData[i + 1] === "D" && xmlData[i + 2] === "O" && xmlData[i + 3] === "C" && xmlData[i + 4] === "T" && xmlData[i + 5] === "Y" && xmlData[i + 6] === "P" && xmlData[i + 7] === "E") {
                  let angleBracketsCount = 1;
                  for (i += 8; i < xmlData.length; i++) {
                    if (xmlData[i] === "<") {
                      angleBracketsCount++;
                    } else if (xmlData[i] === ">") {
                      angleBracketsCount--;
                      if (angleBracketsCount === 0) {
                        break;
                      }
                    }
                  }
                } else if (xmlData.length > i + 9 && xmlData[i + 1] === "[" && xmlData[i + 2] === "C" && xmlData[i + 3] === "D" && xmlData[i + 4] === "A" && xmlData[i + 5] === "T" && xmlData[i + 6] === "A" && xmlData[i + 7] === "[") {
                  for (i += 8; i < xmlData.length; i++) {
                    if (xmlData[i] === "]" && xmlData[i + 1] === "]" && xmlData[i + 2] === ">") {
                      i += 2;
                      break;
                    }
                  }
                }
                return i;
              }
              const doubleQuote = '"';
              const singleQuote = "'";
              function readAttributeStr(xmlData, i) {
                let attrStr = "";
                let startChar = "";
                let tagClosed = false;
                for (; i < xmlData.length; i++) {
                  if (xmlData[i] === doubleQuote || xmlData[i] === singleQuote) {
                    if (startChar === "") {
                      startChar = xmlData[i];
                    } else if (startChar !== xmlData[i]) {
                    } else {
                      startChar = "";
                    }
                  } else if (xmlData[i] === ">") {
                    if (startChar === "") {
                      tagClosed = true;
                      break;
                    }
                  }
                  attrStr += xmlData[i];
                }
                if (startChar !== "") {
                  return false;
                }
                return {
                  value: attrStr,
                  index: i,
                  tagClosed
                };
              }
              const validAttrStrRegxp = new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`, "g");
              function validateAttributeString(attrStr, options) {
                const matches = util.getAllMatches(attrStr, validAttrStrRegxp);
                const attrNames = {};
                for (let i = 0; i < matches.length; i++) {
                  if (matches[i][1].length === 0) {
                    return getErrorObject("InvalidAttr", "Attribute '" + matches[i][2] + "' has no space in starting.", getPositionFromMatch(matches[i]));
                  } else if (matches[i][3] !== void 0 && matches[i][4] === void 0) {
                    return getErrorObject("InvalidAttr", "Attribute '" + matches[i][2] + "' is without value.", getPositionFromMatch(matches[i]));
                  } else if (matches[i][3] === void 0 && !options.allowBooleanAttributes) {
                    return getErrorObject("InvalidAttr", "boolean attribute '" + matches[i][2] + "' is not allowed.", getPositionFromMatch(matches[i]));
                  }
                  const attrName = matches[i][2];
                  if (!validateAttrName(attrName)) {
                    return getErrorObject("InvalidAttr", "Attribute '" + attrName + "' is an invalid name.", getPositionFromMatch(matches[i]));
                  }
                  if (!attrNames.hasOwnProperty(attrName)) {
                    attrNames[attrName] = 1;
                  } else {
                    return getErrorObject("InvalidAttr", "Attribute '" + attrName + "' is repeated.", getPositionFromMatch(matches[i]));
                  }
                }
                return true;
              }
              function validateNumberAmpersand(xmlData, i) {
                let re = /\d/;
                if (xmlData[i] === "x") {
                  i++;
                  re = /[\da-fA-F]/;
                }
                for (; i < xmlData.length; i++) {
                  if (xmlData[i] === ";")
                    return i;
                  if (!xmlData[i].match(re))
                    break;
                }
                return -1;
              }
              function validateAmpersand(xmlData, i) {
                i++;
                if (xmlData[i] === ";")
                  return -1;
                if (xmlData[i] === "#") {
                  i++;
                  return validateNumberAmpersand(xmlData, i);
                }
                let count = 0;
                for (; i < xmlData.length; i++, count++) {
                  if (xmlData[i].match(/\w/) && count < 20)
                    continue;
                  if (xmlData[i] === ";")
                    break;
                  return -1;
                }
                return i;
              }
              function getErrorObject(code, message, lineNumber) {
                return {
                  err: {
                    code,
                    msg: message,
                    line: lineNumber.line || lineNumber,
                    col: lineNumber.col
                  }
                };
              }
              function validateAttrName(attrName) {
                return util.isName(attrName);
              }
              function validateTagName(tagname) {
                return util.isName(tagname);
              }
              function getLineNumberForPosition(xmlData, index) {
                const lines = xmlData.substring(0, index).split(/\r?\n/);
                return {
                  line: lines.length,
                  // column number is last line's length + 1, because column numbering starts at 1:
                  col: lines[lines.length - 1].length + 1
                };
              }
              function getPositionFromMatch(match) {
                return match.startIndex + match[1].length;
              }
            }
          ),
          /***/
          "./node_modules/fast-xml-parser/src/xmlbuilder/json2xml.js": (
            /*!*****************************************************************!*\
              !*** ./node_modules/fast-xml-parser/src/xmlbuilder/json2xml.js ***!
              \*****************************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              const buildFromOrderedJs = __webpack_require__(
                /*! ./orderedJs2Xml */
                "./node_modules/fast-xml-parser/src/xmlbuilder/orderedJs2Xml.js"
              );
              const getIgnoreAttributesFn = __webpack_require__(
                /*! ../ignoreAttributes */
                "./node_modules/fast-xml-parser/src/ignoreAttributes.js"
              );
              const defaultOptions = {
                attributeNamePrefix: "@_",
                attributesGroupName: false,
                textNodeName: "#text",
                ignoreAttributes: true,
                cdataPropName: false,
                format: false,
                indentBy: "  ",
                suppressEmptyNode: false,
                suppressUnpairedNode: true,
                suppressBooleanAttributes: true,
                tagValueProcessor: function(key, a) {
                  return a;
                },
                attributeValueProcessor: function(attrName, a) {
                  return a;
                },
                preserveOrder: false,
                commentPropName: false,
                unpairedTags: [],
                entities: [
                  { regex: new RegExp("&", "g"), val: "&amp;" },
                  //it must be on top
                  { regex: new RegExp(">", "g"), val: "&gt;" },
                  { regex: new RegExp("<", "g"), val: "&lt;" },
                  { regex: new RegExp("'", "g"), val: "&apos;" },
                  { regex: new RegExp('"', "g"), val: "&quot;" }
                ],
                processEntities: true,
                stopNodes: [],
                // transformTagName: false,
                // transformAttributeName: false,
                oneListGroup: false
              };
              function Builder(options) {
                this.options = Object.assign({}, defaultOptions, options);
                if (this.options.ignoreAttributes === true || this.options.attributesGroupName) {
                  this.isAttribute = function() {
                    return false;
                  };
                } else {
                  this.ignoreAttributesFn = getIgnoreAttributesFn(this.options.ignoreAttributes);
                  this.attrPrefixLen = this.options.attributeNamePrefix.length;
                  this.isAttribute = isAttribute;
                }
                this.processTextOrObjNode = processTextOrObjNode;
                if (this.options.format) {
                  this.indentate = indentate;
                  this.tagEndChar = ">\n";
                  this.newLine = "\n";
                } else {
                  this.indentate = function() {
                    return "";
                  };
                  this.tagEndChar = ">";
                  this.newLine = "";
                }
              }
              Builder.prototype.build = function(jObj) {
                if (this.options.preserveOrder) {
                  return buildFromOrderedJs(jObj, this.options);
                } else {
                  if (Array.isArray(jObj) && this.options.arrayNodeName && this.options.arrayNodeName.length > 1) {
                    jObj = {
                      [this.options.arrayNodeName]: jObj
                    };
                  }
                  return this.j2x(jObj, 0, []).val;
                }
              };
              Builder.prototype.j2x = function(jObj, level, ajPath) {
                let attrStr = "";
                let val2 = "";
                const jPath = ajPath.join(".");
                for (let key in jObj) {
                  if (!Object.prototype.hasOwnProperty.call(jObj, key))
                    continue;
                  if (typeof jObj[key] === "undefined") {
                    if (this.isAttribute(key)) {
                      val2 += "";
                    }
                  } else if (jObj[key] === null) {
                    if (this.isAttribute(key)) {
                      val2 += "";
                    } else if (key[0] === "?") {
                      val2 += this.indentate(level) + "<" + key + "?" + this.tagEndChar;
                    } else {
                      val2 += this.indentate(level) + "<" + key + "/" + this.tagEndChar;
                    }
                  } else if (jObj[key] instanceof Date) {
                    val2 += this.buildTextValNode(jObj[key], key, "", level);
                  } else if (typeof jObj[key] !== "object") {
                    const attr = this.isAttribute(key);
                    if (attr && !this.ignoreAttributesFn(attr, jPath)) {
                      attrStr += this.buildAttrPairStr(attr, "" + jObj[key]);
                    } else if (!attr) {
                      if (key === this.options.textNodeName) {
                        let newval = this.options.tagValueProcessor(key, "" + jObj[key]);
                        val2 += this.replaceEntitiesValue(newval);
                      } else {
                        val2 += this.buildTextValNode(jObj[key], key, "", level);
                      }
                    }
                  } else if (Array.isArray(jObj[key])) {
                    const arrLen = jObj[key].length;
                    let listTagVal = "";
                    let listTagAttr = "";
                    for (let j = 0; j < arrLen; j++) {
                      const item = jObj[key][j];
                      if (typeof item === "undefined") {
                      } else if (item === null) {
                        if (key[0] === "?")
                          val2 += this.indentate(level) + "<" + key + "?" + this.tagEndChar;
                        else
                          val2 += this.indentate(level) + "<" + key + "/" + this.tagEndChar;
                      } else if (typeof item === "object") {
                        if (this.options.oneListGroup) {
                          const result = this.j2x(item, level + 1, ajPath.concat(key));
                          listTagVal += result.val;
                          if (this.options.attributesGroupName && item.hasOwnProperty(this.options.attributesGroupName)) {
                            listTagAttr += result.attrStr;
                          }
                        } else {
                          listTagVal += this.processTextOrObjNode(item, key, level, ajPath);
                        }
                      } else {
                        if (this.options.oneListGroup) {
                          let textValue = this.options.tagValueProcessor(key, item);
                          textValue = this.replaceEntitiesValue(textValue);
                          listTagVal += textValue;
                        } else {
                          listTagVal += this.buildTextValNode(item, key, "", level);
                        }
                      }
                    }
                    if (this.options.oneListGroup) {
                      listTagVal = this.buildObjectNode(listTagVal, key, listTagAttr, level);
                    }
                    val2 += listTagVal;
                  } else {
                    if (this.options.attributesGroupName && key === this.options.attributesGroupName) {
                      const Ks = Object.keys(jObj[key]);
                      const L = Ks.length;
                      for (let j = 0; j < L; j++) {
                        attrStr += this.buildAttrPairStr(Ks[j], "" + jObj[key][Ks[j]]);
                      }
                    } else {
                      val2 += this.processTextOrObjNode(jObj[key], key, level, ajPath);
                    }
                  }
                }
                return { attrStr, val: val2 };
              };
              Builder.prototype.buildAttrPairStr = function(attrName, val2) {
                val2 = this.options.attributeValueProcessor(attrName, "" + val2);
                val2 = this.replaceEntitiesValue(val2);
                if (this.options.suppressBooleanAttributes && val2 === "true") {
                  return " " + attrName;
                } else
                  return " " + attrName + '="' + val2 + '"';
              };
              function processTextOrObjNode(object, key, level, ajPath) {
                const result = this.j2x(object, level + 1, ajPath.concat(key));
                if (object[this.options.textNodeName] !== void 0 && Object.keys(object).length === 1) {
                  return this.buildTextValNode(object[this.options.textNodeName], key, result.attrStr, level);
                } else {
                  return this.buildObjectNode(result.val, key, result.attrStr, level);
                }
              }
              Builder.prototype.buildObjectNode = function(val2, key, attrStr, level) {
                if (val2 === "") {
                  if (key[0] === "?")
                    return this.indentate(level) + "<" + key + attrStr + "?" + this.tagEndChar;
                  else {
                    return this.indentate(level) + "<" + key + attrStr + this.closeTag(key) + this.tagEndChar;
                  }
                } else {
                  let tagEndExp = "</" + key + this.tagEndChar;
                  let piClosingChar = "";
                  if (key[0] === "?") {
                    piClosingChar = "?";
                    tagEndExp = "";
                  }
                  if ((attrStr || attrStr === "") && val2.indexOf("<") === -1) {
                    return this.indentate(level) + "<" + key + attrStr + piClosingChar + ">" + val2 + tagEndExp;
                  } else if (this.options.commentPropName !== false && key === this.options.commentPropName && piClosingChar.length === 0) {
                    return this.indentate(level) + `<!--${val2}-->` + this.newLine;
                  } else {
                    return this.indentate(level) + "<" + key + attrStr + piClosingChar + this.tagEndChar + val2 + this.indentate(level) + tagEndExp;
                  }
                }
              };
              Builder.prototype.closeTag = function(key) {
                let closeTag = "";
                if (this.options.unpairedTags.indexOf(key) !== -1) {
                  if (!this.options.suppressUnpairedNode)
                    closeTag = "/";
                } else if (this.options.suppressEmptyNode) {
                  closeTag = "/";
                } else {
                  closeTag = `></${key}`;
                }
                return closeTag;
              };
              function buildEmptyObjNode(val2, key, attrStr, level) {
                if (val2 !== "") {
                  return this.buildObjectNode(val2, key, attrStr, level);
                } else {
                  if (key[0] === "?")
                    return this.indentate(level) + "<" + key + attrStr + "?" + this.tagEndChar;
                  else {
                    return this.indentate(level) + "<" + key + attrStr + "/" + this.tagEndChar;
                  }
                }
              }
              Builder.prototype.buildTextValNode = function(val2, key, attrStr, level) {
                if (this.options.cdataPropName !== false && key === this.options.cdataPropName) {
                  return this.indentate(level) + `<![CDATA[${val2}]]>` + this.newLine;
                } else if (this.options.commentPropName !== false && key === this.options.commentPropName) {
                  return this.indentate(level) + `<!--${val2}-->` + this.newLine;
                } else if (key[0] === "?") {
                  return this.indentate(level) + "<" + key + attrStr + "?" + this.tagEndChar;
                } else {
                  let textValue = this.options.tagValueProcessor(key, val2);
                  textValue = this.replaceEntitiesValue(textValue);
                  if (textValue === "") {
                    return this.indentate(level) + "<" + key + attrStr + this.closeTag(key) + this.tagEndChar;
                  } else {
                    return this.indentate(level) + "<" + key + attrStr + ">" + textValue + "</" + key + this.tagEndChar;
                  }
                }
              };
              Builder.prototype.replaceEntitiesValue = function(textValue) {
                if (textValue && textValue.length > 0 && this.options.processEntities) {
                  for (let i = 0; i < this.options.entities.length; i++) {
                    const entity = this.options.entities[i];
                    textValue = textValue.replace(entity.regex, entity.val);
                  }
                }
                return textValue;
              };
              function indentate(level) {
                return this.options.indentBy.repeat(level);
              }
              function isAttribute(name) {
                if (name.startsWith(this.options.attributeNamePrefix) && name !== this.options.textNodeName) {
                  return name.substr(this.attrPrefixLen);
                } else {
                  return false;
                }
              }
              module2.exports = Builder;
            }
          ),
          /***/
          "./node_modules/fast-xml-parser/src/xmlbuilder/orderedJs2Xml.js": (
            /*!**********************************************************************!*\
              !*** ./node_modules/fast-xml-parser/src/xmlbuilder/orderedJs2Xml.js ***!
              \**********************************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2) {
              const EOL = "\n";
              function toXml(jArray, options) {
                let indentation = "";
                if (options.format && options.indentBy.length > 0) {
                  indentation = EOL;
                }
                return arrToStr(jArray, options, "", indentation);
              }
              function arrToStr(arr, options, jPath, indentation) {
                let xmlStr = "";
                let isPreviousElementTag = false;
                for (let i = 0; i < arr.length; i++) {
                  const tagObj = arr[i];
                  const tagName = propName(tagObj);
                  if (tagName === void 0)
                    continue;
                  let newJPath = "";
                  if (jPath.length === 0)
                    newJPath = tagName;
                  else
                    newJPath = `${jPath}.${tagName}`;
                  if (tagName === options.textNodeName) {
                    let tagText = tagObj[tagName];
                    if (!isStopNode(newJPath, options)) {
                      tagText = options.tagValueProcessor(tagName, tagText);
                      tagText = replaceEntitiesValue(tagText, options);
                    }
                    if (isPreviousElementTag) {
                      xmlStr += indentation;
                    }
                    xmlStr += tagText;
                    isPreviousElementTag = false;
                    continue;
                  } else if (tagName === options.cdataPropName) {
                    if (isPreviousElementTag) {
                      xmlStr += indentation;
                    }
                    xmlStr += `<![CDATA[${tagObj[tagName][0][options.textNodeName]}]]>`;
                    isPreviousElementTag = false;
                    continue;
                  } else if (tagName === options.commentPropName) {
                    xmlStr += indentation + `<!--${tagObj[tagName][0][options.textNodeName]}-->`;
                    isPreviousElementTag = true;
                    continue;
                  } else if (tagName[0] === "?") {
                    const attStr2 = attr_to_str(tagObj[":@"], options);
                    const tempInd = tagName === "?xml" ? "" : indentation;
                    let piTextNodeName = tagObj[tagName][0][options.textNodeName];
                    piTextNodeName = piTextNodeName.length !== 0 ? " " + piTextNodeName : "";
                    xmlStr += tempInd + `<${tagName}${piTextNodeName}${attStr2}?>`;
                    isPreviousElementTag = true;
                    continue;
                  }
                  let newIdentation = indentation;
                  if (newIdentation !== "") {
                    newIdentation += options.indentBy;
                  }
                  const attStr = attr_to_str(tagObj[":@"], options);
                  const tagStart = indentation + `<${tagName}${attStr}`;
                  const tagValue = arrToStr(tagObj[tagName], options, newJPath, newIdentation);
                  if (options.unpairedTags.indexOf(tagName) !== -1) {
                    if (options.suppressUnpairedNode)
                      xmlStr += tagStart + ">";
                    else
                      xmlStr += tagStart + "/>";
                  } else if ((!tagValue || tagValue.length === 0) && options.suppressEmptyNode) {
                    xmlStr += tagStart + "/>";
                  } else if (tagValue && tagValue.endsWith(">")) {
                    xmlStr += tagStart + `>${tagValue}${indentation}</${tagName}>`;
                  } else {
                    xmlStr += tagStart + ">";
                    if (tagValue && indentation !== "" && (tagValue.includes("/>") || tagValue.includes("</"))) {
                      xmlStr += indentation + options.indentBy + tagValue + indentation;
                    } else {
                      xmlStr += tagValue;
                    }
                    xmlStr += `</${tagName}>`;
                  }
                  isPreviousElementTag = true;
                }
                return xmlStr;
              }
              function propName(obj) {
                const keys = Object.keys(obj);
                for (let i = 0; i < keys.length; i++) {
                  const key = keys[i];
                  if (!obj.hasOwnProperty(key))
                    continue;
                  if (key !== ":@")
                    return key;
                }
              }
              function attr_to_str(attrMap, options) {
                let attrStr = "";
                if (attrMap && !options.ignoreAttributes) {
                  for (let attr in attrMap) {
                    if (!attrMap.hasOwnProperty(attr))
                      continue;
                    let attrVal = options.attributeValueProcessor(attr, attrMap[attr]);
                    attrVal = replaceEntitiesValue(attrVal, options);
                    if (attrVal === true && options.suppressBooleanAttributes) {
                      attrStr += ` ${attr.substr(options.attributeNamePrefix.length)}`;
                    } else {
                      attrStr += ` ${attr.substr(options.attributeNamePrefix.length)}="${attrVal}"`;
                    }
                  }
                }
                return attrStr;
              }
              function isStopNode(jPath, options) {
                jPath = jPath.substr(0, jPath.length - options.textNodeName.length - 1);
                let tagName = jPath.substr(jPath.lastIndexOf(".") + 1);
                for (let index in options.stopNodes) {
                  if (options.stopNodes[index] === jPath || options.stopNodes[index] === "*." + tagName)
                    return true;
                }
                return false;
              }
              function replaceEntitiesValue(textValue, options) {
                if (textValue && textValue.length > 0 && options.processEntities) {
                  for (let i = 0; i < options.entities.length; i++) {
                    const entity = options.entities[i];
                    textValue = textValue.replace(entity.regex, entity.val);
                  }
                }
                return textValue;
              }
              module2.exports = toXml;
            }
          ),
          /***/
          "./node_modules/fast-xml-parser/src/xmlparser/DocTypeReader.js": (
            /*!*********************************************************************!*\
              !*** ./node_modules/fast-xml-parser/src/xmlparser/DocTypeReader.js ***!
              \*********************************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              const util = __webpack_require__(
                /*! ../util */
                "./node_modules/fast-xml-parser/src/util.js"
              );
              function readDocType(xmlData, i) {
                const entities = {};
                if (xmlData[i + 3] === "O" && xmlData[i + 4] === "C" && xmlData[i + 5] === "T" && xmlData[i + 6] === "Y" && xmlData[i + 7] === "P" && xmlData[i + 8] === "E") {
                  i = i + 9;
                  let angleBracketsCount = 1;
                  let hasBody = false, comment = false;
                  let exp = "";
                  for (; i < xmlData.length; i++) {
                    if (xmlData[i] === "<" && !comment) {
                      if (hasBody && isEntity(xmlData, i)) {
                        i += 7;
                        [entityName, val, i] = readEntityExp(xmlData, i + 1);
                        if (val.indexOf("&") === -1)
                          entities[validateEntityName(entityName)] = {
                            regx: RegExp(`&${entityName};`, "g"),
                            val
                          };
                      } else if (hasBody && isElement(xmlData, i))
                        i += 8;
                      else if (hasBody && isAttlist(xmlData, i))
                        i += 8;
                      else if (hasBody && isNotation(xmlData, i))
                        i += 9;
                      else if (isComment)
                        comment = true;
                      else
                        throw new Error("Invalid DOCTYPE");
                      angleBracketsCount++;
                      exp = "";
                    } else if (xmlData[i] === ">") {
                      if (comment) {
                        if (xmlData[i - 1] === "-" && xmlData[i - 2] === "-") {
                          comment = false;
                          angleBracketsCount--;
                        }
                      } else {
                        angleBracketsCount--;
                      }
                      if (angleBracketsCount === 0) {
                        break;
                      }
                    } else if (xmlData[i] === "[") {
                      hasBody = true;
                    } else {
                      exp += xmlData[i];
                    }
                  }
                  if (angleBracketsCount !== 0) {
                    throw new Error(`Unclosed DOCTYPE`);
                  }
                } else {
                  throw new Error(`Invalid Tag instead of DOCTYPE`);
                }
                return { entities, i };
              }
              function readEntityExp(xmlData, i) {
                let entityName2 = "";
                for (; i < xmlData.length && (xmlData[i] !== "'" && xmlData[i] !== '"'); i++) {
                  entityName2 += xmlData[i];
                }
                entityName2 = entityName2.trim();
                if (entityName2.indexOf(" ") !== -1)
                  throw new Error("External entites are not supported");
                const startChar = xmlData[i++];
                let val2 = "";
                for (; i < xmlData.length && xmlData[i] !== startChar; i++) {
                  val2 += xmlData[i];
                }
                return [entityName2, val2, i];
              }
              function isComment(xmlData, i) {
                if (xmlData[i + 1] === "!" && xmlData[i + 2] === "-" && xmlData[i + 3] === "-")
                  return true;
                return false;
              }
              function isEntity(xmlData, i) {
                if (xmlData[i + 1] === "!" && xmlData[i + 2] === "E" && xmlData[i + 3] === "N" && xmlData[i + 4] === "T" && xmlData[i + 5] === "I" && xmlData[i + 6] === "T" && xmlData[i + 7] === "Y")
                  return true;
                return false;
              }
              function isElement(xmlData, i) {
                if (xmlData[i + 1] === "!" && xmlData[i + 2] === "E" && xmlData[i + 3] === "L" && xmlData[i + 4] === "E" && xmlData[i + 5] === "M" && xmlData[i + 6] === "E" && xmlData[i + 7] === "N" && xmlData[i + 8] === "T")
                  return true;
                return false;
              }
              function isAttlist(xmlData, i) {
                if (xmlData[i + 1] === "!" && xmlData[i + 2] === "A" && xmlData[i + 3] === "T" && xmlData[i + 4] === "T" && xmlData[i + 5] === "L" && xmlData[i + 6] === "I" && xmlData[i + 7] === "S" && xmlData[i + 8] === "T")
                  return true;
                return false;
              }
              function isNotation(xmlData, i) {
                if (xmlData[i + 1] === "!" && xmlData[i + 2] === "N" && xmlData[i + 3] === "O" && xmlData[i + 4] === "T" && xmlData[i + 5] === "A" && xmlData[i + 6] === "T" && xmlData[i + 7] === "I" && xmlData[i + 8] === "O" && xmlData[i + 9] === "N")
                  return true;
                return false;
              }
              function validateEntityName(name) {
                if (util.isName(name))
                  return name;
                else
                  throw new Error(`Invalid entity name ${name}`);
              }
              module2.exports = readDocType;
            }
          ),
          /***/
          "./node_modules/fast-xml-parser/src/xmlparser/OptionsBuilder.js": (
            /*!**********************************************************************!*\
              !*** ./node_modules/fast-xml-parser/src/xmlparser/OptionsBuilder.js ***!
              \**********************************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2) {
              const defaultOptions = {
                preserveOrder: false,
                attributeNamePrefix: "@_",
                attributesGroupName: false,
                textNodeName: "#text",
                ignoreAttributes: true,
                removeNSPrefix: false,
                // remove NS from tag name or attribute name if true
                allowBooleanAttributes: false,
                //a tag can have attributes without any value
                //ignoreRootElement : false,
                parseTagValue: true,
                parseAttributeValue: false,
                trimValues: true,
                //Trim string values of tag and attributes
                cdataPropName: false,
                numberParseOptions: {
                  hex: true,
                  leadingZeros: true,
                  eNotation: true
                },
                tagValueProcessor: function(tagName, val2) {
                  return val2;
                },
                attributeValueProcessor: function(attrName, val2) {
                  return val2;
                },
                stopNodes: [],
                //nested tags will not be parsed even for errors
                alwaysCreateTextNode: false,
                isArray: () => false,
                commentPropName: false,
                unpairedTags: [],
                processEntities: true,
                htmlEntities: false,
                ignoreDeclaration: false,
                ignorePiTags: false,
                transformTagName: false,
                transformAttributeName: false,
                updateTag: function(tagName, jPath, attrs) {
                  return tagName;
                }
                // skipEmptyListItem: false
              };
              const buildOptions = function(options) {
                return Object.assign({}, defaultOptions, options);
              };
              exports2.buildOptions = buildOptions;
              exports2.defaultOptions = defaultOptions;
            }
          ),
          /***/
          "./node_modules/fast-xml-parser/src/xmlparser/OrderedObjParser.js": (
            /*!************************************************************************!*\
              !*** ./node_modules/fast-xml-parser/src/xmlparser/OrderedObjParser.js ***!
              \************************************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              const util = __webpack_require__(
                /*! ../util */
                "./node_modules/fast-xml-parser/src/util.js"
              );
              const xmlNode = __webpack_require__(
                /*! ./xmlNode */
                "./node_modules/fast-xml-parser/src/xmlparser/xmlNode.js"
              );
              const readDocType = __webpack_require__(
                /*! ./DocTypeReader */
                "./node_modules/fast-xml-parser/src/xmlparser/DocTypeReader.js"
              );
              const toNumber = __webpack_require__(
                /*! strnum */
                "./node_modules/strnum/strnum.js"
              );
              const getIgnoreAttributesFn = __webpack_require__(
                /*! ../ignoreAttributes */
                "./node_modules/fast-xml-parser/src/ignoreAttributes.js"
              );
              class OrderedObjParser {
                constructor(options) {
                  this.options = options;
                  this.currentNode = null;
                  this.tagsNodeStack = [];
                  this.docTypeEntities = {};
                  this.lastEntities = {
                    "apos": { regex: /&(apos|#39|#x27);/g, val: "'" },
                    "gt": { regex: /&(gt|#62|#x3E);/g, val: ">" },
                    "lt": { regex: /&(lt|#60|#x3C);/g, val: "<" },
                    "quot": { regex: /&(quot|#34|#x22);/g, val: '"' }
                  };
                  this.ampEntity = { regex: /&(amp|#38|#x26);/g, val: "&" };
                  this.htmlEntities = {
                    "space": { regex: /&(nbsp|#160);/g, val: " " },
                    // "lt" : { regex: /&(lt|#60);/g, val: "<" },
                    // "gt" : { regex: /&(gt|#62);/g, val: ">" },
                    // "amp" : { regex: /&(amp|#38);/g, val: "&" },
                    // "quot" : { regex: /&(quot|#34);/g, val: "\"" },
                    // "apos" : { regex: /&(apos|#39);/g, val: "'" },
                    "cent": { regex: /&(cent|#162);/g, val: "¢" },
                    "pound": { regex: /&(pound|#163);/g, val: "£" },
                    "yen": { regex: /&(yen|#165);/g, val: "¥" },
                    "euro": { regex: /&(euro|#8364);/g, val: "€" },
                    "copyright": { regex: /&(copy|#169);/g, val: "©" },
                    "reg": { regex: /&(reg|#174);/g, val: "®" },
                    "inr": { regex: /&(inr|#8377);/g, val: "₹" },
                    "num_dec": { regex: /&#([0-9]{1,7});/g, val: (_, str) => String.fromCharCode(Number.parseInt(str, 10)) },
                    "num_hex": { regex: /&#x([0-9a-fA-F]{1,6});/g, val: (_, str) => String.fromCharCode(Number.parseInt(str, 16)) }
                  };
                  this.addExternalEntities = addExternalEntities;
                  this.parseXml = parseXml;
                  this.parseTextData = parseTextData;
                  this.resolveNameSpace = resolveNameSpace;
                  this.buildAttributesMap = buildAttributesMap;
                  this.isItStopNode = isItStopNode;
                  this.replaceEntitiesValue = replaceEntitiesValue;
                  this.readStopNodeData = readStopNodeData;
                  this.saveTextToParentTag = saveTextToParentTag;
                  this.addChild = addChild;
                  this.ignoreAttributesFn = getIgnoreAttributesFn(this.options.ignoreAttributes);
                }
              }
              function addExternalEntities(externalEntities) {
                const entKeys = Object.keys(externalEntities);
                for (let i = 0; i < entKeys.length; i++) {
                  const ent = entKeys[i];
                  this.lastEntities[ent] = {
                    regex: new RegExp("&" + ent + ";", "g"),
                    val: externalEntities[ent]
                  };
                }
              }
              function parseTextData(val2, tagName, jPath, dontTrim, hasAttributes, isLeafNode, escapeEntities) {
                if (val2 !== void 0) {
                  if (this.options.trimValues && !dontTrim) {
                    val2 = val2.trim();
                  }
                  if (val2.length > 0) {
                    if (!escapeEntities)
                      val2 = this.replaceEntitiesValue(val2);
                    const newval = this.options.tagValueProcessor(tagName, val2, jPath, hasAttributes, isLeafNode);
                    if (newval === null || newval === void 0) {
                      return val2;
                    } else if (typeof newval !== typeof val2 || newval !== val2) {
                      return newval;
                    } else if (this.options.trimValues) {
                      return parseValue(val2, this.options.parseTagValue, this.options.numberParseOptions);
                    } else {
                      const trimmedVal = val2.trim();
                      if (trimmedVal === val2) {
                        return parseValue(val2, this.options.parseTagValue, this.options.numberParseOptions);
                      } else {
                        return val2;
                      }
                    }
                  }
                }
              }
              function resolveNameSpace(tagname) {
                if (this.options.removeNSPrefix) {
                  const tags = tagname.split(":");
                  const prefix = tagname.charAt(0) === "/" ? "/" : "";
                  if (tags[0] === "xmlns") {
                    return "";
                  }
                  if (tags.length === 2) {
                    tagname = prefix + tags[1];
                  }
                }
                return tagname;
              }
              const attrsRegx = new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`, "gm");
              function buildAttributesMap(attrStr, jPath, tagName) {
                if (this.options.ignoreAttributes !== true && typeof attrStr === "string") {
                  const matches = util.getAllMatches(attrStr, attrsRegx);
                  const len = matches.length;
                  const attrs = {};
                  for (let i = 0; i < len; i++) {
                    const attrName = this.resolveNameSpace(matches[i][1]);
                    if (this.ignoreAttributesFn(attrName, jPath)) {
                      continue;
                    }
                    let oldVal = matches[i][4];
                    let aName = this.options.attributeNamePrefix + attrName;
                    if (attrName.length) {
                      if (this.options.transformAttributeName) {
                        aName = this.options.transformAttributeName(aName);
                      }
                      if (aName === "__proto__")
                        aName = "#__proto__";
                      if (oldVal !== void 0) {
                        if (this.options.trimValues) {
                          oldVal = oldVal.trim();
                        }
                        oldVal = this.replaceEntitiesValue(oldVal);
                        const newVal = this.options.attributeValueProcessor(attrName, oldVal, jPath);
                        if (newVal === null || newVal === void 0) {
                          attrs[aName] = oldVal;
                        } else if (typeof newVal !== typeof oldVal || newVal !== oldVal) {
                          attrs[aName] = newVal;
                        } else {
                          attrs[aName] = parseValue(
                            oldVal,
                            this.options.parseAttributeValue,
                            this.options.numberParseOptions
                          );
                        }
                      } else if (this.options.allowBooleanAttributes) {
                        attrs[aName] = true;
                      }
                    }
                  }
                  if (!Object.keys(attrs).length) {
                    return;
                  }
                  if (this.options.attributesGroupName) {
                    const attrCollection = {};
                    attrCollection[this.options.attributesGroupName] = attrs;
                    return attrCollection;
                  }
                  return attrs;
                }
              }
              const parseXml = function(xmlData) {
                xmlData = xmlData.replace(/\r\n?/g, "\n");
                const xmlObj = new xmlNode("!xml");
                let currentNode = xmlObj;
                let textData = "";
                let jPath = "";
                for (let i = 0; i < xmlData.length; i++) {
                  const ch = xmlData[i];
                  if (ch === "<") {
                    if (xmlData[i + 1] === "/") {
                      const closeIndex = findClosingIndex(xmlData, ">", i, "Closing Tag is not closed.");
                      let tagName = xmlData.substring(i + 2, closeIndex).trim();
                      if (this.options.removeNSPrefix) {
                        const colonIndex = tagName.indexOf(":");
                        if (colonIndex !== -1) {
                          tagName = tagName.substr(colonIndex + 1);
                        }
                      }
                      if (this.options.transformTagName) {
                        tagName = this.options.transformTagName(tagName);
                      }
                      if (currentNode) {
                        textData = this.saveTextToParentTag(textData, currentNode, jPath);
                      }
                      const lastTagName = jPath.substring(jPath.lastIndexOf(".") + 1);
                      if (tagName && this.options.unpairedTags.indexOf(tagName) !== -1) {
                        throw new Error(`Unpaired tag can not be used as closing tag: </${tagName}>`);
                      }
                      let propIndex = 0;
                      if (lastTagName && this.options.unpairedTags.indexOf(lastTagName) !== -1) {
                        propIndex = jPath.lastIndexOf(".", jPath.lastIndexOf(".") - 1);
                        this.tagsNodeStack.pop();
                      } else {
                        propIndex = jPath.lastIndexOf(".");
                      }
                      jPath = jPath.substring(0, propIndex);
                      currentNode = this.tagsNodeStack.pop();
                      textData = "";
                      i = closeIndex;
                    } else if (xmlData[i + 1] === "?") {
                      let tagData = readTagExp(xmlData, i, false, "?>");
                      if (!tagData)
                        throw new Error("Pi Tag is not closed.");
                      textData = this.saveTextToParentTag(textData, currentNode, jPath);
                      if (this.options.ignoreDeclaration && tagData.tagName === "?xml" || this.options.ignorePiTags) {
                      } else {
                        const childNode = new xmlNode(tagData.tagName);
                        childNode.add(this.options.textNodeName, "");
                        if (tagData.tagName !== tagData.tagExp && tagData.attrExpPresent) {
                          childNode[":@"] = this.buildAttributesMap(tagData.tagExp, jPath, tagData.tagName);
                        }
                        this.addChild(currentNode, childNode, jPath);
                      }
                      i = tagData.closeIndex + 1;
                    } else if (xmlData.substr(i + 1, 3) === "!--") {
                      const endIndex = findClosingIndex(xmlData, "-->", i + 4, "Comment is not closed.");
                      if (this.options.commentPropName) {
                        const comment = xmlData.substring(i + 4, endIndex - 2);
                        textData = this.saveTextToParentTag(textData, currentNode, jPath);
                        currentNode.add(this.options.commentPropName, [{ [this.options.textNodeName]: comment }]);
                      }
                      i = endIndex;
                    } else if (xmlData.substr(i + 1, 2) === "!D") {
                      const result = readDocType(xmlData, i);
                      this.docTypeEntities = result.entities;
                      i = result.i;
                    } else if (xmlData.substr(i + 1, 2) === "![") {
                      const closeIndex = findClosingIndex(xmlData, "]]>", i, "CDATA is not closed.") - 2;
                      const tagExp = xmlData.substring(i + 9, closeIndex);
                      textData = this.saveTextToParentTag(textData, currentNode, jPath);
                      let val2 = this.parseTextData(tagExp, currentNode.tagname, jPath, true, false, true, true);
                      if (val2 == void 0)
                        val2 = "";
                      if (this.options.cdataPropName) {
                        currentNode.add(this.options.cdataPropName, [{ [this.options.textNodeName]: tagExp }]);
                      } else {
                        currentNode.add(this.options.textNodeName, val2);
                      }
                      i = closeIndex + 2;
                    } else {
                      let result = readTagExp(xmlData, i, this.options.removeNSPrefix);
                      let tagName = result.tagName;
                      const rawTagName = result.rawTagName;
                      let tagExp = result.tagExp;
                      let attrExpPresent = result.attrExpPresent;
                      let closeIndex = result.closeIndex;
                      if (this.options.transformTagName) {
                        tagName = this.options.transformTagName(tagName);
                      }
                      if (currentNode && textData) {
                        if (currentNode.tagname !== "!xml") {
                          textData = this.saveTextToParentTag(textData, currentNode, jPath, false);
                        }
                      }
                      const lastTag = currentNode;
                      if (lastTag && this.options.unpairedTags.indexOf(lastTag.tagname) !== -1) {
                        currentNode = this.tagsNodeStack.pop();
                        jPath = jPath.substring(0, jPath.lastIndexOf("."));
                      }
                      if (tagName !== xmlObj.tagname) {
                        jPath += jPath ? "." + tagName : tagName;
                      }
                      if (this.isItStopNode(this.options.stopNodes, jPath, tagName)) {
                        let tagContent = "";
                        if (tagExp.length > 0 && tagExp.lastIndexOf("/") === tagExp.length - 1) {
                          if (tagName[tagName.length - 1] === "/") {
                            tagName = tagName.substr(0, tagName.length - 1);
                            jPath = jPath.substr(0, jPath.length - 1);
                            tagExp = tagName;
                          } else {
                            tagExp = tagExp.substr(0, tagExp.length - 1);
                          }
                          i = result.closeIndex;
                        } else if (this.options.unpairedTags.indexOf(tagName) !== -1) {
                          i = result.closeIndex;
                        } else {
                          const result2 = this.readStopNodeData(xmlData, rawTagName, closeIndex + 1);
                          if (!result2)
                            throw new Error(`Unexpected end of ${rawTagName}`);
                          i = result2.i;
                          tagContent = result2.tagContent;
                        }
                        const childNode = new xmlNode(tagName);
                        if (tagName !== tagExp && attrExpPresent) {
                          childNode[":@"] = this.buildAttributesMap(tagExp, jPath, tagName);
                        }
                        if (tagContent) {
                          tagContent = this.parseTextData(tagContent, tagName, jPath, true, attrExpPresent, true, true);
                        }
                        jPath = jPath.substr(0, jPath.lastIndexOf("."));
                        childNode.add(this.options.textNodeName, tagContent);
                        this.addChild(currentNode, childNode, jPath);
                      } else {
                        if (tagExp.length > 0 && tagExp.lastIndexOf("/") === tagExp.length - 1) {
                          if (tagName[tagName.length - 1] === "/") {
                            tagName = tagName.substr(0, tagName.length - 1);
                            jPath = jPath.substr(0, jPath.length - 1);
                            tagExp = tagName;
                          } else {
                            tagExp = tagExp.substr(0, tagExp.length - 1);
                          }
                          if (this.options.transformTagName) {
                            tagName = this.options.transformTagName(tagName);
                          }
                          const childNode = new xmlNode(tagName);
                          if (tagName !== tagExp && attrExpPresent) {
                            childNode[":@"] = this.buildAttributesMap(tagExp, jPath, tagName);
                          }
                          this.addChild(currentNode, childNode, jPath);
                          jPath = jPath.substr(0, jPath.lastIndexOf("."));
                        } else {
                          const childNode = new xmlNode(tagName);
                          this.tagsNodeStack.push(currentNode);
                          if (tagName !== tagExp && attrExpPresent) {
                            childNode[":@"] = this.buildAttributesMap(tagExp, jPath, tagName);
                          }
                          this.addChild(currentNode, childNode, jPath);
                          currentNode = childNode;
                        }
                        textData = "";
                        i = closeIndex;
                      }
                    }
                  } else {
                    textData += xmlData[i];
                  }
                }
                return xmlObj.child;
              };
              function addChild(currentNode, childNode, jPath) {
                const result = this.options.updateTag(childNode.tagname, jPath, childNode[":@"]);
                if (result === false) {
                } else if (typeof result === "string") {
                  childNode.tagname = result;
                  currentNode.addChild(childNode);
                } else {
                  currentNode.addChild(childNode);
                }
              }
              const replaceEntitiesValue = function(val2) {
                if (this.options.processEntities) {
                  for (let entityName2 in this.docTypeEntities) {
                    const entity = this.docTypeEntities[entityName2];
                    val2 = val2.replace(entity.regx, entity.val);
                  }
                  for (let entityName2 in this.lastEntities) {
                    const entity = this.lastEntities[entityName2];
                    val2 = val2.replace(entity.regex, entity.val);
                  }
                  if (this.options.htmlEntities) {
                    for (let entityName2 in this.htmlEntities) {
                      const entity = this.htmlEntities[entityName2];
                      val2 = val2.replace(entity.regex, entity.val);
                    }
                  }
                  val2 = val2.replace(this.ampEntity.regex, this.ampEntity.val);
                }
                return val2;
              };
              function saveTextToParentTag(textData, currentNode, jPath, isLeafNode) {
                if (textData) {
                  if (isLeafNode === void 0)
                    isLeafNode = Object.keys(currentNode.child).length === 0;
                  textData = this.parseTextData(
                    textData,
                    currentNode.tagname,
                    jPath,
                    false,
                    currentNode[":@"] ? Object.keys(currentNode[":@"]).length !== 0 : false,
                    isLeafNode
                  );
                  if (textData !== void 0 && textData !== "")
                    currentNode.add(this.options.textNodeName, textData);
                  textData = "";
                }
                return textData;
              }
              function isItStopNode(stopNodes, jPath, currentTagName) {
                const allNodesExp = "*." + currentTagName;
                for (const stopNodePath in stopNodes) {
                  const stopNodeExp = stopNodes[stopNodePath];
                  if (allNodesExp === stopNodeExp || jPath === stopNodeExp)
                    return true;
                }
                return false;
              }
              function tagExpWithClosingIndex(xmlData, i, closingChar = ">") {
                let attrBoundary;
                let tagExp = "";
                for (let index = i; index < xmlData.length; index++) {
                  let ch = xmlData[index];
                  if (attrBoundary) {
                    if (ch === attrBoundary)
                      attrBoundary = "";
                  } else if (ch === '"' || ch === "'") {
                    attrBoundary = ch;
                  } else if (ch === closingChar[0]) {
                    if (closingChar[1]) {
                      if (xmlData[index + 1] === closingChar[1]) {
                        return {
                          data: tagExp,
                          index
                        };
                      }
                    } else {
                      return {
                        data: tagExp,
                        index
                      };
                    }
                  } else if (ch === "	") {
                    ch = " ";
                  }
                  tagExp += ch;
                }
              }
              function findClosingIndex(xmlData, str, i, errMsg) {
                const closingIndex = xmlData.indexOf(str, i);
                if (closingIndex === -1) {
                  throw new Error(errMsg);
                } else {
                  return closingIndex + str.length - 1;
                }
              }
              function readTagExp(xmlData, i, removeNSPrefix, closingChar = ">") {
                const result = tagExpWithClosingIndex(xmlData, i + 1, closingChar);
                if (!result)
                  return;
                let tagExp = result.data;
                const closeIndex = result.index;
                const separatorIndex = tagExp.search(/\s/);
                let tagName = tagExp;
                let attrExpPresent = true;
                if (separatorIndex !== -1) {
                  tagName = tagExp.substring(0, separatorIndex);
                  tagExp = tagExp.substring(separatorIndex + 1).trimStart();
                }
                const rawTagName = tagName;
                if (removeNSPrefix) {
                  const colonIndex = tagName.indexOf(":");
                  if (colonIndex !== -1) {
                    tagName = tagName.substr(colonIndex + 1);
                    attrExpPresent = tagName !== result.data.substr(colonIndex + 1);
                  }
                }
                return {
                  tagName,
                  tagExp,
                  closeIndex,
                  attrExpPresent,
                  rawTagName
                };
              }
              function readStopNodeData(xmlData, tagName, i) {
                const startIndex = i;
                let openTagCount = 1;
                for (; i < xmlData.length; i++) {
                  if (xmlData[i] === "<") {
                    if (xmlData[i + 1] === "/") {
                      const closeIndex = findClosingIndex(xmlData, ">", i, `${tagName} is not closed`);
                      let closeTagName = xmlData.substring(i + 2, closeIndex).trim();
                      if (closeTagName === tagName) {
                        openTagCount--;
                        if (openTagCount === 0) {
                          return {
                            tagContent: xmlData.substring(startIndex, i),
                            i: closeIndex
                          };
                        }
                      }
                      i = closeIndex;
                    } else if (xmlData[i + 1] === "?") {
                      const closeIndex = findClosingIndex(xmlData, "?>", i + 1, "StopNode is not closed.");
                      i = closeIndex;
                    } else if (xmlData.substr(i + 1, 3) === "!--") {
                      const closeIndex = findClosingIndex(xmlData, "-->", i + 3, "StopNode is not closed.");
                      i = closeIndex;
                    } else if (xmlData.substr(i + 1, 2) === "![") {
                      const closeIndex = findClosingIndex(xmlData, "]]>", i, "StopNode is not closed.") - 2;
                      i = closeIndex;
                    } else {
                      const tagData = readTagExp(xmlData, i, ">");
                      if (tagData) {
                        const openTagName = tagData && tagData.tagName;
                        if (openTagName === tagName && tagData.tagExp[tagData.tagExp.length - 1] !== "/") {
                          openTagCount++;
                        }
                        i = tagData.closeIndex;
                      }
                    }
                  }
                }
              }
              function parseValue(val2, shouldParse, options) {
                if (shouldParse && typeof val2 === "string") {
                  const newval = val2.trim();
                  if (newval === "true")
                    return true;
                  else if (newval === "false")
                    return false;
                  else
                    return toNumber(val2, options);
                } else {
                  if (util.isExist(val2)) {
                    return val2;
                  } else {
                    return "";
                  }
                }
              }
              module2.exports = OrderedObjParser;
            }
          ),
          /***/
          "./node_modules/fast-xml-parser/src/xmlparser/XMLParser.js": (
            /*!*****************************************************************!*\
              !*** ./node_modules/fast-xml-parser/src/xmlparser/XMLParser.js ***!
              \*****************************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              const { buildOptions } = __webpack_require__(
                /*! ./OptionsBuilder */
                "./node_modules/fast-xml-parser/src/xmlparser/OptionsBuilder.js"
              );
              const OrderedObjParser = __webpack_require__(
                /*! ./OrderedObjParser */
                "./node_modules/fast-xml-parser/src/xmlparser/OrderedObjParser.js"
              );
              const { prettify } = __webpack_require__(
                /*! ./node2json */
                "./node_modules/fast-xml-parser/src/xmlparser/node2json.js"
              );
              const validator = __webpack_require__(
                /*! ../validator */
                "./node_modules/fast-xml-parser/src/validator.js"
              );
              class XMLParser {
                constructor(options) {
                  this.externalEntities = {};
                  this.options = buildOptions(options);
                }
                /**
                 * Parse XML dats to JS object 
                 * @param {string|Buffer} xmlData 
                 * @param {boolean|Object} validationOption 
                 */
                parse(xmlData, validationOption) {
                  if (typeof xmlData === "string") {
                  } else if (xmlData.toString) {
                    xmlData = xmlData.toString();
                  } else {
                    throw new Error("XML data is accepted in String or Bytes[] form.");
                  }
                  if (validationOption) {
                    if (validationOption === true)
                      validationOption = {};
                    const result = validator.validate(xmlData, validationOption);
                    if (result !== true) {
                      throw Error(`${result.err.msg}:${result.err.line}:${result.err.col}`);
                    }
                  }
                  const orderedObjParser = new OrderedObjParser(this.options);
                  orderedObjParser.addExternalEntities(this.externalEntities);
                  const orderedResult = orderedObjParser.parseXml(xmlData);
                  if (this.options.preserveOrder || orderedResult === void 0)
                    return orderedResult;
                  else
                    return prettify(orderedResult, this.options);
                }
                /**
                 * Add Entity which is not by default supported by this library
                 * @param {string} key 
                 * @param {string} value 
                 */
                addEntity(key, value) {
                  if (value.indexOf("&") !== -1) {
                    throw new Error("Entity value can't have '&'");
                  } else if (key.indexOf("&") !== -1 || key.indexOf(";") !== -1) {
                    throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");
                  } else if (value === "&") {
                    throw new Error("An entity with value '&' is not permitted");
                  } else {
                    this.externalEntities[key] = value;
                  }
                }
              }
              module2.exports = XMLParser;
            }
          ),
          /***/
          "./node_modules/fast-xml-parser/src/xmlparser/node2json.js": (
            /*!*****************************************************************!*\
              !*** ./node_modules/fast-xml-parser/src/xmlparser/node2json.js ***!
              \*****************************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              function prettify(node, options) {
                return compress(node, options);
              }
              function compress(arr, options, jPath) {
                let text;
                const compressedObj = {};
                for (let i = 0; i < arr.length; i++) {
                  const tagObj = arr[i];
                  const property = propName(tagObj);
                  let newJpath = "";
                  if (jPath === void 0)
                    newJpath = property;
                  else
                    newJpath = jPath + "." + property;
                  if (property === options.textNodeName) {
                    if (text === void 0)
                      text = tagObj[property];
                    else
                      text += "" + tagObj[property];
                  } else if (property === void 0) {
                    continue;
                  } else if (tagObj[property]) {
                    let val2 = compress(tagObj[property], options, newJpath);
                    const isLeaf = isLeafTag(val2, options);
                    if (tagObj[":@"]) {
                      assignAttributes(val2, tagObj[":@"], newJpath, options);
                    } else if (Object.keys(val2).length === 1 && val2[options.textNodeName] !== void 0 && !options.alwaysCreateTextNode) {
                      val2 = val2[options.textNodeName];
                    } else if (Object.keys(val2).length === 0) {
                      if (options.alwaysCreateTextNode)
                        val2[options.textNodeName] = "";
                      else
                        val2 = "";
                    }
                    if (compressedObj[property] !== void 0 && compressedObj.hasOwnProperty(property)) {
                      if (!Array.isArray(compressedObj[property])) {
                        compressedObj[property] = [compressedObj[property]];
                      }
                      compressedObj[property].push(val2);
                    } else {
                      if (options.isArray(property, newJpath, isLeaf)) {
                        compressedObj[property] = [val2];
                      } else {
                        compressedObj[property] = val2;
                      }
                    }
                  }
                }
                if (typeof text === "string") {
                  if (text.length > 0)
                    compressedObj[options.textNodeName] = text;
                } else if (text !== void 0)
                  compressedObj[options.textNodeName] = text;
                return compressedObj;
              }
              function propName(obj) {
                const keys = Object.keys(obj);
                for (let i = 0; i < keys.length; i++) {
                  const key = keys[i];
                  if (key !== ":@")
                    return key;
                }
              }
              function assignAttributes(obj, attrMap, jpath, options) {
                if (attrMap) {
                  const keys = Object.keys(attrMap);
                  const len = keys.length;
                  for (let i = 0; i < len; i++) {
                    const atrrName = keys[i];
                    if (options.isArray(atrrName, jpath + "." + atrrName, true, true)) {
                      obj[atrrName] = [attrMap[atrrName]];
                    } else {
                      obj[atrrName] = attrMap[atrrName];
                    }
                  }
                }
              }
              function isLeafTag(obj, options) {
                const { textNodeName } = options;
                const propCount = Object.keys(obj).length;
                if (propCount === 0) {
                  return true;
                }
                if (propCount === 1 && (obj[textNodeName] || typeof obj[textNodeName] === "boolean" || obj[textNodeName] === 0)) {
                  return true;
                }
                return false;
              }
              exports2.prettify = prettify;
            }
          ),
          /***/
          "./node_modules/fast-xml-parser/src/xmlparser/xmlNode.js": (
            /*!***************************************************************!*\
              !*** ./node_modules/fast-xml-parser/src/xmlparser/xmlNode.js ***!
              \***************************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              class XmlNode {
                constructor(tagname) {
                  this.tagname = tagname;
                  this.child = [];
                  this[":@"] = {};
                }
                add(key, val2) {
                  if (key === "__proto__")
                    key = "#__proto__";
                  this.child.push({ [key]: val2 });
                }
                addChild(node) {
                  if (node.tagname === "__proto__")
                    node.tagname = "#__proto__";
                  if (node[":@"] && Object.keys(node[":@"]).length > 0) {
                    this.child.push({ [node.tagname]: node.child, [":@"]: node[":@"] });
                  } else {
                    this.child.push({ [node.tagname]: node.child });
                  }
                }
              }
              ;
              module2.exports = XmlNode;
            }
          ),
          /***/
          "./node_modules/process/browser.js": (
            /*!*****************************************!*\
              !*** ./node_modules/process/browser.js ***!
              \*****************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2) {
              var process = module2.exports = {};
              var cachedSetTimeout;
              var cachedClearTimeout;
              function defaultSetTimout() {
                throw new Error("setTimeout has not been defined");
              }
              function defaultClearTimeout() {
                throw new Error("clearTimeout has not been defined");
              }
              (function() {
                try {
                  if (typeof setTimeout === "function") {
                    cachedSetTimeout = setTimeout;
                  } else {
                    cachedSetTimeout = defaultSetTimout;
                  }
                } catch (e) {
                  cachedSetTimeout = defaultSetTimout;
                }
                try {
                  if (typeof clearTimeout === "function") {
                    cachedClearTimeout = clearTimeout;
                  } else {
                    cachedClearTimeout = defaultClearTimeout;
                  }
                } catch (e) {
                  cachedClearTimeout = defaultClearTimeout;
                }
              })();
              function runTimeout(fun) {
                if (cachedSetTimeout === setTimeout) {
                  return setTimeout(fun, 0);
                }
                if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
                  cachedSetTimeout = setTimeout;
                  return setTimeout(fun, 0);
                }
                try {
                  return cachedSetTimeout(fun, 0);
                } catch (e) {
                  try {
                    return cachedSetTimeout.call(null, fun, 0);
                  } catch (e2) {
                    return cachedSetTimeout.call(this, fun, 0);
                  }
                }
              }
              function runClearTimeout(marker) {
                if (cachedClearTimeout === clearTimeout) {
                  return clearTimeout(marker);
                }
                if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
                  cachedClearTimeout = clearTimeout;
                  return clearTimeout(marker);
                }
                try {
                  return cachedClearTimeout(marker);
                } catch (e) {
                  try {
                    return cachedClearTimeout.call(null, marker);
                  } catch (e2) {
                    return cachedClearTimeout.call(this, marker);
                  }
                }
              }
              var queue = [];
              var draining = false;
              var currentQueue;
              var queueIndex = -1;
              function cleanUpNextTick() {
                if (!draining || !currentQueue) {
                  return;
                }
                draining = false;
                if (currentQueue.length) {
                  queue = currentQueue.concat(queue);
                } else {
                  queueIndex = -1;
                }
                if (queue.length) {
                  drainQueue();
                }
              }
              function drainQueue() {
                if (draining) {
                  return;
                }
                var timeout = runTimeout(cleanUpNextTick);
                draining = true;
                var len = queue.length;
                while (len) {
                  currentQueue = queue;
                  queue = [];
                  while (++queueIndex < len) {
                    if (currentQueue) {
                      currentQueue[queueIndex].run();
                    }
                  }
                  queueIndex = -1;
                  len = queue.length;
                }
                currentQueue = null;
                draining = false;
                runClearTimeout(timeout);
              }
              process.nextTick = function(fun) {
                var args = new Array(arguments.length - 1);
                if (arguments.length > 1) {
                  for (var i = 1; i < arguments.length; i++) {
                    args[i - 1] = arguments[i];
                  }
                }
                queue.push(new Item(fun, args));
                if (queue.length === 1 && !draining) {
                  runTimeout(drainQueue);
                }
              };
              function Item(fun, array) {
                this.fun = fun;
                this.array = array;
              }
              Item.prototype.run = function() {
                this.fun.apply(null, this.array);
              };
              process.title = "browser";
              process.browser = true;
              process.env = {};
              process.argv = [];
              process.version = "";
              process.versions = {};
              function noop() {
              }
              process.on = noop;
              process.addListener = noop;
              process.once = noop;
              process.off = noop;
              process.removeListener = noop;
              process.removeAllListeners = noop;
              process.emit = noop;
              process.prependListener = noop;
              process.prependOnceListener = noop;
              process.listeners = function(name) {
                return [];
              };
              process.binding = function(name) {
                throw new Error("process.binding is not supported");
              };
              process.cwd = function() {
                return "/";
              };
              process.chdir = function(dir) {
                throw new Error("process.chdir is not supported");
              };
              process.umask = function() {
                return 0;
              };
            }
          ),
          /***/
          "./node_modules/strnum/strnum.js": (
            /*!***************************************!*\
              !*** ./node_modules/strnum/strnum.js ***!
              \***************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2) {
              const hexRegex = /^[-+]?0x[a-fA-F0-9]+$/;
              const numRegex = /^([\-\+])?(0*)(\.[0-9]+([eE]\-?[0-9]+)?|[0-9]+(\.[0-9]+([eE]\-?[0-9]+)?)?)$/;
              if (!Number.parseInt && window.parseInt) {
                Number.parseInt = window.parseInt;
              }
              if (!Number.parseFloat && window.parseFloat) {
                Number.parseFloat = window.parseFloat;
              }
              const consider = {
                hex: true,
                leadingZeros: true,
                decimalPoint: ".",
                eNotation: true
                //skipLike: /regex/
              };
              function toNumber(str, options = {}) {
                options = Object.assign({}, consider, options);
                if (!str || typeof str !== "string")
                  return str;
                let trimmedStr = str.trim();
                if (options.skipLike !== void 0 && options.skipLike.test(trimmedStr))
                  return str;
                else if (options.hex && hexRegex.test(trimmedStr)) {
                  return Number.parseInt(trimmedStr, 16);
                } else {
                  const match = numRegex.exec(trimmedStr);
                  if (match) {
                    const sign = match[1];
                    const leadingZeros = match[2];
                    let numTrimmedByZeros = trimZeros(match[3]);
                    const eNotation = match[4] || match[6];
                    if (!options.leadingZeros && leadingZeros.length > 0 && sign && trimmedStr[2] !== ".")
                      return str;
                    else if (!options.leadingZeros && leadingZeros.length > 0 && !sign && trimmedStr[1] !== ".")
                      return str;
                    else {
                      const num = Number(trimmedStr);
                      const numStr = "" + num;
                      if (numStr.search(/[eE]/) !== -1) {
                        if (options.eNotation)
                          return num;
                        else
                          return str;
                      } else if (eNotation) {
                        if (options.eNotation)
                          return num;
                        else
                          return str;
                      } else if (trimmedStr.indexOf(".") !== -1) {
                        if (numStr === "0" && numTrimmedByZeros === "")
                          return num;
                        else if (numStr === numTrimmedByZeros)
                          return num;
                        else if (sign && numStr === "-" + numTrimmedByZeros)
                          return num;
                        else
                          return str;
                      }
                      if (leadingZeros) {
                        if (numTrimmedByZeros === numStr)
                          return num;
                        else if (sign + numTrimmedByZeros === numStr)
                          return num;
                        else
                          return str;
                      }
                      if (trimmedStr === numStr)
                        return num;
                      else if (trimmedStr === sign + numStr)
                        return num;
                      return str;
                    }
                  } else {
                    return str;
                  }
                }
              }
              function trimZeros(numStr) {
                if (numStr && numStr.indexOf(".") !== -1) {
                  numStr = numStr.replace(/0+$/, "");
                  if (numStr === ".")
                    numStr = "0";
                  else if (numStr[0] === ".")
                    numStr = "0" + numStr;
                  else if (numStr[numStr.length - 1] === ".")
                    numStr = numStr.substr(0, numStr.length - 1);
                  return numStr;
                }
                return numStr;
              }
              module2.exports = toNumber;
            }
          ),
          /***/
          "./node_modules/webpack/buildin/amd-options.js": (
            /*!****************************************!*\
              !*** (webpack)/buildin/amd-options.js ***!
              \****************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2) {
              (function(__webpack_amd_options__) {
                module2.exports = __webpack_amd_options__;
              }).call(this, {});
            }
          ),
          /***/
          "./node_modules/webpack/buildin/module.js": (
            /*!***********************************!*\
              !*** (webpack)/buildin/module.js ***!
              \***********************************/
            /*! no static exports found */
            /***/
            function(module2, exports2) {
              module2.exports = function(module3) {
                if (!module3.webpackPolyfill) {
                  module3.deprecate = function() {
                  };
                  module3.paths = [];
                  if (!module3.children)
                    module3.children = [];
                  Object.defineProperty(module3, "loaded", {
                    enumerable: true,
                    get: function() {
                      return module3.l;
                    }
                  });
                  Object.defineProperty(module3, "id", {
                    enumerable: true,
                    get: function() {
                      return module3.i;
                    }
                  });
                  module3.webpackPolyfill = 1;
                }
                return module3;
              };
            }
          ),
          /***/
          "./package.json": (
            /*!**********************!*\
              !*** ./package.json ***!
              \**********************/
            /*! exports provided: name, version, description, main, types, scripts, repository, keywords, author, license, bugs, homepage, dependencies, devDependencies, default */
            /***/
            function(module2) {
              module2.exports = JSON.parse('{"name":"cos-js-sdk-v5","version":"1.8.7","description":"JavaScript SDK for [腾讯云对象存储](https://cloud.tencent.com/product/cos)","main":"dist/cos-js-sdk-v5.js","types":"index.d.ts","scripts":{"prettier":"prettier --write src demo/demo.js demo/CIDemos/*.js test/test.js server/sts.js lib/request.js index.d.ts","server":"node server/sts.js","dev":"cross-env NODE_ENV=development webpack -w --mode=development","build":"cross-env NODE_ENV=production webpack --mode=production","cos-auth.min.js":"uglifyjs ./demo/common/cos-auth.js -o ./demo/common/cos-auth.min.js -c -m","test":"jest --runInBand --coverage"},"repository":{"type":"git","url":"git+https://github.com/tencentyun/cos-js-sdk-v5.git"},"keywords":[],"author":"carsonxu","license":"ISC","bugs":{"url":"https://github.com/tencentyun/cos-js-sdk-v5/issues"},"homepage":"https://github.com/tencentyun/cos-js-sdk-v5#readme","dependencies":{"fast-xml-parser":"4.5.0"},"devDependencies":{"@babel/core":"7.17.9","@babel/plugin-transform-runtime":"7.18.10","@babel/preset-env":"7.16.11","babel-loader":"8.2.5","body-parser":"^1.18.3","cross-env":"^5.2.0","express":"^4.16.4","jest":"^29.3.1","jest-environment-jsdom":"^29.3.1","prettier":"^3.0.1","qcloud-cos-sts":"^3.0.2","request":"^2.87.0","terser-webpack-plugin":"4.2.3","uglifyjs":"^2.4.11","webpack":"4.46.0","webpack-cli":"4.10.0"}}');
            }
          ),
          /***/
          "./src/advance.js": (
            /*!************************!*\
              !*** ./src/advance.js ***!
              \************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var _typeof = __webpack_require__(
                /*! @babel/runtime/helpers/typeof */
                "./node_modules/@babel/runtime/helpers/typeof.js"
              );
              var session = __webpack_require__(
                /*! ./session */
                "./src/session.js"
              );
              var Async = __webpack_require__(
                /*! ./async */
                "./src/async.js"
              );
              var EventProxy = __webpack_require__(
                /*! ./event */
                "./src/event.js"
              ).EventProxy;
              var util = __webpack_require__(
                /*! ./util */
                "./src/util.js"
              );
              var Tracker = __webpack_require__(
                /*! ./tracker */
                "./src/tracker.js"
              );
              function sliceUploadFile(params, callback) {
                var self2 = this;
                var ep = new EventProxy();
                var TaskId = params.TaskId;
                var Bucket = params.Bucket;
                var Region = params.Region;
                var Key = params.Key;
                var Body = params.Body;
                var ChunkSize = params.ChunkSize || params.SliceSize || self2.options.ChunkSize;
                var AsyncLimit = params.AsyncLimit;
                var StorageClass = params.StorageClass;
                var ServerSideEncryption = params.ServerSideEncryption;
                var FileSize;
                var onProgress;
                var onHashProgress = params.onHashProgress;
                var tracker = params.tracker;
                tracker && tracker.setParams({
                  chunkSize: ChunkSize
                });
                ep.on("error", function(err) {
                  if (!self2._isRunningTask(TaskId))
                    return;
                  if (params.UploadData.UploadId) {
                    session.removeUsing(params.UploadData.UploadId);
                  }
                  err.UploadId = params.UploadData.UploadId || "";
                  return callback(err);
                });
                ep.on("upload_complete", function(UploadCompleteData) {
                  var _UploadCompleteData = util.extend({
                    UploadId: params.UploadData.UploadId || ""
                  }, UploadCompleteData);
                  callback(null, _UploadCompleteData);
                });
                ep.on("upload_slice_complete", function(UploadData) {
                  var metaHeaders = {};
                  util.each(params.Headers, function(val2, k) {
                    var shortKey = k.toLowerCase();
                    if (shortKey.indexOf("x-cos-meta-") === 0 || ["pic-operations", "x-cos-callback", "x-cos-callback-var", "x-cos-return-body"].includes(shortKey)) {
                      metaHeaders[k] = val2;
                    }
                  });
                  uploadSliceComplete.call(self2, {
                    Bucket,
                    Region,
                    Key,
                    UploadId: UploadData.UploadId,
                    SliceList: UploadData.SliceList,
                    Headers: metaHeaders,
                    tracker
                  }, function(err, data) {
                    if (!self2._isRunningTask(TaskId))
                      return;
                    session.removeUsing(UploadData.UploadId);
                    if (err) {
                      onProgress(null, true);
                      return ep.emit("error", err);
                    }
                    session.removeUploadId.call(self2, UploadData.UploadId);
                    onProgress({
                      loaded: FileSize,
                      total: FileSize
                    }, true);
                    ep.emit("upload_complete", data);
                  });
                });
                ep.on("get_upload_data_finish", function(UploadData) {
                  var uuid = session.getFileId(Body, params.ChunkSize, Bucket, Key);
                  uuid && session.saveUploadId.call(self2, uuid, UploadData.UploadId, self2.options.UploadIdCacheLimit);
                  session.setUsing(UploadData.UploadId);
                  onProgress(null, true);
                  uploadSliceList.call(self2, {
                    TaskId,
                    Bucket,
                    Region,
                    Key,
                    Body,
                    FileSize,
                    SliceSize: ChunkSize,
                    AsyncLimit,
                    ServerSideEncryption,
                    UploadData,
                    Headers: params.Headers,
                    onProgress,
                    tracker
                  }, function(err, data) {
                    if (!self2._isRunningTask(TaskId))
                      return;
                    if (err) {
                      onProgress(null, true);
                      return ep.emit("error", err);
                    }
                    ep.emit("upload_slice_complete", data);
                  });
                });
                ep.on("get_file_size_finish", function() {
                  onProgress = util.throttleOnProgress.call(self2, FileSize, params.onProgress);
                  if (params.UploadData.UploadId) {
                    ep.emit("get_upload_data_finish", params.UploadData);
                  } else {
                    var _params = util.extend({
                      TaskId,
                      Bucket,
                      Region,
                      Key,
                      Headers: params.Headers,
                      StorageClass,
                      Body,
                      FileSize,
                      SliceSize: ChunkSize,
                      onHashProgress,
                      tracker
                    }, params);
                    getUploadIdAndPartList.call(self2, _params, function(err, UploadData) {
                      if (!self2._isRunningTask(TaskId))
                        return;
                      if (err)
                        return ep.emit("error", err);
                      params.UploadData.UploadId = UploadData.UploadId;
                      params.UploadData.PartList = UploadData.PartList;
                      ep.emit("get_upload_data_finish", params.UploadData);
                    });
                  }
                });
                FileSize = params.ContentLength;
                delete params.ContentLength;
                !params.Headers && (params.Headers = {});
                util.each(params.Headers, function(item, key) {
                  if (key.toLowerCase() === "content-length") {
                    delete params.Headers[key];
                  }
                });
                (function() {
                  var SIZE = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 1024 * 2, 1024 * 4, 1024 * 5];
                  var AutoChunkSize = 1024 * 1024;
                  for (var i = 0; i < SIZE.length; i++) {
                    AutoChunkSize = SIZE[i] * 1024 * 1024;
                    if (FileSize / AutoChunkSize <= self2.options.MaxPartNumber)
                      break;
                  }
                  params.ChunkSize = params.SliceSize = ChunkSize = Math.max(ChunkSize, AutoChunkSize);
                })();
                if (FileSize === 0) {
                  params.Body = "";
                  params.ContentLength = 0;
                  params.SkipTask = true;
                  self2.putObject(params, callback);
                } else {
                  ep.emit("get_file_size_finish");
                }
              }
              function getUploadIdAndPartList(params, callback) {
                var TaskId = params.TaskId;
                var Bucket = params.Bucket;
                var Region = params.Region;
                var Key = params.Key;
                var StorageClass = params.StorageClass;
                var self2 = this;
                var ETagMap = {};
                var FileSize = params.FileSize;
                var SliceSize = params.SliceSize;
                var SliceCount = Math.ceil(FileSize / SliceSize);
                var FinishSliceCount = 0;
                var FinishSize = 0;
                var onHashProgress = util.throttleOnProgress.call(self2, FileSize, params.onHashProgress);
                var getChunkETag = function getChunkETag2(PartNumber, callback2) {
                  var start = SliceSize * (PartNumber - 1);
                  var end = Math.min(start + SliceSize, FileSize);
                  var ChunkSize = end - start;
                  if (ETagMap[PartNumber]) {
                    callback2(null, {
                      PartNumber,
                      ETag: ETagMap[PartNumber],
                      Size: ChunkSize
                    });
                  } else {
                    util.fileSlice(params.Body, start, end, false, function(chunkItem) {
                      util.getFileMd5(chunkItem, function(err, md5) {
                        if (err)
                          return callback2(util.error(err));
                        var ETag = '"' + md5 + '"';
                        ETagMap[PartNumber] = ETag;
                        FinishSliceCount += 1;
                        FinishSize += ChunkSize;
                        onHashProgress({
                          loaded: FinishSize,
                          total: FileSize
                        });
                        callback2(null, {
                          PartNumber,
                          ETag,
                          Size: ChunkSize
                        });
                      });
                    });
                  }
                };
                var isAvailableUploadList = function isAvailableUploadList2(PartList, callback2) {
                  var PartCount = PartList.length;
                  if (PartCount === 0) {
                    return callback2(null, true);
                  }
                  if (PartCount > SliceCount) {
                    return callback2(null, false);
                  }
                  if (PartCount > 1) {
                    var PartSliceSize = Math.max(PartList[0].Size, PartList[1].Size);
                    if (PartSliceSize !== SliceSize) {
                      return callback2(null, false);
                    }
                  }
                  var next = function next2(index) {
                    if (index < PartCount) {
                      var Part = PartList[index];
                      getChunkETag(Part.PartNumber, function(err, chunk) {
                        if (chunk && chunk.ETag === Part.ETag && chunk.Size === Part.Size) {
                          next2(index + 1);
                        } else {
                          callback2(null, false);
                        }
                      });
                    } else {
                      callback2(null, true);
                    }
                  };
                  next(0);
                };
                var ep = new EventProxy();
                ep.on("error", function(errData) {
                  if (!self2._isRunningTask(TaskId))
                    return;
                  return callback(errData);
                });
                ep.on("upload_id_available", function(UploadData) {
                  var map = {};
                  var list = [];
                  util.each(UploadData.PartList, function(item2) {
                    map[item2.PartNumber] = item2;
                  });
                  for (var PartNumber = 1; PartNumber <= SliceCount; PartNumber++) {
                    var item = map[PartNumber];
                    if (item) {
                      item.PartNumber = PartNumber;
                      item.Uploaded = true;
                    } else {
                      item = {
                        PartNumber,
                        ETag: null,
                        Uploaded: false
                      };
                    }
                    list.push(item);
                  }
                  UploadData.PartList = list;
                  callback(null, UploadData);
                });
                ep.on("no_available_upload_id", function() {
                  if (!self2._isRunningTask(TaskId))
                    return;
                  var _params = util.extend({
                    Bucket,
                    Region,
                    Key,
                    Query: util.clone(params.Query),
                    StorageClass,
                    Body: params.Body,
                    calledBySdk: "sliceUploadFile",
                    tracker: params.tracker
                  }, params);
                  var headers = util.clone(params.Headers);
                  delete headers["x-cos-mime-limit"];
                  _params.Headers = headers;
                  self2.multipartInit(_params, function(err, data) {
                    if (!self2._isRunningTask(TaskId))
                      return;
                    if (err)
                      return ep.emit("error", err);
                    var UploadId = data.UploadId;
                    if (!UploadId) {
                      return callback(util.error(new Error("no such upload id")));
                    }
                    ep.emit("upload_id_available", {
                      UploadId,
                      PartList: []
                    });
                  });
                });
                ep.on("has_and_check_upload_id", function(UploadIdList) {
                  UploadIdList = UploadIdList.reverse();
                  Async.eachLimit(UploadIdList, 1, function(UploadId, asyncCallback) {
                    if (!self2._isRunningTask(TaskId))
                      return;
                    if (session.using[UploadId]) {
                      asyncCallback();
                      return;
                    }
                    wholeMultipartListPart.call(self2, {
                      Bucket,
                      Region,
                      Key,
                      UploadId,
                      tracker: params.tracker
                    }, function(err, PartListData) {
                      if (!self2._isRunningTask(TaskId))
                        return;
                      if (err) {
                        session.removeUsing(UploadId);
                        return ep.emit("error", err);
                      }
                      var PartList = PartListData.PartList;
                      PartList.forEach(function(item) {
                        item.PartNumber *= 1;
                        item.Size *= 1;
                        item.ETag = item.ETag || "";
                      });
                      isAvailableUploadList(PartList, function(err2, isAvailable) {
                        if (!self2._isRunningTask(TaskId))
                          return;
                        if (err2)
                          return ep.emit("error", err2);
                        if (isAvailable) {
                          asyncCallback({
                            UploadId,
                            PartList
                          });
                        } else {
                          asyncCallback();
                        }
                      });
                    });
                  }, function(AvailableUploadData) {
                    if (!self2._isRunningTask(TaskId))
                      return;
                    onHashProgress(null, true);
                    if (AvailableUploadData && AvailableUploadData.UploadId) {
                      ep.emit("upload_id_available", AvailableUploadData);
                    } else {
                      ep.emit("no_available_upload_id");
                    }
                  });
                });
                ep.on("seek_local_avail_upload_id", function(RemoteUploadIdList) {
                  var uuid = session.getFileId(params.Body, params.ChunkSize, Bucket, Key);
                  var LocalUploadIdList = session.getUploadIdList.call(self2, uuid);
                  if (!uuid || !LocalUploadIdList) {
                    ep.emit("has_and_check_upload_id", RemoteUploadIdList);
                    return;
                  }
                  var next = function next2(index) {
                    if (index >= LocalUploadIdList.length) {
                      ep.emit("has_and_check_upload_id", RemoteUploadIdList);
                      return;
                    }
                    var UploadId = LocalUploadIdList[index];
                    if (!util.isInArray(RemoteUploadIdList, UploadId)) {
                      session.removeUploadId.call(self2, UploadId);
                      next2(index + 1);
                      return;
                    }
                    if (session.using[UploadId]) {
                      next2(index + 1);
                      return;
                    }
                    wholeMultipartListPart.call(self2, {
                      Bucket,
                      Region,
                      Key,
                      UploadId,
                      tracker: params.tracker
                    }, function(err, PartListData) {
                      if (!self2._isRunningTask(TaskId))
                        return;
                      if (err) {
                        session.removeUploadId.call(self2, UploadId);
                        next2(index + 1);
                      } else {
                        ep.emit("upload_id_available", {
                          UploadId,
                          PartList: PartListData.PartList
                        });
                      }
                    });
                  };
                  next(0);
                });
                ep.on("get_remote_upload_id_list", function() {
                  wholeMultipartList.call(self2, {
                    Bucket,
                    Region,
                    Key,
                    tracker: params.tracker
                  }, function(err, data) {
                    if (!self2._isRunningTask(TaskId))
                      return;
                    if (err)
                      return ep.emit("error", err);
                    var RemoteUploadIdList = util.filter(data.UploadList, function(item) {
                      return item.Key === Key && (!StorageClass || item.StorageClass.toUpperCase() === StorageClass.toUpperCase());
                    }).reverse().map(function(item) {
                      return item.UploadId || item.UploadID;
                    });
                    if (RemoteUploadIdList.length) {
                      ep.emit("seek_local_avail_upload_id", RemoteUploadIdList);
                    } else {
                      var uuid = session.getFileId(params.Body, params.ChunkSize, Bucket, Key), LocalUploadIdList;
                      if (uuid && (LocalUploadIdList = session.getUploadIdList.call(self2, uuid))) {
                        util.each(LocalUploadIdList, function(UploadId) {
                          session.removeUploadId.call(self2, UploadId);
                        });
                      }
                      ep.emit("no_available_upload_id");
                    }
                  });
                });
                ep.emit("get_remote_upload_id_list");
              }
              function wholeMultipartList(params, callback) {
                var self2 = this;
                var UploadList = [];
                var sendParams = {
                  Bucket: params.Bucket,
                  Region: params.Region,
                  Prefix: params.Key,
                  calledBySdk: params.calledBySdk || "sliceUploadFile",
                  tracker: params.tracker
                };
                var next = function next2() {
                  self2.multipartList(sendParams, function(err, data) {
                    if (err)
                      return callback(err);
                    UploadList.push.apply(UploadList, data.Upload || []);
                    if (data.IsTruncated === "true") {
                      sendParams.KeyMarker = data.NextKeyMarker;
                      sendParams.UploadIdMarker = data.NextUploadIdMarker;
                      next2();
                    } else {
                      callback(null, {
                        UploadList
                      });
                    }
                  });
                };
                next();
              }
              function wholeMultipartListPart(params, callback) {
                var self2 = this;
                var PartList = [];
                var sendParams = {
                  Bucket: params.Bucket,
                  Region: params.Region,
                  Key: params.Key,
                  UploadId: params.UploadId,
                  calledBySdk: "sliceUploadFile",
                  tracker: params.tracker
                };
                var next = function next2() {
                  self2.multipartListPart(sendParams, function(err, data) {
                    if (err)
                      return callback(err);
                    PartList.push.apply(PartList, data.Part || []);
                    if (data.IsTruncated === "true") {
                      sendParams.PartNumberMarker = data.NextPartNumberMarker;
                      next2();
                    } else {
                      callback(null, {
                        PartList
                      });
                    }
                  });
                };
                next();
              }
              function uploadSliceList(params, cb) {
                var self2 = this;
                var TaskId = params.TaskId;
                var Bucket = params.Bucket;
                var Region = params.Region;
                var Key = params.Key;
                var UploadData = params.UploadData;
                var FileSize = params.FileSize;
                var SliceSize = params.SliceSize;
                var ChunkParallel = Math.min(params.AsyncLimit || self2.options.ChunkParallelLimit || 1, 256);
                var Body = params.Body;
                var SliceCount = Math.ceil(FileSize / SliceSize);
                var FinishSize = 0;
                var ServerSideEncryption = params.ServerSideEncryption;
                var Headers = params.Headers;
                var needUploadSlices = util.filter(UploadData.PartList, function(SliceItem) {
                  if (SliceItem["Uploaded"]) {
                    FinishSize += SliceItem["PartNumber"] >= SliceCount ? FileSize % SliceSize || SliceSize : SliceSize;
                  }
                  return !SliceItem["Uploaded"];
                });
                var _onProgress2 = params.onProgress;
                Async.eachLimit(needUploadSlices, ChunkParallel, function(SliceItem, asyncCallback) {
                  if (!self2._isRunningTask(TaskId))
                    return;
                  var PartNumber = SliceItem["PartNumber"];
                  var currentSize = Math.min(FileSize, SliceItem["PartNumber"] * SliceSize) - (SliceItem["PartNumber"] - 1) * SliceSize;
                  var preAddSize = 0;
                  uploadSliceItem.call(self2, {
                    TaskId,
                    Bucket,
                    Region,
                    Key,
                    SliceSize,
                    FileSize,
                    PartNumber,
                    ServerSideEncryption,
                    Body,
                    UploadData,
                    Headers,
                    onProgress: function onProgress(data) {
                      FinishSize += data.loaded - preAddSize;
                      preAddSize = data.loaded;
                      _onProgress2({
                        loaded: FinishSize,
                        total: FileSize
                      });
                    },
                    tracker: params.tracker
                  }, function(err, data) {
                    if (!self2._isRunningTask(TaskId))
                      return;
                    if (!err && !data.ETag)
                      err = 'get ETag error, please add "ETag" to CORS ExposeHeader setting.( 获取ETag失败，请在CORS ExposeHeader设置中添加ETag，请参考文档：https://cloud.tencent.com/document/product/436/13318 )';
                    if (err) {
                      FinishSize -= preAddSize;
                    } else {
                      FinishSize += currentSize - preAddSize;
                      SliceItem.ETag = data.ETag;
                    }
                    _onProgress2({
                      loaded: FinishSize,
                      total: FileSize
                    });
                    asyncCallback(err || null, data);
                  });
                }, function(err) {
                  if (!self2._isRunningTask(TaskId))
                    return;
                  if (err)
                    return cb(err);
                  cb(null, {
                    UploadId: UploadData.UploadId,
                    SliceList: UploadData.PartList
                  });
                });
              }
              function uploadSliceItem(params, callback) {
                var self2 = this;
                var TaskId = params.TaskId;
                var Bucket = params.Bucket;
                var Region = params.Region;
                var Key = params.Key;
                var FileSize = params.FileSize;
                var FileBody = params.Body;
                var PartNumber = params.PartNumber * 1;
                var SliceSize = params.SliceSize;
                var ServerSideEncryption = params.ServerSideEncryption;
                var UploadData = params.UploadData;
                var Headers = params.Headers || {};
                var ChunkRetryTimes = self2.options.ChunkRetryTimes + 1;
                var start = SliceSize * (PartNumber - 1);
                var ContentLength = SliceSize;
                var end = start + SliceSize;
                if (end > FileSize) {
                  end = FileSize;
                  ContentLength = end - start;
                }
                var headersWhiteList = ["x-cos-traffic-limit", "x-cos-mime-limit"];
                var headers = {};
                util.each(Headers, function(v, k) {
                  if (headersWhiteList.indexOf(k) > -1) {
                    headers[k] = v;
                  }
                });
                var PartItem = UploadData.PartList[PartNumber - 1];
                Async.retry(ChunkRetryTimes, function(tryCallback) {
                  if (!self2._isRunningTask(TaskId))
                    return;
                  util.fileSlice(FileBody, start, end, true, function(Body) {
                    self2.multipartUpload({
                      TaskId,
                      Bucket,
                      Region,
                      Key,
                      ContentLength,
                      PartNumber,
                      UploadId: UploadData.UploadId,
                      ServerSideEncryption,
                      Body,
                      Headers: headers,
                      onProgress: params.onProgress,
                      calledBySdk: "sliceUploadFile",
                      tracker: params.tracker
                    }, function(err, data) {
                      if (!self2._isRunningTask(TaskId))
                        return;
                      if (err)
                        return tryCallback(err);
                      PartItem.Uploaded = true;
                      return tryCallback(null, data);
                    });
                  });
                }, function(err, data) {
                  if (!self2._isRunningTask(TaskId))
                    return;
                  return callback(err, data);
                });
              }
              function uploadSliceComplete(params, callback) {
                var Bucket = params.Bucket;
                var Region = params.Region;
                var Key = params.Key;
                var UploadId = params.UploadId;
                var SliceList = params.SliceList;
                var self2 = this;
                var ChunkRetryTimes = this.options.ChunkRetryTimes + 1;
                var Headers = params.Headers;
                var Parts = SliceList.map(function(item) {
                  return {
                    PartNumber: item.PartNumber,
                    ETag: item.ETag
                  };
                });
                Async.retry(ChunkRetryTimes, function(tryCallback) {
                  self2.multipartComplete({
                    Bucket,
                    Region,
                    Key,
                    UploadId,
                    Parts,
                    Headers,
                    calledBySdk: "sliceUploadFile",
                    tracker: params.tracker
                  }, tryCallback);
                }, function(err, data) {
                  callback(err, data);
                });
              }
              function abortUploadTask(params, callback) {
                var Bucket = params.Bucket;
                var Region = params.Region;
                var Key = params.Key;
                var UploadId = params.UploadId;
                var Level = params.Level || "task";
                var AsyncLimit = params.AsyncLimit;
                var self2 = this;
                var ep = new EventProxy();
                ep.on("error", function(errData) {
                  return callback(errData);
                });
                ep.on("get_abort_array", function(AbortArray) {
                  abortUploadTaskArray.call(self2, {
                    Bucket,
                    Region,
                    Key,
                    Headers: params.Headers,
                    AsyncLimit,
                    AbortArray
                  }, callback);
                });
                if (Level === "bucket") {
                  wholeMultipartList.call(self2, {
                    Bucket,
                    Region,
                    calledBySdk: "abortUploadTask"
                  }, function(err, data) {
                    if (err)
                      return callback(err);
                    ep.emit("get_abort_array", data.UploadList || []);
                  });
                } else if (Level === "file") {
                  if (!Key)
                    return callback(util.error(new Error("abort_upload_task_no_key")));
                  wholeMultipartList.call(self2, {
                    Bucket,
                    Region,
                    Key,
                    calledBySdk: "abortUploadTask"
                  }, function(err, data) {
                    if (err)
                      return callback(err);
                    ep.emit("get_abort_array", data.UploadList || []);
                  });
                } else if (Level === "task") {
                  if (!UploadId)
                    return callback(util.error(new Error("abort_upload_task_no_id")));
                  if (!Key)
                    return callback(util.error(new Error("abort_upload_task_no_key")));
                  ep.emit("get_abort_array", [{
                    Key,
                    UploadId
                  }]);
                } else {
                  return callback(util.error(new Error("abort_unknown_level")));
                }
              }
              function abortUploadTaskArray(params, callback) {
                var Bucket = params.Bucket;
                var Region = params.Region;
                var Key = params.Key;
                var AbortArray = params.AbortArray;
                var AsyncLimit = params.AsyncLimit || 1;
                var self2 = this;
                var index = 0;
                var resultList = new Array(AbortArray.length);
                Async.eachLimit(AbortArray, AsyncLimit, function(AbortItem, nextItem) {
                  var eachIndex = index;
                  if (Key && Key !== AbortItem.Key) {
                    resultList[eachIndex] = {
                      error: {
                        KeyNotMatch: true
                      }
                    };
                    nextItem(null);
                    return;
                  }
                  var UploadId = AbortItem.UploadId || AbortItem.UploadID;
                  self2.multipartAbort({
                    Bucket,
                    Region,
                    Key: AbortItem.Key,
                    Headers: params.Headers,
                    UploadId
                  }, function(err) {
                    var task = {
                      Bucket,
                      Region,
                      Key: AbortItem.Key,
                      UploadId
                    };
                    resultList[eachIndex] = {
                      error: err,
                      task
                    };
                    nextItem(null);
                  });
                  index++;
                }, function(err) {
                  if (err)
                    return callback(err);
                  var successList = [];
                  var errorList = [];
                  for (var i = 0, len = resultList.length; i < len; i++) {
                    var item = resultList[i];
                    if (item["task"]) {
                      if (item["error"]) {
                        errorList.push(item["task"]);
                      } else {
                        successList.push(item["task"]);
                      }
                    }
                  }
                  return callback(null, {
                    successList,
                    errorList
                  });
                });
              }
              function uploadFile(params, callback) {
                var self2 = this;
                var SliceSize = params.SliceSize === void 0 ? self2.options.SliceSize : params.SliceSize;
                var taskList = [];
                var Body = params.Body;
                var FileSize = Body.size || Body.length || 0;
                var fileInfo = {
                  TaskId: ""
                };
                if (self2.options.EnableReporter) {
                  var accelerate = self2.options.UseAccelerate || typeof self2.options.Domain === "string" && self2.options.Domain.includes("accelerate.");
                  var realApi = FileSize > SliceSize ? "sliceUploadFile" : "putObject";
                  params.tracker = new Tracker({
                    Beacon: self2.options.BeaconReporter,
                    clsReporter: self2.options.ClsReporter,
                    bucket: params.Bucket,
                    region: params.Region,
                    apiName: "uploadFile",
                    realApi,
                    fileKey: params.Key,
                    fileSize: FileSize,
                    accelerate,
                    deepTracker: self2.options.DeepTracker,
                    customId: self2.options.CustomId,
                    delay: self2.options.TrackerDelay
                  });
                }
                util.each(params, function(v, k) {
                  if (_typeof(v) !== "object" && typeof v !== "function") {
                    fileInfo[k] = v;
                  }
                });
                var _onTaskReady = params.onTaskReady;
                var onTaskReady = function onTaskReady2(tid) {
                  fileInfo.TaskId = tid;
                  _onTaskReady && _onTaskReady(tid);
                };
                params.onTaskReady = onTaskReady;
                var api = FileSize > SliceSize ? "sliceUploadFile" : "putObject";
                var _onFileFinish = params.onFileFinish;
                var onFileFinish = function onFileFinish2(err, data) {
                  params.tracker && params.tracker.report(err, data);
                  _onFileFinish && _onFileFinish(err, data, fileInfo);
                  callback && callback(err, data);
                };
                taskList.push({
                  api,
                  params,
                  callback: onFileFinish
                });
                self2._addTasks(taskList);
              }
              function uploadFiles(params, callback) {
                var self2 = this;
                var SliceSize = params.SliceSize === void 0 ? self2.options.SliceSize : params.SliceSize;
                var TotalSize = 0;
                var TotalFinish = 0;
                var onTotalProgress = util.throttleOnProgress.call(self2, TotalFinish, params.onProgress);
                var unFinishCount = params.files.length;
                var _onTotalFileFinish = params.onFileFinish;
                var resultList = Array(unFinishCount);
                var onTotalFileFinish = function onTotalFileFinish2(err, data, options) {
                  onTotalProgress(null, true);
                  _onTotalFileFinish && _onTotalFileFinish(err, data, options);
                  resultList[options.Index] = {
                    options,
                    error: err,
                    data
                  };
                  if (--unFinishCount <= 0 && callback) {
                    callback(null, {
                      files: resultList
                    });
                  }
                };
                var taskList = [];
                util.each(params.files, function(fileParams, index) {
                  (function() {
                    var Body = fileParams.Body;
                    var FileSize = Body.size || Body.length || 0;
                    var fileInfo = {
                      Index: index,
                      TaskId: ""
                    };
                    if (!self2.options.UseRawKey && fileParams.Key && fileParams.Key.substr(0, 1) === "/") {
                      fileParams.Key = fileParams.Key.substr(1);
                    }
                    TotalSize += FileSize;
                    if (self2.options.EnableReporter) {
                      var accelerate = self2.options.UseAccelerate || typeof self2.options.Domain === "string" && self2.options.Domain.includes("accelerate.");
                      var realApi = FileSize > SliceSize ? "sliceUploadFile" : "putObject";
                      fileParams.tracker = new Tracker({
                        Beacon: self2.options.BeaconReporter,
                        clsReporter: self2.options.ClsReporter,
                        bucket: fileParams.Bucket,
                        region: fileParams.Region,
                        apiName: "uploadFiles",
                        realApi,
                        fileKey: fileParams.Key,
                        fileSize: FileSize,
                        accelerate,
                        deepTracker: self2.options.DeepTracker,
                        customId: self2.options.CustomId,
                        delay: self2.options.TrackerDelay
                      });
                    }
                    util.each(fileParams, function(v, k) {
                      if (_typeof(v) !== "object" && typeof v !== "function") {
                        fileInfo[k] = v;
                      }
                    });
                    var _onTaskReady = fileParams.onTaskReady;
                    var onTaskReady = function onTaskReady2(tid) {
                      fileInfo.TaskId = tid;
                      _onTaskReady && _onTaskReady(tid);
                    };
                    fileParams.onTaskReady = onTaskReady;
                    var PreAddSize = 0;
                    var _onProgress = fileParams.onProgress;
                    var onProgress = function onProgress2(info) {
                      TotalFinish = TotalFinish - PreAddSize + info.loaded;
                      PreAddSize = info.loaded;
                      _onProgress && _onProgress(info);
                      onTotalProgress({
                        loaded: TotalFinish,
                        total: TotalSize
                      });
                    };
                    fileParams.onProgress = onProgress;
                    var api = FileSize > SliceSize ? "sliceUploadFile" : "putObject";
                    var _onFileFinish = fileParams.onFileFinish;
                    var onFileFinish = function onFileFinish2(err, data) {
                      fileParams.tracker && fileParams.tracker.report(err, data);
                      _onFileFinish && _onFileFinish(err, data);
                      onTotalFileFinish && onTotalFileFinish(err, data, fileInfo);
                    };
                    taskList.push({
                      api,
                      params: fileParams,
                      callback: onFileFinish
                    });
                  })();
                });
                self2._addTasks(taskList);
              }
              function sliceCopyFile(params, callback) {
                var ep = new EventProxy();
                var self2 = this;
                var Bucket = params.Bucket;
                var Region = params.Region;
                var Key = params.Key;
                var CopySource = params.CopySource;
                var m = util.getSourceParams.call(this, CopySource);
                if (!m) {
                  callback(util.error(new Error("CopySource format error")));
                  return;
                }
                var SourceBucket = m.Bucket;
                var SourceRegion = m.Region;
                var SourceKey = decodeURIComponent(m.Key);
                var CopySliceSize = params.CopySliceSize === void 0 ? self2.options.CopySliceSize : params.CopySliceSize;
                CopySliceSize = Math.max(0, CopySliceSize);
                var ChunkSize = params.CopyChunkSize || this.options.CopyChunkSize;
                var ChunkParallel = this.options.CopyChunkParallelLimit;
                var ChunkRetryTimes = this.options.ChunkRetryTimes + 1;
                var ChunkCount = 0;
                var FinishSize = 0;
                var FileSize;
                var onProgress;
                var SourceResHeaders = {};
                var SourceHeaders = {};
                var TargetHeader = {};
                ep.on("copy_slice_complete", function(UploadData) {
                  var metaHeaders = {};
                  util.each(params.Headers, function(val2, k) {
                    if (k.toLowerCase().indexOf("x-cos-meta-") === 0)
                      metaHeaders[k] = val2;
                  });
                  var Parts = util.map(UploadData.PartList, function(item) {
                    return {
                      PartNumber: item.PartNumber,
                      ETag: item.ETag
                    };
                  });
                  Async.retry(ChunkRetryTimes, function(tryCallback) {
                    self2.multipartComplete({
                      Bucket,
                      Region,
                      Key,
                      UploadId: UploadData.UploadId,
                      Parts,
                      tracker: params.tracker,
                      calledBySdk: "sliceCopyFile"
                    }, tryCallback);
                  }, function(err, data) {
                    session.removeUsing(UploadData.UploadId);
                    if (err) {
                      onProgress(null, true);
                      return callback(err);
                    }
                    session.removeUploadId(UploadData.UploadId);
                    onProgress({
                      loaded: FileSize,
                      total: FileSize
                    }, true);
                    callback(null, data);
                  });
                });
                ep.on("get_copy_data_finish", function(UploadData) {
                  var uuid = session.getCopyFileId(CopySource, SourceResHeaders, ChunkSize, Bucket, Key);
                  uuid && session.saveUploadId(uuid, UploadData.UploadId, self2.options.UploadIdCacheLimit);
                  session.setUsing(UploadData.UploadId);
                  var needCopySlices = util.filter(UploadData.PartList, function(SliceItem) {
                    if (SliceItem["Uploaded"]) {
                      FinishSize += SliceItem["PartNumber"] >= ChunkCount ? FileSize % ChunkSize || ChunkSize : ChunkSize;
                    }
                    return !SliceItem["Uploaded"];
                  });
                  Async.eachLimit(needCopySlices, ChunkParallel, function(SliceItem, asyncCallback) {
                    var PartNumber = SliceItem.PartNumber;
                    var CopySourceRange = SliceItem.CopySourceRange;
                    var currentSize = SliceItem.end - SliceItem.start;
                    Async.retry(ChunkRetryTimes, function(tryCallback) {
                      copySliceItem.call(self2, {
                        Bucket,
                        Region,
                        Key,
                        CopySource,
                        UploadId: UploadData.UploadId,
                        PartNumber,
                        CopySourceRange,
                        tracker: params.tracker,
                        calledBySdk: "sliceCopyFile"
                      }, tryCallback);
                    }, function(err, data) {
                      if (err)
                        return asyncCallback(err);
                      FinishSize += currentSize;
                      onProgress({
                        loaded: FinishSize,
                        total: FileSize
                      });
                      SliceItem.ETag = data.ETag;
                      asyncCallback(err || null, data);
                    });
                  }, function(err) {
                    if (err) {
                      session.removeUsing(UploadData.UploadId);
                      onProgress(null, true);
                      return callback(err);
                    }
                    ep.emit("copy_slice_complete", UploadData);
                  });
                });
                ep.on("get_chunk_size_finish", function() {
                  var createNewUploadId = function createNewUploadId2() {
                    self2.multipartInit({
                      Bucket,
                      Region,
                      Key,
                      Headers: TargetHeader,
                      tracker: params.tracker,
                      calledBySdk: "sliceCopyFile"
                    }, function(err, data) {
                      if (err)
                        return callback(err);
                      params.UploadId = data.UploadId;
                      ep.emit("get_copy_data_finish", {
                        UploadId: params.UploadId,
                        PartList: params.PartList
                      });
                    });
                  };
                  var uuid = session.getCopyFileId(CopySource, SourceResHeaders, ChunkSize, Bucket, Key);
                  var LocalUploadIdList = session.getUploadIdList(uuid);
                  if (!uuid || !LocalUploadIdList)
                    return createNewUploadId();
                  var next = function next2(index) {
                    if (index >= LocalUploadIdList.length)
                      return createNewUploadId();
                    var UploadId = LocalUploadIdList[index];
                    if (session.using[UploadId])
                      return next2(index + 1);
                    wholeMultipartListPart.call(self2, {
                      Bucket,
                      Region,
                      Key,
                      UploadId,
                      tracker: params.tracker,
                      calledBySdk: "sliceCopyFile"
                    }, function(err, PartListData) {
                      if (err) {
                        session.removeUploadId(UploadId);
                        next2(index + 1);
                      } else {
                        if (session.using[UploadId])
                          return next2(index + 1);
                        var finishETagMap = {};
                        var offset = 0;
                        util.each(PartListData.PartList, function(PartItem) {
                          var size = parseInt(PartItem.Size);
                          var end = offset + size - 1;
                          finishETagMap[PartItem.PartNumber + "|" + offset + "|" + end] = PartItem.ETag;
                          offset += size;
                        });
                        util.each(params.PartList, function(PartItem) {
                          var ETag = finishETagMap[PartItem.PartNumber + "|" + PartItem.start + "|" + PartItem.end];
                          if (ETag) {
                            PartItem.ETag = ETag;
                            PartItem.Uploaded = true;
                          }
                        });
                        ep.emit("get_copy_data_finish", {
                          UploadId,
                          PartList: params.PartList
                        });
                      }
                    });
                  };
                  next(0);
                });
                ep.on("get_file_size_finish", function() {
                  (function() {
                    var SIZE = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 1024 * 2, 1024 * 4, 1024 * 5];
                    var AutoChunkSize = 1024 * 1024;
                    for (var i = 0; i < SIZE.length; i++) {
                      AutoChunkSize = SIZE[i] * 1024 * 1024;
                      if (FileSize / AutoChunkSize <= self2.options.MaxPartNumber)
                        break;
                    }
                    params.ChunkSize = ChunkSize = Math.max(ChunkSize, AutoChunkSize);
                    ChunkCount = Math.ceil(FileSize / ChunkSize);
                    var list = [];
                    for (var partNumber = 1; partNumber <= ChunkCount; partNumber++) {
                      var start = (partNumber - 1) * ChunkSize;
                      var end = partNumber * ChunkSize < FileSize ? partNumber * ChunkSize - 1 : FileSize - 1;
                      var item = {
                        PartNumber: partNumber,
                        start,
                        end,
                        CopySourceRange: "bytes=" + start + "-" + end
                      };
                      list.push(item);
                    }
                    params.PartList = list;
                  })();
                  if (params.Headers["x-cos-metadata-directive"] === "Replaced") {
                    TargetHeader = params.Headers;
                  } else {
                    TargetHeader = SourceHeaders;
                  }
                  TargetHeader["x-cos-storage-class"] = params.Headers["x-cos-storage-class"] || SourceHeaders["x-cos-storage-class"];
                  TargetHeader = util.clearKey(TargetHeader);
                  if (SourceHeaders["x-cos-storage-class"] === "ARCHIVE" || SourceHeaders["x-cos-storage-class"] === "DEEP_ARCHIVE") {
                    var restoreHeader = SourceHeaders["x-cos-restore"];
                    if (!restoreHeader || restoreHeader === 'ongoing-request="true"') {
                      callback(util.error(new Error("Unrestored archive object is not allowed to be copied")));
                      return;
                    }
                  }
                  delete TargetHeader["x-cos-copy-source"];
                  delete TargetHeader["x-cos-metadata-directive"];
                  delete TargetHeader["x-cos-copy-source-If-Modified-Since"];
                  delete TargetHeader["x-cos-copy-source-If-Unmodified-Since"];
                  delete TargetHeader["x-cos-copy-source-If-Match"];
                  delete TargetHeader["x-cos-copy-source-If-None-Match"];
                  ep.emit("get_chunk_size_finish");
                });
                self2.headObject({
                  Bucket: SourceBucket,
                  Region: SourceRegion,
                  Key: SourceKey,
                  tracker: params.tracker,
                  calledBySdk: "sliceCopyFile"
                }, function(err, data) {
                  if (err) {
                    if (err.statusCode && err.statusCode === 404) {
                      callback(util.error(err, {
                        ErrorStatus: SourceKey + " Not Exist"
                      }));
                    } else {
                      callback(err);
                    }
                    return;
                  }
                  FileSize = params.FileSize = data.headers["content-length"];
                  if (FileSize === void 0 || !FileSize) {
                    callback(util.error(new Error('get Content-Length error, please add "Content-Length" to CORS ExposeHeader setting.（ 获取Content-Length失败，请在CORS ExposeHeader设置中添加Content-Length，请参考文档：https://cloud.tencent.com/document/product/436/13318 ）')));
                    return;
                  }
                  params.tracker && params.tracker.setParams({
                    httpSize: FileSize
                  });
                  onProgress = util.throttleOnProgress.call(self2, FileSize, params.onProgress);
                  if (FileSize <= CopySliceSize) {
                    if (!params.Headers["x-cos-metadata-directive"]) {
                      params.Headers["x-cos-metadata-directive"] = "Copy";
                    }
                    self2.putObjectCopy(Object.assign(params, {
                      calledBySdk: "sliceCopyFile"
                    }), function(err2, data2) {
                      if (err2) {
                        onProgress(null, true);
                        return callback(err2);
                      }
                      onProgress({
                        loaded: FileSize,
                        total: FileSize
                      }, true);
                      callback(err2, data2);
                    });
                  } else {
                    var resHeaders = data.headers;
                    SourceResHeaders = resHeaders;
                    SourceHeaders = {
                      "Cache-Control": resHeaders["cache-control"],
                      "Content-Disposition": resHeaders["content-disposition"],
                      "Content-Encoding": resHeaders["content-encoding"],
                      "Content-Type": resHeaders["content-type"],
                      Expires: resHeaders["expires"],
                      "x-cos-storage-class": resHeaders["x-cos-storage-class"]
                    };
                    util.each(resHeaders, function(v, k) {
                      var metaPrefix = "x-cos-meta-";
                      if (k.indexOf(metaPrefix) === 0 && k.length > metaPrefix.length) {
                        SourceHeaders[k] = v;
                      }
                    });
                    ep.emit("get_file_size_finish");
                  }
                });
              }
              function copySliceItem(params, callback) {
                var TaskId = params.TaskId;
                var Bucket = params.Bucket;
                var Region = params.Region;
                var Key = params.Key;
                var CopySource = params.CopySource;
                var UploadId = params.UploadId;
                var PartNumber = params.PartNumber * 1;
                var CopySourceRange = params.CopySourceRange;
                var ChunkRetryTimes = this.options.ChunkRetryTimes + 1;
                var self2 = this;
                Async.retry(ChunkRetryTimes, function(tryCallback) {
                  self2.uploadPartCopy({
                    TaskId,
                    Bucket,
                    Region,
                    Key,
                    CopySource,
                    UploadId,
                    PartNumber,
                    CopySourceRange,
                    tracker: params.tracker,
                    calledBySdk: params.calledBySdk
                  }, function(err, data) {
                    tryCallback(err || null, data);
                  });
                }, function(err, data) {
                  return callback(err, data);
                });
              }
              var API_MAP = {
                sliceUploadFile,
                abortUploadTask,
                uploadFile,
                uploadFiles,
                sliceCopyFile
              };
              module2.exports.init = function(COS, task) {
                task.transferToTaskMethod(API_MAP, "sliceUploadFile");
                util.each(API_MAP, function(fn, apiName) {
                  COS.prototype[apiName] = util.apiWrapper(apiName, fn);
                });
              };
            }
          ),
          /***/
          "./src/async.js": (
            /*!**********************!*\
              !*** ./src/async.js ***!
              \**********************/
            /*! no static exports found */
            /***/
            function(module2, exports2) {
              var eachLimit = function eachLimit2(arr, limit, iterator, callback) {
                callback = callback || function() {
                };
                if (!arr.length || limit <= 0) {
                  return callback();
                }
                var completed = 0;
                var started = 0;
                var running = 0;
                (function replenish() {
                  if (completed >= arr.length) {
                    return callback();
                  }
                  while (running < limit && started < arr.length) {
                    started += 1;
                    running += 1;
                    iterator(arr[started - 1], function(err) {
                      if (err) {
                        callback(err);
                        callback = function callback2() {
                        };
                      } else {
                        completed += 1;
                        running -= 1;
                        if (completed >= arr.length) {
                          callback();
                        } else {
                          replenish();
                        }
                      }
                    });
                  }
                })();
              };
              var retry = function retry2(times, iterator, callback) {
                var next = function next2(index) {
                  iterator(function(err, data) {
                    if (err && index < times) {
                      next2(index + 1);
                    } else {
                      callback(err, data);
                    }
                  });
                };
                if (times < 1) {
                  callback();
                } else {
                  next(1);
                }
              };
              var async = {
                eachLimit,
                retry
              };
              module2.exports = async;
            }
          ),
          /***/
          "./src/base.js": (
            /*!*********************!*\
              !*** ./src/base.js ***!
              \*********************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var _typeof = __webpack_require__(
                /*! @babel/runtime/helpers/typeof */
                "./node_modules/@babel/runtime/helpers/typeof.js"
              );
              var REQUEST = __webpack_require__(
                /*! ../lib/request */
                "./lib/request.js"
              );
              var util = __webpack_require__(
                /*! ./util */
                "./src/util.js"
              );
              function getService(params, callback) {
                var protocol = this.options.Protocol || (util.isBrowser && (typeof location === "undefined" ? "undefined" : _typeof(location)) === "object" && location.protocol === "http:" ? "http:" : "https:");
                var domain = this.options.ServiceDomain;
                var appId = params.AppId || this.options.appId;
                var region = params.Region;
                if (domain) {
                  domain = domain.replace(/\{\{AppId\}\}/gi, appId || "").replace(/\{\{Region\}\}/gi, region || "").replace(/\{\{.*?\}\}/gi, "");
                  if (!/^[a-zA-Z]+:\/\//.test(domain)) {
                    domain = protocol + "//" + domain;
                  }
                  if (domain.slice(-1) === "/") {
                    domain = domain.slice(0, -1);
                  }
                } else if (region) {
                  domain = protocol + "//cos." + region + ".myqcloud.com";
                } else {
                  domain = protocol + "//service.cos.myqcloud.com";
                }
                var SignHost = "";
                var standardHost = region ? "cos." + region + ".myqcloud.com" : "service.cos.myqcloud.com";
                var urlHost = domain.replace(/^https?:\/\/([^/]+)(\/.*)?$/, "$1");
                if (standardHost === urlHost)
                  SignHost = standardHost;
                submitRequest.call(this, {
                  Action: "name/cos:GetService",
                  url: domain,
                  method: "GET",
                  headers: params.Headers,
                  SignHost,
                  tracker: params.tracker
                }, function(err, data) {
                  if (err)
                    return callback(err);
                  var buckets = data && data.ListAllMyBucketsResult && data.ListAllMyBucketsResult.Buckets && data.ListAllMyBucketsResult.Buckets.Bucket || [];
                  buckets = util.isArray(buckets) ? buckets : [buckets];
                  var owner = data && data.ListAllMyBucketsResult && data.ListAllMyBucketsResult.Owner || {};
                  callback(null, {
                    Buckets: buckets,
                    Owner: owner,
                    statusCode: data.statusCode,
                    headers: data.headers
                  });
                });
              }
              function putBucket(params, callback) {
                var self2 = this;
                var xml = "";
                if (params["BucketAZConfig"]) {
                  var CreateBucketConfiguration = {
                    BucketAZConfig: params.BucketAZConfig
                  };
                  xml = util.json2xml({
                    CreateBucketConfiguration
                  });
                }
                submitRequest.call(this, {
                  Action: "name/cos:PutBucket",
                  method: "PUT",
                  Bucket: params.Bucket,
                  Region: params.Region,
                  headers: params.Headers,
                  body: xml,
                  tracker: params.tracker
                }, function(err, data) {
                  if (err)
                    return callback(err);
                  var url = getUrl({
                    protocol: self2.options.Protocol,
                    domain: self2.options.Domain,
                    bucket: params.Bucket,
                    region: params.Region,
                    isLocation: true
                  });
                  callback(null, {
                    Location: url,
                    statusCode: data.statusCode,
                    headers: data.headers
                  });
                });
              }
              function headBucket(params, callback) {
                submitRequest.call(this, {
                  Action: "name/cos:HeadBucket",
                  Bucket: params.Bucket,
                  Region: params.Region,
                  headers: params.Headers,
                  method: "HEAD",
                  tracker: params.tracker
                }, callback);
              }
              function getBucket(params, callback) {
                var reqParams = {};
                reqParams["prefix"] = params["Prefix"] || "";
                reqParams["delimiter"] = params["Delimiter"];
                reqParams["marker"] = params["Marker"];
                reqParams["max-keys"] = params["MaxKeys"];
                reqParams["encoding-type"] = params["EncodingType"];
                submitRequest.call(this, {
                  Action: "name/cos:GetBucket",
                  ResourceKey: reqParams["prefix"],
                  method: "GET",
                  Bucket: params.Bucket,
                  Region: params.Region,
                  headers: params.Headers,
                  qs: reqParams,
                  tracker: params.tracker
                }, function(err, data) {
                  if (err)
                    return callback(err);
                  var ListBucketResult = data.ListBucketResult || {};
                  var Contents = ListBucketResult.Contents || [];
                  var CommonPrefixes = ListBucketResult.CommonPrefixes || [];
                  Contents = util.isArray(Contents) ? Contents : [Contents];
                  CommonPrefixes = util.isArray(CommonPrefixes) ? CommonPrefixes : [CommonPrefixes];
                  var result = util.clone(ListBucketResult);
                  util.extend(result, {
                    Contents,
                    CommonPrefixes,
                    statusCode: data.statusCode,
                    headers: data.headers
                  });
                  callback(null, result);
                });
              }
              function deleteBucket(params, callback) {
                submitRequest.call(this, {
                  Action: "name/cos:DeleteBucket",
                  Bucket: params.Bucket,
                  Region: params.Region,
                  headers: params.Headers,
                  method: "DELETE",
                  tracker: params.tracker
                }, function(err, data) {
                  if (err && err.statusCode === 204) {
                    return callback(null, {
                      statusCode: err.statusCode
                    });
                  } else if (err) {
                    return callback(err);
                  }
                  callback(null, {
                    statusCode: data.statusCode,
                    headers: data.headers
                  });
                });
              }
              function putBucketAcl(params, callback) {
                var headers = params.Headers;
                var xml = "";
                if (params["AccessControlPolicy"]) {
                  var AccessControlPolicy = util.clone(params["AccessControlPolicy"] || {});
                  var Grants = AccessControlPolicy.Grants || AccessControlPolicy.Grant;
                  Grants = util.isArray(Grants) ? Grants : [Grants];
                  delete AccessControlPolicy.Grant;
                  delete AccessControlPolicy.Grants;
                  AccessControlPolicy.AccessControlList = {
                    Grant: Grants
                  };
                  xml = util.json2xml({
                    AccessControlPolicy
                  });
                  headers["Content-Type"] = "application/xml";
                  headers["Content-MD5"] = util.b64(util.md5(xml));
                }
                util.each(headers, function(val2, key) {
                  if (key.indexOf("x-cos-grant-") === 0) {
                    headers[key] = uniqGrant(headers[key]);
                  }
                });
                submitRequest.call(this, {
                  Action: "name/cos:PutBucketACL",
                  method: "PUT",
                  Bucket: params.Bucket,
                  Region: params.Region,
                  headers,
                  action: "acl",
                  body: xml,
                  tracker: params.tracker
                }, function(err, data) {
                  if (err)
                    return callback(err);
                  callback(null, {
                    statusCode: data.statusCode,
                    headers: data.headers
                  });
                });
              }
              function getBucketAcl(params, callback) {
                submitRequest.call(this, {
                  Action: "name/cos:GetBucketACL",
                  method: "GET",
                  Bucket: params.Bucket,
                  Region: params.Region,
                  headers: params.Headers,
                  action: "acl",
                  tracker: params.tracker
                }, function(err, data) {
                  if (err)
                    return callback(err);
                  var AccessControlPolicy = data.AccessControlPolicy || {};
                  var Owner = AccessControlPolicy.Owner || {};
                  var Grant = AccessControlPolicy.AccessControlList.Grant || [];
                  Grant = util.isArray(Grant) ? Grant : [Grant];
                  var result = decodeAcl(AccessControlPolicy);
                  if (data.headers && data.headers["x-cos-acl"]) {
                    result.ACL = data.headers["x-cos-acl"];
                  }
                  result = util.extend(result, {
                    Owner,
                    Grants: Grant,
                    statusCode: data.statusCode,
                    headers: data.headers
                  });
                  callback(null, result);
                });
              }
              function putBucketCors(params, callback) {
                var CORSConfiguration = params["CORSConfiguration"] || {};
                var CORSRules = CORSConfiguration["CORSRules"] || params["CORSRules"] || [];
                CORSRules = util.clone(util.isArray(CORSRules) ? CORSRules : [CORSRules]);
                util.each(CORSRules, function(rule) {
                  util.each(["AllowedOrigin", "AllowedHeader", "AllowedMethod", "ExposeHeader"], function(key) {
                    var sKey = key + "s";
                    var val2 = rule[sKey] || rule[key] || [];
                    delete rule[sKey];
                    rule[key] = util.isArray(val2) ? val2 : [val2];
                  });
                });
                var Conf = {
                  CORSRule: CORSRules
                };
                if (params.ResponseVary)
                  Conf.ResponseVary = params.ResponseVary;
                var xml = util.json2xml({
                  CORSConfiguration: Conf
                });
                var headers = params.Headers;
                headers["Content-Type"] = "application/xml";
                headers["Content-MD5"] = util.b64(util.md5(xml));
                submitRequest.call(this, {
                  Action: "name/cos:PutBucketCORS",
                  method: "PUT",
                  Bucket: params.Bucket,
                  Region: params.Region,
                  body: xml,
                  action: "cors",
                  headers,
                  tracker: params.tracker
                }, function(err, data) {
                  if (err)
                    return callback(err);
                  callback(null, {
                    statusCode: data.statusCode,
                    headers: data.headers
                  });
                });
              }
              function getBucketCors(params, callback) {
                submitRequest.call(this, {
                  Action: "name/cos:GetBucketCORS",
                  method: "GET",
                  Bucket: params.Bucket,
                  Region: params.Region,
                  headers: params.Headers,
                  action: "cors",
                  tracker: params.tracker
                }, function(err, data) {
                  if (err) {
                    if (err.statusCode === 404 && err.error && err.error.Code === "NoSuchCORSConfiguration") {
                      var result = {
                        CORSRules: [],
                        statusCode: err.statusCode
                      };
                      err.headers && (result.headers = err.headers);
                      callback(null, result);
                    } else {
                      callback(err);
                    }
                    return;
                  }
                  var CORSConfiguration = data.CORSConfiguration || {};
                  var CORSRules = CORSConfiguration.CORSRules || CORSConfiguration.CORSRule || [];
                  CORSRules = util.clone(util.isArray(CORSRules) ? CORSRules : [CORSRules]);
                  var ResponseVary = CORSConfiguration.ResponseVary;
                  util.each(CORSRules, function(rule) {
                    util.each(["AllowedOrigin", "AllowedHeader", "AllowedMethod", "ExposeHeader"], function(key) {
                      var sKey = key + "s";
                      var val2 = rule[sKey] || rule[key] || [];
                      delete rule[key];
                      rule[sKey] = util.isArray(val2) ? val2 : [val2];
                    });
                  });
                  callback(null, {
                    CORSRules,
                    ResponseVary,
                    statusCode: data.statusCode,
                    headers: data.headers
                  });
                });
              }
              function deleteBucketCors(params, callback) {
                submitRequest.call(this, {
                  Action: "name/cos:DeleteBucketCORS",
                  method: "DELETE",
                  Bucket: params.Bucket,
                  Region: params.Region,
                  headers: params.Headers,
                  action: "cors",
                  tracker: params.tracker
                }, function(err, data) {
                  if (err && err.statusCode === 204) {
                    return callback(null, {
                      statusCode: err.statusCode
                    });
                  } else if (err) {
                    return callback(err);
                  }
                  callback(null, {
                    statusCode: data.statusCode || err.statusCode,
                    headers: data.headers
                  });
                });
              }
              function getBucketLocation(params, callback) {
                submitRequest.call(this, {
                  Action: "name/cos:GetBucketLocation",
                  method: "GET",
                  Bucket: params.Bucket,
                  Region: params.Region,
                  headers: params.Headers,
                  action: "location",
                  tracker: params.tracker
                }, callback);
              }
              function putBucketPolicy(params, callback) {
                var Policy = params["Policy"];
                try {
                  if (typeof Policy === "string")
                    Policy = JSON.parse(Policy);
                } catch (e) {
                }
                if (!Policy || typeof Policy === "string")
                  return callback(util.error(new Error("Policy format error")));
                var PolicyStr = JSON.stringify(Policy);
                if (!Policy.version)
                  Policy.version = "2.0";
                var headers = params.Headers;
                headers["Content-Type"] = "application/json";
                headers["Content-MD5"] = util.b64(util.md5(PolicyStr));
                submitRequest.call(this, {
                  Action: "name/cos:PutBucketPolicy",
                  method: "PUT",
                  Bucket: params.Bucket,
                  Region: params.Region,
                  action: "policy",
                  body: PolicyStr,
                  headers,
                  tracker: params.tracker
                }, function(err, data) {
                  if (err && err.statusCode === 204) {
                    return callback(null, {
                      statusCode: err.statusCode
                    });
                  } else if (err) {
                    return callback(err);
                  }
                  callback(null, {
                    statusCode: data.statusCode,
                    headers: data.headers
                  });
                });
              }
              function getBucketPolicy(params, callback) {
                submitRequest.call(this, {
                  Action: "name/cos:GetBucketPolicy",
                  method: "GET",
                  Bucket: params.Bucket,
                  Region: params.Region,
                  headers: params.Headers,
                  action: "policy",
                  rawBody: true,
                  tracker: params.tracker
                }, function(err, data) {
                  if (err) {
                    if (err.statusCode && err.statusCode === 403) {
                      return callback(util.error(err, {
                        ErrorStatus: "Access Denied"
                      }));
                    }
                    if (err.statusCode && err.statusCode === 405) {
                      return callback(util.error(err, {
                        ErrorStatus: "Method Not Allowed"
                      }));
                    }
                    if (err.statusCode && err.statusCode === 404) {
                      return callback(util.error(err, {
                        ErrorStatus: "Policy Not Found"
                      }));
                    }
                    return callback(err);
                  }
                  var Policy = {};
                  try {
                    Policy = JSON.parse(data.body);
                  } catch (e) {
                  }
                  callback(null, {
                    Policy,
                    statusCode: data.statusCode,
                    headers: data.headers
                  });
                });
              }
              function deleteBucketPolicy(params, callback) {
                submitRequest.call(this, {
                  Action: "name/cos:DeleteBucketPolicy",
                  method: "DELETE",
                  Bucket: params.Bucket,
                  Region: params.Region,
                  headers: params.Headers,
                  action: "policy",
                  tracker: params.tracker
                }, function(err, data) {
                  if (err && err.statusCode === 204) {
                    return callback(null, {
                      statusCode: err.statusCode
                    });
                  } else if (err) {
                    return callback(err);
                  }
                  callback(null, {
                    statusCode: data.statusCode || err.statusCode,
                    headers: data.headers
                  });
                });
              }
              function putBucketTagging(params, callback) {
                var Tagging = params["Tagging"] || {};
                var Tags = Tagging.TagSet || Tagging.Tags || params["Tags"] || [];
                Tags = util.clone(util.isArray(Tags) ? Tags : [Tags]);
                var xml = util.json2xml({
                  Tagging: {
                    TagSet: {
                      Tag: Tags
                    }
                  }
                });
                var headers = params.Headers;
                headers["Content-Type"] = "application/xml";
                headers["Content-MD5"] = util.b64(util.md5(xml));
                submitRequest.call(this, {
                  Action: "name/cos:PutBucketTagging",
                  method: "PUT",
                  Bucket: params.Bucket,
                  Region: params.Region,
                  body: xml,
                  action: "tagging",
                  headers,
                  tracker: params.tracker
                }, function(err, data) {
                  if (err && err.statusCode === 204) {
                    return callback(null, {
                      statusCode: err.statusCode
                    });
                  } else if (err) {
                    return callback(err);
                  }
                  callback(null, {
                    statusCode: data.statusCode,
                    headers: data.headers
                  });
                });
              }
              function getBucketTagging(params, callback) {
                submitRequest.call(this, {
                  Action: "name/cos:GetBucketTagging",
                  method: "GET",
                  Bucket: params.Bucket,
                  Region: params.Region,
                  headers: params.Headers,
                  action: "tagging",
                  tracker: params.tracker
                }, function(err, data) {
                  if (err) {
                    if (err.statusCode === 404 && err.error && (err.error === "Not Found" || err.error.Code === "NoSuchTagSet")) {
                      var result = {
                        Tags: [],
                        statusCode: err.statusCode
                      };
                      err.headers && (result.headers = err.headers);
                      callback(null, result);
                    } else {
                      callback(err);
                    }
                    return;
                  }
                  var Tags = [];
                  try {
                    Tags = data.Tagging.TagSet.Tag || [];
                  } catch (e) {
                  }
                  Tags = util.clone(util.isArray(Tags) ? Tags : [Tags]);
                  callback(null, {
                    Tags,
                    statusCode: data.statusCode,
                    headers: data.headers
                  });
                });
              }
              function deleteBucketTagging(params, callback) {
                submitRequest.call(this, {
                  Action: "name/cos:DeleteBucketTagging",
                  method: "DELETE",
                  Bucket: params.Bucket,
                  Region: params.Region,
                  headers: params.Headers,
                  action: "tagging",
                  tracker: params.tracker
                }, function(err, data) {
                  if (err && err.statusCode === 204) {
                    return callback(null, {
                      statusCode: err.statusCode
                    });
                  } else if (err) {
                    return callback(err);
                  }
                  callback(null, {
                    statusCode: data.statusCode,
                    headers: data.headers
                  });
                });
              }
              function putBucketLifecycle(params, callback) {
                var LifecycleConfiguration = params["LifecycleConfiguration"] || {};
                var Rules = LifecycleConfiguration.Rules || params.Rules || [];
                Rules = util.clone(Rules);
                var xml = util.json2xml({
                  LifecycleConfiguration: {
                    Rule: Rules
                  }
                });
                var headers = params.Headers;
                headers["Content-Type"] = "application/xml";
                headers["Content-MD5"] = util.b64(util.md5(xml));
                submitRequest.call(this, {
                  Action: "name/cos:PutBucketLifecycle",
                  method: "PUT",
                  Bucket: params.Bucket,
                  Region: params.Region,
                  body: xml,
                  action: "lifecycle",
                  headers,
                  tracker: params.tracker
                }, function(err, data) {
                  if (err && err.statusCode === 204) {
                    return callback(null, {
                      statusCode: err.statusCode
                    });
                  } else if (err) {
                    return callback(err);
                  }
                  callback(null, {
                    statusCode: data.statusCode,
                    headers: data.headers
                  });
                });
              }
              function getBucketLifecycle(params, callback) {
                submitRequest.call(this, {
                  Action: "name/cos:GetBucketLifecycle",
                  method: "GET",
                  Bucket: params.Bucket,
                  Region: params.Region,
                  headers: params.Headers,
                  action: "lifecycle",
                  tracker: params.tracker
                }, function(err, data) {
                  if (err) {
                    if (err.statusCode === 404 && err.error && err.error.Code === "NoSuchLifecycleConfiguration") {
                      var result = {
                        Rules: [],
                        statusCode: err.statusCode
                      };
                      err.headers && (result.headers = err.headers);
                      callback(null, result);
                    } else {
                      callback(err);
                    }
                    return;
                  }
                  var Rules = [];
                  try {
                    Rules = data.LifecycleConfiguration.Rule || [];
                  } catch (e) {
                  }
                  Rules = util.clone(util.isArray(Rules) ? Rules : [Rules]);
                  callback(null, {
                    Rules,
                    statusCode: data.statusCode,
                    headers: data.headers
                  });
                });
              }
              function deleteBucketLifecycle(params, callback) {
                submitRequest.call(this, {
                  Action: "name/cos:DeleteBucketLifecycle",
                  method: "DELETE",
                  Bucket: params.Bucket,
                  Region: params.Region,
                  headers: params.Headers,
                  action: "lifecycle",
                  tracker: params.tracker
                }, function(err, data) {
                  if (err && err.statusCode === 204) {
                    return callback(null, {
                      statusCode: err.statusCode
                    });
                  } else if (err) {
                    return callback(err);
                  }
                  callback(null, {
                    statusCode: data.statusCode,
                    headers: data.headers
                  });
                });
              }
              function putBucketVersioning(params, callback) {
                if (!params["VersioningConfiguration"]) {
                  callback(util.error(new Error("missing param VersioningConfiguration")));
                  return;
                }
                var VersioningConfiguration = params["VersioningConfiguration"] || {};
                var xml = util.json2xml({
                  VersioningConfiguration
                });
                var headers = params.Headers;
                headers["Content-Type"] = "application/xml";
                headers["Content-MD5"] = util.b64(util.md5(xml));
                submitRequest.call(this, {
                  Action: "name/cos:PutBucketVersioning",
                  method: "PUT",
                  Bucket: params.Bucket,
                  Region: params.Region,
                  body: xml,
                  action: "versioning",
                  headers,
                  tracker: params.tracker
                }, function(err, data) {
                  if (err && err.statusCode === 204) {
                    return callback(null, {
                      statusCode: err.statusCode
                    });
                  } else if (err) {
                    return callback(err);
                  }
                  callback(null, {
                    statusCode: data.statusCode,
                    headers: data.headers
                  });
                });
              }
              function getBucketVersioning(params, callback) {
                submitRequest.call(this, {
                  Action: "name/cos:GetBucketVersioning",
                  method: "GET",
                  Bucket: params.Bucket,
                  Region: params.Region,
                  headers: params.Headers,
                  action: "versioning",
                  tracker: params.tracker
                }, function(err, data) {
                  if (!err) {
                    !data.VersioningConfiguration && (data.VersioningConfiguration = {});
                  }
                  callback(err, data);
                });
              }
              function putBucketReplication(params, callback) {
                var ReplicationConfiguration = util.clone(params.ReplicationConfiguration);
                var xml = util.json2xml({
                  ReplicationConfiguration
                });
                xml = xml.replace(/<(\/?)Rules>/gi, "<$1Rule>");
                xml = xml.replace(/<(\/?)Tags>/gi, "<$1Tag>");
                var headers = params.Headers;
                headers["Content-Type"] = "application/xml";
                headers["Content-MD5"] = util.b64(util.md5(xml));
                submitRequest.call(this, {
                  Action: "name/cos:PutBucketReplication",
                  method: "PUT",
                  Bucket: params.Bucket,
                  Region: params.Region,
                  body: xml,
                  action: "replication",
                  headers,
                  tracker: params.tracker
                }, function(err, data) {
                  if (err && err.statusCode === 204) {
                    return callback(null, {
                      statusCode: err.statusCode
                    });
                  } else if (err) {
                    return callback(err);
                  }
                  callback(null, {
                    statusCode: data.statusCode,
                    headers: data.headers
                  });
                });
              }
              function getBucketReplication(params, callback) {
                submitRequest.call(this, {
                  Action: "name/cos:GetBucketReplication",
                  method: "GET",
                  Bucket: params.Bucket,
                  Region: params.Region,
                  headers: params.Headers,
                  action: "replication",
                  tracker: params.tracker
                }, function(err, data) {
                  if (err) {
                    if (err.statusCode === 404 && err.error && (err.error === "Not Found" || err.error.Code === "ReplicationConfigurationnotFoundError")) {
                      var result = {
                        ReplicationConfiguration: {
                          Rules: []
                        },
                        statusCode: err.statusCode
                      };
                      err.headers && (result.headers = err.headers);
                      callback(null, result);
                    } else {
                      callback(err);
                    }
                    return;
                  }
                  !data.ReplicationConfiguration && (data.ReplicationConfiguration = {});
                  if (data.ReplicationConfiguration.Rule) {
                    data.ReplicationConfiguration.Rules = util.makeArray(data.ReplicationConfiguration.Rule);
                    delete data.ReplicationConfiguration.Rule;
                  }
                  callback(err, data);
                });
              }
              function deleteBucketReplication(params, callback) {
                submitRequest.call(this, {
                  Action: "name/cos:DeleteBucketReplication",
                  method: "DELETE",
                  Bucket: params.Bucket,
                  Region: params.Region,
                  headers: params.Headers,
                  action: "replication",
                  tracker: params.tracker
                }, function(err, data) {
                  if (err && err.statusCode === 204) {
                    return callback(null, {
                      statusCode: err.statusCode
                    });
                  } else if (err) {
                    return callback(err);
                  }
                  callback(null, {
                    statusCode: data.statusCode,
                    headers: data.headers
                  });
                });
              }
              function putBucketWebsite(params, callback) {
                if (!params["WebsiteConfiguration"]) {
                  callback(util.error(new Error("missing param WebsiteConfiguration")));
                  return;
                }
                var WebsiteConfiguration = util.clone(params["WebsiteConfiguration"] || {});
                var RoutingRules = WebsiteConfiguration["RoutingRules"] || WebsiteConfiguration["RoutingRule"] || [];
                RoutingRules = util.isArray(RoutingRules) ? RoutingRules : [RoutingRules];
                delete WebsiteConfiguration.RoutingRule;
                delete WebsiteConfiguration.RoutingRules;
                if (RoutingRules.length)
                  WebsiteConfiguration.RoutingRules = {
                    RoutingRule: RoutingRules
                  };
                var xml = util.json2xml({
                  WebsiteConfiguration
                });
                var headers = params.Headers;
                headers["Content-Type"] = "application/xml";
                headers["Content-MD5"] = util.b64(util.md5(xml));
                submitRequest.call(this, {
                  Action: "name/cos:PutBucketWebsite",
                  method: "PUT",
                  Bucket: params.Bucket,
                  Region: params.Region,
                  body: xml,
                  action: "website",
                  headers,
                  tracker: params.tracker
                }, function(err, data) {
                  if (err && err.statusCode === 204) {
                    return callback(null, {
                      statusCode: err.statusCode
                    });
                  } else if (err) {
                    return callback(err);
                  }
                  callback(null, {
                    statusCode: data.statusCode,
                    headers: data.headers
                  });
                });
              }
              function getBucketWebsite(params, callback) {
                submitRequest.call(this, {
                  Action: "name/cos:GetBucketWebsite",
                  method: "GET",
                  Bucket: params.Bucket,
                  Region: params.Region,
                  Key: params.Key,
                  headers: params.Headers,
                  action: "website",
                  tracker: params.tracker
                }, function(err, data) {
                  if (err) {
                    if (err.statusCode === 404 && err.error.Code === "NoSuchWebsiteConfiguration") {
                      var result = {
                        WebsiteConfiguration: {},
                        statusCode: err.statusCode
                      };
                      err.headers && (result.headers = err.headers);
                      callback(null, result);
                    } else {
                      callback(err);
                    }
                    return;
                  }
                  var WebsiteConfiguration = data.WebsiteConfiguration || {};
                  if (WebsiteConfiguration["RoutingRules"]) {
                    var RoutingRules = util.clone(WebsiteConfiguration["RoutingRules"].RoutingRule || []);
                    RoutingRules = util.makeArray(RoutingRules);
                    WebsiteConfiguration.RoutingRules = RoutingRules;
                  }
                  callback(null, {
                    WebsiteConfiguration,
                    statusCode: data.statusCode,
                    headers: data.headers
                  });
                });
              }
              function deleteBucketWebsite(params, callback) {
                submitRequest.call(this, {
                  Action: "name/cos:DeleteBucketWebsite",
                  method: "DELETE",
                  Bucket: params.Bucket,
                  Region: params.Region,
                  headers: params.Headers,
                  action: "website",
                  tracker: params.tracker
                }, function(err, data) {
                  if (err && err.statusCode === 204) {
                    return callback(null, {
                      statusCode: err.statusCode
                    });
                  } else if (err) {
                    return callback(err);
                  }
                  callback(null, {
                    statusCode: data.statusCode,
                    headers: data.headers
                  });
                });
              }
              function putBucketReferer(params, callback) {
                if (!params["RefererConfiguration"]) {
                  callback(util.error(new Error("missing param RefererConfiguration")));
                  return;
                }
                var RefererConfiguration = util.clone(params["RefererConfiguration"] || {});
                var DomainList = RefererConfiguration["DomainList"] || {};
                var Domains = DomainList["Domains"] || DomainList["Domain"] || [];
                Domains = util.isArray(Domains) ? Domains : [Domains];
                if (Domains.length)
                  RefererConfiguration.DomainList = {
                    Domain: Domains
                  };
                var xml = util.json2xml({
                  RefererConfiguration
                });
                var headers = params.Headers;
                headers["Content-Type"] = "application/xml";
                headers["Content-MD5"] = util.b64(util.md5(xml));
                submitRequest.call(this, {
                  Action: "name/cos:PutBucketReferer",
                  method: "PUT",
                  Bucket: params.Bucket,
                  Region: params.Region,
                  body: xml,
                  action: "referer",
                  headers,
                  tracker: params.tracker
                }, function(err, data) {
                  if (err && err.statusCode === 204) {
                    return callback(null, {
                      statusCode: err.statusCode
                    });
                  } else if (err) {
                    return callback(err);
                  }
                  callback(null, {
                    statusCode: data.statusCode,
                    headers: data.headers
                  });
                });
              }
              function getBucketReferer(params, callback) {
                submitRequest.call(this, {
                  Action: "name/cos:GetBucketReferer",
                  method: "GET",
                  Bucket: params.Bucket,
                  Region: params.Region,
                  Key: params.Key,
                  headers: params.Headers,
                  action: "referer",
                  tracker: params.tracker
                }, function(err, data) {
                  if (err) {
                    if (err.statusCode === 404 && err.error.Code === "NoSuchRefererConfiguration") {
                      var result = {
                        WebsiteConfiguration: {},
                        statusCode: err.statusCode
                      };
                      err.headers && (result.headers = err.headers);
                      callback(null, result);
                    } else {
                      callback(err);
                    }
                    return;
                  }
                  var RefererConfiguration = data.RefererConfiguration || {};
                  if (RefererConfiguration["DomainList"]) {
                    var Domains = util.makeArray(RefererConfiguration["DomainList"].Domain || []);
                    RefererConfiguration.DomainList = {
                      Domains
                    };
                  }
                  callback(null, {
                    RefererConfiguration,
                    statusCode: data.statusCode,
                    headers: data.headers
                  });
                });
              }
              function putBucketDomain(params, callback) {
                var DomainConfiguration = params["DomainConfiguration"] || {};
                var DomainRule = DomainConfiguration.DomainRule || params.DomainRule || [];
                DomainRule = util.clone(DomainRule);
                var xml = util.json2xml({
                  DomainConfiguration: {
                    DomainRule
                  }
                });
                var headers = params.Headers;
                headers["Content-Type"] = "application/xml";
                headers["Content-MD5"] = util.b64(util.md5(xml));
                submitRequest.call(this, {
                  Action: "name/cos:PutBucketDomain",
                  method: "PUT",
                  Bucket: params.Bucket,
                  Region: params.Region,
                  body: xml,
                  action: "domain",
                  headers,
                  tracker: params.tracker
                }, function(err, data) {
                  if (err && err.statusCode === 204) {
                    return callback(null, {
                      statusCode: err.statusCode
                    });
                  } else if (err) {
                    return callback(err);
                  }
                  callback(null, {
                    statusCode: data.statusCode,
                    headers: data.headers
                  });
                });
              }
              function getBucketDomain(params, callback) {
                submitRequest.call(this, {
                  Action: "name/cos:GetBucketDomain",
                  method: "GET",
                  Bucket: params.Bucket,
                  Region: params.Region,
                  headers: params.Headers,
                  action: "domain",
                  tracker: params.tracker
                }, function(err, data) {
                  if (err)
                    return callback(err);
                  var DomainRule = [];
                  try {
                    DomainRule = data.DomainConfiguration.DomainRule || [];
                  } catch (e) {
                  }
                  DomainRule = util.clone(util.isArray(DomainRule) ? DomainRule : [DomainRule]);
                  callback(null, {
                    DomainRule,
                    statusCode: data.statusCode,
                    headers: data.headers
                  });
                });
              }
              function deleteBucketDomain(params, callback) {
                submitRequest.call(this, {
                  Action: "name/cos:DeleteBucketDomain",
                  method: "DELETE",
                  Bucket: params.Bucket,
                  Region: params.Region,
                  headers: params.Headers,
                  action: "domain",
                  tracker: params.tracker
                }, function(err, data) {
                  if (err && err.statusCode === 204) {
                    return callback(null, {
                      statusCode: err.statusCode
                    });
                  } else if (err) {
                    return callback(err);
                  }
                  callback(null, {
                    statusCode: data.statusCode,
                    headers: data.headers
                  });
                });
              }
              function putBucketOrigin(params, callback) {
                var OriginConfiguration = params["OriginConfiguration"] || {};
                var OriginRule = OriginConfiguration.OriginRule || params.OriginRule || [];
                OriginRule = util.clone(OriginRule);
                var xml = util.json2xml({
                  OriginConfiguration: {
                    OriginRule
                  }
                });
                var headers = params.Headers;
                headers["Content-Type"] = "application/xml";
                headers["Content-MD5"] = util.b64(util.md5(xml));
                submitRequest.call(this, {
                  Action: "name/cos:PutBucketOrigin",
                  method: "PUT",
                  Bucket: params.Bucket,
                  Region: params.Region,
                  body: xml,
                  action: "origin",
                  headers,
                  tracker: params.tracker
                }, function(err, data) {
                  if (err && err.statusCode === 204) {
                    return callback(null, {
                      statusCode: err.statusCode
                    });
                  } else if (err) {
                    return callback(err);
                  }
                  callback(null, {
                    statusCode: data.statusCode,
                    headers: data.headers
                  });
                });
              }
              function getBucketOrigin(params, callback) {
                submitRequest.call(this, {
                  Action: "name/cos:GetBucketOrigin",
                  method: "GET",
                  Bucket: params.Bucket,
                  Region: params.Region,
                  headers: params.Headers,
                  action: "origin",
                  tracker: params.tracker
                }, function(err, data) {
                  if (err)
                    return callback(err);
                  var OriginRule = [];
                  try {
                    OriginRule = data.OriginConfiguration.OriginRule || [];
                  } catch (e) {
                  }
                  OriginRule = util.clone(util.isArray(OriginRule) ? OriginRule : [OriginRule]);
                  callback(null, {
                    OriginRule,
                    statusCode: data.statusCode,
                    headers: data.headers
                  });
                });
              }
              function deleteBucketOrigin(params, callback) {
                submitRequest.call(this, {
                  Action: "name/cos:DeleteBucketOrigin",
                  method: "DELETE",
                  Bucket: params.Bucket,
                  Region: params.Region,
                  headers: params.Headers,
                  action: "origin",
                  tracker: params.tracker
                }, function(err, data) {
                  if (err && err.statusCode === 204) {
                    return callback(null, {
                      statusCode: err.statusCode
                    });
                  } else if (err) {
                    return callback(err);
                  }
                  callback(null, {
                    statusCode: data.statusCode,
                    headers: data.headers
                  });
                });
              }
              function putBucketLogging(params, callback) {
                var xml = util.json2xml({
                  BucketLoggingStatus: params["BucketLoggingStatus"] || ""
                });
                var headers = params.Headers;
                headers["Content-Type"] = "application/xml";
                headers["Content-MD5"] = util.b64(util.md5(xml));
                submitRequest.call(this, {
                  Action: "name/cos:PutBucketLogging",
                  method: "PUT",
                  Bucket: params.Bucket,
                  Region: params.Region,
                  body: xml,
                  action: "logging",
                  headers,
                  tracker: params.tracker
                }, function(err, data) {
                  if (err && err.statusCode === 204) {
                    return callback(null, {
                      statusCode: err.statusCode
                    });
                  } else if (err) {
                    return callback(err);
                  }
                  callback(null, {
                    statusCode: data.statusCode,
                    headers: data.headers
                  });
                });
              }
              function getBucketLogging(params, callback) {
                submitRequest.call(this, {
                  Action: "name/cos:GetBucketLogging",
                  method: "GET",
                  Bucket: params.Bucket,
                  Region: params.Region,
                  headers: params.Headers,
                  action: "logging",
                  tracker: params.tracker
                }, function(err, data) {
                  if (err)
                    return callback(err);
                  callback(null, {
                    BucketLoggingStatus: data.BucketLoggingStatus,
                    statusCode: data.statusCode,
                    headers: data.headers
                  });
                });
              }
              function submitBucketInventory(method, params, callback) {
                var InventoryConfiguration = util.clone(params["InventoryConfiguration"]);
                if (InventoryConfiguration.OptionalFields) {
                  var Field = InventoryConfiguration.OptionalFields || [];
                  InventoryConfiguration.OptionalFields = {
                    Field
                  };
                }
                if (InventoryConfiguration.Destination && InventoryConfiguration.Destination.COSBucketDestination && InventoryConfiguration.Destination.COSBucketDestination.Encryption) {
                  var Encryption = InventoryConfiguration.Destination.COSBucketDestination.Encryption;
                  if (Object.keys(Encryption).indexOf("SSECOS") > -1) {
                    Encryption["SSE-COS"] = Encryption["SSECOS"];
                    delete Encryption["SSECOS"];
                  }
                }
                var xml = util.json2xml({
                  InventoryConfiguration
                });
                var headers = params.Headers;
                headers["Content-Type"] = "application/xml";
                headers["Content-MD5"] = util.b64(util.md5(xml));
                var action = method === "PUT" ? "name/cos:PutBucketInventory" : "name/cos:PostBucketInventory";
                submitRequest.call(this, {
                  Action: action,
                  method,
                  Bucket: params.Bucket,
                  Region: params.Region,
                  body: xml,
                  action: "inventory",
                  qs: {
                    id: params["Id"]
                  },
                  headers,
                  tracker: params.tracker
                }, function(err, data) {
                  if (err && err.statusCode === 204) {
                    return callback(null, {
                      statusCode: err.statusCode
                    });
                  } else if (err) {
                    return callback(err);
                  }
                  callback(null, {
                    statusCode: data.statusCode,
                    headers: data.headers
                  });
                });
              }
              function putBucketInventory(params, callback) {
                return submitBucketInventory.call(this, "PUT", params, callback);
              }
              function postBucketInventory(params, callback) {
                return submitBucketInventory.call(this, "POST", params, callback);
              }
              function getBucketInventory(params, callback) {
                submitRequest.call(this, {
                  Action: "name/cos:GetBucketInventory",
                  method: "GET",
                  Bucket: params.Bucket,
                  Region: params.Region,
                  headers: params.Headers,
                  action: "inventory",
                  qs: {
                    id: params["Id"]
                  },
                  tracker: params.tracker
                }, function(err, data) {
                  if (err)
                    return callback(err);
                  var InventoryConfiguration = data["InventoryConfiguration"];
                  if (InventoryConfiguration && InventoryConfiguration.OptionalFields && InventoryConfiguration.OptionalFields.Field) {
                    var Field = InventoryConfiguration.OptionalFields.Field;
                    if (!util.isArray(Field)) {
                      Field = [Field];
                    }
                    InventoryConfiguration.OptionalFields = Field;
                  }
                  if (InventoryConfiguration.Destination && InventoryConfiguration.Destination.COSBucketDestination && InventoryConfiguration.Destination.COSBucketDestination.Encryption) {
                    var Encryption = InventoryConfiguration.Destination.COSBucketDestination.Encryption;
                    if (Object.keys(Encryption).indexOf("SSE-COS") > -1) {
                      Encryption["SSECOS"] = Encryption["SSE-COS"];
                      delete Encryption["SSE-COS"];
                    }
                  }
                  callback(null, {
                    InventoryConfiguration,
                    statusCode: data.statusCode,
                    headers: data.headers
                  });
                });
              }
              function listBucketInventory(params, callback) {
                submitRequest.call(this, {
                  Action: "name/cos:ListBucketInventory",
                  method: "GET",
                  Bucket: params.Bucket,
                  Region: params.Region,
                  headers: params.Headers,
                  action: "inventory",
                  qs: {
                    "continuation-token": params["ContinuationToken"]
                  },
                  tracker: params.tracker
                }, function(err, data) {
                  if (err)
                    return callback(err);
                  var ListInventoryConfigurationResult = data["ListInventoryConfigurationResult"];
                  var InventoryConfigurations = ListInventoryConfigurationResult.InventoryConfiguration || [];
                  InventoryConfigurations = util.isArray(InventoryConfigurations) ? InventoryConfigurations : [InventoryConfigurations];
                  delete ListInventoryConfigurationResult["InventoryConfiguration"];
                  util.each(InventoryConfigurations, function(InventoryConfiguration) {
                    if (InventoryConfiguration && InventoryConfiguration.OptionalFields && InventoryConfiguration.OptionalFields.Field) {
                      var Field = InventoryConfiguration.OptionalFields.Field;
                      if (!util.isArray(Field)) {
                        Field = [Field];
                      }
                      InventoryConfiguration.OptionalFields = Field;
                    }
                    if (InventoryConfiguration.Destination && InventoryConfiguration.Destination.COSBucketDestination && InventoryConfiguration.Destination.COSBucketDestination.Encryption) {
                      var Encryption = InventoryConfiguration.Destination.COSBucketDestination.Encryption;
                      if (Object.keys(Encryption).indexOf("SSE-COS") > -1) {
                        Encryption["SSECOS"] = Encryption["SSE-COS"];
                        delete Encryption["SSE-COS"];
                      }
                    }
                  });
                  ListInventoryConfigurationResult.InventoryConfigurations = InventoryConfigurations;
                  util.extend(ListInventoryConfigurationResult, {
                    statusCode: data.statusCode,
                    headers: data.headers
                  });
                  callback(null, ListInventoryConfigurationResult);
                });
              }
              function deleteBucketInventory(params, callback) {
                submitRequest.call(this, {
                  Action: "name/cos:DeleteBucketInventory",
                  method: "DELETE",
                  Bucket: params.Bucket,
                  Region: params.Region,
                  headers: params.Headers,
                  action: "inventory",
                  qs: {
                    id: params["Id"]
                  },
                  tracker: params.tracker
                }, function(err, data) {
                  if (err && err.statusCode === 204) {
                    return callback(null, {
                      statusCode: err.statusCode
                    });
                  } else if (err) {
                    return callback(err);
                  }
                  callback(null, {
                    statusCode: data.statusCode,
                    headers: data.headers
                  });
                });
              }
              function putBucketAccelerate(params, callback) {
                if (!params["AccelerateConfiguration"]) {
                  callback(util.error(new Error("missing param AccelerateConfiguration")));
                  return;
                }
                var configuration = {
                  AccelerateConfiguration: params.AccelerateConfiguration || {}
                };
                var xml = util.json2xml(configuration);
                var headers = {};
                headers["Content-Type"] = "application/xml";
                headers["Content-MD5"] = util.b64(util.md5(xml));
                submitRequest.call(this, {
                  Action: "name/cos:PutBucketAccelerate",
                  method: "PUT",
                  Bucket: params.Bucket,
                  Region: params.Region,
                  body: xml,
                  action: "accelerate",
                  headers,
                  tracker: params.tracker
                }, function(err, data) {
                  if (err)
                    return callback(err);
                  callback(null, {
                    statusCode: data.statusCode,
                    headers: data.headers
                  });
                });
              }
              function getBucketAccelerate(params, callback) {
                submitRequest.call(this, {
                  Action: "name/cos:GetBucketAccelerate",
                  method: "GET",
                  Bucket: params.Bucket,
                  Region: params.Region,
                  action: "accelerate",
                  tracker: params.tracker
                }, function(err, data) {
                  if (!err) {
                    !data.AccelerateConfiguration && (data.AccelerateConfiguration = {});
                  }
                  callback(err, data);
                });
              }
              function putBucketEncryption(params, callback) {
                var conf = params.ServerSideEncryptionConfiguration || {};
                var Rules = conf.Rule || conf.Rules || [];
                var xml = util.json2xml({
                  ServerSideEncryptionConfiguration: {
                    Rule: Rules
                  }
                });
                var headers = params.Headers;
                headers["Content-Type"] = "application/xml";
                headers["Content-MD5"] = util.b64(util.md5(xml));
                submitRequest.call(this, {
                  Action: "name/cos:PutBucketEncryption",
                  method: "PUT",
                  Bucket: params.Bucket,
                  Region: params.Region,
                  body: xml,
                  action: "encryption",
                  headers,
                  tracker: params.tracker
                }, function(err, data) {
                  if (err && err.statusCode === 204) {
                    return callback(null, {
                      statusCode: err.statusCode
                    });
                  } else if (err) {
                    return callback(err);
                  }
                  callback(null, {
                    statusCode: data.statusCode,
                    headers: data.headers
                  });
                });
              }
              function getBucketEncryption(params, callback) {
                submitRequest.call(this, {
                  Action: "name/cos:GetBucketEncryption",
                  method: "GET",
                  Bucket: params.Bucket,
                  Region: params.Region,
                  headers: params.Headers,
                  action: "encryption",
                  tracker: params.tracker
                }, function(err, data) {
                  if (err) {
                    if (err.statusCode === 404 && err.code === "NoSuchEncryptionConfiguration") {
                      var result = {
                        EncryptionConfiguration: {
                          Rules: []
                        },
                        statusCode: err.statusCode
                      };
                      err.headers && (result.headers = err.headers);
                      callback(null, result);
                    } else {
                      callback(err);
                    }
                    return;
                  }
                  var Rules = util.makeArray(data.EncryptionConfiguration && data.EncryptionConfiguration.Rule || []);
                  data.EncryptionConfiguration = {
                    Rules
                  };
                  callback(err, data);
                });
              }
              function deleteBucketEncryption(params, callback) {
                submitRequest.call(this, {
                  Action: "name/cos:DeleteBucketReplication",
                  method: "DELETE",
                  Bucket: params.Bucket,
                  Region: params.Region,
                  headers: params.Headers,
                  action: "encryption",
                  tracker: params.tracker
                }, function(err, data) {
                  if (err && err.statusCode === 204) {
                    return callback(null, {
                      statusCode: err.statusCode
                    });
                  } else if (err) {
                    return callback(err);
                  }
                  callback(null, {
                    statusCode: data.statusCode,
                    headers: data.headers
                  });
                });
              }
              function headObject(params, callback) {
                submitRequest.call(this, {
                  Action: "name/cos:HeadObject",
                  method: "HEAD",
                  Bucket: params.Bucket,
                  Region: params.Region,
                  Key: params.Key,
                  VersionId: params.VersionId,
                  headers: params.Headers,
                  tracker: params.tracker
                }, function(err, data) {
                  if (err) {
                    var statusCode = err.statusCode;
                    if (params.Headers["If-Modified-Since"] && statusCode && statusCode === 304) {
                      return callback(null, {
                        NotModified: true,
                        statusCode
                      });
                    }
                    return callback(err);
                  }
                  data.ETag = util.attr(data.headers, "etag", "");
                  callback(null, data);
                });
              }
              function listObjectVersions(params, callback) {
                var reqParams = {};
                reqParams["prefix"] = params["Prefix"] || "";
                reqParams["delimiter"] = params["Delimiter"];
                reqParams["key-marker"] = params["KeyMarker"];
                reqParams["version-id-marker"] = params["VersionIdMarker"];
                reqParams["max-keys"] = params["MaxKeys"];
                reqParams["encoding-type"] = params["EncodingType"];
                submitRequest.call(this, {
                  Action: "name/cos:GetBucketObjectVersions",
                  ResourceKey: reqParams["prefix"],
                  method: "GET",
                  Bucket: params.Bucket,
                  Region: params.Region,
                  headers: params.Headers,
                  qs: reqParams,
                  action: "versions",
                  tracker: params.tracker
                }, function(err, data) {
                  if (err)
                    return callback(err);
                  var ListVersionsResult = data.ListVersionsResult || {};
                  var DeleteMarkers = ListVersionsResult.DeleteMarker || [];
                  DeleteMarkers = util.isArray(DeleteMarkers) ? DeleteMarkers : [DeleteMarkers];
                  var Versions = ListVersionsResult.Version || [];
                  Versions = util.isArray(Versions) ? Versions : [Versions];
                  var result = util.clone(ListVersionsResult);
                  delete result.DeleteMarker;
                  delete result.Version;
                  util.extend(result, {
                    DeleteMarkers,
                    Versions,
                    statusCode: data.statusCode,
                    headers: data.headers
                  });
                  callback(null, result);
                });
              }
              function getObject(params, callback) {
                if (this.options.ObjectKeySimplifyCheck) {
                  var formatKey = util.simplifyPath(params.Key);
                  if (formatKey === "/") {
                    callback(util.error(new Error("The Getobject Key is illegal")));
                    return;
                  }
                }
                var reqParams = params.Query || {};
                var reqParamsStr = params.QueryString || "";
                var onProgress = util.throttleOnProgress.call(this, 0, params.onProgress);
                var tracker = params.tracker;
                tracker && tracker.setParams({
                  signStartTime: (/* @__PURE__ */ new Date()).getTime()
                });
                reqParams["response-content-type"] = params["ResponseContentType"];
                reqParams["response-content-language"] = params["ResponseContentLanguage"];
                reqParams["response-expires"] = params["ResponseExpires"];
                reqParams["response-cache-control"] = params["ResponseCacheControl"];
                reqParams["response-content-disposition"] = params["ResponseContentDisposition"];
                reqParams["response-content-encoding"] = params["ResponseContentEncoding"];
                submitRequest.call(this, {
                  Action: "name/cos:GetObject",
                  method: "GET",
                  Bucket: params.Bucket,
                  Region: params.Region,
                  Key: params.Key,
                  VersionId: params.VersionId,
                  DataType: params.DataType,
                  headers: params.Headers,
                  qs: reqParams,
                  qsStr: reqParamsStr,
                  rawBody: true,
                  onDownloadProgress: onProgress,
                  tracker
                }, function(err, data) {
                  onProgress(null, true);
                  if (err) {
                    var statusCode = err.statusCode;
                    if (params.Headers["If-Modified-Since"] && statusCode && statusCode === 304) {
                      return callback(null, {
                        NotModified: true
                      });
                    }
                    return callback(err);
                  }
                  callback(null, {
                    Body: data.body,
                    ETag: util.attr(data.headers, "etag", ""),
                    statusCode: data.statusCode,
                    headers: data.headers
                  });
                });
              }
              function putObject(params, callback) {
                var self2 = this;
                var FileSize = params.ContentLength;
                var onProgress = util.throttleOnProgress.call(self2, FileSize, params.onProgress);
                var headers = params.Headers;
                if (!headers["Cache-Control"] && !headers["cache-control"])
                  headers["Cache-Control"] = "";
                if (!headers["Content-Type"] && !headers["content-type"])
                  headers["Content-Type"] = params.Body && params.Body.type || "";
                var needCalcMd5 = params.UploadAddMetaMd5 || self2.options.UploadAddMetaMd5 || self2.options.UploadCheckContentMd5;
                var tracker = params.tracker;
                needCalcMd5 && tracker && tracker.setParams({
                  md5StartTime: (/* @__PURE__ */ new Date()).getTime()
                });
                util.getBodyMd5(needCalcMd5, params.Body, function(md5) {
                  if (md5) {
                    tracker && tracker.setParams({
                      md5EndTime: (/* @__PURE__ */ new Date()).getTime()
                    });
                    if (self2.options.UploadCheckContentMd5)
                      headers["Content-MD5"] = util.b64(md5);
                    if (params.UploadAddMetaMd5 || self2.options.UploadAddMetaMd5)
                      headers["x-cos-meta-md5"] = md5;
                  }
                  if (params.ContentLength !== void 0)
                    headers["Content-Length"] = params.ContentLength;
                  onProgress(null, true);
                  submitRequest.call(self2, {
                    Action: "name/cos:PutObject",
                    TaskId: params.TaskId,
                    method: "PUT",
                    Bucket: params.Bucket,
                    Region: params.Region,
                    Key: params.Key,
                    headers: params.Headers,
                    qs: params.Query,
                    body: params.Body,
                    onProgress,
                    tracker
                  }, function(err, data) {
                    if (err) {
                      onProgress(null, true);
                      return callback(err);
                    }
                    onProgress({
                      loaded: FileSize,
                      total: FileSize
                    }, true);
                    var url = getUrl({
                      ForcePathStyle: self2.options.ForcePathStyle,
                      protocol: self2.options.Protocol,
                      domain: self2.options.Domain,
                      bucket: params.Bucket,
                      region: !self2.options.UseAccelerate ? params.Region : "accelerate",
                      object: params.Key
                    });
                    url = url.substr(url.indexOf("://") + 3);
                    data.Location = url;
                    data.ETag = util.attr(data.headers, "etag", "");
                    callback(null, data);
                  });
                }, params.onHashProgress);
              }
              function deleteObject(params, callback) {
                submitRequest.call(this, {
                  Action: "name/cos:DeleteObject",
                  method: "DELETE",
                  Bucket: params.Bucket,
                  Region: params.Region,
                  Key: params.Key,
                  headers: params.Headers,
                  VersionId: params.VersionId,
                  action: params.Recursive ? "recursive" : "",
                  tracker: params.tracker
                }, function(err, data) {
                  if (err) {
                    var statusCode = err.statusCode;
                    if (statusCode && statusCode === 404) {
                      return callback(null, {
                        BucketNotFound: true,
                        statusCode
                      });
                    } else {
                      return callback(err);
                    }
                  }
                  callback(null, {
                    statusCode: data.statusCode,
                    headers: data.headers
                  });
                });
              }
              function getObjectAcl(params, callback) {
                var reqParams = {};
                if (params.VersionId) {
                  reqParams.versionId = params.VersionId;
                }
                submitRequest.call(this, {
                  Action: "name/cos:GetObjectACL",
                  method: "GET",
                  Bucket: params.Bucket,
                  Region: params.Region,
                  Key: params.Key,
                  headers: params.Headers,
                  qs: reqParams,
                  action: "acl",
                  tracker: params.tracker
                }, function(err, data) {
                  if (err)
                    return callback(err);
                  var AccessControlPolicy = data.AccessControlPolicy || {};
                  var Owner = AccessControlPolicy.Owner || {};
                  var Grant = AccessControlPolicy.AccessControlList && AccessControlPolicy.AccessControlList.Grant || [];
                  Grant = util.isArray(Grant) ? Grant : [Grant];
                  var result = decodeAcl(AccessControlPolicy);
                  delete result.GrantWrite;
                  if (data.headers && data.headers["x-cos-acl"]) {
                    result.ACL = data.headers["x-cos-acl"];
                  }
                  result = util.extend(result, {
                    Owner,
                    Grants: Grant,
                    statusCode: data.statusCode,
                    headers: data.headers
                  });
                  callback(null, result);
                });
              }
              function putObjectAcl(params, callback) {
                var headers = params.Headers;
                var xml = "";
                if (params["AccessControlPolicy"]) {
                  var AccessControlPolicy = util.clone(params["AccessControlPolicy"] || {});
                  var Grants = AccessControlPolicy.Grants || AccessControlPolicy.Grant;
                  Grants = util.isArray(Grants) ? Grants : [Grants];
                  delete AccessControlPolicy.Grant;
                  delete AccessControlPolicy.Grants;
                  AccessControlPolicy.AccessControlList = {
                    Grant: Grants
                  };
                  xml = util.json2xml({
                    AccessControlPolicy
                  });
                  headers["Content-Type"] = "application/xml";
                  headers["Content-MD5"] = util.b64(util.md5(xml));
                }
                util.each(headers, function(val2, key) {
                  if (key.indexOf("x-cos-grant-") === 0) {
                    headers[key] = uniqGrant(headers[key]);
                  }
                });
                submitRequest.call(this, {
                  Action: "name/cos:PutObjectACL",
                  method: "PUT",
                  Bucket: params.Bucket,
                  Region: params.Region,
                  Key: params.Key,
                  action: "acl",
                  headers,
                  body: xml,
                  tracker: params.tracker
                }, function(err, data) {
                  if (err)
                    return callback(err);
                  callback(null, {
                    statusCode: data.statusCode,
                    headers: data.headers
                  });
                });
              }
              function optionsObject(params, callback) {
                var headers = params.Headers;
                headers["Origin"] = params["Origin"];
                headers["Access-Control-Request-Method"] = params["AccessControlRequestMethod"];
                headers["Access-Control-Request-Headers"] = params["AccessControlRequestHeaders"];
                submitRequest.call(this, {
                  Action: "name/cos:OptionsObject",
                  method: "OPTIONS",
                  Bucket: params.Bucket,
                  Region: params.Region,
                  Key: params.Key,
                  headers,
                  tracker: params.tracker
                }, function(err, data) {
                  if (err) {
                    if (err.statusCode && err.statusCode === 403) {
                      return callback(null, {
                        OptionsForbidden: true,
                        statusCode: err.statusCode
                      });
                    }
                    return callback(err);
                  }
                  var headers2 = data.headers || {};
                  callback(null, {
                    AccessControlAllowOrigin: headers2["access-control-allow-origin"],
                    AccessControlAllowMethods: headers2["access-control-allow-methods"],
                    AccessControlAllowHeaders: headers2["access-control-allow-headers"],
                    AccessControlExposeHeaders: headers2["access-control-expose-headers"],
                    AccessControlMaxAge: headers2["access-control-max-age"],
                    statusCode: data.statusCode,
                    headers: data.headers
                  });
                });
              }
              function putObjectCopy(params, callback) {
                var self2 = this;
                var headers = params.Headers;
                if (!headers["Cache-Control"] && !headers["cache-control"])
                  headers["Cache-Control"] = "";
                var CopySource = params.CopySource || "";
                var m = util.getSourceParams.call(this, CopySource);
                if (!m) {
                  callback(util.error(new Error("CopySource format error")));
                  return;
                }
                var SourceBucket = m.Bucket;
                var SourceRegion = m.Region;
                var SourceKey = decodeURIComponent(m.Key);
                submitRequest.call(this, {
                  Scope: [{
                    action: "name/cos:GetObject",
                    bucket: SourceBucket,
                    region: SourceRegion,
                    prefix: SourceKey
                  }, {
                    action: "name/cos:PutObject",
                    bucket: params.Bucket,
                    region: params.Region,
                    prefix: params.Key
                  }],
                  method: "PUT",
                  Bucket: params.Bucket,
                  Region: params.Region,
                  Key: params.Key,
                  VersionId: params.VersionId,
                  headers: params.Headers,
                  tracker: params.tracker
                }, function(err, data) {
                  if (err)
                    return callback(err);
                  var result = util.clone(data.CopyObjectResult || {});
                  var url = getUrl({
                    ForcePathStyle: self2.options.ForcePathStyle,
                    protocol: self2.options.Protocol,
                    domain: self2.options.Domain,
                    bucket: params.Bucket,
                    region: params.Region,
                    object: params.Key,
                    isLocation: true
                  });
                  util.extend(result, {
                    Location: url,
                    statusCode: data.statusCode,
                    headers: data.headers
                  });
                  callback(null, result);
                });
              }
              function uploadPartCopy(params, callback) {
                var CopySource = params.CopySource || "";
                var m = util.getSourceParams.call(this, CopySource);
                if (!m) {
                  callback(util.error(new Error("CopySource format error")));
                  return;
                }
                var SourceBucket = m.Bucket;
                var SourceRegion = m.Region;
                var SourceKey = decodeURIComponent(m.Key);
                submitRequest.call(this, {
                  Scope: [{
                    action: "name/cos:GetObject",
                    bucket: SourceBucket,
                    region: SourceRegion,
                    prefix: SourceKey
                  }, {
                    action: "name/cos:PutObject",
                    bucket: params.Bucket,
                    region: params.Region,
                    prefix: params.Key
                  }],
                  method: "PUT",
                  Bucket: params.Bucket,
                  Region: params.Region,
                  Key: params.Key,
                  VersionId: params.VersionId,
                  qs: {
                    partNumber: params["PartNumber"],
                    uploadId: params["UploadId"]
                  },
                  headers: params.Headers,
                  tracker: params.tracker
                }, function(err, data) {
                  if (err)
                    return callback(err);
                  var result = util.clone(data.CopyPartResult || {});
                  util.extend(result, {
                    statusCode: data.statusCode,
                    headers: data.headers
                  });
                  callback(null, result);
                });
              }
              function deleteMultipleObject(params, callback) {
                var Objects = params.Objects || [];
                var Quiet = params.Quiet;
                Objects = util.isArray(Objects) ? Objects : [Objects];
                var xml = util.json2xml({
                  Delete: {
                    Object: Objects,
                    Quiet: Quiet || false
                  }
                });
                var headers = params.Headers;
                headers["Content-Type"] = "application/xml";
                headers["Content-MD5"] = util.b64(util.md5(xml));
                var Scope = util.map(Objects, function(v) {
                  return {
                    action: "name/cos:DeleteObject",
                    bucket: params.Bucket,
                    region: params.Region,
                    prefix: v.Key
                  };
                });
                submitRequest.call(this, {
                  Scope,
                  method: "POST",
                  Bucket: params.Bucket,
                  Region: params.Region,
                  body: xml,
                  action: "delete",
                  headers,
                  tracker: params.tracker
                }, function(err, data) {
                  if (err)
                    return callback(err);
                  var DeleteResult = data.DeleteResult || {};
                  var Deleted = DeleteResult.Deleted || [];
                  var Errors = DeleteResult.Error || [];
                  Deleted = util.isArray(Deleted) ? Deleted : [Deleted];
                  Errors = util.isArray(Errors) ? Errors : [Errors];
                  var result = util.clone(DeleteResult);
                  util.extend(result, {
                    Error: Errors,
                    Deleted,
                    statusCode: data.statusCode,
                    headers: data.headers
                  });
                  callback(null, result);
                });
              }
              function restoreObject(params, callback) {
                var headers = params.Headers;
                if (!params["RestoreRequest"]) {
                  callback(util.error(new Error("missing param RestoreRequest")));
                  return;
                }
                var RestoreRequest = params.RestoreRequest || {};
                var xml = util.json2xml({
                  RestoreRequest
                });
                headers["Content-Type"] = "application/xml";
                headers["Content-MD5"] = util.b64(util.md5(xml));
                submitRequest.call(this, {
                  Action: "name/cos:RestoreObject",
                  method: "POST",
                  Bucket: params.Bucket,
                  Region: params.Region,
                  Key: params.Key,
                  VersionId: params.VersionId,
                  body: xml,
                  action: "restore",
                  headers,
                  tracker: params.tracker
                }, callback);
              }
              function putObjectTagging(params, callback) {
                var Tagging = params["Tagging"] || {};
                var Tags = Tagging.TagSet || Tagging.Tags || params["Tags"] || [];
                Tags = util.clone(util.isArray(Tags) ? Tags : [Tags]);
                var xml = util.json2xml({
                  Tagging: {
                    TagSet: {
                      Tag: Tags
                    }
                  }
                });
                var headers = params.Headers;
                headers["Content-Type"] = "application/xml";
                headers["Content-MD5"] = util.b64(util.md5(xml));
                submitRequest.call(this, {
                  Action: "name/cos:PutObjectTagging",
                  method: "PUT",
                  Bucket: params.Bucket,
                  Key: params.Key,
                  Region: params.Region,
                  body: xml,
                  action: "tagging",
                  headers,
                  VersionId: params.VersionId,
                  tracker: params.tracker
                }, function(err, data) {
                  if (err && err.statusCode === 204) {
                    return callback(null, {
                      statusCode: err.statusCode
                    });
                  } else if (err) {
                    return callback(err);
                  }
                  callback(null, {
                    statusCode: data.statusCode,
                    headers: data.headers
                  });
                });
              }
              function getObjectTagging(params, callback) {
                submitRequest.call(this, {
                  Action: "name/cos:GetObjectTagging",
                  method: "GET",
                  Key: params.Key,
                  Bucket: params.Bucket,
                  Region: params.Region,
                  headers: params.Headers,
                  action: "tagging",
                  VersionId: params.VersionId,
                  tracker: params.tracker
                }, function(err, data) {
                  if (err) {
                    if (err.statusCode === 404 && err.error && (err.error === "Not Found" || err.error.Code === "NoSuchTagSet")) {
                      var result = {
                        Tags: [],
                        statusCode: err.statusCode
                      };
                      err.headers && (result.headers = err.headers);
                      callback(null, result);
                    } else {
                      callback(err);
                    }
                    return;
                  }
                  var Tags = [];
                  try {
                    Tags = data.Tagging.TagSet.Tag || [];
                  } catch (e) {
                  }
                  Tags = util.clone(util.isArray(Tags) ? Tags : [Tags]);
                  callback(null, {
                    Tags,
                    statusCode: data.statusCode,
                    headers: data.headers
                  });
                });
              }
              function deleteObjectTagging(params, callback) {
                submitRequest.call(this, {
                  Action: "name/cos:DeleteObjectTagging",
                  method: "DELETE",
                  Bucket: params.Bucket,
                  Region: params.Region,
                  Key: params.Key,
                  headers: params.Headers,
                  action: "tagging",
                  VersionId: params.VersionId,
                  tracker: params.tracker
                }, function(err, data) {
                  if (err && err.statusCode === 204) {
                    return callback(null, {
                      statusCode: err.statusCode
                    });
                  } else if (err) {
                    return callback(err);
                  }
                  callback(null, {
                    statusCode: data.statusCode,
                    headers: data.headers
                  });
                });
              }
              function selectObjectContent(params, callback) {
                var SelectType = params["SelectType"];
                if (!SelectType)
                  return callback(util.error(new Error("missing param SelectType")));
                var SelectRequest = params["SelectRequest"] || {};
                var xml = util.json2xml({
                  SelectRequest
                });
                var headers = params.Headers;
                headers["Content-Type"] = "application/xml";
                headers["Content-MD5"] = util.b64(util.md5(xml));
                submitRequest.call(this, {
                  Action: "name/cos:GetObject",
                  method: "POST",
                  Bucket: params.Bucket,
                  Region: params.Region,
                  Key: params.Key,
                  headers: params.Headers,
                  action: "select",
                  qs: {
                    "select-type": params["SelectType"]
                  },
                  VersionId: params.VersionId,
                  body: xml,
                  DataType: "arraybuffer",
                  rawBody: true,
                  tracker: params.tracker
                }, function(err, data) {
                  if (err && err.statusCode === 204) {
                    return callback(null, {
                      statusCode: err.statusCode
                    });
                  } else if (err) {
                    return callback(err);
                  }
                  var result = util.parseSelectPayload(data.body);
                  callback(null, {
                    statusCode: data.statusCode,
                    headers: data.headers,
                    Body: result.body,
                    Payload: result.payload
                  });
                });
              }
              function multipartInit(params, callback) {
                var self2 = this;
                var headers = params.Headers;
                var tracker = params.tracker;
                if (!headers["Cache-Control"] && !headers["cache-control"])
                  headers["Cache-Control"] = "";
                if (!headers["Content-Type"] && !headers["content-type"])
                  headers["Content-Type"] = params.Body && params.Body.type || "";
                var needCalcMd5 = params.Body && (params.UploadAddMetaMd5 || self2.options.UploadAddMetaMd5);
                needCalcMd5 && tracker && tracker.setParams({
                  md5StartTime: (/* @__PURE__ */ new Date()).getTime()
                });
                util.getBodyMd5(needCalcMd5, params.Body, function(md5) {
                  if (md5)
                    params.Headers["x-cos-meta-md5"] = md5;
                  needCalcMd5 && tracker && tracker.setParams({
                    md5EndTime: (/* @__PURE__ */ new Date()).getTime()
                  });
                  submitRequest.call(self2, {
                    Action: "name/cos:InitiateMultipartUpload",
                    method: "POST",
                    Bucket: params.Bucket,
                    Region: params.Region,
                    Key: params.Key,
                    action: "uploads",
                    headers: params.Headers,
                    qs: params.Query,
                    tracker
                  }, function(err, data) {
                    if (err) {
                      tracker && tracker.parent && tracker.parent.setParams({
                        errorNode: "multipartInit"
                      });
                      return callback(err);
                    }
                    data = util.clone(data || {});
                    if (data && data.InitiateMultipartUploadResult) {
                      return callback(null, util.extend(data.InitiateMultipartUploadResult, {
                        statusCode: data.statusCode,
                        headers: data.headers
                      }));
                    }
                    callback(null, data);
                  });
                }, params.onHashProgress);
              }
              function multipartUpload(params, callback) {
                var self2 = this;
                util.getFileSize("multipartUpload", params, function() {
                  var tracker = params.tracker;
                  var needCalcMd5 = self2.options.UploadCheckContentMd5;
                  needCalcMd5 && tracker && tracker.setParams({
                    md5StartTime: (/* @__PURE__ */ new Date()).getTime()
                  });
                  util.getBodyMd5(needCalcMd5, params.Body, function(md5) {
                    if (md5)
                      params.Headers["Content-MD5"] = util.b64(md5);
                    needCalcMd5 && tracker && tracker.setParams({
                      md5EndTime: (/* @__PURE__ */ new Date()).getTime()
                    });
                    tracker && tracker.setParams({
                      partNumber: params.PartNumber
                    });
                    submitRequest.call(self2, {
                      Action: "name/cos:UploadPart",
                      TaskId: params.TaskId,
                      method: "PUT",
                      Bucket: params.Bucket,
                      Region: params.Region,
                      Key: params.Key,
                      qs: {
                        partNumber: params["PartNumber"],
                        uploadId: params["UploadId"]
                      },
                      headers: params.Headers,
                      onProgress: params.onProgress,
                      body: params.Body || null,
                      tracker
                    }, function(err, data) {
                      if (err) {
                        tracker && tracker.parent && tracker.parent.setParams({
                          errorNode: "multipartUpload"
                        });
                        return callback(err);
                      }
                      callback(null, {
                        ETag: util.attr(data.headers, "etag", ""),
                        statusCode: data.statusCode,
                        headers: data.headers
                      });
                    });
                  });
                });
              }
              function multipartComplete(params, callback) {
                var self2 = this;
                var UploadId = params.UploadId;
                var Parts = params["Parts"];
                var tracker = params.tracker;
                for (var i = 0, len = Parts.length; i < len; i++) {
                  if (Parts[i]["ETag"] && Parts[i]["ETag"].indexOf('"') === 0) {
                    continue;
                  }
                  Parts[i]["ETag"] = '"' + Parts[i]["ETag"] + '"';
                }
                var xml = util.json2xml({
                  CompleteMultipartUpload: {
                    Part: Parts
                  }
                });
                xml = xml.replace(/\n\s*/g, "");
                var headers = params.Headers;
                headers["Content-Type"] = "application/xml";
                headers["Content-MD5"] = util.b64(util.md5(xml));
                submitRequest.call(this, {
                  Action: "name/cos:CompleteMultipartUpload",
                  method: "POST",
                  Bucket: params.Bucket,
                  Region: params.Region,
                  Key: params.Key,
                  qs: {
                    uploadId: UploadId
                  },
                  body: xml,
                  headers,
                  tracker
                }, function(err, data) {
                  if (err) {
                    tracker && tracker.parent && tracker.parent.setParams({
                      errorNode: "multipartComplete"
                    });
                    return callback(err);
                  }
                  var url = getUrl({
                    ForcePathStyle: self2.options.ForcePathStyle,
                    protocol: self2.options.Protocol,
                    domain: self2.options.Domain,
                    bucket: params.Bucket,
                    region: params.Region,
                    object: params.Key,
                    isLocation: true
                  });
                  var res = data.CompleteMultipartUploadResult || {};
                  if (res.ProcessResults) {
                    res.UploadResult = {
                      OriginalInfo: {
                        Key: res.Key,
                        Location: url,
                        ETag: res.ETag,
                        ImageInfo: res.ImageInfo
                      },
                      ProcessResults: res.ProcessResults
                    };
                    delete res.ImageInfo;
                    delete res.ProcessResults;
                  }
                  if (res.CallbackResult) {
                    var callbackResult = res.CallbackResult;
                    if (callbackResult.Status === "200" && callbackResult.CallbackBody) {
                      try {
                        res.CallbackBody = JSON.parse(util.decodeBase64(callbackResult.CallbackBody));
                      } catch (e) {
                        res.CallbackBody = {};
                      }
                    } else {
                      res.CallbackError = callbackResult.Error || {};
                    }
                    delete res.CallbackResult;
                  }
                  if (res.ReturnBodyResult) {
                    var returnBodyResult = res.ReturnBodyResult;
                    if (returnBodyResult.Status === "200" && returnBodyResult.ReturnBody) {
                      try {
                        res.ReturnBody = JSON.parse(util.decodeBase64(returnBodyResult.ReturnBody));
                      } catch (e) {
                        res.ReturnBody = {};
                      }
                    } else {
                      res.ReturnError = {
                        Code: returnBodyResult.Code,
                        Message: returnBodyResult.Message,
                        Status: returnBodyResult.Status
                      };
                    }
                    delete res.ReturnBodyResult;
                  }
                  var result = util.extend(res, {
                    Location: url,
                    statusCode: data.statusCode,
                    headers: data.headers
                  });
                  callback(null, result);
                });
              }
              function multipartList(params, callback) {
                var reqParams = {};
                reqParams["delimiter"] = params["Delimiter"];
                reqParams["encoding-type"] = params["EncodingType"];
                reqParams["prefix"] = params["Prefix"] || "";
                reqParams["max-uploads"] = params["MaxUploads"];
                reqParams["key-marker"] = params["KeyMarker"];
                reqParams["upload-id-marker"] = params["UploadIdMarker"];
                reqParams = util.clearKey(reqParams);
                var tracker = params.tracker;
                tracker && tracker.setParams({
                  signStartTime: (/* @__PURE__ */ new Date()).getTime()
                });
                submitRequest.call(this, {
                  Action: "name/cos:ListMultipartUploads",
                  ResourceKey: reqParams["prefix"],
                  method: "GET",
                  Bucket: params.Bucket,
                  Region: params.Region,
                  headers: params.Headers,
                  qs: reqParams,
                  action: "uploads",
                  tracker
                }, function(err, data) {
                  if (err) {
                    tracker && tracker.parent && tracker.parent.setParams({
                      errorNode: "multipartList"
                    });
                    return callback(err);
                  }
                  if (data && data.ListMultipartUploadsResult) {
                    var Upload = data.ListMultipartUploadsResult.Upload || [];
                    Upload = util.isArray(Upload) ? Upload : [Upload];
                    data.ListMultipartUploadsResult.Upload = Upload;
                  }
                  var result = util.clone(data.ListMultipartUploadsResult || {});
                  util.extend(result, {
                    statusCode: data.statusCode,
                    headers: data.headers
                  });
                  callback(null, result);
                });
              }
              function multipartListPart(params, callback) {
                var reqParams = {};
                var tracker = params.tracker;
                reqParams["uploadId"] = params["UploadId"];
                reqParams["encoding-type"] = params["EncodingType"];
                reqParams["max-parts"] = params["MaxParts"];
                reqParams["part-number-marker"] = params["PartNumberMarker"];
                submitRequest.call(this, {
                  Action: "name/cos:ListParts",
                  method: "GET",
                  Bucket: params.Bucket,
                  Region: params.Region,
                  Key: params.Key,
                  headers: params.Headers,
                  qs: reqParams,
                  tracker
                }, function(err, data) {
                  if (err) {
                    tracker && tracker.parent && tracker.parent.setParams({
                      errorNode: "multipartListPart"
                    });
                    return callback(err);
                  }
                  var ListPartsResult = data.ListPartsResult || {};
                  var Part = ListPartsResult.Part || [];
                  Part = util.isArray(Part) ? Part : [Part];
                  ListPartsResult.Part = Part;
                  var result = util.clone(ListPartsResult);
                  util.extend(result, {
                    statusCode: data.statusCode,
                    headers: data.headers
                  });
                  callback(null, result);
                });
              }
              function multipartAbort(params, callback) {
                var reqParams = {};
                reqParams["uploadId"] = params["UploadId"];
                submitRequest.call(this, {
                  Action: "name/cos:AbortMultipartUpload",
                  method: "DELETE",
                  Bucket: params.Bucket,
                  Region: params.Region,
                  Key: params.Key,
                  headers: params.Headers,
                  qs: reqParams,
                  tracker: params.tracker
                }, function(err, data) {
                  if (err)
                    return callback(err);
                  callback(null, {
                    statusCode: data.statusCode,
                    headers: data.headers
                  });
                });
              }
              function request(params, callback) {
                submitRequest.call(this, {
                  method: params.Method,
                  Bucket: params.Bucket,
                  Region: params.Region,
                  Key: params.Key,
                  action: params.Action,
                  headers: params.Headers,
                  qs: params.Query,
                  body: params.Body,
                  Url: params.Url,
                  rawBody: params.RawBody,
                  DataType: params.DataType,
                  tracker: params.tracker
                }, function(err, data) {
                  if (err)
                    return callback(err);
                  if (data && data.body) {
                    data.Body = data.body;
                    delete data.body;
                  }
                  callback(err, data);
                });
              }
              function appendObject(params, callback) {
                var headers = params.Headers;
                if (!headers["Cache-Control"] && !headers["cache-control"])
                  headers["Cache-Control"] = "";
                if (!headers["Content-Type"] && !headers["content-type"])
                  headers["Content-Type"] = params.Body && params.Body.type || "";
                submitRequest.call(this, {
                  Action: "name/cos:AppendObject",
                  method: "POST",
                  Bucket: params.Bucket,
                  Region: params.Region,
                  action: "append",
                  Key: params.Key,
                  body: params.Body,
                  qs: {
                    position: params.Position
                  },
                  headers: params.Headers,
                  tracker: params.tracker
                }, function(err, data) {
                  if (err)
                    return callback(err);
                  callback(null, data);
                });
              }
              function getAuth(params) {
                var self2 = this;
                return util.getAuth({
                  SecretId: params.SecretId || this.options.SecretId || "",
                  SecretKey: params.SecretKey || this.options.SecretKey || "",
                  Bucket: params.Bucket,
                  Region: params.Region,
                  Method: params.Method,
                  Key: params.Key,
                  Query: params.Query,
                  Headers: params.Headers,
                  Expires: params.Expires,
                  UseRawKey: self2.options.UseRawKey,
                  SystemClockOffset: self2.options.SystemClockOffset
                });
              }
              function getObjectUrl(params, callback) {
                var self2 = this;
                var useAccelerate = params.UseAccelerate === void 0 ? self2.options.UseAccelerate : params.UseAccelerate;
                var url = getUrl({
                  ForcePathStyle: self2.options.ForcePathStyle,
                  protocol: params.Protocol || self2.options.Protocol,
                  domain: params.Domain || self2.options.Domain,
                  bucket: params.Bucket,
                  region: useAccelerate ? "accelerate" : params.Region,
                  object: params.Key
                });
                var queryParamsStr = "";
                if (params.Query) {
                  queryParamsStr += util.obj2str(params.Query);
                }
                if (params.QueryString) {
                  queryParamsStr += (queryParamsStr ? "&" : "") + params.QueryString;
                }
                var syncUrl = url;
                if (params.Sign !== void 0 && !params.Sign) {
                  queryParamsStr && (syncUrl += "?" + queryParamsStr);
                  callback(null, {
                    Url: syncUrl
                  });
                  return syncUrl;
                }
                var SignHost = getSignHost.call(this, {
                  Bucket: params.Bucket,
                  Region: params.Region,
                  UseAccelerate: params.UseAccelerate,
                  Url: url
                });
                var AuthData = getAuthorizationAsync.call(this, {
                  Action: (params.Method || "").toUpperCase() === "PUT" ? "name/cos:PutObject" : "name/cos:GetObject",
                  Bucket: params.Bucket || "",
                  Region: params.Region || "",
                  Method: params.Method || "get",
                  Key: params.Key,
                  Expires: params.Expires,
                  Headers: params.Headers,
                  Query: params.Query,
                  SignHost,
                  ForceSignHost: params.ForceSignHost === false ? false : self2.options.ForceSignHost
                  // getObjectUrl支持传参ForceSignHost
                }, function(err, AuthData2) {
                  if (!callback)
                    return;
                  if (err) {
                    callback(err);
                    return;
                  }
                  var replaceUrlParamList = function replaceUrlParamList2(url2) {
                    var urlParams = url2.match(/q-url-param-list.*?(?=&)/g)[0];
                    var encodedParams = "q-url-param-list=" + encodeURIComponent(urlParams.replace(/q-url-param-list=/, "")).toLowerCase();
                    var reg = new RegExp(urlParams, "g");
                    var replacedUrl = url2.replace(reg, encodedParams);
                    return replacedUrl;
                  };
                  var signUrl = url;
                  signUrl += "?" + (AuthData2.Authorization.indexOf("q-signature") > -1 ? replaceUrlParamList(AuthData2.Authorization) : "sign=" + encodeURIComponent(AuthData2.Authorization));
                  AuthData2.SecurityToken && (signUrl += "&x-cos-security-token=" + AuthData2.SecurityToken);
                  AuthData2.ClientIP && (signUrl += "&clientIP=" + AuthData2.ClientIP);
                  AuthData2.ClientUA && (signUrl += "&clientUA=" + AuthData2.ClientUA);
                  AuthData2.Token && (signUrl += "&token=" + AuthData2.Token);
                  queryParamsStr && (signUrl += "&" + queryParamsStr);
                  setTimeout(function() {
                    callback(null, {
                      Url: signUrl
                    });
                  });
                });
                if (AuthData) {
                  syncUrl += "?" + AuthData.Authorization + (AuthData.SecurityToken ? "&x-cos-security-token=" + AuthData.SecurityToken : "");
                  queryParamsStr && (syncUrl += "&" + queryParamsStr);
                } else {
                  queryParamsStr && (syncUrl += "?" + queryParamsStr);
                }
                return syncUrl;
              }
              function decodeAcl(AccessControlPolicy) {
                var result = {
                  GrantFullControl: [],
                  GrantWrite: [],
                  GrantRead: [],
                  GrantReadAcp: [],
                  GrantWriteAcp: [],
                  ACL: ""
                };
                var GrantMap = {
                  FULL_CONTROL: "GrantFullControl",
                  WRITE: "GrantWrite",
                  READ: "GrantRead",
                  READ_ACP: "GrantReadAcp",
                  WRITE_ACP: "GrantWriteAcp"
                };
                var AccessControlList = AccessControlPolicy && AccessControlPolicy.AccessControlList || {};
                var Grant = AccessControlList.Grant;
                if (Grant) {
                  Grant = util.isArray(Grant) ? Grant : [Grant];
                }
                var PublicAcl = {
                  READ: 0,
                  WRITE: 0,
                  FULL_CONTROL: 0
                };
                Grant && Grant.length && util.each(Grant, function(item) {
                  var uriMatch = item.Grantee.URI && item.Grantee.URI.endsWith("/groups/global/AllUsers");
                  if (item.Grantee.ID === "qcs::cam::anyone:anyone" || uriMatch) {
                    PublicAcl[item.Permission] = 1;
                  } else if (item.Grantee.ID !== AccessControlPolicy.Owner.ID) {
                    result[GrantMap[item.Permission]].push('id="' + item.Grantee.ID + '"');
                  }
                });
                if (PublicAcl.FULL_CONTROL || PublicAcl.WRITE && PublicAcl.READ) {
                  result.ACL = "public-read-write";
                } else if (PublicAcl.READ) {
                  result.ACL = "public-read";
                } else {
                  result.ACL = "private";
                }
                util.each(GrantMap, function(item) {
                  result[item] = uniqGrant(result[item].join(","));
                });
                return result;
              }
              function uniqGrant(str) {
                var arr = str.split(",");
                var exist = {};
                var i, item;
                for (i = 0; i < arr.length; ) {
                  item = arr[i].trim();
                  if (exist[item]) {
                    arr.splice(i, 1);
                  } else {
                    exist[item] = true;
                    arr[i] = item;
                    i++;
                  }
                }
                return arr.join(",");
              }
              function getUrl(params) {
                var region = params.region || "";
                var longBucket = params.bucket || "";
                var shortBucket = longBucket.substr(0, longBucket.lastIndexOf("-"));
                var appId = longBucket.substr(longBucket.lastIndexOf("-") + 1);
                var domain = params.domain;
                var object = params.object;
                if (typeof domain === "function") {
                  domain = domain({
                    Bucket: longBucket,
                    Region: region
                  });
                }
                if (["http", "https"].includes(params.protocol)) {
                  params.protocol = params.protocol + ":";
                }
                var protocol = params.protocol || (util.isBrowser && (typeof location === "undefined" ? "undefined" : _typeof(location)) === "object" && location.protocol === "http:" ? "http:" : "https:");
                if (!domain) {
                  if (["cn-south", "cn-south-2", "cn-north", "cn-east", "cn-southwest", "sg"].indexOf(region) > -1) {
                    domain = "{Region}.myqcloud.com";
                  } else {
                    domain = "cos.{Region}.myqcloud.com";
                  }
                  if (!params.ForcePathStyle) {
                    domain = "{Bucket}." + domain;
                  }
                }
                domain = domain.replace(/\{\{AppId\}\}/gi, appId).replace(/\{\{Bucket\}\}/gi, shortBucket).replace(/\{\{Region\}\}/gi, region).replace(/\{\{.*?\}\}/gi, "");
                domain = domain.replace(/\{AppId\}/gi, appId).replace(/\{BucketName\}/gi, shortBucket).replace(/\{Bucket\}/gi, longBucket).replace(/\{Region\}/gi, region).replace(/\{.*?\}/gi, "");
                if (!/^[a-zA-Z]+:\/\//.test(domain)) {
                  domain = protocol + "//" + domain;
                }
                if (domain.slice(-1) === "/") {
                  domain = domain.slice(0, -1);
                }
                var url = domain;
                if (params.ForcePathStyle) {
                  url += "/" + longBucket;
                }
                url += "/";
                if (object) {
                  url += util.camSafeUrlEncode(object).replace(/%2F/g, "/");
                }
                if (params.isLocation) {
                  url = url.replace(/^https?:\/\//, "");
                }
                return url;
              }
              var getSignHost = function getSignHost2(opt) {
                if (!opt.Bucket || !opt.Region)
                  return "";
                var useAccelerate = opt.UseAccelerate === void 0 ? this.options.UseAccelerate : opt.UseAccelerate;
                var url = opt.Url || getUrl({
                  ForcePathStyle: this.options.ForcePathStyle,
                  protocol: this.options.Protocol,
                  domain: this.options.Domain,
                  bucket: opt.Bucket,
                  region: useAccelerate ? "accelerate" : opt.Region
                });
                var urlHost = url.replace(/^https?:\/\/([^/]+)(\/.*)?$/, "$1");
                return urlHost;
              };
              function getAuthorizationAsync(params, callback) {
                var headers = util.clone(params.Headers);
                var headerHost = "";
                util.each(headers, function(v, k) {
                  (v === "" || ["content-type", "cache-control", "expires"].indexOf(k.toLowerCase()) > -1) && delete headers[k];
                  if (k.toLowerCase() === "host")
                    headerHost = v;
                });
                var forceSignHost = params.ForceSignHost === false ? false : true;
                if (!headerHost && params.SignHost && forceSignHost)
                  headers.Host = params.SignHost;
                var cbDone = false;
                var cb = function cb2(err, AuthData) {
                  if (cbDone)
                    return;
                  cbDone = true;
                  if (AuthData && AuthData.XCosSecurityToken && !AuthData.SecurityToken) {
                    AuthData = util.clone(AuthData);
                    AuthData.SecurityToken = AuthData.XCosSecurityToken;
                    delete AuthData.XCosSecurityToken;
                  }
                  callback && callback(err, AuthData);
                };
                var self2 = this;
                var Bucket = params.Bucket || "";
                var Region = params.Region || "";
                var KeyName = params.Key || "";
                if (self2.options.ForcePathStyle && Bucket) {
                  KeyName = Bucket + "/" + KeyName;
                }
                var Pathname = "/" + KeyName;
                var StsData = {};
                var Scope = params.Scope;
                if (!Scope) {
                  var Action = params.Action || "";
                  var ResourceKey = params.ResourceKey || params.Key || "";
                  Scope = params.Scope || [{
                    action: Action,
                    bucket: Bucket,
                    region: Region,
                    prefix: ResourceKey
                  }];
                }
                var ScopeKey = util.md5(JSON.stringify(Scope));
                self2._StsCache = self2._StsCache || [];
                (function() {
                  var i, AuthData;
                  for (i = self2._StsCache.length - 1; i >= 0; i--) {
                    AuthData = self2._StsCache[i];
                    var compareTime = Math.round(util.getSkewTime(self2.options.SystemClockOffset) / 1e3) + 30;
                    if (AuthData.StartTime && compareTime < AuthData.StartTime || compareTime >= AuthData.ExpiredTime) {
                      self2._StsCache.splice(i, 1);
                      continue;
                    }
                    if (!AuthData.ScopeLimit || AuthData.ScopeLimit && AuthData.ScopeKey === ScopeKey) {
                      StsData = AuthData;
                      break;
                    }
                  }
                })();
                var calcAuthByTmpKey = function calcAuthByTmpKey2() {
                  var KeyTime = "";
                  if (StsData.StartTime && params.Expires)
                    KeyTime = StsData.StartTime + ";" + (StsData.StartTime + params.Expires * 1);
                  else if (StsData.StartTime && StsData.ExpiredTime)
                    KeyTime = StsData.StartTime + ";" + StsData.ExpiredTime;
                  var Authorization = util.getAuth({
                    SecretId: StsData.TmpSecretId,
                    SecretKey: StsData.TmpSecretKey,
                    Method: params.Method,
                    Pathname,
                    Query: params.Query,
                    Headers: headers,
                    Expires: params.Expires,
                    UseRawKey: self2.options.UseRawKey,
                    SystemClockOffset: self2.options.SystemClockOffset,
                    KeyTime,
                    ForceSignHost: forceSignHost
                  });
                  var AuthData = {
                    Authorization,
                    SecurityToken: StsData.SecurityToken || StsData.XCosSecurityToken || "",
                    Token: StsData.Token || "",
                    ClientIP: StsData.ClientIP || "",
                    ClientUA: StsData.ClientUA || "",
                    SignFrom: "client"
                  };
                  cb(null, AuthData);
                };
                var checkAuthError = function checkAuthError2(AuthData) {
                  if (AuthData.Authorization) {
                    var formatAllow = false;
                    var auth = AuthData.Authorization;
                    if (auth) {
                      if (auth.indexOf(" ") > -1) {
                        formatAllow = false;
                      } else if (auth.indexOf("q-sign-algorithm=") > -1 && auth.indexOf("q-ak=") > -1 && auth.indexOf("q-sign-time=") > -1 && auth.indexOf("q-key-time=") > -1 && auth.indexOf("q-url-param-list=") > -1) {
                        formatAllow = true;
                      } else {
                        try {
                          auth = atob(auth);
                          if (auth.indexOf("a=") > -1 && auth.indexOf("k=") > -1 && auth.indexOf("t=") > -1 && auth.indexOf("r=") > -1 && auth.indexOf("b=") > -1) {
                            formatAllow = true;
                          }
                        } catch (e) {
                        }
                      }
                    }
                    if (!formatAllow)
                      return util.error(new Error("getAuthorization callback params format error"));
                  } else {
                    if (!AuthData.TmpSecretId)
                      return util.error(new Error('getAuthorization callback params missing "TmpSecretId"'));
                    if (!AuthData.TmpSecretKey)
                      return util.error(new Error('getAuthorization callback params missing "TmpSecretKey"'));
                    if (!AuthData.SecurityToken && !AuthData.XCosSecurityToken)
                      return util.error(new Error('getAuthorization callback params missing "SecurityToken"'));
                    if (!AuthData.ExpiredTime)
                      return util.error(new Error('getAuthorization callback params missing "ExpiredTime"'));
                    if (AuthData.ExpiredTime && AuthData.ExpiredTime.toString().length !== 10)
                      return util.error(new Error('getAuthorization callback params "ExpiredTime" should be 10 digits'));
                    if (AuthData.StartTime && AuthData.StartTime.toString().length !== 10)
                      return util.error(new Error('getAuthorization callback params "StartTime" should be 10 StartTime'));
                  }
                  return false;
                };
                if (StsData.ExpiredTime && StsData.ExpiredTime - util.getSkewTime(self2.options.SystemClockOffset) / 1e3 > 60) {
                  calcAuthByTmpKey();
                } else if (self2.options.getAuthorization) {
                  self2.options.getAuthorization.call(self2, {
                    Bucket,
                    Region,
                    Method: params.Method,
                    Key: KeyName,
                    Pathname,
                    Query: params.Query,
                    Headers: headers,
                    Scope,
                    SystemClockOffset: self2.options.SystemClockOffset,
                    ForceSignHost: forceSignHost
                  }, function(AuthData) {
                    if (typeof AuthData === "string")
                      AuthData = {
                        Authorization: AuthData
                      };
                    var AuthError = checkAuthError(AuthData);
                    if (AuthError)
                      return cb(AuthError);
                    if (AuthData.Authorization) {
                      cb(null, AuthData);
                    } else {
                      StsData = AuthData || {};
                      StsData.Scope = Scope;
                      StsData.ScopeKey = ScopeKey;
                      self2._StsCache.push(StsData);
                      calcAuthByTmpKey();
                    }
                  });
                } else if (self2.options.getSTS) {
                  self2.options.getSTS.call(self2, {
                    Bucket,
                    Region
                  }, function(data) {
                    StsData = data || {};
                    StsData.Scope = Scope;
                    StsData.ScopeKey = ScopeKey;
                    if (!StsData.TmpSecretId)
                      StsData.TmpSecretId = StsData.SecretId;
                    if (!StsData.TmpSecretKey)
                      StsData.TmpSecretKey = StsData.SecretKey;
                    var AuthError = checkAuthError(StsData);
                    if (AuthError)
                      return cb(AuthError);
                    self2._StsCache.push(StsData);
                    calcAuthByTmpKey();
                  });
                } else {
                  return function() {
                    var KeyTime = "";
                    if (self2.options.StartTime && params.Expires) {
                      if (self2.options.StartTime.toString().length !== 10) {
                        return cb(util.error(new Error('params "StartTime" should be 10 digits')));
                      }
                      KeyTime = self2.options.StartTime + ";" + (self2.options.StartTime + params.Expires * 1);
                    } else if (self2.options.StartTime && self2.options.ExpiredTime) {
                      if (self2.options.StartTime.toString().length !== 10) {
                        return cb(util.error(new Error('params "StartTime" should be 10 digits')));
                      }
                      if (self2.options.ExpiredTime.toString().length !== 10) {
                        return cb(util.error(new Error('params "ExpiredTime" should be 10 digits')));
                      }
                      KeyTime = self2.options.StartTime + ";" + self2.options.ExpiredTime * 1;
                    }
                    var Authorization = util.getAuth({
                      SecretId: params.SecretId || self2.options.SecretId,
                      SecretKey: params.SecretKey || self2.options.SecretKey,
                      Method: params.Method,
                      Pathname,
                      Query: params.Query,
                      Headers: headers,
                      Expires: params.Expires,
                      KeyTime,
                      UseRawKey: self2.options.UseRawKey,
                      SystemClockOffset: self2.options.SystemClockOffset,
                      ForceSignHost: forceSignHost
                    });
                    var AuthData = {
                      Authorization,
                      SecurityToken: self2.options.SecurityToken || self2.options.XCosSecurityToken,
                      SignFrom: "client"
                    };
                    cb(null, AuthData);
                    return AuthData;
                  }();
                }
                return "";
              }
              function allowRetry(err) {
                var self2 = this;
                var canRetry = false;
                var isTimeError = false;
                var networkError = false;
                var serverDate = err.headers && (err.headers.date || err.headers.Date) || err.error && err.error.ServerTime;
                try {
                  var errorCode = err.error.Code;
                  var errorMessage = err.error.Message;
                  if (errorCode === "RequestTimeTooSkewed" || errorCode === "AccessDenied" && errorMessage === "Request has expired") {
                    isTimeError = true;
                  }
                } catch (e) {
                }
                if (err) {
                  if (isTimeError && serverDate) {
                    var serverTime = Date.parse(serverDate);
                    if (this.options.CorrectClockSkew && Math.abs(util.getSkewTime(this.options.SystemClockOffset) - serverTime) >= 3e4) {
                      console.error("error: Local time is too skewed.");
                      this.options.SystemClockOffset = serverTime - Date.now();
                      canRetry = true;
                    }
                  } else if (Math.floor(err.statusCode / 100) === 5) {
                    canRetry = true;
                  } else if (err.message === "CORS blocked or network error") {
                    networkError = true;
                    canRetry = self2.options.AutoSwitchHost;
                  }
                }
                return {
                  canRetry,
                  networkError
                };
              }
              function canSwitchHost(_ref) {
                var requestUrl = _ref.requestUrl, clientCalcSign = _ref.clientCalcSign, networkError = _ref.networkError;
                if (!this.options.AutoSwitchHost)
                  return false;
                if (!requestUrl)
                  return false;
                if (!clientCalcSign)
                  return false;
                if (!networkError)
                  return false;
                var commonReg = /^https?:\/\/[^\/]*\.cos\.[^\/]*\.myqcloud\.com(\/.*)?$/;
                var accelerateReg = /^https?:\/\/[^\/]*\.cos\.accelerate\.myqcloud\.com(\/.*)?$/;
                var isCommonCosHost = commonReg.test(requestUrl) && !accelerateReg.test(requestUrl);
                return isCommonCosHost;
              }
              function submitRequest(params, callback) {
                var self2 = this;
                !params.headers && (params.headers = {});
                !params.qs && (params.qs = {});
                params.VersionId && (params.qs.versionId = params.VersionId);
                params.qs = util.clearKey(params.qs);
                params.headers && (params.headers = util.clearKey(params.headers));
                params.qs && (params.qs = util.clearKey(params.qs));
                var Query = util.clone(params.qs);
                params.action && (Query[params.action] = "");
                var paramsUrl = params.url || params.Url;
                var SignHost = params.SignHost || getSignHost.call(this, {
                  Bucket: params.Bucket,
                  Region: params.Region,
                  Url: paramsUrl
                });
                var tracker = params.tracker;
                var next = function next2(tryTimes) {
                  var oldClockOffset = self2.options.SystemClockOffset;
                  tracker && tracker.setParams({
                    signStartTime: (/* @__PURE__ */ new Date()).getTime(),
                    httpRetryTimes: tryTimes - 1
                  });
                  if (params.SwitchHost) {
                    SignHost = SignHost.replace(/myqcloud.com/, "tencentcos.cn");
                  }
                  getAuthorizationAsync.call(self2, {
                    Bucket: params.Bucket || "",
                    Region: params.Region || "",
                    Method: params.method,
                    Key: params.Key,
                    Query,
                    Headers: params.headers,
                    SignHost,
                    Action: params.Action,
                    ResourceKey: params.ResourceKey,
                    Scope: params.Scope,
                    ForceSignHost: self2.options.ForceSignHost,
                    SwitchHost: params.SwitchHost
                  }, function(err, AuthData) {
                    if (err) {
                      callback(err);
                      return;
                    }
                    tracker && tracker.setParams({
                      signEndTime: (/* @__PURE__ */ new Date()).getTime(),
                      httpStartTime: (/* @__PURE__ */ new Date()).getTime()
                    });
                    params.AuthData = AuthData;
                    _submitRequest.call(self2, params, function(err2, data) {
                      tracker && tracker.setParams({
                        httpEndTime: (/* @__PURE__ */ new Date()).getTime()
                      });
                      var canRetry = false;
                      var networkError = false;
                      if (err2) {
                        var info = allowRetry.call(self2, err2);
                        canRetry = info.canRetry || oldClockOffset !== self2.options.SystemClockOffset;
                        networkError = info.networkError;
                      }
                      if (err2 && tryTimes < 2 && canRetry) {
                        if (params.headers) {
                          delete params.headers.Authorization;
                          delete params.headers["token"];
                          delete params.headers["clientIP"];
                          delete params.headers["clientUA"];
                          params.headers["x-cos-security-token"] && delete params.headers["x-cos-security-token"];
                          params.headers["x-ci-security-token"] && delete params.headers["x-ci-security-token"];
                        }
                        var switchHost = canSwitchHost.call(self2, {
                          requestUrl: (err2 === null || err2 === void 0 ? void 0 : err2.url) || "",
                          clientCalcSign: AuthData.SignFrom === "client",
                          networkError
                        });
                        params.SwitchHost = switchHost;
                        params.retry = true;
                        next2(tryTimes + 1);
                      } else {
                        callback(err2, data);
                      }
                    });
                  });
                };
                next(1);
              }
              function _submitRequest(params, callback) {
                var self2 = this;
                var TaskId = params.TaskId;
                if (TaskId && !self2._isRunningTask(TaskId))
                  return;
                var bucket = params.Bucket;
                var region = params.Region;
                var object = params.Key;
                var method = params.method || "GET";
                var url = params.Url || params.url;
                var body = params.body;
                var rawBody = params.rawBody;
                if (self2.options.UseAccelerate) {
                  region = "accelerate";
                }
                url = url || getUrl({
                  ForcePathStyle: self2.options.ForcePathStyle,
                  protocol: self2.options.Protocol,
                  domain: self2.options.Domain,
                  bucket,
                  region,
                  object
                });
                if (params.SwitchHost) {
                  url = url.replace(/myqcloud.com/, "tencentcos.cn");
                }
                var repoterUrl = object ? url : "";
                if (params.action) {
                  url = url + "?" + (util.isIOS_QQ ? "".concat(params.action, "=") : params.action);
                }
                if (params.qsStr) {
                  if (url.indexOf("?") > -1) {
                    url = url + "&" + params.qsStr;
                  } else {
                    url = url + "?" + params.qsStr;
                  }
                }
                var opt = {
                  method,
                  url,
                  headers: params.headers,
                  qs: params.qs,
                  body
                };
                var token = "x-cos-security-token";
                if (util.isCIHost(url)) {
                  token = "x-ci-security-token";
                }
                opt.headers.Authorization = params.AuthData.Authorization;
                params.AuthData.Token && (opt.headers["token"] = params.AuthData.Token);
                params.AuthData.ClientIP && (opt.headers["clientIP"] = params.AuthData.ClientIP);
                params.AuthData.ClientUA && (opt.headers["clientUA"] = params.AuthData.ClientUA);
                params.AuthData.SecurityToken && (opt.headers[token] = params.AuthData.SecurityToken);
                params.Action && (opt.action = params.Action);
                opt.key = params.Key || params.ResourceKey;
                opt.headers && (opt.headers = util.clearKey(opt.headers));
                if (params.retry) {
                  opt.headers["x-cos-sdk-retry"] = true;
                }
                opt = util.clearKey(opt);
                if (params.onProgress && typeof params.onProgress === "function") {
                  var contentLength = body && (body.size || body.length) || 0;
                  opt.onProgress = function(e) {
                    if (TaskId && !self2._isRunningTask(TaskId))
                      return;
                    var loaded = e ? e.loaded : 0;
                    params.onProgress({
                      loaded,
                      total: contentLength
                    });
                  };
                }
                if (params.onDownloadProgress) {
                  opt.onDownloadProgress = params.onDownloadProgress;
                }
                if (params.DataType) {
                  opt.dataType = params.DataType;
                }
                if (this.options.Timeout) {
                  opt.timeout = this.options.Timeout;
                }
                self2.options.ForcePathStyle && (opt.pathStyle = self2.options.ForcePathStyle);
                self2.emit("before-send", opt);
                var useAccelerate = opt.url.includes("accelerate.");
                var queryString = opt.qs ? Object.keys(opt.qs).map(function(key) {
                  return "".concat(key, "=").concat(opt.qs[key]);
                }).join("&") : "";
                var fullUrl = queryString ? opt.url + "?" + queryString : opt.url;
                if (params.tracker) {
                  var _opt$body;
                  params.tracker.setParams({
                    url: fullUrl,
                    httpMethod: opt.method,
                    accelerate: useAccelerate,
                    httpSize: ((_opt$body = opt.body) === null || _opt$body === void 0 ? void 0 : _opt$body.size) || 0
                  });
                  if (params.tracker.parent && !params.tracker.parent.params.url) {
                    params.tracker.parent.setParams({
                      url: repoterUrl,
                      accelerate: useAccelerate
                    });
                  }
                }
                var sender = (self2.options.Request || REQUEST)(opt, function(r) {
                  if (r && r.error === "abort")
                    return;
                  var receive = {
                    options: opt,
                    error: r && r.error,
                    statusCode: r && r.statusCode || 0,
                    statusMessage: r && r.statusMessage || "",
                    headers: r && r.headers || {},
                    body: r && r.body
                  };
                  self2.emit("after-receive", receive);
                  var err = receive.error;
                  var body2 = receive.body;
                  var response = {
                    statusCode: receive.statusCode,
                    statusMessage: receive.statusMessage,
                    headers: receive.headers
                  };
                  var hasReturned;
                  var cb = function cb2(err2, data) {
                    TaskId && self2.off("inner-kill-task", killTask);
                    if (hasReturned)
                      return;
                    hasReturned = true;
                    var attrs = {};
                    response && response.statusCode && (attrs.statusCode = response.statusCode);
                    response && response.headers && (attrs.headers = response.headers);
                    if (err2) {
                      opt.url && (attrs.url = opt.url);
                      opt.method && (attrs.method = opt.method);
                      err2 = util.extend(err2 || {}, attrs);
                      callback(err2, null);
                    } else {
                      if (params.Action === "name/cos:PutObject") {
                        var pHeaders = {};
                        for (var i in params.headers) {
                          var key = i.toLowerCase();
                          pHeaders[key] = params.headers[i];
                        }
                        if (pHeaders["x-cos-callback"]) {
                          if (data.Error) {
                            data.CallbackError = util.clone(data.Error);
                            delete data.Error;
                          } else {
                            data.CallbackBody = util.clone(data);
                          }
                        } else if (pHeaders["x-cos-return-body"]) {
                          if (data.Error) {
                            data.ReturnError = util.clone(data.Error);
                            delete data.Error;
                          } else {
                            data.ReturnBody = util.clone(data);
                          }
                        }
                      }
                      data = util.extend(data || {}, attrs);
                      callback(null, data);
                    }
                    sender = null;
                  };
                  if (err)
                    return cb(util.error(err));
                  var statusCode = response.statusCode;
                  var statusSuccess = Math.floor(statusCode / 100) === 2;
                  if (rawBody) {
                    if (statusSuccess) {
                      return cb(null, {
                        body: body2
                      });
                    } else {
                      if (body2 instanceof Blob) {
                        util.readAsBinaryString(body2, function(content) {
                          var json2 = util.parseResBody(content);
                          var errorBody2 = json2.Error || json2;
                          return cb(util.error(new Error(errorBody2.Message || "response body error"), {
                            code: errorBody2.Code,
                            error: errorBody2
                          }));
                        });
                        return;
                      }
                    }
                  }
                  var json = util.parseResBody(body2);
                  var errorBody = json.Error || json;
                  if (statusSuccess) {
                    cb(null, json);
                  } else if (errorBody) {
                    cb(util.error(new Error(errorBody.Message), {
                      code: errorBody.Code,
                      error: errorBody
                    }));
                  } else if (statusCode) {
                    cb(util.error(new Error(response.statusMessage), {
                      code: "" + statusCode
                    }));
                  } else if (statusCode) {
                    cb(util.error(new Error("statusCode error")));
                  }
                });
                var killTask = function killTask2(data) {
                  if (data.TaskId === TaskId) {
                    sender && sender.abort && sender.abort();
                    self2.off("inner-kill-task", killTask2);
                  }
                };
                TaskId && self2.on("inner-kill-task", killTask);
              }
              var API_MAP = {
                // Bucket 相关方法
                getService,
                // Bucket
                putBucket,
                headBucket,
                // Bucket
                getBucket,
                deleteBucket,
                putBucketAcl,
                // BucketACL
                getBucketAcl,
                putBucketCors,
                // BucketCors
                getBucketCors,
                deleteBucketCors,
                getBucketLocation,
                // BucketLocation
                getBucketPolicy,
                // BucketPolicy
                putBucketPolicy,
                deleteBucketPolicy,
                putBucketTagging,
                // BucketTagging
                getBucketTagging,
                deleteBucketTagging,
                putBucketLifecycle,
                // BucketLifecycle
                getBucketLifecycle,
                deleteBucketLifecycle,
                putBucketVersioning,
                // BucketVersioning
                getBucketVersioning,
                putBucketReplication,
                // BucketReplication
                getBucketReplication,
                deleteBucketReplication,
                putBucketWebsite,
                // BucketWebsite
                getBucketWebsite,
                deleteBucketWebsite,
                putBucketReferer,
                // BucketReferer
                getBucketReferer,
                putBucketDomain,
                // BucketDomain
                getBucketDomain,
                deleteBucketDomain,
                putBucketOrigin,
                // BucketOrigin
                getBucketOrigin,
                deleteBucketOrigin,
                putBucketLogging,
                // BucketLogging
                getBucketLogging,
                putBucketInventory,
                // BucketInventory
                postBucketInventory,
                getBucketInventory,
                listBucketInventory,
                deleteBucketInventory,
                putBucketAccelerate,
                getBucketAccelerate,
                putBucketEncryption,
                getBucketEncryption,
                deleteBucketEncryption,
                // Object 相关方法
                getObject,
                headObject,
                listObjectVersions,
                putObject,
                deleteObject,
                getObjectAcl,
                putObjectAcl,
                optionsObject,
                putObjectCopy,
                deleteMultipleObject,
                restoreObject,
                putObjectTagging,
                getObjectTagging,
                deleteObjectTagging,
                selectObjectContent,
                appendObject,
                // 分块上传相关方法
                uploadPartCopy,
                multipartInit,
                multipartUpload,
                multipartComplete,
                multipartList,
                multipartListPart,
                multipartAbort,
                // 工具方法
                request,
                getObjectUrl,
                getAuth
              };
              function warnOldApi(apiName, fn, proto) {
                util.each(["Cors", "Acl"], function(suffix) {
                  if (apiName.slice(-suffix.length) === suffix) {
                    var oldName = apiName.slice(0, -suffix.length) + suffix.toUpperCase();
                    var apiFn = util.apiWrapper(apiName, fn);
                    var warned = false;
                    proto[oldName] = function() {
                      !warned && console.warn("warning: cos." + oldName + " has been deprecated. Please Use cos." + apiName + " instead.");
                      warned = true;
                      apiFn.apply(this, arguments);
                    };
                  }
                });
              }
              module2.exports.init = function(COS, task) {
                task.transferToTaskMethod(API_MAP, "putObject");
                util.each(API_MAP, function(fn, apiName) {
                  COS.prototype[apiName] = util.apiWrapper(apiName, fn);
                  warnOldApi(apiName, fn, COS.prototype);
                });
              };
            }
          ),
          /***/
          "./src/cos.js": (
            /*!********************!*\
              !*** ./src/cos.js ***!
              \********************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              var util = __webpack_require__(
                /*! ./util */
                "./src/util.js"
              );
              var event = __webpack_require__(
                /*! ./event */
                "./src/event.js"
              );
              var task = __webpack_require__(
                /*! ./task */
                "./src/task.js"
              );
              var base = __webpack_require__(
                /*! ./base */
                "./src/base.js"
              );
              var advance = __webpack_require__(
                /*! ./advance */
                "./src/advance.js"
              );
              var pkg = __webpack_require__(
                /*! ../package.json */
                "./package.json"
              );
              var defaultOptions = {
                AppId: "",
                // AppId 已废弃，请拼接到 Bucket 后传入，例如：test-1250000000
                SecretId: "",
                SecretKey: "",
                SecurityToken: "",
                // 使用临时密钥需要注意自行刷新 Token
                StartTime: 0,
                // 临时密钥返回起始时间
                ExpiredTime: 0,
                // 临时密钥过期时间
                ChunkRetryTimes: 2,
                FileParallelLimit: 3,
                ChunkParallelLimit: 3,
                ChunkSize: 1024 * 1024,
                SliceSize: 1024 * 1024,
                CopyChunkParallelLimit: 20,
                CopyChunkSize: 1024 * 1024 * 10,
                CopySliceSize: 1024 * 1024 * 10,
                MaxPartNumber: 1e4,
                ProgressInterval: 1e3,
                Domain: "",
                ServiceDomain: "",
                Protocol: "",
                CompatibilityMode: false,
                ForcePathStyle: false,
                UseRawKey: false,
                Timeout: 0,
                // 单位毫秒，0 代表不设置超时时间
                CorrectClockSkew: true,
                SystemClockOffset: 0,
                // 单位毫秒，ms
                UploadCheckContentMd5: false,
                UploadQueueSize: 1e4,
                UploadAddMetaMd5: false,
                UploadIdCacheLimit: 50,
                UseAccelerate: false,
                ForceSignHost: true,
                // 默认将host加入签名计算，关闭后可能导致越权风险，建议保持为true
                AutoSwitchHost: true,
                CopySourceParser: null,
                // 自定义拷贝源解析器
                ObjectKeySimplifyCheck: true,
                // 开启合并校验 getObject Key
                /** 上报相关 **/
                DeepTracker: false,
                // 上报时是否对每个分块上传做单独上报
                TrackerDelay: 5e3,
                // 周期性上报，单位毫秒。0代表实时上报
                CustomId: "",
                // 自定义上报id
                BeaconReporter: null,
                // 灯塔上报组件，如有需要请自行传入，传入即代表开启上报
                ClsReporter: null
                // cls 上报组件，如有需要请自行传入，传入即代表开启上报
              };
              var COS = function COS2(options) {
                this.options = util.extend(util.clone(defaultOptions), options || {});
                this.options.FileParallelLimit = Math.max(1, this.options.FileParallelLimit);
                this.options.ChunkParallelLimit = Math.max(1, this.options.ChunkParallelLimit);
                this.options.ChunkRetryTimes = Math.max(0, this.options.ChunkRetryTimes);
                this.options.ChunkSize = Math.max(1024 * 1024, this.options.ChunkSize);
                this.options.CopyChunkParallelLimit = Math.max(1, this.options.CopyChunkParallelLimit);
                this.options.CopyChunkSize = Math.max(1024 * 1024, this.options.CopyChunkSize);
                this.options.CopySliceSize = Math.max(0, this.options.CopySliceSize);
                this.options.MaxPartNumber = Math.max(1024, Math.min(1e4, this.options.MaxPartNumber));
                this.options.Timeout = Math.max(0, this.options.Timeout);
                this.options.EnableReporter = this.options.BeaconReporter || this.options.ClsReporter;
                if (this.options.AppId) {
                  console.warn('warning: AppId has been deprecated, Please put it at the end of parameter Bucket(E.g: "test-1250000000").');
                }
                if (this.options.SecretId && this.options.SecretId.indexOf(" ") > -1) {
                  console.error("error: SecretId格式错误，请检查");
                  console.error("error: SecretId format is incorrect. Please check");
                }
                if (this.options.SecretKey && this.options.SecretKey.indexOf(" ") > -1) {
                  console.error("error: SecretKey格式错误，请检查");
                  console.error("error: SecretKey format is incorrect. Please check");
                }
                if (util.isNode()) {
                  console.log("Tip: Next.js、Nuxt.js 等服务端渲染技术可正常使用JavaScript SDK，请忽略下方 nodejs 环境警告");
                  console.warn("warning: cos-js-sdk-v5 不支持 nodejs 环境使用，请改用 cos-nodejs-sdk-v5，参考文档： https://cloud.tencent.com/document/product/436/8629");
                  console.warn("warning: cos-js-sdk-v5 does not support nodejs environment. Please use cos-nodejs-sdk-v5 instead. See: https://cloud.tencent.com/document/product/436/8629");
                }
                if (this.options.ForcePathStyle) {
                  console.warn("cos-js-sdk-v5不再支持使用path-style，仅支持使用virtual-hosted-style，参考文档：https://cloud.tencent.com/document/product/436/96243");
                  throw new Error("ForcePathStyle is not supported");
                }
                event.init(this);
                task.init(this);
              };
              base.init(COS, task);
              advance.init(COS, task);
              COS.util = {
                md5: util.md5,
                xml2json: util.xml2json,
                json2xml: util.json2xml,
                encodeBase64: util.encodeBase64
              };
              COS.getAuthorization = util.getAuth;
              COS.version = pkg.version;
              module2.exports = COS;
            }
          ),
          /***/
          "./src/event.js": (
            /*!**********************!*\
              !*** ./src/event.js ***!
              \**********************/
            /*! no static exports found */
            /***/
            function(module2, exports2) {
              var initEvent = function initEvent2(cos) {
                var listeners = {};
                var getList = function getList2(action) {
                  !listeners[action] && (listeners[action] = []);
                  return listeners[action];
                };
                cos.on = function(action, callback) {
                  if (action === "task-list-update") {
                    console.warn('warning: Event "' + action + '" has been deprecated. Please use "list-update" instead.');
                  }
                  getList(action).push(callback);
                };
                cos.off = function(action, callback) {
                  var list = getList(action);
                  for (var i = list.length - 1; i >= 0; i--) {
                    callback === list[i] && list.splice(i, 1);
                  }
                };
                cos.emit = function(action, data) {
                  var list = getList(action).map(function(cb) {
                    return cb;
                  });
                  for (var i = 0; i < list.length; i++) {
                    list[i](data);
                  }
                };
              };
              var EventProxy = function EventProxy2() {
                initEvent(this);
              };
              module2.exports.init = initEvent;
              module2.exports.EventProxy = EventProxy;
            }
          ),
          /***/
          "./src/session.js": (
            /*!************************!*\
              !*** ./src/session.js ***!
              \************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var util = __webpack_require__(
                /*! ./util */
                "./src/util.js"
              );
              var cacheKey = "cos_sdk_upload_cache";
              var expires = 30 * 24 * 3600;
              var cache;
              var timer;
              var getCache = function getCache2() {
                try {
                  var val2 = JSON.parse(localStorage.getItem(cacheKey));
                } catch (e) {
                }
                if (!val2)
                  val2 = [];
                cache = val2;
              };
              var setCache = function setCache2() {
                try {
                  if (cache.length)
                    localStorage.setItem(cacheKey, JSON.stringify(cache));
                  else
                    localStorage.removeItem(cacheKey);
                } catch (e) {
                }
              };
              var init = function init2() {
                if (cache)
                  return;
                getCache.call(this);
                var changed = false;
                var now = Math.round(Date.now() / 1e3);
                for (var i = cache.length - 1; i >= 0; i--) {
                  var mtime = cache[i][2];
                  if (!mtime || mtime + expires < now) {
                    cache.splice(i, 1);
                    changed = true;
                  }
                }
                changed && setCache();
              };
              var save = function save2() {
                if (timer)
                  return;
                timer = setTimeout(function() {
                  setCache();
                  timer = null;
                }, 400);
              };
              var mod = {
                using: {},
                // 标记 UploadId 正在使用
                setUsing: function setUsing(uuid) {
                  mod.using[uuid] = true;
                },
                // 标记 UploadId 已经没在使用
                removeUsing: function removeUsing(uuid) {
                  delete mod.using[uuid];
                },
                // 用上传参数生成哈希值
                getFileId: function getFileId(file, ChunkSize, Bucket, Key) {
                  if (file.name && file.size && file.lastModifiedDate && ChunkSize) {
                    return util.md5([file.name, file.size, file.lastModifiedDate, ChunkSize, Bucket, Key].join("::"));
                  } else {
                    return null;
                  }
                },
                // 用上传参数生成哈希值
                getCopyFileId: function getCopyFileId(copySource, sourceHeaders, ChunkSize, Bucket, Key) {
                  var size = sourceHeaders["content-length"];
                  var etag = sourceHeaders.etag || "";
                  var lastModified = sourceHeaders["last-modified"];
                  if (copySource && ChunkSize) {
                    return util.md5([copySource, size, etag, lastModified, ChunkSize, Bucket, Key].join("::"));
                  } else {
                    return null;
                  }
                },
                // 获取文件对应的 UploadId 列表
                getUploadIdList: function getUploadIdList(uuid) {
                  if (!uuid)
                    return null;
                  init.call(this);
                  var list = [];
                  for (var i = 0; i < cache.length; i++) {
                    if (cache[i][0] === uuid)
                      list.push(cache[i][1]);
                  }
                  return list.length ? list : null;
                },
                // 缓存 UploadId
                saveUploadId: function saveUploadId(uuid, UploadId, limit) {
                  init.call(this);
                  if (!uuid)
                    return;
                  for (var i = cache.length - 1; i >= 0; i--) {
                    var item = cache[i];
                    if (item[0] === uuid && item[1] === UploadId) {
                      cache.splice(i, 1);
                    }
                  }
                  cache.unshift([uuid, UploadId, Math.round(Date.now() / 1e3)]);
                  if (cache.length > limit)
                    cache.splice(limit);
                  save();
                },
                // UploadId 已用完，移除掉
                removeUploadId: function removeUploadId(UploadId) {
                  init.call(this);
                  delete mod.using[UploadId];
                  for (var i = cache.length - 1; i >= 0; i--) {
                    if (cache[i][1] === UploadId)
                      cache.splice(i, 1);
                  }
                  save();
                }
              };
              module2.exports = mod;
            }
          ),
          /***/
          "./src/task.js": (
            /*!*********************!*\
              !*** ./src/task.js ***!
              \*********************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var session = __webpack_require__(
                /*! ./session */
                "./src/session.js"
              );
              var util = __webpack_require__(
                /*! ./util */
                "./src/util.js"
              );
              var originApiMap = {};
              var transferToTaskMethod = function transferToTaskMethod2(apiMap, apiName) {
                originApiMap[apiName] = apiMap[apiName];
                apiMap[apiName] = function(params, callback) {
                  if (params.SkipTask) {
                    originApiMap[apiName].call(this, params, callback);
                  } else {
                    this._addTask(apiName, params, callback);
                  }
                };
              };
              var initTask = function initTask2(cos) {
                var queue = [];
                var tasks = {};
                var uploadingFileCount = 0;
                var nextUploadIndex = 0;
                var formatTask = function formatTask2(task) {
                  var t = {
                    id: task.id,
                    Bucket: task.Bucket,
                    Region: task.Region,
                    Key: task.Key,
                    FilePath: task.FilePath,
                    state: task.state,
                    loaded: task.loaded,
                    size: task.size,
                    speed: task.speed,
                    percent: task.percent,
                    hashPercent: task.hashPercent,
                    error: task.error
                  };
                  if (task.FilePath)
                    t.FilePath = task.FilePath;
                  if (task._custom)
                    t._custom = task._custom;
                  return t;
                };
                var emitListUpdate = /* @__PURE__ */ function() {
                  var timer;
                  var emit = function emit2() {
                    timer = 0;
                    cos.emit("task-list-update", {
                      list: util.map(queue, formatTask)
                    });
                    cos.emit("list-update", {
                      list: util.map(queue, formatTask)
                    });
                  };
                  return function() {
                    if (!timer)
                      timer = setTimeout(emit);
                  };
                }();
                var clearQueue = function clearQueue2() {
                  if (queue.length <= cos.options.UploadQueueSize)
                    return;
                  for (var i = 0; i < nextUploadIndex && // 小于当前操作的 index 才清理
                  i < queue.length && // 大于队列才清理
                  queue.length > cos.options.UploadQueueSize; ) {
                    var isActive = queue[i].state === "waiting" || queue[i].state === "checking" || queue[i].state === "uploading";
                    if (!queue[i] || !isActive) {
                      tasks[queue[i].id] && delete tasks[queue[i].id];
                      queue.splice(i, 1);
                      nextUploadIndex--;
                    } else {
                      i++;
                    }
                  }
                  emitListUpdate();
                };
                var startNextTask = function startNextTask2() {
                  if (uploadingFileCount >= cos.options.FileParallelLimit)
                    return;
                  while (queue[nextUploadIndex] && queue[nextUploadIndex].state !== "waiting")
                    nextUploadIndex++;
                  if (nextUploadIndex >= queue.length)
                    return;
                  var task = queue[nextUploadIndex];
                  nextUploadIndex++;
                  uploadingFileCount++;
                  task.state = "checking";
                  task.params.onTaskStart && task.params.onTaskStart(formatTask(task));
                  !task.params.UploadData && (task.params.UploadData = {});
                  var apiParams = util.formatParams(task.api, task.params);
                  originApiMap[task.api].call(cos, apiParams, function(err, data) {
                    if (!cos._isRunningTask(task.id))
                      return;
                    if (task.state === "checking" || task.state === "uploading") {
                      task.state = err ? "error" : "success";
                      err && (task.error = err);
                      uploadingFileCount--;
                      emitListUpdate();
                      startNextTask2();
                      task.callback && task.callback(err, data);
                      if (task.state === "success") {
                        if (task.params) {
                          delete task.params.UploadData;
                          delete task.params.Body;
                          delete task.params;
                        }
                        delete task.callback;
                      }
                    }
                    clearQueue();
                  });
                  emitListUpdate();
                  setTimeout(startNextTask2);
                };
                var killTask = function killTask2(id, switchToState) {
                  var task = tasks[id];
                  if (!task)
                    return;
                  var waiting = task && task.state === "waiting";
                  var running = task && (task.state === "checking" || task.state === "uploading");
                  if (switchToState === "canceled" && task.state !== "canceled" || switchToState === "paused" && waiting || switchToState === "paused" && running) {
                    task.state = switchToState;
                    cos.emit("inner-kill-task", {
                      TaskId: id,
                      toState: switchToState
                    });
                    try {
                      var UploadId = task && task.params && task.params.UploadData.UploadId;
                    } catch (e) {
                    }
                    if (switchToState === "canceled" && UploadId)
                      session.removeUsing(UploadId);
                    emitListUpdate();
                    if (running) {
                      uploadingFileCount--;
                      startNextTask();
                    }
                    if (switchToState === "canceled") {
                      if (task.params) {
                        delete task.params.UploadData;
                        delete task.params.Body;
                        delete task.params;
                      }
                      delete task.callback;
                    }
                  }
                  clearQueue();
                };
                cos._addTasks = function(taskList) {
                  util.each(taskList, function(task) {
                    cos._addTask(task.api, task.params, task.callback, true);
                  });
                  emitListUpdate();
                };
                var isTaskReadyWarning = true;
                cos._addTask = function(api, params, callback, ignoreAddEvent) {
                  params = util.formatParams(api, params);
                  var id = util.uuid();
                  params.TaskId = id;
                  params.onTaskReady && params.onTaskReady(id);
                  if (params.TaskReady) {
                    params.TaskReady(id);
                    isTaskReadyWarning && console.warn('warning: Param "TaskReady" has been deprecated. Please use "onTaskReady" instead.');
                    isTaskReadyWarning = false;
                  }
                  var task = {
                    // env
                    params,
                    callback,
                    api,
                    index: queue.length,
                    // task
                    id,
                    Bucket: params.Bucket,
                    Region: params.Region,
                    Key: params.Key,
                    FilePath: params.FilePath || "",
                    state: "waiting",
                    loaded: 0,
                    size: 0,
                    speed: 0,
                    percent: 0,
                    hashPercent: 0,
                    error: null,
                    _custom: params._custom
                  };
                  var onHashProgress = params.onHashProgress;
                  params.onHashProgress = function(info) {
                    if (!cos._isRunningTask(task.id))
                      return;
                    task.hashPercent = info.percent;
                    onHashProgress && onHashProgress(info);
                    emitListUpdate();
                  };
                  var onProgress = params.onProgress;
                  params.onProgress = function(info) {
                    if (!cos._isRunningTask(task.id))
                      return;
                    task.state === "checking" && (task.state = "uploading");
                    task.loaded = info.loaded;
                    task.speed = info.speed;
                    task.percent = info.percent;
                    onProgress && onProgress(info);
                    emitListUpdate();
                  };
                  util.getFileSize(api, params, function(err, size) {
                    if (err)
                      return callback(util.error(err));
                    tasks[id] = task;
                    queue.push(task);
                    task.size = size;
                    !ignoreAddEvent && emitListUpdate();
                    startNextTask();
                    clearQueue();
                  });
                  return id;
                };
                cos._isRunningTask = function(id) {
                  var task = tasks[id];
                  return !!(task && (task.state === "checking" || task.state === "uploading"));
                };
                cos.getTaskList = function() {
                  return util.map(queue, formatTask);
                };
                cos.cancelTask = function(id) {
                  killTask(id, "canceled");
                };
                cos.pauseTask = function(id) {
                  killTask(id, "paused");
                };
                cos.restartTask = function(id) {
                  var task = tasks[id];
                  if (task && (task.state === "paused" || task.state === "error")) {
                    task.state = "waiting";
                    emitListUpdate();
                    nextUploadIndex = Math.min(nextUploadIndex, task.index);
                    startNextTask();
                  }
                };
                cos.isUploadRunning = function() {
                  return uploadingFileCount || nextUploadIndex < queue.length;
                };
              };
              module2.exports.transferToTaskMethod = transferToTaskMethod;
              module2.exports.init = initTask;
            }
          ),
          /***/
          "./src/tracker.js": (
            /*!************************!*\
              !*** ./src/tracker.js ***!
              \************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var _classCallCheck = __webpack_require__(
                /*! @babel/runtime/helpers/classCallCheck */
                "./node_modules/@babel/runtime/helpers/classCallCheck.js"
              );
              var _createClass = __webpack_require__(
                /*! @babel/runtime/helpers/createClass */
                "./node_modules/@babel/runtime/helpers/createClass.js"
              );
              var _typeof = __webpack_require__(
                /*! @babel/runtime/helpers/typeof */
                "./node_modules/@babel/runtime/helpers/typeof.js"
              );
              var pkg = __webpack_require__(
                /*! ../package.json */
                "./package.json"
              );
              var beacon = null;
              var getBeacon = function getBeacon2(Beacon, delay) {
                if (!beacon) {
                  if (typeof Beacon !== "function") {
                    throw new Error("Beacon not found");
                  }
                  beacon = new Beacon({
                    appkey: "0WEB05PY6MHRGK0U",
                    versionCode: pkg.version,
                    channelID: "js_sdk",
                    //渠道,选填
                    openid: "openid",
                    // 用户id, 选填
                    unionid: "unid",
                    //用户unionid , 类似idfv,选填
                    strictMode: false,
                    //严苛模式开关, 打开严苛模式会主动抛出异常, 上线请务必关闭!!!
                    delay,
                    // 普通事件延迟上报时间(单位毫秒), 默认1000(1秒),选填
                    sessionDuration: 60 * 1e3
                    // session变更的时间间隔, 一个用户持续30分钟(默认值)没有任何上报则算另一次 session,每变更一次session上报一次启动事件(rqd_applaunched),使用毫秒(ms),最小值30秒,选填
                  });
                }
                return beacon;
              };
              var ms2s = function ms2s2(ms) {
                if (!ms || ms < 0)
                  return 0;
                return (ms / 1e3).toFixed(3);
              };
              var utils = {
                // 生成uid 每个链路对应唯一一条uid
                getUid: function getUid() {
                  var S4 = function S42() {
                    return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
                  };
                  return S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4();
                },
                // 获取网络类型 4g ｜ wifi
                getNetType: function getNetType() {
                  if ((typeof navigator === "undefined" ? "undefined" : _typeof(navigator)) === "object") {
                    var connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
                    return (connection === null || connection === void 0 ? void 0 : connection.type) || (connection === null || connection === void 0 ? void 0 : connection.effectiveType) || "unknown";
                  }
                  return "unknown";
                },
                // http | https
                getProtocol: function getProtocol() {
                  if ((typeof location === "undefined" ? "undefined" : _typeof(location)) === "object") {
                    return location.protocol.replace(/:/, "");
                  }
                  return "unknown protocol";
                },
                // 获取pc端操作系统类型
                getOsType: function getOsType() {
                  if ((typeof navigator === "undefined" ? "undefined" : _typeof(navigator)) !== "object") {
                    return "unknown os";
                  }
                  var agent = navigator.userAgent.toLowerCase();
                  var isMac = /macintosh|mac os x/i.test(navigator.userAgent);
                  if (agent.indexOf("win32") >= 0 || agent.indexOf("wow32") >= 0) {
                    return "win32";
                  }
                  if (agent.indexOf("win64") >= 0 || agent.indexOf("wow64") >= 0) {
                    return "win64";
                  }
                  if (isMac) {
                    return "mac";
                  }
                  return "unknown os";
                },
                isMobile: function isMobile2() {
                  var exp = /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i;
                  if ((typeof navigator === "undefined" ? "undefined" : _typeof(navigator)) === "object" && navigator.userAgent.match(exp)) {
                    return true;
                  }
                  return false;
                },
                isAndroid: function isAndroid2() {
                  var exp = /(Android|Adr|Linux)/i;
                  if ((typeof navigator === "undefined" ? "undefined" : _typeof(navigator)) === "object" && navigator.userAgent.match(exp)) {
                    return true;
                  }
                  return false;
                },
                isIOS: function isIOS2() {
                  var exp = /(iPhone|iPod|iPad|iOS)/i;
                  if ((typeof navigator === "undefined" ? "undefined" : _typeof(navigator)) === "object" && navigator.userAgent.match(exp)) {
                    return true;
                  }
                  return false;
                },
                isOtherMobile: function isOtherMobile() {
                  return isMobile && !isAndroid && !isIOS;
                },
                getUA: function getUA() {
                  if ((typeof navigator === "undefined" ? "undefined" : _typeof(navigator)) !== "object") {
                    return "unknown device";
                  }
                  var explorer = navigator.userAgent;
                  return explorer;
                }
              };
              var isMobile = utils.isMobile();
              var mobileOsType = utils.isAndroid() ? "android" : utils.isIOS ? "ios" : "other_mobile";
              var pcOsType = utils.getOsType();
              var devicePlatform = isMobile ? mobileOsType : pcOsType;
              var ua = utils.getUA();
              var protocol = utils.getProtocol();
              var transApiName = function transApiName2(api) {
                if (["putObject", "sliceUploadFile", "uploadFile", "uploadFiles"].includes(api)) {
                  return "UploadTask";
                } else if (api === "getObject") {
                  return "DownloadTask";
                } else if (["putObjectCopy", "sliceCopyFile"].includes(api)) {
                  return "CopyTask";
                }
                return api;
              };
              function camel2underline(key) {
                return key.replace(/([A-Z])/g, "_$1").toLowerCase();
              }
              function formatParams(params) {
                var formattedParams = {};
                var successKeys = ["sdkVersionName", "sdkVersionCode", "osName", "networkType", "requestName", "requestResult", "bucket", "region", "appid", "accelerate", "url", "host", "requestPath", "userAgent", "networkProtocol", "httpMethod", "httpSize", "httpSpeed", "httpTookTime", "httpMd5", "httpSign", "httpFullTime", "httpDomain", "partNumber", "httpRetryTimes", "customId", "traceId", "realApi"];
                var failureKeys = [].concat(successKeys, ["errorNode", "errorCode", "errorName", "errorMessage", "errorRequestId", "errorHttpCode", "errorServiceName", "errorType", "fullError"]);
                var reporterKeys = params.requestResult === "Success" ? successKeys : failureKeys;
                for (var key in params) {
                  if (!reporterKeys.includes(key))
                    continue;
                  var formattedKey = camel2underline(key);
                  formattedParams[formattedKey] = params[key];
                }
                formattedParams["request_name"] = params.realApi ? transApiName(params.realApi) : params.requestName;
                return formattedParams;
              }
              var Tracker = function() {
                "use strict";
                function Tracker2(opt) {
                  _classCallCheck(this, Tracker2);
                  var parent = opt.parent, traceId = opt.traceId, bucket = opt.bucket, region = opt.region, apiName = opt.apiName, realApi = opt.realApi, httpMethod = opt.httpMethod, fileKey = opt.fileKey, fileSize = opt.fileSize, accelerate = opt.accelerate, customId = opt.customId, delay = opt.delay, deepTracker = opt.deepTracker, Beacon = opt.Beacon, clsReporter = opt.clsReporter;
                  var appid = bucket && bucket.substr(bucket.lastIndexOf("-") + 1) || "";
                  this.parent = parent;
                  this.deepTracker = deepTracker;
                  this.delay = delay;
                  if (clsReporter && !this.clsReporter) {
                    this.clsReporter = clsReporter;
                  }
                  this.params = {
                    // 通用字段
                    sdkVersionName: "cos-js-sdk-v5",
                    sdkVersionCode: pkg.version,
                    osName: devicePlatform,
                    networkType: "",
                    requestName: apiName || "",
                    requestResult: "",
                    // sdk api调用结果Success、Failure
                    realApi,
                    bucket,
                    region,
                    accelerate,
                    httpMethod,
                    url: "",
                    // 请求url
                    host: "",
                    httpDomain: "",
                    requestPath: fileKey || "",
                    userAgent: ua,
                    networkProtocol: protocol,
                    errorType: "",
                    errorCode: "",
                    errorName: "",
                    errorMessage: "",
                    errorRequestId: "",
                    errorHttpCode: 0,
                    errorServiceName: "",
                    errorNode: "",
                    httpTookTime: 0,
                    // http整体耗时
                    httpSize: fileSize || 0,
                    // 主要是文件大小，大小 B
                    httpMd5: 0,
                    // MD5耗时
                    httpSign: 0,
                    // 计算签名耗时
                    httpFullTime: 0,
                    // 任务整体耗时(包括md5、签名等)
                    httpSpeed: 0,
                    // 主要关注上传速度，KB/s
                    md5StartTime: 0,
                    // md5计算开始时间
                    md5EndTime: 0,
                    // md5计算结束时间
                    signStartTime: 0,
                    // 计算签名开始时间
                    signEndTime: 0,
                    // 计算签名结束时间
                    httpStartTime: 0,
                    // 发起网络请求开始时间
                    httpEndTime: 0,
                    // 网路请求结束时间
                    startTime: (/* @__PURE__ */ new Date()).getTime(),
                    // sdk api调用起始时间，不是纯网络耗时
                    endTime: 0,
                    //  sdk api调用结束时间，不是纯网络耗时
                    // js补充字段
                    traceId: traceId || utils.getUid(),
                    // 每条上报唯一标识
                    appid,
                    partNumber: 0,
                    // 分块上传编号
                    httpRetryTimes: 0,
                    // sdk内部发起的请求重试
                    customId: customId || "",
                    // 业务id
                    partTime: 0
                  };
                  if (Beacon) {
                    this.beacon = getBeacon(Beacon, delay);
                  }
                }
                _createClass(Tracker2, [{
                  key: "formatResult",
                  value: function formatResult(err, data) {
                    var _err$error, _err$error2, _err$error3, _err$error4, _err$error5, _err$error6;
                    var now = (/* @__PURE__ */ new Date()).getTime();
                    var networkType = utils.getNetType();
                    var errorCode = err ? (err === null || err === void 0 ? void 0 : err.code) || (err === null || err === void 0 ? void 0 : (_err$error = err.error) === null || _err$error === void 0 ? void 0 : _err$error.code) || (err === null || err === void 0 ? void 0 : (_err$error2 = err.error) === null || _err$error2 === void 0 ? void 0 : _err$error2.Code) : "";
                    var errorMessage = err ? (err === null || err === void 0 ? void 0 : err.message) || (err === null || err === void 0 ? void 0 : (_err$error3 = err.error) === null || _err$error3 === void 0 ? void 0 : _err$error3.message) || (err === null || err === void 0 ? void 0 : (_err$error4 = err.error) === null || _err$error4 === void 0 ? void 0 : _err$error4.Message) : "";
                    var errorName = errorMessage;
                    var errorServiceName = err ? (err === null || err === void 0 ? void 0 : err.resource) || (err === null || err === void 0 ? void 0 : (_err$error5 = err.error) === null || _err$error5 === void 0 ? void 0 : _err$error5.resource) || (err === null || err === void 0 ? void 0 : (_err$error6 = err.error) === null || _err$error6 === void 0 ? void 0 : _err$error6.Resource) : "";
                    var errorHttpCode = err ? err === null || err === void 0 ? void 0 : err.statusCode : data.statusCode;
                    var requestId = err ? (err === null || err === void 0 ? void 0 : err.headers) && (err === null || err === void 0 ? void 0 : err.headers["x-cos-request-id"]) : (data === null || data === void 0 ? void 0 : data.headers) && (data === null || data === void 0 ? void 0 : data.headers["x-cos-request-id"]);
                    var errorType = err ? requestId ? "Server" : "Client" : "";
                    if (this.params.requestName === "getObject") {
                      this.params.httpSize = data ? data.headers && data.headers["content-length"] : 0;
                    }
                    var isSliceUploadFile = this.params.realApi === "sliceUploadFile";
                    var isSliceCopyFile = this.params.realApi === "sliceCopyFile";
                    if (isSliceUploadFile || isSliceCopyFile) {
                      var speed = this.params.httpSize / 1024 / this.params.partTime;
                      Object.assign(this.params, {
                        httpSpeed: speed < 0 ? 0 : speed.toFixed(3)
                      });
                    } else {
                      var httpFullTime = now - this.params.startTime;
                      var httpTookTime = this.params.httpEndTime - this.params.httpStartTime;
                      var _speed = this.params.httpSize / 1024 / (httpTookTime / 1e3);
                      var httpMd5 = this.params.md5EndTime - this.params.md5StartTime;
                      var httpSign = this.params.signEndTime - this.params.signStartTime;
                      if (this.parent) {
                        this.parent.addParamValue("httpTookTime", ms2s(httpTookTime));
                        this.parent.addParamValue("httpFullTime", ms2s(httpFullTime));
                        this.parent.addParamValue("httpMd5", ms2s(httpMd5));
                        this.parent.addParamValue("httpSign", ms2s(httpSign));
                        if (["multipartUpload", "uploadPartCopy", "putObjectCopy"].includes(this.params.requestName)) {
                          this.parent.addParamValue("partTime", ms2s(httpTookTime));
                        }
                      }
                      Object.assign(this.params, {
                        httpFullTime: ms2s(httpFullTime),
                        httpMd5: ms2s(httpMd5),
                        httpSign: ms2s(httpSign),
                        httpTookTime: ms2s(httpTookTime),
                        httpSpeed: _speed < 0 ? 0 : _speed.toFixed(3)
                      });
                    }
                    Object.assign(this.params, {
                      networkType,
                      requestResult: err ? "Failure" : "Success",
                      errorType,
                      errorCode,
                      errorHttpCode,
                      errorName,
                      errorMessage,
                      errorServiceName,
                      errorRequestId: requestId
                    });
                    if (err && (!errorCode || !errorMessage)) {
                      this.params.fullError = err ? JSON.stringify(err) : "";
                    }
                    if (this.params.url) {
                      try {
                        var execRes = /^http(s)?:\/\/(.*?)\//.exec(this.params.url);
                        this.params.host = execRes[2];
                      } catch (e) {
                        this.params.host = this.params.url;
                      }
                      this.params.httpDomain = this.params.host;
                    }
                  }
                  // 上报
                }, {
                  key: "report",
                  value: function report(err, data) {
                    if (!this.beacon && !this.clsReporter)
                      return;
                    this.formatResult(err, data);
                    var formattedParams = formatParams(this.params);
                    if (this.beacon) {
                      this.sendEventsToBeacon(formattedParams);
                    }
                    if (this.clsReporter) {
                      this.sendEventsToCLS(formattedParams);
                    }
                  }
                  // 设置当前链路的参数
                }, {
                  key: "setParams",
                  value: function setParams(params) {
                    Object.assign(this.params, params);
                  }
                }, {
                  key: "addParamValue",
                  value: function addParamValue(key, value) {
                    this.params[key] = (+this.params[key] + +value).toFixed(3);
                  }
                  // 上报灯塔
                }, {
                  key: "sendEventsToBeacon",
                  value: function sendEventsToBeacon(formattedParams) {
                    var isSliceUploadFile = this.params.requestName === "sliceUploadFile" || this.params.realApi === "sliceUploadFile";
                    if (isSliceUploadFile && !this.deepTracker) {
                      return;
                    }
                    var eventCode = "qcloud_track_cos_sdk";
                    if (this.delay === 0) {
                      this.beacon && this.beacon.onDirectUserAction(eventCode, formattedParams);
                    } else {
                      this.beacon && this.beacon.onUserAction(eventCode, formattedParams);
                    }
                  }
                  // 上报 cls
                }, {
                  key: "sendEventsToCLS",
                  value: function sendEventsToCLS(formattedParams) {
                    var immediate = !!(this.delay === 0);
                    this.clsReporter.log(formattedParams, immediate);
                  }
                  // 生成子实例，与父所属一个链路，可用于分块上传内部流程上报单个分块操作
                }, {
                  key: "generateSubTracker",
                  value: function generateSubTracker(subParams) {
                    Object.assign(subParams, {
                      parent: this,
                      deepTracker: this.deepTracker,
                      traceId: this.params.traceId,
                      bucket: this.params.bucket,
                      region: this.params.region,
                      accelerate: this.params.accelerate,
                      fileKey: this.params.requestPath,
                      customId: this.params.customId,
                      delay: this.delay,
                      clsReporter: this.clsReporter
                    });
                    return new Tracker2(subParams);
                  }
                }]);
                return Tracker2;
              }();
              module2.exports = Tracker;
            }
          ),
          /***/
          "./src/util.js": (
            /*!*********************!*\
              !*** ./src/util.js ***!
              \*********************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              (function(process) {
                var _typeof = __webpack_require__(
                  /*! @babel/runtime/helpers/typeof */
                  "./node_modules/@babel/runtime/helpers/typeof.js"
                );
                function _createForOfIteratorHelper(r, e) {
                  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
                  if (!t) {
                    if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
                      t && (r = t);
                      var _n = 0, F = function F2() {
                      };
                      return { s: F, n: function n() {
                        return _n >= r.length ? { done: true } : { done: false, value: r[_n++] };
                      }, e: function e2(r2) {
                        throw r2;
                      }, f: F };
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                  }
                  var o, a = true, u = false;
                  return { s: function s() {
                    t = t.call(r);
                  }, n: function n() {
                    var r2 = t.next();
                    return a = r2.done, r2;
                  }, e: function e2(r2) {
                    u = true, o = r2;
                  }, f: function f() {
                    try {
                      a || null == t.return || t.return();
                    } finally {
                      if (u)
                        throw o;
                    }
                  } };
                }
                function _unsupportedIterableToArray(r, a) {
                  if (r) {
                    if ("string" == typeof r)
                      return _arrayLikeToArray(r, a);
                    var t = {}.toString.call(r).slice(8, -1);
                    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
                  }
                }
                function _arrayLikeToArray(r, a) {
                  (null == a || a > r.length) && (a = r.length);
                  for (var e = 0, n = Array(a); e < a; e++)
                    n[e] = r[e];
                  return n;
                }
                var md5 = __webpack_require__(
                  /*! ../lib/md5 */
                  "./lib/md5.js"
                );
                var CryptoJS = __webpack_require__(
                  /*! ../lib/crypto */
                  "./lib/crypto.js"
                );
                var _require = __webpack_require__(
                  /*! fast-xml-parser */
                  "./node_modules/fast-xml-parser/src/fxp.js"
                ), XMLParser = _require.XMLParser, XMLBuilder = _require.XMLBuilder;
                var xmlParser = new XMLParser({
                  ignoreDeclaration: true,
                  // 忽略 XML 声明
                  ignoreAttributes: true,
                  // 忽略属性
                  parseTagValue: false
                  // 关闭自动解析
                });
                var xmlBuilder = new XMLBuilder();
                var base64 = __webpack_require__(
                  /*! ../lib/base64 */
                  "./lib/base64.js"
                );
                var Tracker = __webpack_require__(
                  /*! ./tracker */
                  "./src/tracker.js"
                );
                var xml2json = function xml2json2(bodyStr) {
                  var d = xmlParser.parse(bodyStr);
                  return d;
                };
                var json2xml = function json2xml2(json) {
                  var xml = xmlBuilder.build(json);
                  return xml;
                };
                function camSafeUrlEncode(str) {
                  return encodeURIComponent(str).replace(/!/g, "%21").replace(/'/g, "%27").replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/\*/g, "%2A");
                }
                function getObjectKeys(obj, forKey) {
                  var list = [];
                  for (var key in obj) {
                    if (obj.hasOwnProperty(key)) {
                      list.push(forKey ? camSafeUrlEncode(key).toLowerCase() : key);
                    }
                  }
                  return list.sort(function(a, b) {
                    a = a.toLowerCase();
                    b = b.toLowerCase();
                    return a === b ? 0 : a > b ? 1 : -1;
                  });
                }
                var obj2str = function obj2str2(obj, lowerCaseKey) {
                  var i, key, val2;
                  var list = [];
                  var keyList = getObjectKeys(obj);
                  for (i = 0; i < keyList.length; i++) {
                    key = keyList[i];
                    val2 = obj[key] === void 0 || obj[key] === null ? "" : "" + obj[key];
                    key = lowerCaseKey ? camSafeUrlEncode(key).toLowerCase() : camSafeUrlEncode(key);
                    val2 = camSafeUrlEncode(val2) || "";
                    list.push(key + "=" + val2);
                  }
                  return list.join("&");
                };
                var signHeaders = ["cache-control", "content-disposition", "content-encoding", "content-length", "content-md5", "expect", "expires", "host", "if-match", "if-modified-since", "if-none-match", "if-unmodified-since", "origin", "range", "transfer-encoding", "pic-operations"];
                var getSignHeaderObj = function getSignHeaderObj2(headers) {
                  var signHeaderObj = {};
                  for (var i in headers) {
                    var key = i.toLowerCase();
                    if (key.indexOf("x-cos-") > -1 || signHeaders.indexOf(key) > -1) {
                      signHeaderObj[i] = headers[i];
                    }
                  }
                  return signHeaderObj;
                };
                var getAuth = function getAuth2(opt) {
                  opt = opt || {};
                  var SecretId = opt.SecretId;
                  var SecretKey = opt.SecretKey;
                  var KeyTime = opt.KeyTime;
                  var method = (opt.method || opt.Method || "get").toLowerCase();
                  var queryParams = clone(opt.Query || opt.params || {});
                  var headers = getSignHeaderObj(clone(opt.Headers || opt.headers || {}));
                  var Key = opt.Key || "";
                  var pathname;
                  if (opt.UseRawKey) {
                    pathname = opt.Pathname || opt.pathname || "/" + Key;
                  } else {
                    pathname = opt.Pathname || opt.pathname || Key;
                    pathname.indexOf("/") !== 0 && (pathname = "/" + pathname);
                  }
                  var forceSignHost = opt.ForceSignHost === false ? false : true;
                  if (!headers.Host && !headers.host && opt.Bucket && opt.Region && forceSignHost)
                    headers.Host = opt.Bucket + ".cos." + opt.Region + ".myqcloud.com";
                  if (!SecretId)
                    throw new Error("missing param SecretId");
                  if (!SecretKey)
                    throw new Error("missing param SecretKey");
                  var now = Math.round(getSkewTime(opt.SystemClockOffset) / 1e3) - 1;
                  var exp = now;
                  var Expires = opt.Expires || opt.expires;
                  if (Expires === void 0) {
                    exp += 900;
                  } else {
                    exp += Expires * 1 || 0;
                  }
                  var qSignAlgorithm = "sha1";
                  var qAk = SecretId;
                  var qSignTime = KeyTime || now + ";" + exp;
                  var qKeyTime = KeyTime || now + ";" + exp;
                  var qHeaderList = getObjectKeys(headers, true).join(";").toLowerCase();
                  var qUrlParamList = getObjectKeys(queryParams, true).join(";").toLowerCase();
                  var signKey = CryptoJS.HmacSHA1(qKeyTime, SecretKey).toString();
                  var formatString = [method, pathname, util.obj2str(queryParams, true), util.obj2str(headers, true), ""].join("\n");
                  var stringToSign = ["sha1", qSignTime, CryptoJS.SHA1(formatString).toString(), ""].join("\n");
                  var qSignature = CryptoJS.HmacSHA1(stringToSign, signKey).toString();
                  var authorization = ["q-sign-algorithm=" + qSignAlgorithm, "q-ak=" + qAk, "q-sign-time=" + qSignTime, "q-key-time=" + qKeyTime, "q-header-list=" + qHeaderList, "q-url-param-list=" + qUrlParamList, "q-signature=" + qSignature].join("&");
                  return authorization;
                };
                var readIntBE = function readIntBE2(chunk, size, offset) {
                  var bytes = size / 8;
                  var buf = chunk.slice(offset, offset + bytes);
                  new Uint8Array(buf).reverse();
                  return new {
                    8: Uint8Array,
                    16: Uint16Array,
                    32: Uint32Array
                  }[size](buf)[0];
                };
                var buf2str = function buf2str2(chunk, start, end, isUtf8) {
                  var buf = chunk.slice(start, end);
                  var str = "";
                  new Uint8Array(buf).forEach(function(charCode) {
                    str += String.fromCharCode(charCode);
                  });
                  if (isUtf8)
                    str = decodeURIComponent(escape(str));
                  return str;
                };
                var parseSelectPayload = function parseSelectPayload2(chunk) {
                  var header = {};
                  var body = buf2str(chunk);
                  var result = {
                    records: []
                  };
                  while (chunk.byteLength) {
                    var totalLength = readIntBE(chunk, 32, 0);
                    var headerLength = readIntBE(chunk, 32, 4);
                    var payloadRestLength = totalLength - headerLength - 16;
                    var offset = 0;
                    var content;
                    chunk = chunk.slice(12);
                    while (offset < headerLength) {
                      var headerNameLength = readIntBE(chunk, 8, offset);
                      var headerName = buf2str(chunk, offset + 1, offset + 1 + headerNameLength);
                      var headerValueLength = readIntBE(chunk, 16, offset + headerNameLength + 2);
                      var headerValue = buf2str(chunk, offset + headerNameLength + 4, offset + headerNameLength + 4 + headerValueLength);
                      header[headerName] = headerValue;
                      offset += headerNameLength + 4 + headerValueLength;
                    }
                    if (header[":event-type"] === "Records") {
                      content = buf2str(chunk, offset, offset + payloadRestLength, true);
                      result.records.push(content);
                    } else if (header[":event-type"] === "Stats") {
                      content = buf2str(chunk, offset, offset + payloadRestLength, true);
                      result.stats = util.xml2json(content).Stats;
                    } else if (header[":event-type"] === "error") {
                      var errCode = header[":error-code"];
                      var errMessage = header[":error-message"];
                      var err = new Error(errMessage);
                      err.message = errMessage;
                      err.name = err.code = errCode;
                      result.error = err;
                    } else if (["Progress", "Continuation", "End"].includes(header[":event-type"])) {
                    }
                    chunk = chunk.slice(offset + payloadRestLength + 4);
                  }
                  return {
                    payload: result.records.join(""),
                    body
                  };
                };
                var getSourceParams = function getSourceParams2(source) {
                  var parser = this.options.CopySourceParser;
                  if (parser)
                    return parser(source);
                  var m = source.match(/^([^.]+-\d+)\.cos(v6|-cdc|-cdz|-internal)?\.([^.]+)\.((myqcloud\.com)|(tencentcos\.cn))\/(.+)$/);
                  if (!m)
                    return null;
                  return {
                    Bucket: m[1],
                    Region: m[3],
                    Key: m[7]
                  };
                };
                var noop = function noop2() {
                };
                var clearKey = function clearKey2(obj) {
                  var retObj = {};
                  for (var key in obj) {
                    if (obj.hasOwnProperty(key) && obj[key] !== void 0 && obj[key] !== null) {
                      retObj[key] = obj[key];
                    }
                  }
                  return retObj;
                };
                var readAsBinaryString = function readAsBinaryString2(blob, callback) {
                  var readFun;
                  var fr = new FileReader();
                  if (FileReader.prototype.readAsBinaryString) {
                    readFun = FileReader.prototype.readAsBinaryString;
                    fr.onload = function() {
                      callback(this.result);
                    };
                  } else if (FileReader.prototype.readAsArrayBuffer) {
                    readFun = function readFun2(fileData) {
                      var binary = "";
                      var pt = this;
                      var reader = new FileReader();
                      reader.onload = function(e) {
                        var bytes = new Uint8Array(reader.result);
                        var length = bytes.byteLength;
                        for (var i = 0; i < length; i++) {
                          binary += String.fromCharCode(bytes[i]);
                        }
                        callback(binary);
                      };
                      reader.readAsArrayBuffer(fileData);
                    };
                  } else {
                    console.error("FileReader not support readAsBinaryString");
                  }
                  readFun.call(fr, blob);
                };
                var fileSliceNeedCopy = function() {
                  var compareVersion = function compareVersion2(a, b) {
                    a = a.split(".");
                    b = b.split(".");
                    for (var i = 0; i < b.length; i++) {
                      if (a[i] !== b[i]) {
                        return parseInt(a[i]) > parseInt(b[i]) ? 1 : -1;
                      }
                    }
                    return 0;
                  };
                  var check = function check2(ua) {
                    if (!ua)
                      return false;
                    var ChromeVersion = (ua.match(/Chrome\/([.\d]+)/) || [])[1];
                    var QBCoreVersion = (ua.match(/QBCore\/([.\d]+)/) || [])[1];
                    var QQBrowserVersion = (ua.match(/QQBrowser\/([.\d]+)/) || [])[1];
                    var need = ChromeVersion && compareVersion(ChromeVersion, "53.0.2785.116") < 0 && QBCoreVersion && compareVersion(QBCoreVersion, "3.53.991.400") < 0 && QQBrowserVersion && compareVersion(QQBrowserVersion, "9.0.2524.400") <= 0 || false;
                    return need;
                  };
                  return check(typeof navigator !== "undefined" && navigator.userAgent);
                }();
                var fileSlice = function fileSlice2(file, start, end, isUseToUpload, callback) {
                  var blob;
                  if (file.slice) {
                    blob = file.slice(start, end);
                  } else if (file.mozSlice) {
                    blob = file.mozSlice(start, end);
                  } else if (file.webkitSlice) {
                    blob = file.webkitSlice(start, end);
                  }
                  if (isUseToUpload && fileSliceNeedCopy) {
                    var reader = new FileReader();
                    reader.onload = function(e) {
                      blob = null;
                      callback(new Blob([reader.result]));
                    };
                    reader.readAsArrayBuffer(blob);
                  } else {
                    callback(blob);
                  }
                };
                var getBodyMd5 = function getBodyMd52(UploadCheckContentMd5, Body, callback, onProgress) {
                  callback = callback || noop;
                  if (UploadCheckContentMd5) {
                    if (typeof Body === "string") {
                      callback(util.md5(Body, true));
                    } else if (Blob && Body instanceof Blob) {
                      util.getFileMd5(Body, function(err, md52) {
                        callback(md52);
                      }, onProgress);
                    } else {
                      callback();
                    }
                  } else {
                    callback();
                  }
                };
                var md5ChunkSize = 1024 * 1024;
                var getFileMd5 = function getFileMd52(blob, callback, onProgress) {
                  var size = blob.size;
                  var loaded = 0;
                  var md5ctx = md5.getCtx();
                  var next = function next2(start) {
                    if (start >= size) {
                      var hash = md5ctx.digest("hex");
                      callback(null, hash);
                      return;
                    }
                    var end = Math.min(size, start + md5ChunkSize);
                    util.fileSlice(blob, start, end, false, function(chunk) {
                      readAsBinaryString(chunk, function(content) {
                        chunk = null;
                        md5ctx = md5ctx.update(content, true);
                        loaded += content.length;
                        content = null;
                        if (onProgress)
                          onProgress({
                            loaded,
                            total: size,
                            percent: Math.round(loaded / size * 1e4) / 1e4
                          });
                        next2(start + md5ChunkSize);
                      });
                    });
                  };
                  next(0);
                };
                function clone(obj) {
                  return map(obj, function(v) {
                    return _typeof(v) === "object" && v !== null ? clone(v) : v;
                  });
                }
                function attr(obj, name, defaultValue) {
                  return obj && name in obj ? obj[name] : defaultValue;
                }
                function extend(target, source) {
                  each(source, function(val2, key) {
                    target[key] = source[key];
                  });
                  return target;
                }
                function isArray(arr) {
                  return arr instanceof Array;
                }
                function isInArray(arr, item) {
                  var flag = false;
                  for (var i = 0; i < arr.length; i++) {
                    if (item === arr[i]) {
                      flag = true;
                      break;
                    }
                  }
                  return flag;
                }
                function makeArray(arr) {
                  return isArray(arr) ? arr : [arr];
                }
                function each(obj, fn) {
                  for (var i in obj) {
                    if (obj.hasOwnProperty(i)) {
                      fn(obj[i], i);
                    }
                  }
                }
                function map(obj, fn) {
                  var o = isArray(obj) ? [] : {};
                  for (var i in obj) {
                    if (obj.hasOwnProperty(i)) {
                      o[i] = fn(obj[i], i);
                    }
                  }
                  return o;
                }
                function filter(obj, fn) {
                  var iaArr = isArray(obj);
                  var o = iaArr ? [] : {};
                  for (var i in obj) {
                    if (obj.hasOwnProperty(i)) {
                      if (fn(obj[i], i)) {
                        if (iaArr) {
                          o.push(obj[i]);
                        } else {
                          o[i] = obj[i];
                        }
                      }
                    }
                  }
                  return o;
                }
                var b64 = function b642(str) {
                  var i, len, char, res = "";
                  for (i = 0, len = str.length / 2; i < len; i++) {
                    char = parseInt(str[i * 2] + str[i * 2 + 1], 16);
                    res += String.fromCharCode(char);
                  }
                  return btoa(res);
                };
                var uuid = function uuid2() {
                  var S4 = function S42() {
                    return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
                  };
                  return S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4();
                };
                var hasMissingParams = function hasMissingParams2(apiName, params) {
                  var Bucket = params.Bucket;
                  var Region = params.Region;
                  var Key = params.Key;
                  var Domain = this.options.Domain;
                  var checkBucket = !Domain || typeof Domain === "string" && Domain.indexOf("{Bucket}") > -1;
                  var checkRegion = !Domain || typeof Domain === "string" && Domain.indexOf("{Region}") > -1;
                  if (apiName.indexOf("Bucket") > -1 || apiName === "deleteMultipleObject" || apiName === "multipartList" || apiName === "listObjectVersions") {
                    if (checkBucket && !Bucket)
                      return "Bucket";
                    if (checkRegion && !Region)
                      return "Region";
                  } else if (apiName.indexOf("Object") > -1 || apiName.indexOf("multipart") > -1 || apiName === "sliceUploadFile" || apiName === "abortUploadTask" || apiName === "uploadFile") {
                    if (checkBucket && !Bucket)
                      return "Bucket";
                    if (checkRegion && !Region)
                      return "Region";
                    if (!Key)
                      return "Key";
                  }
                  return false;
                };
                var formatParams = function formatParams2(apiName, params) {
                  params = extend({}, params);
                  if (apiName !== "getAuth" && apiName !== "getV4Auth" && apiName !== "getObjectUrl") {
                    var Headers = params.Headers || {};
                    if (params && _typeof(params) === "object") {
                      (function() {
                        for (var key in params) {
                          if (params.hasOwnProperty(key) && key.indexOf("x-cos-") > -1) {
                            Headers[key] = params[key];
                          }
                        }
                      })();
                      var headerMap = {
                        // params headers
                        "x-cos-mfa": "MFA",
                        "Content-MD5": "ContentMD5",
                        "Content-Length": "ContentLength",
                        "Content-Type": "ContentType",
                        Expect: "Expect",
                        Expires: "Expires",
                        "Cache-Control": "CacheControl",
                        "Content-Disposition": "ContentDisposition",
                        "Content-Encoding": "ContentEncoding",
                        Range: "Range",
                        "If-Modified-Since": "IfModifiedSince",
                        "If-Unmodified-Since": "IfUnmodifiedSince",
                        "If-Match": "IfMatch",
                        "If-None-Match": "IfNoneMatch",
                        "x-cos-copy-source": "CopySource",
                        "x-cos-copy-source-Range": "CopySourceRange",
                        "x-cos-metadata-directive": "MetadataDirective",
                        "x-cos-copy-source-If-Modified-Since": "CopySourceIfModifiedSince",
                        "x-cos-copy-source-If-Unmodified-Since": "CopySourceIfUnmodifiedSince",
                        "x-cos-copy-source-If-Match": "CopySourceIfMatch",
                        "x-cos-copy-source-If-None-Match": "CopySourceIfNoneMatch",
                        "x-cos-acl": "ACL",
                        "x-cos-grant-read": "GrantRead",
                        "x-cos-grant-write": "GrantWrite",
                        "x-cos-grant-full-control": "GrantFullControl",
                        "x-cos-grant-read-acp": "GrantReadAcp",
                        "x-cos-grant-write-acp": "GrantWriteAcp",
                        "x-cos-storage-class": "StorageClass",
                        "x-cos-traffic-limit": "TrafficLimit",
                        "x-cos-mime-limit": "MimeLimit",
                        // SSE-C
                        "x-cos-server-side-encryption-customer-algorithm": "SSECustomerAlgorithm",
                        "x-cos-server-side-encryption-customer-key": "SSECustomerKey",
                        "x-cos-server-side-encryption-customer-key-MD5": "SSECustomerKeyMD5",
                        // SSE-COS、SSE-KMS
                        "x-cos-server-side-encryption": "ServerSideEncryption",
                        "x-cos-server-side-encryption-cos-kms-key-id": "SSEKMSKeyId",
                        "x-cos-server-side-encryption-context": "SSEContext",
                        // 上传时图片处理
                        "Pic-Operations": "PicOperations",
                        "x-cos-callback": "Callback",
                        "x-cos-callback-var": "CallbackVar",
                        "x-cos-return-body": "ReturnBody"
                      };
                      util.each(headerMap, function(paramKey, headerKey) {
                        if (params[paramKey] !== void 0) {
                          Headers[headerKey] = params[paramKey];
                        }
                      });
                      params.Headers = clearKey(Headers);
                    }
                  }
                  return params;
                };
                var apiWrapper = function apiWrapper2(apiName, apiFn) {
                  return function(params, callback) {
                    var self2 = this;
                    if (typeof params === "function") {
                      callback = params;
                      params = {};
                    }
                    params = formatParams(apiName, params);
                    var tracker;
                    if (self2.options.EnableReporter) {
                      if (params.calledBySdk === "sliceUploadFile" || params.calledBySdk === "sliceCopyFile") {
                        tracker = params.tracker && params.tracker.generateSubTracker({
                          apiName
                        });
                      } else if (["uploadFile", "uploadFiles"].includes(apiName)) {
                        tracker = null;
                      } else {
                        var fileSize = 0;
                        if (params.Body) {
                          fileSize = typeof params.Body === "string" ? params.Body.length : params.Body.size || params.Body.byteLength || 0;
                        }
                        var accelerate = self2.options.UseAccelerate || typeof self2.options.Domain === "string" && self2.options.Domain.includes("accelerate.");
                        tracker = new Tracker({
                          Beacon: self2.options.BeaconReporter,
                          clsReporter: self2.options.ClsReporter,
                          bucket: params.Bucket,
                          region: params.Region,
                          apiName,
                          realApi: apiName,
                          accelerate,
                          fileKey: params.Key,
                          fileSize,
                          deepTracker: self2.options.DeepTracker,
                          customId: self2.options.CustomId,
                          delay: self2.options.TrackerDelay
                        });
                      }
                    }
                    params.tracker = tracker;
                    var formatResult = function formatResult2(result) {
                      if (result && result.headers) {
                        result.headers["x-cos-request-id"] && (result.RequestId = result.headers["x-cos-request-id"]);
                        result.headers["x-ci-request-id"] && (result.RequestId = result.headers["x-ci-request-id"]);
                        result.headers["x-cos-version-id"] && (result.VersionId = result.headers["x-cos-version-id"]);
                        result.headers["x-cos-delete-marker"] && (result.DeleteMarker = result.headers["x-cos-delete-marker"]);
                      }
                      return result;
                    };
                    var _callback = function _callback2(err, data) {
                      tracker && tracker.report(err, data);
                      callback && callback(formatResult(err), formatResult(data));
                    };
                    var checkParams = function checkParams2() {
                      if (apiName !== "getService" && apiName !== "abortUploadTask") {
                        var missingResult = hasMissingParams.call(self2, apiName, params);
                        if (missingResult) {
                          return "missing param " + missingResult;
                        }
                        if (params.Region) {
                          if (self2.options.CompatibilityMode) {
                            if (!/^([a-z\d-.]+)$/.test(params.Region)) {
                              return "Region format error.";
                            }
                          } else {
                            if (params.Region.indexOf("cos.") > -1) {
                              return 'param Region should not be start with "cos."';
                            } else if (!/^([a-z\d-]+)$/.test(params.Region)) {
                              return "Region format error.";
                            }
                          }
                          if (!self2.options.CompatibilityMode && params.Region.indexOf("-") === -1 && params.Region !== "yfb" && params.Region !== "default" && params.Region !== "accelerate") {
                            console.warn("warning: param Region format error, find help here: https://cloud.tencent.com/document/product/436/6224");
                          }
                        }
                        if (params.Bucket) {
                          if (!/^([a-z\d-]+)-(\d+)$/.test(params.Bucket)) {
                            if (params.AppId) {
                              params.Bucket = params.Bucket + "-" + params.AppId;
                            } else if (self2.options.AppId) {
                              params.Bucket = params.Bucket + "-" + self2.options.AppId;
                            } else {
                              return 'Bucket should format as "test-1250000000".';
                            }
                          }
                          if (params.AppId) {
                            console.warn('warning: AppId has been deprecated, Please put it at the end of parameter Bucket(E.g Bucket:"test-1250000000" ).');
                            delete params.AppId;
                          }
                        }
                        if (!self2.options.UseRawKey && params.Key && params.Key.substr(0, 1) === "/") {
                          params.Key = params.Key.substr(1);
                        }
                      }
                    };
                    var errMsg = checkParams();
                    var isSync = ["getAuth", "getObjectUrl"].includes(apiName);
                    if (typeof Promise === "function" && !isSync && !callback) {
                      return new Promise(function(resolve, reject) {
                        callback = function callback2(err, data) {
                          err ? reject(err) : resolve(data);
                        };
                        if (errMsg)
                          return _callback(util.error(new Error(errMsg)));
                        apiFn.call(self2, params, _callback);
                      });
                    } else {
                      if (errMsg)
                        return _callback(util.error(new Error(errMsg)));
                      var res = apiFn.call(self2, params, _callback);
                      if (isSync)
                        return res;
                    }
                  };
                };
                var throttleOnProgress = function throttleOnProgress2(total, onProgress) {
                  var self2 = this;
                  var size0 = 0;
                  var size1 = 0;
                  var time0 = Date.now();
                  var time1;
                  var timer;
                  function update() {
                    timer = 0;
                    if (onProgress && typeof onProgress === "function") {
                      time1 = Date.now();
                      var speed = Math.max(0, Math.round((size1 - size0) / ((time1 - time0) / 1e3) * 100) / 100) || 0;
                      var percent;
                      if (size1 === 0 && total === 0) {
                        percent = 1;
                      } else {
                        percent = Math.floor(size1 / total * 100) / 100 || 0;
                      }
                      time0 = time1;
                      size0 = size1;
                      try {
                        onProgress({
                          loaded: size1,
                          total,
                          speed,
                          percent
                        });
                      } catch (e) {
                      }
                    }
                  }
                  return function(info, immediately) {
                    if (info) {
                      size1 = info.loaded;
                      total = info.total;
                    }
                    if (immediately) {
                      clearTimeout(timer);
                      update();
                    } else {
                      if (timer)
                        return;
                      timer = setTimeout(update, self2.options.ProgressInterval);
                    }
                  };
                };
                var getFileSize = function getFileSize2(api, params, callback) {
                  var size;
                  if (typeof params.Body === "string") {
                    params.Body = new Blob([params.Body], {
                      type: "text/plain"
                    });
                  } else if (params.Body instanceof ArrayBuffer) {
                    params.Body = new Blob([params.Body]);
                  }
                  if (params.Body && (params.Body instanceof Blob || params.Body.toString() === "[object File]" || params.Body.toString() === "[object Blob]")) {
                    size = params.Body.size;
                  } else {
                    callback(util.error(new Error("params body format error, Only allow File|Blob|String.")));
                    return;
                  }
                  params.ContentLength = size;
                  callback(null, size);
                };
                var getSkewTime = function getSkewTime2(offset) {
                  return Date.now() + (offset || 0);
                };
                var error = function error2(err, opt) {
                  var sourceErr = err;
                  err.message = err.message || null;
                  if (typeof opt === "string") {
                    err.error = opt;
                    err.message = opt;
                  } else if (_typeof(opt) === "object" && opt !== null) {
                    extend(err, opt);
                    if (opt.code || opt.name)
                      err.code = opt.code || opt.name;
                    if (opt.message)
                      err.message = opt.message;
                    if (opt.stack)
                      err.stack = opt.stack;
                  }
                  if (typeof Object.defineProperty === "function") {
                    Object.defineProperty(err, "name", {
                      writable: true,
                      enumerable: false
                    });
                    Object.defineProperty(err, "message", {
                      enumerable: true
                    });
                  }
                  err.name = opt && opt.name || err.name || err.code || "Error";
                  if (!err.code)
                    err.code = err.name;
                  if (!err.error)
                    err.error = clone(sourceErr);
                  return err;
                };
                var isWebWorker = function isWebWorker2() {
                  return (typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) === "object" && (globalThis.constructor.name === "DedicatedWorkerGlobalScope" || globalThis.FileReaderSync);
                };
                var isNode = function isNode2() {
                  return (typeof window === "undefined" ? "undefined" : _typeof(window)) !== "object" && (typeof process === "undefined" ? "undefined" : _typeof(process)) === "object" && true && !isWebWorker();
                };
                var isCIHost = function isCIHost2(url) {
                  return /^https?:\/\/([^/]+\.)?ci\.[^/]+/.test(url);
                };
                var isIOS2 = function() {
                  if ((typeof navigator === "undefined" ? "undefined" : _typeof(navigator)) !== "object") {
                    return false;
                  }
                  var u = navigator.userAgent;
                  var isIOS3 = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
                  return isIOS3;
                }();
                var isQQ = function() {
                  if ((typeof navigator === "undefined" ? "undefined" : _typeof(navigator)) !== "object") {
                    return false;
                  }
                  return /\sQQ/i.test(navigator.userAgent);
                }();
                var encodeBase64 = function encodeBase642(str, safe) {
                  var base64Str = base64.encode(str);
                  if (safe) {
                    base64Str = base64Str.replaceAll("+", "-").replaceAll("/", "_").replaceAll("=", "");
                  }
                  return base64Str;
                };
                var decodeBase64 = function decodeBase642(base64Str) {
                  if (!base64Str)
                    return "";
                  return base64.decode(base64Str);
                };
                var simplifyPath = function simplifyPath2(path) {
                  var names = path.split("/");
                  var stack = [];
                  var _iterator = _createForOfIteratorHelper(names), _step;
                  try {
                    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                      var name = _step.value;
                      if (name === "..") {
                        if (stack.length) {
                          stack.pop();
                        }
                      } else if (name.length && name !== ".") {
                        stack.push(name);
                      }
                    }
                  } catch (err) {
                    _iterator.e(err);
                  } finally {
                    _iterator.f();
                  }
                  return "/" + stack.join("/");
                };
                var parseResBody = function parseResBody2(responseBody) {
                  var json;
                  if (responseBody && typeof responseBody === "string") {
                    var trimBody = responseBody.trim();
                    var isXml = trimBody.indexOf("<") === 0;
                    var isJson = trimBody.indexOf("{") === 0;
                    if (isXml) {
                      json = util.xml2json(responseBody) || {};
                    } else if (isJson) {
                      try {
                        var formatBody = responseBody.replace(/\n/g, " ");
                        var parsedBody = JSON.parse(formatBody);
                        if (Object.prototype.toString.call(parsedBody) === "[object Object]") {
                          json = parsedBody;
                        } else {
                          json = responseBody;
                        }
                      } catch (e) {
                        json = responseBody;
                      }
                    } else {
                      json = responseBody;
                    }
                  } else {
                    json = responseBody || {};
                  }
                  return json;
                };
                var util = {
                  noop,
                  formatParams,
                  apiWrapper,
                  xml2json,
                  json2xml,
                  md5,
                  clearKey,
                  fileSlice,
                  getBodyMd5,
                  getFileMd5,
                  b64,
                  extend,
                  isArray,
                  isInArray,
                  makeArray,
                  each,
                  map,
                  filter,
                  clone,
                  attr,
                  uuid,
                  camSafeUrlEncode,
                  throttleOnProgress,
                  getFileSize,
                  getSkewTime,
                  error,
                  obj2str,
                  getAuth,
                  parseSelectPayload,
                  getSourceParams,
                  isBrowser: true,
                  isNode,
                  isCIHost,
                  isIOS_QQ: isIOS2 && isQQ,
                  encodeBase64,
                  decodeBase64,
                  simplifyPath,
                  readAsBinaryString,
                  parseResBody
                };
                module2.exports = util;
              }).call(this, __webpack_require__(
                /*! ./../node_modules/process/browser.js */
                "./node_modules/process/browser.js"
              ));
            }
          )
          /******/
        })
      );
    });
  }
});
export default require_cos_js_sdk_v5();
//# sourceMappingURL=cos-js-sdk-v5.js.map

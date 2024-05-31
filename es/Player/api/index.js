function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import { useMemoizedFn } from 'ahooks';
import { useEffect, useMemo, useState } from 'react';
import likeGo from "../../likeGo";
import nextTick from "../../nextTick";
import { createFlvPlayer, createHlsPlayer } from "../util";
var Api = /*#__PURE__*/function () {
  function Api(container) {
    var _this = this;
    _classCallCheck(this, Api);
    _defineProperty(this, "container", void 0);
    _defineProperty(this, "play", function () {
      likeGo( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _this$video;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", (_this$video = _this.video) === null || _this$video === void 0 ? void 0 : _this$video.play());
            case 1:
            case "end":
              return _context.stop();
          }
        }, _callee);
      })));
    });
    _defineProperty(this, "pause", function () {
      var _this$video2;
      (_this$video2 = _this.video) === null || _this$video2 === void 0 || _this$video2.pause();
    });
    /**
     * 设置currentTime实现seek
     * @param {*} seconds
     */
    _defineProperty(this, "seekTo", function (seconds) {
      if (_this.video) {
        _this.video.currentTime = seconds;
      }
    });
    _defineProperty(this, "setVolume", function (fraction) {
      if (_this.video) {
        _this.video.volume = fraction;
      }
    });
    _defineProperty(this, "getVolume", function () {
      var _this$video3;
      return (_this$video3 = _this.video) === null || _this$video3 === void 0 ? void 0 : _this$video3.volume;
    });
    _defineProperty(this, "mute", function () {
      if (_this.video) {
        _this.video.muted = true;
      }
    });
    _defineProperty(this, "unmute", function () {
      if (_this.video) {
        _this.video.muted = false;
      }
    });
    /**
     * 开启画中画功能
     */
    _defineProperty(this, "requestPictureInPicture", function () {
      var _this$video4;
      (_this$video4 = _this.video) === null || _this$video4 === void 0 || _this$video4.requestPictureInPicture();
    });
    /**
     * 关闭画中画功能
     */
    _defineProperty(this, "exitPictureInPicture", function () {
      if (document.exitPictureInPicture && document.pictureInPictureElement === _this.video) {
        document.exitPictureInPicture();
      }
    });
    /**
     * 设置播放速率
     * @param {*} rate
     */
    _defineProperty(this, "setPlaybackRate", function (rate) {
      if (_this.video) {
        _this.video.playbackRate = rate;
      }
    });
    /**
     * 获取视频总时长
     */
    _defineProperty(this, "getDuration", function () {
      var _ref2 = _this.video || {},
        duration = _ref2.duration,
        seekable = _ref2.seekable;
      if (duration === Infinity && seekable && seekable.length > 0) {
        return seekable.end(seekable.length - 1);
      }
      return duration !== null && duration !== void 0 ? duration : 0;
    });
    /**
     * 获取当前播放时间
     */
    _defineProperty(this, "getCurrentTime", function () {
      var _this$video$currentTi, _this$video5;
      return (_this$video$currentTi = (_this$video5 = _this.video) === null || _this$video5 === void 0 ? void 0 : _this$video5.currentTime) !== null && _this$video$currentTi !== void 0 ? _this$video$currentTi : 0;
    });
    /**
     * 获取缓存时间
     */
    _defineProperty(this, "getSecondsLoaded", function () {
      var _this$getBufferedTime;
      return (_this$getBufferedTime = _this.getBufferedTime()[1]) !== null && _this$getBufferedTime !== void 0 ? _this$getBufferedTime : 0;
    });
    /**
     * 获取当前视频缓存的起止时间
     */
    _defineProperty(this, "getBufferedTime", function () {
      var _buffered$end, _buffered$start, _this$getDuration;
      var _ref3 = _this.video || {},
        buffered = _ref3.buffered;
      if (buffered && buffered.length === 0) {
        return [0, 0];
      }
      var end = (_buffered$end = buffered === null || buffered === void 0 ? void 0 : buffered.end(buffered.length - 1)) !== null && _buffered$end !== void 0 ? _buffered$end : 0;
      var start = (_buffered$start = buffered === null || buffered === void 0 ? void 0 : buffered.start(buffered.length - 1)) !== null && _buffered$start !== void 0 ? _buffered$start : 0;
      var duration = (_this$getDuration = _this.getDuration()) !== null && _this$getDuration !== void 0 ? _this$getDuration : 0;
      if (end > duration) {
        return [start, duration];
      }
      return [start, end];
    });
    /**
     * 视频截屏方法
     */
    _defineProperty(this, "snapshot", function () {
      var _this$video$videoWidt, _this$video6, _this$video$videoHeig, _this$video7, _ctx;
      var canvas = document.createElement('canvas');
      var ctx = canvas.getContext('2d');
      canvas.width = (_this$video$videoWidt = (_this$video6 = _this.video) === null || _this$video6 === void 0 ? void 0 : _this$video6.videoWidth) !== null && _this$video$videoWidt !== void 0 ? _this$video$videoWidt : 0;
      canvas.height = (_this$video$videoHeig = (_this$video7 = _this.video) === null || _this$video7 === void 0 ? void 0 : _this$video7.videoHeight) !== null && _this$video$videoHeig !== void 0 ? _this$video$videoHeig : 0;
      (_ctx = ctx) === null || _ctx === void 0 || _ctx.drawImage(_this.video, 0, 0, canvas.width, canvas.height);
      setTimeout(function () {
        canvas.remove();
        canvas = null;
        ctx = null;
      }, 200);
      return canvas.toDataURL();
    });
    _defineProperty(this, "unload", function () {});
    _defineProperty(this, "reload", function () {});
    _defineProperty(this, "toggleFit", function () {});
    _defineProperty(this, "openFpsPlay", function () {});
    _defineProperty(this, "closeFpsPlay", function () {});
    _defineProperty(this, "destroy", function () {
      _this.container = null;
    });
    this.container = container;
  }
  _createClass(Api, [{
    key: "video",
    get: function get() {
      return this.container.querySelector('video');
    }
  }, {
    key: "paused",
    get: function get() {
      var _this$video8;
      return (_this$video8 = this.video) === null || _this$video8 === void 0 ? void 0 : _this$video8.paused;
    }
  }, {
    key: "muted",
    get: function get() {
      var _this$video9;
      return (_this$video9 = this.video) === null || _this$video9 === void 0 ? void 0 : _this$video9.muted;
    }
  }]);
  return Api;
}();
// 创建播放介质
export function useTypeAndPlay(url, type, isLive, container, segments, flvConfig, hlsConfig) {
  var _useState = useState({
      type: '',
      flv: undefined,
      hls: undefined
    }),
    _useState2 = _slicedToArray(_useState, 2),
    state = _useState2[0],
    setState = _useState2[1];
  useEffect(function () {
    var isReady = container && (url || type === 'flv' && segments);
    if (!isReady) {
      return undefined;
    }
    var video = container.querySelector('video');
    var options = {};
    switch (type) {
      case 'flv':
        options.type = 'flv';
        options.flv = createFlvPlayer(video, url, isLive, flvConfig);
        break;
      case 'hls':
        options.type = 'hls';
        options.hls = createHlsPlayer(video, url, isLive, hlsConfig);
        break;
      default:
        options.type = 'native';
        video === null || video === void 0 || video.setAttribute('src', url !== null && url !== void 0 ? url : '');
        break;
    }
    if (video !== null && video !== void 0 && video.paused) {
      likeGo( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", video === null || video === void 0 ? void 0 : video.play());
            case 1:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      })));
    }
    setState(options);
    return function () {
      if (options.flv) {
        options.flv.pause();
        likeGo( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
          var _options$flv;
          return _regeneratorRuntime().wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt("return", (_options$flv = options.flv) === null || _options$flv === void 0 ? void 0 : _options$flv.destroy());
              case 1:
              case "end":
                return _context3.stop();
            }
          }, _callee3);
        })));
      } else if (options.hls) {
        video === null || video === void 0 || video.pause();
        likeGo( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
          var _options$hls;
          return _regeneratorRuntime().wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt("return", (_options$hls = options.hls) === null || _options$hls === void 0 ? void 0 : _options$hls.destroy());
              case 1:
              case "end":
                return _context4.stop();
            }
          }, _callee4);
        })));
      } else {
        video === null || video === void 0 || video.pause();
        video === null || video === void 0 || video.removeAttribute('src');
      }
      setState({});
    };
  }, [url, container, segments, type, isLive, flvConfig, hlsConfig]);
  return [state.type, state.flv, state.hls];
}

//创建Api
export function usePlayerApi(url, type, isLive, container, segments, flvConfig, hlsConfig) {
  var _useState3 = useState(undefined),
    _useState4 = _slicedToArray(_useState3, 2),
    api = _useState4[0],
    setApi = _useState4[1];
  var _useState5 = useState(Date.now()),
    _useState6 = _slicedToArray(_useState5, 2),
    forceKey = _useState6[0],
    setForceKey = _useState6[1];
  var config = useMemo(function () {
    return {
      flvConfig: _objectSpread({}, flvConfig),
      hlsConfig: _objectSpread({}, hlsConfig)
    };
  }, [forceKey]);
  var typePlay = useTypeAndPlay(url, type, isLive, container, segments, config.flvConfig, config.hlsConfig);
  var rePlay = useMemoizedFn(function () {
    return setForceKey(Date.now());
  });
  useEffect(function () {
    if (!container) {
      console.debug('wait create api...');
      return undefined;
    }
    var api = new Api(container);
    setApi(api);
    return function () {
      return nextTick(function () {
        return api.destroy();
      });
    };
  }, [container, segments]);
  return [api, typePlay, rePlay];
}
export default Api;
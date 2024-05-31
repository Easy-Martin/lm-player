function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import { useContext, useMemo, useRef, useState } from 'react';
import { Context } from "./context";
import { useRegisterPlayerEvent, useVideoEvent } from "./event";
import EventName from "./event/eventName";
import IconFont from "./iconfont";
import "./style/message.less";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
function VideoMessage() {
  var _useContext = useContext(Context),
    api = _useContext.api;
  var _useState = useState({
      status: null,
      errorTimer: 1,
      loading: false
    }),
    _useState2 = _slicedToArray(_useState, 2),
    state = _useState2[0],
    setState = _useState2[1];
  var timeRef = useRef();
  var message = useMemo(function () {
    if (state.status === 'fail') {
      console.warn("\u89C6\u9891\u9519\u8BEF\uFF0C\u8BF7\u624B\u52A8\u5237\u65B0\u91CD\u8BD5\uFF01");
      return '请稍后重试！';
    }
    if (state.status === 'reload') {
      console.warn("\u7B2C".concat(state.errorTimer, "\u6B21\u91CD\u8FDE"));
      return "\u6B63\u5728\u5237\u65B0...";
    }
    return '';
  }, [state.errorTimer, state.status]);
  var openLoading = function openLoading() {
    clearTimeout(timeRef.current);
    timeRef.current = setTimeout(function () {
      return setState(function (old) {
        return _objectSpread(_objectSpread({}, old), {}, {
          loading: true
        });
      });
    }, 200);
  };
  var closeLoading = function closeLoading() {
    clearTimeout(timeRef.current);
    setState(function (old) {
      return _objectSpread(_objectSpread({}, old), {}, {
        loading: false
      });
    });
  };
  var errorReload = function errorReload(timer) {
    clearTimeout(timeRef.current);
    setState(function () {
      return {
        status: 'reload',
        errorTimer: timer,
        loading: true
      };
    });
  };
  var reloadFail = function reloadFail() {
    return setState(function (old) {
      return _objectSpread(_objectSpread({}, old), {}, {
        status: 'fail'
      });
    });
  };
  var reloadSuccess = function reloadSuccess() {
    return setState(function (old) {
      return _objectSpread(_objectSpread({}, old), {}, {
        status: null
      });
    });
  };
  var reload = function reload() {
    return setState(function (old) {
      return _objectSpread(_objectSpread({}, old), {}, {
        status: 'reload',
        loading: true
      });
    });
  };
  var playEnd = function playEnd() {
    clearTimeout(timeRef.current);
    setState(function (old) {
      return _objectSpread(_objectSpread({}, old), {}, {
        status: null,
        loading: false
      });
    });
    api === null || api === void 0 || api.pause();
  };
  useVideoEvent('loadstart', openLoading);
  useVideoEvent('loadeddata', closeLoading);
  useVideoEvent('canplay', closeLoading);
  useRegisterPlayerEvent(EventName.ERROR_RELOAD, errorReload);
  useRegisterPlayerEvent(EventName.RELOAD_FAIL, reloadFail);
  useRegisterPlayerEvent(EventName.RELOAD_SUCCESS, reloadSuccess);
  useRegisterPlayerEvent(EventName.RELOAD, reload);
  useRegisterPlayerEvent(EventName.HISTORY_PLAY_END, playEnd);
  useRegisterPlayerEvent(EventName.CLEAR_ERROR_TIMER, reloadSuccess);
  var loading = state.loading,
    status = state.status;
  return /*#__PURE__*/_jsxs("div", {
    className: "lm-player-message-mask ".concat(loading || status === 'fail' ? 'lm-player-mask-loading-animation' : ''),
    children: [/*#__PURE__*/_jsx(IconFont, {
      type: status === 'fail' ? 'lm-player-YesorNo_No_Dark' : 'lm-player-Loading',
      className: "".concat(loading && status !== 'fail' ? 'lm-player-loading-animation' : status === 'fail' ? 'lm-player-loadfail' : '', " lm-player-loading-icon")
    }), /*#__PURE__*/_jsx("span", {
      className: "lm-player-message",
      children: message
    })]
  });
}
export var NoSource = function NoSource() {
  return /*#__PURE__*/_jsx("div", {
    className: "lm-player-message-mask lm-player-mask-loading-animation",
    children: /*#__PURE__*/_jsx(IconFont, {
      style: {
        fontSize: 80
      },
      type: "lm-player-PlaySource",
      title: "\u8BF7\u9009\u62E9\u89C6\u9891\u6E90"
    })
  });
};
export default VideoMessage;
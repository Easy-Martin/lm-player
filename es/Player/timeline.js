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
import React, { useContext, useMemo, useState } from 'react';
import { Context } from "./context";
import useBarStatus from "./contraller_bar/useBarStatus";
import { useVideoEvent } from "./event";
import "./style/timeline.less";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export function useTimes() {
  var _useContext = useContext(Context),
    api = _useContext.api,
    isFpsPlay = _useContext.isFpsPlay;
  var _useState = useState({
      currentTime: 0,
      buffered: 0
    }),
    _useState2 = _slicedToArray(_useState, 2),
    state = _useState2[0],
    setState = _useState2[1];
  var getCurrentTime = function getCurrentTime() {
    return setState(function (old) {
      var _api$getCurrentTime, _api$getSecondsLoaded;
      return _objectSpread(_objectSpread({}, old), {}, {
        currentTime: (_api$getCurrentTime = api === null || api === void 0 ? void 0 : api.getCurrentTime()) !== null && _api$getCurrentTime !== void 0 ? _api$getCurrentTime : 0,
        buffered: (_api$getSecondsLoaded = api === null || api === void 0 ? void 0 : api.getSecondsLoaded()) !== null && _api$getSecondsLoaded !== void 0 ? _api$getSecondsLoaded : 0
      });
    });
  };
  var getBuffered = function getBuffered() {
    return setState(function (old) {
      var _api$getSecondsLoaded2;
      return _objectSpread(_objectSpread({}, old), {}, {
        buffered: (_api$getSecondsLoaded2 = api === null || api === void 0 ? void 0 : api.getSecondsLoaded()) !== null && _api$getSecondsLoaded2 !== void 0 ? _api$getSecondsLoaded2 : 0
      });
    });
  };
  var seekendPlay = function seekendPlay() {
    return !isFpsPlay && (api === null || api === void 0 ? void 0 : api.play());
  };
  useVideoEvent('timeupdate', getCurrentTime);
  useVideoEvent('progress', getBuffered);
  useVideoEvent('suspend', getBuffered);
  useVideoEvent('seeked', seekendPlay);
  return useMemo(function () {
    var _api$getDuration;
    return [state.currentTime, state.buffered, (_api$getDuration = api === null || api === void 0 ? void 0 : api.getDuration()) !== null && _api$getDuration !== void 0 ? _api$getDuration : 0];
  }, [state.currentTime, state.buffered, api]);
}
function TimeLine() {
  var _useContext2 = useContext(Context),
    api = _useContext2.api;
  var status = useBarStatus();
  var _useTimes = useTimes(),
    _useTimes2 = _slicedToArray(_useTimes, 3),
    currentTime = _useTimes2[0],
    buffered = _useTimes2[1],
    duration = _useTimes2[2];
  var playPercent = useMemo(function () {
    return currentTime / duration * 100;
  }, [currentTime, duration]);
  var bufferedPercent = useMemo(function () {
    return buffered / duration * 100;
  }, [buffered, duration]);
  var seekWithLine = function seekWithLine(e) {
    var _api$getDuration2;
    var rect = e.currentTarget.getBoundingClientRect();
    var current = e.pageX - rect.left;
    var cTime = current / rect.width * ((_api$getDuration2 = api === null || api === void 0 ? void 0 : api.getDuration()) !== null && _api$getDuration2 !== void 0 ? _api$getDuration2 : 0);
    api === null || api === void 0 || api.seekTo(cTime);
  };
  return /*#__PURE__*/_jsxs("div", {
    className: "player-timeline-layout ".concat(status === 0 ? 'hide-time-line' : ''),
    onClick: seekWithLine,
    children: [/*#__PURE__*/_jsx("div", {
      className: "buffer-line",
      style: {
        width: "".concat(bufferedPercent, "%")
      }
    }), /*#__PURE__*/_jsx("div", {
      className: "current-line",
      style: {
        width: "".concat(playPercent, "%")
      }
    })]
  });
}
export default TimeLine;
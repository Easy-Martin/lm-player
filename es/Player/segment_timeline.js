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
import { Tooltip } from 'antd';
import moment from 'dayjs';
import React, { startTransition, useMemo, useState } from 'react';
import useBarStatus from "./contraller_bar/useBarStatus";
import "./style/timeline.less";
import { useTimes } from "./timeline";
import { FMT } from "./util";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
function TipTitle(_ref) {
  var index = _ref.index,
    segments = _ref.segments,
    begin = _ref.begin,
    current = _ref.current,
    markTime = _ref.markTime;
  var _useMemo = useMemo(function () {
      if (index === 0) {
        var _start = begin;
        var _end = begin + (segments[0].endTime - segments[0].beginTime);
        return {
          start: moment(_start).format(FMT),
          end: moment(_end).format(FMT)
        };
      }
      var indexDuration = segments.map(function (v) {
        return v.endTime - v.beginTime;
      }).reduce(function (a, b, i) {
        return i >= index ? a : a + b;
      }, 0);
      var start = begin + indexDuration;
      var end = start + (segments[index].endTime - segments[index].beginTime);
      return {
        start: moment(start).format(FMT),
        end: moment(end).format(FMT)
      };
    }, [index, segments, begin]),
    start = _useMemo.start,
    end = _useMemo.end;
  var hasUrl = useMemo(function () {
    var _segments$index;
    return (_segments$index = segments[index]) !== null && _segments$index !== void 0 && _segments$index.url ? true : false;
  }, [index, segments]);
  return /*#__PURE__*/_jsxs("div", {
    className: "segment-line-tip-box",
    children: [/*#__PURE__*/_jsx("div", {
      style: {
        fontWeight: 600
      },
      children: "\u5F55\u50CF\u7247\u6BB5\u4FE1\u606F"
    }), /*#__PURE__*/_jsxs("div", {
      children: ["\u5F00\u59CB\uFF1A", start]
    }), /*#__PURE__*/_jsxs("div", {
      children: ["\u7ED3\u675F\uFF1A", end]
    }), /*#__PURE__*/_jsxs("div", {
      children: ["\u523B\u5EA6\uFF1A", moment(markTime).format(FMT)]
    }), /*#__PURE__*/_jsxs("div", {
      children: ["\u5F53\u524D\uFF1A", moment(current).format(FMT)]
    }), /*#__PURE__*/_jsxs("div", {
      children: ["\u72B6\u6001\uFF1A", /*#__PURE__*/_jsx("span", {
        style: {
          color: hasUrl ? 'green' : 'red'
        },
        children: hasUrl ? '正常' : '缺失'
      })]
    })]
  });
}
function SegmentTimeLine(_ref2) {
  var index = _ref2.index,
    segments = _ref2.segments,
    duration = _ref2.duration,
    begin = _ref2.begin,
    seekTo = _ref2.seekTo;
  var _useState = useState({
      time: 0,
      markTime: 0,
      left: -1,
      visible: false
    }),
    _useState2 = _slicedToArray(_useState, 2),
    state = _useState2[0],
    setState = _useState2[1];
  var status = useBarStatus();
  var _useTimes = useTimes(),
    _useTimes2 = _slicedToArray(_useTimes, 2),
    currentTime = _useTimes2[0],
    buffered = _useTimes2[1];
  var indexDuration = useMemo(function () {
    return segments.map(function (v) {
      return (v.endTime - v.beginTime) / 1000;
    }).reduce(function (a, b, i) {
      return i >= index ? a : a + b;
    }, 0);
  }, [index, segments]);
  var playPercent = useMemo(function () {
    return (currentTime + indexDuration) / duration * 100;
  }, [currentTime, duration, indexDuration]);
  var bufferedPercent = useMemo(function () {
    return (buffered + indexDuration) / duration * 100;
  }, [buffered, duration, indexDuration]);
  var seekWithLine = function seekWithLine(e, i) {
    if (!segments[i].url) {
      return;
    }
    var ele = e.currentTarget;
    var rect = ele.getBoundingClientRect();
    var current = e.pageX - rect.left;
    var item = segments[i - 1];
    var pTime = item ? item.endTime : begin;
    var duration = segments[i].endTime - segments[i].beginTime;
    var currentTime = current / rect.width * duration;
    seekTo(Math.round(currentTime + pTime));
  };
  var onLineMouseOver = function onLineMouseOver(e) {
    var rect = e.currentTarget.getBoundingClientRect();
    var left = e.pageX - rect.left;
    var mTime = left / rect.width * duration;
    setState(function (old) {
      return _objectSpread(_objectSpread({}, old), {}, {
        left: left,
        markTime: begin + mTime * 1000
      });
    });
  };
  var onLineMouseOut = function onLineMouseOut() {
    return startTransition(function () {
      return setState(function (old) {
        return _objectSpread(_objectSpread({}, old), {}, {
          left: -1
        });
      });
    });
  };
  return /*#__PURE__*/_jsx("div", {
    className: "player-timeline-layout player-segment-timeline-layout ".concat(status === 0 ? 'hide-time-line' : ''),
    onMouseMove: onLineMouseOver,
    onMouseOut: onLineMouseOut,
    children: /*#__PURE__*/_jsxs("div", {
      className: "segment-line-box",
      children: [segments.map(function (v, i) {
        return /*#__PURE__*/_jsx(Tooltip, {
          title: /*#__PURE__*/_jsx(TipTitle, {
            segments: segments,
            index: i,
            begin: begin,
            current: currentTime * 1000 + begin,
            markTime: state.markTime
          }),
          children: /*#__PURE__*/_jsx("div", {
            className: "segment-line-item ".concat(!v.url ? 'segment-line-item-none' : '', " ").concat(i === segments.length - 1 ? 'last-segment-line-item' : ''),
            onClick: function onClick(e) {
              return seekWithLine(e, i);
            },
            style: {
              width: "".concat((v.endTime / 1000 - v.beginTime / 1000) / duration * 100, "%")
            }
          })
        }, "time-line-".concat(i));
      }), /*#__PURE__*/_jsx("div", {
        className: "buffer-line",
        style: {
          width: "".concat(bufferedPercent, "%")
        }
      }), /*#__PURE__*/_jsx("div", {
        className: "current-line",
        style: {
          width: "".concat(playPercent, "%")
        }
      }), state.left !== -1 && /*#__PURE__*/_jsx("span", {
        className: "segment-line-mark",
        style: {
          left: state.left
        }
      })]
    })
  });
}
export default SegmentTimeLine;
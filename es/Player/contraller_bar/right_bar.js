function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import { useFullscreen, useLatest } from 'ahooks';
import React, { useContext } from 'react';
import { Context } from "../context";
import IconFont from "../iconfont";
import Bar from "./bar";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
function RightBar(_ref) {
  var rightExtContents = _ref.rightExtContents,
    rightMidExtContents = _ref.rightMidExtContents;
  var _useContext = useContext(Context),
    container = _useContext.container;
  var domref = useLatest(container);
  var _useFullscreen = useFullscreen(domref),
    _useFullscreen2 = _slicedToArray(_useFullscreen, 2),
    isFullScreen = _useFullscreen2[0],
    _useFullscreen2$ = _useFullscreen2[1],
    enterFullscreen = _useFullscreen2$.enterFullscreen,
    exitFullscreen = _useFullscreen2$.exitFullscreen;
  var fullscreen = isFullScreen ? exitFullscreen : enterFullscreen;
  return /*#__PURE__*/_jsxs("div", {
    className: "contraller-right-bar",
    children: [rightMidExtContents, /*#__PURE__*/_jsx(Bar, {
      children: /*#__PURE__*/_jsx(IconFont, {
        title: isFullScreen ? '窗口' : '全屏',
        onClick: fullscreen,
        type: isFullScreen ? 'lm-player-S_View_ScreenViewExit' : 'lm-player-S_View_ScreenViewFull'
      })
    }), rightExtContents]
  });
}
export default RightBar;
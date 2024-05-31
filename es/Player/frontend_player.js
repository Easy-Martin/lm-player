function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["url", "begin", "end", "onSeek", "forwordRef", "customTimeLine", "onCanPlayerInit"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import { useMemoizedFn, useUpdate } from 'ahooks';
import { useMemo, useRef } from 'react';
import Events from "./event/eventName";
import FrontendTimeLine from "./frontend_timeline";
import SinglePlayer from "./single_player";

/**
 * @desc 主组件，负责片段整体逻辑控制
 * @return JSX.Element
 */
import { jsx as _jsx } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
function FrontendPlayer(_ref) {
  var url = _ref.url,
    begin = _ref.begin,
    end = _ref.end,
    onSeek = _ref.onSeek,
    forwordRef = _ref.forwordRef,
    customTimeLine = _ref.customTimeLine,
    onCanPlayerInit = _ref.onCanPlayerInit,
    props = _objectWithoutProperties(_ref, _excluded);
  var update = useUpdate();
  var ref = useRef(null);
  var playRef = forwordRef ? forwordRef : ref;
  var _ref2 = playRef.current || {},
    api = _ref2.api,
    event = _ref2.event;

  // 转换毫秒
  var duration = useMemo(function () {
    return (end !== null && end !== void 0 ? end : 0 - (begin !== null && begin !== void 0 ? begin : 0)) / 1000;
  }, [begin, end]); //单位s 秒

  // 重置reload
  var reload = useMemoizedFn(function () {
    var _playRef$current, _playRef$current2;
    (_playRef$current = playRef.current) === null || _playRef$current === void 0 || _playRef$current.event.emit(Events.RELOAD);
    onSeek === null || onSeek === void 0 || onSeek(begin);
    (_playRef$current2 = playRef.current) === null || _playRef$current2 === void 0 || _playRef$current2.api.reload();
  });
  var onInit = useMemoizedFn(function () {
    update();
    onCanPlayerInit === null || onCanPlayerInit === void 0 || onCanPlayerInit();
  });
  var hasReady = api && event;
  var timeline = customTimeLine !== null && customTimeLine !== void 0 ? customTimeLine : /*#__PURE__*/_jsx(FrontendTimeLine, {
    end: end !== null && end !== void 0 ? end : 0,
    onSeek: onSeek,
    begin: begin !== null && begin !== void 0 ? begin : 0,
    duration: duration
  });
  return /*#__PURE__*/_jsx(SinglePlayer, _objectSpread({
    ref: playRef,
    url: url,
    reload: reload,
    onCanPlayerInit: onInit,
    isLive: false,
    type: "flv",
    customTimeLine: hasReady ? timeline : /*#__PURE__*/_jsx(_Fragment, {})
  }, props));
}
export default FrontendPlayer;
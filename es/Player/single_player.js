function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["className", "url", "type", "hideContrallerBar", "isLive", "errorReloadTimer", "children", "onCanPlayerInit", "extActions"];
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
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import { useLatest, useMemoizedFn, useToggle, useUpdateEffect } from 'ahooks';
import React, { useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react';
import { usePlayerApi } from "./api";
import { Provider } from "./context";
import ContrallerBar from "./contraller_bar";
import ContrallerEvent from "./contraller_bar/contraller_event";
import Empty from "./empty";
import { usePlayerEvent, useRegisterPlayerEvents, useVideoEvents } from "./event";
import useErrorEvent from "./event/errorEvent";
import EventName from "./event/eventName";
import FPSPlay from "./fps_play";
import useLiveHeart from "./live_heart";
import VideoMessage from "./message";
import Timeline from "./timeline";
import { createProxy, getVideoType, playUnload } from "./util";
import "./style/index.less";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var SinglePlayer = /*#__PURE__*/React.forwardRef(function SinglePlayer(_ref, ref) {
  var _props$reload;
  var className = _ref.className,
    url = _ref.url,
    type = _ref.type,
    hideContrallerBar = _ref.hideContrallerBar,
    isLive = _ref.isLive,
    errorReloadTimer = _ref.errorReloadTimer,
    children = _ref.children,
    onCanPlayerInit = _ref.onCanPlayerInit,
    extActions = _ref.extActions,
    props = _objectWithoutProperties(_ref, _excluded);
  var autoPlay = props.autoPlay,
    preload = props.preload,
    muted = props.muted,
    poster = props.poster,
    playsInline = props.playsInline,
    loop = props.loop;
  var rightExtContents = props.rightExtContents,
    rightMidExtContents = props.rightMidExtContents,
    leftExtContents = props.leftExtContents,
    leftMidExtContents = props.leftMidExtContents,
    customTimeLine = props.customTimeLine;
  var flvConfig = props.flvConfig,
    hlsConfig = props.hlsConfig,
    videoEvents = props.videoEvents,
    playerEvents = props.playerEvents,
    oneFpsPlay = props.oneFpsPlay,
    fpsDelay = props.fpsDelay,
    fps = props.fps;
  var _useState = useState({
      container: undefined,
      isFpsPlay: false
    }),
    _useState2 = _slicedToArray(_useState, 2),
    state = _useState2[0],
    setState = _useState2[1];
  var _useToggle = useToggle('fill', 'contain'),
    _useToggle2 = _slicedToArray(_useToggle, 2),
    fit = _useToggle2[0],
    toggle = _useToggle2[1].toggle;

  // 视频格式判断，外部可以强制指定，也可以通过url自动判断
  var vType = useMemo(function () {
    return type || getVideoType(url);
  }, [url, type]);
  var domRef = useRef(null);
  var video = useMemo(function () {
    var _state$container$quer;
    return state.container ? (_state$container$quer = state.container.querySelector('video')) !== null && _state$container$quer !== void 0 ? _state$container$quer : undefined : undefined;
  }, [state.container]);

  // 生成事件对象
  var event = usePlayerEvent(video);

  // 注册外部自定义事件
  useVideoEvents(event, videoEvents);
  useRegisterPlayerEvents(event, playerEvents);
  var _usePlayerApi = usePlayerApi(url, vType, isLive, state.container, flvConfig === null || flvConfig === void 0 ? void 0 : flvConfig.mediaDataSource.segments, flvConfig, hlsConfig),
    _usePlayerApi2 = _slicedToArray(_usePlayerApi, 3),
    api = _usePlayerApi2[0],
    _usePlayerApi2$ = _slicedToArray(_usePlayerApi2[1], 3),
    flv = _usePlayerApi2$[1],
    hls = _usePlayerApi2$[2],
    rePlay = _usePlayerApi2[2];

  // 判断是否有链接传入
  var hasLink = useMemo(function () {
    return !!url || !!(flvConfig !== null && flvConfig !== void 0 && flvConfig.mediaDataSource.segments) && vType === 'flv';
  }, [url, flvConfig === null || flvConfig === void 0 ? void 0 : flvConfig.mediaDataSource.segments, vType]);
  var hlsRef = useLatest(hls);
  var flvRef = useLatest(flv);

  // 存储容器
  useEffect(function () {
    setState(function (old) {
      return _objectSpread(_objectSpread({}, old), {}, {
        container: domRef.current
      });
    });
  }, []);

  // url 变化清理错误次数
  useEffect(function () {
    event === null || event === void 0 || event.emit(EventName.CLEAR_ERROR_TIMER);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  // 特殊接口实现 reload是可能被重写的,但是API只暴露原生的方法
  var reload = useMemoizedFn(function () {
    rePlay();
    // playReload(video, event, flvRef.current, hlsRef.current, url);
  });
  var unload = useMemoizedFn(function () {
    return playUnload(video, flvRef.current, hlsRef.current);
  });
  var openFpsPlay = useMemoizedFn(function () {
    setState(function (old) {
      return _objectSpread(_objectSpread({}, old), {}, {
        isFpsPlay: true
      });
    });
    api === null || api === void 0 || api.pause();
  });
  var closeFpsPlay = useMemoizedFn(function () {
    setState(function (old) {
      return _objectSpread(_objectSpread({}, old), {}, {
        isFpsPlay: false
      });
    });
    api === null || api === void 0 || api.play();
  });

  // 合并api,加上代理
  var playApi = useMemo(function () {
    if (!api) {
      return undefined;
    }
    var extmap = _objectSpread({
      reload: reload,
      unload: unload,
      toggleFit: toggle,
      openFpsPlay: openFpsPlay,
      closeFpsPlay: closeFpsPlay
    }, extActions);
    return createProxy(api, extmap);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [api]);

  // 代理Event
  var playEvent = useMemo(function () {
    if (!event) {
      return undefined;
    }
    return createProxy(event);
  }, [event]);

  // ref暴露接口
  useImperativeHandle(ref, function () {
    return {
      video: video,
      container: state.container,
      api: playApi,
      event: playEvent,
      plugins: [flvRef.current, hlsRef.current],
      fit: fit
    };
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [video, state.container, playApi, playEvent, fit]);
  useUpdateEffect(function () {
    return api && event && video ? onCanPlayerInit === null || onCanPlayerInit === void 0 ? void 0 : onCanPlayerInit() : undefined;
  }, [api, event, video]);

  // 补货视频错误，自定义处理
  useErrorEvent({
    unload: unload,
    flv: flvRef.current,
    hls: hlsRef.current,
    event: event,
    reload: reload,
    errorReloadTimer: errorReloadTimer
  });

  // 直播缓冲追回
  useLiveHeart({
    api: api,
    event: event,
    isLive: isLive
  });
  var videoProps = {
    autoPlay: state.isFpsPlay ? false : autoPlay,
    preload: preload,
    muted: state.isFpsPlay ? false : muted,
    poster: poster,
    controls: false,
    playsInline: playsInline,
    loop: state.isFpsPlay ? false : loop
  };
  var contrallerProps = {
    rightExtContents: rightExtContents,
    rightMidExtContents: rightMidExtContents,
    leftMidExtContents: leftMidExtContents,
    leftExtContents: leftExtContents,
    reload: (_props$reload = props.reload) !== null && _props$reload !== void 0 ? _props$reload : reload,
    hideTimeProgress: !!customTimeLine,
    oneFpsPlay: oneFpsPlay
  };
  var hasApiEventInit = api && event;
  return /*#__PURE__*/_jsx(Provider, {
    api: playApi,
    event: event,
    container: state.container,
    isLive: isLive,
    isFpsPlay: state.isFpsPlay,
    children: /*#__PURE__*/_jsxs("div", {
      className: "lm-player-container ".concat(className),
      ref: domRef,
      children: [/*#__PURE__*/_jsxs("div", {
        className: "player-mask-layout",
        children: [/*#__PURE__*/_jsx("video", _objectSpread(_objectSpread({}, videoProps), {}, {
          style: {
            objectFit: fit,
            visibility: state.isFpsPlay ? 'hidden' : 'unset'
          }
        })), hasApiEventInit && hasLink && state.isFpsPlay ? /*#__PURE__*/_jsx(FPSPlay, {
          fps: fps,
          event: event,
          api: playApi,
          fpsDelay: fpsDelay
        }) : /*#__PURE__*/_jsx(Empty, {})]
      }), hasApiEventInit && hasLink ? /*#__PURE__*/_jsx(VideoMessage, {}) : /*#__PURE__*/_jsx(Empty, {}), hasApiEventInit && hasLink && !hideContrallerBar ? /*#__PURE__*/_jsx(ContrallerEvent, {
        children: /*#__PURE__*/_jsx(ContrallerBar, _objectSpread({}, contrallerProps))
      }) : /*#__PURE__*/_jsx(Empty, {}), hasApiEventInit ? customTimeLine ? customTimeLine : !hideContrallerBar ? /*#__PURE__*/_jsx(Timeline, {}) : /*#__PURE__*/_jsx(Empty, {}) : /*#__PURE__*/_jsx(Empty, {}), children]
    })
  });
});
SinglePlayer.defaultProps = {
  isLive: true,
  errorReloadTimer: 5,
  muted: true,
  autoPlay: true,
  playsInline: false,
  preload: 'auto',
  loop: false,
  hideContrallerBar: false,
  className: '',
  flvConfig: {
    mediaDataSource: {},
    config: {}
  },
  hlsConfig: {},
  extActions: {},
  oneFpsPlay: false,
  fpsDelay: 500,
  fps: 30
};
export default SinglePlayer;
function _typeof(obj) {
  '@babel/helpers - typeof';
  return (
    (_typeof =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function (obj) {
            return typeof obj;
          }
        : function (obj) {
            return obj && 'function' == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj;
          }),
    _typeof(obj)
  );
}
var _excluded = ['className', 'url', 'type', 'hideContrallerBar', 'isLive', 'errorReloadTimer', 'children', 'onCanPlayerInit', 'extActions'];
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly &&
      (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })),
      keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2
      ? ownKeys(Object(source), !0).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source))
      : ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
  }
  return target;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, 'string');
  return _typeof(key) === 'symbol' ? key : String(key);
}
function _toPrimitive(input, hint) {
  if (_typeof(input) !== 'object' || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || 'default');
    if (_typeof(res) !== 'object') return res;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (hint === 'string' ? String : Number)(input);
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === 'Object' && o.constructor) n = o.constructor.name;
  if (n === 'Map' || n === 'Set') return Array.from(o);
  if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : ('undefined' != typeof Symbol && arr[Symbol.iterator]) || arr['@@iterator'];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (((_x = (_i = _i.call(arr)).next), 0 === i)) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
    } catch (err) {
      (_d = !0), (_e = err);
    } finally {
      try {
        if (!_n && null != _i.return && ((_r = _i.return()), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
import { useLatest, useMemoizedFn, useToggle, useUpdateEffect } from 'ahooks';
import React, { useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react';
import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime';
import { usePlayerApi } from './api';
import { Provider } from './context';
import ContrallerBar from './contraller_bar';
import ContrallerEvent from './contraller_bar/contraller_event';
import Empty from './empty';
import { usePlayerEvent, useRegisterPlayerEvents, useVideoEvents } from './event';
import useErrorEvent from './event/errorEvent';
import EventName from './event/eventName';
import FPSPlay from './fps_play';
import useLiveHeart from './live_heart';
import VideoMessage from './message';
import './style/index.less';
import Timeline from './timeline';
import { createProxy, getVideoType, playUnload } from './util';
var SinglePlayer = /*#__PURE__*/ React.forwardRef(function SinglePlayer(_ref, ref) {
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
      isFpsPlay: false,
    }),
    _useState2 = _slicedToArray(_useState, 2),
    state = _useState2[0],
    setState = _useState2[1];
  var _useToggle = useToggle('fill', 'contain'),
    _useToggle2 = _slicedToArray(_useToggle, 2),
    fit = _useToggle2[0],
    toggle = _useToggle2[1].toggle;

  // 视频格式判断，外部可以强制指定，也可以通过url自动判断
  var vType = useMemo(
    function () {
      return type || getVideoType(url);
    },
    [url, type],
  );
  var domRef = useRef(null);
  var video = useMemo(
    function () {
      var _state$container$quer;
      return state.container ? ((_state$container$quer = state.container.querySelector('video')) !== null && _state$container$quer !== void 0 ? _state$container$quer : undefined) : undefined;
    },
    [state.container],
  );

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
  var hasLink = useMemo(
    function () {
      return !!url || (!!(flvConfig !== null && flvConfig !== void 0 && flvConfig.mediaDataSource.segments) && vType === 'flv');
    },
    [url, flvConfig === null || flvConfig === void 0 ? void 0 : flvConfig.mediaDataSource.segments, vType],
  );
  var hlsRef = useLatest(hls);
  var flvRef = useLatest(flv);

  // 存储容器
  useEffect(function () {
    setState(function (old) {
      return _objectSpread(
        _objectSpread({}, old),
        {},
        {
          container: domRef.current,
        },
      );
    });
  }, []);

  // url 变化清理错误次数
  useEffect(
    function () {
      event === null || event === void 0 ? void 0 : event.emit(EventName.CLEAR_ERROR_TIMER);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },
    [url],
  );

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
      return _objectSpread(
        _objectSpread({}, old),
        {},
        {
          isFpsPlay: true,
        },
      );
    });
    api === null || api === void 0 ? void 0 : api.pause();
  });
  var closeFpsPlay = useMemoizedFn(function () {
    setState(function (old) {
      return _objectSpread(
        _objectSpread({}, old),
        {},
        {
          isFpsPlay: false,
        },
      );
    });
    api === null || api === void 0 ? void 0 : api.play();
  });

  // 合并api,加上代理
  var playApi = useMemo(
    function () {
      if (!api) {
        return undefined;
      }
      var extmap = _objectSpread(
        {
          reload: reload,
          unload: unload,
          toggleFit: toggle,
          openFpsPlay: openFpsPlay,
          closeFpsPlay: closeFpsPlay,
        },
        extActions,
      );
      return createProxy(api, extmap);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },
    [api],
  );

  // 代理Event
  var playEvent = useMemo(
    function () {
      if (!event) {
        return undefined;
      }
      return createProxy(event);
    },
    [event],
  );

  // ref暴露接口
  useImperativeHandle(
    ref,
    function () {
      return {
        video: video,
        container: state.container,
        api: playApi,
        event: playEvent,
        plugins: [flvRef.current, hlsRef.current],
        fit: fit,
      };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [video, state.container, playApi, playEvent, fit],
  );
  useUpdateEffect(
    function () {
      return api && event && video ? (onCanPlayerInit === null || onCanPlayerInit === void 0 ? void 0 : onCanPlayerInit()) : undefined;
    },
    [api, event, video],
  );

  // 补货视频错误，自定义处理
  useErrorEvent({
    unload: unload,
    flv: flvRef.current,
    hls: hlsRef.current,
    event: event,
    reload: reload,
    errorReloadTimer: errorReloadTimer,
  });

  // 直播缓冲追回
  useLiveHeart({
    api: api,
    event: event,
    isLive: isLive,
  });
  var videoProps = {
    autoPlay: state.isFpsPlay ? false : autoPlay,
    preload: preload,
    muted: state.isFpsPlay ? false : muted,
    poster: poster,
    controls: false,
    playsInline: playsInline,
    loop: state.isFpsPlay ? false : loop,
  };
  var contrallerProps = {
    rightExtContents: rightExtContents,
    rightMidExtContents: rightMidExtContents,
    leftMidExtContents: leftMidExtContents,
    leftExtContents: leftExtContents,
    reload: (_props$reload = props.reload) !== null && _props$reload !== void 0 ? _props$reload : reload,
    hideTimeProgress: !!customTimeLine,
    oneFpsPlay: oneFpsPlay,
  };
  var hasApiEventInit = api && event;
  return /*#__PURE__*/ _jsx(Provider, {
    api: playApi,
    event: event,
    container: state.container,
    isLive: isLive,
    isFpsPlay: state.isFpsPlay,
    children: /*#__PURE__*/ _jsxs('div', {
      className: 'lm-player-container '.concat(className),
      ref: domRef,
      children: [
        /*#__PURE__*/ _jsxs('div', {
          className: 'player-mask-layout',
          children: [
            /*#__PURE__*/ _jsx(
              'video',
              _objectSpread(
                _objectSpread({}, videoProps),
                {},
                {
                  style: {
                    objectFit: fit,
                    visibility: state.isFpsPlay ? 'hidden' : 'unset',
                  },
                },
              ),
            ),
            hasApiEventInit && hasLink && state.isFpsPlay
              ? /*#__PURE__*/ _jsx(FPSPlay, {
                  fps: fps,
                  event: event,
                  api: playApi,
                  fpsDelay: fpsDelay,
                })
              : /*#__PURE__*/ _jsx(Empty, {}),
          ],
        }),
        hasApiEventInit && hasLink ? /*#__PURE__*/ _jsx(VideoMessage, {}) : /*#__PURE__*/ _jsx(Empty, {}),
        hasApiEventInit && hasLink && !hideContrallerBar
          ? /*#__PURE__*/ _jsx(ContrallerEvent, {
              children: /*#__PURE__*/ _jsx(ContrallerBar, _objectSpread({}, contrallerProps)),
            })
          : /*#__PURE__*/ _jsx(Empty, {}),
        hasApiEventInit ? (customTimeLine ? customTimeLine : !hideContrallerBar ? /*#__PURE__*/ _jsx(Timeline, {}) : /*#__PURE__*/ _jsx(Empty, {})) : /*#__PURE__*/ _jsx(Empty, {}),
        children,
      ],
    }),
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
    config: {},
  },
  hlsConfig: {},
  extActions: {},
  oneFpsPlay: false,
  fpsDelay: 500,
  fps: 30,
};
export default SinglePlayer;

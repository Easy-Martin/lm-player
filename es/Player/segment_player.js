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
var _excluded = ['segments', 'begin', 'forwordRef', 'defaultIndex', 'onCanPlayerInit', 'customTimeLine'];
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
import { useLatest, useUpdate } from 'ahooks';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useRegisterPlayerEvent, useVideoEvent } from './event';
import Events from './event/eventName';
import SegmentTimeLine from './segment_timeline';
import SinglePlayer from './single_player';

/**
 * @desc 计算第一个url
 * @param segments
 * @param defaultIndex
 * @returns
 */
import { Fragment as _Fragment, jsx as _jsx } from 'react/jsx-runtime';
function getFirstUrlIndex(segments) {
  var defaultIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  if (!(Array.isArray(segments) && segments.length > 0)) {
    return defaultIndex;
  }
  if (segments[defaultIndex].url) {
    return defaultIndex;
  } else {
    var i = defaultIndex + 1;
    if (i > segments.length) {
      return i;
    }
    return getFirstUrlIndex(segments, i);
  }
}

/**
 * @desc 片段索引控制
 * @param event
 * @param segments
 * @returns
 */
function usePlayIndex(event, segments) {
  var defaultIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var _useState = useState({
      index: getFirstUrlIndex(segments !== null && segments !== void 0 ? segments : [], defaultIndex),
    }),
    _useState2 = _slicedToArray(_useState, 2),
    state = _useState2[0],
    setState = _useState2[1];
  // 片段发生变化重新开始计算索引
  useEffect(
    function () {
      var index = getFirstUrlIndex(segments !== null && segments !== void 0 ? segments : [], 0);
      setState(function (old) {
        return _objectSpread(
          _objectSpread({}, old),
          {},
          {
            index: index,
          },
        );
      });
    },
    [segments],
  );

  // 索引不存在播放地址，自动跳转下一段
  useEffect(
    function () {
      var _segments$state$index, _segments$length;
      if (
        !(segments !== null && segments !== void 0 && (_segments$state$index = segments[state.index]) !== null && _segments$state$index !== void 0 && _segments$state$index.url) &&
        state.index < ((_segments$length = segments === null || segments === void 0 ? void 0 : segments.length) !== null && _segments$length !== void 0 ? _segments$length : 0) - 1
      ) {
        setState(function (old) {
          return _objectSpread(
            _objectSpread({}, old),
            {},
            {
              index: old.index + 1,
            },
          );
        });
      }
    },
    [segments, state.index],
  );

  // 监听片段播放状态，自动跳转下一个片段
  var endHandle = function endHandle() {
    return setState(function (old) {
      var _segments$length2;
      return _objectSpread(
        _objectSpread({}, old),
        {},
        {
          index:
            old.index + 1 < ((_segments$length2 = segments === null || segments === void 0 ? void 0 : segments.length) !== null && _segments$length2 !== void 0 ? _segments$length2 : 0)
              ? old.index + 1
              : old.index,
        },
      );
    });
  };
  useVideoEvent('ended', endHandle, event);
  useRegisterPlayerEvent(Events.PLAY_ENDED, endHandle, event);
  return {
    index: state.index,
    setIndex: function setIndex(i) {
      return setState(function (old) {
        return _objectSpread(
          _objectSpread({}, old),
          {},
          {
            index: i,
          },
        );
      });
    },
  };
}

/**
 * @desc 主组件，负责片段整体逻辑控制
 * @param param0
 * @returns
 */
function SegmentPlayer(_ref) {
  var segments = _ref.segments,
    begin = _ref.begin,
    forwordRef = _ref.forwordRef,
    defaultIndex = _ref.defaultIndex,
    onCanPlayerInit = _ref.onCanPlayerInit,
    customTimeLine = _ref.customTimeLine,
    props = _objectWithoutProperties(_ref, _excluded);
  var _useState3 = useState({
      seekTime: 0,
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    state = _useState4[0],
    setState = _useState4[1];
  var latestSegmentsRef = useLatest(segments);
  var update = useUpdate();
  var ref = useRef(null);
  var playRef = forwordRef ? forwordRef : ref;
  var _ref2 = playRef.current || {},
    api = _ref2.api,
    event = _ref2.event;
  var duration = useMemo(
    function () {
      return segments === null || segments === void 0
        ? void 0
        : segments
            .map(function (v) {
              return (v.endTime - v.beginTime) / 1000;
            })
            .reduce(function (a, b) {
              return a + b;
            }, 0);
    },
    [segments],
  );
  var _usePlayIndex = usePlayIndex(event, segments, defaultIndex),
    index = _usePlayIndex.index,
    setIndex = _usePlayIndex.setIndex;
  var url = useMemo(
    function () {
      return segments !== null && segments !== void 0 && segments[index] ? segments[index].url : undefined;
    },
    [segments, index],
  );
  // 重置reload
  var reload = function reload() {
    var _playRef$current$plug, _playRef$current, _playRef$current2, _playRef$current3, _playRef$current4;
    var _ref3 =
        (_playRef$current$plug = (_playRef$current = playRef.current) === null || _playRef$current === void 0 ? void 0 : _playRef$current.plugins) !== null && _playRef$current$plug !== void 0
          ? _playRef$current$plug
          : [],
      _ref4 = _slicedToArray(_ref3, 2),
      hls = _ref4[1];
    if (hls) {
      hls.swapAudioCodec();
      hls.recoverMediaError();
    }
    (_playRef$current2 = playRef.current) === null || _playRef$current2 === void 0 ? void 0 : _playRef$current2.event.emit(Events.RELOAD);
    (_playRef$current3 = playRef.current) === null || _playRef$current3 === void 0 ? void 0 : _playRef$current3.event.emit(Events.CLEAR_ERROR_TIMER);
    setIndex(0);
    (_playRef$current4 = playRef.current) === null || _playRef$current4 === void 0 ? void 0 : _playRef$current4.api.reload();
  };

  // time 毫秒的时间戳
  var seekTo = function seekTo(time) {
    var _latestSegmentsRef$cu, _playRef$current$plug2, _playRef$current5, _cSegments$index;
    var cSegments = (_latestSegmentsRef$cu = latestSegmentsRef.current) !== null && _latestSegmentsRef$cu !== void 0 ? _latestSegmentsRef$cu : [];
    var index = cSegments.findIndex(function (v) {
      return time >= v.beginTime && time < v.endTime;
    });
    if (index === -1) {
      return;
    }
    var _ref5 =
        (_playRef$current$plug2 = (_playRef$current5 = playRef.current) === null || _playRef$current5 === void 0 ? void 0 : _playRef$current5.plugins) !== null && _playRef$current$plug2 !== void 0
          ? _playRef$current$plug2
          : [],
      _ref6 = _slicedToArray(_ref5, 2),
      hls = _ref6[1];
    if (hls) {
      hls.swapAudioCodec();
      hls.recoverMediaError();
    }
    var currentTime = time - ((_cSegments$index = cSegments[index]) === null || _cSegments$index === void 0 ? void 0 : _cSegments$index.beginTime);
    setIndex(index);
    setState(function (old) {
      return _objectSpread(
        _objectSpread({}, old),
        {},
        {
          seekTime: currentTime / 1000,
        },
      );
    });
  };

  // 处理seek 后index变化后 cuurenttime变化的过程
  useEffect(
    function () {
      var _playRef$current6;
      if (state.seekTime === 0) {
        return;
      }
      setState(function (old) {
        return _objectSpread(
          _objectSpread({}, old),
          {},
          {
            seekTime: 0,
          },
        );
      });
      if ((_playRef$current6 = playRef.current) !== null && _playRef$current6 !== void 0 && _playRef$current6.video) {
        playRef.current.video.currentTime = state.seekTime;
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },
    [state.seekTime],
  );
  var hasReady = api && event;
  var timeline =
    customTimeLine !== null && customTimeLine !== void 0
      ? customTimeLine
      : /*#__PURE__*/ _jsx(SegmentTimeLine, {
          begin: begin !== null && begin !== void 0 ? begin : 0,
          seekTo: seekTo,
          index: index,
          segments: segments !== null && segments !== void 0 ? segments : [],
          duration: duration !== null && duration !== void 0 ? duration : 0,
        });
  var onInit = useCallback(function () {
    update();
    onCanPlayerInit === null || onCanPlayerInit === void 0 ? void 0 : onCanPlayerInit();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return /*#__PURE__*/ _jsx(
    SinglePlayer,
    _objectSpread(
      {
        ref: playRef,
        url: url,
        isLive: false,
        onCanPlayerInit: onInit,
        reload: reload,
        extActions: {
          setIndex: setIndex,
          seekTo: seekTo,
        },
        customTimeLine: hasReady ? timeline : /*#__PURE__*/ _jsx(_Fragment, {}),
      },
      props,
    ),
  );
}
export default SegmentPlayer;

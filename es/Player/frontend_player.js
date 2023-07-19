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
var _excluded = ['url', 'begin', 'end', 'onSeek', 'forwordRef', 'customTimeLine', 'onCanPlayerInit'];
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
import { useMemoizedFn, useUpdate } from 'ahooks';
import { useMemo, useRef } from 'react';
import Events from './event/eventName';
import FrontendTimeLine from './frontend_timeline';
import SinglePlayer from './single_player';

/**
 * @desc 主组件，负责片段整体逻辑控制
 * @return JSX.Element
 */
import { Fragment as _Fragment, jsx as _jsx } from 'react/jsx-runtime';
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
  var duration = useMemo(
    function () {
      return (end !== null && end !== void 0 ? end : 0 - (begin !== null && begin !== void 0 ? begin : 0)) / 1000;
    },
    [begin, end],
  ); //单位s 秒

  // 重置reload
  var reload = useMemoizedFn(function () {
    var _playRef$current, _playRef$current2;
    (_playRef$current = playRef.current) === null || _playRef$current === void 0 ? void 0 : _playRef$current.event.emit(Events.RELOAD);
    onSeek === null || onSeek === void 0 ? void 0 : onSeek(begin);
    (_playRef$current2 = playRef.current) === null || _playRef$current2 === void 0 ? void 0 : _playRef$current2.api.reload();
  });
  var onInit = useMemoizedFn(function () {
    update();
    onCanPlayerInit === null || onCanPlayerInit === void 0 ? void 0 : onCanPlayerInit();
  });
  var hasReady = api && event;
  var timeline =
    customTimeLine !== null && customTimeLine !== void 0
      ? customTimeLine
      : /*#__PURE__*/ _jsx(FrontendTimeLine, {
          end: end !== null && end !== void 0 ? end : 0,
          onSeek: onSeek,
          begin: begin !== null && begin !== void 0 ? begin : 0,
          duration: duration,
        });
  return /*#__PURE__*/ _jsx(
    SinglePlayer,
    _objectSpread(
      {
        ref: playRef,
        url: url,
        reload: reload,
        onCanPlayerInit: onInit,
        isLive: false,
        type: 'flv',
        customTimeLine: hasReady ? timeline : /*#__PURE__*/ _jsx(_Fragment, {}),
      },
      props,
    ),
  );
}
export default FrontendPlayer;

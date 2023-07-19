function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
}
function _iterableToArray(iter) {
  if ((typeof Symbol !== 'undefined' && iter[Symbol.iterator] != null) || iter['@@iterator'] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
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
import Flvjs from '@cloud-app-dev/mpegts.js';
import Hls from 'hls.js';
import { useEffect, useRef, useState } from 'react';
import { useRegisterPlayerEvent, useVideoEvent } from '.';
import EventName from './eventName';
function useErrorEvent(_ref) {
  var event = _ref.event,
    reload = _ref.reload,
    unload = _ref.unload,
    errorReloadTimer = _ref.errorReloadTimer,
    flv = _ref.flv,
    hls = _ref.hls,
    errorHandleAdapter = _ref.errorHandleAdapter;
  var _useState = useState(0),
    _useState2 = _slicedToArray(_useState, 2),
    errorTimer = _useState2[0],
    setErrorTime = _useState2[1];
  var errorInfo = useRef(null);
  var reloadTimer = useRef();
  var errorHandle = function errorHandle() {
    var _console;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (args[2] && args[2].msg && args[2].msg.includes('Unsupported audio')) {
      return;
    }
    (_console = console).error.apply(_console, args);
    errorInfo.current = args;
    if (!(errorHandleAdapter !== null && errorHandleAdapter !== void 0 && errorHandleAdapter(args))) {
      setErrorTime(errorTimer + 1);
    }
  };
  var clearErrorTimer = function clearErrorTimer() {
    return setErrorTime(0);
  };
  var reloadSuccess = function reloadSuccess() {
    if (errorTimer > 0) {
      console.warn('视频重连成功！');
      event === null || event === void 0 ? void 0 : event.emit(EventName.RELOAD_SUCCESS);
      clearErrorTimer();
    }
  };
  useVideoEvent('error', errorHandle, event);
  useVideoEvent('canplay', reloadSuccess, event);
  useRegisterPlayerEvent(EventName.ERROR, errorHandle, event);
  useRegisterPlayerEvent(EventName.CLEAR_ERROR_TIMER, clearErrorTimer, event);
  useEffect(
    function () {
      if (flv) {
        flv.on(Flvjs.Events.ERROR, errorHandle);
      }
      if (hls) {
        hls.on(Hls.Events.ERROR, errorHandle);
      }
      //事件销毁由flv、hls销毁时控制
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },
    [flv, hls],
  );
  useEffect(
    function () {
      if (errorTimer === 0) {
        return undefined;
      }
      if (errorTimer > errorReloadTimer) {
        unload();
        event === null || event === void 0 ? void 0 : event.emit(EventName.RELOAD_FAIL);
        return undefined;
      }
      console.warn('\u89C6\u9891\u64AD\u653E\u51FA\u9519\uFF0C\u6B63\u5728\u8FDB\u884C\u91CD\u8FDE'.concat(errorTimer));
      reloadTimer.current = setTimeout(function () {
        event === null || event === void 0 ? void 0 : event.emit.apply(event, [EventName.ERROR_RELOAD, errorTimer].concat(_toConsumableArray(errorInfo.current)));
        reload();
      }, 2 * 1000);
      return function () {
        clearTimeout(reloadTimer.current);
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },
    [errorTimer, event, flv, hls],
  );
}
export default useErrorEvent;

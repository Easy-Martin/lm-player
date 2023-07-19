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
import useLatest from 'ahooks/es/useLatest';
import useMemoizedFn from 'ahooks/es/useMemoizedFn';
import useUnmount from 'ahooks/es/useUnmount';
import { getTargetElement } from 'ahooks/es/utils/domTarget';
import { useState } from 'react';
import screenfull from 'screenfull';
var useFullscreen = function useFullscreen(target, options) {
  var _ref = options || {},
    onExit = _ref.onExit,
    onEnter = _ref.onEnter;
  var onExitRef = useLatest(onExit);
  var onEnterRef = useLatest(onEnter);
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    state = _useState2[0],
    setState = _useState2[1];
  var onChange = function onChange() {
    if (screenfull.isEnabled) {
      var el = getTargetElement(target);
      var isFullscreen = document.fullscreenElement === el;
      if (isFullscreen) {
        var _onEnterRef$current;
        (_onEnterRef$current = onEnterRef.current) === null || _onEnterRef$current === void 0 ? void 0 : _onEnterRef$current.call(onEnterRef);
      } else {
        var _onExitRef$current;
        screenfull.off('change', onChange);
        (_onExitRef$current = onExitRef.current) === null || _onExitRef$current === void 0 ? void 0 : _onExitRef$current.call(onExitRef);
      }
      setState(isFullscreen);
    }
  };
  var enterFullscreen = function enterFullscreen() {
    var el = getTargetElement(target);
    if (!el) {
      return;
    }
    if (screenfull.isEnabled) {
      try {
        screenfull.request(el);
        screenfull.on('change', onChange);
      } catch (error) {
        console.error(error);
      }
    }
  };
  var exitFullscreen = function exitFullscreen() {
    if (screenfull.isEnabled) {
      screenfull.exit();
    }
  };
  var toggleFullscreen = function toggleFullscreen() {
    if (state) {
      exitFullscreen();
    } else {
      enterFullscreen();
    }
  };
  useUnmount(function () {
    if (screenfull.isEnabled) {
      screenfull.off('change', onChange);
    }
  });
  return [
    state,
    {
      enterFullscreen: useMemoizedFn(enterFullscreen),
      exitFullscreen: useMemoizedFn(exitFullscreen),
      toggleFullscreen: useMemoizedFn(toggleFullscreen),
      isEnabled: screenfull.isEnabled,
    },
  ];
};
export default useFullscreen;

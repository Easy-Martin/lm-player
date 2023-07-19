function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === 'Object' && o.constructor) n = o.constructor.name;
  if (n === 'Map' || n === 'Set') return Array.from(o);
  if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _iterableToArray(iter) {
  if ((typeof Symbol !== 'undefined' && iter[Symbol.iterator] != null) || iter['@@iterator'] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
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
import { useLatest } from 'ahooks';
import { isNumber } from 'lodash-es';
import { useCallback, useEffect, useRef } from 'react';
var setRafInterval = function setRafInterval(callback) {
  var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  if ((typeof requestAnimationFrame === 'undefined' ? 'undefined' : _typeof(requestAnimationFrame)) === (typeof undefined === 'undefined' ? 'undefined' : _typeof(undefined))) {
    return {
      id: setInterval(callback, delay),
    };
  }
  var start = new Date().getTime();
  var handle = {
    id: 0,
  };
  var loop = function loop() {
    var current = new Date().getTime();
    if (current - start >= delay) {
      callback();
      start = new Date().getTime();
    }
    handle.id = requestAnimationFrame(loop);
  };
  handle.id = requestAnimationFrame(loop);
  return handle;
};
function cancelAnimationFrameIsNotDefined(t) {
  return (typeof cancelAnimationFrame === 'undefined' ? 'undefined' : _typeof(cancelAnimationFrame)) === (typeof undefined === 'undefined' ? 'undefined' : _typeof(undefined));
}
var clearRafInterval = function clearRafInterval(handle) {
  if (cancelAnimationFrameIsNotDefined(handle.id)) {
    return clearInterval(handle.id);
  }
  cancelAnimationFrame(handle.id);
};
function useRafInterval(fn, delay, options) {
  var _options$deps;
  var immediate = options === null || options === void 0 ? void 0 : options.immediate;
  var deps = (_options$deps = options === null || options === void 0 ? void 0 : options.deps) !== null && _options$deps !== void 0 ? _options$deps : [];
  var fnRef = useLatest(fn);
  var timerRef = useRef();
  useEffect(function () {
    if (!isNumber(delay) || delay < 0) return undefined;
    if (immediate) {
      fnRef.current();
    }
    timerRef.current = setRafInterval(function () {
      fnRef.current();
    }, delay);
    return function () {
      if (timerRef.current) {
        clearRafInterval(timerRef.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [delay].concat(_toConsumableArray(deps)));
  var clear = useCallback(function () {
    if (timerRef.current) {
      clearRafInterval(timerRef.current);
    }
  }, []);
  return clear;
}
export default useRafInterval;

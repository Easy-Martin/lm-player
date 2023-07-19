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
import { useContext, useMemo, useState } from 'react';
import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime';
import { Context } from './context';
import useBarStatus from './contraller_bar/useBarStatus';
import { useVideoEvent } from './event';
import './style/timeline.less';
export function useTimes() {
  var _useContext = useContext(Context),
    api = _useContext.api,
    isFpsPlay = _useContext.isFpsPlay;
  var _useState = useState({
      currentTime: 0,
      buffered: 0,
    }),
    _useState2 = _slicedToArray(_useState, 2),
    state = _useState2[0],
    setState = _useState2[1];
  var getCurrentTime = function getCurrentTime() {
    return setState(function (old) {
      var _api$getCurrentTime, _api$getSecondsLoaded;
      return _objectSpread(
        _objectSpread({}, old),
        {},
        {
          currentTime: (_api$getCurrentTime = api === null || api === void 0 ? void 0 : api.getCurrentTime()) !== null && _api$getCurrentTime !== void 0 ? _api$getCurrentTime : 0,
          buffered: (_api$getSecondsLoaded = api === null || api === void 0 ? void 0 : api.getSecondsLoaded()) !== null && _api$getSecondsLoaded !== void 0 ? _api$getSecondsLoaded : 0,
        },
      );
    });
  };
  var getBuffered = function getBuffered() {
    return setState(function (old) {
      var _api$getSecondsLoaded2;
      return _objectSpread(
        _objectSpread({}, old),
        {},
        {
          buffered: (_api$getSecondsLoaded2 = api === null || api === void 0 ? void 0 : api.getSecondsLoaded()) !== null && _api$getSecondsLoaded2 !== void 0 ? _api$getSecondsLoaded2 : 0,
        },
      );
    });
  };
  var seekendPlay = function seekendPlay() {
    return !isFpsPlay && (api === null || api === void 0 ? void 0 : api.play());
  };
  useVideoEvent('timeupdate', getCurrentTime);
  useVideoEvent('progress', getBuffered);
  useVideoEvent('suspend', getBuffered);
  useVideoEvent('seeked', seekendPlay);
  return useMemo(
    function () {
      var _api$getDuration;
      return [state.currentTime, state.buffered, (_api$getDuration = api === null || api === void 0 ? void 0 : api.getDuration()) !== null && _api$getDuration !== void 0 ? _api$getDuration : 0];
    },
    [state.currentTime, state.buffered, api],
  );
}
function TimeLine() {
  var _useContext2 = useContext(Context),
    api = _useContext2.api;
  var status = useBarStatus();
  var _useTimes = useTimes(),
    _useTimes2 = _slicedToArray(_useTimes, 3),
    currentTime = _useTimes2[0],
    buffered = _useTimes2[1],
    duration = _useTimes2[2];
  var playPercent = useMemo(
    function () {
      return (currentTime / duration) * 100;
    },
    [currentTime, duration],
  );
  var bufferedPercent = useMemo(
    function () {
      return (buffered / duration) * 100;
    },
    [buffered, duration],
  );
  var seekWithLine = function seekWithLine(e) {
    var _api$getDuration2;
    var rect = e.currentTarget.getBoundingClientRect();
    var current = e.pageX - rect.left;
    var cTime = (current / rect.width) * ((_api$getDuration2 = api === null || api === void 0 ? void 0 : api.getDuration()) !== null && _api$getDuration2 !== void 0 ? _api$getDuration2 : 0);
    api === null || api === void 0 ? void 0 : api.seekTo(cTime);
  };
  return /*#__PURE__*/ _jsxs('div', {
    className: 'player-timeline-layout '.concat(status === 0 ? 'hide-time-line' : ''),
    onClick: seekWithLine,
    children: [
      /*#__PURE__*/ _jsx('div', {
        className: 'buffer-line',
        style: {
          width: ''.concat(bufferedPercent, '%'),
        },
      }),
      /*#__PURE__*/ _jsx('div', {
        className: 'current-line',
        style: {
          width: ''.concat(playPercent, '%'),
        },
      }),
    ],
  });
}
export default TimeLine;

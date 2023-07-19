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
import { useUpdateEffect } from 'ahooks';
import moment from 'dayjs';
import { startTransition, useMemo, useState } from 'react';
import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime';
import useBarStatus from './contraller_bar/useBarStatus';
import './style/timeline.less';
import { useTimes } from './timeline';
import { FMT } from './util';
function TipTitle(_ref) {
  var end = _ref.end,
    begin = _ref.begin,
    left = _ref.left,
    current = _ref.current,
    markTime = _ref.markTime;
  if (left === -1) {
    return null;
  }
  return /*#__PURE__*/ _jsxs('div', {
    className: 'frontend-line-tip-box',
    style: {
      left: left,
    },
    children: [
      /*#__PURE__*/ _jsx('div', {
        style: {
          fontWeight: 600,
        },
        children: '\u5F55\u50CF\u4FE1\u606F',
      }),
      /*#__PURE__*/ _jsxs('div', {
        children: ['\u5F00\u59CB\uFF1A', moment(begin).format(FMT)],
      }),
      /*#__PURE__*/ _jsxs('div', {
        children: ['\u7ED3\u675F\uFF1A', moment(end).format(FMT)],
      }),
      /*#__PURE__*/ _jsxs('div', {
        children: ['\u523B\u5EA6\uFF1A', moment(markTime).format(FMT)],
      }),
      /*#__PURE__*/ _jsxs('div', {
        children: ['\u5F53\u524D\uFF1A', moment(current).format(FMT)],
      }),
    ],
  });
}
function FrontendTimeLine(_ref2) {
  var duration = _ref2.duration,
    begin = _ref2.begin,
    end = _ref2.end,
    onSeek = _ref2.onSeek;
  // time 是记录seek时跳了多少
  var _useState = useState({
      time: 0,
      markTime: 0,
      left: -1,
      visible: false,
    }),
    _useState2 = _slicedToArray(_useState, 2),
    state = _useState2[0],
    setState = _useState2[1];
  var status = useBarStatus();

  //获取视频当前播放时长单位s
  var _useTimes = useTimes(),
    _useTimes2 = _slicedToArray(_useTimes, 1),
    currentTime = _useTimes2[0];
  var rTime = useMemo(
    function () {
      return state.time + currentTime;
    },
    [state.time, currentTime],
  );
  useUpdateEffect(
    function () {
      return setState(function (old) {
        return _objectSpread(
          _objectSpread({}, old),
          {},
          {
            time: 0,
          },
        );
      });
    },
    [begin],
  );
  var playPercent = useMemo(
    function () {
      return (rTime / duration) * 100;
    },
    [duration, rTime],
  );
  var cTime = useMemo(
    function () {
      return begin + rTime * 1000;
    },
    [begin, rTime],
  );
  var seekWithLine = function seekWithLine(e) {
    var rect = e.currentTarget.getBoundingClientRect();
    var current = e.pageX - rect.left;
    var cTime = (current / rect.width) * duration;
    onSeek === null || onSeek === void 0 ? void 0 : onSeek(begin + cTime * 1000);
    //时间轴进度条rTime是要加上currentTime,这里要减去一下，包装交互一致性
    setState(function (old) {
      return _objectSpread(
        _objectSpread({}, old),
        {},
        {
          time: cTime,
        },
      );
    });
  };
  var onLineMouseOver = function onLineMouseOver(e) {
    var rect = e.currentTarget.getBoundingClientRect();
    var left = e.pageX - rect.left;
    var mTime = (left / rect.width) * duration;
    setState(function (old) {
      return _objectSpread(
        _objectSpread({}, old),
        {},
        {
          left: left,
          markTime: begin + mTime * 1000,
        },
      );
    });
  };
  var onLineMouseOut = function onLineMouseOut() {
    return startTransition(function () {
      return setState(function (old) {
        return _objectSpread(
          _objectSpread({}, old),
          {},
          {
            left: -1,
          },
        );
      });
    });
  };
  return /*#__PURE__*/ _jsxs('div', {
    className: 'player-timeline-layout frontend-player-timeline-layout '.concat(status === 0 ? 'hide-time-line' : ''),
    onClick: seekWithLine,
    onMouseMove: onLineMouseOver,
    onMouseOut: onLineMouseOut,
    children: [
      /*#__PURE__*/ _jsx('div', {
        className: 'current-line',
        style: {
          width: ''.concat(playPercent, '%'),
        },
      }),
      /*#__PURE__*/ _jsx(TipTitle, {
        end: end,
        begin: begin,
        left: state.left,
        current: cTime,
        markTime: state.markTime,
      }),
      state.left !== -1 &&
        /*#__PURE__*/ _jsx('span', {
          className: 'frontend-line-mark',
          style: {
            left: state.left,
          },
        }),
    ],
  });
}
export default FrontendTimeLine;

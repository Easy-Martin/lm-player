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
import { Tooltip } from 'antd';
import moment from 'dayjs';
import { startTransition, useMemo, useState } from 'react';
import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime';
import useBarStatus from './contraller_bar/useBarStatus';
import './style/timeline.less';
import { useTimes } from './timeline';
import { FMT } from './util';
function TipTitle(_ref) {
  var index = _ref.index,
    segments = _ref.segments,
    begin = _ref.begin,
    current = _ref.current,
    markTime = _ref.markTime;
  var _useMemo = useMemo(
      function () {
        if (index === 0) {
          var _start = begin;
          var _end = begin + (segments[0].endTime - segments[0].beginTime);
          return {
            start: moment(_start).format(FMT),
            end: moment(_end).format(FMT),
          };
        }
        var indexDuration = segments
          .map(function (v) {
            return v.endTime - v.beginTime;
          })
          .reduce(function (a, b, i) {
            return i >= index ? a : a + b;
          }, 0);
        var start = begin + indexDuration;
        var end = start + (segments[index].endTime - segments[index].beginTime);
        return {
          start: moment(start).format(FMT),
          end: moment(end).format(FMT),
        };
      },
      [index, segments, begin],
    ),
    start = _useMemo.start,
    end = _useMemo.end;
  var hasUrl = useMemo(
    function () {
      var _segments$index;
      return (_segments$index = segments[index]) !== null && _segments$index !== void 0 && _segments$index.url ? true : false;
    },
    [index, segments],
  );
  return /*#__PURE__*/ _jsxs('div', {
    className: 'segment-line-tip-box',
    children: [
      /*#__PURE__*/ _jsx('div', {
        style: {
          fontWeight: 600,
        },
        children: '\u5F55\u50CF\u7247\u6BB5\u4FE1\u606F',
      }),
      /*#__PURE__*/ _jsxs('div', {
        children: ['\u5F00\u59CB\uFF1A', start],
      }),
      /*#__PURE__*/ _jsxs('div', {
        children: ['\u7ED3\u675F\uFF1A', end],
      }),
      /*#__PURE__*/ _jsxs('div', {
        children: ['\u523B\u5EA6\uFF1A', moment(markTime).format(FMT)],
      }),
      /*#__PURE__*/ _jsxs('div', {
        children: ['\u5F53\u524D\uFF1A', moment(current).format(FMT)],
      }),
      /*#__PURE__*/ _jsxs('div', {
        children: [
          '\u72B6\u6001\uFF1A',
          /*#__PURE__*/ _jsx('span', {
            style: {
              color: hasUrl ? 'green' : 'red',
            },
            children: hasUrl ? '正常' : '缺失',
          }),
        ],
      }),
    ],
  });
}
function SegmentTimeLine(_ref2) {
  var index = _ref2.index,
    segments = _ref2.segments,
    duration = _ref2.duration,
    begin = _ref2.begin,
    seekTo = _ref2.seekTo;
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
  var _useTimes = useTimes(),
    _useTimes2 = _slicedToArray(_useTimes, 2),
    currentTime = _useTimes2[0],
    buffered = _useTimes2[1];
  var indexDuration = useMemo(
    function () {
      return segments
        .map(function (v) {
          return (v.endTime - v.beginTime) / 1000;
        })
        .reduce(function (a, b, i) {
          return i >= index ? a : a + b;
        }, 0);
    },
    [index, segments],
  );
  var playPercent = useMemo(
    function () {
      return ((currentTime + indexDuration) / duration) * 100;
    },
    [currentTime, duration, indexDuration],
  );
  var bufferedPercent = useMemo(
    function () {
      return ((buffered + indexDuration) / duration) * 100;
    },
    [buffered, duration, indexDuration],
  );
  var seekWithLine = function seekWithLine(e, i) {
    if (!segments[i].url) {
      return;
    }
    var ele = e.currentTarget;
    var rect = ele.getBoundingClientRect();
    var current = e.pageX - rect.left;
    var item = segments[i - 1];
    var pTime = item ? item.endTime : begin;
    var duration = segments[i].endTime - segments[i].beginTime;
    var currentTime = (current / rect.width) * duration;
    seekTo(Math.round(currentTime + pTime));
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
  return /*#__PURE__*/ _jsx('div', {
    className: 'player-timeline-layout player-segment-timeline-layout '.concat(status === 0 ? 'hide-time-line' : ''),
    onMouseMove: onLineMouseOver,
    onMouseOut: onLineMouseOut,
    children: /*#__PURE__*/ _jsxs('div', {
      className: 'segment-line-box',
      children: [
        segments.map(function (v, i) {
          return /*#__PURE__*/ _jsx(
            Tooltip,
            {
              title: /*#__PURE__*/ _jsx(TipTitle, {
                segments: segments,
                index: i,
                begin: begin,
                current: currentTime * 1000 + begin,
                markTime: state.markTime,
              }),
              children: /*#__PURE__*/ _jsx('div', {
                className: 'segment-line-item '.concat(!v.url ? 'segment-line-item-none' : '', ' ').concat(i === segments.length - 1 ? 'last-segment-line-item' : ''),
                onClick: function onClick(e) {
                  return seekWithLine(e, i);
                },
                style: {
                  width: ''.concat(((v.endTime / 1000 - v.beginTime / 1000) / duration) * 100, '%'),
                },
              }),
            },
            'time-line-'.concat(i),
          );
        }),
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
        state.left !== -1 &&
          /*#__PURE__*/ _jsx('span', {
            className: 'segment-line-mark',
            style: {
              left: state.left,
            },
          }),
      ],
    }),
  });
}
export default SegmentTimeLine;

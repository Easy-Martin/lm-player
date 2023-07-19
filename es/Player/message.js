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
import { useContext, useMemo, useRef, useState } from 'react';
import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime';
import { Context } from './context';
import { useRegisterPlayerEvent, useVideoEvent } from './event';
import EventName from './event/eventName';
import IconFont from './iconfont';
import './style/message.less';
function VideoMessage() {
  var _useContext = useContext(Context),
    api = _useContext.api;
  var _useState = useState({
      status: null,
      errorTimer: 1,
      loading: false,
    }),
    _useState2 = _slicedToArray(_useState, 2),
    state = _useState2[0],
    setState = _useState2[1];
  var timeRef = useRef();
  var message = useMemo(
    function () {
      if (state.status === 'fail') {
        console.warn('\u89C6\u9891\u9519\u8BEF\uFF0C\u8BF7\u624B\u52A8\u5237\u65B0\u91CD\u8BD5\uFF01');
        return '请稍后重试！';
      }
      if (state.status === 'reload') {
        console.warn('\u7B2C'.concat(state.errorTimer, '\u6B21\u91CD\u8FDE'));
        return '\u6B63\u5728\u5237\u65B0...';
      }
      return '';
    },
    [state.errorTimer, state.status],
  );
  var openLoading = function openLoading() {
    clearTimeout(timeRef.current);
    timeRef.current = setTimeout(function () {
      return setState(function (old) {
        return _objectSpread(
          _objectSpread({}, old),
          {},
          {
            loading: true,
          },
        );
      });
    }, 200);
  };
  var closeLoading = function closeLoading() {
    clearTimeout(timeRef.current);
    setState(function (old) {
      return _objectSpread(
        _objectSpread({}, old),
        {},
        {
          loading: false,
        },
      );
    });
  };
  var errorReload = function errorReload(timer) {
    clearTimeout(timeRef.current);
    setState(function () {
      return {
        status: 'reload',
        errorTimer: timer,
        loading: true,
      };
    });
  };
  var reloadFail = function reloadFail() {
    return setState(function (old) {
      return _objectSpread(
        _objectSpread({}, old),
        {},
        {
          status: 'fail',
        },
      );
    });
  };
  var reloadSuccess = function reloadSuccess() {
    return setState(function (old) {
      return _objectSpread(
        _objectSpread({}, old),
        {},
        {
          status: null,
        },
      );
    });
  };
  var reload = function reload() {
    return setState(function (old) {
      return _objectSpread(
        _objectSpread({}, old),
        {},
        {
          status: 'reload',
          loading: true,
        },
      );
    });
  };
  var playEnd = function playEnd() {
    clearTimeout(timeRef.current);
    setState(function (old) {
      return _objectSpread(
        _objectSpread({}, old),
        {},
        {
          status: null,
          loading: false,
        },
      );
    });
    api === null || api === void 0 ? void 0 : api.pause();
  };
  useVideoEvent('loadstart', openLoading);
  useVideoEvent('loadeddata', closeLoading);
  useVideoEvent('canplay', closeLoading);
  useRegisterPlayerEvent(EventName.ERROR_RELOAD, errorReload);
  useRegisterPlayerEvent(EventName.RELOAD_FAIL, reloadFail);
  useRegisterPlayerEvent(EventName.RELOAD_SUCCESS, reloadSuccess);
  useRegisterPlayerEvent(EventName.RELOAD, reload);
  useRegisterPlayerEvent(EventName.HISTORY_PLAY_END, playEnd);
  useRegisterPlayerEvent(EventName.CLEAR_ERROR_TIMER, reloadSuccess);
  var loading = state.loading,
    status = state.status;
  return /*#__PURE__*/ _jsxs('div', {
    className: 'lm-player-message-mask '.concat(loading || status === 'fail' ? 'lm-player-mask-loading-animation' : ''),
    children: [
      /*#__PURE__*/ _jsx(IconFont, {
        type: status === 'fail' ? 'lm-player-YesorNo_No_Dark' : 'lm-player-Loading',
        className: ''.concat(loading && status !== 'fail' ? 'lm-player-loading-animation' : status === 'fail' ? 'lm-player-loadfail' : '', ' lm-player-loading-icon'),
      }),
      /*#__PURE__*/ _jsx('span', {
        className: 'lm-player-message',
        children: message,
      }),
    ],
  });
}
export var NoSource = function NoSource() {
  return /*#__PURE__*/ _jsx('div', {
    className: 'lm-player-message-mask lm-player-mask-loading-animation',
    children: /*#__PURE__*/ _jsx(IconFont, {
      style: {
        fontSize: 80,
      },
      type: 'lm-player-PlaySource',
      title: '\u8BF7\u9009\u62E9\u89C6\u9891\u6E90',
    }),
  });
};
export default VideoMessage;

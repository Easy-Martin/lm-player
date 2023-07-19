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
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ('value' in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, 'prototype', { writable: false });
  return Constructor;
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
/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useLatest } from 'ahooks';
import { useContext, useEffect, useMemo, useState } from 'react';
import nextTick from '../../nextTick';
import { Context } from '../context';
var VideoEventInstance = /*#__PURE__*/ (function () {
  function VideoEventInstance(video) {
    _classCallCheck(this, VideoEventInstance);
    _defineProperty(this, 'video', void 0);
    _defineProperty(this, 'events', void 0);
    _defineProperty(this, 'playerEvents', void 0);
    this.video = video;
    this.events = {};
    this.playerEvents = {};
  }
  _createClass(VideoEventInstance, [
    {
      key: 'on',
      value: function on(eventName, handle) {
        this.events && this.events[eventName]
          ? this.events[eventName].listener.push(handle)
          : (this.events[eventName] = {
              type: eventName,
              listener: [handle],
            });
      },
    },
    {
      key: 'addEventListener',
      value: function addEventListener(eventName, handle) {
        if (this.video) {
          this.playerEvents[eventName] ? this.playerEvents[eventName].push(handle) : (this.playerEvents[eventName] = [handle]);
          this.video.addEventListener(eventName, handle, false);
        }
      },
    },
    {
      key: 'removeEventListener',
      value: function removeEventListener(eventName, handle) {
        if (this.video) {
          if (!this.playerEvents || !this.playerEvents[eventName]) {
            return;
          }
          var index = this.playerEvents[eventName].findIndex(function (v) {
            return v === handle;
          });
          index > -1 && this.playerEvents[eventName].splice(index, 1);
          this.video.removeEventListener(eventName, handle, false);
        }
      },
    },
    {
      key: 'emit',
      value: function emit(eventName) {
        for (var _len = arguments.length, data = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          data[_key - 1] = arguments[_key];
        }
        if (!this.events || !this.events[eventName]) {
          return;
        }
        this.events[eventName].listener.forEach(function (v) {
          v.apply(void 0, data);
        });
      },
    },
    {
      key: 'off',
      value: function off(eventName, handle) {
        if (!this.events || !this.events.eventName) {
          return;
        }
        var index = this.events[eventName].listener.findIndex(function (v) {
          return v === handle;
        });
        index > -1 && this.events[eventName].listener.splice(index, 1);
      },
    },
    {
      key: 'destroy',
      value: function destroy() {
        var _this = this;
        Object.keys(this.playerEvents).forEach(function (key) {
          _this.playerEvents[key].forEach(function (fn) {
            _this.removeEventListener(key, fn);
          });
        });
        this.playerEvents = {};
        this.events = {};
        this.video = null;
      },
    },
  ]);
  return VideoEventInstance;
})();
export function usePlayerEvent(video) {
  var _useState = useState(undefined),
    _useState2 = _slicedToArray(_useState, 2),
    event = _useState2[0],
    setEvent = _useState2[1];
  useEffect(
    function () {
      if (!video) {
        console.debug('wait create event...');
        return undefined;
      }
      var event = new VideoEventInstance(video);
      setEvent(event);
      return function () {
        return nextTick(function () {
          return event.destroy();
        });
      };
    },
    [video],
  );
  return event;
}
export function useVideoEvent(eventName, handle, context) {
  var ctx = useContext(Context);
  var event = useMemo(
    function () {
      var _ctx$event;
      return (_ctx$event = ctx === null || ctx === void 0 ? void 0 : ctx.event) !== null && _ctx$event !== void 0 ? _ctx$event : context;
    },
    [context, ctx === null || ctx === void 0 ? void 0 : ctx.event],
  );
  var handlerRef = useLatest(handle);
  useEffect(
    function () {
      if (!event) {
        return undefined;
      }
      var eventListener = function eventListener(event) {
        return handlerRef.current(event);
      };
      event.addEventListener(eventName, eventListener);
      return function () {
        return event.removeEventListener(eventName, eventListener);
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },
    [event, eventName],
  );
}
export function useRegisterPlayerEvent(eventName, handle, context) {
  var ctx = useContext(Context);
  var event = useMemo(
    function () {
      var _ctx$event2;
      return (_ctx$event2 = ctx === null || ctx === void 0 ? void 0 : ctx.event) !== null && _ctx$event2 !== void 0 ? _ctx$event2 : context;
    },
    [context, ctx === null || ctx === void 0 ? void 0 : ctx.event],
  );
  var handlerRef = useLatest(handle);
  useEffect(
    function () {
      if (!event) {
        return undefined;
      }
      var eventListener = function eventListener(event) {
        return handlerRef.current(event);
      };
      event.on(eventName, eventListener);
      return function () {
        event.off(eventName, eventListener);
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },
    [event, eventName],
  );
}
export function useVideoEvents(event, events) {
  useEffect(
    function () {
      if (!event || !events) {
        return undefined;
      }
      events.forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
          eventName = _ref2[0],
          handle = _ref2[1];
        event.addEventListener(eventName, handle);
      });
      return function () {
        events.forEach(function (_ref3) {
          var _ref4 = _slicedToArray(_ref3, 2),
            eventName = _ref4[0],
            handle = _ref4[1];
          event.removeEventListener(eventName, handle);
        });
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },
    [event],
  );
}
export function useRegisterPlayerEvents(event, events) {
  useEffect(
    function () {
      if (!event || !events) {
        return undefined;
      }
      events.forEach(function (_ref5) {
        var _ref6 = _slicedToArray(_ref5, 2),
          eventName = _ref6[0],
          handle = _ref6[1];
        event.on(eventName, handle);
      });
      return function () {
        events.forEach(function (_ref7) {
          var _ref8 = _slicedToArray(_ref7, 2),
            eventName = _ref8[0],
            handle = _ref8[1];
          event.off(eventName, handle);
        });
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },
    [event],
  );
}
export default VideoEventInstance;

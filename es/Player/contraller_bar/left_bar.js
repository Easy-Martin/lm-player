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
import { useCallback, useContext, useMemo, useState } from 'react';
import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime';
import { Context } from '../context';
import { useVideoEvent } from '../event';
import EventName from '../event/eventName';
import IconFont from '../iconfont';
import Bar from './bar';
import Time from './time';
import Volume from './volume';
function LeftBar(_ref) {
  var reload = _ref.reload,
    leftExtContents = _ref.leftExtContents,
    leftMidExtContents = _ref.leftMidExtContents,
    hideTimeProgress = _ref.hideTimeProgress,
    oneFpsPlay = _ref.oneFpsPlay;
  var _useContext = useContext(Context),
    api = _useContext.api,
    container = _useContext.container,
    isLive = _useContext.isLive,
    isFpsPlay = _useContext.isFpsPlay,
    event = _useContext.event;
  var _useState = useState(Date.now()),
    _useState2 = _slicedToArray(_useState, 2),
    dep = _useState2[0],
    setDep = _useState2[1];
  var updateRender = function updateRender() {
    return setDep(Date.now());
  };
  useVideoEvent('play', updateRender);
  useVideoEvent('pause', updateRender);
  useVideoEvent('volumechange', updateRender);
  var video = container === null || container === void 0 ? void 0 : container.querySelector('video');
  //缓存值
  // eslint-disable-next-line react-hooks/exhaustive-deps
  var paused = useMemo(
    function () {
      return video === null || video === void 0 ? void 0 : video.paused;
    },
    [dep, video],
  );
  var statusIconClassName = useMemo(
    function () {
      return paused ? 'lm-player-Play_Main' : 'lm-player-Pause_Main';
    },
    [paused],
  );
  var statusText = useMemo(
    function () {
      return paused ? '播放' : '暂停';
    },
    [paused],
  );

  //TODO 方法
  var changePlayStatus = useCallback(
    function () {
      if (video !== null && video !== void 0 && video.paused) {
        var _api$getSecondsLoaded;
        var buffered = (_api$getSecondsLoaded = api === null || api === void 0 ? void 0 : api.getSecondsLoaded()) !== null && _api$getSecondsLoaded !== void 0 ? _api$getSecondsLoaded : 1;
        api === null || api === void 0 ? void 0 : api.seekTo(buffered - 1);
        api === null || api === void 0 ? void 0 : api.play();
      } else {
        api === null || api === void 0 ? void 0 : api.pause();
      }
    },
    [video, api],
  );
  return /*#__PURE__*/ _jsxs('div', {
    className: 'contraller-left-bar',
    children: [
      leftExtContents,
      !isFpsPlay &&
        /*#__PURE__*/ _jsx(Bar, {
          children: /*#__PURE__*/ _jsx(IconFont, {
            onClick: changePlayStatus,
            type: statusIconClassName,
            title: statusText,
          }),
        }),
      /*#__PURE__*/ _jsx(Bar, {
        children: /*#__PURE__*/ _jsx(Volume, {
          api: api,
        }),
      }),
      !isLive && !hideTimeProgress && /*#__PURE__*/ _jsx(Time, {}),
      /*#__PURE__*/ _jsx(Bar, {
        children: /*#__PURE__*/ _jsx(IconFont, {
          onClick: function onClick() {
            event === null || event === void 0 ? void 0 : event.emit(EventName.CLEAR_ERROR_TIMER);
            event === null || event === void 0 ? void 0 : event.emit(EventName.RELOAD_SUCCESS);
            reload();
          },
          type: 'lm-player-Refresh_Main',
          title: '\u91CD\u8F7D',
        }),
      }),
      !isLive &&
        oneFpsPlay &&
        /*#__PURE__*/ _jsx(Bar, {
          children: /*#__PURE__*/ _jsx(IconFont, {
            onClick: isFpsPlay ? (api === null || api === void 0 ? void 0 : api.closeFpsPlay) : api === null || api === void 0 ? void 0 : api.openFpsPlay,
            type: 'lm-player-zhuzhenplay',
            title: '\u9010\u5E27\u64AD\u653E',
          }),
        }),
      leftMidExtContents,
    ],
  });
}
export default LeftBar;

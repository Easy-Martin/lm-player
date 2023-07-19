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
import { useUpdate, useUpdateEffect } from 'ahooks';
import { Slider, Tooltip } from 'antd';
import React, { useMemo, useState } from 'react';
import { jsx as _jsx } from 'react/jsx-runtime';
import IconFont from '../iconfont';
import '../style/volume.less';
function Volume(_ref) {
  var _api$getVolume;
  var api = _ref.api,
    style = _ref.style;
  var _useState = useState(Math.round((_api$getVolume = api === null || api === void 0 ? void 0 : api.getVolume()) !== null && _api$getVolume !== void 0 ? _api$getVolume : 0 * 100)),
    _useState2 = _slicedToArray(_useState, 2),
    val = _useState2[0],
    setVal = _useState2[1];
  var update = useUpdate();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  var volume = useMemo(function () {
    return api !== null && api !== void 0 && api.muted ? 0 : val;
  }, undefined);
  var onChange = function onChange(num) {
    if (api !== null && api !== void 0 && api.muted) {
      api === null || api === void 0 ? void 0 : api.unmute();
    }
    setVal(num);
    update();
  };
  var toggleMuted = function toggleMuted() {
    if (!api) {
      return;
    }
    if (api.muted) {
      api.unmute();
      setVal(100);
    } else {
      api.mute();
      setVal(0);
    }
    update();
  };
  useUpdateEffect(
    function () {
      return api === null || api === void 0 ? void 0 : api.setVolume(val / 100);
    },
    [val],
  );
  return /*#__PURE__*/ _jsx(Tooltip, {
    arrow: false,
    overlayClassName: 'lm-player-volume-popup',
    title: /*#__PURE__*/ _jsx(Slider, {
      onChange: onChange,
      vertical: true,
      value: val,
    }),
    children: /*#__PURE__*/ _jsx(IconFont, {
      style: style,
      type: volume !== 0 ? 'lm-player-volume-open' : 'lm-player-volume-close',
      onClick: toggleMuted,
    }),
  });
}
export default /*#__PURE__*/ React.memo(Volume);

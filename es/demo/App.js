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
import { Button, Input, Select } from 'antd';
import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime';
import { Player } from '../index';
import useSimpleState from '../useSimpleState';
var Option = Select.Option;
var options = [
  {
    value: '',
    label: '自动',
  },
  {
    value: 'flv',
    label: 'FLV',
  },
  {
    value: 'hls',
    label: 'HLS',
  },
];
var App = function App() {
  var _useSimpleState = useSimpleState({
      isLive: true,
      url: '',
      type: '',
      playUrl: '',
    }),
    _useSimpleState2 = _slicedToArray(_useSimpleState, 2),
    state = _useSimpleState2[0],
    updateState = _useSimpleState2[1];
  return /*#__PURE__*/ _jsxs('div', {
    className: 'live-demo',
    children: [
      /*#__PURE__*/ _jsx('h2', {
        children: 'SinglePlayer\u9002\u7528\u76F4\u64AD \u6216\u8005\u5176\u4ED6\u5355\u6587\u4EF6\u64AD\u653E \u652F\u6301flv m3u8',
      }),
      /*#__PURE__*/ _jsxs('div', {
        className: 'tools-select',
        children: [
          /*#__PURE__*/ _jsx(Select, {
            onChange: function onChange(val) {
              return updateState({
                type: val,
              });
            },
            value: state.type,
            children: options.map(function (v) {
              return /*#__PURE__*/ _jsx(
                Option,
                {
                  value: v.value,
                  children: v.label,
                },
                v.value,
              );
            }),
          }),
          /*#__PURE__*/ _jsx(Input, {
            className: 'url',
            name: 'url',
            value: state.url,
            onChange: function onChange(e) {
              return updateState({
                url: e.target.value,
              });
            },
            placeholder: '\u8BF7\u8F93\u5165\u89C6\u9891\u5730\u5740',
          }),
          /*#__PURE__*/ _jsxs(Select, {
            value: state.isLive,
            onChange: function onChange(val) {
              return updateState({
                isLive: val,
              });
            },
            children: [
              /*#__PURE__*/ _jsx(Option, {
                value: false,
                children: '\u5F55\u50CF',
              }),
              /*#__PURE__*/ _jsx(Option, {
                value: true,
                children: '\u76F4\u64AD',
              }),
            ],
          }),
          /*#__PURE__*/ _jsxs('span', {
            className: 'local-video',
            children: [
              /*#__PURE__*/ _jsx('input', {
                type: 'file',
                name: '',
                id: '',
                onChange: function onChange(e) {
                  var _e$target$files$, _e$target$files;
                  return updateState({
                    url: URL.createObjectURL(
                      (_e$target$files$ = (_e$target$files = e.target.files) === null || _e$target$files === void 0 ? void 0 : _e$target$files[0]) !== null && _e$target$files$ !== void 0
                        ? _e$target$files$
                        : new Blob(),
                    ),
                  });
                },
              }),
              /*#__PURE__*/ _jsx(Button, {
                children: '\u672C\u5730\u5F55\u50CF',
              }),
            ],
          }),
          /*#__PURE__*/ _jsx(Button, {
            style: {
              width: 60,
              height: 32,
            },
            onClick: function onClick() {
              return updateState({
                playUrl: state.url,
              });
            },
            children: '\u64AD\u653E',
          }),
        ],
      }),
      /*#__PURE__*/ _jsx(Player, {
        type: state.type,
        url: state.playUrl,
        isLive: state.isLive,
      }),
    ],
  });
};
export default App;

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
var _excluded = ['type', 'className', 'title', 'style'];
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
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
import { jsx as _jsx } from 'react/jsx-runtime';
var global = window;
if (!global._ICON_SCRIPT_URL) {
  global._ICON_SCRIPT_URL = {};
}
function loadScript(url) {
  return new Promise(function (resolve, reject) {
    var script = document.createElement('script');
    script.src = url;
    document.body.appendChild(script);
    script.addEventListener('load', function () {
      resolve(null);
    });
    script.addEventListener('error', function (err) {
      reject(err);
    });
  });
}
function registerIconFont(scriptUrl) {
  if (!global._ICON_SCRIPT_URL[scriptUrl]) {
    global._ICON_SCRIPT_URL[scriptUrl] = true;
    loadScript(scriptUrl).catch(function (e) {
      global._ICON_SCRIPT_URL[scriptUrl] = false;
      console.error(e);
    });
  }
}
function IconFont(_ref) {
  var type = _ref.type,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className,
    title = _ref.title,
    style = _ref.style,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/ _jsx(
    'i',
    _objectSpread(
      _objectSpread(
        {
          className: 'anticon '.concat(className),
          title: title,
          style: style,
        },
        props,
      ),
      {},
      {
        children: /*#__PURE__*/ _jsx('svg', {
          width: '1em',
          height: '1em',
          fill: 'currentColor',
          'aria-hidden': 'true',
          focusable: 'false',
          children: /*#__PURE__*/ _jsx('use', {
            xlinkHref: '#'.concat(type),
          }),
        }),
      },
    ),
  );
}
IconFont.registerIconFont = registerIconFont;
export default IconFont;

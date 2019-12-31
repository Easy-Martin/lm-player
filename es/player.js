import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import flvjs from 'flv.lm.js';
import * as Hls from 'hls.js';
import { isSupported, Events } from 'hls.js';
import PropTypes$1 from 'prop-types';
import ReactDOM from 'react-dom';

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
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

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var VideoEventInstance =
/*#__PURE__*/
function () {
  function VideoEventInstance(video) {
    _classCallCheck(this, VideoEventInstance);

    this.video = video;
    this.events = {};
    this.playerEvents = {};
  }

  _createClass(VideoEventInstance, [{
    key: "on",
    value: function on(eventName, handle) {
      this.events && this.events[eventName] ? this.events[eventName].listener.push(handle) : this.events[eventName] = {
        type: eventName,
        listener: [handle]
      };
    }
  }, {
    key: "addEventListener",
    value: function addEventListener(eventName, handle) {
      if (this.video) {
        this.playerEvents[eventName] ? this.playerEvents[eventName].push(handle) : this.playerEvents[eventName] = [handle];
        this.video.addEventListener(eventName, handle, false);
      }
    }
  }, {
    key: "removeEventListener",
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
    }
  }, {
    key: "emit",
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
    }
  }, {
    key: "off",
    value: function off(eventName, handle) {
      if (!this.events || !this.events.eventName) {
        return;
      }

      var index = this.events[eventName].listener.findIndex(function (v) {
        return v === handle;
      });
      index > -1 && this.events[eventName].listener.splice(index, 1);
    }
  }, {
    key: "getApi",
    value: function getApi() {
      return {
        on: this.on.bind(this),
        off: this.off.bind(this),
        emit: this.emit.bind(this)
      };
    }
  }, {
    key: "destroy",
    value: function destroy() {
      var _this = this;

      Object.keys(this.playerEvents).forEach(function (key) {
        _this.playerEvents[key].forEach(function (fn) {
          _this.removeEventListener(key, fn);
        });
      });
      this.playerEvents = {};
      this.events = {};
    }
  }]);

  return VideoEventInstance;
}();

/**
 * 创建HLS对象
 * @param {*} video
 * @param {*} file
 */

function createHlsPlayer(video, file) {
  if (isSupported()) {
    var player = new Hls({
      liveDurationInfinity: true,
      levelLoadingTimeOut: 15000,
      fragLoadingTimeOut: 25000,
      enableWorker: true
    });
    player.loadSource(file);
    player.attachMedia(video);
    return player;
  }
}
/**
 * 创建FLV对象
 * @param {*} video
 * @param {*} options
 */

function createFlvPlayer(video, options) {
  var _options$flvOptions = options.flvOptions,
      flvOptions = _options$flvOptions === void 0 ? {} : _options$flvOptions,
      _options$flvConfig = options.flvConfig,
      flvConfig = _options$flvConfig === void 0 ? {} : _options$flvConfig;

  if (flvjs.isSupported()) {
    var player = flvjs.createPlayer(Object.assign({}, flvOptions, {
      type: 'flv',
      url: options.file
    }), Object.assign({}, flvConfig, {
      enableWorker: true,
      // lazyLoad: false,
      // Indicates how many seconds of data to be kept for lazyLoad.
      // lazyLoadMaxDuration: 0,
      // autoCleanupMaxBackwardDuration: 3,
      // autoCleanupMinBackwardDuration: 2,
      // autoCleanupSourceBuffer: true,
      enableStashBuffer: false,
      stashInitialSize: 128,
      isLive: options.isLive || true
    }));
    player.attachMediaElement(video);
    player.load();
    return player;
  }
}
/**
 * 获取播放文件类型
 * @param {*} url
 */

function getVideoType(url) {
  var urlInfo = new URL(url);
  var path = "".concat(urlInfo.origin).concat(urlInfo.pathname);
  var reg = /([^\.\/\\]+)\.(([a-z]|[0-9])+(\?\S+)?)$/i;
  var resultArr = reg.exec(path);

  if (!resultArr) {
    return url.indexOf('.flv') > -1 ? 'flv' : 'hls';
  }

  var suffix = resultArr[2].replace(resultArr[4], '');

  if (!suffix) {
    return url.indexOf('.flv') > -1 ? 'flv' : 'hls';
  }

  return suffix;
}
/**
 * 播放时间转字符串
 * @param {*} second_time
 */

function timeStamp(second_time) {
  var time = Math.ceil(second_time);

  if (time > 60) {
    var second = Math.ceil(second_time % 60);
    var min = Math.floor(second_time / 60);
    time = "".concat(min < 10 ? "0".concat(min) : min, ":").concat(second < 10 ? "0".concat(second) : second);

    if (min > 60) {
      min = Math.ceil(second_time / 60 % 60);
      var hour = Math.floor(second_time / 60 / 60);
      time = "".concat(hour < 10 ? "0".concat(hour) : hour, ":").concat(min < 10 ? "0".concat(min) : min, ":").concat(second < 10 ? "0".concat(second) : second);
    } else {
      time = "00:".concat(time);
    }
  } else {
    time = "00:00:".concat(time < 10 ? "0".concat(time) : time);
  }

  return time;
}
/**
 * 全屏
 * @param {*} element
 */

function fullscreen(element) {
  if (element.requestFullScreen) {
    element.requestFullScreen();
  } else if (element.webkitRequestFullScreen) {
    element.webkitRequestFullScreen();
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen();
  }
}
/**
 * exitFullscreen 退出全屏
 * @param  {Objct} element 选择器
 */

function exitFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
}
/**
 * [isFullscreen 判断浏览器是否全屏]
 * @return [全屏则返回当前调用全屏的元素,不全屏返回false]
 */

function isFullscreen(ele) {
  if (!ele) {
    return false;
  }

  return document.fullscreenElement === ele || document.msFullscreenElement === ele || document.mozFullScreenElement === ele || document.webkitFullscreenElement === ele || false;
} // 添加 / 移除 全屏事件监听

function fullScreenListener(isAdd, fullscreenchange) {
  var funcName = isAdd ? 'addEventListener' : 'removeEventListener';
  var fullScreenEvents = ['fullscreenchange', 'mozfullscreenchange', 'webkitfullscreenchange', 'msfullscreenchange'];
  fullScreenEvents.map(function (v) {
    return document[funcName](v, fullscreenchange);
  });
}
/**
 * 计算视频拖拽边界
 * @param {*} ele
 * @param {*} currentPosition
 * @param {*} scale
 */

function computedBound(ele, currentPosition, scale) {
  var data = currentPosition;
  var eleRect = ele.getBoundingClientRect();
  var w = eleRect.width;
  var h = eleRect.height;
  var lx = 0,
      ly = 0;

  if (scale === 1) {
    return [0, 0];
  }

  lx = w * (scale - 1) / 2 / scale;
  ly = h * (scale - 1) / 2 / scale;
  var x = 0,
      y = 0;

  if (data[0] >= 0 && data[0] > lx) {
    x = lx;
  }

  if (data[0] >= 0 && data[0] < lx) {
    x = data[0];
  }

  if (data[0] < 0 && data[0] < -lx) {
    x = -lx;
  }

  if (data[0] < 0 && data[0] > -lx) {
    x = data[0];
  }

  if (data[1] >= 0 && data[1] > ly) {
    y = ly;
  }

  if (data[1] >= 0 && data[1] < ly) {
    y = data[1];
  }

  if (data[1] < 0 && data[1] < -ly) {
    y = -ly;
  }

  if (data[1] < 0 && data[1] > -ly) {
    y = data[1];
  }

  if (x !== data[0] || y !== data[1]) {
    return [x, y];
  } else {
    return;
  }
}

function IconFont(_ref) {
  var type = _ref.type,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      props = _objectWithoutProperties(_ref, ["type", "className"]);

  return React.createElement("i", _extends({
    className: "lm-player-iconfont ".concat(type, " ").concat(className)
  }, props));
}
IconFont.propTypes = {
  type: PropTypes$1.string,
  className: PropTypes$1.string
};

var Slider =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Slider, _React$Component);

  function Slider(props) {
    var _this;

    _classCallCheck(this, Slider);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Slider).call(this, props));

    _this.renderSliderTips = function (e) {
      var renderTips = _this.props.renderTips;

      if (!renderTips) {
        return;
      }

      clearTimeout(_this.timer);
      _this.timer = setTimeout(function () {
        var _this$layoutDom$getBo = _this.layoutDom.getBoundingClientRect(),
            x = _this$layoutDom$getBo.x,
            width = _this$layoutDom$getBo.width,
            top = _this$layoutDom$getBo.top;

        var tipsX = e.pageX;
        var percent = (e.pageX - x) / width;
        percent = percent < 0 ? 0 : percent > 1 ? 1 : percent;

        _this.setState({
          tipsX: tipsX,
          tipsY: top,
          showTips: true,
          tempValue: percent
        });
      }, 200);
    };

    _this.hideSliderTips = function () {
      clearTimeout(_this.timer);

      _this.setState({
        showTips: false
      });
    };

    _this.cancelPropagation = function (e) {
      e.stopPropagation();
    };

    _this.startDrag = function (e) {
      e.stopPropagation();
      _this.dragFlag = true;
      document.body.addEventListener('mousemove', _this.moveChange);
      document.body.addEventListener('mouseup', _this.stopDrag);
    };

    _this.moveChange = function (e) {
      e.stopPropagation();

      var percent = _this.computedPositionForEvent(e);

      _this.setState({
        value: percent
      });
    };

    _this.stopDrag = function (e) {
      e.stopPropagation();
      document.body.removeEventListener('mousemove', _this.moveChange);
      document.body.removeEventListener('mouseup', _this.stopDrag);
      _this.dragFlag = false;
      var percent = _this.state.value / 100;
      percent = percent < 0 ? 0 : percent > 1 ? 1 : percent;
      _this.props.onChange && _this.props.onChange(percent);
    };

    _this.changeCurrentValue = function (event) {
      event.stopPropagation();

      var _this$layoutDom$getBo2 = _this.layoutDom.getBoundingClientRect(),
          width = _this$layoutDom$getBo2.width,
          x = _this$layoutDom$getBo2.x;

      var percent = (event.pageX - x) / width;
      _this.props.onChange && _this.props.onChange(percent);
    };

    _this.sliderDomRef = React.createRef();
    _this.layoutDom = null;
    _this.lineDom = null;
    _this.dragDom = null;
    _this.dragFlag = false;
    _this.state = {
      value: _this.props.currentPercent || 0,
      tempValue: 0,
      showTips: false,
      tipsX: 0,
      tipsY: 0
    };
    return _this;
  }

  _createClass(Slider, [{
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      if (!this.dragFlag) {
        this.setState({
          value: nextProps.currentPercent || 0
        });
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.layoutDom = this.sliderDomRef.current;
      this.dragDom = this.layoutDom.querySelector('.drag-change-icon');
      this.lineDom = this.layoutDom.querySelector('.slider-content');
      this.layoutDom.addEventListener('mousemove', this.renderSliderTips, false);
      this.layoutDom.addEventListener('mouseout', this.hideSliderTips, false);
      this.lineDom.addEventListener('click', this.changeCurrentValue, false);
      this.dragDom.addEventListener('click', this.cancelPropagation, false);
      this.dragDom.addEventListener('mousedown', this.startDrag, false);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.timer);
      this.layoutDom.removeEventListener('mousemove', this.renderSliderTips, false);
      this.layoutDom.removeEventListener('mouseout', this.hideSliderTips, false);
      this.lineDom.removeEventListener('click', this.changeCurrentValue, false);
      this.dragDom.removeEventListener('click', this.cancelPropagation, false);
      this.dragDom.removeEventListener('mousedown', this.startDrag, false);
      document.body.removeEventListener('mousemove', this.moveChange);
      document.body.removeEventListener('mouseup', this.stopDrag);
      this.sliderDomRef = null;
      this.layoutDom = null;
      this.lineDom = null;
      this.dragDom = null;
      this.dragFlag = null;
    }
  }, {
    key: "computedPositionForEvent",
    value: function computedPositionForEvent(e) {
      var _this$layoutDom$getBo3 = this.layoutDom.getBoundingClientRect(),
          x = _this$layoutDom$getBo3.x,
          width = _this$layoutDom$getBo3.width;

      var pageX = e.pageX;
      var dx = pageX - x;

      if (dx > width) {
        dx = width;
      }

      if (dx < 0) {
        dx = 0;
      }

      return dx / width * 100;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          value = _this$state.value,
          showTips = _this$state.showTips,
          tipsX = _this$state.tipsX,
          tipsY = _this$state.tipsY;
      var _this$props = this.props,
          _this$props$available = _this$props.availablePercent,
          availablePercent = _this$props$available === void 0 ? 0 : _this$props$available,
          _this$props$className = _this$props.className,
          className = _this$props$className === void 0 ? '' : _this$props$className;
      return React.createElement("div", {
        className: "slider-layout ".concat(className),
        ref: this.sliderDomRef
      }, React.createElement("div", {
        className: "slider-content"
      }, React.createElement("div", {
        className: "slider-max-line"
      }), React.createElement("div", {
        className: "slider-visibel-line",
        style: {
          width: "".concat(availablePercent, "%")
        }
      }), React.createElement("div", {
        className: "slider-current-line",
        style: {
          width: "".concat(value, "%")
        }
      }), this.props.children), React.createElement("div", {
        className: "slider-other-content"
      }, React.createElement("div", {
        className: "drag-change-icon",
        draggable: false,
        style: {
          left: "".concat(value, "%")
        }
      })), React.createElement(Tips, {
        visibel: showTips,
        className: "lm-player-slide-tips",
        style: {
          left: tipsX,
          top: tipsY
        }
      }, this.props.renderTips && this.props.renderTips(this.state.tempValue)));
    }
  }]);

  return Slider;
}(React.Component);

Slider.propTypes = {
  currentPercent: PropTypes$1.number,
  seekTo: PropTypes$1.func,
  video: PropTypes$1.element,
  renderTips: PropTypes$1.func,
  availablePercent: PropTypes$1.number,
  onChange: PropTypes$1.func,
  children: PropTypes$1.any,
  className: PropTypes$1.string
};

var Tips =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(Tips, _React$Component2);

  function Tips(props) {
    var _this2;

    _classCallCheck(this, Tips);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(Tips).call(this, props));
    _this2.ele = document.createElement('div');
    return _this2;
  }

  _createClass(Tips, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.body.appendChild(this.ele);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.body.removeChild(this.ele);
      this.ele = null;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          visibel = _this$props2.visibel,
          children = _this$props2.children,
          style = _this$props2.style,
          _this$props2$classNam = _this$props2.className,
          className = _this$props2$classNam === void 0 ? '' : _this$props2$classNam;
      return ReactDOM.createPortal(visibel ? React.createElement("div", {
        className: className,
        style: style
      }, children) : null, this.ele);
    }
  }]);

  return Tips;
}(React.Component);

Tips.propTypes = {
  visibel: PropTypes$1.bool,
  children: PropTypes$1.element,
  style: PropTypes$1.any,
  className: PropTypes$1.string
};

function Bar(_ref) {
  var _ref$visibel = _ref.visibel,
      visibel = _ref$visibel === void 0 ? true : _ref$visibel,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["visibel", "className", "children"]);

  if (visibel === false) {
    return null;
  }

  return React.createElement("span", _extends({
    className: "contraller-bar-item ".concat(className)
  }, props), children);
}
Bar.propTypes = {
  visibel: PropTypes$1.bool,
  className: PropTypes$1.string,
  children: PropTypes$1.any
};

var EventName = {
  RELOAD: "reload",
  //手动视频重载
  RELOAD_FAIL: "reloadFail",
  // 视频出错，重连失败
  RELOAD_SUCCESS: "reloadSuccess",
  //视频出错，重连成功
  ERROR: "error",
  //视频出错
  ERROR_RELOAD: "errorRload",
  //视频出错，自动重连
  HISTORY_PLAY_END: "historyPlayEnd",
  //历史视频列表播放结束
  SEEK: "seek",
  //跳跃播放时间
  TRANSFORM: "transform",
  //视频容器缩放
  CHANGE_PLAY_INDEX: "changePlayIndex",
  //历史视频列表播放索引改变
  HIDE_CONTRALLER: "hideContraller",
  SHOW_CONTRALLER: "showContraller",
  CLEAR_ERROR_TIMER: "clearErrorTimer"
};

function LeftBar(_ref) {
  var api = _ref.api,
      event = _ref.event,
      video = _ref.video,
      isHistory = _ref.isHistory,
      reloadHistory = _ref.reloadHistory,
      isLive = _ref.isLive,
      leftExtContents = _ref.leftExtContents,
      leftMidExtContents = _ref.leftMidExtContents;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      openSliderVolume = _useState2[0],
      setOpenSliderVolume = _useState2[1];

  var _useState3 = useState(Date.now()),
      _useState4 = _slicedToArray(_useState3, 2),
      dep = _useState4[0],
      setDep = _useState4[1];

  useEffect(function () {
    var updateRender = function updateRender() {
      setDep(Date.now());
    };

    event.addEventListener('play', updateRender);
    event.addEventListener('pause', updateRender);
    event.addEventListener('volumechange', updateRender);
    return function () {
      event.removeEventListener('play', updateRender);
      event.removeEventListener('pause', updateRender);
      event.removeEventListener('volumechange', updateRender);
    };
  }, [event]); //缓存值

  var paused = useMemo(function () {
    return video.paused;
  }, [dep, video]);
  var statusIconClassName = useMemo(function () {
    return paused ? 'lm-player-Play_Main' : 'lm-player-Pause_Main';
  }, [paused]);
  var statusText = useMemo(function () {
    return paused ? '播放' : '暂停';
  }, [paused]);
  var volumeVal = useMemo(function () {
    return video.muted ? 0 : video.volume;
  }, [dep, video]);
  var volumeIcon = useMemo(function () {
    return volumeVal === 0 ? 'lm-player-volume-close' : video.volume === 1 ? 'lm-player-volume-max' : 'lm-player-volume-normal-fuben';
  }, [volumeVal]);
  var volumePercent = useMemo(function () {
    return volumeVal === 0 ? 0 : volumeVal * 100;
  }, [volumeVal]);
  var sliderClassName = useMemo(function () {
    return openSliderVolume ? 'contraller-bar-hover-volume' : '';
  }, [openSliderVolume]); //TODO 方法

  var changePlayStatus = useCallback(function () {
    return video.paused ? api.play() : api.pause();
  }, [video, api]);
  var mutedChantgeStatus = useCallback(function () {
    return video.muted ? api.unmute() : api.mute();
  }, [api, video]);
  var onChangeVolume = useCallback(function (volume) {
    api.setVolume(parseFloat(volume.toFixed(1)));
    volume > 0 && video.muted && api.unmute();
  }, [api, video]);
  var reload = useCallback(function () {
    isHistory ? reloadHistory() : api.reload();
    event.emit(EventName.CLEAR_ERROR_TIMER);
  }, [event, isHistory, api]);
  return React.createElement("div", {
    className: "contraller-left-bar"
  }, leftExtContents, React.createElement(Bar, {
    visibel: !isLive
  }, React.createElement(IconFont, {
    onClick: changePlayStatus,
    type: statusIconClassName,
    title: statusText
  })), React.createElement(Bar, {
    className: "contraller-bar-volume ".concat(sliderClassName),
    onMouseOver: function onMouseOver() {
      return setOpenSliderVolume(true);
    },
    onMouseOut: function onMouseOut() {
      return setOpenSliderVolume(false);
    }
  }, React.createElement(IconFont, {
    onClick: mutedChantgeStatus,
    type: volumeIcon,
    title: "\u97F3\u91CF"
  }), React.createElement("div", {
    className: "volume-slider-layout"
  }, React.createElement(Slider, {
    className: "volume-slider",
    currentPercent: volumePercent,
    onChange: onChangeVolume,
    renderTips: function renderTips(precent) {
      return React.createElement("span", null, Math.round(precent * 100), "%");
    }
  }))), React.createElement(Bar, null, React.createElement(IconFont, {
    onClick: reload,
    type: "lm-player-Refresh_Main",
    title: "\u91CD\u8F7D"
  })), leftMidExtContents);
}

LeftBar.propTypes = {
  api: PropTypes$1.object,
  event: PropTypes$1.object,
  playerProps: PropTypes$1.object,
  video: PropTypes$1.node,
  reloadHistory: PropTypes$1.func,
  isHistory: PropTypes$1.bool
};

function RightBar(_ref) {
  var playContainer = _ref.playContainer,
      api = _ref.api,
      scale = _ref.scale,
      snapshot = _ref.snapshot,
      rightExtContents = _ref.rightExtContents,
      rightMidExtContents = _ref.rightMidExtContents;

  var _useState = useState(Date.now()),
      _useState2 = _slicedToArray(_useState, 2),
      dep = _useState2[0],
      setDep = _useState2[1];

  useEffect(function () {
    var update = function update() {
      return setDep(Date.now());
    };

    fullScreenListener(true, update);
    return function () {
      return fullScreenListener(false, update);
    };
  }, []);
  var isfull = useMemo(function () {
    return isFullscreen(playContainer);
  }, [dep, playContainer]);
  var fullscreen = useCallback(function () {
    !isFullscreen(playContainer) ? api.requestFullScreen() : api.cancelFullScreen();
    setDep(Date.now());
  }, [api, playContainer]);
  var setScale = useCallback(function () {
    var dragDom = playContainer.querySelector('.player-mask-layout');
    api.setScale.apply(api, arguments);
    var position = computedBound(dragDom, api.getPosition(), api.getScale());
    position && api.setPosition(position, true);
  }, [api, playContainer]);
  return React.createElement("div", {
    className: "contraller-right-bar"
  }, rightMidExtContents, scale && React.createElement(React.Fragment, null, React.createElement(Bar, null, React.createElement(IconFont, {
    title: "\u7F29\u5C0F",
    onClick: function onClick() {
      return setScale(-0.2);
    },
    type: 'lm-player-ZoomOut_Main'
  })), React.createElement(Bar, null, React.createElement(IconFont, {
    title: "\u590D\u4F4D",
    onClick: function onClick() {
      return setScale(1, true);
    },
    type: 'lm-player-ZoomDefault_Main'
  })), React.createElement(Bar, null, React.createElement(IconFont, {
    title: "\u653E\u5927",
    onClick: function onClick() {
      return setScale(0.2);
    },
    type: 'lm-player-ZoomIn_Main'
  }))), snapshot && React.createElement(Bar, null, React.createElement(IconFont, {
    title: "\u622A\u56FE",
    onClick: function onClick() {
      return snapshot(api.snapshot());
    },
    type: "lm-player-SearchBox"
  })), React.createElement(Bar, null, React.createElement(IconFont, {
    title: isfull ? '窗口' : '全屏',
    onClick: fullscreen,
    type: isfull ? 'lm-player-ExitFull_Main' : 'lm-player-Full_Main'
  })), rightExtContents);
}

RightBar.propTypes = {
  api: PropTypes$1.object,
  event: PropTypes$1.object,
  playerProps: PropTypes$1.object,
  playContainer: PropTypes$1.node,
  reloadHistory: PropTypes$1.func,
  isHistory: PropTypes$1.bool
};

function ContrallerBar(_ref) {
  var playContainer = _ref.playContainer,
      snapshot = _ref.snapshot,
      rightExtContents = _ref.rightExtContents,
      rightMidExtContents = _ref.rightMidExtContents,
      scale = _ref.scale,
      visibel = _ref.visibel,
      api = _ref.api,
      event = _ref.event,
      video = _ref.video,
      isHistory = _ref.isHistory,
      reloadHistory = _ref.reloadHistory,
      isLive = _ref.isLive,
      leftExtContents = _ref.leftExtContents,
      leftMidExtContents = _ref.leftMidExtContents;
  return React.createElement("div", {
    className: "contraller-bar-layout ".concat(!visibel ? 'hide-contraller-bar' : '')
  }, React.createElement(LeftBar, {
    api: api,
    event: event,
    video: video,
    isHistory: isHistory,
    reloadHistory: reloadHistory,
    isLive: isLive,
    leftMidExtContents: leftMidExtContents,
    leftExtContents: leftExtContents
  }), React.createElement(RightBar, {
    api: api,
    event: event,
    playContainer: playContainer,
    scale: scale,
    snapshot: snapshot,
    rightExtContents: rightExtContents,
    rightMidExtContents: rightMidExtContents
  }));
}

ContrallerBar.propTypes = {
  visibel: PropTypes$1.bool
};

var videoContext = React.createContext(null);
var Provider = videoContext.Provider;
var Consumer = videoContext.Consumer;
function videoDec(Component) {
  var ComponentWithVideoDec =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(ComponentWithVideoDec, _React$Component);

    function ComponentWithVideoDec() {
      _classCallCheck(this, ComponentWithVideoDec);

      return _possibleConstructorReturn(this, _getPrototypeOf(ComponentWithVideoDec).apply(this, arguments));
    }

    _createClass(ComponentWithVideoDec, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            forwardRef = _this$props.forwardRef,
            props = _objectWithoutProperties(_this$props, ["forwardRef"]);

        return React.createElement(Consumer, null, function (context) {
          return React.createElement(Component, _extends({}, props, context, {
            ref: forwardRef
          }));
        });
      }
    }]);

    return ComponentWithVideoDec;
  }(React.Component);

  ComponentWithVideoDec.propTypes = {
    forwardRef: PropTypes$1.ref
  };
  return React.forwardRef(function (props, ref) {
    return React.createElement(ComponentWithVideoDec, _extends({}, props, {
      forwardRef: ref
    }));
  });
}

var _class, _temp;

var ContrallerEvent = videoDec(_class = (_temp =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ContrallerEvent, _React$Component);

  function ContrallerEvent(props) {
    var _this;

    _classCallCheck(this, ContrallerEvent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ContrallerEvent).call(this, props));

    _this.showContraller = function () {
      if (!_this.visibel) {
        var event = _this.props.event;
        _this.visibel = true;

        _this.forceUpdate();

        event.emit(EventName.SHOW_CONTRALLER);
      }

      _this.hideContraller();
    };

    _this.hideContraller = function () {
      var event = _this.props.event;
      clearTimeout(_this.timer);
      _this.timer = setTimeout(function () {
        _this.visibel = false;
        event.emit(EventName.HIDE_CONTRALLER);

        _this.forceUpdate();
      }, 3 * 1000);
    };

    _this.timer = null;
    _this.visibel = true;
    return _this;
  }

  _createClass(ContrallerEvent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          playContainer = _this$props.playContainer,
          event = _this$props.event;
      playContainer.addEventListener('mousemove', this.showContraller, false);
      playContainer.addEventListener('mouseout', this.hideContraller, false);
      this.timer = setTimeout(function () {
        event.emit(EventName.HIDE_CONTRALLER);
      }, 5 * 1000);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var playContainer = this.props.playContainer;
      playContainer.addEventListener('mousemove', this.showContraller, false);
      playContainer.addEventListener('mouseout', this.hideContraller, false);
      clearTimeout(this.timer);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;
      return React.Children.map(children, function (child) {
        return React.isValidElement(child) ? React.cloneElement(child, {
          visibel: _this2.visibel
        }) : child;
      });
    }
  }]);

  return ContrallerEvent;
}(React.Component), _temp)) || _class;

ContrallerEvent.propTypes = {
  api: PropTypes$1.object,
  event: PropTypes$1.object,
  playContainer: PropTypes$1.node,
  children: PropTypes$1.element
};

var _class$1, _temp$1;

var VideoMessage = videoDec(_class$1 = (_temp$1 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(VideoMessage, _React$Component);

  function VideoMessage(props) {
    var _this;

    _classCallCheck(this, VideoMessage);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(VideoMessage).call(this, props));

    _this.clearReloadMessage = function () {
      _this.message = null;
      _this.mounted && _this.forceUpdate();
    };

    _this.reload = function () {
      _this.setState({
        status: 'reload'
      });
    };

    _this.errorReload = function (timer) {
      _this.message = React.createElement("div", null, "\u89C6\u9891\u52A0\u8F7D\u9519\u8BEF\uFF0C\u6B63\u5728\u8FDB\u884C\u91CD\u8FDE\u7B2C", timer, "\u91CD\u8FDE");
      _this.mounted && _this.setState({
        status: 'reload',
        loading: true
      });
    };

    _this.reloadFail = function () {
      _this.message = React.createElement("div", null, "\u89C6\u9891\u9519\u8BEF");
      _this.mounted && _this.setState({
        status: 'fail'
      });
    };

    _this.reloadSuccess = function () {
      _this.message = null;
      _this.mounted && _this.setState({
        status: null
      });
    };

    _this.openLoading = function () {
      _this.mounted && _this.setState({
        loading: true
      });
    };

    _this.closeLoading = function () {
      _this.mounted && _this.setState({
        loading: false
      });
    };

    _this.historyPlayEnd = function () {
      _this.message = null;
      _this.mounted && _this.setState({
        status: null,
        loading: false
      });

      _this.props.api.pause();
    };

    _this.state = {
      loading: false,
      status: null
    };
    _this.mounted = false;
    _this.message = null;
    return _this;
  }

  _createClass(VideoMessage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var event = this.props.event;
      this.mounted = true;
      event.addEventListener('loadstart', this.openLoading);
      event.addEventListener('waiting', this.openLoading);
      event.addEventListener('seeking', this.openLoading);
      event.addEventListener('loadeddata', this.closeLoading);
      event.addEventListener('canplay', this.closeLoading);
      event.on(EventName.ERROR_RELOAD, this.errorReload);
      event.on(EventName.RELOAD_FAIL, this.reloadFail);
      event.on(EventName.RELOAD_SUCCESS, this.reloadSuccess);
      event.on(EventName.RELOAD, this.reload);
      event.on(EventName.HISTORY_PLAY_END, this.historyPlayEnd);
      event.on(EventName.CLEAR_ERROR_TIMER, this.clearReloadMessage);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      event.removeEventListener('loadstart', this.openLoading);
      event.removeEventListener('waiting', this.openLoading);
      event.removeEventListener('seeking', this.openLoading);
      event.removeEventListener('loadeddata', this.closeLoading);
      event.removeEventListener('canplay', this.closeLoading);
      event.off(EventName.ERROR_RELOAD, this.errorReload);
      event.off(EventName.RELOAD_FAIL, this.reloadFail);
      event.off(EventName.RELOAD_SUCCESS, this.reloadSuccess);
      event.off(EventName.RELOAD, this.reload);
      event.off(EventName.HISTORY_PLAY_END, this.historyPlayEnd);
      event.off(EventName.CLEAR_ERROR_TIMER, this.clearReloadMessage);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          loading = _this$state.loading,
          status = _this$state.status;
      return React.createElement("div", {
        className: "lm-player-message-mask ".concat(loading || status === 'fail' ? 'lm-player-mask-loading-animation' : '')
      }, React.createElement(IconFont, {
        type: status === 'fail' ? 'lm-player-YesorNo_No_Dark' : 'lm-player-Loading',
        className: "".concat(loading && status !== 'fail' ? 'lm-player-loading-animation' : status === 'fail' ? 'lm-player-loadfail' : '', " lm-player-loading-icon")
      }), React.createElement("span", {
        className: "lm-player-message"
      }, this.message));
    }
  }]);

  return VideoMessage;
}(React.Component), _temp$1)) || _class$1;

VideoMessage.propTypes = {
  api: PropTypes.object,
  event: PropTypes.object
};
var NoSource = function NoSource() {
  return React.createElement("div", {
    className: "lm-player-message-mask lm-player-mask-loading-animation"
  }, React.createElement(IconFont, {
    style: {
      fontSize: 80
    },
    type: "lm-player-PlaySource",
    title: "\u8BF7\u9009\u62E9\u89C6\u9891\u6E90"
  }));
};

var _class$2, _temp$2;

var TineLine = videoDec(_class$2 = (_temp$2 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TineLine, _React$Component);

  function TineLine(props) {
    var _this;

    _classCallCheck(this, TineLine);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TineLine).call(this, props));

    _this.getDuration = function () {
      var api = _this.props.api;

      _this.setState({
        duration: api.getDuration()
      });
    };

    _this.getCurrentTime = function () {
      var api = _this.props.api;
      var state = {
        currentTime: api.getCurrentTime(),
        buffered: api.getSecondsLoaded()
      };

      if (state.buffered === _this.state.buffered) {
        delete state.buffered;
      }

      _this.setState(state);
    };

    _this.getBuffered = function () {
      var api = _this.props.api;

      _this.setState({
        buffered: api.getSecondsLoaded()
      });
    };

    _this.changePlayTime = function (percent) {
      var api = _this.props.api;
      var currentTime = percent * _this.state.duration;
      api.pause();

      _this.setState({
        currentTime: currentTime
      });

      api.seekTo(currentTime);
    };

    _this.seekendPlay = function () {
      var api = _this.props.api;
      api.play();
    };

    _this.renderTimeLineTips = function (percent) {
      var currentTime = percent * _this.state.duration;
      var time = timeStamp(currentTime);
      return React.createElement("span", null, time);
    };

    _this.fastForward = function () {
      var api = _this.props.api;
      api.fastForward();
    };

    _this.backWind = function () {
      var api = _this.props.api;
      api.backWind();
    };

    _this.state = {
      duration: 0,
      currentTime: 0,
      buffered: 0
    };
    return _this;
  }

  _createClass(TineLine, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var event = this.props.event;
      event.addEventListener('loadedmetadata', this.getDuration);
      event.addEventListener('durationchange', this.getDuration);
      event.addEventListener('timeupdate', this.getCurrentTime);
      event.addEventListener('progress', this.getBuffered);
      event.addEventListener('suspend', this.getBuffered);
      event.addEventListener('seeked', this.seekendPlay);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          duration = _this$state.duration,
          currentTime = _this$state.currentTime,
          buffered = _this$state.buffered;
      var playPercent = Math.round(currentTime / duration * 100);
      var bufferedPercent = Math.round(buffered / duration * 100);
      return React.createElement("div", {
        className: "video-time-line-layout ".concat(!this.props.visibel ? 'hide-time-line' : '')
      }, React.createElement(IconFont, {
        type: "lm-player-PrevFast",
        onClick: this.backWind,
        className: "time-line-action-item"
      }), React.createElement(Slider, {
        className: "time-line-box",
        currentPercent: playPercent,
        availablePercent: bufferedPercent,
        onChange: this.changePlayTime,
        renderTips: this.renderTimeLineTips
      }), React.createElement(IconFont, {
        type: "lm-player-NextFast_Light",
        onClick: this.fastForward,
        className: "time-line-action-item"
      }));
    }
  }]);

  return TineLine;
}(React.Component), _temp$2)) || _class$2;

TineLine.propTypes = {
  event: PropTypes$1.object,
  api: PropTypes$1.object,
  changePlayIndex: PropTypes$1.func,
  playIndex: PropTypes$1.number,
  historyList: PropTypes$1.array,
  seekTo: PropTypes$1.func,
  video: PropTypes$1.element,
  visibel: PropTypes$1.bool
};

var _class$3, _temp$3;

var ErrorEvent = videoDec(_class$3 = (_temp$3 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ErrorEvent, _React$Component);

  function ErrorEvent(props) {
    var _this;

    _classCallCheck(this, ErrorEvent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ErrorEvent).call(this, props));

    _this.clearErrorTimer = function () {
      _this.errorTimer = 0;
      clearTimeout(_this.reconnectTimer);
    };

    _this.clearError = function () {
      var event = _this.props.event;

      if (_this.errorTimer > 0) {
        console.warn('视频重连成功！');
        event.emit(EventName.RELOAD_SUCCESS);

        _this.clearErrorTimer();
      }
    };

    _this.errorHandle = function () {
      var _console;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      (_console = console).error.apply(_console, args);

      clearTimeout(_this.reconnectTimer);
      var _this$props = _this.props,
          event = _this$props.event,
          api = _this$props.api,
          isHistory = _this$props.isHistory,
          changePlayIndex = _this$props.changePlayIndex,
          playIndex = _this$props.playIndex,
          playerProps = _this$props.playerProps;
      var timer = _this.errorTimer + 1;
      event.emit.apply(event, [EventName.ERROR].concat(args));

      if (timer > playerProps.errorReloadTimer) {
        isHistory ? changePlayIndex(playIndex + 1) : event.emit(EventName.RELOAD_FAIL), api.unload();
      } else {
        _this.errorTimer = timer;

        if (args[1] && args[1].loader || args[0].indexOf && args[0].indexOf('NetworkError') > -1) {
          _this.reloadAction(timer, args);
        }

        _this.reconnectTimer = setTimeout(function () {
          _this.reloadAction(timer, args);
        }, 1000 * 20);
      }
    };

    _this.reloadAction = function (timer, args) {
      var _this$props2 = _this.props,
          event = _this$props2.event,
          api = _this$props2.api,
          hlsPlayer = _this$props2.hlsPlayer;
      event.emit.apply(event, [EventName.ERROR_RELOAD, timer].concat(_toConsumableArray(args)));
      console.warn("\u89C6\u9891\u64AD\u653E\u51FA\u9519\uFF0C\u6B63\u5728\u8FDB\u884C\u91CD\u8FDE".concat(timer));

      if (hlsPlayer) {
        hlsPlayer.swapAudioCodec();
        hlsPlayer.recoverMediaError();
      }

      api.reload();
    };

    _this.errorTimer = 0;
    return _this;
  }

  _createClass(ErrorEvent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props3 = this.props,
          event = _this$props3.event,
          flvPlayer = _this$props3.flvPlayer,
          hlsPlayer = _this$props3.hlsPlayer;

      if (flvPlayer) {
        //捕获flv错误
        flvPlayer.on(flvjs.Events.ERROR, this.errorHandle);
      }

      if (hlsPlayer) {
        //捕获hls错误
        hlsPlayer.on(Events.ERROR, this.errorHandle);
      } //捕获video错误


      event.addEventListener('error', this.errorHandle, false); //获取video状态清除错误状态

      event.addEventListener('canplay', this.clearError, false); //历史视频切换播放索引时清除错误次数

      event.on(EventName.CHANGE_PLAY_INDEX, this.clearErrorTimer); //历史视频主动清除错误次数

      event.on(EventName.CLEAR_ERROR_TIMER, this.clearErrorTimer);
    }
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      if (nextProps.flvPlayer && nextProps.flvPlayer !== this.props.flvPlayer) {
        nextProps.flvPlayer.on(flvjs.Events.ERROR, this.errorHandle);
      }

      if (nextProps.hlsPlayer && nextProps.hlsPlayer !== this.props.hlsPlayer) {
        nextProps.hlsPlayer.on(Events.ERROR, this.errorHandle);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.reconnectTimer);
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return ErrorEvent;
}(React.Component), _temp$3)) || _class$3;

ErrorEvent.propTypes = {
  api: PropTypes$1.object,
  event: PropTypes$1.object,
  playContainer: PropTypes$1.node,
  playerProps: PropTypes$1.object,
  hlsPlayer: PropTypes$1.object,
  flvPlayer: PropTypes$1.object,
  isHistory: PropTypes$1.bool,
  changePlayIndex: PropTypes$1.func,
  playIndex: PropTypes$1.number
};

var _class$4, _temp$4;

var DragEvent = videoDec(_class$4 = (_temp$4 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DragEvent, _React$Component);

  function DragEvent(props) {
    var _this;

    _classCallCheck(this, DragEvent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DragEvent).call(this, props));

    _this.openDrag = function (e) {
      _this.position.start = [e.pageX, e.pageY];

      _this.dragDom.addEventListener("mousemove", _this.moveChange);

      _this.dragDom.addEventListener("mouseup", _this.stopDrag);
    };

    _this.moveChange = function (e) {
      var api = _this.props.api;
      var currentPosition = api.getPosition();
      _this.position.end = [e.pageX, e.pageY];
      var x = currentPosition[0] + (_this.position.end[0] - _this.position.start[0]);
      var y = currentPosition[1] + (_this.position.end[1] - _this.position.start[1]);
      var position = [x, y];
      api.setPosition(position);
      _this.position.start = [e.pageX, e.pageY];
    };

    _this.stopDrag = function () {
      _this.dragDom.removeEventListener("mousemove", _this.moveChange);

      _this.dragDom.removeEventListener("mouseup", _this.stopDrag);

      _this.transformChange();
    };

    _this.transformChange = function () {
      var api = _this.props.api;
      var position = computedBound(_this.dragDom, api.getPosition(), api.getScale());
      position && api.setPosition(position, true);
    };

    var playContainer = props.playContainer;
    _this.dragDom = playContainer.querySelector(".player-mask-layout");
    _this.position = {
      start: [0, 0],
      end: [0, 0]
    };
    return _this;
  }

  _createClass(DragEvent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var isDraggable = this.props.playerProps.isDraggable;

      if (isDraggable) {
        this.dragDom.addEventListener("mousedown", this.openDrag);
        this.props.event.addEventListener("transform", this.transformChange, true);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.dragDom.removeEventListener("mousedown", this.openDrag);
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return DragEvent;
}(React.Component), _temp$4)) || _class$4;

DragEvent.propTypes = {
  api: PropTypes$1.object,
  event: PropTypes$1.object,
  playContainer: PropTypes$1.node,
  playerProps: PropTypes$1.object
};

var Api =
/*#__PURE__*/
function () {
  function Api(_ref) {
    var video = _ref.video,
        playContainer = _ref.playContainer,
        event = _ref.event,
        flv = _ref.flv,
        hls = _ref.hls;

    _classCallCheck(this, Api);

    this.player = video;
    this.playContainer = playContainer;
    this.flv = flv;
    this.hls = hls;
    this.event = event;
    this.scale = 1;
    this.position = [0, 0];
  }
  /**
   * 播放器销毁后 动态跟新api下的flv，hls对象
   * @param {*} param0
   */


  _createClass(Api, [{
    key: "updateChunk",
    value: function updateChunk(_ref2) {
      var flv = _ref2.flv,
          hls = _ref2.hls;
      this.flv = flv;
      this.hls = hls;
    }
    /**
     * 全屏
     */

  }, {
    key: "requestFullScreen",
    value: function requestFullScreen() {
      if (!isFullscreen(this.playContainer)) {
        fullscreen(this.playContainer);
      }
    }
    /**
     * 退出全屏
     */

  }, {
    key: "cancelFullScreen",
    value: function cancelFullScreen() {
      if (isFullscreen(this.playContainer)) {
        exitFullscreen();
      }
    }
  }, {
    key: "play",
    value: function play() {
      if (this.player.paused) {
        this.player.play();
      }
    }
  }, {
    key: "pause",
    value: function pause() {
      if (!this.player.paused) {
        this.player.pause();
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.player.removeAttribute('src');
      this.unload();

      if (this.flv) {
        this.flv.destroy();
      }

      if (this.hls) {
        this.hls.destroy();
      }
    }
    /**
     * 设置currentTime实现seek
     * @param {*} seconds
     * @param {*} noEmit
     */

  }, {
    key: "seekTo",
    value: function seekTo(seconds, noEmit) {
      var buffered = this.getBufferedTime();

      if (this.flv && buffered[0] > seconds) {
        this.flv.unload();
        this.flv.load();
      }

      this.player.currentTime = seconds;

      if (!noEmit) {
        this.event.emit(EventName.SEEK, seconds);
      }
    }
    /**
     * 视频重载
     */

  }, {
    key: "reload",
    value: function reload() {
      this.unload();
      this.load();
      this.play();
      this.event.emit(EventName.RELOAD);

      if (this.getCurrentTime !== 0) {
        this.seekTo(0);
      }
    }
  }, {
    key: "unload",
    value: function unload() {
      this.flv && this.flv.unload();
      this.hls && this.hls.stopLoad();
    }
  }, {
    key: "load",
    value: function load() {
      this.flv && this.flv.load();

      if (this.hls) {
        try {
          this.hls.swapAudioCodec();
          this.hls.recoverMediaError();
        } catch (e) {
          console.warn(e);
        }

        this.hls.startLoad();
      }
    }
  }, {
    key: "setVolume",
    value: function setVolume(fraction) {
      this.player.volume = fraction;
    }
  }, {
    key: "mute",
    value: function mute() {
      this.player.muted = true;
    }
  }, {
    key: "unmute",
    value: function unmute() {
      this.player.muted = false;
    }
    /**
     * 开启画中画功能
     */

  }, {
    key: "requestPictureInPicture",
    value: function requestPictureInPicture() {
      if (this.player.requestPictureInPicture && document.pictureInPictureElement !== this.player) {
        this.player.requestPictureInPicture();
      }
    }
    /**
     * 关闭画中画功能
     */

  }, {
    key: "exitPictureInPicture",
    value: function exitPictureInPicture() {
      if (document.exitPictureInPicture && document.pictureInPictureElement === this.player) {
        document.exitPictureInPicture();
      }
    }
    /**
     * 设置播放速率
     * @param {*} rate
     */

  }, {
    key: "setPlaybackRate",
    value: function setPlaybackRate(rate) {
      this.player.playbackRate = rate;
    }
    /**
     * 获取视频总时长
     */

  }, {
    key: "getDuration",
    value: function getDuration() {
      if (!this.player) return null;
      var _this$player = this.player,
          duration = _this$player.duration,
          seekable = _this$player.seekable;

      if (duration === Infinity && seekable.length > 0) {
        return seekable.end(seekable.length - 1);
      }

      return duration;
    }
    /**
     * 获取当前播放时间
     */

  }, {
    key: "getCurrentTime",
    value: function getCurrentTime() {
      if (!this.player) return null;
      return this.player.currentTime;
    }
    /**
     * 获取缓存时间
     */

  }, {
    key: "getSecondsLoaded",
    value: function getSecondsLoaded() {
      return this.getBufferedTime()[1];
    }
    /**
     * 获取当前视频缓存的起止时间
     */

  }, {
    key: "getBufferedTime",
    value: function getBufferedTime() {
      if (!this.player) return null;
      var buffered = this.player.buffered;

      if (buffered.length === 0) {
        return [0, 0];
      }

      var end = buffered.end(buffered.length - 1);
      var start = buffered.start(buffered.length - 1);
      var duration = this.getDuration();

      if (end > duration) {
        return duration;
      }

      return [start, end];
    }
    /**
     * 快进通过seekTo方法实现
     * @param {*} second
     */

  }, {
    key: "fastForward",
    value: function fastForward() {
      var second = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 5;
      var duration = this.getDuration();
      var currentTime = this.getCurrentTime();
      var time = currentTime + second;
      this.seekTo(time > duration - 1 ? duration - 1 : time);
    }
    /**
     * 快退通过seekTo方法实现
     * @param {*} second
     */

  }, {
    key: "backWind",
    value: function backWind() {
      var second = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 5;
      var currentTime = this.getCurrentTime();
      var time = currentTime - second;
      this.seekTo(time < 1 ? 1 : time);
    }
    /**
     * 视频截屏方法
     */

  }, {
    key: "snapshot",
    value: function snapshot() {
      var canvas = document.createElement('canvas');
      var ctx = canvas.getContext('2d');
      canvas.width = this.player.videoWidth;
      canvas.height = this.player.videoHeight;
      ctx.drawImage(this.player, 0, 0, canvas.width, canvas.height);
      setTimeout(function () {
        canvas.remove();
        canvas = null;
        ctx = null;
      }, 200);
      return canvas.toDataURL();
    }
  }, {
    key: "setScale",
    value: function setScale(num) {
      var _this = this;

      var isRest = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var scale = this.scale + num;

      if (isRest) {
        scale = num;
      } else {
        if (scale < 1) {
          scale = 1;
        }

        if (scale > 3) {
          scale = 3;
        }
      }

      this.scale = scale;
      this.player.style.transition = 'transform 0.3s';

      this.__setTransform();

      this.event.emit(EventName.TRANSFORM);
      setTimeout(function () {
        _this.player.style.transition = 'unset';
      }, 500);
    }
  }, {
    key: "getScale",
    value: function getScale() {
      return this.scale;
    }
  }, {
    key: "setPosition",
    value: function setPosition(position, isAnimate) {
      this.position = position;
      this.player.style.transition = isAnimate ? 'transform 0.3s' : 'unset';

      this.__setTransform();
    }
  }, {
    key: "getPosition",
    value: function getPosition() {
      return this.position;
    }
  }, {
    key: "__setTransform",
    value: function __setTransform() {
      this.player.style.transform = "scale(".concat(this.scale, ") translate(").concat(this.position[0], "px,").concat(this.position[1], "px)");
    }
  }, {
    key: "getApi",
    value: function getApi() {
      return {
        play: this.play.bind(this),
        reload: this.reload.bind(this),
        pause: this.pause.bind(this),
        seekTo: this.seekTo.bind(this),
        setVolume: this.setVolume.bind(this),
        mute: this.mute.bind(this),
        unmute: this.unmute.bind(this),
        requestPictureInPicture: this.requestPictureInPicture.bind(this),
        exitPictureInPicture: this.exitPictureInPicture.bind(this),
        setPlaybackRate: this.setPlaybackRate.bind(this),
        destroy: this.destroy.bind(this),
        getDuration: this.getDuration.bind(this),
        getCurrentTime: this.getCurrentTime.bind(this),
        getSecondsLoaded: this.getSecondsLoaded.bind(this),
        getBufferedTime: this.getBufferedTime.bind(this),
        fastForward: this.fastForward.bind(this),
        backWind: this.backWind.bind(this),
        snapshot: this.snapshot.bind(this),
        requestFullScreen: this.requestFullScreen.bind(this),
        cancelFullScreen: this.cancelFullScreen.bind(this),
        __player: this.player,
        flv: this.flv,
        hls: this.hls
      };
    }
  }]);

  return Api;
}();

function getHiddenProp() {
  var prefixes = ["webkit", "moz", "ms", "o"]; // 如果hidden 属性是原生支持的，我们就直接返回

  if ("hidden" in document) {
    return "hidden";
  } // 其他的情况就循环现有的浏览器前缀，拼接我们所需要的属性


  for (var i = 0; i < prefixes.length; i++) {
    // 如果当前的拼接的前缀在 document对象中存在 返回即可
    if (prefixes[i] + "Hidden" in document) {
      return prefixes[i] + "Hidden";
    }
  } // 其他的情况 直接返回null


  return null;
}

function getVisibilityState() {
  var prefixes = ["webkit", "moz", "ms", "o"];

  if ("visibilityState" in document) {
    return "visibilityState";
  }

  for (var i = 0; i < prefixes.length; i++) {
    if (prefixes[i] + "VisibilityState" in document) {
      return prefixes[i] + "VisibilityState";
    }
  } // 找不到返回 null


  return null;
}

function visibilityState() {
  return document[getVisibilityState()];
}

function addEventListener(listener) {
  var visProp = getHiddenProp();
  var evtname = visProp.replace(/[H|h]idden/, "") + "visibilitychange";
  document.addEventListener(evtname, listener, false);
}

function removeEventListener(listener) {
  var visProp = getHiddenProp();
  var evtname = visProp.replace(/[H|h]idden/, "") + "visibilitychange";
  document.removeEventListener(evtname, listener, false);
}

var BrowserTab = {
  addEventListener: addEventListener,
  removeEventListener: removeEventListener,
  visibilityState: visibilityState
};

var _class$5, _temp$5;

var LiveHeart = videoDec(_class$5 = (_temp$5 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(LiveHeart, _React$Component);

  function LiveHeart(props) {
    var _this;

    _classCallCheck(this, LiveHeart);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LiveHeart).call(this, props));

    _this.browserTabChange = function () {
      if (BrowserTab.visibilityState() === "visible") {
        _this.focusSeekAction();
      }
    };

    _this.canplay = function () {
      var api = _this.props.api;
      _this.isCanPlay = true;
      api.play();
    };

    _this.focusSeekAction = function () {
      var api = _this.props.api;
      var current = api.getCurrentTime();
      var buffered = api.getSecondsLoaded();

      if (buffered - current > 5) {
        console.warn("\u5F53\u524D\u5EF6\u65F6\u8FC7\u5927current->".concat(current, " buffered->").concat(buffered, ", \u57FA\u4E8E\u89C6\u9891\u5F53\u524D\u7F13\u5B58\u65F6\u95F4\u66F4\u65B0\u5F53\u524D\u64AD\u653E\u65F6\u95F4 updateTime -> ").concat(buffered - 2));
        api.seekTo(buffered - 2 > 0 ? buffered - 2 : 0);
      }
    };

    _this.timer = null;
    _this.isCanPlay = false;
    return _this;
  }

  _createClass(LiveHeart, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var event = this.props.event;
      BrowserTab.addEventListener(this.browserTabChange);
      event.addEventListener("canplay", this.canplay);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      BrowserTab.removeEventListener(this.browserTabChange);
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return LiveHeart;
}(React.Component), _temp$5)) || _class$5;

LiveHeart.propTypes = {
  api: PropTypes$1.object,
  event: PropTypes$1.object
};

function SinglePlayer(_ref) {
  var type = _ref.type,
      file = _ref.file,
      className = _ref.className,
      autoPlay = _ref.autoPlay,
      muted = _ref.muted,
      poster = _ref.poster,
      playsinline = _ref.playsinline,
      loop = _ref.loop,
      preload = _ref.preload,
      onInitPlayer = _ref.onInitPlayer,
      props = _objectWithoutProperties(_ref, ["type", "file", "className", "autoPlay", "muted", "poster", "playsinline", "loop", "preload", "onInitPlayer"]);

  var playContainerRef = useRef(null);

  var _useRef = useRef({}),
      _useRef2 = _slicedToArray(_useRef, 2),
      playerObj = _useRef2[0],
      setPlayerObj = _useRef2[1];

  useEffect(function () {
    if (!file) {
      return;
    }

    var playerObject = {
      playContainer: playContainerRef.current,
      video: playContainerRef.current.querySelector('video')
    };
    var formartType = getVideoType(file);

    if (formartType === 'flv' || type === 'flv') {
      playerObject.flv = createFlvPlayer(playerObject.video, props);
      return;
    }

    if (formartType === 'm3u8' || type === 'hls') {
      playerObject.hls = createHlsPlayer(playerObject.video, file);
      return;
    }

    playerObject.video.src = file;
    playerObj.event = new VideoEventInstance(playerObject.video);
    playerObj.api = new Api(playerObject);
    setPlayerObj(playerObj);
    onInitPlayer && onInitPlayer(playerObj);
  }, [file]);
  return React.createElement("div", {
    className: "lm-player-container ".concat(className),
    ref: playContainerRef
  }, React.createElement("div", {
    className: "player-mask-layout"
  }, React.createElement("video", {
    autoPlay: autoPlay,
    preload: preload,
    muted: muted,
    poster: poster,
    controls: false,
    playsInline: playsinline,
    loop: loop
  })), React.createElement(VideoTools, {
    playerObj: playerObj,
    isLive: props.isLive,
    hideContrallerBar: props.hideContrallerBar
  }), this.props.children);
}

function VideoTools(_ref2) {
  var playerObj = _ref2.playerObj,
      isLive = _ref2.isLive,
      hideContrallerBar = _ref2.hideContrallerBar;

  if (!playerObj) {
    return React.createElement(NoSource, null);
  }

  return React.createElement(React.Fragment, null, React.createElement(ContrallerBar, {
    visibel: !hideContrallerBar,
    api: playerObj.api,
    event: playerObj.event
  }), React.createElement(VideoMessage, null), React.createElement(DragEvent, null), React.createElement(ContrallerEvent, null, React.createElement(ContrallerBar, null), !isLive && React.createElement(TineLine, null)), React.createElement(ErrorEvent, {
    flvPlayer: this.flv,
    hlsPlayer: this.hls
  }), isLive && React.createElement(LiveHeart, {
    key: this.props.file
  }));
}

SinglePlayer.propTypes = {
  file: PropTypes$1.string.isRequired,
  //播放地址 必填
  isLive: PropTypes$1.bool,
  //是否实时视频
  errorReloadTimer: PropTypes$1.number,
  //视频错误重连次数
  type: PropTypes$1.oneOf(['flv', 'hls', 'native']),
  //强制视频流类型
  onInitPlayer: PropTypes$1.func,
  draggable: PropTypes$1.bool,
  hideContrallerBar: PropTypes$1.bool,
  scale: PropTypes$1.bool,
  muted: PropTypes$1.string,
  autoPlay: PropTypes$1.bool,
  playsInline: PropTypes$1.bool,
  preload: PropTypes$1.string,
  poster: PropTypes$1.string,
  loop: PropTypes$1.bool,
  snapshot: PropTypes$1.func,
  className: PropTypes$1.string,
  playsinline: PropTypes$1.bool,
  children: PropTypes$1.any
};
SinglePlayer.defaultProps = {
  isLive: true,
  draggable: true,
  scale: true,
  errorReloadTimer: 5,
  muted: 'muted',
  autoPlay: true,
  playsInline: false,
  preload: 'auto',
  loop: false,
  hideContrallerBar: false
};

export default SinglePlayer;
export { Bar, SinglePlayer as Player };

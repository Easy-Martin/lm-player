import React from 'react';
import ReactDOM from 'react-dom';
import flvjs from 'flv.lm.js';
import * as Hls from 'hls.js';
import { isSupported, Events } from 'hls.js';

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

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
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

var VideoEvent =
/*#__PURE__*/
function () {
  function VideoEvent(video) {
    _classCallCheck(this, VideoEvent);

    this.video = video;
    this.events = {};
    this.playerEvents = {};
  }

  _createClass(VideoEvent, [{
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

  return VideoEvent;
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
      type: "flv",
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
    return url.indexOf(".flv") > -1 ? "flv" : "hls";
  }

  var suffix = resultArr[2].replace(resultArr[4], "");

  if (!suffix) {
    return url.indexOf(".flv") > -1 ? "flv" : "hls";
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
 * 日期格式化
 * @param {*} timetemp
 */

function dateFormat(timetemp) {
  var date = new Date(timetemp);
  var YYYY = date.getFullYear();
  var DD = date.getDate();
  var MM = date.getMonth() + 1;
  var hh = date.getHours();
  var mm = date.getMinutes();
  var ss = date.getSeconds();
  return "".concat(YYYY, ".").concat(MM > 9 ? MM : "0" + MM, ".").concat(DD > 9 ? DD : "0" + DD, " ").concat(hh > 9 ? hh : "0" + hh, ".").concat(mm > 9 ? mm : "0" + mm, ".").concat(ss > 9 ? ss : "0" + ss);
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
  var funcName = isAdd ? "addEventListener" : "removeEventListener";
  var fullScreenEvents = ["fullscreenchange", "mozfullscreenchange", "webkitfullscreenchange", "msfullscreenchange"];
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
          return React.createElement(Component, Object.assign({}, props, context, {
            ref: forwardRef
          }));
        });
      }
    }]);

    return ComponentWithVideoDec;
  }(React.Component);

  return React.forwardRef(function (props, ref) {
    return React.createElement(ComponentWithVideoDec, Object.assign({}, props, {
      forwardRef: ref
    }));
  });
}

function IconFont(_ref) {
  var type = _ref.type,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? "" : _ref$className,
      props = _objectWithoutProperties(_ref, ["type", "className"]);

  return React.createElement("i", Object.assign({
    className: "lm-player-iconfont ".concat(type, " ").concat(className)
  }, props));
}

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
      document.body.addEventListener("mousemove", _this.moveChange);
      document.body.addEventListener("mouseup", _this.stopDrag);
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
      document.body.removeEventListener("mousemove", _this.moveChange);
      document.body.removeEventListener("mouseup", _this.stopDrag);
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
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (!this.dragFlag) {
        this.setState({
          value: nextProps.currentPercent || 0
        });
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.layoutDom = ReactDOM.findDOMNode(this.sliderDomRef.current);
      this.dragDom = this.layoutDom.querySelector(".drag-change-icon");
      this.lineDom = this.layoutDom.querySelector(".slider-content");
      this.layoutDom.addEventListener("mousemove", this.renderSliderTips, false);
      this.layoutDom.addEventListener("mouseout", this.hideSliderTips, false);
      this.lineDom.addEventListener("click", this.changeCurrentValue, false);
      this.dragDom.addEventListener("click", this.cancelPropagation, false);
      this.dragDom.addEventListener("mousedown", this.startDrag, false);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.timer);
      this.layoutDom.removeEventListener("mousemove", this.renderSliderTips, false);
      this.layoutDom.removeEventListener("mouseout", this.hideSliderTips, false);
      this.lineDom.removeEventListener("click", this.changeCurrentValue, false);
      this.dragDom.removeEventListener("click", this.cancelPropagation, false);
      this.dragDom.removeEventListener("mousedown", this.startDrag, false);
      document.body.removeEventListener("mousemove", this.moveChange);
      document.body.removeEventListener("mouseup", this.stopDrag);
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
          className = _this$props$className === void 0 ? "" : _this$props$className;
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

var Tips =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(Tips, _React$Component2);

  function Tips(props) {
    var _this2;

    _classCallCheck(this, Tips);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(Tips).call(this, props));
    _this2.ele = document.createElement("div");
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
          className = _this$props2$classNam === void 0 ? "" : _this$props2$classNam;
      return ReactDOM.createPortal(visibel ? React.createElement("div", {
        className: className,
        style: style
      }, children) : null, this.ele);
    }
  }]);

  return Tips;
}(React.Component);

function Bar(_ref) {
  var _ref$visibel = _ref.visibel,
      visibel = _ref$visibel === void 0 ? true : _ref$visibel,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? "" : _ref$className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["visibel", "className", "children"]);

  if (visibel === false) {
    return null;
  }

  return React.createElement("span", Object.assign({
    className: "contraller-bar-item ".concat(className)
  }, props), children);
}

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

var _class, _temp;

var LeftBar = videoDec(_class = (_temp =
/*#__PURE__*/
function (_React$Component) {
  _inherits(LeftBar, _React$Component);

  function LeftBar(props) {
    var _this;

    _classCallCheck(this, LeftBar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LeftBar).call(this, props));

    _this.seek = function () {
      _this.historyEnd = false;
    };

    _this.historyPlayEnd = function () {
      _this.historyEnd = true;
    };

    _this.updateRender = function () {
      _this.mounted && _this.forceUpdate();
    };

    _this.changePlayStatus = function () {
      var _this$props = _this.props,
          api = _this$props.api,
          video = _this$props.video;

      if (_this.historyEnd) {
        _this.props.reloadHistory();
      } else {
        video.paused ? api.play() : api.pause();
      }
    };

    _this.mutedChange = function () {
      var _this$props2 = _this.props,
          api = _this$props2.api,
          video = _this$props2.video;
      video.muted ? api.unmute() : api.mute();
    };

    _this.volumechange = function () {
      _this.forceUpdate();
    };

    _this.openSliderVolume = function () {
      _this.setState({
        openSliderVolume: true
      });
    };

    _this.closeSliderVolume = function () {
      _this.setState({
        openSliderVolume: false
      });
    };

    _this.onChangeVolume = function (volume) {
      var _this$props3 = _this.props,
          api = _this$props3.api,
          video = _this$props3.video;
      api.setVolume(parseFloat(volume.toFixed(1)));

      if (volume > 0 && video.muted) {
        api.unmute();
      }
    };

    _this.reload = function () {
      if (_this.props.isHistory) {
        _this.props.reloadHistory();
      } else {
        _this.props.api.reload();
      }

      _this.props.event.emit(EventName.CLEAR_ERROR_TIMER);
    };

    _this.state = {
      openSliderVolume: false
    };
    _this.historyEnd = false;
    _this.mounted = false;
    return _this;
  }

  _createClass(LeftBar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var event = this.props.event;
      this.mounted = true;
      event.addEventListener("play", this.updateRender);
      event.addEventListener("pause", this.updateRender);
      event.addEventListener("volumechange", this.volumechange);
      event.on(EventName.HISTORY_PLAY_END, this.historyPlayEnd);
      event.on(EventName.SEEK, this.seek);
    }
  }, {
    key: "render",
    value: function render() {
      var openSliderVolume = this.state.openSliderVolume;
      var _this$props4 = this.props,
          video = _this$props4.video,
          playerProps = _this$props4.playerProps;
      var isLive = playerProps.isLive,
          _playerProps$leftExtC = playerProps.leftExtContents,
          leftExtContents = _playerProps$leftExtC === void 0 ? null : _playerProps$leftExtC,
          _playerProps$leftMidE = playerProps.leftMidExtContents,
          leftMidExtContents = _playerProps$leftMidE === void 0 ? null : _playerProps$leftMidE;
      var volumeType = video.volume === 1 ? "lm-player-volume-max" : "lm-player-volume-normal-fuben";
      return React.createElement("div", {
        className: "contraller-left-bar"
      }, leftExtContents, React.createElement(Bar, {
        visibel: !isLive
      }, React.createElement(IconFont, {
        onClick: this.changePlayStatus,
        type: video.paused ? "lm-player-Play_Main" : "lm-player-Pause_Main",
        title: video.paused ? "播放" : "暂停"
      })), React.createElement(Bar, {
        className: "contraller-bar-volume ".concat(openSliderVolume ? "contraller-bar-hover-volume" : ""),
        onMouseOver: this.openSliderVolume,
        onMouseOut: this.closeSliderVolume
      }, React.createElement(IconFont, {
        onClick: this.mutedChange,
        type: video.muted ? "lm-player-volume-close" : volumeType,
        title: "\u97F3\u91CF"
      }), React.createElement("div", {
        className: "volume-slider-layout"
      }, React.createElement(Slider, {
        className: "volume-slider",
        currentPercent: video.muted ? 0 : video.volume * 100,
        onChange: this.onChangeVolume,
        renderTips: function renderTips(precent) {
          return React.createElement("span", null, Math.round(precent * 100), "%");
        }
      }))), React.createElement(Bar, null, React.createElement(IconFont, {
        onClick: this.reload,
        type: "lm-player-Refresh_Main",
        title: "\u91CD\u8F7D"
      })), leftMidExtContents);
    }
  }]);

  return LeftBar;
}(React.Component), _temp)) || _class;

var _class$1, _temp$1;

var RightBar = videoDec(_class$1 = (_temp$1 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(RightBar, _React$Component);

  function RightBar() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, RightBar);

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(RightBar)).call.apply(_getPrototypeOf2, [this].concat(_args)));

    _this.update = function () {
      _this.forceUpdate();
    };

    _this.fullscreen = function () {
      var _this$props = _this.props,
          api = _this$props.api,
          playContainer = _this$props.playContainer;

      if (!isFullscreen(playContainer)) {
        api.requestFullScreen();
      } else {
        api.cancelFullScreen();
      }

      _this.forceUpdate();
    };

    _this.setScale = function () {
      var _this$props2 = _this.props,
          api = _this$props2.api,
          playContainer = _this$props2.playContainer;
      var dragDom = playContainer.querySelector(".player-mask-layout");
      api.setScale.apply(api, arguments);
      var position = computedBound(dragDom, api.getPosition(), api.getScale());
      position && api.setPosition(position, true);
    };

    _this.snapshot = function () {
      var _this$props3 = _this.props,
          api = _this$props3.api,
          playerProps = _this$props3.playerProps;

      if (playerProps.snapshot) {
        playerProps.snapshot(api.snapshot());
      }
    };

    return _this;
  }

  _createClass(RightBar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      fullScreenListener(true, this.update);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      fullScreenListener(false, this.update);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props4 = this.props,
          playContainer = _this$props4.playContainer,
          playerProps = _this$props4.playerProps;
      var isScale = playerProps.isScale,
          snapshot = playerProps.snapshot,
          _playerProps$rightExt = playerProps.rightExtContents,
          rightExtContents = _playerProps$rightExt === void 0 ? null : _playerProps$rightExt,
          _playerProps$rightMid = playerProps.rightMidExtContents,
          rightMidExtContents = _playerProps$rightMid === void 0 ? null : _playerProps$rightMid;
      var isfull = isFullscreen(playContainer);
      return React.createElement("div", {
        className: "contraller-right-bar"
      }, rightMidExtContents, isScale && React.createElement(React.Fragment, null, React.createElement(Bar, null, React.createElement(IconFont, {
        title: "\u7F29\u5C0F",
        onClick: function onClick() {
          return _this2.setScale(-0.2);
        },
        type: "lm-player-ZoomOut_Main"
      })), React.createElement(Bar, null, React.createElement(IconFont, {
        title: "\u590D\u4F4D",
        onClick: function onClick() {
          return _this2.setScale(1, true);
        },
        type: "lm-player-ZoomDefault_Main"
      })), React.createElement(Bar, null, React.createElement(IconFont, {
        title: "\u653E\u5927",
        onClick: function onClick() {
          return _this2.setScale(0.2);
        },
        type: "lm-player-ZoomIn_Main"
      }))), snapshot && React.createElement(Bar, null, React.createElement(IconFont, {
        title: "\u622A\u56FE",
        onClick: this.snapshot,
        type: "lm-player-SearchBox"
      })), React.createElement(Bar, null, React.createElement(IconFont, {
        title: isfull ? "窗口" : "全屏",
        onClick: this.fullscreen,
        type: isfull ? "lm-player-ExitFull_Main" : "lm-player-Full_Main"
      })), rightExtContents);
    }
  }]);

  return RightBar;
}(React.Component), _temp$1)) || _class$1;

var _class$2, _temp$2;

var ContrallerBar = videoDec(_class$2 = (_temp$2 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ContrallerBar, _React$Component);

  function ContrallerBar(props) {
    var _this;

    _classCallCheck(this, ContrallerBar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ContrallerBar).call(this, props));

    _this.hideContraller = function () {
      _this.setState({
        hideBar: true
      });
    };

    _this.showContraller = function () {
      _this.setState({
        hideBar: false
      });
    };

    _this.state = {
      hideBar: false
    };
    return _this;
  }

  _createClass(ContrallerBar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var event = this.props.event;
      event.on(EventName.HIDE_CONTRALLER, this.hideContraller);
      event.on(EventName.SHOW_CONTRALLER, this.showContraller);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", {
        className: "contraller-bar-layout ".concat(this.state.hideBar ? "hide-contraller-bar" : "")
      }, React.createElement(LeftBar, null), React.createElement(RightBar, null));
    }
  }]);

  return ContrallerBar;
}(React.Component), _temp$2)) || _class$2;

var _class$3, _temp$3;

var ContrallerEvent = videoDec(_class$3 = (_temp$3 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ContrallerEvent, _React$Component);

  function ContrallerEvent(props) {
    var _this;

    _classCallCheck(this, ContrallerEvent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ContrallerEvent).call(this, props));

    _this.showContraller = function () {
      var event = _this.props.event;
      event.emit(EventName.SHOW_CONTRALLER);

      _this.hideContraller();
    };

    _this.hideContraller = function () {
      var event = _this.props.event;
      clearTimeout(_this.timer);
      _this.timer = setTimeout(function () {
        event.emit(EventName.HIDE_CONTRALLER);
      }, 3 * 1000);
    };

    _this.timer = null;
    return _this;
  }

  _createClass(ContrallerEvent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          playContainer = _this$props.playContainer,
          event = _this$props.event;
      playContainer.addEventListener("mousemove", this.showContraller, false);
      playContainer.addEventListener("mouseout", this.hideContraller, false);
      this.timer = setTimeout(function () {
        event.emit(EventName.HIDE_CONTRALLER);
      }, 5 * 1000);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var playContainer = this.props.playContainer;
      playContainer.addEventListener("mousemove", this.showContraller, false);
      playContainer.addEventListener("mouseout", this.hideContraller, false);
      clearTimeout(this.timer);
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return ContrallerEvent;
}(React.Component), _temp$3)) || _class$3;

var _class$4, _temp$4;

var VideoMessage = videoDec(_class$4 = (_temp$4 =
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
        status: "reload"
      });
    };

    _this.errorReload = function (timer) {
      _this.message = React.createElement("div", null, "\u89C6\u9891\u52A0\u8F7D\u9519\u8BEF\uFF0C\u6B63\u5728\u8FDB\u884C\u91CD\u8FDE\u7B2C", timer, "\u91CD\u8FDE");
      _this.mounted && _this.setState({
        status: "reload",
        loading: true
      });
    };

    _this.reloadFail = function () {
      _this.message = React.createElement("div", null, "\u89C6\u9891\u9519\u8BEF");
      _this.mounted && _this.setState({
        status: "fail"
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
      event.addEventListener("loadstart", this.openLoading);
      event.addEventListener("waiting", this.openLoading);
      event.addEventListener("seeking", this.openLoading);
      event.addEventListener("loadeddata", this.closeLoading);
      event.addEventListener("canplay", this.closeLoading);
      event.on(EventName.ERROR_RELOAD, this.errorReload);
      event.on(EventName.RELOAD_FAIL, this.reloadFail);
      event.on(EventName.RELOAD_SUCCESS, this.reloadSuccess);
      event.on(EventName.RELOAD, this.reload);
      event.on(EventName.HISTORY_PLAY_END, this.historyPlayEnd);
      event.on(EventName.CLEAR_ERROR_TIMER, this.clearReloadMessage);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          loading = _this$state.loading,
          status = _this$state.status;
      return React.createElement("div", {
        className: "lm-player-message-mask ".concat(loading || status === "fail" ? "lm-player-mask-loading-animation" : "")
      }, React.createElement(IconFont, {
        type: status === "fail" ? "lm-player-YesorNo_No_Dark" : "lm-player-Loading",
        className: "".concat(loading && status !== "fail" ? "lm-player-loading-animation" : status === "fail" ? "lm-player-loadfail" : "", " lm-player-loading-icon")
      }), React.createElement("span", {
        className: "lm-player-message"
      }, this.message));
    }
  }]);

  return VideoMessage;
}(React.Component), _temp$4)) || _class$4;

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

var _class$5, _temp$5;

var TineLine = videoDec(_class$5 = (_temp$5 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TineLine, _React$Component);

  function TineLine(props) {
    var _this;

    _classCallCheck(this, TineLine);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TineLine).call(this, props));

    _this.hideContraller = function () {
      _this.setState({
        hideBar: true
      });
    };

    _this.showContraller = function () {
      _this.setState({
        hideBar: false
      });
    };

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
      var _this$props = _this.props,
          video = _this$props.video,
          api = _this$props.api;
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
      buffered: 0,
      hideBar: false
    };
    return _this;
  }

  _createClass(TineLine, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var event = this.props.event;
      event.addEventListener("loadedmetadata", this.getDuration);
      event.addEventListener("durationchange", this.getDuration);
      event.addEventListener("timeupdate", this.getCurrentTime);
      event.addEventListener("progress", this.getBuffered);
      event.addEventListener("suspend", this.getBuffered);
      event.addEventListener("seeked", this.seekendPlay);
      event.on(EventName.HIDE_CONTRALLER, this.hideContraller);
      event.on(EventName.SHOW_CONTRALLER, this.showContraller);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          duration = _this$state.duration,
          currentTime = _this$state.currentTime,
          buffered = _this$state.buffered,
          hideBar = _this$state.hideBar;
      var playPercent = Math.round(currentTime / duration * 100);
      var bufferedPercent = Math.round(buffered / duration * 100);
      return React.createElement("div", {
        className: "video-time-line-layout ".concat(hideBar ? "hide-time-line" : "")
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
}(React.Component), _temp$5)) || _class$5;

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

var _class$6, _temp$6;

var ErrorEvent = videoDec(_class$6 = (_temp$6 =
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
        console.warn("视频重连成功！");
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

        if (args[1] && args[1].loader || args[0].indexOf && args[0].indexOf("NetworkError") > -1) {
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


      event.addEventListener("error", this.errorHandle, false); //获取video状态清除错误状态

      event.addEventListener("canplay", this.clearError, false); //历史视频切换播放索引时清除错误次数

      event.on(EventName.CHANGE_PLAY_INDEX, this.clearErrorTimer); //历史视频主动清除错误次数

      event.on(EventName.CLEAR_ERROR_TIMER, this.clearErrorTimer);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
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
}(React.Component), _temp$6)) || _class$6;

var _class$7, _temp$7;

var DragEvent = videoDec(_class$7 = (_temp$7 =
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
}(React.Component), _temp$7)) || _class$7;

var Api =
/*#__PURE__*/
function () {
  function Api(video, playContainer, event, flv, hls) {
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
    value: function updateChunk(_ref) {
      var flv = _ref.flv,
          hls = _ref.hls;
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
      this.player.removeAttribute("src");
      this.unload();

      if (this.flv) {
        this.flv.destroy();
      }

      if (this.hls) {
        this.hls.destroy();
      }

      this.scale = null;
      this.position = null;
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
        } catch (e) {}

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
      var canvas = document.createElement("canvas");
      var ctx = canvas.getContext("2d");
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
      this.player.style.transition = "transform 0.3s";

      this.__setTransform();

      this.event.emit(EventName.TRANSFORM);
      setTimeout(function () {
        _this.player.style.transition = "unset";
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
      this.player.style.transition = isAnimate ? "transform 0.3s" : "unset";

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

var _class$8, _temp$8;

var LiveHeart = videoDec(_class$8 = (_temp$8 =
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
      var event = this.props.event;
      BrowserTab.removeEventListener(this.browserTabChange);
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return LiveHeart;
}(React.Component), _temp$8)) || _class$8;

var LMPlayer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(LMPlayer, _React$Component);

  function LMPlayer(props) {
    var _this;

    _classCallCheck(this, LMPlayer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LMPlayer).call(this, props));

    _this.initPlayer = function () {
      if (!_this.props.file) {
        return false;
      }

      var type = getVideoType(_this.props.file);

      if (type === "flv" || _this.props.type === "flv") {
        _this.flv = createFlvPlayer(_this.player, _this.props);
      } else if (type === "m3u8" || _this.props.type === "hls") {
        _this.hls = createHlsPlayer(_this.player, _this.props.file);
      } else {
        _this.player.src = _this.props.file;
      }

      return true;
    };

    _this.renderVideoTools = function () {
      if (!_this.api) {
        return React.createElement(NoSource, null);
      }

      return React.createElement(React.Fragment, null, React.createElement(ContrallerBar, null), React.createElement(VideoMessage, null), React.createElement(DragEvent, null), React.createElement(ContrallerEvent, null), React.createElement(ErrorEvent, {
        flvPlayer: _this.flv,
        hlsPlayer: _this.hls
      }), _this.props.isLive ? React.createElement(LiveHeart, {
        key: _this.props.file
      }) : React.createElement(TineLine, null));
    };

    _this.getPlayUrl = function () {
      return _this.props.file;
    };

    _this.getPlayerApiContext = function () {
      var api = _this.api ? _this.api.getApi() : {};
      var event = _this.event ? {
        on: _this.event.on.bind(_this.event),
        off: _this.event.off.bind(_this.event),
        emit: _this.event.emit.bind(_this.event)
      } : {};
      return Object.assign({}, api, event, {
        getPlayUrl: _this.getPlayUrl,
        playContainer: _this.playContainer
      });
    };

    _this.getProvider = function () {
      return {
        video: _this.player,
        event: _this.event,
        playerProps: _this.props,
        api: _this.api,
        playContainer: _this.playContainer
      };
    };

    _this.player = null;
    _this.event = null;
    _this.flv = null;
    _this.hls = null;
    _this.api = null;
    _this.playContainerRef = React.createRef();
    _this.playContainer = null;
    _this.willReCreatePlayer = false;
    return _this;
  }

  _createClass(LMPlayer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.playContainer = ReactDOM.findDOMNode(this.playContainerRef.current);
      this.player = this.playContainer.querySelector("video");
      this.createPlayer();
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.file !== nextProps.file) {
        this.willReCreatePlayer = true;
        this.api = null;
        this.event = null;
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.willReCreatePlayer) {
        this.willReCreatePlayer = false;
        this.createPlayer();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.event && this.event.destroy();
      this.api && this.api.destroy();
      this.player = null;
      this.event = null;
      this.api = null;
      this.playContainerRef = null;
      this.playContainer = null;
      this.willReCreatePlayer = null;
      this.flv = null;
      this.hls = null;
    }
  }, {
    key: "createPlayer",
    value: function createPlayer() {
      var isInit = this.initPlayer();

      if (isInit) {
        this.event = new VideoEvent(this.player);
        this.api = new Api(this.player, this.playContainer, this.event, this.flv, this.hls);
        this.props.onInitPlayer && this.props.onInitPlayer(this.getPlayerApiContext());

        if (this.props.autoPlay) {
          this.api.play();
        }

        this.forceUpdate();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          autoplay = _this$props.autoplay,
          poster = _this$props.poster,
          _this$props$preload = _this$props.preload,
          preload = _this$props$preload === void 0 ? "none" : _this$props$preload,
          _this$props$muted = _this$props.muted,
          muted = _this$props$muted === void 0 ? "muted" : _this$props$muted,
          _this$props$className = _this$props.className,
          className = _this$props$className === void 0 ? "" : _this$props$className,
          _this$props$loop = _this$props.loop,
          loop = _this$props$loop === void 0 ? false : _this$props$loop,
          _this$props$playsinli = _this$props.playsinline,
          playsinline = _this$props$playsinli === void 0 ? false : _this$props$playsinli;
      var providerValue = this.getProvider();
      return React.createElement("div", {
        className: "lm-player-container ".concat(className),
        ref: this.playContainerRef
      }, React.createElement("div", {
        className: "player-mask-layout"
      }, React.createElement("video", {
        autoPlay: autoplay,
        preload: preload,
        muted: muted,
        poster: poster,
        controls: false,
        playsInline: playsinline,
        loop: loop
      })), React.createElement(Provider, {
        value: providerValue
      }, this.renderVideoTools()), this.props.children);
    }
  }]);

  return LMPlayer;
}(React.Component);

LMPlayer.defaultProps = {
  isLive: true,
  isDraggable: true,
  isScale: true,
  errorReloadTimer: 5,
  muted: "muted",
  autoPlay: true,
  playsInline: false,
  preload: "auto",
  loop: false
};

var _class$9, _temp$9;

var TineLine$1 = videoDec(_class$9 = (_temp$9 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TineLine, _React$Component);

  function TineLine(props) {
    var _this;

    _classCallCheck(this, TineLine);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TineLine).call(this, props));

    _this.hideContraller = function () {
      _this.setState({
        hideBar: true
      });
    };

    _this.showContraller = function () {
      _this.setState({
        hideBar: false
      });
    };

    _this.reload = function () {
      var api = _this.props.api;

      _this.setState({
        isEnd: false,
        currentTime: api.getCurrentTime()
      });
    };

    _this.historyPlayEnd = function () {
      _this.setState({
        isEnd: true
      });
    };

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
      var _this$props = _this.props,
          seekTo = _this$props.seekTo,
          historyList = _this$props.historyList;
      var numSize = historyList.duration.toString().length;
      var currentTime = (percent + numSize / Math.pow(10, numSize - 1)) * historyList.duration; //修正一下误差

      var playIndex = historyList.fragments.findIndex(function (v) {
        return v.end > currentTime;
      });
      var fragment = historyList.fragments[playIndex];

      if (fragment.file) {
        seekTo(currentTime);

        _this.setState({
          currentTime: currentTime,
          isEnd: false
        });
      }
    };

    _this.seekendPlay = function () {
      var api = _this.props.api;
      api.play();
    };

    _this.renderTimeLineTips = function (percent) {
      var historyList = _this.props.historyList;
      var currentTime = percent * historyList.duration * 1000;
      var date = dateFormat(historyList.beginDate + currentTime);
      return React.createElement("span", null, date);
    };

    _this.fastForward = function () {
      var api = _this.props.api;
      api.fastForward();
    };

    _this.backWind = function () {
      var api = _this.props.api;
      api.backWind();
    };

    _this.computedLineList = function (historyList) {
      var duration = historyList.duration;
      return historyList.fragments.map(function (v) {
        return {
          disabled: !v.file,
          size: (v.end - v.begin) / duration * 100
        };
      });
    };

    _this.state = {
      duration: 1,
      currentTime: 0,
      buffered: 0,
      isEnd: false,
      hideBar: false
    };
    return _this;
  }

  _createClass(TineLine, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var event = this.props.event;
      event.addEventListener("loadedmetadata", this.getDuration);
      event.addEventListener("durationchange", this.getDuration);
      event.addEventListener("timeupdate", this.getCurrentTime);
      event.addEventListener("progress", this.getBuffered);
      event.addEventListener("suspend", this.getBuffered);
      event.addEventListener("seeked", this.seekendPlay);
      event.on(EventName.HISTORY_PLAY_END, this.historyPlayEnd);
      event.on(EventName.RELOAD, this.reload);
      event.on(EventName.HIDE_CONTRALLER, this.hideContraller);
      event.on(EventName.SHOW_CONTRALLER, this.showContraller);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var event = this.props.event;
      event.removeEventListener("loadedmetadata", this.getDuration);
      event.removeEventListener("durationchange", this.getDuration);
      event.removeEventListener("timeupdate", this.getCurrentTime);
      event.removeEventListener("progress", this.getBuffered);
      event.removeEventListener("suspend", this.getBuffered);
      event.removeEventListener("seeked", this.seekendPlay);
      event.off(EventName.HISTORY_PLAY_END, this.historyPlayEnd);
      event.off(EventName.RELOAD, this.reload);
      event.off(EventName.HIDE_CONTRALLER, this.hideContraller);
      event.off(EventName.SHOW_CONTRALLER, this.showContraller);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          historyList = _this$props2.historyList,
          playIndex = _this$props2.playIndex;
      var _this$state = this.state,
          currentTime = _this$state.currentTime,
          buffered = _this$state.buffered,
          isEnd = _this$state.isEnd,
          hideBar = _this$state.hideBar;
      var lineList = this.computedLineList(historyList);
      var currentLine = lineList.filter(function (v, i) {
        return i < playIndex;
      }).map(function (v) {
        return v.size;
      });
      var currentIndexTime = currentLine.length === 0 ? 0 : currentLine.length > 1 ? currentLine.reduce(function (p, c) {
        return p + c;
      }) : currentLine[0];
      var playPercent = currentTime / historyList.duration * 100 + currentIndexTime;
      var bufferedPercent = buffered / historyList.duration * 100 + currentIndexTime;
      return React.createElement("div", {
        className: "video-time-line-layout ".concat(hideBar ? "hide-time-line" : "")
      }, React.createElement(IconFont, {
        type: "lm-player-PrevFast",
        onClick: this.backWind,
        className: "time-line-action-item"
      }), React.createElement(Slider, {
        className: "time-line-box",
        currentPercent: isEnd ? "100" : playPercent,
        availablePercent: bufferedPercent,
        onChange: this.changePlayTime,
        renderTips: this.renderTimeLineTips
      }, React.createElement(React.Fragment, null, lineList.map(function (v, i) {
        var currentSizeLine = lineList.filter(function (v, i2) {
          return i2 < i;
        }).map(function (v) {
          return v.size;
        });
        var currentIndexSize = currentSizeLine.length === 0 ? 0 : currentSizeLine.length > 1 ? currentSizeLine.reduce(function (p, c) {
          return p + c;
        }) : currentSizeLine[0];
        return React.createElement("div", {
          className: "history-time-line-item ".concat(v.disabled ? "history-time-line-disabled" : ""),
          key: i,
          style: {
            width: "".concat(v.size, "%"),
            left: "".concat(currentIndexSize, "%")
          }
        });
      }))), React.createElement(IconFont, {
        type: "lm-player-NextFast_Light",
        onClick: this.fastForward,
        className: "time-line-action-item"
      }));
    }
  }]);

  return TineLine;
}(React.Component), _temp$9)) || _class$9;

var _class$a, _temp$a;

var PlayEnd = videoDec(_class$a = (_temp$a =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PlayEnd, _React$Component);

  function PlayEnd() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, PlayEnd);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(PlayEnd)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.endedHandle = function () {
      var index = _this.props.playIndex;

      _this.props.changePlayIndex(index + 1);
    };

    return _this;
  }

  _createClass(PlayEnd, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var event = this.props.event;
      event.addEventListener("ended", this.endedHandle, false);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var event = this.props.event;
      event.removeEventListener("ended", this.endedHandle, false);
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return PlayEnd;
}(React.Component), _temp$a)) || _class$a;

var HistoryPlayer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(HistoryPlayer, _React$Component);

  function HistoryPlayer(props) {
    var _this;

    _classCallCheck(this, HistoryPlayer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(HistoryPlayer).call(this, props));

    _this.initPlayer = function (index) {
      var historyList = _this.props.historyList;

      if (!historyList || !historyList.fragments[index] || !historyList.fragments[index].file) {
        return null;
      }

      if (_this.flv) {
        _this.flv.unload();

        _this.flv.destroy();

        _this.flv = null;
      }

      if (_this.hls) {
        _this.hls.stopLoad();

        _this.hls.destroy();

        _this.hls = null;
      }

      var type = getVideoType(historyList.fragments[index].file);

      if (type === "flv" || _this.props.type === "flv") {
        _this.flv = createFlvPlayer(_this.player, {
          file: historyList.fragments[index].file
        });
        _this.api && _this.api.updateChunk({
          flv: _this.flv
        });
      } else if (type === "m3u8" || _this.props.type === "hls") {
        _this.hls = createHlsPlayer(_this.player, historyList.fragments[index].file);
        _this.api && _this.api.updateChunk({
          hls: _this.hls
        });
      } else {
        _this.player.src = historyList.fragments[index].file;
      }

      _this.playIndex = index;

      _this.forceUpdate();
    };

    _this.changePlayIndex = function (index) {
      var historyList = _this.props.historyList;

      if (!historyList || !historyList.fragments[index]) {
        _this.event && _this.event.emit(EventName.HISTORY_PLAY_END);
        return false;
      }

      if (!historyList.fragments[index].file) {
        _this.changePlayIndex(index + 1);
      } else {
        _this.initPlayer(index);
      }

      _this.api && _this.api.play();
      _this.event && _this.event.emit(EventName.CHANGE_PLAY_INDEX, index);
      return true;
    };

    _this.getPlayerApiContext = function () {
      var api = _this.api ? _this.api.getApi() : {};
      var event = _this.event ? {
        on: _this.event.on.bind(_this.event),
        off: _this.event.off.bind(_this.event),
        emit: _this.event.emit.bind(_this.event)
      } : {};
      var historyApi = {
        seekTo: _this.seekTo
      };
      return Object.assign({}, api, event, historyApi);
    };

    _this.computedIndexFormTime = function (time) {
      var historyList = _this.props.historyList;
      return historyList.fragments.findIndex(function (v) {
        return v.end > time;
      });
    };

    _this.seekTo = function (currentTime) {
      var historyList = _this.props.historyList;

      var playIndex = _this.computedIndexFormTime(currentTime);

      var fragment = historyList.fragments[playIndex];

      if (!fragment) {
        return;
      }

      var seekTime = currentTime - fragment.begin - 1;
      _this.api && _this.api.pause();

      if (playIndex !== _this.playIndex || !_this.api) {
        _this.changePlayIndex(playIndex);
      }

      _this.api.seekTo(seekTime, true);

      _this.event.emit(EventName.SEEK, currentTime);
    };

    _this.reloadHistory = function () {
      _this.changePlayIndex(0);

      _this.api.seekTo(0);

      _this.event.emit(EventName.RELOAD);

      _this.api.play();
    };

    _this.getProvider = function () {
      return {
        video: _this.player,
        event: _this.event,
        playerProps: _this.props,
        api: _this.api,
        playContainer: _this.playContainer,
        changePlayIndex: _this.changePlayIndex,
        playIndex: _this.playIndex,
        historyList: _this.props.historyList,
        seekTo: _this.seekTo,
        isHistory: true,
        reloadHistory: _this.reloadHistory
      };
    };

    _this.renderVideoTools = function () {
      if (!_this.api) {
        return React.createElement(NoSource, null);
      }

      return React.createElement(React.Fragment, null, React.createElement(ContrallerBar, null), React.createElement(VideoMessage, null), React.createElement(TineLine$1, null), React.createElement(ContrallerEvent, null), React.createElement(ErrorEvent, {
        flvPlayer: _this.flv,
        hlsPlayer: _this.hls
      }), React.createElement(DragEvent, null), React.createElement(PlayEnd, null));
    };

    _this.playIndex = 0;
    _this.player = null;
    _this.event = null;
    _this.flv = null;
    _this.hls = null;
    _this.playContainerRef = React.createRef();
    _this.playContainer = null;
    _this.willReCreatePlayer = false;
    return _this;
  }

  _createClass(HistoryPlayer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.playContainer = ReactDOM.findDOMNode(this.playContainerRef.current);
      this.player = this.playContainer.querySelector("video");
      this.createPlayer();
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.historyList !== nextProps.historyList) {
        this.willReCreatePlayer = true;
        this.api = null;
        this.event = null;
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.willReCreatePlayer) {
        this.playIndex = 0;
        this.willReCreatePlayer = false;
        this.createPlayer();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.event && this.event.destroy();
      this.api && this.api.destroy();
      this.player = null;
      this.event = null;
      this.api = null;
      this.playContainerRef = null;
      this.playContainer = null;
      this.willReCreatePlayer = null;
      this.flv = null;
      this.hls = null;
    }
  }, {
    key: "createPlayer",
    value: function createPlayer() {
      var _this$props = this.props,
          defaultTime = _this$props.defaultTime,
          historyList = _this$props.historyList;
      var isInit = this.changePlayIndex(this.playIndex);

      if (!isInit) {
        return;
      }

      this.event = new VideoEvent(this.player);
      this.api = new Api(this.player, this.playContainer, this.event, this.flv, this.hls);
      this.props.onInitPlayer && this.props.onInitPlayer(this.getPlayerApiContext());

      if (this.props.autoPlay) {
        this.api.play();
      }

      if (defaultTime) {
        this.seekTo((defaultTime - historyList.beginDate) / 1000);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          autoplay = _this$props2.autoplay,
          poster = _this$props2.poster,
          preload = _this$props2.preload,
          _this$props2$muted = _this$props2.muted,
          muted = _this$props2$muted === void 0 ? "muted" : _this$props2$muted,
          _this$props2$loop = _this$props2.loop,
          loop = _this$props2$loop === void 0 ? false : _this$props2$loop,
          _this$props2$classNam = _this$props2.className,
          className = _this$props2$classNam === void 0 ? "" : _this$props2$classNam,
          _this$props2$playsinl = _this$props2.playsinline,
          playsinline = _this$props2$playsinl === void 0 ? false : _this$props2$playsinl;
      var providerValue = this.getProvider();
      return React.createElement("div", {
        className: "lm-player-container ".concat(className),
        ref: this.playContainerRef
      }, React.createElement("div", {
        className: "player-mask-layout"
      }, React.createElement("video", {
        autoPlay: autoplay,
        preload: preload,
        muted: muted,
        poster: poster,
        controls: false,
        playsInline: playsinline,
        loop: loop
      })), React.createElement(Provider, {
        value: providerValue
      }, this.renderVideoTools()), this.props.children);
    }
  }]);

  return HistoryPlayer;
}(React.Component);

HistoryPlayer.defaultProps = {
  isLive: true,
  isDraggable: true,
  isScale: true,
  errorReloadTimer: 5,
  muted: "muted",
  autoPlay: true,
  playsInline: false,
  preload: "auto",
  loop: false,
  defaultTime: 0
};

function createPlayer(_ref) {
  var container = _ref.container,
      children = _ref.children,
      _onInitPlayer = _ref.onInitPlayer,
      props = _objectWithoutProperties(_ref, ["container", "children", "onInitPlayer"]);

  ReactDOM.render(React.createElement(LMPlayer, Object.assign({}, props, {
    onInitPlayer: function onInitPlayer(player) {
      player.destroy = function () {
        ReactDOM.unmountComponentAtNode(container);
      };

      _onInitPlayer && _onInitPlayer(player);
    }
  }), children), container);
}
function createHistoryPlayer(_ref2) {
  var container = _ref2.container,
      children = _ref2.children,
      _onInitPlayer2 = _ref2.onInitPlayer,
      props = _objectWithoutProperties(_ref2, ["container", "children", "onInitPlayer"]);

  ReactDOM.render(React.createElement(HistoryPlayer, Object.assign({}, props, {
    onInitPlayer: function onInitPlayer(player) {
      player.destroy = function () {
        ReactDOM.unmountComponentAtNode(container);
      };

      _onInitPlayer2 && _onInitPlayer2(player);
    }
  }), children), container);
}

export default LMPlayer;
export { Bar, HistoryPlayer, LMPlayer as Player, createHistoryPlayer, createPlayer };

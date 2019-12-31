(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('flv.lm.js'), require('hls.js'), require('prop-types'), require('react-dom')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', 'flv.lm.js', 'hls.js', 'prop-types', 'react-dom'], factory) :
  (global = global || self, factory(global.LMPlayer = {}, global.React, global.flvjs, global.Hls, global.PropTypes$1, global.ReactDOM));
}(this, (function (exports, React, flvjs, Hls, PropTypes$1, ReactDOM) { 'use strict';

  var React__default = 'default' in React ? React['default'] : React;
  flvjs = flvjs && flvjs.hasOwnProperty('default') ? flvjs['default'] : flvjs;
  PropTypes$1 = PropTypes$1 && PropTypes$1.hasOwnProperty('default') ? PropTypes$1['default'] : PropTypes$1;
  ReactDOM = ReactDOM && ReactDOM.hasOwnProperty('default') ? ReactDOM['default'] : ReactDOM;

  class VideoEventInstance {
    constructor(video) {
      this.video = video;
      this.events = {};
      this.playerEvents = {};
    }

    on(eventName, handle) {
      this.events && this.events[eventName] ? this.events[eventName].listener.push(handle) : this.events[eventName] = {
        type: eventName,
        listener: [handle]
      };
    }

    addEventListener(eventName, handle) {
      if (this.video) {
        this.playerEvents[eventName] ? this.playerEvents[eventName].push(handle) : this.playerEvents[eventName] = [handle];
        this.video.addEventListener(eventName, handle, false);
      }
    }

    removeEventListener(eventName, handle) {
      if (this.video) {
        if (!this.playerEvents || !this.playerEvents[eventName]) {
          return;
        }

        let index = this.playerEvents[eventName].findIndex(v => v === handle);
        index > -1 && this.playerEvents[eventName].splice(index, 1);
        this.video.removeEventListener(eventName, handle, false);
      }
    }

    emit(eventName, ...data) {
      if (!this.events || !this.events[eventName]) {
        return;
      }

      this.events[eventName].listener.forEach(v => {
        v(...data);
      });
    }

    off(eventName, handle) {
      if (!this.events || !this.events.eventName) {
        return;
      }

      let index = this.events[eventName].listener.findIndex(v => v === handle);
      index > -1 && this.events[eventName].listener.splice(index, 1);
    }

    getApi() {
      return {
        on: this.on.bind(this),
        off: this.off.bind(this),
        emit: this.emit.bind(this)
      };
    }

    destroy() {
      Object.keys(this.playerEvents).forEach(key => {
        this.playerEvents[key].forEach(fn => {
          this.removeEventListener(key, fn);
        });
      });
      this.playerEvents = {};
      this.events = {};
    }

  }

  /**
   * 创建HLS对象
   * @param {*} video
   * @param {*} file
   */

  function createHlsPlayer(video, file) {
    if (Hls.isSupported()) {
      const player = new Hls({
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
    const {
      flvOptions = {},
      flvConfig = {}
    } = options;

    if (flvjs.isSupported()) {
      const player = flvjs.createPlayer(Object.assign({}, flvOptions, {
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
    const urlInfo = new URL(url);
    const path = `${urlInfo.origin}${urlInfo.pathname}`;
    const reg = /([^\.\/\\]+)\.(([a-z]|[0-9])+(\?\S+)?)$/i;
    const resultArr = reg.exec(path);

    if (!resultArr) {
      return url.indexOf('.flv') > -1 ? 'flv' : 'hls';
    }

    const suffix = resultArr[2].replace(resultArr[4], '');

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
    let time = Math.ceil(second_time);

    if (time > 60) {
      let second = Math.ceil(second_time % 60);
      let min = Math.floor(second_time / 60);
      time = `${min < 10 ? `0${min}` : min}:${second < 10 ? `0${second}` : second}`;

      if (min > 60) {
        min = Math.ceil(second_time / 60 % 60);
        let hour = Math.floor(second_time / 60 / 60);
        time = `${hour < 10 ? `0${hour}` : hour}:${min < 10 ? `0${min}` : min}:${second < 10 ? `0${second}` : second}`;
      } else {
        time = `00:${time}`;
      }
    } else {
      time = `00:00:${time < 10 ? `0${time}` : time}`;
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
    const funcName = isAdd ? 'addEventListener' : 'removeEventListener';
    const fullScreenEvents = ['fullscreenchange', 'mozfullscreenchange', 'webkitfullscreenchange', 'msfullscreenchange'];
    fullScreenEvents.map(v => document[funcName](v, fullscreenchange));
  }
  /**
   * 计算视频拖拽边界
   * @param {*} ele
   * @param {*} currentPosition
   * @param {*} scale
   */

  function computedBound(ele, currentPosition, scale) {
    const data = currentPosition;
    const eleRect = ele.getBoundingClientRect();
    const w = eleRect.width;
    const h = eleRect.height;
    let lx = 0,
        ly = 0;

    if (scale === 1) {
      return [0, 0];
    }

    lx = w * (scale - 1) / 2 / scale;
    ly = h * (scale - 1) / 2 / scale;
    let x = 0,
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

  function IconFont({
    type,
    className = '',
    ...props
  }) {
    return React__default.createElement("i", _extends({
      className: `lm-player-iconfont ${type} ${className}`
    }, props));
  }
  IconFont.propTypes = {
    type: PropTypes$1.string,
    className: PropTypes$1.string
  };

  class Slider extends React__default.Component {
    constructor(props) {
      super(props);

      this.renderSliderTips = e => {
        const {
          renderTips
        } = this.props;

        if (!renderTips) {
          return;
        }

        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          const {
            x,
            width,
            top
          } = this.layoutDom.getBoundingClientRect();
          const tipsX = e.pageX;
          let percent = (e.pageX - x) / width;
          percent = percent < 0 ? 0 : percent > 1 ? 1 : percent;
          this.setState({
            tipsX,
            tipsY: top,
            showTips: true,
            tempValue: percent
          });
        }, 200);
      };

      this.hideSliderTips = () => {
        clearTimeout(this.timer);
        this.setState({
          showTips: false
        });
      };

      this.cancelPropagation = e => {
        e.stopPropagation();
      };

      this.startDrag = e => {
        e.stopPropagation();
        this.dragFlag = true;
        document.body.addEventListener('mousemove', this.moveChange);
        document.body.addEventListener('mouseup', this.stopDrag);
      };

      this.moveChange = e => {
        e.stopPropagation();
        const percent = this.computedPositionForEvent(e);
        this.setState({
          value: percent
        });
      };

      this.stopDrag = e => {
        e.stopPropagation();
        document.body.removeEventListener('mousemove', this.moveChange);
        document.body.removeEventListener('mouseup', this.stopDrag);
        this.dragFlag = false;
        let percent = this.state.value / 100;
        percent = percent < 0 ? 0 : percent > 1 ? 1 : percent;
        this.props.onChange && this.props.onChange(percent);
      };

      this.changeCurrentValue = event => {
        event.stopPropagation();
        const {
          width,
          x
        } = this.layoutDom.getBoundingClientRect();
        let percent = (event.pageX - x) / width;
        this.props.onChange && this.props.onChange(percent);
      };

      this.sliderDomRef = React__default.createRef();
      this.layoutDom = null;
      this.lineDom = null;
      this.dragDom = null;
      this.dragFlag = false;
      this.state = {
        value: this.props.currentPercent || 0,
        tempValue: 0,
        showTips: false,
        tipsX: 0,
        tipsY: 0
      };
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
      if (!this.dragFlag) {
        this.setState({
          value: nextProps.currentPercent || 0
        });
      }
    }

    componentDidMount() {
      this.layoutDom = this.sliderDomRef.current;
      this.dragDom = this.layoutDom.querySelector('.drag-change-icon');
      this.lineDom = this.layoutDom.querySelector('.slider-content');
      this.layoutDom.addEventListener('mousemove', this.renderSliderTips, false);
      this.layoutDom.addEventListener('mouseout', this.hideSliderTips, false);
      this.lineDom.addEventListener('click', this.changeCurrentValue, false);
      this.dragDom.addEventListener('click', this.cancelPropagation, false);
      this.dragDom.addEventListener('mousedown', this.startDrag, false);
    }

    componentWillUnmount() {
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

    computedPositionForEvent(e) {
      const {
        x,
        width
      } = this.layoutDom.getBoundingClientRect();
      const {
        pageX
      } = e;
      let dx = pageX - x;

      if (dx > width) {
        dx = width;
      }

      if (dx < 0) {
        dx = 0;
      }

      return dx / width * 100;
    }

    render() {
      const {
        value,
        showTips,
        tipsX,
        tipsY
      } = this.state;
      const {
        availablePercent = 0,
        className = ''
      } = this.props;
      return React__default.createElement("div", {
        className: `slider-layout ${className}`,
        ref: this.sliderDomRef
      }, React__default.createElement("div", {
        className: "slider-content"
      }, React__default.createElement("div", {
        className: "slider-max-line"
      }), React__default.createElement("div", {
        className: "slider-visibel-line",
        style: {
          width: `${availablePercent}%`
        }
      }), React__default.createElement("div", {
        className: "slider-current-line",
        style: {
          width: `${value}%`
        }
      }), this.props.children), React__default.createElement("div", {
        className: "slider-other-content"
      }, React__default.createElement("div", {
        className: "drag-change-icon",
        draggable: false,
        style: {
          left: `${value}%`
        }
      })), React__default.createElement(Tips, {
        visibel: showTips,
        className: "lm-player-slide-tips",
        style: {
          left: tipsX,
          top: tipsY
        }
      }, this.props.renderTips && this.props.renderTips(this.state.tempValue)));
    }

  }

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

  class Tips extends React__default.Component {
    constructor(props) {
      super(props);
      this.ele = document.createElement('div');
    }

    componentDidMount() {
      document.body.appendChild(this.ele);
    }

    componentWillUnmount() {
      document.body.removeChild(this.ele);
      this.ele = null;
    }

    render() {
      const {
        visibel,
        children,
        style,
        className = ''
      } = this.props;
      return ReactDOM.createPortal(visibel ? React__default.createElement("div", {
        className: className,
        style: style
      }, children) : null, this.ele);
    }

  }

  Tips.propTypes = {
    visibel: PropTypes$1.bool,
    children: PropTypes$1.element,
    style: PropTypes$1.any,
    className: PropTypes$1.string
  };

  function Bar({
    visibel = true,
    className = '',
    children,
    ...props
  }) {
    if (visibel === false) {
      return null;
    }

    return React__default.createElement("span", _extends({
      className: `contraller-bar-item ${className}`
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

  function LeftBar({
    api,
    event,
    video,
    isHistory,
    reloadHistory,
    isLive,
    leftExtContents,
    leftMidExtContents
  }) {
    const [openSliderVolume, setOpenSliderVolume] = React.useState(false);
    const [dep, setDep] = React.useState(Date.now());
    React.useEffect(() => {
      const updateRender = () => {
        setDep(Date.now());
      };

      event.addEventListener('play', updateRender);
      event.addEventListener('pause', updateRender);
      event.addEventListener('volumechange', updateRender);
      return () => {
        event.removeEventListener('play', updateRender);
        event.removeEventListener('pause', updateRender);
        event.removeEventListener('volumechange', updateRender);
      };
    }, [event]); //缓存值

    const paused = React.useMemo(() => video.paused, [dep, video]);
    const statusIconClassName = React.useMemo(() => paused ? 'lm-player-Play_Main' : 'lm-player-Pause_Main', [paused]);
    const statusText = React.useMemo(() => paused ? '播放' : '暂停', [paused]);
    const volumeVal = React.useMemo(() => video.muted ? 0 : video.volume, [dep, video]);
    const volumeIcon = React.useMemo(() => volumeVal === 0 ? 'lm-player-volume-close' : video.volume === 1 ? 'lm-player-volume-max' : 'lm-player-volume-normal-fuben', [volumeVal]);
    const volumePercent = React.useMemo(() => volumeVal === 0 ? 0 : volumeVal * 100, [volumeVal]);
    const sliderClassName = React.useMemo(() => openSliderVolume ? 'contraller-bar-hover-volume' : '', [openSliderVolume]); //TODO 方法

    const changePlayStatus = React.useCallback(() => video.paused ? api.play() : api.pause(), [video, api]);
    const mutedChantgeStatus = React.useCallback(() => video.muted ? api.unmute() : api.mute(), [api, video]);
    const onChangeVolume = React.useCallback(volume => {
      api.setVolume(parseFloat(volume.toFixed(1)));
      volume > 0 && video.muted && api.unmute();
    }, [api, video]);
    const reload = React.useCallback(() => {
      isHistory ? reloadHistory() : api.reload();
      event.emit(EventName.CLEAR_ERROR_TIMER);
    }, [event, isHistory, api]);
    return React__default.createElement("div", {
      className: "contraller-left-bar"
    }, leftExtContents, React__default.createElement(Bar, {
      visibel: !isLive
    }, React__default.createElement(IconFont, {
      onClick: changePlayStatus,
      type: statusIconClassName,
      title: statusText
    })), React__default.createElement(Bar, {
      className: `contraller-bar-volume ${sliderClassName}`,
      onMouseOver: () => setOpenSliderVolume(true),
      onMouseOut: () => setOpenSliderVolume(false)
    }, React__default.createElement(IconFont, {
      onClick: mutedChantgeStatus,
      type: volumeIcon,
      title: "\u97F3\u91CF"
    }), React__default.createElement("div", {
      className: "volume-slider-layout"
    }, React__default.createElement(Slider, {
      className: "volume-slider",
      currentPercent: volumePercent,
      onChange: onChangeVolume,
      renderTips: precent => React__default.createElement("span", null, Math.round(precent * 100), "%")
    }))), React__default.createElement(Bar, null, React__default.createElement(IconFont, {
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

  function RightBar({
    playContainer,
    api,
    scale,
    snapshot,
    rightExtContents,
    rightMidExtContents
  }) {
    const [dep, setDep] = React.useState(Date.now());
    React.useEffect(() => {
      const update = () => setDep(Date.now());

      fullScreenListener(true, update);
      return () => fullScreenListener(false, update);
    }, []);
    const isfull = React.useMemo(() => isFullscreen(playContainer), [dep, playContainer]);
    const fullscreen = React.useCallback(() => {
      !isFullscreen(playContainer) ? api.requestFullScreen() : api.cancelFullScreen();
      setDep(Date.now());
    }, [api, playContainer]);
    const setScale = React.useCallback((...args) => {
      const dragDom = playContainer.querySelector('.player-mask-layout');
      api.setScale(...args);
      let position = computedBound(dragDom, api.getPosition(), api.getScale());
      position && api.setPosition(position, true);
    }, [api, playContainer]);
    return React__default.createElement("div", {
      className: "contraller-right-bar"
    }, rightMidExtContents, scale && React__default.createElement(React__default.Fragment, null, React__default.createElement(Bar, null, React__default.createElement(IconFont, {
      title: "\u7F29\u5C0F",
      onClick: () => setScale(-0.2),
      type: 'lm-player-ZoomOut_Main'
    })), React__default.createElement(Bar, null, React__default.createElement(IconFont, {
      title: "\u590D\u4F4D",
      onClick: () => setScale(1, true),
      type: 'lm-player-ZoomDefault_Main'
    })), React__default.createElement(Bar, null, React__default.createElement(IconFont, {
      title: "\u653E\u5927",
      onClick: () => setScale(0.2),
      type: 'lm-player-ZoomIn_Main'
    }))), snapshot && React__default.createElement(Bar, null, React__default.createElement(IconFont, {
      title: "\u622A\u56FE",
      onClick: () => snapshot(api.snapshot()),
      type: "lm-player-SearchBox"
    })), React__default.createElement(Bar, null, React__default.createElement(IconFont, {
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

  function ContrallerBar({
    playContainer,
    snapshot,
    rightExtContents,
    rightMidExtContents,
    scale,
    visibel,
    api,
    event,
    video,
    isHistory,
    reloadHistory,
    isLive,
    leftExtContents,
    leftMidExtContents
  }) {
    return React__default.createElement("div", {
      className: `contraller-bar-layout ${!visibel ? 'hide-contraller-bar' : ''}`
    }, React__default.createElement(LeftBar, {
      api: api,
      event: event,
      video: video,
      isHistory: isHistory,
      reloadHistory: reloadHistory,
      isLive: isLive,
      leftMidExtContents: leftMidExtContents,
      leftExtContents: leftExtContents
    }), React__default.createElement(RightBar, {
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

  const videoContext = React__default.createContext(null);
  const Provider = videoContext.Provider;
  const Consumer = videoContext.Consumer;
  function videoDec(Component) {
    class ComponentWithVideoDec extends React__default.Component {
      render() {
        const {
          forwardRef,
          ...props
        } = this.props;
        return React__default.createElement(Consumer, null, context => React__default.createElement(Component, _extends({}, props, context, {
          ref: forwardRef
        })));
      }

    }

    ComponentWithVideoDec.propTypes = {
      forwardRef: PropTypes$1.ref
    };
    return React__default.forwardRef((props, ref) => React__default.createElement(ComponentWithVideoDec, _extends({}, props, {
      forwardRef: ref
    })));
  }

  var _class, _temp;

  let ContrallerEvent = videoDec(_class = (_temp = class ContrallerEvent extends React__default.Component {
    constructor(props) {
      super(props);

      this.showContraller = () => {
        if (!this.visibel) {
          const {
            event
          } = this.props;
          this.visibel = true;
          this.forceUpdate();
          event.emit(EventName.SHOW_CONTRALLER);
        }

        this.hideContraller();
      };

      this.hideContraller = () => {
        const {
          event
        } = this.props;
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          this.visibel = false;
          event.emit(EventName.HIDE_CONTRALLER);
          this.forceUpdate();
        }, 3 * 1000);
      };

      this.timer = null;
      this.visibel = true;
    }

    componentDidMount() {
      const {
        playContainer,
        event
      } = this.props;
      playContainer.addEventListener('mousemove', this.showContraller, false);
      playContainer.addEventListener('mouseout', this.hideContraller, false);
      this.timer = setTimeout(() => {
        event.emit(EventName.HIDE_CONTRALLER);
      }, 5 * 1000);
    }

    componentWillUnmount() {
      const {
        playContainer
      } = this.props;
      playContainer.addEventListener('mousemove', this.showContraller, false);
      playContainer.addEventListener('mouseout', this.hideContraller, false);
      clearTimeout(this.timer);
    }

    render() {
      const {
        children
      } = this.props;
      return React__default.Children.map(children, child => React__default.isValidElement(child) ? React__default.cloneElement(child, {
        visibel: this.visibel
      }) : child);
    }

  }, _temp)) || _class;

  ContrallerEvent.propTypes = {
    api: PropTypes$1.object,
    event: PropTypes$1.object,
    playContainer: PropTypes$1.node,
    children: PropTypes$1.element
  };

  var _class$1, _temp$1;

  let VideoMessage = videoDec(_class$1 = (_temp$1 = class VideoMessage extends React__default.Component {
    constructor(props) {
      super(props);

      this.clearReloadMessage = () => {
        this.message = null;
        this.mounted && this.forceUpdate();
      };

      this.reload = () => {
        this.setState({
          status: 'reload'
        });
      };

      this.errorReload = timer => {
        this.message = React__default.createElement("div", null, "\u89C6\u9891\u52A0\u8F7D\u9519\u8BEF\uFF0C\u6B63\u5728\u8FDB\u884C\u91CD\u8FDE\u7B2C", timer, "\u91CD\u8FDE");
        this.mounted && this.setState({
          status: 'reload',
          loading: true
        });
      };

      this.reloadFail = () => {
        this.message = React__default.createElement("div", null, "\u89C6\u9891\u9519\u8BEF");
        this.mounted && this.setState({
          status: 'fail'
        });
      };

      this.reloadSuccess = () => {
        this.message = null;
        this.mounted && this.setState({
          status: null
        });
      };

      this.openLoading = () => {
        this.mounted && this.setState({
          loading: true
        });
      };

      this.closeLoading = () => {
        this.mounted && this.setState({
          loading: false
        });
      };

      this.historyPlayEnd = () => {
        this.message = null;
        this.mounted && this.setState({
          status: null,
          loading: false
        });
        this.props.api.pause();
      };

      this.state = {
        loading: false,
        status: null
      };
      this.mounted = false;
      this.message = null;
    }

    componentDidMount() {
      const {
        event
      } = this.props;
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

    componentWillUnmount() {
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

    render() {
      const {
        loading,
        status
      } = this.state;
      return React__default.createElement("div", {
        className: `lm-player-message-mask ${loading || status === 'fail' ? 'lm-player-mask-loading-animation' : ''}`
      }, React__default.createElement(IconFont, {
        type: status === 'fail' ? 'lm-player-YesorNo_No_Dark' : 'lm-player-Loading',
        className: `${loading && status !== 'fail' ? 'lm-player-loading-animation' : status === 'fail' ? 'lm-player-loadfail' : ''} lm-player-loading-icon`
      }), React__default.createElement("span", {
        className: "lm-player-message"
      }, this.message));
    }

  }, _temp$1)) || _class$1;

  VideoMessage.propTypes = {
    api: PropTypes.object,
    event: PropTypes.object
  };
  const NoSource = () => {
    return React__default.createElement("div", {
      className: "lm-player-message-mask lm-player-mask-loading-animation"
    }, React__default.createElement(IconFont, {
      style: {
        fontSize: 80
      },
      type: "lm-player-PlaySource",
      title: "\u8BF7\u9009\u62E9\u89C6\u9891\u6E90"
    }));
  };

  var _class$2, _temp$2;

  let TineLine = videoDec(_class$2 = (_temp$2 = class TineLine extends React__default.Component {
    constructor(props) {
      super(props);

      this.getDuration = () => {
        const {
          api
        } = this.props;
        this.setState({
          duration: api.getDuration()
        });
      };

      this.getCurrentTime = () => {
        const {
          api
        } = this.props;
        const state = {
          currentTime: api.getCurrentTime(),
          buffered: api.getSecondsLoaded()
        };

        if (state.buffered === this.state.buffered) {
          delete state.buffered;
        }

        this.setState(state);
      };

      this.getBuffered = () => {
        const {
          api
        } = this.props;
        this.setState({
          buffered: api.getSecondsLoaded()
        });
      };

      this.changePlayTime = percent => {
        const {
          api
        } = this.props;
        const currentTime = percent * this.state.duration;
        api.pause();
        this.setState({
          currentTime
        });
        api.seekTo(currentTime);
      };

      this.seekendPlay = () => {
        const {
          api
        } = this.props;
        api.play();
      };

      this.renderTimeLineTips = percent => {
        const currentTime = percent * this.state.duration;
        const time = timeStamp(currentTime);
        return React__default.createElement("span", null, time);
      };

      this.fastForward = () => {
        const {
          api
        } = this.props;
        api.fastForward();
      };

      this.backWind = () => {
        const {
          api
        } = this.props;
        api.backWind();
      };

      this.state = {
        duration: 0,
        currentTime: 0,
        buffered: 0
      };
    }

    componentDidMount() {
      const {
        event
      } = this.props;
      event.addEventListener('loadedmetadata', this.getDuration);
      event.addEventListener('durationchange', this.getDuration);
      event.addEventListener('timeupdate', this.getCurrentTime);
      event.addEventListener('progress', this.getBuffered);
      event.addEventListener('suspend', this.getBuffered);
      event.addEventListener('seeked', this.seekendPlay);
    }

    render() {
      const {
        duration,
        currentTime,
        buffered
      } = this.state;
      const playPercent = Math.round(currentTime / duration * 100);
      const bufferedPercent = Math.round(buffered / duration * 100);
      return React__default.createElement("div", {
        className: `video-time-line-layout ${!this.props.visibel ? 'hide-time-line' : ''}`
      }, React__default.createElement(IconFont, {
        type: "lm-player-PrevFast",
        onClick: this.backWind,
        className: "time-line-action-item"
      }), React__default.createElement(Slider, {
        className: "time-line-box",
        currentPercent: playPercent,
        availablePercent: bufferedPercent,
        onChange: this.changePlayTime,
        renderTips: this.renderTimeLineTips
      }), React__default.createElement(IconFont, {
        type: "lm-player-NextFast_Light",
        onClick: this.fastForward,
        className: "time-line-action-item"
      }));
    }

  }, _temp$2)) || _class$2;

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

  let ErrorEvent = videoDec(_class$3 = (_temp$3 = class ErrorEvent extends React__default.Component {
    constructor(props) {
      super(props);

      this.clearErrorTimer = () => {
        this.errorTimer = 0;
        clearTimeout(this.reconnectTimer);
      };

      this.clearError = () => {
        const {
          event
        } = this.props;

        if (this.errorTimer > 0) {
          console.warn('视频重连成功！');
          event.emit(EventName.RELOAD_SUCCESS);
          this.clearErrorTimer();
        }
      };

      this.errorHandle = (...args) => {
        console.error(...args);
        clearTimeout(this.reconnectTimer);
        const {
          event,
          api,
          isHistory,
          changePlayIndex,
          playIndex,
          playerProps
        } = this.props;
        const timer = this.errorTimer + 1;
        event.emit(EventName.ERROR, ...args);

        if (timer > playerProps.errorReloadTimer) {
          isHistory ? changePlayIndex(playIndex + 1) : event.emit(EventName.RELOAD_FAIL), api.unload();
        } else {
          this.errorTimer = timer;

          if (args[1] && args[1].loader || args[0].indexOf && args[0].indexOf('NetworkError') > -1) {
            this.reloadAction(timer, args);
          }

          this.reconnectTimer = setTimeout(() => {
            this.reloadAction(timer, args);
          }, 1000 * 20);
        }
      };

      this.reloadAction = (timer, args) => {
        const {
          event,
          api,
          hlsPlayer
        } = this.props;
        event.emit(EventName.ERROR_RELOAD, timer, ...args);
        console.warn(`视频播放出错，正在进行重连${timer}`);

        if (hlsPlayer) {
          hlsPlayer.swapAudioCodec();
          hlsPlayer.recoverMediaError();
        }

        api.reload();
      };

      this.errorTimer = 0;
    }

    componentDidMount() {
      const {
        event,
        flvPlayer,
        hlsPlayer
      } = this.props;

      if (flvPlayer) {
        //捕获flv错误
        flvPlayer.on(flvjs.Events.ERROR, this.errorHandle);
      }

      if (hlsPlayer) {
        //捕获hls错误
        hlsPlayer.on(Hls.Events.ERROR, this.errorHandle);
      } //捕获video错误


      event.addEventListener('error', this.errorHandle, false); //获取video状态清除错误状态

      event.addEventListener('canplay', this.clearError, false); //历史视频切换播放索引时清除错误次数

      event.on(EventName.CHANGE_PLAY_INDEX, this.clearErrorTimer); //历史视频主动清除错误次数

      event.on(EventName.CLEAR_ERROR_TIMER, this.clearErrorTimer);
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
      if (nextProps.flvPlayer && nextProps.flvPlayer !== this.props.flvPlayer) {
        nextProps.flvPlayer.on(flvjs.Events.ERROR, this.errorHandle);
      }

      if (nextProps.hlsPlayer && nextProps.hlsPlayer !== this.props.hlsPlayer) {
        nextProps.hlsPlayer.on(Hls.Events.ERROR, this.errorHandle);
      }
    }

    componentWillUnmount() {
      clearTimeout(this.reconnectTimer);
    }

    render() {
      return null;
    }

  }, _temp$3)) || _class$3;

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

  let DragEvent = videoDec(_class$4 = (_temp$4 = class DragEvent extends React__default.Component {
    constructor(props) {
      super(props);

      this.openDrag = e => {
        this.position.start = [e.pageX, e.pageY];
        this.dragDom.addEventListener("mousemove", this.moveChange);
        this.dragDom.addEventListener("mouseup", this.stopDrag);
      };

      this.moveChange = e => {
        const {
          api
        } = this.props;
        const currentPosition = api.getPosition();
        this.position.end = [e.pageX, e.pageY];
        const x = currentPosition[0] + (this.position.end[0] - this.position.start[0]);
        const y = currentPosition[1] + (this.position.end[1] - this.position.start[1]);
        const position = [x, y];
        api.setPosition(position);
        this.position.start = [e.pageX, e.pageY];
      };

      this.stopDrag = () => {
        this.dragDom.removeEventListener("mousemove", this.moveChange);
        this.dragDom.removeEventListener("mouseup", this.stopDrag);
        this.transformChange();
      };

      this.transformChange = () => {
        const {
          api
        } = this.props;
        let position = computedBound(this.dragDom, api.getPosition(), api.getScale());
        position && api.setPosition(position, true);
      };

      const {
        playContainer
      } = props;
      this.dragDom = playContainer.querySelector(".player-mask-layout");
      this.position = {
        start: [0, 0],
        end: [0, 0]
      };
    }

    componentDidMount() {
      const {
        isDraggable
      } = this.props.playerProps;

      if (isDraggable) {
        this.dragDom.addEventListener("mousedown", this.openDrag);
        this.props.event.addEventListener("transform", this.transformChange, true);
      }
    }

    componentWillUnmount() {
      this.dragDom.removeEventListener("mousedown", this.openDrag);
    }

    render() {
      return null;
    }

  }, _temp$4)) || _class$4;

  DragEvent.propTypes = {
    api: PropTypes$1.object,
    event: PropTypes$1.object,
    playContainer: PropTypes$1.node,
    playerProps: PropTypes$1.object
  };

  class Api {
    constructor({
      video,
      playContainer,
      event,
      flv,
      hls
    }) {
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


    updateChunk({
      flv,
      hls
    }) {
      this.flv = flv;
      this.hls = hls;
    }
    /**
     * 全屏
     */


    requestFullScreen() {
      if (!isFullscreen(this.playContainer)) {
        fullscreen(this.playContainer);
      }
    }
    /**
     * 退出全屏
     */


    cancelFullScreen() {
      if (isFullscreen(this.playContainer)) {
        exitFullscreen();
      }
    }

    play() {
      if (this.player.paused) {
        this.player.play();
      }
    }

    pause() {
      if (!this.player.paused) {
        this.player.pause();
      }
    }

    destroy() {
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


    seekTo(seconds, noEmit) {
      const buffered = this.getBufferedTime();

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


    reload() {
      this.unload();
      this.load();
      this.play();
      this.event.emit(EventName.RELOAD);

      if (this.getCurrentTime !== 0) {
        this.seekTo(0);
      }
    }

    unload() {
      this.flv && this.flv.unload();
      this.hls && this.hls.stopLoad();
    }

    load() {
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

    setVolume(fraction) {
      this.player.volume = fraction;
    }

    mute() {
      this.player.muted = true;
    }

    unmute() {
      this.player.muted = false;
    }
    /**
     * 开启画中画功能
     */


    requestPictureInPicture() {
      if (this.player.requestPictureInPicture && document.pictureInPictureElement !== this.player) {
        this.player.requestPictureInPicture();
      }
    }
    /**
     * 关闭画中画功能
     */


    exitPictureInPicture() {
      if (document.exitPictureInPicture && document.pictureInPictureElement === this.player) {
        document.exitPictureInPicture();
      }
    }
    /**
     * 设置播放速率
     * @param {*} rate
     */


    setPlaybackRate(rate) {
      this.player.playbackRate = rate;
    }
    /**
     * 获取视频总时长
     */


    getDuration() {
      if (!this.player) return null;
      const {
        duration,
        seekable
      } = this.player;

      if (duration === Infinity && seekable.length > 0) {
        return seekable.end(seekable.length - 1);
      }

      return duration;
    }
    /**
     * 获取当前播放时间
     */


    getCurrentTime() {
      if (!this.player) return null;
      return this.player.currentTime;
    }
    /**
     * 获取缓存时间
     */


    getSecondsLoaded() {
      return this.getBufferedTime()[1];
    }
    /**
     * 获取当前视频缓存的起止时间
     */


    getBufferedTime() {
      if (!this.player) return null;
      const {
        buffered
      } = this.player;

      if (buffered.length === 0) {
        return [0, 0];
      }

      const end = buffered.end(buffered.length - 1);
      const start = buffered.start(buffered.length - 1);
      const duration = this.getDuration();

      if (end > duration) {
        return duration;
      }

      return [start, end];
    }
    /**
     * 快进通过seekTo方法实现
     * @param {*} second
     */


    fastForward(second = 5) {
      const duration = this.getDuration();
      const currentTime = this.getCurrentTime();
      const time = currentTime + second;
      this.seekTo(time > duration - 1 ? duration - 1 : time);
    }
    /**
     * 快退通过seekTo方法实现
     * @param {*} second
     */


    backWind(second = 5) {
      const currentTime = this.getCurrentTime();
      const time = currentTime - second;
      this.seekTo(time < 1 ? 1 : time);
    }
    /**
     * 视频截屏方法
     */


    snapshot() {
      let canvas = document.createElement('canvas');
      let ctx = canvas.getContext('2d');
      canvas.width = this.player.videoWidth;
      canvas.height = this.player.videoHeight;
      ctx.drawImage(this.player, 0, 0, canvas.width, canvas.height);
      setTimeout(() => {
        canvas.remove();
        canvas = null;
        ctx = null;
      }, 200);
      return canvas.toDataURL();
    }

    setScale(num, isRest = false) {
      let scale = this.scale + num;

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
      setTimeout(() => {
        this.player.style.transition = 'unset';
      }, 500);
    }

    getScale() {
      return this.scale;
    }

    setPosition(position, isAnimate) {
      this.position = position;
      this.player.style.transition = isAnimate ? 'transform 0.3s' : 'unset';

      this.__setTransform();
    }

    getPosition() {
      return this.position;
    }

    __setTransform() {
      this.player.style.transform = `scale(${this.scale}) translate(${this.position[0]}px,${this.position[1]}px)`;
    }

    getApi() {
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

  }

  function getHiddenProp() {
    const prefixes = ["webkit", "moz", "ms", "o"]; // 如果hidden 属性是原生支持的，我们就直接返回

    if ("hidden" in document) {
      return "hidden";
    } // 其他的情况就循环现有的浏览器前缀，拼接我们所需要的属性


    for (let i = 0; i < prefixes.length; i++) {
      // 如果当前的拼接的前缀在 document对象中存在 返回即可
      if (prefixes[i] + "Hidden" in document) {
        return prefixes[i] + "Hidden";
      }
    } // 其他的情况 直接返回null


    return null;
  }

  function getVisibilityState() {
    const prefixes = ["webkit", "moz", "ms", "o"];

    if ("visibilityState" in document) {
      return "visibilityState";
    }

    for (let i = 0; i < prefixes.length; i++) {
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
    const visProp = getHiddenProp();
    const evtname = visProp.replace(/[H|h]idden/, "") + "visibilitychange";
    document.addEventListener(evtname, listener, false);
  }

  function removeEventListener(listener) {
    const visProp = getHiddenProp();
    const evtname = visProp.replace(/[H|h]idden/, "") + "visibilitychange";
    document.removeEventListener(evtname, listener, false);
  }

  var BrowserTab = {
    addEventListener,
    removeEventListener,
    visibilityState
  };

  var _class$5, _temp$5;

  let LiveHeart = videoDec(_class$5 = (_temp$5 = class LiveHeart extends React__default.Component {
    constructor(props) {
      super(props);

      this.browserTabChange = () => {
        if (BrowserTab.visibilityState() === "visible") {
          this.focusSeekAction();
        }
      };

      this.canplay = () => {
        const {
          api
        } = this.props;
        this.isCanPlay = true;
        api.play();
      };

      this.focusSeekAction = () => {
        const {
          api
        } = this.props;
        const current = api.getCurrentTime();
        const buffered = api.getSecondsLoaded();

        if (buffered - current > 5) {
          console.warn(`当前延时过大current->${current} buffered->${buffered}, 基于视频当前缓存时间更新当前播放时间 updateTime -> ${buffered - 2}`);
          api.seekTo(buffered - 2 > 0 ? buffered - 2 : 0);
        }
      };

      this.timer = null;
      this.isCanPlay = false;
    }

    componentDidMount() {
      const {
        event
      } = this.props;
      BrowserTab.addEventListener(this.browserTabChange);
      event.addEventListener("canplay", this.canplay);
    }

    componentWillUnmount() {
      BrowserTab.removeEventListener(this.browserTabChange);
    }

    render() {
      return null;
    }

  }, _temp$5)) || _class$5;

  LiveHeart.propTypes = {
    api: PropTypes$1.object,
    event: PropTypes$1.object
  };

  function SinglePlayer({
    type,
    file,
    className,
    autoPlay,
    muted,
    poster,
    playsinline,
    loop,
    preload,
    onInitPlayer,
    ...props
  }) {
    const playContainerRef = React.useRef(null);
    const [playerObj, setPlayerObj] = React.useRef({});
    React.useEffect(() => {
      if (!file) {
        return;
      }

      const playerObject = {
        playContainer: playContainerRef.current,
        video: playContainerRef.current.querySelector('video')
      };
      const formartType = getVideoType(file);

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
    return React__default.createElement("div", {
      className: `lm-player-container ${className}`,
      ref: playContainerRef
    }, React__default.createElement("div", {
      className: "player-mask-layout"
    }, React__default.createElement("video", {
      autoPlay: autoPlay,
      preload: preload,
      muted: muted,
      poster: poster,
      controls: false,
      playsInline: playsinline,
      loop: loop
    })), React__default.createElement(VideoTools, {
      playerObj: playerObj,
      isLive: props.isLive,
      hideContrallerBar: props.hideContrallerBar
    }), this.props.children);
  }

  function VideoTools({
    playerObj,
    isLive,
    hideContrallerBar
  }) {
    if (!playerObj) {
      return React__default.createElement(NoSource, null);
    }

    return React__default.createElement(React__default.Fragment, null, React__default.createElement(ContrallerBar, {
      visibel: !hideContrallerBar,
      api: playerObj.api,
      event: playerObj.event
    }), React__default.createElement(VideoMessage, null), React__default.createElement(DragEvent, null), React__default.createElement(ContrallerEvent, null, React__default.createElement(ContrallerBar, null), !isLive && React__default.createElement(TineLine, null)), React__default.createElement(ErrorEvent, {
      flvPlayer: this.flv,
      hlsPlayer: this.hls
    }), isLive && React__default.createElement(LiveHeart, {
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

  exports.Bar = Bar;
  exports.Player = SinglePlayer;
  exports.default = SinglePlayer;

  Object.defineProperty(exports, '__esModule', { value: true });

})));

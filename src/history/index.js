import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { Provider } from "../context";
import ContrallerBar from "../contraller_bar";
import VideoMessage from "../message";
import HistoryTimeLine from "./time_line_history";
import ErrorEvent from "../event/errorEvent";
import DragEvent from "../event/dragEvent";
import Api from "../api";
import VideoEvent from "../event";
import PlayEnd from "./play_end";
import EventName from "../event/eventName";
import ContrallerEvent from "../event/contrallerEvent";
import { getVideoType, createFlvPlayer, createHlsPlayer } from "../util";

class HistoryPlayer extends React.Component {
  static propTypes = {
    historyList: PropTypes.object.isRequired, //播放地址 必填
    isLive: PropTypes.bool, //是否实时视频
    errorReloadTimer: PropTypes.number, //视频错误重连次数
    type: PropTypes.oneOf(["flv", "hls", "native"]), //强制视频流类型
    onInitPlayer: PropTypes.func,
    isDraggable: PropTypes.bool,
    isScale: PropTypes.bool,
    muted: PropTypes.string,
    autoPlay: PropTypes.bool,
    playsInline: PropTypes.bool,
    preload: PropTypes.string,
    poster: PropTypes.string,
    loop: PropTypes.bool,
    defaultTime: PropTypes.number
  };
  static defaultProps = {
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
  constructor(props) {
    super(props);
    this.playIndex = 0;
    this.player = null;
    this.event = null;
    this.flv = null;
    this.hls = null;
    this.playContainerRef = React.createRef();
    this.playContainer = null;
    this.willReCreatePlayer = false;
  }
  componentDidMount() {
    const { defaultTime, historyList } = this.props;
    this.playContainer = ReactDOM.findDOMNode(this.playContainerRef.current);
    this.player = this.playContainer.querySelector("video");
    this.changePlayIndex(this.playIndex);
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
  componentWillReceiveProps(nextProps) {
    if (this.props.historyList !== nextProps.historyList) {
      this.willReCreatePlayer = true;
    }
  }
  componentDidUpdate() {
    if (this.willReCreatePlayer) {
      this.playIndex = 0;
      this.changePlayIndex(this.playIndex);
      this.willReCreatePlayer = false;
    }
  }
  componentWillUnmount() {
    this.event.destroy();
    this.player = null;
    this.event = null;
    setTimeout(() => {
      this.api.destroy();
      this.flv = null;
      this.hls = null;
      this.api = null;
    }, 200);
    this.playContainerRef = null;
    this.playContainer = null;
    this.willReCreatePlayer = null;
  }
  initPlayer = index => {
    const { historyList } = this.props;
    if (!historyList || !historyList.fragments[index] || !historyList.fragments[index].file) {
      return null;
    }
    if (this.flv) {
      this.flv.unload();
      this.flv.destroy();
      this.flv = null;
    }
    if (this.hls) {
      this.hls.stopLoad();
      this.hls.destroy();
      this.hls = null;
    }
    const type = getVideoType(historyList.fragments[index].file);
    if (type === "flv" || this.props.type === "flv") {
      this.flv = createFlvPlayer(this.player, { file: historyList.fragments[index].file });
      this.api && this.api.updateChunk({ flv: this.flv });
    } else if (type === "m3u8" || this.props.type === "hls") {
      this.hls = createHlsPlayer(this.player, historyList.fragments[index].file);
      this.api && this.api.updateChunk({ hls: this.hls });
    } else {
      this.player.src = historyList.fragments[index].file;
    }
    this.playIndex = index;
    this.forceUpdate();
  };
  /**
   * @历史视频
   * @专用修改历史视频播放的索引
   */
  changePlayIndex = index => {
    const { historyList } = this.props;
    if (!historyList.fragments[index]) {
      this.event && this.event.emit(EventName.HISTORY_PLAY_END);
      return;
    }
    if (!historyList.fragments[index].file) {
      this.changePlayIndex(index + 1);
    } else {
      this.initPlayer(index);
    }
    this.api && this.api.play();
    this.event && this.event.emit(EventName.CHANGE_PLAY_INDEX, index);
  };

  /**
   * 覆盖Player中暴漏的api，重写seek相关的方法
   */
  getPlayerApiContext = () => {
    const api = this.api ? this.api.getApi() : {};
    const event = this.event
      ? {
          on: this.event.on.bind(this.event),
          off: this.event.off.bind(this.event),
          emit: this.event.emit.bind(this.event)
        }
      : {};

    const historyApi = {
      seekTo: this.seekTo
    };
    return Object.assign({}, api, event, historyApi);
  };

  /**
   * 根据时间计算当前对应的播放索引
   */
  computedIndexFormTime = time => {
    const { historyList } = this.props;
    return historyList.fragments.findIndex(v => v.end > time);
  };

  /**
   * 重写api下的seekTo方法
   */
  seekTo = currentTime => {
    const { historyList } = this.props;
    const playIndex = this.computedIndexFormTime(currentTime);
    const fragment = historyList.fragments[playIndex];
    if (!fragment) {
      return;
    }
    const seekTime = currentTime - fragment.begin - 1;
    this.api && this.api.pause();
    if (playIndex !== this.playIndex || !this.api) {
      this.changePlayIndex(playIndex);
    }
    this.api.seekTo(seekTime, true);
    this.event.emit(EventName.SEEK, currentTime);
  };

  /**
   * 重写reload方法
   */
  reloadHistory = () => {
    this.changePlayIndex(0);
    this.api.seekTo(0);
    this.event.emit(EventName.RELOAD);
    this.api.play();
  };
  /**
   * 覆盖Player中的context的value，新增一些历史视频专用的方法
   */
  getProvider = () => {
    return {
      video: this.player,
      event: this.event,
      playerProps: this.props,
      api: this.api,
      playContainer: this.playContainer,
      changePlayIndex: this.changePlayIndex,
      playIndex: this.playIndex,
      historyList: this.props.historyList,
      seekTo: this.seekTo,
      isHistory: true,
      reloadHistory: this.reloadHistory
    };
  };
  renderVideoTools = () => {
    if (!this.player) {
      return null;
    }
    return (
      <>
        <ContrallerBar />
        <VideoMessage />
        <HistoryTimeLine />
        <ContrallerEvent />
        <ErrorEvent flvPlayer={this.flv} hlsPlayer={this.hls} />
        <DragEvent />
        <PlayEnd />
      </>
    );
  };
  render() {
    const { autoplay, poster, preload, muted = "muted", loop = false, className = "", playsinline = false } = this.props;
    const providerValue = this.getProvider();
    return (
      <div className={`lm-player-container ${className}`} ref={this.playContainerRef}>
        <div className="player-mask-layout">
          <video
            autoPlay={autoplay}
            preload={preload}
            muted={muted}
            poster={poster}
            controls={false}
            playsInline={playsinline}
            loop={loop}
          />
        </div>
        <Provider value={providerValue}>{this.renderVideoTools()}</Provider>
        {this.props.children}
      </div>
    );
  }
}

export default HistoryPlayer;

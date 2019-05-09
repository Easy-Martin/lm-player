import Player from "../player";
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

class HistoryPlayer extends Player {
  constructor(props) {
    super(props);
    this.playIndex = 0;
  }
  componentDidMount() {
    this.playContainer = ReactDOM.findDOMNode(this.playContainerRef.current);
    this.player = this.playContainer.querySelector("video");
    this.checkFirstFile();
    this.initPlayer(this.playIndex, true);
    this.event = new VideoEvent(this.player);
    this.api = new Api(this.player, this.playContainer, this.event, this.flv, this.hls);

    if (this.props.playsinline) {
      this.player.setAttribute("playsinline", "");
      this.player.setAttribute("webkit-playsinline", "");
      this.player.setAttribute("x5-playsinline", "");
    }
    if (this.props.autoPlay) {
      this.api.getApi().play();
    }
    this.forceUpdate();
    this.props.onInitPlayer && this.props.onInitPlayer(this.getPlayerApiContext());
  }

  /**
   * 历史视频专用
   * 计算视频播放时默认的index，默认去第一个有播放地址的，若有传defaultTime那计算index,当前index没有值，则取默认有file的第一个
   */
  checkFirstFile = () => {
    const { defaultTime, historyList } = this.props;
    if (!historyList) {
      return;
    }
    if (!defaultTime) {
      this.playIndex = historyList.fragments.findIndex(v => !!v.file);
    } else {
      this.playIndex = this.computedIndexFormTime(defaultTime);
      if (this.playIndex === -1 || !historyList.fragments[this.playIndex].file) {
        this.playIndex = historyList.fragments.findIndex(v => !!v.file);
      }
    }
  };
  initPlayer = (index, isFrist) => {
    const { historyList } = this.props;
    if (!historyList || !historyList.fragments[index] || !historyList.fragments[index].file) {
      return null;
    }
    if (this.flv) {
      try {
        this.flv.unload();
        this.flv.destroy();
      } catch (e) {
        console.warn(e);
      }
      this.flv = null;
    }
    if (this.hls) {
      try {
        this.hls.stopLoad();
        this.hls.destroy();
      } catch (e) {
        console.warn(e);
      }
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
    if (!isFrist) {
      this.playIndex = index;
      this.forceUpdate();
    }
  };
  /**
   * 历史视频专用
   * 修改历史视频播放的索引。
   */
  changePlayIndex = index => {
    const { historyList } = this.props;
    if (!historyList || !historyList.fragments[index]) {
      !historyList.fragments[index] && this.event.emit(EventName.HISTORY_PLAY_END);
      return;
    }
    if (!historyList.fragments[index].file) {
      this.changePlayIndex(index + 1);
    } else {
      this.initPlayer(index);
    }
    this.event.emit(EventName.CHANGE_PLAY_INDEX, index);
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
    const playIndex = this.computedIndexFormTime(currentTime);
    const fragment = historyList.fragments[playIndex];
    const seekTime = currentTime - fragment.begin - 1;
    this.api.pause();
    if (playIndex !== this.playIndex) {
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
  };
  /**
   * 覆盖Player中的context的value，新增一些历史视频专用的方法
   */
  getProvider = () => {
    return {
      video: this.player,
      event: this.event,
      playerType: this.playerType,
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
}

export default HistoryPlayer;

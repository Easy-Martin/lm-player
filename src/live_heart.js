import React from "react";
import { videoDec } from "./context";
import EventName from "./event/eventName";

@videoDec
class LiveHeart extends React.Component {
  constructor(props) {
    super(props);
    this.progressTime = Date.now();
    this.timer = null;
    this.isPlayError = false;
    this.errorTimer = 0;
    this.isCanPlay = false
  }
  componentDidMount() {
    const { event } = this.props;
    event.addEventListener("progress", this.updateProgress);
    event.addEventListener("canplay", this.canplay);
    event.on(EventName.ERROR, this.errorHandle);
    event.on(EventName.RELOAD_SUCCESS, this.clearHandle);
    this.heartAction();
  }

  componentWillUnmount() {
    const {event} = this.props
    event.removeEventListener("progress", this.updateProgress);
    event.removeEventListener("canplay", this.canplay);
    event.off(EventName.ERROR, this.errorHandle);
    event.off(EventName.RELOAD_SUCCESS, this.clearHandle);
    clearInterval(this.timer);
  }

  canplay = () => {
    this.isCanPlay = true
  }
  errorHandle = () => {
    this.isPlayError = true;
  };
  clearHandle = () => {
    this.isPlayError = false;
  };
  /**
   * 监听视频进度
   */
  updateProgress = () => {
    this.progressTime = Date.now();
    this.focusSeekAction();
  };

  /**
   * 心跳监听是否视频断流了
   */
  heartAction = () => {
    const { api, event } = this.props;
    this.timer = setInterval(() => {
      const timeNow = Date.now();
      const currentTime = api.getCurrentTime();
      if (this.isPlayError || !this.isCanPlay) {
        return;
      }
      if (currentTime > 0) {
        if (timeNow - this.progressTime > 10 * 1000) {
          console.warn("当前实时视频缓存未更新，执行reload操作");
          api.reload();
        } else {
          this.errorTimer = 0;
        }
      } else {
        if (this.errorTimer >= 5) {
          event.emit(EventName.RELOAD_FAIL, this.errorTimer);
          api.unload();
        } else {
          this.errorTimer++;
          api.reload();
          event.emit(EventName.ERROR_RELOAD, this.errorTimer);
        }
      }
    }, 1000 * 5);
  };
  /**
   * 更新currentTime
   */
  focusSeekAction = () => {
    const { api } = this.props;
    const current = api.getCurrentTime();
    const buffered = api.getSecondsLoaded();
    if (buffered - current > 5) {
      console.warn(`当前延时过大current->${current} buffered->${buffered}, 基于视频当前缓存时间更新当前播放时间 updateTime -> ${buffered - 2}`);
      api.seekTo(buffered - 2 > 0 ? buffered - 2 : 0);
    }
  };
  render() {
    return null;
  }
}
export default LiveHeart;

import React from "react";
import { videoDec } from "./context";

@videoDec
class LiveHeart extends React.Component {
  constructor(props) {
    super(props);
    this.progressTime = Date.now();
    this.timer = null;
    this.isPlayError = false
  }
  componentDidMount() {
    const {event} = this.props
    event.addEventListener("progress", this.updateProgress);
    event.on('error',this.errorHandle)
    event.on('reloadSuccess',this.clearHandle)
    this.heartAction();
  }

  componentWillUnmount() {
    this.props.event.removeEventListener("progress", this.updateProgress);
    event.off('error',this.errorHandle)
    event.off('reloadSuccess',this.clearHandle)
    clearInterval(this.timer);
  }

  errorHandle = () => {
    this.isPlayError = true
  }
  clearHandle = () => {
    this.isPlayError = false
  }
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
    this.timer = setInterval(() => {
      const timeNow = Date.now()
      if (timeNow - this.progressTime > 10 * 1000 && !this.isPlayError ) {
        console.warn("当前实时视频缓存未更新，执行reload操作");
        this.props.api.reload();
      }
    }, 1000 * 10);
  };
  /**
   * 更新currentTime
   */
  focusSeekAction = () => {
    const { api } = this.props;
    const current = api.getCurrentTime();
    const buffered = api.getSecondsLoaded();
    if (buffered - current > 5) {
      console.warn(
        `当前延时过大current->${current} buffered->${buffered}, 基于视频当前缓存时间更新当前播放时间 updateTime -> ${buffered -
          2}`
      );
      api.seekTo(buffered - 2 > 0 ? buffered - 2 : 0);
    }
  };
  render() {
    return null;
  }
}
export default LiveHeart;

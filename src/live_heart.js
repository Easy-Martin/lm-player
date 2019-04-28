import React from "react";
import { videoDec } from "./context";

@videoDec
class LiveHeart extends React.Component {
  constructor(props) {
    super(props);
    this.progressTime = Date.now();
    this.timer = null;
  }
  componentDidMount() {
    this.props.event.addEventListener("progress", this.updateProgress);
    this.heartAction();
  }

  componentWillUnmount() {
    this.props.event.removeEventListener("progress", this.updateProgress);
    clearInterval(this.timer);
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
      if (Date.now() - this.progressTime > 10 * 1000) {
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

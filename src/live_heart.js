import React from "react";
import { videoDec } from "./context";
import EventName from "./event/eventName";
import BrowserTab from "./event/browserTabEvent";

@videoDec
class LiveHeart extends React.Component {
  constructor(props) {
    super(props);
    this.timer = null;
    this.isCanPlay = false;
  }
  componentDidMount() {
    const { event } = this.props;
    BrowserTab.addEventListener(this.browserTabChange);
    event.addEventListener("canplay", this.canplay);
  }

  componentWillUnmount() {
    const { event } = this.props;
    BrowserTab.removeEventListener(this.browserTabChange);
  }

  browserTabChange = () => {
    if (BrowserTab.visibilityState() === "visible") {
      this.focusSeekAction();
    }
  };

  canplay = () => {
    const { api } = this.props;
    this.isCanPlay = true;
    api.play();
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

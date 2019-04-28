import React from "react";
import flvjs from "flv.js";
import Hls from "hls.js";
import { videoDec } from "../context";

@videoDec
class ErrorEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorTimer: 0
    };
  }
  componentDidMount() {
    const { event, flvPlayer, hlsPlayer } = this.props;
    if (flvPlayer) {
      flvPlayer.on(flvjs.Events.ERROR, this.errorHandle);
    }
    if (hlsPlayer) {
      hlsPlayer.on(Hls.Events.ERROR, this.errorHandle);
    }
    event.addEventListener("error", this.errorHandle, false);
    event.addEventListener("canplay", this.clearError, false);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.flvPlayer && nextProps.flvPlayer !== this.props.flvPlayer) {
      nextProps.flvPlayer.on(flvjs.Events.ERROR, this.errorHandle);
    }
    if (nextProps.hlsPlayer && nextProps.hlsPlayer !== this.props.hlsPlayer) {
      nextProps.hlsPlayer.on(Hls.Events.ERROR, this.errorHandle);
    }
  }
  componentWillUnmount() {
    event.removeEventListener("error", this.errorHandle, false);
    flvPlayer.off(flvjs.Events.ERROR, this.errorHandle);
    hlsPlayer.off(Hls.Events.ERROR, this.errorHandle);
  }
  /**
   * 清除播放错误状态
   */
  clearError = () => {
    const { event } = this.props;
    const { errorTimer } = this.state;
    if (errorTimer > 0) {
      event.emit("reloadSuccess");
      this.setState({ errorTimer: 0 });
    }
  };

  /**
   * 捕获错误
   */
  errorHandle = (...args) => {
    const { errorTimer } = this.state;
    const { event, api } = this.props;
    const timer = errorTimer + 1;
    event.emit("error", ...args);
    if (timer > 5) {
      event.emit("reloadFail");
    } else {
      event.emit("errorReload", timer, ...args);
      console.error(`视频播放出错，正在进行重连${timer}`, ...args);
      this.setState({ errorTimer: timer }, () => api.reload());
    }
  };
  render() {
    return null;
  }
}
export default ErrorEvent;

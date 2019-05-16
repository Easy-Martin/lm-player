import React from "react";
import flvjs from "flv.js";
import Hls from "hls.js";
import { videoDec } from "../context";
import EventName from "./eventName";

@videoDec
class ErrorEvent extends React.Component {
  constructor(props) {
    super(props);
    this.errorTimer = 0;
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
    event.on(EventName.RELOAD, this.reload);
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
    const { event, flvPlayer, hlsPlayer } = this.props;
    event.removeEventListener("error", this.errorHandle, false);
    flvPlayer && flvPlayer.off(flvjs.Events.ERROR, this.errorHandle);
    hlsPlayer && hlsPlayer.off(Hls.Events.ERROR, this.errorHandle);
    event.off(EventName.RELOAD, this.reload);
    clearTimeout(this.reconnectTimer);
  }

  reload = () => {
    this.errorTimer = 0;
  };
  /**
   * 清除播放错误状态
   */
  clearError = () => {
    const { event } = this.props;
    if (this.errorTimer > 0) {
      console.warn("视频重连成功！");
      event.emit(EventName.RELOAD_SUCCESS);
      this.errorTimer = 0;
    }
  };

  /**
   * 捕获错误
   */
  errorHandle = (...args) => {
    const { event, api, isHistory, changePlayIndex, playIndex } = this.props;
    const timer = this.errorTimer + 1;
    event.emit(EventName.ERROR, ...args);
    if (timer > 5) {
      isHistory ? changePlayIndex(playIndex + 1) : event.emit(EventName.RELOAD_FAIL), api.unload();
    } else {
      event.emit(EventName.ERROR_RELOAD, timer, ...args);
      console.error(`视频播放出错，正在进行重连${timer}`, ...args);
      this.errorTimer = timer;
      this.reconnectTimer = setTimeout(() => {
        api.reload();
      }, 1000 * 5);
    }
  };
  render() {
    return null;
  }
}
export default ErrorEvent;

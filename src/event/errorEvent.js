import React from "react";
import flvjs from "../libs/flv.ly.min.js";
import * as Hls from "../libs/hls.min.js";
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
      //捕获flv错误
      flvPlayer.on(flvjs.Events.ERROR, this.errorHandle);
    }
    if (hlsPlayer) {
      //捕获hls错误
      hlsPlayer.on(Hls.Events.ERROR, this.errorHandle);
    }
    //捕获video错误
    event.addEventListener("error", this.errorHandle, false);

    //获取video状态清除错误状态
    event.addEventListener("canplay", this.clearError, false);

    //历史视频切换播放索引时清除错误次数
    event.on(EventName.CHANGE_PLAY_INDEX, this.clearErrorTimer)

    //历史视频主动清除错误次数
    event.on(EventName.CLEAR_ERROR_TIMER, this.clearErrorTimer);
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
    event.off(EventName.CLEAR_ERROR_TIMER, this.clearErrorTimer);
    event.off(EventName.CHANGE_PLAY_INDEX, this.clearErrorTimer)
    clearTimeout(this.reconnectTimer);
  }

  clearErrorTimer = () => {
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
      this.clearErrorTimer();
    }
  };

  /**
   * 捕获错误
   */
  errorHandle = (...args) => {
    const { event, api, isHistory, changePlayIndex, playIndex, playerProps } = this.props;
    const timer = this.errorTimer + 1;
    event.emit(EventName.ERROR, ...args);
    if (timer > playerProps.errorReloadTimer) {
      isHistory ? changePlayIndex(playIndex + 1) : event.emit(EventName.RELOAD_FAIL), api.unload();
    } else {
      console.log(111111111111)
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

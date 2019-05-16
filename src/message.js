import React from "react";
import IconFont from "./iconfont";
import { videoDec } from "./context";
import EventName from "./event/eventName";

import "./style/message.less";

@videoDec
class VideoMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      status: null
    };
    this.message = null;
  }
  componentDidMount() {
    const { event } = this.props;
    event.addEventListener("loadstart", this.openLoading);
    event.addEventListener("waiting", this.openLoading);
    event.addEventListener("seeking", this.openLoading);
    event.addEventListener("loadeddata", this.closeLoading);
    event.addEventListener("canplay", this.closeLoading);
    event.on(EventName.ERROR_RELOAD, this.errorReload);
    event.on(EventName.RELOAD_FAIL, this.reloadFail);
    event.on(EventName.RELOAD_SUCCESS, this.reloadSuccess);
    event.on(EventName.RELOAD, this.reload);
    event.on(EventName.HISTORY_PLAY_END, this.historyPlayEnd);
  }
  componentWillUnmount() {
    const { event } = this.props;
    event.removeEventListener("loadstart", this.openLoading);
    event.removeEventListener("waiting", this.openLoading);
    event.removeEventListener("seeking", this.openLoading);
    event.removeEventListener("loadeddata", this.closeLoading);
    event.removeEventListener("canplay", this.closeLoading);
    event.off(EventName.ERROR_RELOAD, this.errorReload);
    event.off(EventName.RELOAD_FAIL, this.reloadFail);
    event.off(EventName.RELOAD_SUCCESS, this.reloadSuccess);
    event.off(EventName.RELOAD, this.reload);
    event.off(EventName.HISTORY_PLAY_END, this.historyPlayEnd);
  }
  reload = () => {
    this.message = null
    this.setState({ status: "reload" });
  };
  errorReload = timer => {
    this.message = <div>视频加载错误，正在进行重连第{timer}重连</div>;
    this.setState({ status: "reload", loading: true });
  };
  reloadFail = () => {
    this.message = <div>视频错误</div>;
    this.setState({ status: "fail" });
  };
  reloadSuccess = () => {
    this.message = null;
    this.setState({ status: null });
  };
  openLoading = () => {
    this.setState({ loading: true });
  };
  closeLoading = () => {
    this.setState({ loading: false });
  };
  historyPlayEnd = () => {
    this.message = null;
    this.setState({ status: null, loading: false });
    this.props.api.pause();
  };
  render() {
    const { loading, status } = this.state;
    return (
      <div className={`lm-player-message-mask ${loading || status === "fail" ? "lm-player-mask-loading-animation" : ""}`}>
        <IconFont
          type={status === "fail" ? "lm-player-YesorNo_No_Dark" : "lm-player-Loading"}
          className={`${loading && status !== "fail" ? "lm-player-loading-animation" : status === "fail" ? "lm-player-loadfail" : ""} lm-player-loading-icon`}
        />
        <span className="lm-player-message">{this.message}</span>
      </div>
    );
  }
}

export default VideoMessage;

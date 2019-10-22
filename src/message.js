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
    this.mounted = false;
    this.message = null;
  }
  componentDidMount() {
    const { event } = this.props;
    this.mounted = true;
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
    event.on(EventName.CLEAR_ERROR_TIMER, this.clearReloadMessage);
  }
  clearReloadMessage = () => {
    this.message = null;
    this.mounted && this.forceUpdate();
  };
  reload = () => {
    this.setState({ status: "reload" });
  };
  errorReload = timer => {
    this.message = <div>视频加载错误，正在进行重连第{timer}重连</div>;
    this.mounted && this.setState({ status: "reload", loading: true });
  };
  reloadFail = () => {
    this.message = <div>视频错误</div>;
    this.mounted && this.setState({ status: "fail" });
  };
  reloadSuccess = () => {
    this.message = null;
    this.mounted && this.setState({ status: null });
  };
  openLoading = () => {
    this.mounted && this.setState({ loading: true });
  };
  closeLoading = () => {
    this.mounted && this.setState({ loading: false });
  };
  historyPlayEnd = () => {
    this.message = null;
    this.mounted && this.setState({ status: null, loading: false });
    this.props.api.pause();
  };
  render() {
    const { loading, status } = this.state;

    return (
      <div className={`lm-player-message-mask ${loading || status === "fail" ? "lm-player-mask-loading-animation" : ""}`}>
        <IconFont
          type={status === "fail" ? "lm-player-YesorNo_No_Dark" : "lm-player-Loading"}
          className={`${
            loading && status !== "fail" ? "lm-player-loading-animation" : status === "fail" ? "lm-player-loadfail" : ""
          } lm-player-loading-icon`}
        />
        <span className="lm-player-message">{this.message}</span>
      </div>
    );
  }
}

export const NoSource = () => {
  return (
    <div className="lm-player-message-mask lm-player-mask-loading-animation">
      <IconFont style={{ fontSize: 80 }} type="lm-player-PlaySource" title="请选择视频源"></IconFont>
    </div>
  );
};

export default VideoMessage;

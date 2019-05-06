import React from "react";
import IconFont from "./iconfont";
import { videoDec } from "./context";

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
    event.on("errorReload", this.errorReload);
    event.on("reloadFail", this.reloadFail);
    event.on("reloadSuccess", this.reloadSuccess);
    event.on("reload", this.reload);
  }
  componentWillUnmount() {
    const { event } = this.props;
    event.removeEventListener("loadstart", this.openLoading);
    event.removeEventListener("waiting", this.openLoading);
    event.removeEventListener("seeking", this.openLoading);
    event.removeEventListener("loadeddata", this.closeLoading);
    event.removeEventListener("canplay", this.closeLoading);
    event.off("errorReload", this.errorReload);
    event.off("reloadFail", this.reloadFail);
    event.off("reloadSuccess", this.reloadSuccess);
    event.off("reload", this.reload);
  }
  reload = () => {
    this.setState({ status: "reload" });
  };
  errorReload = timer => {
    this.message = <div>视频加载错误,正在进行重连第{timer}重连</div>;
    this.setState({ status: "reload" });
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
  render() {
    const { loading, status } = this.state;
    return (
      <div className={`lm-player-message-mask ${loading ? "lm-player-mask-loading-animation" : ""}`}>
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

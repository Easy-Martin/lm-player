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
  }
  componentWillUnmount() {
    const { event } = this.props;
    event.removeEventListener("loadstart", this.openLoading);
    event.removeEventListener("waiting", this.openLoading);
    event.removeEventListener("seeking", this.openLoading);
    event.removeEventListener("loadeddata", this.closeLoading);
    event.removeEventListener("canplay", this.closeLoading);
  }
  errorReload = (timer) => {
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
    const { loading } = this.state;
    return (
      <div className={`lm-player-message-mask ${loading ? "lm-player-mask-loading-animation" : ""}`}>
        <IconFont
          type="lm-player-Loading"
          className={`${loading ? "lm-player-loading-animation" : ""} lm-player-loading-icon`}
        />
        <span className="lm-player-message">{this.message}</span>
      </div>
    );
  }
}

export default VideoMessage;

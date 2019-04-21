import React from "react";
import IconFont from "./iconfont";
import { videoDec } from "./context";

import "./style/loading.less";

@videoDec
class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }
  componentDidMount() {
    const { event } = this.props;
    event.on("loadstart", this.openLoading);
    event.on("waiting", this.openLoading);
    event.on("seeking", this.openLoading);
    event.on("loadeddata", this.closeLoading);
    event.on("canplay", this.closeLoading);
  }
  openLoading = () => {
    this.setState({ loading: true });
  };
  closeLoading = () => {
    this.setState({ loading: false });
  };
  render() {
    const { loading } = this.state;
    return (
      <div className={`loading-mask ${loading ? "mask-loading-animation" : ""}`}>
        <IconFont type="lm-player-Loading" className={`${loading ? "video-loading-animation" : ""} video-loading-icon`} />
      </div>
    );
  }
}

export default Loading;

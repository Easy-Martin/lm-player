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
    event.addEventListener("loadstart", this.openLoading);
    event.addEventListener("waiting", this.openLoading);
    event.addEventListener("seeking", this.openLoading);
    event.addEventListener("loadeddata", this.closeLoading);
    event.addEventListener("canplay", this.closeLoading);
  }
  componentWillUnmount(){
    const { event } = this.props;
    event.removeEventListener("loadstart", this.openLoading);
    event.removeEventListener("waiting", this.openLoading);
    event.removeEventListener("seeking", this.openLoading);
    event.removeEventListener("loadeddata", this.closeLoading);
    event.removeEventListener("canplay", this.closeLoading);
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

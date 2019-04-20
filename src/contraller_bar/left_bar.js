import React from "react";
import IconFont from "../iconfont";
import { videoDec } from "../context";

@videoDec
class LeftBar extends React.Component {
  constructor(props) {
    super(props);
  }
  changePlayStatus = () => {
    const { video } = this.props;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
    this.forceUpdate();
  };
  render() {
    const { video } = this.props;
    return (
      <div className="contraller-left-bar">
        <span className="contraller-bar-item" onClick={this.changePlayStatus}>
          <IconFont type={video.paused ? "lm-player-Play_Main" : "lm-player-Pause_Main"} />
        </span>
      </div>
    );
  }
}

export default LeftBar;

import React from "react";
import IconFont from "../iconfont";
import { videoDec } from "../context";

@videoDec
class LeftBar extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.event.on("play", this.updateRender);
    this.props.event.on("pause", this.updateRender);
  }
  componentWillUnmount() {
    this.props.event.off("play", this.updateRender);
    this.props.event.off("pause", this.updateRender);
  }
  updateRender = () => {
    this.forceUpdate();
  };
  changePlayStatus = () => {
    const { api, video } = this.props;
    if (video.paused) {
      api.play();
    } else {
      api.pause();
    }
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

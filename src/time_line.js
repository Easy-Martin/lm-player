import React from "react";
import { videoDec } from "./context";
import IconFont from './iconfont'
import Slider from './slider'
import { timeStamp } from './util'
import "./style/time-line.less";

@videoDec
class TineLine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      duration: 0,
      currentTime: 0,
      buffered: 0
    };
  }
  componentDidMount() {
    const { event } = this.props;
    event.on("loadedmetadata", this.getDuration);
    event.on("durationchange", this.getDuration);
    event.on("timeupdate", this.getCurrentTime);
    event.on("progress", this.getBuffered);
    event.on("suspend", this.getBuffered)
    event.on("seeked", this.seekendPlay);
  }
  componentWillUnmount() {
    const { event } = this.props;
    event.off("loadedmetadata", this.getDuration);
    event.off("durationchange", this.getDuration);
    event.off("timeupdate", this.getCurrentTime);
    event.off("progress", this.getBuffered);
    event.off("suspend", this.getBuffered)
    event.off("seeked", this.seekendPlay);
  }
  getDuration = () => {
    const { api } = this.props;
    this.setState({
      duration: api.getDuration()
    });
  };
  getCurrentTime = () => {
    const { api } = this.props;
    const state = {
      currentTime: api.getCurrentTime(),
      buffered: api.getSecondsLoaded()
    }
    if (state.buffered === this.state.buffered) {
      delete state.buffered
    }
    this.setState(state);
  };
  getBuffered = () => {
    const { api } = this.props;
    this.setState({
      buffered: api.getSecondsLoaded()
    });
  };
  changePlayTime = percent => {
    const { video, api } = this.props;
    const currentTime = percent * this.state.duration
    if (!video.paused) {
      api.pause();
    }
    this.setState({ currentTime });
    api.seekTo(currentTime);
  };
  seekendPlay = () => {
    const { video, api } = this.props;
    if (video.paused) {
      api.play();
    }
  };
  renderTimeLineTips = (percent) => {
    const currentTime = percent * this.state.duration
    const time = timeStamp(currentTime)
    return <span>{time}</span>
  }
  render() {
    const { duration, currentTime, buffered } = this.state;
    const playPercent = Math.round((currentTime / duration) * 100);
    const bufferedPercent = Math.round((buffered / duration) * 100);
    return (
      <div className="video-time-line-layout">
        <IconFont className="time-line-action-item" />
        <Slider
          className="time-line-box"
          currentPercent={playPercent}
          availablePercent={bufferedPercent}
          onChange={this.changePlayTime}
          renderTimeLineTips={this.renderTimeLineTips} />
        <IconFont className="time-line-action-item" />
      </div>
    );
  }
}

export default TineLine;

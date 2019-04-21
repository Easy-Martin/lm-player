import React from "react";
import { videoDec } from "./context";
import "./style/time-line.less";

@videoDec
class TineLine extends React.Component {
  constructor(props) {
    super(props);
    this.timeLineDomRef = React.createRef();
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
    event.on("seeked", this.seekendPlay);
    this.timeLineDomRef.current.addEventListener("click", this.changePlayTime, false);
  }
  componentWillUnmount() {
    const { event } = this.props;
    event.off("loadedmetadata", this.getDuration);
    event.off("durationchange", this.getDuration);
    event.off("timeupdate", this.getCurrentTime);
    event.off("progress", this.getBuffered);
    event.off("seeked", this.seekendPlay);
    this.timeLineDomRef.current.removeEventListener("click", this.changePlayTime, false);
  }
  getDuration = () => {
    const { api } = this.props;
    this.setState({
      duration: api.getDuration()
    });
  };
  getCurrentTime = () => {
    const { api } = this.props;
    this.setState({
      currentTime: api.getCurrentTime()
    });
  };
  getBuffered = () => {
    const { api } = this.props;
    this.setState({
      buffered: api.getSecondsLoaded()
    });
  };
  changePlayTime = event => {
    const { video, api } = this.props;
    if (!video.paused) {
      api.pause();
    }
    const { width } = this.timeLineDomRef.current.getBoundingClientRect();
    let currentTime = (event.layerX / width) * this.state.duration;
		this.setState({ currentTime });
    api.seekTo(currentTime);
  };
  seekendPlay = () => {
    const { video, api } = this.props;
    if (video.paused) {
      api.play();
    }
  };
  render() {
    const { duration, currentTime, buffered } = this.state;
    const playPercent = Math.round((currentTime / duration) * 100);
    const bufferedPercent = Math.round((buffered / duration) * 100);
    return (
      <div className="video-time-line-layout" ref={this.timeLineDomRef}>
        <div className="time-line-box" />
        <div className="time-buffer-box" style={{ width: `${bufferedPercent}%` }} />
        <div className="play-time-line-box" style={{ width: `${playPercent}%` }} />
      </div>
    );
  }
}

export default TineLine;

import React from "react";
import { videoDec } from "../context";
import IconFont from '../iconfont'
import Slider from '../slider'
import { dateFormat } from '../util'
import "../style/time-line.less";

@videoDec
class TineLine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      duration: 1,
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
    const { video, api, historyList } = this.props;
    const currentTime = percent * historyList.duration;
    const playIndex = historyList.fragments.findIndex(v => v.end > currentTime)
    const fragment = historyList.fragments[playIndex]
    const seekTime = currentTime - fragment.begin - 1
    if (!video.paused) {
      api.pause();
    }
    if (fragment.file) {
      this.setState({ currentTime });
    }
    this.props.initPlayer(playIndex, false, seekTime)
    api.seekTo(seekTime);
  };
  seekendPlay = () => {
    const { video, api } = this.props;
    if (video.paused) {
      api.play();
    }
  };
  renderTimeLineTips = (percent) => {
    const { historyList } = this.props
    const currentTime = percent * historyList.duration * 1000
    const date = dateFormat(new Date(historyList.beginDate).getTime() + currentTime)
    return <span>{date}</span>
  }
  fastForward = () => {
    const { api } = this.props;
    api.fastForward()
  }
  backWind = () => {
    const { api } = this.props;
    api.backWind()
  }
  computedLineList = (historyList) => {
    const duration = historyList.duration
    return historyList.fragments.map(v => {
      return {
        disabled: !v.file,
        size: (v.end - v.begin) / duration * 100
      }
    })

  }
  render() {
    const { historyList, playIndex } = this.props
    const { currentTime, buffered } = this.state;
    const lineList = this.computedLineList(historyList)
    const currentLine = lineList.filter((v, i) => i < playIndex).map(v => v.size)
    const currentIndexTime = currentLine.length === 0 ? 0 : currentLine.length > 1 ? currentLine.reduce((p, c) => p + c) : currentLine[0]
    const playPercent = Math.round((currentTime / historyList.duration) * 100 + currentIndexTime);
    const bufferedPercent = Math.round((buffered / historyList.duration) * 100 + currentIndexTime);
    return (
      <div className="video-time-line-layout">
        <IconFont type="lm-player-PrevFast" onClick={this.backWind} className="time-line-action-item" />
        <Slider
          className="time-line-box"
          currentPercent={playPercent}
          availablePercent={bufferedPercent}
          onChange={this.changePlayTime}
          renderTimeLineTips={this.renderTimeLineTips}>
          <>
            {lineList.map((v, i) => {
              const currentSizeLine = lineList.filter((v, i2) => i2 < i).map(v => v.size)
              const currentIndexSize = currentSizeLine.length === 0 ? 0 : currentSizeLine.length > 1 ? currentSizeLine.reduce((p, c) => p + c) : currentSizeLine[0]
              return <div className={`history-time-line-item ${v.disabled ? 'history-time-line-disabled' : ''}`} key={i} style={{ width: `${v.size}%`, left: `${currentIndexSize}%` }}></div>
            })}
          </>
        </Slider>
        <IconFont type="lm-player-NextFast_Light" onClick={this.fastForward} className="time-line-action-item" />
      </div>
    );
  }
}

export default TineLine;

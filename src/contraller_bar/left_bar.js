import React from "react";
import IconFont from "../iconfont";
import { videoDec } from "../context";
import Slider from '../slider'

@videoDec
class LeftBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openSliderVolume: false
    }
  }
  componentDidMount() {
    this.props.event.on("play", this.updateRender);
    this.props.event.on("pause", this.updateRender);
    this.props.event.on("volumechange", this.volumechange);

  }
  componentWillUnmount() {
    this.props.event.off("play", this.updateRender);
    this.props.event.off("pause", this.updateRender);
    this.props.event.off("volumechange", this.volumechange);
  }
  updateRender = () => {
    this.forceUpdate();
  };
  changePlayStatus = () => {
    const { api, video } = this.props;
    video.paused ? api.play() : api.pause()
  };
  mutedChange = () => {
    const { api, video } = this.props;
    video.muted ? api.unmute() : api.mute();
  }
  volumechange = () => {
    this.forceUpdate();
  }
  openSliderVolume = () => {
    this.setState({
      openSliderVolume: true
    })
  }
  closeSliderVolume = () => {
    this.setState({
      openSliderVolume: false
    })
  }
  onChangeVolume = (volume) => {
    const { api, video } = this.props;
    api.setVolume(volume)
    if (volume > 0 && video.muted) {
      api.unmute()
    }

  }
  render() {
    const { openSliderVolume } = this.state
    const { video } = this.props;
    const volumeType = video.volume === 1 ? 'lm-player-volume-max' : 'lm-player-volume-normal-fuben'
    return (
      <div className="contraller-left-bar">
        <span className="contraller-bar-item">
          <IconFont onClick={this.changePlayStatus} type={video.paused ? "lm-player-Play_Main" : "lm-player-Pause_Main"} />
        </span>
        <span
          className={`contraller-bar-item contraller-bar-volume ${openSliderVolume ? 'contraller-bar-hover-volume' : ''}`}

          onMouseOver={this.openSliderVolume}
          onMouseOut={this.closeSliderVolume}>
          <IconFont onClick={this.mutedChange} type={video.muted ? "lm-player-volume-close" : volumeType} />
          <div className="volume-slider-layout">
            <Slider className="volume-slider" currentPercent={video.muted ? 0 : video.volume * 100} onChange={this.onChangeVolume} />
          </div>
        </span>
        <span className="contraller-bar-item" onClick={this.changePlayStatus}>
          <IconFont type={video.paused ? "lm-player-Play_Main" : "lm-player-Pause_Main"} />
        </span>
      </div>
    );
  }
}

export default LeftBar;

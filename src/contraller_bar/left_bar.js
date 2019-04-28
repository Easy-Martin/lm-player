import React from "react";
import IconFont from "../iconfont";
import { videoDec } from "../context";
import Slider from '../slider'
import Bar from './bar'

@videoDec
class LeftBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openSliderVolume: false
    }
  }
  componentDidMount() {
    this.props.event.addEventListener("play", this.updateRender);
    this.props.event.addEventListener("pause", this.updateRender);
    this.props.event.addEventListener("volumechange", this.volumechange);

  }
  componentWillUnmount() {
    this.props.event.removeEventListener("play", this.updateRender);
    this.props.event.removeEventListener("pause", this.updateRender);
    this.props.event.removeEventListener("volumechange", this.volumechange);
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
    api.setVolume(parseFloat(volume.toFixed(1)))
    if (volume > 0 && video.muted) {
      api.unmute()
    }

  }
  reload = () => {
    this.props.api.reload()
  }
  render() {
    const { openSliderVolume } = this.state
    const { video, playerProps } = this.props;
    const volumeType = video.volume === 1 ? 'lm-player-volume-max' : 'lm-player-volume-normal-fuben'
    return (
      <div className="contraller-left-bar">
        <Bar visibel={!playerProps.isLive}>
          <IconFont onClick={this.changePlayStatus} type={video.paused ? "lm-player-Play_Main" : "lm-player-Pause_Main"} title={video.paused ? "播放" : "暂停"} />
        </Bar>
        <Bar
          className={`contraller-bar-volume ${openSliderVolume ? 'contraller-bar-hover-volume' : ''}`}
          onMouseOver={this.openSliderVolume}
          onMouseOut={this.closeSliderVolume}>
          <IconFont onClick={this.mutedChange} type={video.muted ? "lm-player-volume-close" : volumeType} title="音量" />
          <div className="volume-slider-layout">
            <Slider className="volume-slider" 
              currentPercent={video.muted ? 0 : video.volume * 100} 
              onChange={this.onChangeVolume} 
              renderTips={(precent) => <span>{Math.round(precent * 100)}%</span>}/>
          </div>
        </Bar>
        <Bar><IconFont onClick={this.reload} type="lm-player-Refresh_Main" title="重载" /></Bar>
      </div>
    );
  }
}



export default LeftBar;

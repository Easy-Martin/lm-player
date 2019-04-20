import React from "react";
import VideoEvent from "./event";
import { getVideoType } from "./util";
import { createFlvPlayer } from "./flv";
import { createHlsPlayer } from "./hls";
import { Provider } from "./context";
import ContrallerBar from "./contraller_bar";
import "./style/index.less";

class LMPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.event = null;
    this.videoDomRef = React.createRef();
  }
  get video() {
    return this.videoDomRef.current;
  }
  componentDidMount() {
    this.event = new VideoEvent(this.video);
    this.initPlayer();
    if (this.video.paused && this.props.autoPlay) {
      this.video.play();
    }
    this.forceUpdate();
  }
  initPlayer() {
    const type = getVideoType(this.props.url);
    if (type === "flv" || this.props.type === "flv") {
      this.player = createFlvPlayer(this.video, this.props);
    }
    if (type === "m3u8" || this.props.type === "hls") {
      this.player = createHlsPlayer(this.video, this.props);
    }
    if (!type || type === "mp4" || this.props.type === "native") {
      this.video.src = this.props.url;
    }
    this.props.playCallback && this.props.playCallback(this.video);
  }

  render() {
    const { autoPlay } = this.props;
    const providerValue = {
      video: this.video,
      event: this.event
    };
    return (
      <div className="lm-player-container">
        <video ref={this.videoDomRef} autoPlay={autoPlay} muted />
        <Provider value={providerValue}>{this.video && <ContrallerBar />}</Provider>
        {this.props.children}
      </div>
    );
  }
}

export default LMPlayer;

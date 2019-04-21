import React from "react";
import VideoEvent from "./event";
import { getVideoType, createFlvPlayer, createHlsPlayer } from "./util";
import { Provider } from "./context";
import ContrallerBar from "./contraller_bar";
import Loading from "./loading";
import TimeLine from "./time_line";
import ErrorEvent from "./event/errorEvent";
import Api from "./api";
import "./style/index.less";

class LMPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.event = null;
    this.flv = null;
    this.hls = null;
    this.playerType = null;
    this.videoDomRef = React.createRef();
  }
  componentDidMount() {
    this.initPlayer();
    this.event = new VideoEvent(this.videoDomRef.current);
    this.api = new Api(this.videoDomRef.current, this.flv, this.hls);
    if (this.props.playsinline) {
      this.player.setAttribute("playsinline", "");
      this.player.setAttribute("webkit-playsinline", "");
      this.player.setAttribute("x5-playsinline", "");
    }
    if (this.props.autoPlay) {
      this.api.play();
    }
    this.forceUpdate();
  }
  initPlayer = () => {
    if (!this.props.url) {
      return null;
    }
    const type = getVideoType(this.props.url);
    if (type === "flv" || this.props.type === "flv") {
      this.flv = createFlvPlayer(this.videoDomRef.current, this.props);
    } else if (type === "m3u8" || this.props.type === "hls") {
      this.hls = createHlsPlayer(this.videoDomRef.current, this.props);
    } else {
      this.videoDomRef.current.src = this.props.url;
    }
    this.props.playCallback && this.props.playCallback(this.api);
  };

  renderVideoTools = () => {
    if (!this.videoDomRef.current) {
      return null;
    }
    return (
      <>
        <ContrallerBar />
        <Loading />
        <TimeLine />
        <ErrorEvent />
      </>
    );
  };
  render() {
    const { autoPlay } = this.props;
    const providerValue = {
      video: this.videoDomRef.current,
      event: this.event,
      playerType: this.playerType,
      playerProps: this.props,
      api: this.api
    };
    return (
      <div className="lm-player-container">
        <div className="player-mask-layout">
          <video ref={this.videoDomRef} autoPlay={autoPlay} muted />
        </div>
        <Provider value={providerValue}>{this.renderVideoTools()}</Provider>
        {this.props.children}
      </div>
    );
  }
}

export default LMPlayer;

import React from "react";
import ReactDOM from 'react-dom'
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
    this.player = null
    this.event = null;
    this.flv = null;
    this.hls = null;
    this.playerType = null;
    this.videoDomRef = React.createRef();
  }
  componentDidMount() {
    this.player = ReactDOM.findDOMNode(this.videoDomRef.current)
    this.event = new VideoEvent(this.player);
    this.api = new Api(this.player, this.flv, this.hls);
    this.initPlayer();
    if (this.props.playsinline) {
      this.player.setAttribute("playsinline", "");
      this.player.setAttribute("webkit-playsinline", "");
      this.player.setAttribute("x5-playsinline", "");
    }
    if (this.props.autoPlay) {
      this.api.getApi().play();
    }
    this.forceUpdate();
  }
  componentWillUnmount(){
    this.event.destroy()
    this.api.destroy()

    this.videoDomRef = null;
    this.player = null
    this.event = null;
    this.flv = null;
    this.hls = null;
    this.playerType = null;
  }
  initPlayer = () => {
    if (!this.props.url) {
      return null;
    }

    const type = getVideoType(this.props.url);
    if (type === "flv" || this.props.type === "flv") {
      this.flv = createFlvPlayer(this.player, this.props);
    } else if (type === "m3u8" || this.props.type === "hls") {
      this.hls = createHlsPlayer(this.player, this.props);
    } else {
      this.player.src = this.props.url;
    }
    this.props.onInitPlayer && this.props.onInitPlayer(this.getPlayerContext());
  };

  renderVideoTools = () => {
    if (!this.player) {
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
  getPlayerContext = () => {
    const api = this.api ? this.api.getApi() : {};
    const event = this.event ? {
      on: this.event.on.bind(this.event),
      off: this.event.off.bind(this.event),
      emit: this.event.emit.bind(this.event)
    } : {}
    return Object.assign({}, api, event)
  }
  render() {
    const { autoPlay } = this.props;
    const providerValue = {
      video: this.videoDomRef.current,
      event: this.event,
      playerType: this.playerType,
      playerProps: this.props,
      api: this.getPlayerContext()
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

import React from "react";
import ReactDOM from 'react-dom'
import VideoEvent from "./event";
import { getVideoType, createFlvPlayer, createHlsPlayer } from "./util";
import { Provider } from "./context";
import ContrallerBar from "./contraller_bar";
import Loading from "./loading";
import TimeLine from "./time_line";
import ErrorEvent from "./event/errorEvent";
import DragEvent from './event/dragEvent'
import Api from "./api";
import "./style/index.less";

class LMPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.videoKey = Math.random()
    this.player = null
    this.event = null;
    this.flv = null;
    this.hls = null;
    this.playerType = null;
    this.playContainerRef = React.createRef()
    this.playContainer = null
  }
  componentDidMount() {
    this.playContainer = ReactDOM.findDOMNode(this.playContainerRef.current)
    this.player = this.playContainer.querySelector('video')
    this.initPlayer();
    this.event = new VideoEvent(this.player);
    this.api = new Api(this.player, this.playContainer, this.event, this.flv, this.hls);
    if (this.props.playsinline) {
      this.player.setAttribute("playsinline", "");
      this.player.setAttribute("webkit-playsinline", "");
      this.player.setAttribute("x5-playsinline", "");
    }
    if (this.props.autoPlay) {
      this.api.getApi().play();
    }
    this.forceUpdate();
    this.props.onInitPlayer && this.props.onInitPlayer(this.getPlayerApiContext());
  }
  componentWillUnmount() {
    this.event.destroy()
    this.api.destroy()
    this.player = null
    this.event = null;
    this.flv = null;
    this.hls = null;
    this.playerType = null;
  }

  initPlayer = () => {
    if (!this.props.file) {
      return null;
    }
    const type = getVideoType(this.props.file);
    if (type === "flv" || this.props.type === "flv") {
      this.flv = createFlvPlayer(this.player, this.props);
    } else if (type === "m3u8" || this.props.type === "hls") {
      this.hls = createHlsPlayer(this.player, this.props.file);
    } else {
      this.player.src = this.props.file;
    }

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
        <DragEvent />
      </>
    );
  };
  getPlayerApiContext = () => {
    const api = this.api ? this.api.getApi() : {};
    const event = this.event ? {
      on: this.event.on.bind(this.event),
      off: this.event.off.bind(this.event),
      emit: this.event.emit.bind(this.event)
    } : {}
    return Object.assign({}, api, event)
  }
  getProvider = () => {
    return {
      video: this.player,
      event: this.event,
      playerType: this.playerType,
      playerProps: this.props,
      api: this.api,
      playContainer: this.playContainer
    }
  }
  render() {
    const { autoPlay, poster } = this.props;
    const providerValue = this.getProvider();
    return (
      <div className="lm-player-container" ref={this.playContainerRef}>
        <div className="player-mask-layout">
          <video autoPlay={autoPlay} muted poster={poster} key={this.videoKey}/>
        </div>
        <Provider value={providerValue}>{this.renderVideoTools()}</Provider>
        {this.props.children}
      </div>
    );
  }
}

export default LMPlayer;

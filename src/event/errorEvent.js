import React from "react";
import flvjs from 'flv.js'
import Hls from 'hls.js'
import { videoDec } from "../context";

@videoDec
class ErrorEvent extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    const { event, flvPlayer, hlsPlayer } = this.props;
    if (flvPlayer) {
      flvPlayer.on(flvjs.Events.ERROR, this.errorHandle)
    }
    if (hlsPlayer) {
      hlsPlayer.on(Hls.Events.ERROR, this.errorHandle)
    }
    event.addEventListener("error", this.errorHandle, false);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.flvPlayer && nextProps.flvPlayer !== this.props.flvPlayer) {
      nextProps.flvPlayer.on(flvjs.Events.ERROR, this.errorHandle)
    }
    if (nextProps.hlsPlayer && nextProps.hlsPlayer !== this.props.hlsPlayer) {
      nextProps.hlsPlayer.on(Hls.Events.ERROR, this.errorHandle)
    }
  }
  componentWillUnmount() {
    event.removeEventListener("error", this.errorHandle, false);
    flvPlayer.off(flvjs.Events.ERROR, this.errorHandle)
    hlsPlayer.off(Hls.Events.ERROR, this.errorHandle)
  }
  errorHandle = (...args) => {
    const { event } = this.props;
    event.emit('error', ...args)
    console.error(...args);
  };
  render() {
    return null;
  }
}
export default ErrorEvent;

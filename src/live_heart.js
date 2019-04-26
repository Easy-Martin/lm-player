import React from "react";
import { videoDec } from "./context";

@videoDec
class LiveHeart extends React.Component {
  constructor(props) {
    super(props)
    this.progressTime = Date.now()
    this.timer = null
  }
  componentDidMount() {
    window.addEventListener('focus', this.focusSeekAction, false)
    this.props.event.addEventListener('progress', this.updateProgress)
    this.heartAction()
  }

  componentWillUnmount() {
    window.removeEventListener('focus', this.focusSeekAction, false)
    this.props.event.removeEventListener('progress', this.updateProgress)
    clearInterval(this.timer)
  }
  updateProgress = () => {
    this.progressTime = Date.now()
  }
  heartAction = () => {
    this.timer = setInterval(() => {
      if (Date.now() - this.progressTime > 10 * 1000) {
        this.props.api.reload()
      }
    }, 1000 * 10)
  }

  focusSeekAction = () => {
    const { api } = this.props;
    if (api.getSecondsLoaded() - api.getCurrentTime() > 2) {
      api.seekTo(api.getSecondsLoaded() - 2)
    }
  }
  render() {
    return null;
  }
}
export default LiveHeart;

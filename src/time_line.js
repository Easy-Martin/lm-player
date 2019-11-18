import React from 'react'
import { videoDec } from './context'
import IconFont from './iconfont'
import Slider from './slider'
import { timeStamp } from './util'
import EventName from './event/eventName'
import PropTypes from 'prop-types'
import './style/time-line.less'

@videoDec
class TineLine extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      duration: 0,
      currentTime: 0,
      buffered: 0,
      hideBar: false
    }
  }
  componentDidMount() {
    const { event } = this.props
    event.addEventListener('loadedmetadata', this.getDuration)
    event.addEventListener('durationchange', this.getDuration)
    event.addEventListener('timeupdate', this.getCurrentTime)
    event.addEventListener('progress', this.getBuffered)
    event.addEventListener('suspend', this.getBuffered)
    event.addEventListener('seeked', this.seekendPlay)
    event.on(EventName.HIDE_CONTRALLER, this.hideContraller)
    event.on(EventName.SHOW_CONTRALLER, this.showContraller)
  }

  hideContraller = () => {
    this.setState({ hideBar: true })
  }
  showContraller = () => {
    this.setState({ hideBar: false })
  }
  getDuration = () => {
    const { api } = this.props
    this.setState({
      duration: api.getDuration()
    })
  }
  getCurrentTime = () => {
    const { api } = this.props
    const state = {
      currentTime: api.getCurrentTime(),
      buffered: api.getSecondsLoaded()
    }
    if (state.buffered === this.state.buffered) {
      delete state.buffered
    }
    this.setState(state)
  }
  getBuffered = () => {
    const { api } = this.props
    this.setState({
      buffered: api.getSecondsLoaded()
    })
  }
  changePlayTime = percent => {
    const { api } = this.props
    const currentTime = percent * this.state.duration
    api.pause()
    this.setState({ currentTime })
    api.seekTo(currentTime)
  }
  seekendPlay = () => {
    const { api } = this.props
    api.play()
  }
  renderTimeLineTips = percent => {
    const currentTime = percent * this.state.duration
    const time = timeStamp(currentTime)
    return <span>{time}</span>
  }
  fastForward = () => {
    const { api } = this.props
    api.fastForward()
  }
  backWind = () => {
    const { api } = this.props
    api.backWind()
  }
  render() {
    const { duration, currentTime, buffered, hideBar } = this.state
    const playPercent = Math.round((currentTime / duration) * 100)
    const bufferedPercent = Math.round((buffered / duration) * 100)
    return (
      <div className={`video-time-line-layout ${hideBar ? 'hide-time-line' : ''}`}>
        <IconFont type="lm-player-PrevFast" onClick={this.backWind} className="time-line-action-item" />
        <Slider
          className="time-line-box"
          currentPercent={playPercent}
          availablePercent={bufferedPercent}
          onChange={this.changePlayTime}
          renderTips={this.renderTimeLineTips}
        />
        <IconFont type="lm-player-NextFast_Light" onClick={this.fastForward} className="time-line-action-item" />
      </div>
    )
  }
}

TineLine.propTypes = {
  event: PropTypes.object,
  api: PropTypes.object,
  changePlayIndex: PropTypes.func,
  playIndex: PropTypes.number,
  historyList: PropTypes.array,
  seekTo: PropTypes.func,
  video: PropTypes.element
}

export default TineLine

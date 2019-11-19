import React from 'react'
import { videoDec } from '../context'
import IconFont from '../iconfont'
import Slider from '../slider'
import { dateFormat } from '../util'
import EventName from '../event/eventName'
import PropTypes from 'prop-types'
import '../style/time-line.less'

@videoDec
class TineLine extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      duration: 1,
      currentTime: 0,
      buffered: 0,
      isEnd: false
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
    event.on(EventName.HISTORY_PLAY_END, this.historyPlayEnd)
    event.on(EventName.RELOAD, this.reload)
  }
  componentWillUnmount() {
    const { event } = this.props
    event.removeEventListener('loadedmetadata', this.getDuration)
    event.removeEventListener('durationchange', this.getDuration)
    event.removeEventListener('timeupdate', this.getCurrentTime)
    event.removeEventListener('progress', this.getBuffered)
    event.removeEventListener('suspend', this.getBuffered)
    event.removeEventListener('seeked', this.seekendPlay)
    event.off(EventName.HISTORY_PLAY_END, this.historyPlayEnd)
    event.off(EventName.RELOAD, this.reload)
    event.off(EventName.HIDE_CONTRALLER, this.hideContraller)
    event.off(EventName.SHOW_CONTRALLER, this.showContraller)
  }

  /**
   * reload事件触发时 清除结束状态
   */
  reload = () => {
    const { api } = this.props
    this.setState({
      isEnd: false,
      currentTime: api.getCurrentTime()
    })
  }

  /**
   * 设置播放结束状态，用于修正current圆点位置
   */
  historyPlayEnd = () => {
    this.setState({
      isEnd: true
    })
  }

  /**
   * 更新播放时长
   */
  getDuration = () => {
    const { api } = this.props
    this.setState({
      duration: api.getDuration()
    })
  }

  /**
   * 获取播放时间
   */
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

  /**
   * 获取缓存时间
   */
  getBuffered = () => {
    const { api } = this.props
    this.setState({
      buffered: api.getSecondsLoaded()
    })
  }

  /**
   * 切换播放进度
   */
  changePlayTime = percent => {
    const { seekTo, historyList } = this.props
    const numSize = historyList.duration.toString().length
    const currentTime = (percent + numSize / Math.pow(10, numSize - 1)) * historyList.duration //修正一下误差
    const playIndex = historyList.fragments.findIndex(v => v.end > currentTime)
    const fragment = historyList.fragments[playIndex]
    if (fragment.file) {
      seekTo(currentTime)
      this.setState({ currentTime, isEnd: false })
    }
  }

  /**
   * 切换完成自动播放
   */
  seekendPlay = () => {
    const { api } = this.props
    api.play()
  }

  /**
   * 时间轴提示
   */
  renderTimeLineTips = percent => {
    const { historyList } = this.props
    const currentTime = percent * historyList.duration * 1000
    const date = dateFormat(historyList.beginDate + currentTime)
    return <span>{date}</span>
  }
  fastForward = () => {
    const { api } = this.props
    api.fastForward()
  }
  backWind = () => {
    const { api } = this.props
    api.backWind()
  }
  computedLineList = historyList => {
    const duration = historyList.duration
    return historyList.fragments.map(v => {
      return {
        disabled: !v.file,
        size: ((v.end - v.begin) / duration) * 100
      }
    })
  }
  render() {
    const { historyList, playIndex, visibel } = this.props
    const { currentTime, buffered, isEnd } = this.state
    const lineList = this.computedLineList(historyList)
    const currentLine = lineList.filter((v, i) => i < playIndex).map(v => v.size)
    const currentIndexTime = currentLine.length === 0 ? 0 : currentLine.length > 1 ? currentLine.reduce((p, c) => p + c) : currentLine[0]
    const playPercent = (currentTime / historyList.duration) * 100 + currentIndexTime
    const bufferedPercent = (buffered / historyList.duration) * 100 + currentIndexTime
    return (
      <div className={`video-time-line-layout ${!visibel ? 'hide-time-line' : ''}`}>
        <IconFont type="lm-player-PrevFast" onClick={this.backWind} className="time-line-action-item" />
        <Slider
          className="time-line-box"
          currentPercent={isEnd ? '100' : playPercent}
          availablePercent={bufferedPercent}
          onChange={this.changePlayTime}
          renderTips={this.renderTimeLineTips}
        >
          <>
            {lineList.map((v, i) => {
              const currentSizeLine = lineList.filter((v, i2) => i2 < i).map(v => v.size)
              const currentIndexSize =
                currentSizeLine.length === 0 ? 0 : currentSizeLine.length > 1 ? currentSizeLine.reduce((p, c) => p + c) : currentSizeLine[0]
              return (
                <div
                  className={`history-time-line-item ${v.disabled ? 'history-time-line-disabled' : ''}`}
                  key={i}
                  style={{ width: `${v.size}%`, left: `${currentIndexSize}%` }}
                />
              )
            })}
          </>
        </Slider>
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
  visibel: PropTypes.bool
}

export default TineLine

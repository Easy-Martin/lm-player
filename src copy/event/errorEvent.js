import React from 'react'
import { videoDec } from '../context'
import EventName from './eventName'
import flvjs from 'flv.lm.js'
import * as Hls from 'hls.js'
import PropTypes from 'prop-types'

@videoDec
class ErrorEvent extends React.Component {
  constructor(props) {
    super(props)
    this.errorTimer = 0
  }
  componentDidMount() {
    const { event, flvPlayer, hlsPlayer } = this.props
    if (flvPlayer) {
      //捕获flv错误
      flvPlayer.on(flvjs.Events.ERROR, this.errorHandle)
    }
    if (hlsPlayer) {
      //捕获hls错误
      hlsPlayer.on(Hls.Events.ERROR, this.errorHandle)
    }
    //捕获video错误
    event.addEventListener('error', this.errorHandle, false)

    //获取video状态清除错误状态
    event.addEventListener('canplay', this.clearError, false)

    //历史视频切换播放索引时清除错误次数
    event.on(EventName.CHANGE_PLAY_INDEX, this.clearErrorTimer)

    //历史视频主动清除错误次数
    event.on(EventName.CLEAR_ERROR_TIMER, this.clearErrorTimer)
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.flvPlayer && nextProps.flvPlayer !== this.props.flvPlayer) {
      nextProps.flvPlayer.on(flvjs.Events.ERROR, this.errorHandle)
    }
    if (nextProps.hlsPlayer && nextProps.hlsPlayer !== this.props.hlsPlayer) {
      nextProps.hlsPlayer.on(Hls.Events.ERROR, this.errorHandle)
    }
  }
  componentWillUnmount() {
    clearTimeout(this.reconnectTimer)
  }

  clearErrorTimer = () => {
    this.errorTimer = 0
    clearTimeout(this.reconnectTimer)
  }
  /**
   * 清除播放错误状态
   */
  clearError = () => {
    const { event } = this.props
    if (this.errorTimer > 0) {
      console.warn('视频重连成功！')
      event.emit(EventName.RELOAD_SUCCESS)
      this.clearErrorTimer()
    }
  }

  /**
   * 捕获错误
   */
  errorHandle = (...args) => {
    console.error(...args)
    clearTimeout(this.reconnectTimer)
    const { event, api, isHistory, changePlayIndex, playIndex, playerProps } = this.props
    const timer = this.errorTimer + 1
    event.emit(EventName.ERROR, ...args)
    if (timer > playerProps.errorReloadTimer) {
      isHistory ? changePlayIndex(playIndex + 1) : event.emit(EventName.RELOAD_FAIL), api.unload()
    } else {
      this.errorTimer = timer
      if ((args[1] && args[1].loader) || (args[0].indexOf && args[0].indexOf('NetworkError') > -1)) {
        this.reloadAction(timer, args)
      }
      this.reconnectTimer = setTimeout(() => {
        this.reloadAction(timer, args)
      }, 1000 * 20)
    }
  }

  reloadAction = (timer, args) => {
    const { event, api, hlsPlayer } = this.props
    event.emit(EventName.ERROR_RELOAD, timer, ...args)
    console.warn(`视频播放出错，正在进行重连${timer}`)
    if (hlsPlayer) {
      hlsPlayer.swapAudioCodec()
      hlsPlayer.recoverMediaError()
    }
    api.reload()
  }
  render() {
    return null
  }
}

ErrorEvent.propTypes = {
  api: PropTypes.object,
  event: PropTypes.object,
  playContainer: PropTypes.node,
  playerProps: PropTypes.object,
  hlsPlayer: PropTypes.object,
  flvPlayer: PropTypes.object,
  isHistory: PropTypes.bool,
  changePlayIndex: PropTypes.func,
  playIndex: PropTypes.number
}
export default ErrorEvent

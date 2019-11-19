import React from 'react'
import VideoEvent from './event'
import { getVideoType, createFlvPlayer, createHlsPlayer } from './util'
import { Provider } from './context'
import ContrallerBar from './contraller_bar'
import ContrallerEvent from './event/contrallerEvent'
import VideoMessage, { NoSource } from './message'
import TimeLine from './time_line'
import ErrorEvent from './event/errorEvent'
import DragEvent from './event/dragEvent'
import Api from './api'
import LiveHeart from './live_heart'
import PropTypes from 'prop-types'
import './style/index.less'

class LMPlayer extends React.Component {
  constructor(props) {
    super(props)
    this.player = null
    this.event = null
    this.flv = null
    this.hls = null
    this.api = null
    this.playContainerRef = React.createRef()
    this.playContainer = null
    this.state = {
      playChange: false,
      file: null
    }
  }
  static getDerivedStateFromProps(props, state) {
    if (props.file !== state.file) {
      return {
        file: props.file,
        playChange: true
      }
    }
    return null
  }
  componentDidMount() {
    this.playContainer = this.playContainerRef.current
    this.player = this.playContainer.querySelector('video')
    this.createPlayer()
    this.isInit = true
  }

  componentDidUpdate() {
    if (this.state.playChange) {
      this.setState({ playChange: false })
      this.createPlayer()
    }
  }
  componentWillUnmount() {
    this.event && this.event.destroy()
    this.api && this.api.destroy()
    this.player = null
    this.event = null
    this.api = null
    this.playContainerRef = null
    this.playContainer = null
    this.flv = null
    this.hls = null
  }

  createPlayer() {
    const isInit = this.initPlayer()
    if (isInit) {
      this.event = new VideoEvent(this.player)
      this.api = new Api(this.player, this.playContainer, this.event, this.flv, this.hls)
      this.props.onInitPlayer && this.props.onInitPlayer(this.getPlayerApiContext())
      if (this.props.autoPlay && this.props.file) {
        this.api.play()
      }
      this.forceUpdate()
    }
  }

  initPlayer = () => {
    if (!this.props.file) {
      return false
    }
    const type = getVideoType(this.props.file)
    if (type === 'flv' || this.props.type === 'flv') {
      this.flv = createFlvPlayer(this.player, this.props)
    } else if (type === 'm3u8' || this.props.type === 'hls') {
      this.hls = createHlsPlayer(this.player, this.props.file)
    } else {
      this.player.src = this.props.file
    }
    return true
  }

  renderVideoTools = () => {
    if (!this.isInit || !this.props.file) {
      return <NoSource />
    }
    return (
      <>
        <ContrallerBar />
        <VideoMessage />
        <DragEvent />
        <ContrallerEvent>
          <ContrallerBar />
          {!this.props.isLive && <TimeLine />}
        </ContrallerEvent>
        <ErrorEvent flvPlayer={this.flv} hlsPlayer={this.hls} key={`${this.props.file}_error`} />
        {this.props.isLive && <LiveHeart key={this.props.file} />}
      </>
    )
  }
  getPlayUrl = () => {
    return this.props.file
  }
  getPlayerApiContext = () => {
    const api = this.api ? this.api.getApi() : {}
    const event = this.event
      ? {
          on: this.event.on.bind(this.event),
          off: this.event.off.bind(this.event),
          emit: this.event.emit.bind(this.event)
        }
      : {}
    return Object.assign({}, api, event, { getPlayUrl: this.getPlayUrl, playContainer: this.playContainer })
  }
  getProvider = () => {
    return {
      video: this.player,
      event: this.event,
      playerProps: this.props,
      api: this.api,
      playContainer: this.playContainer
    }
  }
  render() {
    const { autoplay, poster, preload = 'none', muted = 'muted', className = '', loop = false, playsinline = false, file } = this.props
    const providerValue = this.getProvider()
    return (
      <div className={`lm-player-container ${className}`} ref={this.playContainerRef}>
        <div className="player-mask-layout">
          <video
            autoPlay={autoplay && !!file}
            preload={preload}
            muted={muted}
            poster={poster}
            controls={false}
            playsInline={playsinline}
            loop={loop}
          />
        </div>
        <Provider value={providerValue}>{this.renderVideoTools()}</Provider>
        {this.props.children}
      </div>
    )
  }
}

LMPlayer.propTypes = {
  file: PropTypes.string.isRequired, //播放地址 必填
  isLive: PropTypes.bool, //是否实时视频
  errorReloadTimer: PropTypes.number, //视频错误重连次数
  type: PropTypes.oneOf(['flv', 'hls', 'native']), //强制视频流类型
  onInitPlayer: PropTypes.func,
  isDraggable: PropTypes.bool,
  isScale: PropTypes.bool,
  muted: PropTypes.string,
  autoPlay: PropTypes.bool,
  playsInline: PropTypes.bool,
  preload: PropTypes.string,
  poster: PropTypes.string,
  loop: PropTypes.bool,
  snapshot: PropTypes.func,
  className: PropTypes.string,
  playsinline: PropTypes.bool,
  children: PropTypes.any,
  autoplay: PropTypes.bool
}
LMPlayer.defaultProps = {
  isLive: true,
  isDraggable: true,
  isScale: true,
  errorReloadTimer: 5,
  muted: 'muted',
  autoPlay: true,
  playsInline: false,
  preload: 'auto',
  loop: false
}

export default LMPlayer

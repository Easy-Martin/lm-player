import React, { useRef, useEffect } from 'react'
import VideoEvent from './event'
import { getVideoType, createFlvPlayer, createHlsPlayer } from './util'
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

function SinglePlayer({ type, file, className, autoPlay, muted, poster, playsinline, loop, preload, onInitPlayer, ...props }) {
  const playContainerRef = useRef(null)
  const [playerObj, setPlayerObj] = useRef({})
  useEffect(() => {
    if (!file) {
      return
    }
    const playerObject = {
      playContainer: playContainerRef.current,
      video: playContainerRef.current.querySelector('video')
    }
    const formartType = getVideoType(file)
    if (formartType === 'flv' || type === 'flv') {
      playerObject.flv = createFlvPlayer(playerObject.video, props)
      return
    }
    if (formartType === 'm3u8' || type === 'hls') {
      playerObject.hls = createHlsPlayer(playerObject.video, file)
      return
    }
    playerObject.video.src = file

    playerObj.event = new VideoEvent(playerObject.video)
    playerObj.api = new Api(playerObject)

    setPlayerObj(playerObj)

    onInitPlayer && onInitPlayer(playerObj)
  }, [file])

  return (
    <div className={`lm-player-container ${className}`} ref={playContainerRef}>
      <div className="player-mask-layout">
        <video autoPlay={autoPlay} preload={preload} muted={muted} poster={poster} controls={false} playsInline={playsinline} loop={loop} />
      </div>
      <VideoTools playerObj={playerObj} isLive={props.isLive} hideContrallerBar={props.hideContrallerBar} />
      {this.props.children}
    </div>
  )
}

function VideoTools({ playerObj, isLive, hideContrallerBar }) {
  if (!playerObj) {
    return <NoSource />
  }
  return (
    <>
      <ContrallerBar visibel={!hideContrallerBar} api={playerObj.api} event={playerObj.event} />
      <VideoMessage />
      <DragEvent />
      <ContrallerEvent>
        <ContrallerBar />
        {!isLive && <TimeLine />}
      </ContrallerEvent>
      <ErrorEvent flvPlayer={this.flv} hlsPlayer={this.hls} />
      {isLive && <LiveHeart key={this.props.file} />}
    </>
  )
}

SinglePlayer.propTypes = {
  file: PropTypes.string.isRequired, //播放地址 必填
  isLive: PropTypes.bool, //是否实时视频
  errorReloadTimer: PropTypes.number, //视频错误重连次数
  type: PropTypes.oneOf(['flv', 'hls', 'native']), //强制视频流类型
  onInitPlayer: PropTypes.func,
  draggable: PropTypes.bool,
  hideContrallerBar: PropTypes.bool,
  scale: PropTypes.bool,
  muted: PropTypes.string,
  autoPlay: PropTypes.bool,
  playsInline: PropTypes.bool,
  preload: PropTypes.string,
  poster: PropTypes.string,
  loop: PropTypes.bool,
  snapshot: PropTypes.func,
  className: PropTypes.string,
  playsinline: PropTypes.bool,
  children: PropTypes.any
}
SinglePlayer.defaultProps = {
  isLive: true,
  draggable: true,
  scale: true,
  errorReloadTimer: 5,
  muted: 'muted',
  autoPlay: true,
  playsInline: false,
  preload: 'auto',
  loop: false,
  hideContrallerBar: false
}

export default SinglePlayer

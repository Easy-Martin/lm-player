import React, { useRef, useState, useCallback, useEffect, useMemo } from 'react'
import PropTypes from 'prop-types'
import ContrallerBar from '../contraller_bar'
import VideoMessage, { NoSource } from '../message'
import HistoryTimeLine from './time_line_history'
import ErrorEvent from '../event/errorEvent'
import DragEvent from '../event/dragEvent'
import Api from '../api'
import VideoEvent from '../event'
import PlayEnd from './play_end'
import EventName from '../event/eventName'
import ContrallerEvent from '../event/contrallerEvent'
import { getVideoType, createFlvPlayer, createHlsPlayer } from '../util'

const computedIndexFormTime = (historyList, time) => {
  let index = 0
  try {
    index = historyList.fragments.findIndex(v => v.end > time)
  } catch (e) {
    console.error('historyList data error', historyList)
  }
  return index
}
const computedTimeAndIndex = (historyList, currentTime) => {
  const index = computedIndexFormTime(historyList, currentTime)
  let seekTime = 0
  try {
    const fragment = historyList.fragments[index]
    if (!fragment) {
      return [0, 0]
    }
    seekTime = currentTime - fragment.begin - 1
  } catch (e) {
    console.error('historyList data error', historyList)
  }
  return [index, seekTime]
}

function HistoryPlayer({ type, historyList, defaultTime, className, autoPlay, muted, poster, playsinline, loop, preload, children, onInitPlayer, ...props }) {
  const playContainerRef = useRef(null)
  const [playerObj, setPlayerObj] = useState(null)
  const [playStatus, setPlayStatus] = useState(() => computedTimeAndIndex(historyList, defaultTime))
  const playIndex = useMemo(() => playStatus[0], [playStatus])
  const defaultSeekTime = useMemo(() => playStatus[1], [playStatus])
  const file = useMemo(() => {
    let url
    try {
      url = historyList.fragments[playIndex].file
    } catch (e) {
      console.warn('未找打播放地址！', historyList)
    }
    return url
  }, [historyList, playIndex])

  /**
   * 重写api下的seekTo方法
   */
  const seekTo = useCallback(
    currentTime => {
      const [index, seekTime] = computedTimeAndIndex(historyList, currentTime)
      if (playerObj.event && playerObj.api) {
        //判断是否需要更新索引
        setPlayStatus(old => {
          if (old[0] !== index) {
            return [index, seekTime]
          } else {
            playerObj.api.seekTo(seekTime, true)
            playerObj.event.emit(EventName.SEEK, currentTime)
            return old
          }
        })
      }
    },
    [playIndex, playerObj, playerObj, historyList]
  )

  const changePlayIndex = useCallback(
    index => {
      if (index > historyList.fragments.length - 1) {
        return playerObj.event && playerObj.event.emit(EventName.HISTORY_PLAY_END)
      }
      if (playerObj.event) {
        playerObj.event.emit(EventName.CHANGE_PLAY_INDEX, index)
      }
      setPlayStatus([index, 0])
    },
    [playerObj]
  )

  const reloadHistory = useCallback(() => {
    setPlayStatus([0, 0])
    playerObj.event.emit(EventName.RELOAD)
  }, [playerObj])

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
      playerObject.flv = createFlvPlayer(playerObject.video, { ...props, file })
    }
    if (formartType === 'm3u8' || type === 'hls') {
      playerObject.hls = createHlsPlayer(playerObject.video, file)
    }
    if (!['flv', 'm3u8'].includes(formartType) || type === 'native') {
      playerObject.video.src = file
    }
    playerObject.event = new VideoEvent(playerObject.video)
    playerObject.api = new Api(playerObject)
    setPlayerObj(playerObject)
    if (defaultSeekTime) {
      playerObject.api.seekTo(defaultSeekTime)
    }
    if (onInitPlayer) {
      onInitPlayer(Object.assign({}, playerObject.api.getApi(), playerObject.event.getApi(), { seekTo, changePlayIndex, reload: reloadHistory }))
    }
    return () => {
      if (playerObject.api) {
        playerObject.api.unload()
      }
    }
  }, [historyList, file])

  /**
   * 根据时间计算当前对应的播放索引
   */

  return (
    <div className={`lm-player-container ${className}`} ref={playContainerRef}>
      <div className="player-mask-layout">
        <video autoPlay={autoPlay} preload={preload} muted={muted} poster={poster} controls={false} playsInline={playsinline} loop={loop} />
      </div>
      <VideoTools
        playerObj={playerObj}
        isLive={props.isLive}
        hideContrallerBar={props.hideContrallerBar}
        errorReloadTimer={props.errorReloadTimer}
        scale={props.scale}
        snapshot={props.snapshot}
        leftExtContents={props.leftExtContents}
        leftMidExtContents={props.leftMidExtContents}
        rightExtContents={props.rightExtContents}
        rightMidExtContents={props.rightMidExtContents}
        draggable={props.draggable}
        changePlayIndex={changePlayIndex}
        reloadHistory={reloadHistory}
        historyList={historyList}
        playIndex={playIndex}
        seekTo={seekTo}
      />
      {children}
    </div>
  )
}

function VideoTools({
  playerObj,
  draggable,
  isLive,
  hideContrallerBar,
  scale,
  snapshot,
  leftExtContents,
  leftMidExtContents,
  rightExtContents,
  rightMidExtContents,
  errorReloadTimer,
  changePlayIndex,
  reloadHistory,
  historyList,
  seekTo,
  playIndex
}) {
  if (!playerObj) {
    return <NoSource />
  }
  return (
    <>
      <VideoMessage api={playerObj.api} event={playerObj.event} />
      {draggable && <DragEvent playContainer={playerObj.playContainer} api={playerObj.api} event={playerObj.event} />}
      {!hideContrallerBar && (
        <ContrallerEvent event={playerObj.event} playContainer={playerObj.playContainer}>
          <ContrallerBar
            api={playerObj.api}
            event={playerObj.event}
            playContainer={playerObj.playContainer}
            video={playerObj.video}
            snapshot={snapshot}
            rightExtContents={rightExtContents}
            rightMidExtContents={rightMidExtContents}
            scale={scale}
            isHistory={true}
            isLive={isLive}
            leftExtContents={leftExtContents}
            leftMidExtContents={leftMidExtContents}
            reloadHistory={reloadHistory}
          />
          <HistoryTimeLine changePlayIndex={changePlayIndex} historyList={historyList} playIndex={playIndex} seekTo={seekTo} api={playerObj.api} event={playerObj.event} />
        </ContrallerEvent>
      )}
      <ErrorEvent
        changePlayIndex={changePlayIndex}
        playIndex={playIndex}
        isHistory={true}
        flv={playerObj.flv}
        hls={playerObj.hls}
        api={playerObj.api}
        event={playerObj.event}
        errorReloadTimer={errorReloadTimer}
      />
      <PlayEnd event={playerObj.event} changePlayIndex={changePlayIndex} playIndex={playIndex} />
    </>
  )
}

HistoryPlayer.propTypes = {
  historyList: PropTypes.object.isRequired, //播放地址 必填
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
  defaultTime: PropTypes.number,
  className: PropTypes.string,
  playsinline: PropTypes.bool,
  children: PropTypes.any,
  autoplay: PropTypes.bool,
  rightExtContents: PropTypes.element,
  rightMidExtContents: PropTypes.element,
  leftExtContents: PropTypes.element,
  leftMidExtContents: PropTypes.element,
  flvOptions: PropTypes.object,
  flvConfig: PropTypes.object
}
HistoryPlayer.defaultProps = {
  draggable: true,
  scale: true,
  errorReloadTimer: 5,
  muted: 'muted',
  autoPlay: true,
  playsInline: false,
  preload: 'auto',
  loop: false,
  defaultTime: 0,
  historyList: { beginDate: 0, duration: 0, fragments: [] }
}

export default HistoryPlayer

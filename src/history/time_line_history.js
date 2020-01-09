import React, { useState, useEffect, useMemo, useCallback } from 'react'
import IconFont from '../iconfont'
import Slider from '../slider'
import { dateFormat } from '../util'
import EventName from '../event/eventName'
import PropTypes from 'prop-types'
import '../style/time-line.less'

const computedLineList = historyList => {
  const duration = historyList.duration
  return historyList.fragments.map(v => {
    return {
      disabled: !v.file,
      size: ((v.end - v.begin) / duration) * 100
    }
  })
}

function TineLine({ event, api, visibel, historyList, playIndex, seekTo }) {
  const [state, setState] = useState({ duration: 1, currentTime: 0, buffered: 0, isEnd: false })

  useEffect(() => {
    const getDuration = () => setState(old => ({ ...old, duration: api.getDuration() }))
    const getCurrentTime = () => setState(old => ({ ...old, currentTime: api.getCurrentTime(), buffered: api.getSecondsLoaded() }))
    const getBuffered = () => setState(old => ({ ...old, buffered: api.getSecondsLoaded() }))
    const historyPlayEnd = () => setState(old => ({ ...old, isEnd: true }))
    const reload = () => setState(old => ({ ...old, isEnd: false, currentTime: api.getCurrentTime() }))
    const seekendPlay = () => api.play()

    event.addEventListener('loadedmetadata', getDuration)
    event.addEventListener('durationchange', getDuration)
    event.addEventListener('timeupdate', getCurrentTime)
    event.addEventListener('progress', getBuffered)
    event.addEventListener('suspend', getBuffered)
    event.addEventListener('seeked', seekendPlay)
    event.on(EventName.HISTORY_PLAY_END, historyPlayEnd)
    event.on(EventName.RELOAD, reload)

    return () => {
      event.removeEventListener('loadedmetadata', getDuration)
      event.removeEventListener('durationchange', getDuration)
      event.removeEventListener('timeupdate', getCurrentTime)
      event.removeEventListener('progress', getBuffered)
      event.removeEventListener('suspend', getBuffered)
      event.removeEventListener('seeked', seekendPlay)
      event.off(EventName.HISTORY_PLAY_END, historyPlayEnd)
      event.off(EventName.RELOAD, reload)
    }
  }, [event, api])

  const changePlayTime = useCallback(
    percent => {
      const currentTime = percent * historyList.duration //修正一下误差
      seekTo(currentTime)
      setState(old => ({ ...old, currentTime, isEnd: false }))
    },
    [historyList]
  )

  const renderTimeLineTips = percent => {
    const currentTime = percent * historyList.duration * 1000
    const date = dateFormat(historyList.beginDate + currentTime)
    return <span>{date}</span>
  }

  const { currentTime, buffered, isEnd } = state
  const lineList = useMemo(() => computedLineList(historyList), [historyList])
  const currentLine = useMemo(() => lineList.filter((_, i) => i < playIndex).map(v => v.size), [playIndex, lineList])
  const currentIndexTime = useMemo(() => (currentLine.length === 0 ? 0 : currentLine.length > 1 ? currentLine.reduce((p, c) => p + c) : currentLine[0]), [currentLine])
  const playPercent = useMemo(() => (currentTime / historyList.duration) * 100 + currentIndexTime, [currentIndexTime, historyList, currentTime])
  const bufferedPercent = useMemo(() => (buffered / historyList.duration) * 100 + currentIndexTime, [historyList, currentIndexTime, buffered])
  return (
    <div className={`video-time-line-layout ${!visibel ? 'hide-time-line' : ''}`}>
      <IconFont type="lm-player-PrevFast" onClick={api.backWind} className="time-line-action-item" />
      <Slider className="time-line-box" currentPercent={isEnd ? '100' : playPercent} availablePercent={bufferedPercent} onChange={changePlayTime} renderTips={renderTimeLineTips}>
        <>
          {lineList.map((v, i) => {
            const currentSizeLine = lineList.filter((v, i2) => i2 < i).map(v => v.size)
            const currentIndexSize = currentSizeLine.length === 0 ? 0 : currentSizeLine.length > 1 ? currentSizeLine.reduce((p, c) => p + c) : currentSizeLine[0]
            return (
              <div className={`history-time-line-item ${v.disabled ? 'history-time-line-disabled' : ''}`} key={i} style={{ width: `${v.size}%`, left: `${currentIndexSize}%` }} />
            )
          })}
        </>
      </Slider>
      <IconFont type="lm-player-NextFast_Light" onClick={api.fastForward} className="time-line-action-item" />
    </div>
  )
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

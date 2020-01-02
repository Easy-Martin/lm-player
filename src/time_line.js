import React, { useEffect, useState, useMemo, useCallback } from 'react'
import IconFont from './iconfont'
import Slider from './slider'
import { timeStamp } from './util'
import './style/time-line.less'

function TineLine({ event, api, visibel }) {
  const [state, setState] = useState({ duration: 0, currentTime: 0, buffered: 0 })

  useEffect(() => {
    const getDuration = () => setState(old => ({ ...old, duration: api.getDuration() }))
    const getCurrentTime = () => setState(old => ({ ...old, currentTime: api.getCurrentTime(), buffered: api.getSecondsLoaded() }))
    const getBuffered = () => setState(old => ({ ...old, buffered: api.getSecondsLoaded() }))
    const seekendPlay = () => api.play()

    event.addEventListener('loadedmetadata', getDuration)
    event.addEventListener('durationchange', getDuration)
    event.addEventListener('timeupdate', getCurrentTime)
    event.addEventListener('progress', getBuffered)
    event.addEventListener('suspend', getBuffered)
    event.addEventListener('seeked', seekendPlay)

    return () => {
      event.removeEventListener('loadedmetadata', getDuration)
      event.removeEventListener('durationchange', getDuration)
      event.removeEventListener('timeupdate', getCurrentTime)
      event.removeEventListener('progress', getBuffered)
      event.removeEventListener('suspend', getBuffered)
      event.removeEventListener('seeked', seekendPlay)
    }
  }, [event, api])

  const { duration, currentTime, buffered } = state
  const playPercent = useMemo(() => Math.round((currentTime / duration) * 100), [currentTime, duration])
  const bufferedPercent = useMemo(() => Math.round((buffered / duration) * 100), [buffered, duration])

  const changePlayTime = useCallback(
    percent => {
      const currentTime = percent * duration
      api.pause()
      api.seekTo(currentTime)
      setState(old => ({ ...old, currentTime }))
    },
    [duration, api]
  )

  const renderTimeLineTips = percent => {
    const currentTime = percent * duration
    const time = timeStamp(currentTime)
    return <span>{time}</span>
  }

  return (
    <div className={`video-time-line-layout ${!visibel ? 'hide-time-line' : ''}`}>
      <IconFont type="lm-player-PrevFast" onClick={api.backWind} className="time-line-action-item" />
      <Slider className="time-line-box" currentPercent={playPercent} availablePercent={bufferedPercent} onChange={changePlayTime} renderTips={renderTimeLineTips} />
      <IconFont type="lm-player-NextFast_Light" onClick={api.fastForward} className="time-line-action-item" />
    </div>
  )
}

export default TineLine

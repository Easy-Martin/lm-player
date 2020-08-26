import React, { useState, useEffect, useCallback, useMemo } from 'react'
import IconFont from '../iconfont'
import Slider from '../slider'
import Bar from './bar'
import EventName from '../event/eventName'
import PropTypes from 'prop-types'

function LeftBar({ api, event, video, isHistory, reloadHistory, isLive, leftExtContents, leftMidExtContents }) {
  const [openSliderVolume, setOpenSliderVolume] = useState(false)
  const [dep, setDep] = useState(Date.now())
  useEffect(() => {
    const updateRender = () => {
      setDep(Date.now())
    }
    event.addEventListener('play', updateRender)
    event.addEventListener('pause', updateRender)
    event.addEventListener('volumechange', updateRender)

    return () => {
      event.removeEventListener('play', updateRender)
      event.removeEventListener('pause', updateRender)
      event.removeEventListener('volumechange', updateRender)
    }
  }, [event])

  //缓存值
  const paused = useMemo(() => video.paused, [dep, video])
  const statusIconClassName = useMemo(() => (paused ? 'lm-player-Play_Main' : 'lm-player-Pause_Main'), [paused])
  const statusText = useMemo(() => (paused ? '播放' : '暂停'), [paused])
  const volumeVal = useMemo(() => (video.muted ? 0 : video.volume), [dep, video])
  const volumeIcon = useMemo(() => (volumeVal === 0 ? 'lm-player-volume-close' : video.volume === 1 ? 'lm-player-volume-max' : 'lm-player-volume-normal-fuben'), [volumeVal])
  const volumePercent = useMemo(() => (volumeVal === 0 ? 0 : volumeVal * 100), [volumeVal])
  const sliderClassName = useMemo(() => (openSliderVolume ? 'contraller-bar-hover-volume' : ''), [openSliderVolume])

  //TODO 方法
  const changePlayStatus = useCallback(() => (video.paused ? api.play() : api.pause()), [video, api])

  const mutedChantgeStatus = useCallback(() => (video.muted ? api.unmute() : api.mute()), [api, video])

  const onChangeVolume = useCallback(
    volume => {
      api.setVolume(parseFloat(volume.toFixed(1)))
      volume > 0 && video.muted && api.unmute()
    },
    [api, video]
  )

  const reload = useCallback(() => {
    isHistory ? reloadHistory() : api.reload()
    event.emit(EventName.CLEAR_ERROR_TIMER)
  }, [event, isHistory, api])

  return (
    <div className="contraller-left-bar">
      {leftExtContents}
      <Bar visibel={!isLive}>
        <IconFont onClick={changePlayStatus} type={statusIconClassName} title={statusText} />
      </Bar>
      <Bar className={`contraller-bar-volume ${sliderClassName}`} onMouseOver={() => setOpenSliderVolume(true)} onMouseOut={() => setOpenSliderVolume(false)}>
        <IconFont onClick={mutedChantgeStatus} type={volumeIcon} title="音量" />
        <div className="volume-slider-layout">
          <Slider className="volume-slider" currentPercent={volumePercent} onChange={onChangeVolume} renderTips={precent => <span>{Math.round(precent * 100)}%</span>} tipsY={-2} />
        </div>
      </Bar>
      <Bar>
        <IconFont onClick={reload} type="lm-player-Refresh_Main" title="重载" />
      </Bar>
      {leftMidExtContents}
    </div>
  )
}

LeftBar.propTypes = {
  api: PropTypes.object,
  event: PropTypes.object,
  playerProps: PropTypes.object,
  video: PropTypes.node,
  reloadHistory: PropTypes.func,
  isHistory: PropTypes.bool
}

export default LeftBar

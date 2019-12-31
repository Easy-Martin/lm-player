import React, { useState, useMemo, useEffect, useCallback } from 'react'
import IconFont from '../iconfont'
import Bar from './bar'
import { isFullscreen, fullScreenListener, computedBound } from '../util'
import PropTypes from 'prop-types'

function RightBar({ playContainer, api, scale, snapshot, rightExtContents, rightMidExtContents }) {
  const [dep, setDep] = useState(Date.now())

  useEffect(() => {
    const update = () => setDep(Date.now())
    fullScreenListener(true, update)
    return () => fullScreenListener(false, update)
  }, [])

  const isfull = useMemo(() => isFullscreen(playContainer), [dep, playContainer])

  const fullscreen = useCallback(() => {
    !isFullscreen(playContainer) ? api.requestFullScreen() : api.cancelFullScreen()
    setDep(Date.now())
  }, [api, playContainer])

  const setScale = useCallback(
    (...args) => {
      const dragDom = playContainer.querySelector('.player-mask-layout')
      api.setScale(...args)
      let position = computedBound(dragDom, api.getPosition(), api.getScale())
      position && api.setPosition(position, true)
    },
    [api, playContainer]
  )

  return (
    <div className="contraller-right-bar">
      {rightMidExtContents}
      {scale && (
        <>
          <Bar>
            <IconFont title="缩小" onClick={() => setScale(-0.2)} type={'lm-player-ZoomOut_Main'} />
          </Bar>
          <Bar>
            <IconFont title="复位" onClick={() => setScale(1, true)} type={'lm-player-ZoomDefault_Main'} />
          </Bar>
          <Bar>
            <IconFont title="放大" onClick={() => setScale(0.2)} type={'lm-player-ZoomIn_Main'} />
          </Bar>
        </>
      )}

      {snapshot && (
        <Bar>
          <IconFont title="截图" onClick={() => snapshot(api.snapshot())} type="lm-player-SearchBox" />
        </Bar>
      )}
      <Bar>
        <IconFont title={isfull ? '窗口' : '全屏'} onClick={fullscreen} type={isfull ? 'lm-player-ExitFull_Main' : 'lm-player-Full_Main'} />
      </Bar>
      {rightExtContents}
    </div>
  )
}

RightBar.propTypes = {
  api: PropTypes.object,
  event: PropTypes.object,
  playerProps: PropTypes.object,
  playContainer: PropTypes.node,
  reloadHistory: PropTypes.func,
  isHistory: PropTypes.bool
}
export default RightBar

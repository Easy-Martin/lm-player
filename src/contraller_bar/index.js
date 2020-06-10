import React from 'react'
import LeftBar from './left_bar'
import RightBar from './right_bar'
import PropTypes from 'prop-types'
import ScaleBar from './scale_bar'
import '../style/bar.less'

function ContrallerBar({
  playContainer,
  snapshot,
  rightExtContents,
  rightMidExtContents,
  scale,
  visibel,
  api,
  event,
  video,
  isHistory,
  reloadHistory,
  isLive,
  leftExtContents,
  leftMidExtContents,
}) {
  return (
    <>
      <div className={`contraller-bar-layout ${!visibel ? 'hide-contraller-bar' : ''}`}>
        <LeftBar
          api={api}
          event={event}
          video={video}
          isHistory={isHistory}
          reloadHistory={reloadHistory}
          isLive={isLive}
          leftMidExtContents={leftMidExtContents}
          leftExtContents={leftExtContents}
        />
        <RightBar
          api={api}
          event={event}
          playContainer={playContainer}
          snapshot={snapshot}
          rightExtContents={rightExtContents}
          rightMidExtContents={rightMidExtContents}
        />
      </div>
      <div className={`contraller-scale-layout ${!visibel ? 'hide-contraller-bar' : ''}`}>
        <ScaleBar api={api} playContainer={playContainer} scale={scale} />
      </div>
    </>
  )
}

ContrallerBar.propTypes = {
  visibel: PropTypes.bool,
}

export default ContrallerBar

import { useFullscreen, useLatest } from 'ahooks';
import React, { useContext } from 'react';
import { Context } from '../context';
import IconFont from '../iconfont';
import Bar from './bar';

interface IRightBarProps {
  visibel?: boolean;
  rightExtContents: React.ReactNode;
  rightMidExtContents: React.ReactNode;
}

function RightBar({ rightExtContents, rightMidExtContents }: IRightBarProps) {
  const { container } = useContext(Context);
  const domref = useLatest(container);
  const [isFullScreen, { enterFullscreen, exitFullscreen }] = useFullscreen(domref);
  const fullscreen = isFullScreen ? exitFullscreen : enterFullscreen;
  return (
    <div className="contraller-right-bar">
      {rightMidExtContents}
      <Bar>
        <IconFont title={isFullScreen ? '窗口' : '全屏'} onClick={fullscreen} type={isFullScreen ? 'lm-player-S_View_ScreenViewExit' : 'lm-player-S_View_ScreenViewFull'} />
      </Bar>
      {rightExtContents}
    </div>
  );
}

export default RightBar;

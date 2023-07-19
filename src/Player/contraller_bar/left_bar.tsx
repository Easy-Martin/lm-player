import React, { useCallback, useContext, useMemo, useState } from 'react';
import { Context } from '../context';
import { useVideoEvent } from '../event';
import EventName from '../event/eventName';
import IconFont from '../iconfont';
import Bar from './bar';
import Time from './time';
import Volume from './volume';

interface ILeftBarProps {
  leftExtContents?: React.ReactNode;
  leftMidExtContents?: React.ReactNode;
  reload: () => void;
  hideTimeProgress?: boolean;
  oneFpsPlay?: boolean;
}

function LeftBar({ reload, leftExtContents, leftMidExtContents, hideTimeProgress, oneFpsPlay }: ILeftBarProps) {
  const { api, container, isLive, isFpsPlay, event } = useContext(Context);
  const [dep, setDep] = useState(Date.now());
  const updateRender = () => setDep(Date.now());

  useVideoEvent('play', updateRender);
  useVideoEvent('pause', updateRender);
  useVideoEvent('volumechange', updateRender);

  const video = container?.querySelector('video');
  //缓存值
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const paused = useMemo(() => video?.paused, [dep, video]);
  const statusIconClassName = useMemo(() => (paused ? 'lm-player-Play_Main' : 'lm-player-Pause_Main'), [paused]);
  const statusText = useMemo(() => (paused ? '播放' : '暂停'), [paused]);

  //TODO 方法
  const changePlayStatus = useCallback(() => {
    if (video?.paused) {
      const buffered = api?.getSecondsLoaded() ?? 1;
      api?.seekTo(buffered - 1);
      api?.play();
    } else {
      api?.pause();
    }
  }, [video, api]);

  return (
    <div className="contraller-left-bar">
      {leftExtContents}

      {!isFpsPlay && (
        <Bar>
          <IconFont onClick={changePlayStatus} type={statusIconClassName} title={statusText} />
        </Bar>
      )}
      <Bar>
        <Volume api={api} />
      </Bar>
      {!isLive && !hideTimeProgress && <Time />}
      <Bar>
        <IconFont
          onClick={() => {
            event?.emit(EventName.CLEAR_ERROR_TIMER);
            event?.emit(EventName.RELOAD_SUCCESS);
            reload();
          }}
          type="lm-player-Refresh_Main"
          title="重载"
        />
      </Bar>
      {!isLive && oneFpsPlay && (
        <Bar>
          <IconFont onClick={isFpsPlay ? api?.closeFpsPlay : api?.openFpsPlay} type="lm-player-zhuzhenplay" title="逐帧播放" />
        </Bar>
      )}
      {leftMidExtContents}
    </div>
  );
}

export default LeftBar;

import React, { useContext, useMemo, useState } from 'react';
import { Context } from './context';
import useBarStatus from './contraller_bar/useBarStatus';
import { useVideoEvent } from './event';

import './style/timeline.less';

export function useTimes() {
  const { api, isFpsPlay } = useContext(Context);
  const [state, setState] = useState({ currentTime: 0, buffered: 0 });
  const getCurrentTime = () => setState((old) => ({ ...old, currentTime: api?.getCurrentTime() ?? 0, buffered: api?.getSecondsLoaded() ?? 0 }));
  const getBuffered = () => setState((old) => ({ ...old, buffered: api?.getSecondsLoaded() ?? 0 }));
  const seekendPlay = () => !isFpsPlay && api?.play();

  useVideoEvent('timeupdate', getCurrentTime);
  useVideoEvent('progress', getBuffered);
  useVideoEvent('suspend', getBuffered);
  useVideoEvent('seeked', seekendPlay);

  return useMemo(() => [state.currentTime, state.buffered, api?.getDuration() ?? 0], [state.currentTime, state.buffered, api]);
}

function TimeLine() {
  const { api } = useContext(Context);
  const status = useBarStatus();
  const [currentTime, buffered, duration] = useTimes();

  const playPercent = useMemo(() => (currentTime / duration) * 100, [currentTime, duration]);
  const bufferedPercent = useMemo(() => (buffered / duration) * 100, [buffered, duration]);

  const seekWithLine = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const current = e.pageX - rect.left;
    const cTime = (current / rect.width) * (api?.getDuration() ?? 0);
    api?.seekTo(cTime);
  };

  return (
    <div className={`player-timeline-layout ${status === 0 ? 'hide-time-line' : ''}`} onClick={seekWithLine}>
      <div className="buffer-line" style={{ width: `${bufferedPercent}%` }}></div>
      <div className="current-line" style={{ width: `${playPercent}%` }}></div>
    </div>
  );
}

export default TimeLine;

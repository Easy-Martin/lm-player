import { useUpdateEffect } from 'ahooks';
import moment from 'dayjs';
import React, { startTransition, useMemo, useState } from 'react';
import useBarStatus from './contraller_bar/useBarStatus';
import './style/timeline.less';
import { useTimes } from './timeline';
import { FMT } from './util';

interface ITimeLineProps {
  duration: number;
  begin: number;
  end: number;
  onSeek?: (time: number) => void;
}

interface ITipTitleProps {
  begin: number;
  end: number;
  left: number;
  current: number;
  markTime: number;
}

function TipTitle({ end, begin, left, current, markTime }: ITipTitleProps) {
  if (left === -1) {
    return null;
  }
  return (
    <div className="frontend-line-tip-box" style={{ left }}>
      <div style={{ fontWeight: 600 }}>录像信息</div>
      <div>开始：{moment(begin).format(FMT)}</div>
      <div>结束：{moment(end).format(FMT)}</div>
      <div>刻度：{moment(markTime).format(FMT)}</div>
      <div>当前：{moment(current).format(FMT)}</div>
    </div>
  );
}

function FrontendTimeLine({ duration, begin, end, onSeek }: ITimeLineProps) {
  // time 是记录seek时跳了多少
  const [state, setState] = useState({ time: 0, markTime: 0, left: -1, visible: false });
  const status = useBarStatus();

  //获取视频当前播放时长单位s
  const [currentTime] = useTimes();

  const rTime = useMemo(() => state.time + currentTime, [state.time, currentTime]);

  useUpdateEffect(() => setState((old) => ({ ...old, time: 0 })), [begin]);

  const playPercent = useMemo(() => (rTime / duration) * 100, [duration, rTime]);
  const cTime = useMemo(() => begin + rTime * 1000, [begin, rTime]);

  const seekWithLine = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const current = e.pageX - rect.left;
    const cTime = (current / rect.width) * duration;
    onSeek?.(begin + cTime * 1000);
    //时间轴进度条rTime是要加上currentTime,这里要减去一下，包装交互一致性
    setState((old) => ({ ...old, time: cTime }));
  };

  const onLineMouseOver = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const left = e.pageX - rect.left;
    const mTime = (left / rect.width) * duration;
    setState((old) => ({ ...old, left, markTime: begin + mTime * 1000 }));
  };

  const onLineMouseOut = () => startTransition(() => setState((old) => ({ ...old, left: -1 })));

  return (
    <div className={`player-timeline-layout frontend-player-timeline-layout ${status === 0 ? 'hide-time-line' : ''}`} onClick={seekWithLine} onMouseMove={onLineMouseOver} onMouseOut={onLineMouseOut}>
      <div className="current-line" style={{ width: `${playPercent}%` }}></div>
      <TipTitle end={end} begin={begin} left={state.left} current={cTime} markTime={state.markTime} />
      {state.left !== -1 && <span className="frontend-line-mark" style={{ left: state.left }} />}
    </div>
  );
}

export default FrontendTimeLine;

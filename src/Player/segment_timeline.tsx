import { Tooltip } from 'antd';
import moment from 'dayjs';
import React, { startTransition, useMemo, useState } from 'react';
import useBarStatus from './contraller_bar/useBarStatus';
import type { ISegmentType } from './player';
import './style/timeline.less';
import { useTimes } from './timeline';
import { FMT } from './util';

interface ITipTitleProps {
  index: number;
  segments: ISegmentType[];
  begin: number;
  current: number;
  markTime: number;
}

function TipTitle({ index, segments, begin, current, markTime }: ITipTitleProps) {
  const { start, end } = useMemo(() => {
    if (index === 0) {
      let start = begin;
      let end = begin + (segments[0].endTime - segments[0].beginTime);
      return { start: moment(start).format(FMT), end: moment(end).format(FMT) };
    }
    const indexDuration = segments.map((v) => v.endTime - v.beginTime).reduce((a, b, i) => (i >= index ? a : a + b), 0);
    let start = begin + indexDuration;
    let end = start + (segments[index].endTime - segments[index].beginTime);
    return { start: moment(start).format(FMT), end: moment(end).format(FMT) };
  }, [index, segments, begin]);

  const hasUrl = useMemo(() => (segments[index]?.url ? true : false), [index, segments]);

  return (
    <div className="segment-line-tip-box">
      <div style={{ fontWeight: 600 }}>录像片段信息</div>
      <div>开始：{start}</div>
      <div>结束：{end}</div>
      <div>刻度：{moment(markTime).format(FMT)}</div>
      <div>当前：{moment(current).format(FMT)}</div>
      <div>
        状态：<span style={{ color: hasUrl ? 'green' : 'red' }}>{hasUrl ? '正常' : '缺失'}</span>
      </div>
    </div>
  );
}

interface ITimeLineProps {
  index: number;
  segments: ISegmentType[];
  duration: number;
  begin: number;
  seekTo: (time: number) => void;
}

function SegmentTimeLine({ index, segments, duration, begin, seekTo }: ITimeLineProps) {
  const [state, setState] = useState({ time: 0, markTime: 0, left: -1, visible: false });
  const status = useBarStatus();
  const [currentTime, buffered] = useTimes();

  const indexDuration = useMemo(() => segments.map((v) => (v.endTime - v.beginTime) / 1000).reduce((a, b, i) => (i >= index ? a : a + b), 0), [index, segments]);
  const playPercent = useMemo(() => ((currentTime + indexDuration) / duration) * 100, [currentTime, duration, indexDuration]);
  const bufferedPercent = useMemo(() => ((buffered + indexDuration) / duration) * 100, [buffered, duration, indexDuration]);
  const seekWithLine = (e: React.MouseEvent, i: number) => {
    if (!segments[i].url) {
      return;
    }
    const ele = e.currentTarget;
    const rect = ele.getBoundingClientRect();
    let current = e.pageX - rect.left;
    const item = segments[i - 1];
    const pTime = item ? item.endTime : begin;
    const duration = segments[i].endTime - segments[i].beginTime;
    const currentTime = (current / rect.width) * duration;
    seekTo(Math.round(currentTime + pTime));
  };
  const onLineMouseOver = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const left = e.pageX - rect.left;
    const mTime = (left / rect.width) * duration;
    setState((old) => ({ ...old, left, markTime: begin + mTime * 1000 }));
  };

  const onLineMouseOut = () => startTransition(() => setState((old) => ({ ...old, left: -1 })));

  return (
    <div className={`player-timeline-layout player-segment-timeline-layout ${status === 0 ? 'hide-time-line' : ''}`} onMouseMove={onLineMouseOver} onMouseOut={onLineMouseOut}>
      <div className="segment-line-box">
        {segments.map((v, i) => (
          <Tooltip key={`time-line-${i}`} title={<TipTitle segments={segments} index={i} begin={begin} current={currentTime * 1000 + begin} markTime={state.markTime} />}>
            <div
              className={`segment-line-item ${!v.url ? 'segment-line-item-none' : ''} ${i === segments.length - 1 ? 'last-segment-line-item' : ''}`}
              onClick={(e) => seekWithLine(e, i)}
              style={{ width: `${((v.endTime / 1000 - v.beginTime / 1000) / duration) * 100}%` }}
            />
          </Tooltip>
        ))}
        <div className="buffer-line" style={{ width: `${bufferedPercent}%` }}></div>
        <div className="current-line" style={{ width: `${playPercent}%` }}></div>
        {state.left !== -1 && <span className="segment-line-mark" style={{ left: state.left }} />}
      </div>
    </div>
  );
}

export default SegmentTimeLine;

import { useLatest, useUpdate } from 'ahooks';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type VideoEventInstance from './event';
import { useRegisterPlayerEvent, useVideoEvent } from './event';
import Events from './event/eventName';
import type { ExportPlayerType, ISegmentPlayerProps, ISegmentType } from './player';
import SegmentTimeLine from './segment_timeline';
import SinglePlayer from './single_player';

/**
 * @desc 计算第一个url
 * @param segments
 * @param defaultIndex
 * @returns
 */
function getFirstUrlIndex(segments: ISegmentType[], defaultIndex: number = 0): number {
  if (!(Array.isArray(segments) && segments.length > 0)) {
    return defaultIndex;
  }
  if (segments[defaultIndex].url) {
    return defaultIndex;
  } else {
    let i = defaultIndex + 1;
    if (i > segments.length) {
      return i;
    }
    return getFirstUrlIndex(segments, i);
  }
}

/**
 * @desc 片段索引控制
 * @param event
 * @param segments
 * @returns
 */
function usePlayIndex(event?: VideoEventInstance, segments?: ISegmentType[], defaultIndex: number = 0) {
  const [state, setState] = useState({ index: getFirstUrlIndex(segments ?? [], defaultIndex) });
  // 片段发生变化重新开始计算索引
  useEffect(() => {
    const index = getFirstUrlIndex(segments ?? [], 0);
    setState((old) => ({ ...old, index }));
  }, [segments]);

  // 索引不存在播放地址，自动跳转下一段
  useEffect(() => {
    if (!segments?.[state.index]?.url && state.index < (segments?.length ?? 0) - 1) {
      setState((old) => ({ ...old, index: old.index + 1 }));
    }
  }, [segments, state.index]);

  // 监听片段播放状态，自动跳转下一个片段
  const endHandle = () => setState((old) => ({ ...old, index: old.index + 1 < (segments?.length ?? 0) ? old.index + 1 : old.index }));
  useVideoEvent('ended', endHandle, event);
  useRegisterPlayerEvent(Events.PLAY_ENDED, endHandle, event);

  return { index: state.index, setIndex: (i: number) => setState((old) => ({ ...old, index: i })) };
}

/**
 * @desc 主组件，负责片段整体逻辑控制
 * @param param0
 * @returns
 */
function SegmentPlayer({ segments, begin, forwordRef, defaultIndex, onCanPlayerInit, customTimeLine, ...props }: ISegmentPlayerProps) {
  const [state, setState] = useState({ seekTime: 0 });
  const latestSegmentsRef = useLatest(segments);
  const update = useUpdate();
  const ref = useRef<ExportPlayerType>(null);
  const playRef = forwordRef ? forwordRef : ref;

  const { api, event } = playRef.current || {};

  const duration = useMemo(() => segments?.map((v) => (v.endTime - v.beginTime) / 1000).reduce((a, b) => a + b, 0), [segments]);
  const { index, setIndex } = usePlayIndex(event, segments, defaultIndex);
  const url = useMemo(() => (segments?.[index] ? segments[index].url : undefined), [segments, index]);
  // 重置reload
  const reload = () => {
    const [, hls] = playRef.current?.plugins ?? [];
    if (hls) {
      hls.swapAudioCodec();
      hls.recoverMediaError();
    }
    playRef.current?.event.emit(Events.RELOAD);
    playRef.current?.event.emit(Events.CLEAR_ERROR_TIMER);
    setIndex(0);
    playRef.current?.api.reload();
  };

  // time 毫秒的时间戳
  const seekTo = (time: number) => {
    const cSegments = latestSegmentsRef.current ?? [];
    const index = cSegments.findIndex((v) => time >= v.beginTime && time < v.endTime);
    if (index === -1) {
      return;
    }
    const [, hls] = playRef.current?.plugins ?? [];
    if (hls) {
      hls.swapAudioCodec();
      hls.recoverMediaError();
    }
    const currentTime = time - cSegments[index]?.beginTime;
    setIndex(index);
    setState((old) => ({ ...old, seekTime: currentTime / 1000 }));
  };

  // 处理seek 后index变化后 cuurenttime变化的过程
  useEffect(() => {
    if (state.seekTime === 0) {
      return;
    }
    setState((old) => ({ ...old, seekTime: 0 }));
    if (playRef.current?.video) {
      playRef.current.video.currentTime = state.seekTime;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.seekTime]);

  const hasReady = api && event;
  const timeline = customTimeLine ?? <SegmentTimeLine begin={begin ?? 0} seekTo={seekTo} index={index} segments={segments ?? []} duration={duration ?? 0} />;

  const onInit = useCallback(() => {
    update();
    onCanPlayerInit?.();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <SinglePlayer ref={playRef} url={url} isLive={false} onCanPlayerInit={onInit} reload={reload} extActions={{ setIndex, seekTo }} customTimeLine={hasReady ? timeline : <></>} {...props} />;
}

export default SegmentPlayer;

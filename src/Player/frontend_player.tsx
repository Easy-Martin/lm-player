import { useMemoizedFn, useUpdate } from 'ahooks';
import { useMemo, useRef } from 'react';
import Events from './event/eventName';
import FrontendTimeLine from './frontend_timeline';
import type { ExportPlayerType, IFrontendPlayerProps } from './player';
import SinglePlayer from './single_player';

/**
 * @desc 主组件，负责片段整体逻辑控制
 * @return JSX.Element
 */
function FrontendPlayer({ url, begin, end, onSeek, forwordRef, customTimeLine, onCanPlayerInit, ...props }: IFrontendPlayerProps) {
  const update = useUpdate();
  const ref = useRef<ExportPlayerType>(null);
  const playRef = forwordRef ? forwordRef : ref;

  const { api, event } = playRef.current || {};

  // 转换毫秒
  const duration = useMemo(() => (end ?? 0 - (begin ?? 0)) / 1000, [begin, end]); //单位s 秒

  // 重置reload
  const reload = useMemoizedFn(() => {
    playRef.current?.event.emit(Events.RELOAD);
    onSeek?.(begin as number);
    playRef.current?.api.reload();
  });

  const onInit = useMemoizedFn(() => {
    update();
    onCanPlayerInit?.();
  });

  const hasReady = api && event;
  const timeline = customTimeLine ?? <FrontendTimeLine end={end ?? 0} onSeek={onSeek} begin={begin ?? 0} duration={duration} />;

  return <SinglePlayer ref={playRef} url={url} reload={reload} onCanPlayerInit={onInit} isLive={false} type="flv" customTimeLine={hasReady ? timeline : <></>} {...props} />;
}

export default FrontendPlayer;

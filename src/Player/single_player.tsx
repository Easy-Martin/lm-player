import type Flvjs from '@cloud-app-dev/mpegts.js';
import { useLatest, useMemoizedFn, useToggle, useUpdateEffect } from 'ahooks';
import type Hls from 'hls.js';
import type { HlsConfig } from 'hls.js';
import React, { useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react';
import type Api from './api';
import { usePlayerApi } from './api';
import { Provider } from './context';
import ContrallerBar from './contraller_bar';
import ContrallerEvent from './contraller_bar/contraller_event';
import Empty from './empty';
import VideoEventInstance, { usePlayerEvent, useRegisterPlayerEvents, useVideoEvents } from './event';
import useErrorEvent from './event/errorEvent';
import EventName from './event/eventName';
import FPSPlay from './fps_play';
import useLiveHeart from './live_heart';
import VideoMessage from './message';
import type { ExportPlayerType, FlvPlayerConfig, ISinglePlayerProps } from './player';
import Timeline from './timeline';
import { createProxy, getVideoType, playUnload } from './util';

import './style/index.less';

const SinglePlayer = React.forwardRef(function SinglePlayer(
  { className, url, type, hideContrallerBar, isLive, errorReloadTimer, children, onCanPlayerInit, extActions, ...props }: ISinglePlayerProps,
  ref: React.ForwardedRef<ExportPlayerType>,
) {
  const { autoPlay, preload, muted, poster, playsInline, loop } = props;
  const { rightExtContents, rightMidExtContents, leftExtContents, leftMidExtContents, customTimeLine } = props;
  const { flvConfig, hlsConfig, videoEvents, playerEvents, oneFpsPlay, fpsDelay, fps } = props;
  const [state, setState] = useState<{ container?: HTMLElement; isFpsPlay: boolean }>({ container: undefined, isFpsPlay: false });
  const [fit, { toggle }] = useToggle('fill', 'contain');

  // 视频格式判断，外部可以强制指定，也可以通过url自动判断
  const vType = useMemo(() => type || getVideoType(url), [url, type]);
  const domRef = useRef<HTMLDivElement>(null);
  const video = useMemo(() => (state.container ? state.container.querySelector('video') ?? undefined : undefined), [state.container]);

  // 生成事件对象
  const event = usePlayerEvent(video);

  // 注册外部自定义事件
  useVideoEvents(event, videoEvents);
  useRegisterPlayerEvents(event, playerEvents);

  const [api, [, flv, hls], rePlay] = usePlayerApi(url, vType, isLive, state.container, flvConfig?.mediaDataSource.segments, flvConfig, hlsConfig);

  // 判断是否有链接传入
  const hasLink = useMemo(() => !!url || (!!flvConfig?.mediaDataSource.segments && vType === 'flv'), [url, flvConfig?.mediaDataSource.segments, vType]);

  const hlsRef = useLatest(hls);
  const flvRef = useLatest(flv);

  // 存储容器
  useEffect(() => {
    setState((old) => ({ ...old, container: domRef.current } as any));
  }, []);

  // url 变化清理错误次数
  useEffect(() => {
    event?.emit(EventName.CLEAR_ERROR_TIMER);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  // 特殊接口实现 reload是可能被重写的,但是API只暴露原生的方法
  const reload = useMemoizedFn(() => {
    rePlay();
    // playReload(video, event, flvRef.current, hlsRef.current, url);
  });
  const unload = useMemoizedFn(() => playUnload(video, flvRef.current, hlsRef.current));
  const openFpsPlay = useMemoizedFn(() => {
    setState((old) => ({ ...old, isFpsPlay: true }));
    api?.pause();
  });
  const closeFpsPlay = useMemoizedFn(() => {
    setState((old) => ({ ...old, isFpsPlay: false }));
    api?.play();
  });

  // 合并api,加上代理
  const playApi = useMemo(() => {
    if (!api) {
      return undefined;
    }
    const extmap = { reload, unload, toggleFit: toggle, openFpsPlay, closeFpsPlay, ...extActions } as any;
    return createProxy(api, extmap);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [api]);

  // 代理Event
  const playEvent = useMemo(() => {
    if (!event) {
      return undefined;
    }
    return createProxy(event);
  }, [event]);

  // ref暴露接口
  useImperativeHandle(
    ref,
    () => ({
      video: video as HTMLVideoElement,
      container: state.container as HTMLDivElement,
      api: playApi as Api,
      event: playEvent as VideoEventInstance,
      plugins: [flvRef.current, hlsRef.current] as [Flvjs.Player, Hls],
      fit,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [video, state.container, playApi, playEvent, fit],
  );

  useUpdateEffect(() => (api && event && video ? onCanPlayerInit?.() : undefined), [api, event, video]);

  // 补货视频错误，自定义处理
  useErrorEvent({ unload, flv: flvRef.current, hls: hlsRef.current, event, reload, errorReloadTimer: errorReloadTimer as number });

  // 直播缓冲追回
  useLiveHeart({ api, event, isLive });

  const videoProps = {
    autoPlay: state.isFpsPlay ? false : autoPlay,
    preload,
    muted: state.isFpsPlay ? false : muted,
    poster,
    controls: false,
    playsInline,
    loop: state.isFpsPlay ? false : loop,
  };
  const contrallerProps = {
    rightExtContents,
    rightMidExtContents,
    leftMidExtContents,
    leftExtContents,
    reload: props.reload ?? reload,
    hideTimeProgress: !!customTimeLine,
    oneFpsPlay,
  };

  const hasApiEventInit = api && event;
  return (
    <Provider api={playApi} event={event} container={state.container} isLive={isLive} isFpsPlay={state.isFpsPlay}>
      <div className={`lm-player-container ${className}`} ref={domRef}>
        <div className="player-mask-layout">
          <video {...videoProps} style={{ objectFit: fit as any, visibility: state.isFpsPlay ? 'hidden' : 'unset' }} />
          {hasApiEventInit && hasLink && state.isFpsPlay ? <FPSPlay fps={fps} event={event} api={playApi} fpsDelay={fpsDelay} /> : <Empty />}
        </div>
        {hasApiEventInit && hasLink ? <VideoMessage /> : <Empty />}
        {hasApiEventInit && hasLink && !hideContrallerBar ? (
          <ContrallerEvent>
            <ContrallerBar {...contrallerProps} />
          </ContrallerEvent>
        ) : (
          <Empty />
        )}
        {hasApiEventInit ? customTimeLine ? customTimeLine : !hideContrallerBar ? <Timeline /> : <Empty /> : <Empty />}
        {children}
      </div>
    </Provider>
  );
});

SinglePlayer.defaultProps = {
  isLive: true,
  errorReloadTimer: 5,
  muted: true,
  autoPlay: true,
  playsInline: false,
  preload: 'auto',
  loop: false,
  hideContrallerBar: false,
  className: '',
  flvConfig: { mediaDataSource: {}, config: {} } as FlvPlayerConfig,
  hlsConfig: {} as HlsConfig,
  extActions: {},
  oneFpsPlay: false,
  fpsDelay: 500,
  fps: 30,
};

export default SinglePlayer;

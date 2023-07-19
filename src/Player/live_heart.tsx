/* eslint-disable react-hooks/rules-of-hooks */
import { useDocumentVisibility, useRafInterval, useUpdateEffect } from 'ahooks';
import { useRef } from 'react';
import type Api from './api';
import type VideoEventInstance from './event';
import Events from './event/eventName';

function useLiveHeart({ api, event, isLive }: { api?: Api; event?: VideoEventInstance; isLive?: boolean }) {
  const documentVisibility = useDocumentVisibility();
  const cTimeRef = useRef<number>(0);
  const run = () => {
    if (!isLive || documentVisibility !== 'visible' || !api) {
      return;
    }
    const current = api.getCurrentTime() ?? 0;
    const buffered = api.getSecondsLoaded();
    if (buffered - current > 5) {
      console.debug(`当前延时过大current->${current} buffered->${buffered}, 基于视频当前缓存时间更新当前播放时间 updateTime -> ${buffered - 2}`);
      api.seekTo(buffered - 2 > 0 ? buffered - 2 : 0);
      api.play();
    }
  };

  useUpdateEffect(() => run(), [documentVisibility]);

  useRafInterval(() => (cTimeRef.current = api?.getCurrentTime() ?? 0), 1 * 1000);

  useRafInterval(() => run(), 30 * 1000);

  useRafInterval(() => {
    if (!api || !event) {
      return;
    }
    const cuurentTime = api.getCurrentTime();
    if (!!isLive && !api.video?.paused && cuurentTime === cTimeRef.current) {
      event.emit(Events.ERROR, 'long time no play！');
    }
  }, 20 * 1000);
}

export default useLiveHeart;

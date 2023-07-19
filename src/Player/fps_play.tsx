import { useEffect, useMemo, useRef, useState } from 'react';
import useRafInterval from '../useRafInterval';
import type Api from './api';
import type VideoEventInstance from './event';
import { useRegisterPlayerEvent } from './event';
import Events from './event/eventName';
import { getDomStyleValue } from './util';

const oneFps = 1 / 30;

interface IFPSPlay {
  api?: Api;
  event?: VideoEventInstance;
  fpsDelay?: number;
  fps?: number;
}
function FPSPlay({ api, event, fpsDelay, fps }: IFPSPlay) {
  const [forceKey, update] = useState(Date.now());
  const ref = useRef<HTMLCanvasElement>(null);
  const timerRef = useRef<NodeJS.Timeout>();
  const fps_second = useMemo(() => (fps ? 1 / fps : oneFps), [fps]);

  useEffect(() => {
    const fpsCapture = () => {
      if (!ref.current || !event?.video || !api) {
        return;
      }
      const video = event.video;
      const fpsTime = api.getCurrentTime() + fps_second;
      video.currentTime = fpsTime;
      if (video.currentTime >= api.getDuration()) {
        clearInterval(timerRef.current);
        video.currentTime = 0;
        event.emit(Events.PLAY_ENDED);
      }
      const canvas = ref.current;
      const ctx = canvas.getContext('2d');
      const { width, height } = video.getBoundingClientRect();
      canvas.width = width;
      canvas.height = height;

      const fit = getDomStyleValue(video, 'object-fit');
      if (fit === 'fill') {
        //全画面绘制，存在拉伸
        ctx?.drawImage(video, 0, 0, width, height);
      } else {
        // 自适应绘制
        const videoWidth = video.videoWidth;
        const videoHeight = video.videoHeight;
        const scale = height / videoHeight;
        const s_vw = scale * videoWidth;
        const paddingSize = (width - s_vw) / 2;
        ctx?.drawImage(video, paddingSize, 0, s_vw, height);
      }
    };
    fpsCapture();
    timerRef.current = setInterval(fpsCapture, fpsDelay);

    return () => {
      clearInterval(timerRef.current);
    };
  }, [api, event, fpsDelay, forceKey, fps_second]);

  useRegisterPlayerEvent(Events.CANVAS_PAUSE, () => {
    clearInterval(timerRef.current);
  });

  useRegisterPlayerEvent(Events.CANVAS_PLAY, () => {
    update(Date.now());
  });

  // TODO: 未知情况，video会自动播放，轮训检测并暂停零时解决
  useRafInterval(() => (!api?.paused ? api?.pause() : null), 10);

  return <canvas className="fps-play-canvas" ref={ref} />;
}

export default FPSPlay;

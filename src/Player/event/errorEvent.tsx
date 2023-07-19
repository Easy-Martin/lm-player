import Flvjs from '@cloud-app-dev/mpegts.js';
import Hls from 'hls.js';
import { useEffect, useRef, useState } from 'react';
import type VideoEventInstance from '.';
import { useRegisterPlayerEvent, useVideoEvent } from '.';
import EventName from './eventName';

interface IErrorEventProps {
  event?: VideoEventInstance;
  errorReloadTimer: number;
  flv: Flvjs.Player;
  hls: Hls;
  reload: () => void;
  unload: () => void;
  errorHandleAdapter?: (errorInfo: any) => boolean; // 当适配器返回true时 会忽略该次错误
}

function useErrorEvent({ event, reload, unload, errorReloadTimer, flv, hls, errorHandleAdapter }: IErrorEventProps) {
  const [errorTimer, setErrorTime] = useState(0);
  const errorInfo = useRef<any>(null);
  const reloadTimer = useRef<NodeJS.Timeout>();

  const errorHandle = (...args: any) => {
    if (args[2] && args[2].msg && args[2].msg.includes('Unsupported audio')) {
      return;
    }
    console.error(...args);
    errorInfo.current = args;
    if (!errorHandleAdapter?.(args)) {
      setErrorTime(errorTimer + 1);
    }
  };

  const clearErrorTimer = () => setErrorTime(0);

  const reloadSuccess = () => {
    if (errorTimer > 0) {
      console.warn('视频重连成功！');
      event?.emit(EventName.RELOAD_SUCCESS);
      clearErrorTimer();
    }
  };
  useVideoEvent('error', errorHandle, event);
  useVideoEvent('canplay', reloadSuccess, event);
  useRegisterPlayerEvent(EventName.ERROR, errorHandle, event);
  useRegisterPlayerEvent(EventName.CLEAR_ERROR_TIMER, clearErrorTimer, event);

  useEffect(() => {
    if (flv) {
      flv.on(Flvjs.Events.ERROR, errorHandle);
    }
    if (hls) {
      hls.on(Hls.Events.ERROR, errorHandle);
    }
    //事件销毁由flv、hls销毁时控制
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [flv, hls]);

  useEffect(() => {
    if (errorTimer === 0) {
      return undefined;
    }
    if (errorTimer > errorReloadTimer) {
      unload();
      event?.emit(EventName.RELOAD_FAIL);
      return undefined;
    }

    console.warn(`视频播放出错，正在进行重连${errorTimer}`);
    reloadTimer.current = setTimeout(() => {
      event?.emit(EventName.ERROR_RELOAD, errorTimer, ...errorInfo.current);
      reload();
    }, 2 * 1000);

    return () => {
      clearTimeout(reloadTimer.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errorTimer, event, flv, hls]);
}

export default useErrorEvent;

import { useLatest } from 'ahooks';
import { isNumber } from 'lodash-es';
import { useCallback, useEffect, useRef } from 'react';

interface Handle {
  id: ReturnType<typeof requestAnimationFrame>;
}

const setRafInterval = function (callback: () => void, delay: number = 0): Handle {
  if (typeof requestAnimationFrame === typeof undefined) {
    return {
      id: setInterval(callback, delay) as unknown as number,
    };
  }
  let start = new Date().getTime();
  const handle: Handle = {
    id: 0,
  };
  const loop = () => {
    const current = new Date().getTime();
    if (current - start >= delay) {
      callback();
      start = new Date().getTime();
    }
    handle.id = requestAnimationFrame(loop);
  };
  handle.id = requestAnimationFrame(loop);
  return handle;
};

function isNodeEnv(t: any): t is number {
  return typeof cancelAnimationFrame === typeof undefined;
}

const clearRafInterval = function (handle: Handle) {
  if (isNodeEnv(handle.id)) {
    clearInterval(handle.id);
    return;
  }
  cancelAnimationFrame(handle.id);
};

function useRafInterval(
  fn: () => void,
  delay: number | undefined,
  options?: {
    immediate?: boolean;
    deps?: any[];
  },
) {
  const immediate = options?.immediate;
  const deps = options?.deps ?? [];

  const fnRef = useLatest(fn);
  const timerRef = useRef<Handle>();

  useEffect(() => {
    if (!isNumber(delay) || delay < 0) return undefined;
    if (immediate) {
      fnRef.current?.();
    }
    timerRef.current = setRafInterval(() => {
      fnRef.current?.();
    }, delay);
    return () => {
      if (timerRef.current) {
        clearRafInterval(timerRef.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [delay, ...deps]);

  const clear = useCallback(() => {
    if (timerRef.current) {
      clearRafInterval(timerRef.current);
    }
  }, []);

  return clear;
}

export default useRafInterval;

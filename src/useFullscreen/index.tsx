import useLatest from 'ahooks/es/useLatest';
import useMemoizedFn from 'ahooks/es/useMemoizedFn';
import useUnmount from 'ahooks/es/useUnmount';
import type { BasicTarget } from 'ahooks/es/utils/domTarget';
import { getTargetElement } from 'ahooks/es/utils/domTarget';
import { useState } from 'react';
import screenfull from 'screenfull';

export interface Options {
  onExit?: () => void;
  onEnter?: () => void;
}

const useFullscreen = (target: BasicTarget, options?: Options) => {
  const { onExit, onEnter } = options || {};

  const onExitRef = useLatest(onExit);
  const onEnterRef = useLatest(onEnter);

  const [state, setState] = useState(false);

  const onChange = () => {
    if (screenfull.isEnabled) {
      const el = getTargetElement(target);
      const isFullscreen = document.fullscreenElement === el;
      if (isFullscreen) {
        onEnterRef.current?.();
      } else {
        screenfull.off('change', onChange);
        onExitRef.current?.();
      }
      setState(isFullscreen);
    }
  };

  const enterFullscreen = () => {
    const el = getTargetElement(target);
    if (!el) {
      return;
    }

    if (screenfull.isEnabled) {
      try {
        screenfull.request(el);
        screenfull.on('change', onChange);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const exitFullscreen = () => {
    if (screenfull.isEnabled) {
      screenfull.exit();
    }
  };

  const toggleFullscreen = () => {
    if (state) {
      exitFullscreen();
    } else {
      enterFullscreen();
    }
  };

  useUnmount(() => {
    if (screenfull.isEnabled) {
      screenfull.off('change', onChange);
    }
  });

  return [
    state,
    {
      enterFullscreen: useMemoizedFn(enterFullscreen),
      exitFullscreen: useMemoizedFn(exitFullscreen),
      toggleFullscreen: useMemoizedFn(toggleFullscreen),
      isEnabled: screenfull.isEnabled,
    },
  ] as const;
};

export default useFullscreen;

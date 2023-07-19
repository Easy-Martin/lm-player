import Flvjs from '@cloud-app-dev/mpegts.js';
import { useMemoizedFn } from 'ahooks';
import Hls, { HlsConfig } from 'hls.js';
import { useEffect, useMemo, useState } from 'react';
import likeGo from '../../likeGo';
import nextTick from '../../nextTick';
import type { FlvPlayerConfig } from '../player';
import { createFlvPlayer, createHlsPlayer } from '../util';

class Api {
  container: HTMLElement;
  constructor(container: HTMLElement) {
    this.container = container;
  }

  get video() {
    return this.container.querySelector('video');
  }

  play = () => {
    likeGo(async () => this.video?.play());
  };
  pause = () => {
    this.video?.pause();
  };

  get paused() {
    return this.video?.paused;
  }

  get muted() {
    return this.video?.muted;
  }

  /**
   * 设置currentTime实现seek
   * @param {*} seconds
   */
  seekTo = (seconds: number) => {
    if (this.video) {
      this.video.currentTime = seconds;
    }
  };

  setVolume = (fraction: number) => {
    if (this.video) {
      this.video.volume = fraction;
    }
  };

  getVolume = () => {
    return this.video?.volume;
  };
  mute = () => {
    if (this.video) {
      this.video.muted = true;
    }
  };
  unmute = () => {
    if (this.video) {
      this.video.muted = false;
    }
  };

  /**
   * 开启画中画功能
   */
  requestPictureInPicture = () => {
    this.video?.requestPictureInPicture();
  };
  /**
   * 关闭画中画功能
   */
  exitPictureInPicture = () => {
    if (document.exitPictureInPicture && document.pictureInPictureElement === this.video) {
      document.exitPictureInPicture();
    }
  };

  /**
   * 设置播放速率
   * @param {*} rate
   */
  setPlaybackRate = (rate: number) => {
    if (this.video) {
      this.video.playbackRate = rate;
    }
  };
  /**
   * 获取视频总时长
   */
  getDuration = () => {
    const { duration, seekable } = this.video || {};
    if (duration === Infinity && seekable && seekable.length > 0) {
      return seekable.end(seekable.length - 1);
    }
    return duration ?? 0;
  };
  /**
   * 获取当前播放时间
   */
  getCurrentTime = () => {
    return this.video?.currentTime ?? 0;
  };

  /**
   * 获取缓存时间
   */
  getSecondsLoaded = () => {
    return this.getBufferedTime()[1] ?? 0;
  };

  /**
   * 获取当前视频缓存的起止时间
   */
  getBufferedTime = () => {
    const { buffered } = this.video || {};
    if (buffered && buffered.length === 0) {
      return [0, 0];
    }
    const end = buffered?.end(buffered.length - 1) ?? 0;
    const start = buffered?.start(buffered.length - 1) ?? 0;
    const duration = this.getDuration() ?? 0;
    if (end > duration) {
      return [start, duration];
    }
    return [start, end];
  };

  /**
   * 视频截屏方法
   */
  snapshot = () => {
    let canvas = document.createElement('canvas');
    let ctx = canvas.getContext('2d');
    canvas.width = this.video?.videoWidth ?? 0;
    canvas.height = this.video?.videoHeight ?? 0;
    ctx?.drawImage(this.video as HTMLVideoElement, 0, 0, canvas.width, canvas.height);
    setTimeout(() => {
      canvas.remove();
      canvas = null as any;
      ctx = null;
    }, 200);
    return canvas.toDataURL();
  };

  unload = () => {};
  reload = () => {};
  toggleFit = () => {};
  openFpsPlay = () => {};
  closeFpsPlay = () => {};
  destroy = () => {
    this.container = null as any;
  };
}

export type TypeAndPlay = { type?: string; flv?: Flvjs.Player; hls?: Hls };

// 创建播放介质
export function useTypeAndPlay(url?: string, type?: string, isLive?: boolean, container?: HTMLElement, segments?: Flvjs.MediaSegment[], flvConfig?: FlvPlayerConfig, hlsConfig?: HlsConfig) {
  const [state, setState] = useState<TypeAndPlay>({ type: '', flv: undefined, hls: undefined });
  useEffect(() => {
    const isReady = container && (url || (type === 'flv' && segments));
    if (!isReady) {
      return undefined;
    }

    const video = container.querySelector('video');
    const options = {} as TypeAndPlay;

    switch (type) {
      case 'flv':
        options.type = 'flv';
        options.flv = createFlvPlayer(video as HTMLVideoElement, url, isLive, flvConfig);
        break;
      case 'hls':
        options.type = 'hls';
        options.hls = createHlsPlayer(video as HTMLVideoElement, url, isLive, hlsConfig);
        break;
      default:
        options.type = 'native';
        video?.setAttribute('src', url ?? '');
        break;
    }

    if (video?.paused) {
      likeGo(async () => video?.play());
    }

    setState(options);
    return () => {
      if (options.flv) {
        options.flv.pause();
        likeGo(async () => options.flv?.destroy());
      } else if (options.hls) {
        video?.pause();
        likeGo(async () => options.hls?.destroy());
      } else {
        video?.pause();
        video?.removeAttribute('src');
      }
      setState({});
    };
  }, [url, container, segments, type, isLive, flvConfig, hlsConfig]);

  return [state.type, state.flv, state.hls] as [string, Flvjs.Player, Hls];
}

//创建Api
export function usePlayerApi(
  url?: string,
  type?: string,
  isLive?: boolean,
  container?: HTMLElement,
  segments?: Flvjs.MediaSegment[],
  flvConfig?: FlvPlayerConfig,
  hlsConfig?: HlsConfig,
): [Api | undefined, [string, Flvjs.Player, Hls], () => void] {
  const [api, setApi] = useState<Api | undefined>(undefined);
  const [forceKey, setForceKey] = useState(Date.now());
  const config = useMemo(() => ({ flvConfig: { ...flvConfig }, hlsConfig: { ...hlsConfig } }), [forceKey]);
  const typePlay = useTypeAndPlay(url, type, isLive, container, segments, config.flvConfig as FlvPlayerConfig, config.hlsConfig as HlsConfig);

  const rePlay = useMemoizedFn(() => setForceKey(Date.now()));
  useEffect(() => {
    if (!container) {
      console.debug('wait create api...');
      return undefined;
    }
    const api = new Api(container);
    setApi(api);
    return () => nextTick(() => api.destroy());
  }, [container, segments]);

  return [api, typePlay, rePlay];
}

export default Api;

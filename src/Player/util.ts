import Flvjs from '@cloud-app-dev/mpegts.js';
import Hls, { HlsConfig } from 'hls.js';
import likeGo from '../likeGo';
import type VideoEventInstance from './event';
import Events from './event/eventName';
import type { FlvPlayerConfig } from './player';

/**
 * 创建HLS对象
 * @param {HTMLVideoElement} video
 * @param {string} url
 */
export function createHlsPlayer(video: HTMLVideoElement, url?: string, isLive?: boolean, hlsConfig?: HlsConfig): Hls | undefined {
  if (!Hls.isSupported() || !url) {
    return undefined;
  }
  const player = new Hls({
    liveDurationInfinity: isLive,
    enableWorker: true,
    ...hlsConfig,
  });
  player.loadSource(url);
  player.attachMedia(video);
  return player;
}

/**
 * 创建FLV对象
 * @param {*} video
 * @param {*} options
 */
export function createFlvPlayer(video: HTMLVideoElement, url?: string, isLive?: boolean, flvConfig?: FlvPlayerConfig): Flvjs.Player | undefined {
  if (!Flvjs.isSupported() || !url) {
    return undefined;
  }
  Flvjs.LoggingControl.enableDebug = false;
  Flvjs.LoggingControl.enableVerbose = false;
  Flvjs.LoggingControl.enableWarn = false;

  const mediaDataSource = { type: 'flv', url, ...flvConfig?.mediaDataSource } as Flvjs.MediaDataSource;
  const config: Flvjs.Config = { enableWorker: true, isLive: isLive ?? true, enableStashBuffer: !isLive, ...flvConfig?.config };
  const player = Flvjs.createPlayer(mediaDataSource, config);
  player.attachMediaElement(video);
  player.load();
  return player;
}

/**
 * video unload
 * @param video
 * @param flv
 * @param hls
 * @returns
 */
export const playUnload = function (video?: HTMLVideoElement, flv?: Flvjs.Player, hls?: Hls) {
  if (!video) {
    return;
  }
  video.pause();
  if (flv) {
    flv.unload();
    return;
  }
  if (hls) {
    hls.stopLoad();
    return;
  }
  video.removeAttribute('src');
};

/**
 * reload
 * @param video
 * @param event
 * @param flv
 * @param hls
 * @param url
 */
export const playReload = function (video?: HTMLVideoElement, event?: VideoEventInstance, flv?: Flvjs.Player, hls?: Hls, url?: string) {
  if (!video || !event) {
    return undefined;
  }
  playUnload(video, flv, hls);
  if (flv) {
    likeGo(async () => {
      flv.load();
      flv.play();
    });
  }
  if (hls && url) {
    likeGo(async () => {
      hls.swapAudioCodec();
      hls.recoverMediaError();
      hls.startLoad();
      hls.loadSource(url);
      video.play();
    });
  }
  if (!flv && !hls && url) {
    video.setAttribute('src', url);
    likeGo(async () => video.play());
  }
  event.emit(Events.RELOAD);
};

/**
 * 获取播放文件类型
 * @param {*} url
 */
export function getVideoType(url?: string) {
  if (!url) {
    return 'native';
  }
  return url.indexOf('.flv') > -1 ? 'flv' : url.indexOf('.m3u8') > -1 ? 'hls' : 'native';
}

export function timeStamp(second: number) {
  // 转换为式分秒
  const h = Math.round((second / 60 / 60) % 24);
  const m = second < 60 ? 0 : Math.round((second / 60) % 60);
  const s = Math.round(second % 60);
  if (h === 0) {
    return `${m < 10 ? '0' + m : m}:${s < 10 ? '0' + s : s}`;
  }
  return `${h < 10 ? '0' + h : h}:${m < 10 ? '0' + m : m}:${s < 10 ? '0' + s : s}`;
}

export function getRandom() {
  return Math.random().toString(36).substring(2);
}

export const FMT = 'YYYY-MM-DD HH:mm:ss';

export function getDomStyleValue(dom: HTMLElement, styleKey: string) {
  if (!dom) {
    return '';
  }
  return window.getComputedStyle(dom).getPropertyValue(styleKey);
}

export function createProxy<T>(obj: T, getObj?: any): T {
  const handler = {
    get(target: any, key: string, recevier: any) {
      if (typeof target[key] === 'object') {
        createProxy(target[key] as object);
      }
      if (getObj && getObj[key]) {
        return Reflect.get(getObj, key);
      }
      return Reflect.get(target, key, recevier);
    },
    set(target: any, key: string, value: any) {
      return Reflect.set(target, key, value);
    },
  };
  return new Proxy(obj as any, handler as any) as T;
}

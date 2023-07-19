import type Flvjs from '@cloud-app-dev/mpegts.js';
import type Hls from 'hls.js';
import type { HlsConfig } from 'hls.js';
import type React from 'react';
import type Api from './api';
import type VideoEventInstance from './event';

export type FlvPlayerConfig = {
  mediaDataSource: Flvjs.MediaDataSource;
  config: Flvjs.Config;
};

export interface ISinglePlayerProps {
  /**
   * 视频播放地址
   */
  url?: string;

  /**
   * 容器类名
   */
  className?: string;
  children?: React.ReactNode;

  /**
   * 同html video muted  静音
   * @default true
   */
  muted?: boolean;
  /**
   * 同html video autoplay  自动播放
   * @default true
   */
  autoPlay?: boolean;

  /**
   * 同html video playsinline  自动播放
   * @default false
   */
  playsInline?: boolean;
  /**
   *同html video preload  预加载
   */
  preload?: string;
  /**
   * 视频封面
   */
  poster?: string;

  /**
   * 同html video loop  循环
   * @default false
   */
  loop?: boolean;

  /**
   * 视频格式
   * @default 'native'
   */
  type?: 'flv' | 'hls' | 'native';

  /**
   * 隐藏工具栏
   * @default false
   */
  hideContrallerBar?: boolean;

  /**
   * 直播模式
   * @default true
   */
  isLive?: boolean;

  /**
   * 工具栏右外侧拓展
   */
  rightExtContents?: React.ReactNode;
  /**
   * 工具栏右内侧拓展
   */
  rightMidExtContents?: React.ReactNode;
  /**
   * 工具栏左外侧拓展
   */
  leftExtContents?: React.ReactNode;
  /**
   * 工具栏左内侧拓展
   */
  leftMidExtContents?: React.ReactNode;

  /**
   * 自定义时间轴
   */
  customTimeLine?: React.ReactNode;

  /**
   * 错误重试次数
   * @default 5
   */
  errorReloadTimer?: number;

  /**
   * 自定义flv参数配置
   * @type FlvPlayerConfig
   */
  flvConfig?: FlvPlayerConfig;

  /**
   * 自定义hls参数配置
   * @type HlsConfig
   */
  hlsConfig?: HlsConfig;

  /**
   * 自定义reload函数
   */
  reload?: () => void;

  /**
   * extaction
   */
  extActions?: { [key: string]: (...args: any) => void };

  /**
   * 视频可播放时执行钩子
   */
  onCanPlayerInit?: () => void;

  /**
   * 自定义video事件
   */
  videoEvents?: CustomEvent[];

  /**
   * 自定义播放器的事件
   */
  playerEvents?: CustomEvent[];

  /**
   * 开启单帧播放
   */
  oneFpsPlay?: boolean;

  /**
   * 获取视频针的频次 (ms)
   */
  fpsDelay?: number;

  /**
   * 视频每秒多少帧，用于控制逐帧播放
   */
  fps?: number;
}

export interface IFrontendPlayerProps extends Omit<ISinglePlayerProps, 'isLive' | 'reload'> {
  /**
   * 前端录像开始时间
   */
  begin?: number;

  /**
   * 前端录像结束时间
   */
  end?: number;

  /**
   * 录像时间轴发生变化回调
   */
  onSeek?: (time: number) => void;

  forwordRef?: React.MutableRefObject<ExportPlayerType>;
}

export interface ISegmentPlayerProps extends Omit<ISinglePlayerProps, 'url'> {
  /**
   * 云录像片段信息
   */
  segments?: ISegmentType[];

  /**
   * 云录像开始时间
   */
  begin?: number;

  forwordRef?: React.MutableRefObject<ExportPlayerType>;

  defaultIndex?: number;
}

export const SinglePlayer: React.FunctionComponent<ISinglePlayerProps>;
export const FrontendPlayer: React.FunctionComponent<IFrontendPlayerProps>;
export const SegmentPlayer: React.FunctionComponent<ISegmentPlayerProps>;

export type EventInfo = {
  type: string;
  listener: ((...args: any) => void)[];
};

export type ExportPlayerType = {
  video: HTMLVideoElement;
  container: HTMLElement;
  api: Api;
  event: VideoEventInstance;
  plugins: [Flvjs.Player, Hls];
  fit?: string;
  setIndex?: (i: number) => void;
  seekTo?: (i: number) => void;
  reload?: () => void;
};

export interface ISegmentType {
  id?: string;
  /**
   * 视频片段地址
   */
  url?: string;

  /**
   * 片段开始时间
   */
  beginTime: number;

  /**
   * 片段结束时间
   */
  endTime: number;

  style?: any;
}

export const ISegmentTypeDemo: React.FC<ISegmentType>;

export type CustomEvent = [string, () => void];

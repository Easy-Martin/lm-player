import { ExportPlayerType } from './Player/player';
import { ForwardRefExoticComponent } from 'react';
import { IFrontendPlayerProps } from './player';
import { ISegmentPlayerProps } from './player';
import { ISinglePlayerProps } from './Player/player';
import { JSX as JSX_2 } from 'react/jsx-runtime';
import { RefAttributes } from 'react';

export declare const FrontendPlayer: typeof FrontendPlayer_2;

/**
 * @desc 主组件，负责片段整体逻辑控制
 * @return JSX.Element
 */
declare function FrontendPlayer_2({ url, begin, end, onSeek, forwordRef, customTimeLine, onCanPlayerInit, ...props }: IFrontendPlayerProps): JSX_2.Element;

export declare const HistoryPlayer: typeof SegmentPlayer;

declare const Player: ForwardRefExoticComponent< ISinglePlayerProps & RefAttributes<ExportPlayerType>>;
export { Player }
export default Player;

/**
 * @desc 主组件，负责片段整体逻辑控制
 * @param param0
 * @returns
 */
declare function SegmentPlayer({ segments, begin, forwordRef, defaultIndex, onCanPlayerInit, customTimeLine, ...props }: ISegmentPlayerProps): JSX_2.Element;

export { }

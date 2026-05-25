import {
  RiCloseCircleFill,
  RiFullscreenExitFill,
  RiFullscreenFill,
  RiLoader4Fill,
  RiPauseFill,
  RiPlayCircleFill,
  RiPlayFill,
  RiRefreshFill,
  RiSpeedMiniFill,
  RiVolumeUpFill,
  RiVolumeMuteFill,
} from '@remixicon/react';
import React from 'react';

const iconMap: Record<string, React.ComponentType<{ color?: string; size?: number | string; className?: string }>> = {
  'lm-player-Play_Main': RiPlayFill,
  'lm-player-Pause_Main': RiPauseFill,
  'lm-player-volume-open': RiVolumeUpFill,
  'lm-player-volume-close': RiVolumeMuteFill,
  'lm-player-Refresh_Main': RiRefreshFill,
  'lm-player-zhuzhenplay': RiSpeedMiniFill,
  'lm-player-S_View_ScreenViewFull': RiFullscreenFill,
  'lm-player-S_View_ScreenViewExit': RiFullscreenExitFill,
  'lm-player-Loading': RiLoader4Fill,
  'lm-player-YesorNo_No_Dark': RiCloseCircleFill,
  'lm-player-PlaySource': RiPlayCircleFill,
};

interface IconFontProps {
  type?: string;
  className?: string;
  title?: string;
  style?: React.CSSProperties;
  onClick?: (...args: any[]) => void;
}

function IconFont({ type, className = '', style, ...props }: IconFontProps) {
  const IconComponent = type ? iconMap[type] : undefined;
  if (!IconComponent) {
    return null;
  }
  return (
    <span className={`lm-player-iconfont ${className}`} style={{ display: 'inline-flex', ...style }} {...props}>
      <IconComponent size="1em" />
    </span>
  );
}

export default IconFont;

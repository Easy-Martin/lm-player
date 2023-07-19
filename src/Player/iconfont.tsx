import Icon, { IIconFontProps } from '../IconFont';
import './style/iconfont.js';

function IconFont({ className = '', ...props }: IIconFontProps) {
  return <Icon className={`lm-player-iconfont ${className}`} {...props} />;
}

export default IconFont;

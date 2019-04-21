import React from "react";
import "./style/iconfont.less";
export default function IconFont({ type, className = "", ...props }) {
  return <i className={`lm-player-iconfont ${type} ${className}`} {...props} />;
}

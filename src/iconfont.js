import React from "react";
import "./style/iconfont.less";
export default function IconFont({ type, ...props }) {
  return <i className={`lm-player-iconfont ${type}`} {...props} />;
}

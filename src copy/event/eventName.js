export default {
  RELOAD: "reload", //手动视频重载
  RELOAD_FAIL: "reloadFail", // 视频出错，重连失败
  RELOAD_SUCCESS: "reloadSuccess", //视频出错，重连成功
  ERROR: "error", //视频出错
  ERROR_RELOAD: "errorRload", //视频出错，自动重连
  HISTORY_PLAY_END: "historyPlayEnd", //历史视频列表播放结束
  SEEK: "seek", //跳跃播放时间
  TRANSFORM: "transform", //视频容器缩放
  CHANGE_PLAY_INDEX: "changePlayIndex", //历史视频列表播放索引改变
  HIDE_CONTRALLER:"hideContraller",
  SHOW_CONTRALLER:"showContraller",
  CLEAR_ERROR_TIMER:"clearErrorTimer"
};

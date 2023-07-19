import { useContext, useMemo, useRef, useState } from 'react';
import { Context } from './context';
import { useRegisterPlayerEvent, useVideoEvent } from './event';
import EventName from './event/eventName';
import IconFont from './iconfont';
import './style/message.less';

function VideoMessage() {
  const { api } = useContext(Context);
  const [state, setState] = useState({ status: null, errorTimer: 1, loading: false });
  const timeRef = useRef<NodeJS.Timer>();

  const message = useMemo(() => {
    if (state.status === 'fail') {
      console.warn(`视频错误，请手动刷新重试！`);
      return '请稍后重试！';
    }
    if (state.status === 'reload') {
      console.warn(`第${state.errorTimer}次重连`);
      return `正在刷新...`;
    }
    return '';
  }, [state.errorTimer, state.status]);

  const openLoading = () => {
    clearTimeout(timeRef.current);
    timeRef.current = setTimeout(() => setState((old) => ({ ...old, loading: true })), 200);
  };
  const closeLoading = () => {
    clearTimeout(timeRef.current);
    setState((old) => ({ ...old, loading: false }));
  };
  const errorReload = (timer?: number) => {
    clearTimeout(timeRef.current);
    setState(() => ({ status: 'reload', errorTimer: timer, loading: true } as any));
  };
  const reloadFail = () => setState((old) => ({ ...old, status: 'fail' } as any));
  const reloadSuccess = () => setState((old) => ({ ...old, status: null }));
  const reload = () => setState((old) => ({ ...old, status: 'reload', loading: true } as any));
  const playEnd = () => {
    clearTimeout(timeRef.current);
    setState((old) => ({ ...old, status: null, loading: false }));
    api?.pause();
  };
  useVideoEvent('loadstart', openLoading);
  useVideoEvent('loadeddata', closeLoading);
  useVideoEvent('canplay', closeLoading);
  useRegisterPlayerEvent(EventName.ERROR_RELOAD, errorReload);
  useRegisterPlayerEvent(EventName.RELOAD_FAIL, reloadFail);
  useRegisterPlayerEvent(EventName.RELOAD_SUCCESS, reloadSuccess);
  useRegisterPlayerEvent(EventName.RELOAD, reload);
  useRegisterPlayerEvent(EventName.HISTORY_PLAY_END, playEnd);
  useRegisterPlayerEvent(EventName.CLEAR_ERROR_TIMER, reloadSuccess);

  const { loading, status } = state;
  return (
    <div className={`lm-player-message-mask ${loading || status === 'fail' ? 'lm-player-mask-loading-animation' : ''}`}>
      <IconFont
        type={status === 'fail' ? 'lm-player-YesorNo_No_Dark' : 'lm-player-Loading'}
        className={`${loading && status !== 'fail' ? 'lm-player-loading-animation' : status === 'fail' ? 'lm-player-loadfail' : ''} lm-player-loading-icon`}
      />
      <span className="lm-player-message">{message}</span>
    </div>
  );
}

export const NoSource = () => {
  return (
    <div className="lm-player-message-mask lm-player-mask-loading-animation">
      <IconFont style={{ fontSize: 80 }} type="lm-player-PlaySource" title="请选择视频源"></IconFont>
    </div>
  );
};

export default VideoMessage;

import { useUpdate, useUpdateEffect } from 'ahooks';
import { Slider, Tooltip } from 'antd';
import React, { useMemo, useState } from 'react';
import type Api from '../api';
import IconFont from '../iconfont';
import '../style/volume.less';

function Volume({ api, style }: { api?: Api; style?: React.CSSProperties }) {
  const [val, setVal] = useState(Math.round(api?.getVolume() ?? 0 * 100));
  const update = useUpdate();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const volume = useMemo(() => (api?.muted ? 0 : val), undefined);
  const onChange = (num: number) => {
    if (api?.muted) {
      api?.unmute();
    }
    setVal(num);
    update();
  };
  const toggleMuted = () => {
    if (!api) {
      return;
    }
    if (api.muted) {
      api.unmute();
      setVal(100);
    } else {
      api.mute();
      setVal(0);
    }
    update();
  };

  useUpdateEffect(() => api?.setVolume(val / 100), [val]);

  return (
    <Tooltip arrow={false} overlayClassName="lm-player-volume-popup" title={<Slider onChange={onChange} vertical value={val} />}>
      <IconFont style={style} type={volume !== 0 ? 'lm-player-volume-open' : 'lm-player-volume-close'} onClick={toggleMuted} />
    </Tooltip>
  );
}

export default React.memo(Volume);

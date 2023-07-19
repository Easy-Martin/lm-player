import { Button, Input, Select } from 'antd';
import { Player } from '../index';
import useSimpleState from '../useSimpleState';

const Option = Select.Option;

const options = [
  { value: '', label: '自动' },
  { value: 'flv', label: 'FLV' },
  { value: 'hls', label: 'HLS' },
];

const App = () => {
  const [state, updateState] = useSimpleState({ isLive: true, url: '', type: '', playUrl: '' });

  return (
    <div className="live-demo">
      <h2>SinglePlayer适用直播 或者其他单文件播放 支持flv m3u8</h2>
      <div className="tools-select">
        <Select onChange={(val: string) => updateState({ type: val })} value={state.type}>
          {options.map((v) => (
            <Option value={v.value} key={v.value}>
              {v.label}
            </Option>
          ))}
        </Select>
        <Input className="url" name="url" value={state.url} onChange={(e) => updateState({ url: e.target.value })} placeholder="请输入视频地址" />
        <Select value={state.isLive} onChange={(val) => updateState({ isLive: val })}>
          <Option value={false}>录像</Option>
          <Option value={true}>直播</Option>
        </Select>
        <span className="local-video">
          <input type="file" name="" id="" onChange={(e) => updateState({ url: URL.createObjectURL(e.target.files?.[0] ?? new Blob()) })} />
          <Button>本地录像</Button>
        </span>
        <Button style={{ width: 60, height: 32 }} onClick={() => updateState({ playUrl: state.url })}>
          播放
        </Button>
      </div>
      <Player type={state.type as any} url={state.playUrl} isLive={state.isLive} />
    </div>
  );
};

export default App;

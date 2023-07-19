import { useTimes } from '../timeline';
import { timeStamp } from '../util';

function Time() {
  const [current, , duration] = useTimes();
  return (
    <span className="video-time-progress">
      {timeStamp(current)}/{timeStamp(duration || 0)}
    </span>
  );
}

export default Time;

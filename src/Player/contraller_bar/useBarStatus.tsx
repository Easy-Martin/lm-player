import { useContext, useState } from 'react';
import { Context } from '../context';
import { useRegisterPlayerEvents } from '../event';
import EventName from '../event/eventName';

function useBarStatus() {
  const { event } = useContext(Context);
  const [state, setState] = useState({ status: 1 });
  const show = () => setState((old) => ({ ...old, status: 1 }));
  const hide = () => setState((old) => ({ ...old, status: 0 }));
  useRegisterPlayerEvents(event, [
    [EventName.SHOW_CONTRALLER, show],
    [EventName.HIDE_CONTRALLER, hide],
  ]);

  return state.status;
}

export default useBarStatus;

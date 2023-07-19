import { useEventListener, useMount } from 'ahooks';
import React, { useContext, useRef, useState } from 'react';
import { Context } from '../context';
import EventName from '../event/eventName';

interface IContrallerEventProps {
  children?: React.ReactNode;
}

function ContrallerEvent({ children }: IContrallerEventProps) {
  const { event, container } = useContext(Context);
  const timer = useRef<NodeJS.Timer>();
  const [visibel, setVisibel] = useState(true);

  const showContraller = () => {
    clearTimeout(timer.current);
    setVisibel(true);
    event?.emit(EventName.SHOW_CONTRALLER);
  };
  const hideContraller = () => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      setVisibel(false);
      event?.emit(EventName.HIDE_CONTRALLER);
    }, 3 * 1000);
  };

  useMount(() => hideContraller());

  useEventListener('mouseenter', showContraller, { target: container });

  useEventListener('mouseleave', hideContraller, { target: container });

  return <>{React.Children.map(children, (child) => (React.isValidElement(child) ? React.cloneElement(child, { visibel } as Partial<{ visible: boolean }>) : child))}</>;
}

export default ContrallerEvent;

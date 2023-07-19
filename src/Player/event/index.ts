/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useLatest } from 'ahooks';
import { useContext, useEffect, useMemo, useState } from 'react';
import nextTick from '../../nextTick';
import { Context } from '../context';
import type { CustomEvent, EventInfo } from '../player';

class VideoEventInstance {
  video: HTMLVideoElement;
  events: { [key: string]: EventInfo };
  playerEvents: { [key: string]: (() => void)[] };
  constructor(video: HTMLVideoElement) {
    this.video = video;
    this.events = {};
    this.playerEvents = {};
  }
  on(eventName: string, handle: () => void) {
    this.events && this.events[eventName] ? this.events[eventName].listener.push(handle) : (this.events[eventName] = { type: eventName, listener: [handle] });
  }
  addEventListener(eventName: string, handle: () => void) {
    if (this.video) {
      this.playerEvents[eventName] ? this.playerEvents[eventName].push(handle) : (this.playerEvents[eventName] = [handle]);
      this.video.addEventListener(eventName, handle, false);
    }
  }
  removeEventListener(eventName: string, handle: () => void) {
    if (this.video) {
      if (!this.playerEvents || !this.playerEvents[eventName]) {
        return;
      }
      let index = this.playerEvents[eventName].findIndex((v) => v === handle);
      index > -1 && this.playerEvents[eventName].splice(index, 1);
      this.video.removeEventListener(eventName, handle, false);
    }
  }
  emit(eventName: string, ...data: any) {
    if (!this.events || !this.events[eventName]) {
      return;
    }
    this.events[eventName].listener.forEach((v) => {
      v(...data);
    });
  }
  off(eventName: string, handle: () => void) {
    if (!this.events || !this.events.eventName) {
      return;
    }
    let index = this.events[eventName].listener.findIndex((v) => v === handle);
    index > -1 && this.events[eventName].listener.splice(index, 1);
  }

  destroy() {
    Object.keys(this.playerEvents).forEach((key) => {
      this.playerEvents[key].forEach((fn) => {
        this.removeEventListener(key, fn);
      });
    });
    this.playerEvents = {};
    this.events = {};
    this.video = null as any;
  }
}

type PlayEvent = VideoEventInstance;

export function usePlayerEvent(video?: HTMLVideoElement): PlayEvent | undefined {
  const [event, setEvent] = useState<PlayEvent | undefined>(undefined);
  useEffect(() => {
    if (!video) {
      console.debug('wait create event...');
      return undefined;
    }
    const event = new VideoEventInstance(video);
    setEvent(event);
    return () => nextTick(() => event.destroy());
  }, [video]);

  return event;
}

export function useVideoEvent(eventName: string, handle: (event: any) => void, context?: VideoEventInstance) {
  const ctx = useContext(Context);
  const event = useMemo(() => ctx?.event ?? context, [context, ctx?.event]);
  const handlerRef = useLatest(handle);
  useEffect(() => {
    if (!event) {
      return undefined;
    }
    const eventListener = (event?: any) => {
      return handlerRef.current(event);
    };
    event.addEventListener(eventName, eventListener);

    return () => event.removeEventListener(eventName, eventListener);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [event, eventName]);
}

export function useRegisterPlayerEvent(eventName: string, handle: (event: any) => void, context?: VideoEventInstance) {
  const ctx = useContext(Context);
  const event = useMemo(() => ctx?.event ?? context, [context, ctx?.event]);
  const handlerRef = useLatest(handle);
  useEffect(() => {
    if (!event) {
      return undefined;
    }

    const eventListener = (event?: any) => {
      return handlerRef.current(event);
    };
    event.on(eventName, eventListener);

    return () => {
      event.off(eventName, eventListener);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [event, eventName]);
}

export function useVideoEvents(event?: VideoEventInstance, events?: CustomEvent[]) {
  useEffect(() => {
    if (!event || !events) {
      return undefined;
    }
    events.forEach(([eventName, handle]) => {
      event.addEventListener(eventName, handle);
    });

    return () => {
      events.forEach(([eventName, handle]) => {
        event.removeEventListener(eventName, handle);
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [event]);
}

export function useRegisterPlayerEvents(event?: VideoEventInstance, events?: CustomEvent[]) {
  useEffect(() => {
    if (!event || !events) {
      return undefined;
    }
    events.forEach(([eventName, handle]) => {
      event.on(eventName, handle);
    });

    return () => {
      events.forEach(([eventName, handle]) => {
        event.off(eventName, handle);
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [event]);
}

export default VideoEventInstance;

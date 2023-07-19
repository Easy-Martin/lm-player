import type { MutableRefObject } from 'react';
import likeGo from './likeGo';

type TargetValue<T> = T | undefined | null;

type TargetType = HTMLElement | Element | Window | Document;

export type BasicTarget<T extends TargetType = Element> = (() => TargetValue<T>) | TargetValue<T> | MutableRefObject<TargetValue<T>>;

export function getTargetElement<T extends TargetType>(target: BasicTarget<T>, defaultElement?: T) {
  if (!target) {
    return defaultElement;
  }

  let targetElement: TargetValue<T>;

  if (typeof target === 'function') {
    targetElement = target();
  } else if ('current' in target) {
    targetElement = target.current;
  } else {
    targetElement = target;
  }

  return targetElement;
}

const getScrollTop = (el: Document | Element) => {
  if (el === document || el === document.body) {
    return Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
  }
  return (el as Element).scrollTop;
};

const getScrollHeight = (el: Document | Element) => {
  return (el as Element).scrollHeight || Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
};

const getClientHeight = (el: Document | Element) => {
  return (el as Element).clientHeight || Math.max(document.documentElement.clientHeight, document.body.clientHeight);
};

const getEleScrollHeight = (el: Document | Element) => {
  if (el === document || el === document.body) {
    return Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
  }
  let top = 0;
  let dom = el as HTMLElement;
  while (dom) {
    top += dom.scrollTop;
    dom = dom.parentElement as HTMLElement;
  }
  return top;
};

export { getClientHeight, getEleScrollHeight, getScrollHeight, getScrollTop, likeGo };

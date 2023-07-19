import type { MutableRefObject } from 'react';
import likeGo from './likeGo';
type TargetValue<T> = T | undefined | null;
type TargetType = HTMLElement | Element | Window | Document;
export type BasicTarget<T extends TargetType = Element> = (() => TargetValue<T>) | TargetValue<T> | MutableRefObject<TargetValue<T>>;
export declare function getTargetElement<T extends TargetType>(target: BasicTarget<T>, defaultElement?: T): TargetValue<T>;
declare const getScrollTop: (el: Document | Element) => number;
declare const getScrollHeight: (el: Document | Element) => number;
declare const getClientHeight: (el: Document | Element) => number;
declare const getEleScrollHeight: (el: Document | Element) => number;
export { getClientHeight, getEleScrollHeight, getScrollHeight, getScrollTop, likeGo };

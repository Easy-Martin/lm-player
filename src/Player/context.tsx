import React from 'react';
import type Api from './api';
import type VideoEventInstance from './event';

export interface IPlayerContextProps {
  /**
   * @description 用于获取微应用顶层的dom节点
   */
  container?: HTMLElement;
  api?: Api;
  event?: VideoEventInstance;
  isLive?: boolean;
  isFpsPlay: boolean;
  children: React.ReactNode;
}

export const Context = React.createContext<Omit<IPlayerContextProps, 'children'>>(null as any);

export function Provider({ children, ...props }: IPlayerContextProps) {
  return <Context.Provider value={{ ...props }}>{children}</Context.Provider>;
}

Provider.defaultProps = {
  getContainer: () => document.body,
};

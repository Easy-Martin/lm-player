import React from 'react';

const global = window as any;
if (!global._ICON_SCRIPT_URL) {
  global._ICON_SCRIPT_URL = {};
}

function loadScript(url: string) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = url;
    document.body.appendChild(script);
    script.addEventListener('load', () => {
      resolve(null);
    });
    script.addEventListener('error', (err) => {
      reject(err);
    });
  });
}

function registerIconFont(scriptUrl: string) {
  if (!global._ICON_SCRIPT_URL[scriptUrl]) {
    global._ICON_SCRIPT_URL[scriptUrl] = true;
    loadScript(scriptUrl).catch((e) => {
      global._ICON_SCRIPT_URL[scriptUrl] = false;
      console.error(e);
    });
  }
}

export interface IIconFontProps extends React.HTMLAttributes<HTMLSpanElement> {
  type?: string;
  className?: string;
  title?: string;
  style?: React.CSSProperties;
}

function IconFont({ type, className = '', title, style, ...props }: IIconFontProps) {
  return (
    <i className={`anticon ${className}`} title={title} style={style} {...props}>
      <svg width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false">
        <use xlinkHref={`#${type}`} />
      </svg>
    </i>
  );
}

IconFont.registerIconFont = registerIconFont;

export default IconFont;

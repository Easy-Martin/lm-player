import React from 'react';

interface IBarProps extends React.HTMLAttributes<HTMLSpanElement> {
  visibel?: boolean;
  className?: string;
  children?: React.ReactNode;
}

function Bar({ visibel = true, className = '', children, ...props }: IBarProps) {
  if (visibel === false) {
    return null;
  }
  return (
    <span className={`contraller-bar-item ${className}`} {...props}>
      {children}
    </span>
  );
}

export default Bar;

import React from "react";
export default function Bar({ visibel = true, className = "", children, ...props }) {
  if (visibel === false) {
    return null;
  }
  return (
    <span className={`contraller-bar-item ${className}`} {...props}>
      {children}
    </span>
  );
}

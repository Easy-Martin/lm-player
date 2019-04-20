import React from "react";

const videoContext = React.createContext(null);

export const Provider = videoContext.Provider;
export const Consumer = videoContext.Consumer;

export function videoDec(Component) {
  class ComponentWithVideoDec extends React.Component {
    render() {
      const { forwardRef, ...props } = this.props;
      return <Consumer>{context => <Component {...props} {...context} ref={forwardRef} />}</Consumer>;
    }
  }
  return React.forwardRef((props, ref) => <ComponentWithVideoDec {...props} forwardRef={ref} />);
}

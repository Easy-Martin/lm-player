import React from "react";
import { videoDec } from "../context";

@videoDec
class ErrorEvent extends React.Component {
  componentDidMount() {
    const { event } = this.props;
    event.on("error", this.errorHandle, false);
  }
  componentWillUnmount(){
    event.off("error", this.errorHandle, false);
  }
  errorHandle = e => {
    console.error(e);
  };
  render() {
    return null;
  }
}
export default ErrorEvent;

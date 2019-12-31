import React from 'react'
import PropTypes from 'prop-types'

const videoContext = React.createContext(null)

export const Provider = videoContext.Provider
export const Consumer = videoContext.Consumer

export function videoDec(Component) {
  class ComponentWithVideoDec extends React.Component {
    render() {
      const { forwardRef, ...props } = this.props
      return <Consumer>{context => <Component {...props} {...context} ref={forwardRef} />}</Consumer>
    }
  }
  ComponentWithVideoDec.propTypes = {
    forwardRef: PropTypes.ref
  }
  return React.forwardRef((props, ref) => <ComponentWithVideoDec {...props} forwardRef={ref} />)
}

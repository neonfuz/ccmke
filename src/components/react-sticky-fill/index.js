import React from 'react'
import PropTypes from 'prop-types'
import Stickyfill from 'stickyfill'
import supports from './css-supports'

const SSR = typeof window === 'undefined'

supports.shim()

const stickyfill = SSR ? null : Stickyfill()

class ReactStickyfill extends React.PureComponent {
  componentDidMount() {
    if (!SSR) stickyfill.add(this.stickyElement)
  }
  componentWillUnmount() {
    if (!SSR) stickyfill.remove(this.stickyElement)
  }

  _getPositionStyleValue() {
    if (SSR) return 'sticky'

    const isStickySupported = CSS.supports('position', 'sticky')

    return isStickySupported? 'sticky': '-webkit-sticky'
  }

  render() {
    const {top, zIndex, ...props} = this.props
    return (
      <div
        {...props}
        ref={(el) => { this.stickyElement = el }}
        style={{
          top: top || 0,
          zIndex: zIndex || 1,
          position: this._getPositionStyleValue(),
          ...this.props.style
        }}
      />
    )
  }
}

ReactStickyfill.displayName = 'ReactStickyfill'

ReactStickyfill.propTypes = {
  children: PropTypes.element,
  className: PropTypes.string
}

export default ReactStickyfill

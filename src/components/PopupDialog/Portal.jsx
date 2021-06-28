import React from 'react'
import ReactDom from 'react-dom'
import PropTypes from 'prop-types'

export default class Portal extends React.Component {
  static propTypes = {
    children: PropTypes.any,
    onRef: PropTypes.func
  }

  componentDidMount () {
    this.element = document.createElement('div')
    document.body.appendChild(this.element)
    this.forceUpdate() // 触发render
  }

  renderPortal () {
    const { onRef, ...props } = this.props
    return (
      <div ref={onRef} {...props} />
    )
  }

  render() {
    if(!this.element) return null
    return ReactDom.createPortal(
      this.renderPortal(),
      this.element
    )
  }
}

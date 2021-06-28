import React from 'react'
import PropTypes from 'prop-types'
import Portal from './Portal'
import cx from 'classnames'
import style from './PopupDialog.css'

const CloseButton = ({ onClick, className }) => (
  <div className={className} onClick={onClick}>X</div>
)

class PopupDialog extends React.Component {
  static propTypes = {
    /** 弹窗样式 **/
    className: PropTypes.string,
    /** 弹窗遮罩样式 **/
    maskClassName: PropTypes.string,
    /** 弹窗内容样式 **/
    contentClassName: PropTypes.string,
    /** 控制弹窗显示 **/
    show: PropTypes.bool,
    /** 标题 **/
    title: PropTypes.string,
    /** 标题样式 **/
    titleClassName: PropTypes.string,
    /** 是否有关闭按钮 **/
    hasCloseButton: PropTypes.bool,
    /** 关闭按钮样式 **/
    closeButtonClassName: PropTypes.string,
  }

  static defaultProps = {
    hasCloseButton: true
  }

  render() {
    const { 
      className, 
      maskClassName, 
      contentClassName, 
      show, 
      title, 
      titleClassName, 
      children, 
      hasCloseButton, 
      closeButtonClassName 
    } = this.props

    return (
      <Portal className={className}>
        {show && <div className={cx(style.mask, maskClassName)}></div>}
        {show && (
          <div className={cx(style.content, contentClassName)}>
            {title && <div className={cx(style.title, titleClassName)}>{title}</div>}
            {children}
            {hasCloseButton && <CloseButton className={closeButtonClassName} />}
          </div>
        )}
      </Portal>
    )
  }
}

export default PopupDialog
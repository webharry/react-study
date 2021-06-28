import React from 'react'
import PopupDialog from '../components/PopupDialog'

class popupDialogDemo extends React.Component {
  constructor () {
    super()
    this.state = {
      show: false
    }
  }

  handleShow = () => {
    this.setState({
      show: true
    })
  }

  render () {
    return (
      <div>
        <button onClick={this.handleShow}>显示弹窗</button>
        <PopupDialog show={this.state.show} hasCloseButton={true} />
      </div>
    )
  }
}

export default popupDialogDemo
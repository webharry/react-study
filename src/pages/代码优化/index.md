# 一、组件拆分
## 1、当组件代码嵌套比较深时，要考虑拆分成多个组件，保持代码行数较少实现功能。
比如，将数组渲染单独拆分成一个子组件:

父组件：
```js
import React from 'react'
import Item from './item'

class Demo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: ['123', '345']
    }
  }

  getItem = () => {  // 将有代码逻辑的DOM节点抽离成一个函数getItem返回，达到拆分代码目的!!!
    return {
      this.state.list.map((item, index) => {
        <Item content={item} key={index} />
      })
    }
  }

  render() {
    return (
      <div>
        { this.getItem() }
      </div>
    )
  }
}

export default Demo
```

子组件Item：
```js
import React from 'react'
class Item extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { content } = this.props
    return (
      <div>{content}</div>
    )
  }
}

export default Item
```

# 二、代码优化
## 1、setState可以传入一个函数作为参数, 此时setState是异步的
```js
import React from 'react'
class Demo extends React.Component {
  constructor() {
    this.state = {
      inputValue: '',
      count: 1
    }
  }

  handleInputChange = (e) => {
    const value = e.target.value // this.setState接收一个函数作为参数时即是异步的，这里要先保存一份input输入框的value值才可以
    this.setState(() => ({
      inputValue: value
    }))
  }

  handleChange = () => {
    this.setState((prevState) => ({ // 这里的参数prevState就是this.state
      count: prevState.count+1
    }))
  }

  render() {
    constt { count, inputValue } = this.state
    return (
      <div>
        <input value={inputValue} onChange={handleInputChange} />
        <button onClick={this.handleChange}></button>
        <div>{count}</div>
      </div>
    )
  }
}
```
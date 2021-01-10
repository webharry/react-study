react快速开始
# 安装
```shell
npx create-react-app my-app
```
安装成功后，进入新建项目my-app根目录，运行npm run start进行开发。

# react中的组件定义
1、组件通过class类继承Component编写组件，类中通过render方法编写dom结构，通过constructor函数初始化，this.state设置数据初始值，export导出组件。以App.js文件为例（App.js是项目入口文件）：
```js
import React, {  Component } from 'react';
import Navbar from './components/Navbar';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            // name: 'xxxx',
            count: 0,
            list: [1, 2, 3]
        }
    }
    
    render() {
        const { count, list } = this.state;
        return (
          <Navbar/>
        )
    }
}

export default App;
```

# react中的state
react中通过this.state定义数据初始值，想要更改state中的数据必须通过this.setState()方法进行更改。
```js
import React, { Fragment } from 'react';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            count:0
        }
    }
    
    changeCount = () => {
        this.setState({
            count: ++this.state.count
        })
    }
    
    render(h) {
        return (
            <div className="btn-demo">
                <p>{this.state.count}</p>
                <button onClick={this.changeCount}>改变count值</button>
            </div>
        )
    }
}

export default App;
```

# react的props传值
**父传子通过props**：react通过props进行组件之间通信,子组件通过this.props接收父组件的数据
**子传父通过回调函数**：子组件通过调用父组件传递的回调函数与父组件通信。

例子：父组件 Father ：向子组件 Son 传递名称为title的props属性：
```js
import React, {  Component } from 'react';

class Father extends React.Component {
  this.state = {
    title: 'React入门'
  }

  changeHandle = () => {
    this.setState({
      title:'恭喜你入门啦！'
    })
  }

  render() {
    const { title } = this.state 
    return (
      <Son title={title} changeTitle={this.changeHandle} />
    )
  }
}

export default Father
```

子组件接收props值：title
```js
import React, {  Component } from 'react';

class Son extends React.Component {
  render() {
  const { title } = this.props

  changeHandle = () => {
    this.props.changeTitle() //调用父组件传递的回调函数
  }

  return (
    <div>
      父组件传递的title值是：{title}
      <button obClick={this.changeHandle}></button>
    </div>
  )
  }
}

export default Son
```

# react中的条件渲染
react中if条件渲染方式有2种：
1、使用三元运算符
```js
<p>{this.state.count % 2 === 0 ? '双数':'单数'}</p>
```
2、使用if运算符，定义方法
```js
changeCount = () => {
    if(this.state.count % 2 === 0){
      return '双数';
    }
    return '单数';
}
```

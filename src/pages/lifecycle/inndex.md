# 生命周期和钩子函数

## 生命周期三个状态：
**Mounting**    已插入真实DOM
**Updating**    正在被重新渲染
**Unmounting**  已移出真实DOM


## 生命周期钩子函数：
**componentWillMount**  在渲染前调用，在客户端也在服务端。
**componentDidMount**   在第一次渲染后调用，可以在这个方法中调用setTimeout，setInterval或者发送AJAX请求等操作（防止异步操作阻塞UI）。
**componentWillReceiveProps**  在组件接收到一个新的prop（更新后）时调用。这个方法在初始化render时不会调用。
**shouldComponentUpdate**  返回一个布尔值。在组件接收到新的props或者state时被调用。在初始化时或者使用forceUpdate时不被调用。可以在你确认不需要更新组件时调用。
**componentWillUpdate**  在组件接收到新的props或者state但还没有render时被调用。在初始化时不会被调用。
**componentDidUpdate**  在组件完成更新后立即调用。在初始化时不会被调用。
**componentWillUnmount** 在组件从DOM中移除之前立刻被调用。

## setState更新是同步还是异步
1、setState会引起视图的重绘
2、可能是异步更新，想要在更新数据后拿到结果，可以通过传递一个回调函数的方式，比如：
```js
this.setState({
  count:this.state.count+1
},()=> {
  console.log(this.state.count) // 可以读取到count+1后的值
})
```
3、state的更新可能是异步的，出于性能考虑，React会把多个setState（）调用合并成一个调用。
因为this.props 和 this.state 可能会异步更新，所以你不要依赖他们的值来更新下一个状态。解决办法是传递一个函数：
```js
this.setState((state,props) => {
  count: state.count + props.increment
})
```
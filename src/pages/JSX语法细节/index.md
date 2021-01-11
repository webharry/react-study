# JSX语法细节
1、label与input标签交互，使用HTMLFor属性实现点击label元素自动聚焦input输入框
```js
class MyInput extends React.Component {
  render() {
    return (
      <label htmlFor="insertArea">名称</label>
      <input id="insertArea" />
    )
  }
}
```
2、标签不做转义，使用dangerouslySetInnerHTML属性
```js
<ul>
  {
    this.state.list.map((item, index) => {
      return (
        <li
         key={index}
         dangerouslySetInnerHTML={{__html: item}}>
        </li>
      )
    })
  }
</ul>
```
# 自定义select组件
## 实现思路很简单：
* 首先，需明确组件的功能：要实现下拉选择功能，组件接收参数是一组下拉数据option，组件输出是当前选中数据。
* 然后，编写DOM结构和样式，通过input、div标签实现选择框和下拉框，把两者包含在一个父div容器中方便实现定位。
* 最后，完成js交互处理，点击下拉框获取数据回显input中；回传给父组件；下拉框的显示和隐藏等。

详细实现见源码。

## 知识点拓展
1、react中的refs
官方文档：[Refs & DOM](https://zh-hans.reactjs.org/docs/refs-and-the-dom.html)中说，refs提供一种方式，允许我们访问DOM节点或在render方法中创建的React元素。
* refs通过 **React.createRef()** 创建,例如：this.selectBox = React.createRef();
* 通过**ref**属性附加到react元素。
* 访问react元素时，通过this.selectBox的current属性获取引用节点。
```js
class Select extends Component {
    constructor(){
        super();
        this.selectBox = React.createRef();
    }

    clickOutsideHandler = () => {
        console.log(this.selectBox.current);
    }

    render(){
        <div className="select-box" ref={this.selectBox}>
            
        </div>
    }
}
```

2、react中的生命周期
* componentDidMount() 方法在组件已经渲染到DOM中运行
* componentWillUnmount 在组件销毁前运行

3、通过npm包classnames实现动态class
[classnames使用教程](https://www.npmjs.com/package/classnames)


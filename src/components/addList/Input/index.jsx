import React from "react";

class Input extends React.Component {
    constructor(){
        super();
        this.inputRef = React.createRef();
    }

    add = () => {
        const { addList } = this.props;
        let val = this.inputRef.current.value;
        if(!val) {
            alert('请输入数据！');
            return;
        };
        addList(val);
        this.inputRef.current.value = '';
    }

    render() {
        const { list } = this.props;
        return (
            <div>
                <input ref={this.inputRef}></input>
                <button onClick={this.add}>add #{list.length}</button>
            </div>
        );
    }
}

export default Input;
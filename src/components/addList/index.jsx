import React from "react";
import "./index.css";
import Input from "./Input";
import List from "./List";

class AddList extends React.Component {
    constructor(){
        super();
        this.state = {
            list:[
                "tony",
                "sum",
                "harry",
                "tom"
            ]
        };
    }

    addList = (val) => {
        const { list } = this.state;
        list.unshift(val);
        this.setState({list});
    }

    render() {
        const { list } = this.state;
        return (
            <div className="add-list">
                <h1>Add Todo List Demo</h1>
                <Input list={list} addList={this.addList}></Input>
                <List list={list}></List>
            </div>
        );
    }
}

export default AddList;
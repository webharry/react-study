import React from 'react';

class List extends React.Component {
    constructor(){
        super();
        this.state = {
            message: 'List'
        }
    }

    render() {
        const { message } = this.state;
        return (
            <div>{message}</div>
        )
    }
}

export default List;
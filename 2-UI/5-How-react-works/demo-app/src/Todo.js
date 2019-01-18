import React, { Component } from 'react'

export default class Todo extends Component {

    componentDidMount() {
        console.log("Todo::componentDidMount");
    }
    componentWillUnmount() {
        console.log("Todo::componentWillUnmount");
    }

    componentDidUpdate(){
        console.log("Todo::componentDidUpdate");
    }

    shouldComponentUpdate(){
        return false;
    }

    render() {
        console.log("Todo::render()");  
        let { value } = this.props;
        return (
            <li>
                {value.title} - {value.completed} - <span onClick={e => this.props.onDelete(value.id)} className="badge badge-danger">X</span>
            </li>
        )
    }
}

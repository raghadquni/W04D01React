import React, { Component } from 'react'
import "./style.css";


class TodoItem extends React.Component { // create component
    constructor(props) {
        super(props); // عشان اربطها مع التودو
    }
    render() {
        return (
            <>
            <li className= "todoItem">
                <h3 className="name"> {this.props.task.name}</h3>
                <h3 className="close" onClick = {() => this.props.handleDelete(this.props.task.id)}>X</h3>

            </li>
            </> 
        );
    }
}

export default TodoItem;
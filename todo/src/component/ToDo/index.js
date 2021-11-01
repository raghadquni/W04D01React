import React, { Component } from 'react'
import TodoItem from '../TodoItem'; // return TodoItem component to Todo component...
import "./style.css";



export class index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: [
                {id:1, name: "paly" },
                {id:2, name: "sleep" },
            ], // ابي اظهر كل ابجيكت تودو لحالها .. سويتها بس تودو ايتم
        };
    }

    handleSubmit = (e) => {
        e.preventDefault(); // dont refresh for page
        const todo = {
            id: this.state.todos.length + 1,
            name: e.target.task.value,
        }
        this.setState({ todos: [...this.state.todos, todo]});
        e.target.task.value = "";

    
    }

    handleDelete = (id) => {
        console.log("id"); // شوف اذا وصل للايتم او لا
        this.setState({todos: this.state.todos.filter((todo) => todo.id !== id ) }); // طلع لي بالاراي الجديده كل الايتم الا الايدي المحدد
    };

    render() {
        return (
            <div className="todo">
                
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="task"/>
                    <button>Add Task</button>
                </form>
                <ul>
                    {this.state.todos.map((todo,i) => (
                    <TodoItem 
                    task = {todo} 
                    key={i} 
                    handleDelete={this.handleDelete}/> 
                   
                    ))}
                </ul>
               
            </div>
        );
    }
}


export default index
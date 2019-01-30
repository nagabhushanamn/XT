import React, { Component } from 'react'
import Todo from './Todo';

export default class TodoApp extends Component {
    constructor() {
        super();
        this.state = {
            todos: [
                { id: 1, title: 'item-1', completed: 'true' },
                { id: 2, title: 'item-2', completed: 'true' },
                { id: 3, title: 'item-3', completed: 'true' }
                // ...this.loadTodos()
            ]
        }
    }
    loadTodos() {
        let arr = [];
        for (let i = 1; i <= 1000; i++) {
            arr.push({ id: i, title: `item-${i}`, completed: 'false' })
        }
        return arr;
    }
    handleNewTodo() {
        let title = this.refs.title.value;
        let idx = this.refs.idx.value;
        let { todos } = this.state;
        TodoApp.nextId++;
        todos.splice(Number.parseInt(idx, 10), 0, { id: TodoApp.nextId, title, completed: 'false' }) // insert todo by index
        this.setState({ todos })
    }
    deleteTodo(id) {
        let { todos } = this.state;
        todos = todos.filter((todo) => todo.id !== id)
        this.setState({ todos })
    }
    renderTodos() {
        let { todos } = this.state;
        return todos.map((todo, idx) => {
            let rn = Math.random();
            return <Todo key={todo.id} value={todo} onDelete={id => this.deleteTodo(id)} />
        })
    }
    render() {
        return (
            <div>
                <div>
                    <div className="card card-default">
                        <div className="card-header">Todo App</div>
                        <div className="card-body">
                            <hr />
                            <input placeholder="New Title" ref="title" />
                            <input type="number" placeholder="index" ref="idx" />
                            <button onClick={e => this.handleNewTodo()}>Add</button>
                            <hr />
                            <ul>
                                {this.renderTodos()}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

TodoApp.nextId = 3;
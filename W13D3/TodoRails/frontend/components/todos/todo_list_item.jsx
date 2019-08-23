import React from 'react';
import { allTodos } from '../../reducers/selectors';

class TodoListItem extends React.Component {
    constructor(props){
        // debugger
        super(props)
        // this.todos = allTodos(props.prop.getState())
        // debugger
    }

    // const todosLis = this.todos.map((todo) => {
    //     return <li key={todo.id}> {todo.title} </li>
    // })
    render(){
        return <li key={this.props.id}> {this.props.todo.title}: {this.props.todo.body}</li>
    }
}

export default TodoListItem
import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from '../todo_list/todo_form'

class TodoList extends React.Component {


    render() {
        const { todos, receiveTodo} = this.props;

    

        const todoItems = todos.map( todo => (
                <TodoListItem
                    key={`todo-list-item${todo.id}`}
                    todo={todo}
                    receiveTodo={ receiveTodo } />
            )
            );
            
        return(<div>
            <ul className="todo-list">
                { todoItems }
                <TodoForm receiveTodo={ receiveTodo } />
            </ul>
        </div>)
    }


}




// export default (() => <div>
//     <h3>Todo List goes here!</h3>
//     <ul>
//         <TodoListItem />
//     </ul>
// </div>)

export default TodoList
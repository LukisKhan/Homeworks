export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';
import * as APIUtil from '../util/todo_api_util'

export const receiveTodos = (todos) => ({
    type: RECEIVE_TODOS,
    todos: todos
});

export const receiveTodo = (todo) => ({
    type: RECEIVE_TODO,
    todo: todo
});

export const fetchTodos = () => (dispatch) => {
    return APIUtil.fetchTodos().then(todos => 
        dispatch(receiveTodos(todos))
    );
};

// export const fetchTodos = () => dispatch => (
//     TodoAPIUtil.fetchTodos().then(todos => dispatch(receiveTodos(todos)))
// );

window.receiveTodos = receiveTodos;
window.receiveTodo = receiveTodo;
window.fetchTodos = fetchTodos;
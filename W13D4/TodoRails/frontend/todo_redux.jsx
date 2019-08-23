import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import Root from './components/root'
import { fetchTodos } from './actions/todo_actions'
// import { fetchTodos } from './util/todo_api_util'


window.fetchTodos = fetchTodos;
const store = configureStore;
window.store = store;
document.addEventListener("DOMContentLoaded", function () {
    // store.dispatch((dispatch) => {
    //     console.log('If this prints out, the thunk middleware is working!')
    // });
    ReactDOM.render(<Root store= { store } />, document.getElementById('content'));
});
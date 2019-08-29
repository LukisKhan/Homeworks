import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store';
import Root from './components/root'
import { fetchBenches } from "./actions/bench_actions"

document.addEventListener("DOMContentLoaded", () => {
    let store;
    if(window.currentUser) {
        const preloadedState = {
            session: { id: window.currentUser.id },
            entities: { users: {[window.currentUser.id]: window.currentUser} }
        };
        store = configureStore(preloadedState);
    } else {
        store = configureStore();
    }

    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store} />, root);
});


import { login, logout, signup } from './util/session_api_util';
// window.$ = $;
let store = configureStore();
window.getState = store.getState;
window.dispatch = store.dispatch;
window.login = login;
window.logout = logout;
window.signup = signup;
window.fetchBenches = fetchBenches;
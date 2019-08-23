export const thunk = store => next => action => {
    if (typeof action === "function") {
        return action(store.dispatch, store.getState);
    } else {
        debugger
        return next(action);
    }
};
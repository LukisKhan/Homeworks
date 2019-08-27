const thunk = store => next => action => {
  if (typeof action === "function") {
    console.log("this is in thunk asdfas");
    return action(store.dispatch, store.getState);
  } else {
    return    next(action);
  }
};

export default thunk;
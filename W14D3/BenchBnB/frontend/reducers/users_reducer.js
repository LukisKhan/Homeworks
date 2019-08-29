import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  // debugger;
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      const newState = Object.assign({}, state, { [action.user.id]: action.user })
      debugger;
      return newState;
    default:
      return state;
  }
}
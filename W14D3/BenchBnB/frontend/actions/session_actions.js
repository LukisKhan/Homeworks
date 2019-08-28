// login(user)(thunk action creator)
// logout()(thunk action creator)
// signup(user)(thunk action creator)

// receiveCurrentUser(currentUser)(regular action creator)
// logoutCurrentUser()(regular action creator)
// receiveErrors(errors)(regular action creator)


// import { signup, login, logout } from '../utils/session';
import * as Util from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';

const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user,
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
});

const receiveErrors = (errors) => ({
    type: RECEIVE_ERRORS,
    errors,
})

export const createNewUser = formUser => dispatch => signup(formUser)
    .then(user => dispatch(receiveCurrentUser(user)));

export const login = formUser => dispatch => Util.login(formUser)
    .then(user => dispatch(receiveCurrentUser(user)));

export const logout = () => dispatch => Util.logout()
    .then(() => dispatch(logoutCurrentUser()));

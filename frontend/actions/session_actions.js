import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT = 'LOGOUT';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const actionLogout = () => ({ type: LOGOUT });

export const receiveSessionErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});


export const login = user => dispatch => (
  APIUtil.ajaxLogin(user).then(
    user => dispatch(receiveCurrentUser(user)),
    res => dispatch(receiveSessionErrors(res.responseJSON))
  )
);

export const logout = () => dispatch => (
  APIUtil.ajaxLogout().then(
    () => dispatch(actionLogout()),
    res => dispatch(receiveSessionErrors(res.responseJSON))
  )
);

export const signup = user => dispatch => (
  APIUtil.ajaxSignUp(user).then(
    user => dispatch(receiveCurrentUser(user)),
    res => dispatch(receiveSessionErrors(res.responseJSON))
  )
);

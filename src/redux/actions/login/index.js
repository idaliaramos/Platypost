import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER_START,
  REQUEST_API_DATA
} from './types';

export const emailChanged = text => ({
  type: EMAIL_CHANGED,
  payload: text,
});

export const passwordChanged = text => ({
  type: PASSWORD_CHANGED,
  payload: text,
});
export const loginUserSuccess = user => ({
  type: LOGIN_USER_SUCCESS,
  payload: user,
});
export const loginUserStart = () => ({
  type: LOGIN_USER_START,
});
export const loginUserFail = error => ({
  type: LOGIN_USER_FAIL,
  payload: error,
});
//QUESTION:do I add the action here for the request>
export const apiCall=(email, password) => ({
  type: REQUEST_API_DATA,
  payload: {email, password}
});

// loginUser calls the api and fires actions for loading/errors
// export const loginUser = (email, password) => dispatch => dispatch(LoginThunk(email, password));

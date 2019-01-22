import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER_START,
} from '../../actions/login/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  user: '',
  error: '',
  loading: false,
};
export default function AuthReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case LOGIN_USER_SUCCESS:
      console.log('success reducer');
      return {
        ...state,
        user: action.payload,
        error: false,
        loading: false,
      };
    case LOGIN_USER_FAIL:
      console.log('failed reducer');
      return {
        ...state,
        error: 'Authentication Failed',
        password: '',
        loading: false,
      };
    case LOGIN_USER_START:
      console.log('starting');
      return { ...state, loading: true, error: false };
    default:
      return state;
  }
}

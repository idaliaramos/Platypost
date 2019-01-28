import { takeLatest, all, put, call } from 'redux-saga/effects'
import { REQUEST_API_DATA, LOGIN_USER_START } from '../actions/login/types'
import {
  loginUserSuccess,
  loginUserStart,
  loginUserFail
} from '../actions/login'
import { loginUserRequest } from '../../api_requests/LoginUserRequest'
import * as NavigationService from '../../../NavigationService'
// import { NavigationActions } from 'react-navigation';
function* loginSaga(action) {
  yield put(loginUserStart())
  try {
    //  QUESTION: how does it get the email and password?
    const { email, password } = action.payload
    const data = yield call(loginUserRequest, email, password)
    if (data) {
      console.log(data, 'data')
      yield put(loginUserSuccess())
      //  yield put(NavigationService.navigate({ routeName: 'LOGGED_IN' }));
      NavigationService.navigate('LOGGED_IN')
    }
    //  TODO:else render error
  } catch {
    yield put(loginUserFail())
  }
}
export function* root() {
  yield all([takeLatest(REQUEST_API_DATA, loginSaga)])
}

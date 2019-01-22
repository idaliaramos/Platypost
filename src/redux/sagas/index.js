import {root as loginSagas}  from './LoginSagas'
import {all, fork} from 'redux-saga/effects'
export default function* rootSaga() {
  yield all([
    fork(loginSagas)
  ])
}

import { all, fork } from 'redux-saga/effects';
import { root as loginSagas } from './LoginSagas';

export default function* rootSaga() {
  yield all([fork(loginSagas)]);
}

import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { persistStore } from 'redux-persist'
import rootReducer from '../redux/reducers/index' // the value from combineReducers
import rootSaga from '../redux/sagas'

const sagaMiddleware = createSagaMiddleware()
export const store = createStore(
  rootReducer,
  {},
  applyMiddleware(sagaMiddleware)
)
export const persistor = persistStore(store)
sagaMiddleware.run(rootSaga)

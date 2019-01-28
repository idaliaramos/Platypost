import React, { Component } from 'react'
import firebase from 'firebase'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
// import RNLanguages from 'react-native-languages';
import AppNavigator from './AppNavigator'
import Spinner from './src/components/common/Spinner'
import { persistor, store } from './src/store/index'

class App extends Component {
  render() {
    // console.log('language', RNLanguages);
    // Initialize Firebase
    // TODO: need to separate this code
    const config = {
      apiKey: 'AIzaSyCzREYFYqH5sfLBvqtn19NwomjfhmOCwZk',
      authDomain: 'platypost-187722.firebaseapp.com',
      databaseURL: 'https://platypost-187722.firebaseio.com',
      projectId: 'platypost-187722',
      storageBucket: 'platypost-187722.appspot.com',
      messagingSenderId: '47284153716'
    }
    firebase.initializeApp(config)

    return (
      // adding store enhancer applyMiddleware with thunks
      <Provider store={store}>
        <PersistGate loading={<Spinner />} persistor={persistor}>
          <AppNavigator />
        </PersistGate>
      </Provider>
    )
  }
}

export default App

import { createAppContainer, createStackNavigator } from 'react-navigation'
import React, { Component } from 'react'
import LoginScreen from './src/components/features/login/LoginScreen'
import LoggedinScreen from './src/components/features/login/LoggedinScreen'
import AddAddress1 from './src/components/features/create_postcard/AddAddress1'
import AddAddress2 from './src/components/features/create_postcard/AddAddress2'
import Message from './src/components/features/create_postcard/Message'
import Payment from './src/components/features/create_postcard/Payment'
// import  NavigationService from './NavigationService'
import * as NavigationService from './NavigationService'
import {
  LOGGED_IN,
  ADD_ADDRESS_1,
  ADD_ADDRESS_2,
  MESSAGE,
  PAYMENT,
  MAIN
} from './src/constants/navigation/NavigationConstants'

const MainNavigator = createStackNavigator({
  // MAIN: { screen: LoginScreen },
  MAIN: { screen: LoggedinScreen },
  LOGGED_IN: {
    screen: LoggedinScreen
  },
  ADD_ADDRESS_1: {
    screen: AddAddress1
  },
  ADD_ADDRESS_2: {
    screen: AddAddress2
  },
  MESSAGE: {
    screen: Message
  },
  PAYMENT: {
    screen: Payment
  }
})
const AppContainer = createAppContainer(MainNavigator)

class AppNavigator extends Component {
  componentDidMount() {
    // Error: errrs oout when this.navigator is being attemeted to log
    NavigationService.setNavigator(this.navigator)
  }

  render() {
    return (
      <AppContainer
        ref={nav => {
          this.navigator = nav
        }}
      />
    )
  }
}

export default AppNavigator

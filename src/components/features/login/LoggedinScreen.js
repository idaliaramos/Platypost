import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Button from '../../common/Button'
import Container from '../../common/Container'
import * as NavigationService from '../../../../NavigationService'
import * as postcardConstants from '../../../constants/create_postcard/PostcardConstants'

class LoggedinScreen extends Component {
  state = {
    image: ''
  }

  onSubmit = () => {
    NavigationService.navigate('ADD_ADDRESS_1')
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>{postcardConstants.UPLOAD_IMAGE}</Text>
        <Container />
        <Button onPress={this.onSubmit}>{postcardConstants.NEXT}</Button>
      </View>
    )
  }
}
export default LoggedinScreen

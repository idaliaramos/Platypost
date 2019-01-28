import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Button from '../../common/Button'
import Container from '../../common/Container'
import StyledInput from '../../common/StyledInput'
import StyledFormLabel from '../../common/StyledFormLabel'
import * as postcardConstants from '../../../constants/create_postcard/PostcardConstants'
import * as NavigationService from '../../../../NavigationService'

class AddAddress2 extends Component {
  state = {
    from: '',
    address2: ''
  }

  onSubmit = () => {
    NavigationService.navigate('MESSAGE')
  }

  render() {
    const { from, address2 } = this.state
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>{postcardConstants.SENDER_ADDRESS}</Text>
        <Container>
          <StyledFormLabel>Name</StyledFormLabel>
          <StyledInput
            onChangeText={text => this.setState({ from: text })}
            value={from}
          />
          <StyledFormLabel>Address</StyledFormLabel>
          <StyledInput
            onChangeText={text => this.setState({ address2: text })}
            value={address2}
          />
        </Container>
        <Button onPress={this.onSubmit}>{postcardConstants.NEXT}</Button>
      </View>
    )
  }
}
export default AddAddress2

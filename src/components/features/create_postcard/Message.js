import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Button from '../../common/Button'
import MainTitle from '../../common/MainTitle'
import Container from '../../common/Container'
import StyledInput from '../../common/StyledInput'
import StyledFormLabel from '../../common/StyledFormLabel'
import * as postcardConstants from '../../../constants/create_postcard/PostcardConstants'
import * as NavigationService from '../../../../NavigationService'
class Message extends React.Component {
  state = {
    message: ''
  }
  onSubmit = () => {
    NavigationService.navigate('PAY')
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>{postcardConstants.ENTER_MESSAGE}</Text>
        <Container>
          {/* <StyledFormLabel>Enter Message</StyledFormLabel> */}
          <StyledInput
            onChangeText={text => this.setState({ message: text })}
            value={this.state.address1}
            multiline={true}
            numberOfLines={6}
            editable={true}
            maxLength={4}
          />
          =
        </Container>
        <Button onPress={this.onSubmit}>{postcardConstants.NEXT}</Button>
      </View>
    )
  }
}
export default Message

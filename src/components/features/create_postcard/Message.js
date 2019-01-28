import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Button from '../../common/Button'
import Container from '../../common/Container'
import StyledInput from '../../common/StyledInput'
import * as postcardConstants from '../../../constants/create_postcard/PostcardConstants'
import * as NavigationService from '../../../../NavigationService'

class Message extends Component {
  state = {
    message: ''
  }

  onSubmit = () => {
    NavigationService.navigate('PAY')
  }

  render() {
    const { message } = this.state
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>{postcardConstants.ENTER_MESSAGE}</Text>
        <Container>
          {/* <StyledFormLabel>Enter Message</StyledFormLabel> */}
          <StyledInput
            onChangeText={text => this.setState({ message: text })}
            value={message}
            multiline={true}
            numberOfLines={6}
            editable={true}
            maxLength={4}
          />
        </Container>
        <Button onPress={this.onSubmit}>{postcardConstants.NEXT}</Button>
      </View>
    )
  }
}
export default Message

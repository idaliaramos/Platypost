import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, View } from 'react-native'
import Button from '../../common/Button'
import Container from '../../common/Container'
import StyledInput from '../../common/StyledInput'
import * as postcardConstants from '../../../constants/create_postcard/PostcardConstants'
import * as NavigationService from '../../../../NavigationService'
import { addMessage } from '../../../redux/actions/create_postcard'

class Message extends Component {
  state = {
    message: ''
  }

  onSubmit = () => {
    const { message } = this.state
    console.log(message, 'mess')
    this.props.addMessage(message)
    NavigationService.navigate('PAYMENT')
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
            multiline
            numberOfLines={6}
            editable
            maxLength={40}
          />
        </Container>
        <Button onPress={this.onSubmit}>{postcardConstants.NEXT}</Button>
      </View>
    )
  }
}
const mapStateToProps = state => {
  const { senderInfo } = state.postCard

  return {
    senderInfo
  }
}
export default connect(
  mapStateToProps,
  { addMessage }
)(Message)

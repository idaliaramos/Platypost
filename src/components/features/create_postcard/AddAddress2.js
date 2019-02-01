import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, View } from 'react-native'
import Button from '../../common/Button'
import MainTitle from '../../common/MainTitle'
import Container from '../../common/Container'
import StyledInput from '../../common/StyledInput'
import ShortInput from '../../common/ShortInput'
import StyledFormLabel from '../../common/StyledFormLabel'
import * as postcardConstants from '../../../constants/create_postcard/PostcardConstants'
import * as NavigationService from '../../../../NavigationService'
import { addSenderAddress } from '../../../redux/actions/create_postcard'

class AddAddress2 extends Component {
  state = {
    address: '',
    senderName: ''
    // error: ''
  }

  onSubmit = () => {
    console.log('this.state', this.state)
    const { senderName, address } = this.state
    // TODO: add more validation

    if (senderName && address) {
      console.log('inside')
      const senderInfo = { senderName, address }
      this.props.addSenderAddress(senderInfo)
      console.log('after')
      NavigationService.navigate('MESSAGE')
      this.setState({ error: false })
    } else {
      this.setState({ error: true })
    }
  }

  render() {
    const { senderName, address } = this.state
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>{postcardConstants.SENDER_ADDRESS}</Text>
        <Container>
          <StyledFormLabel>Name</StyledFormLabel>
          <StyledInput
            onChangeText={text => this.setState({ senderName: text })}
            value={senderName}
          />
          <StyledFormLabel>Address</StyledFormLabel>
          <StyledInput
            onChangeText={text => this.setState({ address: text })}
            value={address}
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
  { addSenderAddress }
)(AddAddress2)

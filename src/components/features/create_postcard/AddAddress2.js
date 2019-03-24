import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text } from 'react-native'
import Button from '../../common/Button'
import Container from '../../common/Container'
import GeneralContainer from '../../common/GeneralContainer'
import StyledInput from '../../common/StyledInput'
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
    const { senderName, address } = this.state
    const { addSenderAddress } = this.props
    // TODO: add more validation
    if (senderName && address) {
      const senderInfo = { senderName, address }
      addSenderAddress(senderInfo)
      NavigationService.navigate('MESSAGE')
      this.setState({ error: false })
    } else {
      this.setState({ error: true })
    }
  }

  render() {
    const { senderName, address } = this.state
    const { senderInfo } = this.props
    return (
      // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <GeneralContainer>
        <Text>{postcardConstants.SENDER_ADDRESS}</Text>
        <Container>
          <StyledFormLabel>Name</StyledFormLabel>
          <StyledInput
            onChangeText={text => this.setState({ senderName: text })}
            value={senderName || senderInfo.senderName}
          />
          <StyledFormLabel>Address</StyledFormLabel>
          <StyledInput
            onChangeText={text => this.setState({ address: text })}
            value={address || senderInfo.address}
          />
        </Container>
        <Button onPress={this.onSubmit}>{postcardConstants.NEXT}</Button>
      </GeneralContainer>
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

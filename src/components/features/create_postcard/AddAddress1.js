import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, View } from 'react-native'
import MainTitle from '../../common/MainTitle'
import GeneralContainer from '../../common/GeneralContainer'
import Button from '../../common/Button'
import Container from '../../common/Container'
import StyledInput from '../../common/StyledInput'
import StyledFormLabel from '../../common/StyledFormLabel'
import * as postcardConstants from '../../../constants/create_postcard/PostcardConstants'
import * as NavigationService from '../../../../NavigationService'
import { addReceiverAddress } from '../../../redux/actions/create_postcard'

class AddAddress1 extends Component {
  state = {
    receiverAddress: undefined,
    receiverName: undefined
    // error: ''
  }

  onSubmit = () => {
    const { receiverName, receiverAddress } = this.state
    const { receiverInfo, addReceiverAddress } = this.props
    // TODO: add more validation
    const name = receiverName || receiverInfo.name
    const address = receiverAddress || receiverInfo.address
    const info = { name, address }
    if (name && address) {
      addReceiverAddress(info)
      NavigationService.navigate('MESSAGE')
      this.setState({ error: false })
    } else {
      this.setState({ error: true })
    }
  }

  render() {
    const { receiverName, receiverAddress } = this.state
    const { receiverInfo } = this.props
    const name = receiverName || receiverInfo.name
    const address = receiverAddress || receiverInfo.address
    return (
      <GeneralContainer>
        <Text/>
        <MainTitle>{postcardConstants.RECEIVER_ADDRESS}</MainTitle>
        <Container>
          <StyledFormLabel>Name</StyledFormLabel>
          <StyledInput
            onChangeText={text => this.setState({ receiverName: text })}
            value={receiverName || receiverInfo.name}
          />
          <StyledFormLabel>Address</StyledFormLabel>
          <StyledInput
            onChangeText={text => this.setState({ receiverAddress: text })}
            value={receiverAddress || receiverInfo.address}
          />
        </Container>
        <Button disabled={!name && !address} onPress={this.onSubmit}>
          {postcardConstants.NEXT}
        </Button>
      </GeneralContainer>
    )
  }
}

const mapStateToProps = state => {
  const { receiverInfo } = state.postCard

  return {
    receiverInfo
  }
}
export default connect(
  mapStateToProps,
  { addReceiverAddress }
)(AddAddress1)

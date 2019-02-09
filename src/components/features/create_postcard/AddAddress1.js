import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, View } from 'react-native'
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
    console.log('this.state', this.state)
    const { receiverName, receiverAddress } = this.state
    const { receiverInfo, addReceiverAddress } = this.props
    console.log(receiverInfo, 'receiverInfo')
    // TODO: add more validation
    const name = receiverName || receiverInfo.name
    const address = receiverAddress || receiverInfo.address
    const info = { name, address }
    if (name && address) {
      addReceiverAddress(info)
      NavigationService.navigate('ADD_ADDRESS_2')
      this.setState({ error: false })
    } else {
      this.setState({ error: true })
    }
  }

  render() {
    const { receiverName, receiverAddress } = this.state
    const { receiverInfo } = this.props
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>{postcardConstants.RECEIVER_ADDRESS}</Text>
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
        <Button onPress={this.onSubmit}>{postcardConstants.NEXT}</Button>
      </View>
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

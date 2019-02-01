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
import { addReceiverAddress } from '../../../redux/actions/create_postcard'

class AddAddress1 extends Component {
  state = {
    address: '',
    receiverName: ''
    // error: ''
  }

  onSubmit = () => {
    console.log('this.state', this.state)
    const { receiverName, address } = this.state
    // TODO: add more validation

    if (receiverName && address) {
      console.log('inside')
      const receiverInfo = { receiverName, address }
      this.props.addReceiverAddress(receiverInfo)
      console.log('after')
      NavigationService.navigate('ADD_ADDRESS_2')
      this.setState({ error: false })
    } else {
      this.setState({ error: true })
    }
  }

  render() {
    const { receiverName, address } = this.state
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>{postcardConstants.RECEIVER_ADDRESS}</Text>
        <Container>
          <StyledFormLabel>Name</StyledFormLabel>
          <StyledInput
            onChangeText={text => this.setState({ receiverName: text })}
            value={receiverName}
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
  const { userInfo } = state.postCard

  return {
    userInfo
  }
}
export default connect(
  mapStateToProps,
  { addReceiverAddress }
)(AddAddress1)

import React from 'react'
import { connect } from 'react-redux'
import { Text, View } from 'react-native'
import Button from '../../common/Button'
import GeneralContainer from '../../common/GeneralContainer'
import StyledImage from '../../common/StyledImage'
import * as postcardConstants from '../../../constants/create_postcard/PostcardConstants'
import BackPostCardComponent from '../../common/BackPostcardComponent'
import MainTitle from '../../common/MainTitle'

class Payment extends React.Component {
  onSubmit = () => {}

  render() {
    return (
      <GeneralContainer>
        <Text />
        <MainTitle>{postcardConstants.PAYMENT}</MainTitle>
        <StyledImage
          source={{
            uri: `data:${this.props.image.mime};base64,${this.props.image.data}`
          }}
        />
        <BackPostCardComponent
          info={this.props.receiverInfo}
          message={this.props.message}
        />
        <Text style={{ textAlign: 'right' }}> Total: 1.99</Text>
        <Button onPress={this.onSubmit}>{postcardConstants.PAY}</Button>
      </GeneralContainer>
    )
  }
}
const mapStateToProps = state => {
  const { senderInfo, message, receiverInfo, image } = state.postCard
  console.log(image, 'image in payment')
  return {
    senderInfo,
    message,
    receiverInfo,
    image
  }
}
export default connect(mapStateToProps)(Payment)

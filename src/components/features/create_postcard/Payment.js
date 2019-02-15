import React from 'react'
import { connect } from 'react-redux'
import { Text, View } from 'react-native'
import Button from '../../common/Button'
import ButtonLink from '../../common/ButtonLink'
import GeneralContainer from '../../common/GeneralContainer'
import StyledImage from '../../common/StyledImage'
import * as postcardConstants from '../../../constants/create_postcard/PostcardConstants'
import BackPostCardComponent from '../../common/BackPostcardComponent'
import MainTitle from '../../common/MainTitle'
import * as NavigationService from '../../../../NavigationService'

class Payment extends React.Component {
  onSubmit = () => {}

  onChangeImage = () => {
    NavigationService.navigate('LOGGED_IN')
  }

  // TODO: add logic to image screen where it doesnt continue the flow if
  // you have alreadhy //visited the payment screen, it brings you back to
  // the payment screen with the updated image
  render() {
    const { image, receiverInfo, message } = this.props
    return (
      <GeneralContainer>
        <MainTitle>{postcardConstants.PAYMENT}</MainTitle>
        <StyledImage
          source={{
            uri: `data:${image.mime};base64,${image.data}`
          }}
        />

        <ButtonLink onPress={this.onChangeImage}>Change Image</ButtonLink>
        <BackPostCardComponent info={receiverInfo} message={message} />
        <Text style={{ textAlign: 'right' }}> Total: 1.99</Text>
        <Button onPress={this.onSubmit}>{postcardConstants.PAY}</Button>
      </GeneralContainer>
    )
  }
}
const mapStateToProps = state => {
  const { senderInfo, message, receiverInfo, image } = state.postCard
  return {
    senderInfo,
    message,
    receiverInfo,
    image
  }
}
export default connect(mapStateToProps)(Payment)

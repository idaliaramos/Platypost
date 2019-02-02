import React from 'react'
import { connect } from 'react-redux'
import { Text } from 'react-native'
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
        <MainTitle>{postcardConstants.PAYMENT}</MainTitle>
        <StyledImage
          source={{
            uri:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQJeTjQx0sacbw_JhV-_VodB5U3c-YubFFkHcpW0oAtOejsy7p'
          }}
        />
        <BackPostCardComponent
          info={this.props.receiverInfo}
          message={this.props.message}
        />
        <Text> Total: 1.99</Text>
        <Button onPress={this.onSubmit}>{postcardConstants.PAY}</Button>
      </GeneralContainer>
    )
  }
}
const mapStateToProps = state => {
  const { senderInfo, message, receiverInfo } = state.postCard

  return {
    senderInfo,
    message,
    receiverInfo
  }
}
export default connect(mapStateToProps)(Payment)

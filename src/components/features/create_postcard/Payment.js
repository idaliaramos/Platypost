import React from 'react'
import { Text } from 'react-native'
import Button from '../../common/Button'
import GeneralContainer from '../../common/GeneralContainer'
import StyledImage from '../../common/StyledImage'
import * as postcardConstants from '../../../constants/create_postcard/PostcardConstants'

class Payment extends React.Component {
  onSubmit = () => {}

  render() {
    return (
      <GeneralContainer>
        <StyledImage
          source={{
            uri:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQJeTjQx0sacbw_JhV-_VodB5U3c-YubFFkHcpW0oAtOejsy7p'
          }}
        />
        <Text>{postcardConstants.PAYMENT}</Text>
        <Button onPress={this.onSubmit}>{postcardConstants.PAY}</Button>
      </GeneralContainer>
    )
  }
}
export default Payment

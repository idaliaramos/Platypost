import React from 'react';
import { Text, View } from 'react-native';
import Button from '../../common/Button';
import CenteredContainer from '../../common/CenteredContainer';
import * as postcardConstants from '../../../constants/create_postcard/PostcardConstants';
class Payment extends React.Component {
  onSubmit = () => {};

  render() {
    return (
      <CenteredContainer>
        <Text>{postcardConstants.PAYMENT}</Text>
        <Button onPress={this.onSubmit}>{postcardConstants.PAY}</Button>
      </CenteredContainer>
    );
  }
}
export default Payment;

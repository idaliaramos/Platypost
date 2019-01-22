import React from 'react';
import { Text, View } from 'react-native';
import Button from '../../common/Button';
import CenteredContainer from '../../common/CenteredContainer';
import * as postcardConstants from '../../../constants/create_postcard/PostcardConstants';
class Message extends React.Component {
  onSubmit = () => {
    //should I change this "Payment to a constant too?"
    this.props.navigation.push('Payment');
  };

  render() {
    return (
      <CenteredContainer>
        <Text>{postcardConstants.ENTER_MESSAGE}</Text>
        <Button onPress={this.onSubmit}>{postcardConstants.NEXT}</Button>
      </CenteredContainer>
    );
  }
}
export default Message;

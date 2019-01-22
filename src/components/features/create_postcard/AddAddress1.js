import React from 'react';
import { Text, View } from 'react-native';
import Button from '../../common/Button';
import CenteredContainer from '../../common/CenteredContainer';
import * as postcardConstants from '../../../constants/create_postcard/PostcardConstants';

class AddAddress1 extends React.Component {
  onSubmit = () => {
    this.props.navigation.push('AddAddress2');
  };

  render() {
    return (
      <CenteredContainer>
        <Text>{postcardConstants.RECEIVER_ADDRESS}</Text>
        <Button onPress={this.onSubmit}>{postcardConstants.NEXT}</Button>
      </CenteredContainer>
    );
  }
}
export default AddAddress1;

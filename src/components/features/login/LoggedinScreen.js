import React from 'react';
import { Text, View } from 'react-native';
import Button from '../../common/Button';
import * as postcardConstants from '../../../constants/create_postcard/PostcardConstants';

class LoggedinScreen extends React.Component {
  onSubmit = () => {
    this.props.navigation.push('AddAddress1');
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>{postcardConstants.UPLOAD_IMAGE}</Text>
        <Button onPress={this.onSubmit}>{postcardConstants.NEXT}</Button>
      </View>
    );
  }
}
export default LoggedinScreen;

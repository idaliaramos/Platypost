import React, {Component} from 'react';
import { Text, View } from 'react-native';
import Button from '../../common/Button';
import MainTitle from '../../common/MainTitle';
import Container from '../../common/Container';
import StyledInput from '../../common/StyledInput';
import StyledFormLabel from '../../common/StyledFormLabel';
import * as NavigationService from './../../../../NavigationService'
import * as postcardConstants from '../../../constants/create_postcard/PostcardConstants';

class LoggedinScreen extends React.Component {
  state = {
    address1: '',
    address2: '',
    zipcode:'',
    city:'',
    state:''
  };
  onSubmit = () => {
    NavigationService.navigate('ADD_ADDRESS_1')

  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>{postcardConstants.UPLOAD_IMAGE}</Text>
          <Container>

         </Container>
         <Button onPress={this.onSubmit}>{postcardConstants.NEXT}</Button>
       </View>
    );
  }
}
export default LoggedinScreen;

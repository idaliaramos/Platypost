import React, {Component} from 'react';
import { Text, View } from 'react-native';
import Button from '../../common/Button';
import MainTitle from '../../common/MainTitle';
import Container from '../../common/Container';
import StyledInput from '../../common/StyledInput';
import ShortInput from '../../common/ShortInput'
import StyledFormLabel from '../../common/StyledFormLabel';
import * as postcardConstants from '../../../constants/create_postcard/PostcardConstants';
import * as NavigationService from '../../../../NavigationService'
class AddAddress2 extends React.Component {
  state = {
    address1: '',
    address2: '',
    zipcode:'',
    city:'',
    state:''
  };
  onSubmit = () => {
    NavigationService.navigate('MESSAGE')
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>{postcardConstants.RECEIVER_ADDRESS}</Text>
           <Container>
             <StyledFormLabel>Name</StyledFormLabel>
             <StyledInput
               onChangeText={text => this.setState({ address1: text })}
               value={this.state.address1}
             />
             <StyledFormLabel>Address</StyledFormLabel>
             <StyledInput
               onChangeText={text => this.setState({ address2: text })}
               value={this.state.address2}
             />
         </Container>
         <Button onPress={this.onSubmit}>{postcardConstants.NEXT}</Button>
       </View>
    );
  }
}
export default AddAddress2;

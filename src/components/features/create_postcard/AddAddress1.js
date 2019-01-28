// import React, {Component} from 'react';
// import { Text, View } from 'react-native';
// import Button from '../../common/Button';
// import CenteredContainer from '../../common/CenteredContainer';
// import * as postcardConstants from '../../../constants/create_postcard/PostcardConstants';

// class AddAddress1 extends React.Component {
//   onSubmit = () => {
//     this.props.navigation.push('AddAddress2');
//   };
//
//   render() {
//     return (
//       <CenteredContainer>
//         <Text>{postcardConstants.RECEIVER_ADDRESS}</Text>
//         <Button onPress={this.onSubmit}>{postcardConstants.NEXT}</Button>
//       </CenteredContainer>
//     );
//   }
// }
// export default AddAddress1;
import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Button from '../../common/Button'
import MainTitle from '../../common/MainTitle'
import Container from '../../common/Container'
import StyledInput from '../../common/StyledInput'
import ShortInput from '../../common/ShortInput'
import StyledFormLabel from '../../common/StyledFormLabel'
import * as postcardConstants from '../../../constants/create_postcard/PostcardConstants'
import * as NavigationService from '../../../../NavigationService'

class AddAddress1 extends Component {
  state = {
    address1: '',
    to: ''
  }

  onSubmit = () => {
    NavigationService.navigate('ADD_ADDRESS_2')
  }

  render() {
    const { to, address1 } = this.state
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>{postcardConstants.RECEIVER_ADDRESS}</Text>
        <Container>
          <StyledFormLabel>Name</StyledFormLabel>
          <StyledInput
            onChangeText={text => this.setState({ to: text })}
            value={to}
          />
          <StyledFormLabel>Address</StyledFormLabel>
          <StyledInput
            onChangeText={text => this.setState({ address1: text })}
            value={address1}
          />
        </Container>
        <Button onPress={this.onSubmit}>{postcardConstants.NEXT}</Button>
      </View>
    )
  }
}
export default AddAddress1

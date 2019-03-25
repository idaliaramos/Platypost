import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import BottomButtonView from '../../common/BottomButtonView';
import MainTitle from '../../common/MainTitle';
import GeneralContainer from '../../common/GeneralContainer';
import Button from '../../common/Button';
import Container from '../../common/Container';
import StyledInput from '../../common/StyledInput';
import StyledFormLabel from '../../common/StyledFormLabel';
import * as NavigationService from '../../../../NavigationService';
import { addReceiverAddress } from '../../../redux/actions/create_postcard';
import { strings } from '../../../i18next/i18n';

class AddAddress1 extends Component {
  state = {
    receiverAddress: undefined,
    receiverName: undefined,
    // error: ''
  };

  onSubmit = () => {
    const { receiverName, receiverAddress } = this.state;
    const { receiverInfo, addReceiverAddress } = this.props;
    // TODO: add more validation
    const name = receiverName || receiverInfo.name;
    const address = receiverAddress || receiverInfo.address;
    const info = { name, address };
    if (name && address) {
      addReceiverAddress(info);
      NavigationService.navigate('MESSAGE');
      this.setState({ error: false });
    } else {
      this.setState({ error: true });
    }
  };

  render() {
    const { receiverName, receiverAddress } = this.state;
    const { receiverInfo } = this.props;
    const name = receiverName || receiverInfo.name;
    const address = receiverAddress || receiverInfo.address;

    return (
      <GeneralContainer>
        <Text />
        <MainTitle>{strings('create_postcard.TO')}</MainTitle>
        <Container>
          <StyledFormLabel>{strings('create_postcard.NAME')}</StyledFormLabel>
          <StyledInput
            onChangeText={text => this.setState({ receiverName: text })}
            value={receiverName === undefined ? receiverInfo.name : receiverName}
          />
          <StyledFormLabel>{strings('create_postcard.ADDRESS')}</StyledFormLabel>
          <StyledInput
            onChangeText={text => this.setState({ receiverAddress: text })}
            value={receiverAddress || receiverInfo.address}
          />
        </Container>

        <BottomButtonView>
          <Button disabled={!name && !address} onPress={this.onSubmit}>
            {strings('create_postcard.NEXT')}
          </Button>
        </BottomButtonView>
      </GeneralContainer>
    );
  }
}

const mapStateToProps = state => {
  const { receiverInfo } = state.postCard;

  return {
    receiverInfo,
  };
};
export default connect(
  mapStateToProps,
  { addReceiverAddress }
)(AddAddress1);

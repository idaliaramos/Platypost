import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Input } from 'react-native';
import {apiCall } from '../../../redux/actions/login';
import { connect } from 'react-redux';
 import { bindActionCreators } from 'redux';
import * as actions from '../../../redux/actions/login';
import * as loginConstants from '../../../constants/login/LoginConstants';
import Button from '../../common/Button';
import PasswordButton from '../../common/PasswordButton';
import StyledInput from '../../common/StyledInput';
import StyledFormLabel from '../../common/StyledFormLabel';
import CenteredContainer from '../../common/CenteredContainer';
import MainTitle from '../../common/MainTitle';
import Container from '../../common/Container';
import PasswordInput from '../../common/PasswordInput';
import Spinner from '../../common/Spinner';
import validatePassword from './utils/LoginUtils';


class LoginScreen extends Component {
  state = {
    showPassword: false,
    passwordError: false,
    emailError: false,
  };
  onSubmit = () => {
    let { email, password } = this.state;
    //TODO: add more validation
    if (validatePassword(password)) {
      this.props.apiCall(email,password);
      this.setState({ passwordError: false });
    } else {
      this.setState({ passwordError: true });
    }
  };

  onError = () => {
    if (this.props.error) {
      return (
        <View>
          <Text>{this.props.error}</Text>
        </View>
      );
    }
    if (this.state.passwordError) {
      return (
        <View>
          <Text>{loginConstants.PASSWORD_ERROR}</Text>
        </View>
      );
    }
  };
  renderButton = () => {
    if (this.props.loading) {
      return <Spinner />;
    }
    return <Button onPress={this.onSubmit}> {loginConstants.SUBMIT} </Button>;
  };

  render() {
    return (
      <CenteredContainer>
        <MainTitle>{loginConstants.SIGN_IN}</MainTitle>
        <Container>
          <StyledFormLabel>Email</StyledFormLabel>
          <StyledInput
            onChangeText={text => this.setState({ email: text })}
            value={this.state.email || this.props.email}
          />
          <View>
            <StyledFormLabel>{loginConstants.PASSWORD}</StyledFormLabel>
            <StyledInput
              onChangeText={text => this.setState({ password: text })}
              value={this.state.password || this.props.password}
              secureTextEntry
            />
          </View>

          {this.onError()}
        </Container>

        {this.renderButton()}
      </CenteredContainer>
    );
  }
}
const mapStateToProps = state => {
  const { email, password, error, loading, user } = state.auth;
  console.log(email, "email in stateto props");
  return {
    email,
    password,
    error,
    loading,
    user
  };
};
//TODO:
export default connect(
  mapStateToProps,
  {apiCall }
)(LoginScreen);

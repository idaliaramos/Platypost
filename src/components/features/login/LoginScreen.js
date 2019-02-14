import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { apiCall } from '../../../redux/actions/login'
import * as actions from '../../../redux/actions/login'
import * as loginConstants from '../../../constants/login/LoginConstants'
import Button from '../../common/Button'
import PasswordButton from '../../common/PasswordButton'
import StyledInput from '../../common/StyledInput'
import StyledFormLabel from '../../common/StyledFormLabel'
import CenteredContainer from '../../common/CenteredContainer'
import MainTitle from '../../common/MainTitle'
import Container from '../../common/Container'
import PasswordInput from '../../common/PasswordInput'
import Spinner from '../../common/Spinner'
import validatePassword from './utils/LoginUtils'

class LoginScreen extends Component {
  state = {
    passwordError: false
  }

  onSubmit = () => {
    const { email, password } = this.state
    const { apiCall } = this.props
    // TODO: add more validation
    if (validatePassword(password) && email) {
      apiCall(email, password)
      this.setState({ passwordError: false })
    } else {
      this.setState({ passwordError: true })
    }
  }

  onError = () => {
    const { error } = this.props
    const { passwordError } = this.state
    if (error) {
      console.log(error, 'error')
      return (
        <View>
          <Text>{error}</Text>
        </View>
      )
    }
    if (passwordError) {
      return (
        <View>
          <Text>{loginConstants.PASSWORD_ERROR}</Text>
        </View>
      )
    }
  }

  renderButton = () => {
    const { loading } = this.props
    if (loading) {
      return <Spinner />
    }
    return <Button onPress={this.onSubmit}>{loginConstants.SUBMIT}</Button>
  }

  render() {
    const { email, password } = this.state
    return (
      <CenteredContainer>
        <MainTitle>{loginConstants.SIGN_IN}</MainTitle>
        <Container>
          <StyledFormLabel>Email</StyledFormLabel>
          <StyledInput
            onChangeText={text => this.setState({ email: text })}
            // value={this.state.email || this.props.email}
          />
          <View>
            <StyledFormLabel>{loginConstants.PASSWORD}</StyledFormLabel>
            <StyledInput
              onChangeText={text => this.setState({ password: text })}
              // value={this.state.password || this.props.password}
              secureTextEntry
            />
          </View>

          {this.onError()}
        </Container>

        {this.renderButton()}
      </CenteredContainer>
    )
  }
}
const mapStateToProps = state => {
  const {
 email, password, error, loading, user
} = state.auth

  return {
    email,
    password,
    error,
    loading,
    user
  }
}

//  TODO:
export default connect(
  mapStateToProps,
  { apiCall }
)(LoginScreen)

import React, { Component } from 'react'
import { connect } from 'react-redux'
import BottomButtonView from '../../common/BottomButtonView'
import GeneralContainer from '../../common/GeneralContainer'
import MainTitle from '../../common/MainTitle'
import Button from '../../common/Button'
import Container from '../../common/Container'
import StyledTextBox from '../../common/StyledTextBox'
import * as NavigationService from '../../../../NavigationService'
import { addMessage } from '../../../redux/actions/create_postcard'
import { strings } from '../../../i18next/i18n'

class Message extends Component {
  state = {
    message: ''
  }

  onSubmit = () => {
    const { message } = this.state
    // let message = message || this.props.message
    this.props.addMessage(message || this.props.message)
    NavigationService.navigate('PAYMENT')
  }

  render() {
    const { message } = this.state
    return (
      <GeneralContainer>
        <MainTitle>{strings('create_postcard.MESSAGE')}</MainTitle>
        <Container>
          <StyledTextBox
            onChangeText={text => this.setState({ message: text })}
            value={message || this.props.message}
            multiline
            numberOfLines={6}
            editable
            maxLength={400}
          />
        </Container>
        <BottomButtonView>
          <Button onPress={this.onSubmit}>
            {strings('create_postcard.NEXT')}
          </Button>
        </BottomButtonView>
      </GeneralContainer>
      // </View>
    )
  }
}
const mapStateToProps = state => {
  const { message } = state.postCard

  return {
    message
  }
}
export default connect(
  mapStateToProps,
  { addMessage }
)(Message)

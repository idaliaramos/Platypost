import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import { connect } from 'react-redux'
import Permissions from 'react-native-permissions'
import ImagePicker from 'react-native-image-crop-picker'
import MainTitle from '../../common/MainTitle'
import Button from '../../common/Button'
import ButtonLink from '../../common/ButtonLink'
import CenteredContainer from '../../common/CenteredContainer'
import * as NavigationService from '../../../../NavigationService'
import * as postcardConstants from '../../../constants/create_postcard/PostcardConstants'
import { addImage } from '../../../redux/actions/create_postcard'

class LoggedinScreen extends Component {
  state = {
    image: '',
    photoPermission: ''
  }

  // Check the status of a single permission
  componentDidMount() {
    console.log('component mounted', Permissions)
    // Permissions.check('photo').then(response => {
    //   console.log(response, 'response')
    //   // Response is one of: 'authorized', 'denied', 'restricted', or 'undetermined'
    //   this.setState({ photoPermission: response })
    // })
  }

  onSubmit = () => {
    const { addImage } = this.props
    const { image } = this.state
    addImage(image)
    NavigationService.navigate('ADD_ADDRESS_1')
  }

  //should i use check or request? they seem
  // Permissions.check('photo').then(response => {
  //   console.log(response, 'response')
  //   // Response is one of: 'authorized', 'denied', 'restricted', or 'undetermined'
  //   this.setState({ photoPermission: response })
  // })
  // console.log(Permissions.request, 'permits')

  onUploadImage = () => {
      // Request permission to access photos
    Permissions.request('photo').then(response => {
      console.log('requesting permission', response)
      // Returns once the user has chosen to 'allow' or to 'not allow' access
      // Response is one of: 'authorized', 'denied', 'restricted', or 'undetermined'
      this.setState({ photoPermission: response })
      if (response ==='authorized'){
        ImagePicker.openPicker({
          width: 500,
          height: 400,
          cropping: true,
          includeBase64: true,
          writeTempFile: false
        }).then(image => {
          this.setState({
            image
          })
        })
      }
      else {
        console.log('permission denied, alert to give access')
      }
    })
  }

  render() {
    const { image } = this.state
    return (
      <View style={{ alignItems: 'center' }}>
        <MainTitle >
          {postcardConstants.UPLOAD_IMAGE}
        </MainTitle>
        <Image
          style={{
            width: 500,
            height: 300,
            backgroundImage:
              'https://www.grouphealth.ca/wp-content/uploads/2018/05/placeholder-image-600x450.png'
          }}
          source={{
            uri: `data:${image.mime};base64,${image.data}`
          }}
        />
        <ButtonLink onPress={this.onUploadImage}>
          {!image ? 'upload image' : 'change image'}
        </ButtonLink>
        {image ? <Button onPress={this.onSubmit}>Next</Button> : null}
      </View>
    )
  }
}

// Do I need this? I dont thinks so but i need it for connect?
const mapStateToProps = state => {
  const { image } = state.postCard

  return {
    image
  }
}

export default connect(
  mapStateToProps,
  { addImage }
)(LoggedinScreen)

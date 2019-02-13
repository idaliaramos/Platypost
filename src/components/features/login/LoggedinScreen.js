import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import { connect } from 'react-redux'
// import ImagePicker from 'react-native-image-picker'
import ImagePicker from 'react-native-image-crop-picker'
import Button from '../../common/Button'
import CenteredContainer from '../../common/CenteredContainer'
import * as NavigationService from '../../../../NavigationService'
import * as postcardConstants from '../../../constants/create_postcard/PostcardConstants'
import { addImage } from '../../../redux/actions/create_postcard'

class LoggedinScreen extends Component {
  state = {
    image: ''
  }

  onSubmit = () => {
    const { addImage } = this.props
    const { image } = this.state

    addImage(image)
    NavigationService.navigate('ADD_ADDRESS_1')
  }

  // More info on all the options is below in the API Reference... just some common use cases shown here

  /**
   * The first arg is the options object for customization (it can also be null or omitted for default options),
   * The second arg is the callback which sends object: response (more info in the API Reference)
   */
  onUploadImage = () => {
    ImagePicker.openPicker({
      width: 500,
      height: 400,
      cropping: true,
      includeBase64: true,
      writeTempFile: false
    }).then(image => {
      // console.log(image.data, 'image')
      // console.log(`data:${image.mime};base64,${image.data}`)
      this.setState({
        image
      })
    })
  }

  render() {
    const { image } = this.state
    return (
      <View style={{ alignItems: 'center' }}>
        <Text>{postcardConstants.UPLOAD_IMAGE}</Text>
        <Image
          style={{ width: 500, height: 300, backgroundColor: 'grey' }}
          source={{
            uri: `data:${image.mime};base64,${image.data}`
          }}
        />
        <Button onPress={this.onUploadImage}>
          {!image ? 'upload image' : 'change image'}
        </Button>
        {image ? <Button onPress={this.onSubmit}>Next</Button> : null}
      </View>
    )
  }
}
// Do I need this? I dont thinks so but i need it for connect?
mapStateToProps = state => {
  const { image } = state.postCard

  return {
    image
  }
}
export default connect(
  mapStateToProps,
  { addImage }
)(LoggedinScreen)

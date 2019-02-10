import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'

import ImagePicker from 'react-native-image-picker'
import Button from '../../common/Button'
import Container from '../../common/Container'
import * as NavigationService from '../../../../NavigationService'
import * as postcardConstants from '../../../constants/create_postcard/PostcardConstants'

ImagePicker

class LoggedinScreen extends Component {
  state = {
    image: ''
  }

  // onSubmit = () => {
  //   NavigationService.navigate('ADD_ADDRESS_1')
  // }

  // More info on all the options is below in the API Reference... just some common use cases shown here

  /**
   * The first arg is the options object for customization (it can also be null or omitted for default options),
   * The second arg is the callback which sends object: response (more info in the API Reference)
   */
  onSubmit = () => {
    console.log('before', JSON.stringify(ImagePicker.showImagePicker))
    console.log()
    ImagePicker
      ? ImagePicker.showImagePicker(null, () => {
          console.log('inside')
        })
      : console.log('hello')
    console.log()
    console.log('after')
    // response => {
    //   console.log('Response = ', response)
    //
    //   if (response.didCancel) {
    //     console.log('User cancelled image picker')
    //   } else if (response.error) {
    //     console.log('ImagePicker Error: ', response.error)
    //   } else if (response.customButton) {
    //     console.log('User tapped custom button: ', response.customButton)
    //   } else {
    //     const source = { uri: response.uri }
    //
    //     // You can also display the image using data:
    //     // const source = { uri: 'data:image/jpeg;base64,' + response.data };
    //
    //     this.setState({
    //       avatarSource: source
    //     })
    //   }
    // })
  }

  render() {
    console.log(JSON.stringify(ImagePicker.showImagePicker), 'imagepicker')
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>{postcardConstants.UPLOAD_IMAGE}</Text>
        <Image source={this.state.avatarSource} />
        <Container />
        <Button onPress={this.onSubmit}>{postcardConstants.NEXT}</Button>
      </View>
    )
  }
}
export default LoggedinScreen

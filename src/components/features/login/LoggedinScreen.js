import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import { connect } from 'react-redux'
import BottomButtonView from '../../common/BottomButtonView'
import Permissions from 'react-native-permissions'
import ImagePicker from 'react-native-image-crop-picker'
import MainTitle from '../../common/MainTitle'
import Button from '../../common/Button'
import ButtonLink from '../../common/ButtonLink'
import CenteredContainer from '../../common/CenteredContainer'
import GeneralContainer from '../../common/GeneralContainer'
import * as NavigationService from '../../../../NavigationService'
import * as postcardConstants from '../../../constants/create_postcard/PostcardConstants'
import { addImage } from '../../../redux/actions/create_postcard'
import {  I18nManager} from 'react-native'
import * as RNLocalize from "react-native-localize";
import i18n from "i18n-js";
import memoize from "lodash.memoize";

const translationGetters = {
  // lazy requires (metro bundler does not support symlinks)
  ar: () => require("../android/app/src/main/assets/translations/ar.json"),
  en: () => require("../android/app/src/main/assets/translations/en.json"),
  fr: () => require("../android/app/src/main/assets/translations/fr.json"),
};
const setI18nConfig = () => {
  // fallback if no available language fits
  const fallback = { languageTag: "en", isRTL: false };
  const { languageTag, isRTL } =
    RNLocalize.findBestAvailableLanguage(Object.keys(translationGetters)) ||
    fallback;

  // clear translation cache
  translate.cache.clear();
  // update layout direction
  I18nManager.forceRTL(isRTL);

  // set i18n-js config
  i18n.translations = { [languageTag]: translationGetters[languageTag]() };
  i18n.locale = languageTag;
};
class LoggedinScreen extends Component {


  constructor(props) {
  super(props);
  setI18nConfig(); // set initial config
  }

  componentDidMount() {
    RNLocalize.addEventListener("change", this.handleLocalizationChange);
  }


  handleLocalizationChange = () => {
    setI18nConfig();
    this.forceUpdate();
  };
  state = {
    image: '',
    photoPermission: ''
  }

  // Check the status of a single permission
  componentDidMount() {

    // console.log('LOCALEIS',RNLocalize.getLocales())
    Permissions.check('photo').then(response => {
      // Response is one of: 'authorized', 'denied', 'restricted', or 'undetermined'
      this.setState({ photoPermission: response })
    })
  }
  //if denied present the no permission, add button to navigate to the setting,
  //(if ios do this if android do this)

  //once the user has selected an image we will add it to redux, and move them
  //to add the address
  onSubmit = () => {
    const { addImage } = this.props
    const { image } = this.state
    addImage(image)
    NavigationService.navigate('ADD_ADDRESS_1')
  }
    // allows user to select an image from their camera roll after checking access.
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
      <GeneralContainer>
        <MainTitle >
          {/* {postcardConstants.UPLOAD_IMAGE} */}
          {translate("Upload Image")}
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
      <BottomButtonView>
        {image ? <Button onPress={this.onSubmit}>{translate("Next")}</Button> : null}
      </BottomButtonView>
    </GeneralContainer>
    )
  }
}

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

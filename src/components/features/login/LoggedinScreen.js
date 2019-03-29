import React, { Component } from 'react';
import { Image } from 'react-native';
import { connect } from 'react-redux';
import Permissions from 'react-native-permissions';
import ImagePicker from 'react-native-image-crop-picker';
import BottomButtonView from '../../common/BottomButtonView';
import MainTitle from '../../common/MainTitle';
import Button from '../../common/Button';
import ButtonLink from '../../common/ButtonLink';
import GeneralContainer from '../../common/GeneralContainer';
import * as NavigationService from '../../../../NavigationService';
import { addImage } from '../../../redux/actions/create_postcard';
import { strings } from '../../../i18next/i18n';
import toPDF from "./pdfConverter.js";



class LoggedinScreen extends Component {
  state = {
    image: '',
    photoPermission: '',
  };

  // Check the status of a single permission
  componentDidMount() {
    console.log('component mounted', Permissions);
    Permissions.check('photo').then(response => {
      console.log(response, 'response');
      // Response is one of: 'authorized', 'denied', 'restricted', or 'undetermined'
      this.setState({ photoPermission: response });
    });
  }
  // if denied present the no permission, add button to navigate to the setting,
  // (if ios do this if android do this)

  // once the user has selected an image we will add it to redux, and move them
  // to add the address
  onSubmit = () => {
    const { addImage } = this.props;
    const { image } = this.state;
    let mailInfo={
      receiverInfo:{
        name:'idalia',
        address_line1:'229 Haight st',
        address_city: 'San Francisco',
        address_state: 'CA',
        address_zip: '94102'},
        messageInfo: {message: 'hello'},
      // image: this.state.image.data
    }
   addImage(image);
   toPDF([image])
   .then(pdf => {
     mailInfo.pdf = pdf
     fetch("http://localhost:3000/createPostcard", {
       method: 'POST',
       headers: {
       'Content-Type': 'application/json'
      },
      body: JSON.stringify(mailInfo)
   })
});

    NavigationService.navigate('ADD_ADDRESS_1');
  };

  // allows user to select an image from their camera roll after checking access.
  onUploadImage = () => {
    // Request permission to access photos
    Permissions.request('photo').then(response => {
      console.log('requesting permission', response);
      // Returns once the user has chosen to 'allow' or to 'not allow' access
      // Response is one of: 'authorized', 'denied', 'restricted', or 'undetermined'
      this.setState({ photoPermission: response });
      if (response === 'authorized') {
        ImagePicker.openPicker({
          width: 1875,
          height: 1275,
          cropping: true,
          includeBase64: true,
          writeTempFile: false,
        }).then(image => {
          this.setState({
            image,
          })
          console.log(image, 'image')
          toPDF([image])
          .then(pdf => {
            console.log("pdf ", pdf);
            this.setState({
              pdf: pdf
            })
          });
        });
      } else {
        console.log('permission denied, alert to give access');
      }
    });
  };

  render() {
    const { image } = this.state;

    return (
      <GeneralContainer>
        <MainTitle>{strings('create_postcard.UPLOAD_IMAGE')}</MainTitle>
        <Image
          style={{
            width: 500,
            height: 400,
            backgroundImage: 'https://www.grouphealth.ca/wp-content/uploads/2018/05/placeholder-image-600x450.png',
          }}
          source={{
            uri: `data:${image.mime};base64,${image.data}`,
          }}
        />
        <ButtonLink onPress={this.onUploadImage}>
          {!image ? strings('create_postcard.UPLOAD_IMAGE') : strings('create_postcard.CHANGE_IMAGE')}
        </ButtonLink>
        <BottomButtonView>
          {image ? <Button onPress={this.onSubmit}>{strings('create_postcard.NEXT')}</Button> : null}
        </BottomButtonView>
      </GeneralContainer>
    );
  }
}

const mapStateToProps = state => {
  const { image } = state.postCard;

  return {
    image,
  };
};

export default connect(
  mapStateToProps,
  { addImage }
)(LoggedinScreen);

import React from 'react'
import { View, Text } from 'react-native'
import MainTitle from './MainTitle'
import PostCardContainer from './PostCardContainer'
import { Fonts } from '../../utils/Fonts'
import AddressReviewComponent from './AddressReviewComponent'

const BackPostCardComponent = ({ info, message }) => (
  <PostCardContainer
    style={{
      borderWidth: 1,
      borderRadius: 5,
      marginTop: 10,
      marginBottom: 10,
      borderLeftColor: 'grey',
      borderRightColor: 'white',
      borderTopColor: 'white',
      borderBottomColor: 'grey'
    }}
  >
    <View style={{ flexDirection: 'row' }}>
      <View style={{ flex: 2 }}>
        <Text
          style={{
            justifyContent: 'flex-end',
            margin: 12,
            marginTop: 25,
            fontSize: 12,
            fontFamily: Fonts.Handlee
          }}
        >
          {message}
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          // borderWidth: 1,

          marginTop: 70,
          fontSize: 2
        }}
      >
        <AddressReviewComponent info={info} />
      </View>
    </View>
  </PostCardContainer>
)

export default BackPostCardComponent

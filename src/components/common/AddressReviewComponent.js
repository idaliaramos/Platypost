import React from 'react'
import { View, Text } from 'react-native'
import MainTitle from './MainTitle'

const AddressReviewComponent = ({ info }) => {
  const { name, address } = info
  return (
    <View>
      <Text style={{ fontSize: 10 }}>{name}</Text>
      <Text style={{ fontSize: 10 }}>{address}</Text>
    </View>
  )
}

export default AddressReviewComponent

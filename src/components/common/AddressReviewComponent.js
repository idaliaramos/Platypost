import React from 'react'
import { View, Text } from 'react-native'
import MainTitle from './MainTitle'

const AddressReviewComponent = children => {
  const info = children
  console.log(info, 'info')

  console.log(children, 'message')
  console.log(info, 'message')
  return (
    <View>
      <Text style={{ fontSize: 10 }}>idalia ramos</Text>
      <Text style={{ fontSize: 10 }}>229 haight st</Text>
      <Text style={{ fontSize: 10 }}>San Fracisco CA 94102</Text>
    </View>
  )
}

export default AddressReviewComponent

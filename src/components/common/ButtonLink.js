import React from 'react'
import { Text } from 'react-native'
import styled, { css } from 'styled-components'

const ButtonContainer = styled.TouchableOpacity`
  /* background-color: #00cc99; */
  /* width: 80%;
  height: 40px; */
  border-radius: 18px;
  align-items: center;
  justify-content: center;
  margin-top: 25px;
  text-decoration-line: underline;
`
const ButtonLink = ({ children, onPress, disabled }) => (
  <ButtonContainer onPress={onPress}>
    <Text>{children}</Text>
  </ButtonContainer>
)
export default ButtonLink

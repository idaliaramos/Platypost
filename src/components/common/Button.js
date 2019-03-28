import React from 'react';
import { Text } from 'react-native';
import styled, { css } from 'styled-components';

const ButtonContainer = styled.TouchableOpacity`
  background-color: #00cc99;
  width: 80%;
  height: 40px;
  border-radius: 13px;
  align-items: center;
  justify-content: center;
  margin-top: 25px;

  ${props =>
    props.disabled &&
    css`
      background: #d0f4eb;
      color: black;
    `}
`;
const Button = ({ children, onPress, disabled }) => (
  <ButtonContainer disabled={disabled} onPress={onPress}>
    <Text>{children}</Text>
  </ButtonContainer>
);
export default Button;

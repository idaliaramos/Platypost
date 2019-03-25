import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components';

const ButtonContainer = styled.TouchableOpacity`
  background-color: grey;
  width: 15%;
  height: 20px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  margin-top: 25px;
`;
const PasswordButton = ({ children, onPress }) => (
  <ButtonContainer onPress={onPress}>
    <Text>{children}</Text>
  </ButtonContainer>
);
export default PasswordButton;

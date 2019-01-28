import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styled from "styled-components";

const ButtonContainer = styled.TouchableOpacity`
  background-color: #00cc99;
  width: 80%;
  height: 40px;
  border-radius: 28px;
  align-items: center;
  justify-content: center;
  margin-top: 25px;

`;
const Button = ({ children, onPress }) => {
  return (
    <ButtonContainer onPress={onPress}>
      <Text>{children}</Text>
    </ButtonContainer>
  );
};
export default Button;

import styled from 'styled-components'

const PasswordInput = styled.TextInput.attrs({
  type: `props.showPassword ? 'text': 'password'`
})`
  border-radius: 3px;
  width:70%;
  border: 1px solid
  border-color: black;
`
export default PasswordInput

import {
  ADD_RECEIVER_ADDRESS,
  ADD_SENDER_ADDRESS
} from '../../actions/create_postcard/types'

const INITIAL_STATE = {
  receiverInfo: '',
  senderInfo: ''
}
export default function createPostcardReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_RECEIVER_ADDRESS:
      console.log('ADD RECEIVER_ADDRESS')
      return { ...state, receiverInfo: action.payload }
    case ADD_SENDER_ADDRESS:
      console.log('sender_ADDRESS', state)
      return { ...state, senderInfo: action.payload }
    default:
      return state
  }
}

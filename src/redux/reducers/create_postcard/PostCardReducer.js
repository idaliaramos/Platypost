import { ADD_RECEIVER_ADDRESS, ADD_SENDER_ADDRESS, ADD_MESSAGE, ADD_IMAGE } from '../../actions/create_postcard/types';

const INITIAL_STATE = {
  receiverInfo: '',
  senderInfo: '',
  message: '',
  image: '',
};
export default function createPostcardReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_RECEIVER_ADDRESS:
      return { ...state, receiverInfo: action.payload };
    case ADD_SENDER_ADDRESS:
      return { ...state, senderInfo: action.payload };
    case ADD_MESSAGE:
      console.log('ADD message', state);
      return { ...state, message: action.payload };
    case ADD_IMAGE:
      console.log('ADD image', state);
      return { ...state, image: action.payload };
    default:
      return state;
  }
}

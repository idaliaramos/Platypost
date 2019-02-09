import { ADD_RECEIVER_ADDRESS, ADD_SENDER_ADDRESS, ADD_MESSAGE } from './types'

export const addReceiverAddress = info => ({
  type: ADD_RECEIVER_ADDRESS,
  payload: info
})

export const addSenderAddress = text => ({
  type: ADD_SENDER_ADDRESS,
  payload: text
})
export const addMessage = text => ({
  type: ADD_MESSAGE,
  payload: text
})

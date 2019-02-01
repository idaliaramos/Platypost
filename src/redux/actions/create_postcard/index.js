import { ADD_RECEIVER_ADDRESS, ADD_SENDER_ADDRESS } from './types'

export const addReceiverAddress = info => ({
  type: ADD_RECEIVER_ADDRESS,
  payload: info
})

export const addSenderAddress = text => ({
  type: ADD_SENDER_ADDRESS,
  payload: text
})

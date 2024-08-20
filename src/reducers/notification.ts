import * as types from 'constants/actions'

interface NotificationSetAction {
  type: typeof types.NOTIFICATION_SET
  payload: string
}

interface NotificationResetAction {
  type: typeof types.NOTIFICATION_RESET
}

type NotificationActionTypes = NotificationSetAction | NotificationResetAction;

const initialState = {}

export default function notification(state = initialState, action: NotificationActionTypes) {
  if (action.type === types.NOTIFICATION_RESET) {
    return initialState
  }

  if (action.type === types.NOTIFICATION_SET) {
    return action.payload
  }

  return state
}

import * as types from 'constants/actions'

const initialState = ''

interface SetEventTypeAction {
  type: typeof types.SET_EVENT_TYPE
  payload: string
}

type EventTypeAction = SetEventTypeAction

export default function eventTypeReducer(
  state = initialState,
  action: EventTypeAction
): string {
  if (action.type === types.SET_EVENT_TYPE) {
    return action.payload
  }

  return state
}

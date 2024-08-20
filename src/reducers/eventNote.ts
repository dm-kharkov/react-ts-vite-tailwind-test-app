import * as types from 'constants/actions'

const initialState = ''

interface SetEventNoteAction {
  type: typeof types.SET_EVENT_NOTE
  payload: string
}

type EventNoteAction = SetEventNoteAction

export default function eventTypeReducer(
  state = initialState,
  action: EventNoteAction
): string {
  if (action.type === types.SET_EVENT_NOTE) {
    return action.payload
  }

  return state
}

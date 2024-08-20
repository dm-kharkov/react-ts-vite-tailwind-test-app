import * as types from 'constants/actions'

export function setEventType(payload: string) {
  return {
    type: types.SET_EVENT_TYPE,
    payload
  }
}

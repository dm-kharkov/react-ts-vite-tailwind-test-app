import * as types from 'constants/actions';
export function setEventNote(payload) {
    return {
        type: types.SET_EVENT_NOTE,
        payload
    };
}

import * as types from 'constants/actions';
export function setEventType(payload) {
    return {
        type: types.SET_EVENT_TYPE,
        payload
    };
}

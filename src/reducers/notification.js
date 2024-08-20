import * as types from 'constants/actions';
const initialState = {};
export default function notification(state = initialState, action) {
    if (action.type === types.NOTIFICATION_RESET) {
        return initialState;
    }
    if (action.type === types.NOTIFICATION_SET) {
        return action.payload;
    }
    return state;
}

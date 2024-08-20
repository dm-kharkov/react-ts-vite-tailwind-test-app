import * as types from 'constants/actions';
const initialState = '';
export default function eventTypeReducer(state = initialState, action) {
    if (action.type === types.SET_EVENT_TYPE) {
        return action.payload;
    }
    return state;
}

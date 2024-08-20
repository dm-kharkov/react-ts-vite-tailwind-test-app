import { combineReducers } from 'redux';
import eventNote from './eventNote';
import eventType from './eventType';
import notification from './notification';
export default function createRootReducer() {
    return combineReducers({
        eventNote,
        eventType,
        notification
    });
}

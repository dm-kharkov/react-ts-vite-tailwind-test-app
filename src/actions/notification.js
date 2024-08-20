import * as types from 'constants/actions';
import { NOTIFICATION_TYPES } from 'constants/notification';
export function notify(message, type) {
    return {
        type: types.NOTIFICATION_SET,
        payload: {
            message,
            type
        }
    };
}
export function resetNotification() {
    return {
        type: types.NOTIFICATION_RESET
    };
}
export function notifySuccess(message) {
    return notify(message, NOTIFICATION_TYPES.SUCCESS);
}
export function notifyWarn(message) {
    return notify(message, NOTIFICATION_TYPES.WARNING);
}
export function notifyError(message) {
    return notify(message, NOTIFICATION_TYPES.ERROR);
}
export function notifyInfo(message) {
    return notify(message, NOTIFICATION_TYPES.INFO);
}

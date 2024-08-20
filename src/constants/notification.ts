const INFO = 'info'
const SUCCESS = 'success'
const ERROR = 'error'
const WARNING = 'yellow'

export const NOTIFICATION_TYPES = {
  INFO,
  SUCCESS,
  ERROR,
  WARNING
}

export const NOTIFICATION_COLORS = {
  [NOTIFICATION_TYPES.INFO]: 'blue',
  [NOTIFICATION_TYPES.SUCCESS]: 'green',
  [NOTIFICATION_TYPES.ERROR]: 'red',
  [NOTIFICATION_TYPES.WARNING]: 'yellow'
}

export type NotificationTypeProps = typeof INFO | typeof SUCCESS | typeof ERROR | typeof WARNING

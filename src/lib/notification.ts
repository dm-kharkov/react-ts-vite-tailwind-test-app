import {
  NOTIFICATION_COLORS,
  NotificationTypeProps
} from 'constants/notification'


export const getNotifyTypeClasses = (type: NotificationTypeProps): string => {
  const color = NOTIFICATION_COLORS[type] || 'white'

  return `text-${color}-800 border-${color}-300 bg-${color}-50 dark:text-${color}-400 dark:border-${color}-800`
}

export const getCloseButtonClasses = (type: NotificationTypeProps): string => {
  const color = NOTIFICATION_COLORS[type] || 'white'

  return `bg-${color}-50 text-${color}-500 focus:ring-${color}-400 hover:bg-${color}-200 dark:text-${color}-400`
}

import React from 'react'
import clsx from 'clsx'

import {NOTIFICATION_TYPES} from 'constants/notification'

import {
  getCloseButtonClasses,
  getNotifyTypeClasses
} from 'lib/notification'

import './styles.scss'

interface NotificationProps {
  message: string,
  onClose: () => void,
  type: any
}

const Notification: React.FC<NotificationProps> = (props) => {
  const {
    message,
    onClose,
    type = NOTIFICATION_TYPES.SUCCESS
  } = props

  const [isOpen, setOpen] = React.useState(false)

  const typeClassName = getNotifyTypeClasses(type)
  const closeButtonClasses = getCloseButtonClasses(type)

  React.useEffect(() => {
    setOpen(!!message)
  }, [message, type])

  return (
    <div
      className={clsx([
        'min-w-[400px] fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 rounded-md flex items-center p-4 mb-4 border-t-4 dark:bg-gray-800',
        {
          'notification-enter': !isOpen,
          'notification-enter-active': isOpen,
          'notification-exit': !isOpen,
          'notification-exit-active': !isOpen,
        },
        typeClassName,
      ])}
      role='alert'
    >
      <svg
        className='flex-shrink-0 w-4 h-4'
        aria-hidden='true'
        xmlns='http://www.w3.org/2000/svg'
        fill='currentColor'
        viewBox='0 0 20 20'
      >
        <path
          d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z'
        />
      </svg>

      <p className='ms-3 text-sm font-medium'>
        {message}
      </p>

      <button
        type='button'
        className={clsx([
          'ms-auto -mx-1.5 -my-1.5 rounded-lg focus:ring-2 p-1.5 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:hover:bg-gray-700',
          closeButtonClasses
        ])}
        aria-label='Close'
        onClick={() => onClose()}
      >
        <span className='sr-only'>
          Close alert
        </span>

        <svg
          className='w-3 h-3'
          aria-hidden='true'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 14 14'
        >
          <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'/>
        </svg>
      </button>
    </div>
  )
}

export default Notification

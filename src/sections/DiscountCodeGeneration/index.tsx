import React from 'react'
import clsx from 'clsx'

import {notifySuccess} from 'actions/notification'

import useDispatch from 'hooks/useDispatch'
import useSelector from 'hooks/useSelector'

const DEFAULT_LABEL = 'Generate Discount Code'

interface DiscountCodeGenerationProps {
  label?: string,
  setDiscountCode: (code: string) => void
}

const DiscountCodeGeneration: React.FC<DiscountCodeGenerationProps> = (props) => {
  const {
    label = DEFAULT_LABEL,
    setDiscountCode
  } = props

  const dispatch = useDispatch()

  const eventType = useSelector((state: any) => state.eventType)
  const isSelectedType = !eventType

  const handleClick = React.useCallback(() => {
    const randomSymbols = (Math.random() + 1).toString(36).substring(7)

    const EVENT_NAME = eventType.toUpperCase()

    const discountCode = `${EVENT_NAME}-${randomSymbols}`

    setDiscountCode(discountCode)
    dispatch(notifySuccess(`Discount Code: ${discountCode}`))
  }, [eventType])


  return (
    <button
      type='button'
      className={clsx([
        'text-white bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600',
        isSelectedType
          ? 'cursor-not-allowed opacity-50'
          : 'hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
      ])}
      disabled={isSelectedType}
      onClick={handleClick}
    >
      {label}
    </button>
  )
}

export default DiscountCodeGeneration

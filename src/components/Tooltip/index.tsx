import React, {ReactNode, ElementType} from 'react'

import useHover from 'hooks/useHover'

const DEFAULT_MESSAGE = 'Tooltip Message'

interface TooltipProps {
  children: ReactNode
  message: string
}

const Tooltip: React.FC<TooltipProps> = (props) => {
  const {children, message = DEFAULT_MESSAGE} = props

  const [hoverable, hovered] = useHover(() => (
    <div>
      {children}
    </div>
  ))

  return (
    <div className='relative inline-block'>
      {hoverable}

      {hovered && (
        <div
          className='w-[150px] absolute z-10 px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg shadow-sm'>
          {message}
          <div className='tooltip-arrow'/>
        </div>
      )}
    </div>
  )
}

export default Tooltip

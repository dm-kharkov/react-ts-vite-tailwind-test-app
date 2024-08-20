import React from 'react'

import RadioGroup from 'components/RadioGroup'
import Tooltip from 'components/Tooltip'

import {setEventType} from 'actions/eventType'

import useDispatch from 'hooks/useDispatch'

import * as options from './options'

interface EventTypeSelectGroupProps {
  title?: string
}

const EventTypeSelectGroup: React.FC<EventTypeSelectGroupProps> = (props) => {
  const {title = options.DEFAULT_TITLE} = props

  const dispatch = useDispatch()

  const handleChange = (value: string) => {
    dispatch(setEventType(value))
  }

  return (
    <div className='p-4'>
      <h1 className='text-xl font-bold mb-4'>
        {title}

        <Tooltip
          message='You can check state changes in console'
        >
          <b className='cursor-pointer hover:opacity-0.5 ml-4'>
            ℹ️
          </b>
        </Tooltip>
      </h1>

      <RadioGroup
        name=' eventTypeGroup'
        options={options.EVENT_TYPES}
        onChange={handleChange}
      />
    </div>
  )
}

export default EventTypeSelectGroup
